import { locales } from "../i18n.ts";
import { site } from "../site.ts";

export const prerender = true;

export function GET() {
  const alternates = locales
    .map(({ code, path }) => `<xhtml:link rel="alternate" hreflang="${code}" href="${site}${path}"/>`)
    .join("");
  const urls = locales.map(({ path }) =>
    `<url><loc>${site}${path}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${site}/"/></url>`
  ).join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
