/**
 * Service Worker for SafeOrStolen PWA
 * Enables offline functionality, caching, and improved performance
 */

const CACHE_NAME = 'safeorstolen-v3';
const RUNTIME_CACHE = 'safeorstolen-runtime-v3';

// Critical assets to cache immediately
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
];

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Precaching critical assets');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches and force immediate update
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker v3 - Force clearing ALL caches...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        // DELETE ALL CACHES to force fresh content
        return Promise.all(
          cacheNames.map(cacheName => {
            console.log('[SW] Force deleting cache:', cacheName);
            return caches.delete(cacheName);
          })
        );
      })
      .then(() => {
        console.log('[SW] All caches cleared. Taking control immediately.');
        return self.clients.claim();
      })
      .then(() => {
        // Refresh all clients to load fresh content
        return self.clients.matchAll({ type: 'window' });
      })
      .then(clients => {
        clients.forEach(client => {
          console.log('[SW] Reloading client:', client.url);
          client.postMessage({ type: 'RELOAD' });
        });
      })
  );
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Skip API calls (always fetch fresh)
  if (url.pathname.startsWith('/api/') || url.pathname.includes('supabase')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // Return cached response if available
        if (cachedResponse) {
          // Update cache in background
          fetch(request)
            .then(response => {
              if (response && response.status === 200) {
                caches.open(RUNTIME_CACHE)
                  .then(cache => cache.put(request, response.clone()));
              }
            })
            .catch(() => {
              // Network error, cached response already returned
            });
          
          return cachedResponse;
        }

        // Fetch from network and cache
        return fetch(request)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Clone response to cache
            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE)
              .then(cache => {
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Network error and no cache - return offline page
            if (request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Message event - handle commands from client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => {
        event.ports[0].postMessage({ success: true });
      });
  }
});

// Push notification event (for future use)
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'SafeOrStolen Alert';
  const options = {
    body: data.body || 'You have a new verification alert',
    icon: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
    badge: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
    vibrate: [200, 100, 200],
    data: data.url || '/',
    actions: [
      { action: 'open', title: 'View' },
      { action: 'close', title: 'Dismiss' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    const urlToOpen = event.notification.data || '/';
    
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then(windowClients => {
          // Check if there's already a window open
          for (let client of windowClients) {
            if (client.url === urlToOpen && 'focus' in client) {
              return client.focus();
            }
          }
          // Open new window
          if (clients.openWindow) {
            return clients.openWindow(urlToOpen);
          }
        })
    );
  }
});
