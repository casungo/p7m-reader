const cacheName = "apri-p7m-v3";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then(async (cache) => {
      const page = await fetch("/");
      const html = await page.clone().text();
      const assets = [
        ...html.matchAll(/(?:src|href)="(\/[^"]+)"/g),
        ...html.matchAll(/new URL\("(\/[^"]+)"/g),
      ].map((match) => match[1]);
      await cache.put("/", page);
      await cache.addAll([...new Set(["/manifest.webmanifest", "/icon.svg", ...assets])]);
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(cacheName).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});
