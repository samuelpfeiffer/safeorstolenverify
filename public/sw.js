// Minimal kill-switch Service Worker
// Version bump to force update
const VERSION = '1.0.6-kill';

self.addEventListener('install', (event) => {
  // Immediately activate this SW
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const names = await caches.keys();
      await Promise.all(names.map((n) => caches.delete(n)));
    } catch (e) {
      // ignore
    }
    await self.clients.claim();
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    clients.forEach((client) => client.postMessage({ type: 'SW_RELOAD' }));
  })());
});

// Do not intercept any requests while PWA is disabled
self.addEventListener('fetch', () => {
  // No-op: let the network handle everything
});
