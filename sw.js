/* OCHE service worker — installability only.
 * Never cache JS/CSS chunks or HTML documents (stale caches have broken deploys).
 * Navigations: network-only, with an offline fallback solely when the network fails.
 * HTTP 404 is not a failure: GitHub Pages serves /salle/* via 404.html.
 * Cross-origin (Supabase) and non-GET requests are left untouched.
 */
const OFFLINE_CACHE = "oche-offline-v1";
const OFFLINE_URL = "/hors-ligne.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(OFFLINE_CACHE);
      await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => key !== OFFLINE_CACHE).map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          return await fetch(request);
        } catch {
          const cache = await caches.open(OFFLINE_CACHE);
          const fallback = await cache.match(OFFLINE_URL);
          return (
            fallback ||
            new Response("Hors ligne", {
              status: 503,
              headers: { "Content-Type": "text/html; charset=utf-8" },
            })
          );
        }
      })()
    );
    return;
  }

  // Assets, manifest, etc.: network only, no cache.
  event.respondWith(fetch(request));
});
