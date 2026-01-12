/**
 * Service Worker for SafeOrStolen PWA
 * Enables offline functionality, caching, and improved performance
 * v6 - Aggressive cache clearing, auto-update on activation
 */

const CACHE_VERSION = '6';
const CACHE_NAME = `safeorstolen-v${CACHE_VERSION}`;
const RUNTIME_CACHE = `safeorstolen-runtime-v${CACHE_VERSION}`;

// Critical assets to cache immediately
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
];

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker v5...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Precaching critical assets');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - AGGRESSIVELY clean up ALL old caches and take control immediately
self.addEventListener('activate', (event) => {
  console.log(`[SW] Activating service worker v${CACHE_VERSION}...`);
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        console.log('[SW] Found caches:', cacheNames);
        return Promise.all(
          cacheNames.map(cacheName => {
            // Delete ANY cache that doesn't match our current version
            if (!cacheName.includes(`v${CACHE_VERSION}`)) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return Promise.resolve();
          })
        );
      })
      .then(() => {
        console.log('[SW] Activation complete, claiming all clients.');
        return self.clients.claim();
      })
      .then(() => {
        // Notify all clients to reload for fresh content
        return self.clients.matchAll({ type: 'window' }).then(clients => {
          clients.forEach(client => {
            client.postMessage({ type: 'SW_ACTIVATED', version: CACHE_VERSION });
          });
        });
      })
  );
});

// Fetch event - Network-first for navigation, cache-first for static assets
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

  // Skip API calls
  if (url.pathname.startsWith('/api/') || url.pathname.includes('supabase')) {
    return;
  }

  // NETWORK FIRST for navigation requests (HTML documents)
  // This ensures users always get the latest version
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache the fresh response
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE)
              .then(cache => cache.put(request, responseToCache));
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match('/index.html');
        })
    );
    return;
  }

  // NEVER cache JavaScript files - let them load fresh always
  if (url.pathname.endsWith('.js') || 
      url.pathname.endsWith('.jsx') || 
      url.pathname.endsWith('.ts') || 
      url.pathname.endsWith('.tsx')) {
    return;
  }

  // CACHE FIRST for static assets (images, CSS, fonts)
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Update cache in background
          fetch(request)
            .then(response => {
              if (response && response.status === 200) {
                caches.open(RUNTIME_CACHE)
                  .then(cache => cache.put(request, response.clone()));
              }
            })
            .catch(() => {});
          
          return cachedResponse;
        }

        // Fetch from network and cache
        return fetch(request)
          .then(response => {
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE)
              .then(cache => cache.put(request, responseToCache));

            return response;
          })
          .catch(() => {
            // Network error and no cache
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
