// The previous Gatsby site registered a caching service worker at /sw.js.
// This replacement clears its caches, unregisters itself and reloads open tabs
// so returning visitors get the current site. Safe to delete once old installs have aged out.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const windows = await self.clients.matchAll({ type: 'window' });
      windows.forEach((client) => client.navigate(client.url));
    })(),
  );
});
