/* network-first: vždy skúsi sieť (čerstvá verzia), cache len ako záloha offline */
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;            // Firebase ide priamo
  e.respondWith(
    fetch(e.request).then(r => {
      const c = r.clone(); caches.open("k167").then(x => x.put(e.request, c)); return r;
    }).catch(() => caches.match(e.request))
  );
});
