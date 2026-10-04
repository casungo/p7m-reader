import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { locales } from "../src/i18n.ts";
import { site } from "../src/site.ts";

const read = (path) => readFileSync(join("dist", path), "utf8");
const decode = (text) => text.replace(/&(?:amp|quot|#39|lt|gt);/g, (entity) => ({
  "&amp;": "&", "&quot;": '"', "&#39;": "'", "&lt;": "<", "&gt;": ">",
})[entity]);
const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]),
);
const expectedUrls = locales.map(({ path }) => `${site}${path}`);
const sitemap = read("sitemap.xml");
const sitemapEntries = [...sitemap.matchAll(/<url>(.*?)<\/url>/gs)].map(([, entry]) => entry);
assert.deepEqual(sitemapEntries.map((entry) => entry.match(/<loc>(.*?)<\/loc>/)[1]).sort(), [...expectedUrls].sort());
assert.ok(read("robots.txt").includes(`Sitemap: ${site}/sitemap.xml`));
const hosting = JSON.parse(readFileSync("wrangler.jsonc", "utf8"));
assert.ok(hosting.routes.some(({ pattern, custom_domain }) => pattern === new URL(site).hostname && custom_domain));
assert.equal(hosting.assets.not_found_handling, "404-page");

for (const locale of locales) {
  const url = `${site}${locale.path}`;
  const html = read(`${locale.path.slice(1)}index.html`);
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag));
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
  const getMeta = (name) => {
    const matches = meta.filter((item) => item.name === name || item.property === name);
    assert.equal(matches.length, 1, `${locale.code}: ${name}`);
    return matches[0].content;
  };
  assert.equal(attributes(html.match(/<html\b[^>]*>/)[0]).lang, locale.code);
  const canonical = links.filter(({ rel }) => rel === "canonical");
  assert.equal(canonical.length, 1);
  assert.equal(canonical[0].href, url);
  assert.equal(decode(html.match(/<title>(.*?)<\/title>/s)[1]), locale.copy.metaTitle);
  assert.equal(getMeta("description"), locale.copy.metaDescription);
  assert.ok(!getMeta("robots").includes("noindex"));
  assert.equal(getMeta("og:url"), url);
  assert.equal(getMeta("og:locale"), locale.ogLocale);
  assert.equal(getMeta("og:title"), locale.copy.metaTitle);
  assert.equal(getMeta("og:description"), locale.copy.metaDescription);
  assert.equal(getMeta("og:image:type"), "image/png");
  assert.equal(getMeta("twitter:card"), "summary_large_image");
  assert.equal(getMeta("twitter:image"), getMeta("og:image"));
  assert.ok(getMeta("og:image:alt"));
  const image = new URL(getMeta("og:image"));
  assert.equal(image.origin, site);
  const png = readFileSync(join("dist", image.pathname));
  assert.equal(png.readUInt32BE(16), Number(getMeta("og:image:width")));
  assert.equal(png.readUInt32BE(20), Number(getMeta("og:image:height")));

  const alternates = links.filter(({ rel }) => rel === "alternate");
  assert.equal(alternates.length, locales.length + 1);
  const entry = sitemapEntries.find((entry) => entry.includes(`<loc>${url}</loc>`));
  for (const alternate of [...locales, { code: "x-default", path: "/" }]) {
    assert.equal(alternates.filter(({ hreflang }) => hreflang === alternate.code).length, 1);
    assert.equal(alternates.find(({ hreflang }) => hreflang === alternate.code).href, `${site}${alternate.path}`);
    assert.ok(entry.includes(`hreflang="${alternate.code}" href="${site}${alternate.path}"`));
  }

  const jsonScripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
  assert.equal(jsonScripts.length, 1);
  const data = JSON.parse(jsonScripts[0][1]);
  assert.equal(data["@context"], "https://schema.org");
  const page = data["@graph"].find((node) => node["@type"] === "WebPage");
  const app = data["@graph"].find((node) => node["@type"] === "WebApplication");
  const faq = data["@graph"].find((node) => node["@type"] === "FAQPage");
  assert.equal(page.url, url);
  assert.equal(page.inLanguage, locale.code);
  assert.equal(page.description, locale.copy.metaDescription);
  assert.equal(app.offers.price, "0");
  assert.ok(app.isAccessibleForFree);
  assert.deepEqual(app.inLanguage, locales.map(({ code }) => code));
  assert.equal(faq.mainEntity.length, locale.copy.faqs.length);

  // Check visible HTML, excluding JSON, JavaScript and templates used after opening a file.
  const body = html.match(/<body\b[^>]*>(.*?)<\/body>/s)[1]
    .replace(/<(script|template)\b[^>]*>.*?<\/\1>/gs, "");
  assert.equal((body.match(/<h1\b/g) ?? []).length, 1);
  assert.ok(decode(body).includes(locale.copy.heroTitle));
  assert.ok(decode(body).includes(locale.copy.intro));
  for (const [index, { question, answer }] of locale.copy.faqs.entries()) {
    assert.equal(faq.mainEntity[index].name, question);
    assert.equal(faq.mainEntity[index].acceptedAnswer.text, answer);
    assert.ok(decode(body).includes(question), `${locale.code}: missing visible question`);
    assert.ok(decode(body).includes(answer), `${locale.code}: missing visible answer`);
  }
  for (const step of locale.copy.steps) {
    for (const part of step.split("|")) assert.ok(decode(body).includes(part), `${locale.code}: missing visible instruction`);
  }
  for (const [tag] of body.matchAll(/<a\b[^>]*>/g)) {
    const href = attributes(tag).href;
    if (!href) continue;
    const target = new URL(href, url);
    if (target.hostname === new URL(site).hostname) assert.equal(target.protocol, "https:", `${locale.code}: HTTP navigation link`);
  }
  for (const alternate of locales) assert.ok(body.includes(`href="${alternate.path}"`));
}

const errorPage = read("404.html");
assert.match(errorPage, /name="robots" content="noindex,follow"/);
assert.ok(!sitemap.includes(`${site}/404`));
const htmlPaths = (directory = "") => readdirSync(join("dist", directory), { withFileTypes: true })
  .flatMap((entry) => entry.isDirectory() ? htmlPaths(join(directory, entry.name))
    : entry.name.endsWith(".html") ? [join(directory, entry.name)] : []);
assert.deepEqual(htmlPaths().sort(), ["404.html", ...locales.map(({ path }) => `${path.slice(1)}index.html`)].sort());
console.log(`SEO checks passed for ${locales.length} canonical pages, social assets and the noindex 404 page.`);
