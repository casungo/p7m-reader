const cacheName = "p7m-reader-v7";
const sharedFileKey = "/__shared-p7m";
const localePages = [
  "/de/p7m-datei-oeffnen/",
  "/pt-br/abrir-arquivo-p7m/",
  "/id/buka-file-p7m/",
  "/vi/mo-file-p7m/",
  "/es/abrir-archivo-p7m/",
  "/ja/p7m-file-open/",
  "/it/apri-file-p7m/",
  "/pt/abrir-ficheiro-p7m/",
  "/fr/ouvrir-fichier-p7m/",
  "/nl/p7m-bestand-openen/",
  "/pl/otworz-plik-p7m/",
  "/uk/vidkryty-fail-p7m/",
  "/ru/otkryt-fail-p7m/",
];

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
      await cache.addAll([...new Set([
        "/manifest.webmanifest",
        "/icon.svg",
        "/icon-192.png",
        "/icon-512.png",
        "/icon-maskable-512.png",
        ...localePages,
        ...assets,
      ])]);
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
  const url = new URL(event.request.url);
  if (event.request.method === "POST" && url.origin === location.origin && url.pathname === "/share-target") {
    event.respondWith((async () => {
      const file = (await event.request.formData()).get("p7m");
      if (file instanceof File) {
        const headers = new Headers({ "Content-Type": file.type, "X-P7M-Name": encodeURIComponent(file.name) });
        await (await caches.open(cacheName)).put(sharedFileKey, new Response(file, { headers }));
      }
      return (await caches.match("/")) || fetch("/");
    })());
    return;
  }
  if (event.request.method !== "GET" || url.origin !== location.origin) return;
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

self.addEventListener("message", (event) => {
  if (event.data !== "take-shared-p7m") return;
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    const response = await cache.match(sharedFileKey);
    if (!response || !event.source) return;
    const bytes = await response.arrayBuffer();
    event.source.postMessage({
      type: "shared-p7m",
      bytes,
      name: decodeURIComponent(response.headers.get("X-P7M-Name") || "document.p7m"),
      mime: response.headers.get("Content-Type") || "application/pkcs7-mime",
    }, [bytes]);
    await cache.delete(sharedFileKey);
  })());
});
