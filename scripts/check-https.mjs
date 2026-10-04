import { locales } from "../src/i18n.ts";
import { site } from "../src/site.ts";

// Read-only production check. Kept separate from the offline/local build gate.
const cases = [
  ...locales.map(({ path }) => ({ path, status: 200 })),
  { path: "/fr/ouvrir-fichier-p7m/?utm_source=seo-check&example=1", status: 200 },
  { path: "/seo-https-check-missing/", status: 404 },
];
const results = [];
for (const batch of Array.from({ length: Math.ceil(cases.length / 4) }, (_, i) => cases.slice(i * 4, i * 4 + 4))) {
  results.push(...await Promise.all(batch.map(async ({ path, status }) => {
    const https = new URL(path, site).href;
    const http = https.replace(/^https:/, "http:");
    try {
      const source = await fetch(http, { redirect: "manual", signal: AbortSignal.timeout(10000) });
      const location = source.headers.get("location");
      await source.body?.cancel();
      const target = await fetch(https, { redirect: "manual", signal: AbortSignal.timeout(10000) });
      await target.body?.cancel();
      return {
        http, status: source.status, location, httpsStatus: target.status,
        ok: [301, 308].includes(source.status) && location === https && target.status === status,
      };
    } catch (error) {
      return { http, ok: false, error: error.message };
    }
  })));
}
console.log(JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2));
if (results.some(({ ok }) => !ok)) process.exitCode = 1;
