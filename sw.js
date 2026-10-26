// The app moved to /portfel/. This worker removes itself and its cache.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith("karty-")) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll()) c.navigate("https://rsaniewski-jpg.github.io/portfel/");
})()));
