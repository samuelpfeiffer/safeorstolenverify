
const CACHE_NAME = 'safeorstolen-v1';
const urlsToCache = [
  // Only cache manifest and essential assets; avoid caching '/' to prevent stale HTML for crawlers
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;

  // Network-first for navigation requests (prevents soft 404 from stale cached HTML)
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('/'))
    );
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(req).then(response => response || fetch(req))
  );
});
