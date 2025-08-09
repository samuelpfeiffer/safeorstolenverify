
const CACHE_NAME = 'safe-or-stolen-v1.0.4';
const STATIC_CACHE = 'static-v1.0.4';
const DYNAMIC_CACHE = 'dynamic-v1.0.4';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
  '/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('SW: Installing service worker...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('SW: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('SW: Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('SW: Error caching static assets:', error);
      })
  );
});

// Activate event - clean up old caches and notify clients to reload
self.addEventListener('activate', event => {
  console.log('SW: Activating service worker...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('SW: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(async () => {
        console.log('SW: Service worker activated');
        await self.clients.claim();
        const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
        clients.forEach(client => client.postMessage({ type: 'SW_RELOAD' }));
      })
  );
});

// Fetch event - network first, then cache fallback
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle API requests differently
  if (request.url.includes('/api/') || request.url.includes('supabase.co')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Clone response for caching
          const responseClone = response.clone();
          
          if (response.ok) {
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(request, responseClone);
              });
          }
          
          return response;
        })
        .catch(() => {
          // Return cached version if available
          return caches.match(request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              
              // Return offline response for verification requests
              if (request.url.includes('verify')) {
                return new Response(JSON.stringify({
                  offline: true,
                  message: 'Verification requires internet connection'
                }), {
                  headers: { 'Content-Type': 'application/json' }
                });
              }
              
              return new Response('Offline - No cached data available', {
                status: 503,
                statusText: 'Service Unavailable'
              });
            });
        })
    );
    return;
  }

  // Handle static assets and pages
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(request)
          .then(response => {
            // Don't cache if not ok
            if (!response.ok) {
              return response;
            }
            
            const responseClone = response.clone();
            
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(request, responseClone);
              });
            
            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/');
            }
            
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  console.log('SW: Background sync triggered:', event.tag);
  
  if (event.tag === 'background-verification') {
    event.waitUntil(doBackgroundVerification());
  }
});

// Handle offline verification queue
async function doBackgroundVerification() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const offlineQueue = await cache.match('/offline-queue');
    
    if (offlineQueue) {
      const queueData = await offlineQueue.json();
      console.log('SW: Processing offline verification queue:', queueData);
      
      // Process queue items when back online
      // This would integrate with your verification API
    }
  } catch (error) {
    console.error('SW: Error processing background sync:', error);
  }
}

// Push notifications (future enhancement)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    console.log('SW: Push notification received:', data);
    
    const options = {
      body: data.body,
      icon: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
      badge: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
      vibrate: [200, 100, 200],
      data: data.data,
      actions: [
        {
          action: 'view',
          title: 'View Details'
        },
        {
          action: 'dismiss',
          title: 'Dismiss'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});
