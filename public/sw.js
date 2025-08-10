
// Service Worker Disabled - Clear all caches
console.log('SW: Service worker disabled, clearing all caches...');

self.addEventListener('install', event => {
  console.log('SW: Installing - clearing caches');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          console.log('SW: Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      console.log('SW: All caches cleared');
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', event => {
  console.log('SW: Activating - taking control');
  event.waitUntil(self.clients.claim());
});

// Pass through all requests without caching
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
