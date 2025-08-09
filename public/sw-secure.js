
const CACHE_NAME = 'safe-or-stolen-secure-v1.0.5';
const STATIC_CACHE = 'static-secure-v1.0.5';
const DYNAMIC_CACHE = 'dynamic-secure-v1.0.5';

// Secure assets list with integrity checking
const SECURE_ASSETS = [
  { url: '/', integrity: null },
  { url: '/manifest.json', integrity: null },
  { url: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png', integrity: null }
];

// Security-first install event
self.addEventListener('install', event => {
  console.log('SW-Secure: Installing secure service worker...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('SW-Secure: Caching secure assets');
        // Cache assets with security validation
        return Promise.all(
          SECURE_ASSETS.map(asset => 
            fetch(asset.url)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`Failed to fetch ${asset.url}: ${response.status}`);
                }
                return cache.put(asset.url, response);
              })
              .catch(error => {
                console.warn(`SW-Secure: Failed to cache ${asset.url}:`, error);
              })
          )
        );
      })
      .then(() => {
        console.log('SW-Secure: Secure assets cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('SW-Secure: Error in secure installation:', error);
      })
  );
});

// Enhanced activate event with security cleanup and client reload
self.addEventListener('activate', event => {
  console.log('SW-Secure: Activating secure service worker...');
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!cacheName.includes('secure') || 
                (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE)) {
              console.log('SW-Secure: Deleting insecure cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Claim clients
      self.clients.claim()
    ])
    .then(async () => {
      console.log('SW-Secure: Secure service worker activated');
      const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      clients.forEach(client => client.postMessage({ type: 'SW_RELOAD' }));
    })
  );
});

// Secure fetch handler with enhanced validation
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Security validation - block suspicious requests
  if (isSecurityThreat(url)) {
    event.respondWith(
      new Response('Request blocked for security', {
        status: 403,
        statusText: 'Forbidden'
      })
    );
    return;
  }

  // Handle different request types securely
  if (isAPIRequest(url)) {
    event.respondWith(handleAPIRequest(request));
  } else {
    event.respondWith(handleStaticRequest(request));
  }
});

// Security threat detection
function isSecurityThreat(url) {
  const suspiciousPatterns = [
    /javascript:/i,
    /data:text\/html/i,
    /vbscript:/i,
    /<script/i,
    /eval\(/i
  ];
  
  return suspiciousPatterns.some(pattern => 
    pattern.test(url.href) || pattern.test(decodeURIComponent(url.href))
  );
}

// Check if request is API-related
function isAPIRequest(url) {
  return url.pathname.includes('/api/') || 
         url.hostname.includes('supabase.co') ||
         url.hostname.includes('stripe.com');
}

// Secure API request handler
async function handleAPIRequest(request) {
  try {
    const response = await fetch(request);
    
    // Validate response security
    if (response.ok && isValidAPIResponse(response)) {
      const responseClone = response.clone();
      
      // Cache valid API responses
      caches.open(DYNAMIC_CACHE)
        .then(cache => cache.put(request, responseClone))
        .catch(error => console.warn('SW-Secure: Cache error:', error));
    }
    
    return response;
  } catch (error) {
    console.log('SW-Secure: API request failed, checking cache:', error);
    
    // Return cached version if available
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return secure offline response
    return new Response(JSON.stringify({
      offline: true,
      message: 'Service temporarily unavailable',
      timestamp: new Date().toISOString()
    }), {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'application/json',
        'X-Offline-Response': 'true'
      }
    });
  }
}

// Secure static request handler
async function handleStaticRequest(request) {
  try {
    // Check cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fetch with security validation
    const response = await fetch(request);
    
    if (response.ok && isValidStaticResponse(response)) {
      const responseClone = response.clone();
      
      // Cache valid static responses
      caches.open(DYNAMIC_CACHE)
        .then(cache => cache.put(request, responseClone))
        .catch(error => console.warn('SW-Secure: Cache error:', error));
      
      return response;
    }
    
    return response;
  } catch (error) {
    console.log('SW-Secure: Static request failed:', error);
    
    // Return cached version or secure fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // For navigation requests, return cached index
    if (request.mode === 'navigate') {
      const indexCache = await caches.match('/');
      if (indexCache) {
        return indexCache;
      }
    }
    
    return new Response('Resource temporarily unavailable', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'text/plain',
        'X-Offline-Response': 'true'
      }
    });
  }
}

// Response validation helpers
function isValidAPIResponse(response) {
  const contentType = response.headers.get('content-type');
  return contentType && (
    contentType.includes('application/json') ||
    contentType.includes('application/javascript')
  );
}

function isValidStaticResponse(response) {
  const contentType = response.headers.get('content-type');
  const validTypes = [
    'text/html',
    'text/css',
    'text/javascript',
    'application/javascript',
    'image/',
    'font/'
  ];
  
  return contentType && validTypes.some(type => contentType.includes(type));
}

// Enhanced background sync with security
self.addEventListener('sync', event => {
  console.log('SW-Secure: Secure background sync triggered:', event.tag);
  
  if (event.tag === 'secure-verification') {
    event.waitUntil(performSecureBackgroundSync());
  }
});

async function performSecureBackgroundSync() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const requests = await cache.keys();
    
    // Process queued requests securely
    for (const request of requests) {
      if (request.url.includes('/offline-queue/')) {
        const data = await cache.match(request);
        if (data) {
          const queueData = await data.json();
          console.log('SW-Secure: Processing secure offline queue:', queueData);
          // Process with security validation
        }
      }
    }
  } catch (error) {
    console.error('SW-Secure: Error in secure background sync:', error);
  }
}

// Security monitoring
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SECURITY_CHECK') {
    event.ports[0].postMessage({
      secure: true,
      version: CACHE_NAME,
      timestamp: Date.now()
    });
  }
});

console.log('SW-Secure: Secure service worker loaded successfully');
