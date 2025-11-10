// Nuclear option: Unregister ALL service workers and clear ALL caches
// This runs BEFORE the main app loads to ensure fresh code

(function() {
  'use strict';
  
  console.log('[sw-unregister] 🧹 Starting aggressive cache cleanup...');
  
  // Unregister ALL service workers
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      if (registrations.length > 0) {
        console.log(`[sw-unregister] Found ${registrations.length} service worker(s), unregistering...`);
        registrations.forEach(function(registration) {
          registration.unregister().then(function() {
            console.log('[sw-unregister] ✅ Service worker unregistered');
          });
        });
      } else {
        console.log('[sw-unregister] ✓ No service workers to unregister');
      }
    }).catch(function(err) {
      console.error('[sw-unregister] Error unregistering service workers:', err);
    });
  }
  
  // Delete ALL caches
  if ('caches' in window) {
    caches.keys().then(function(cacheNames) {
      if (cacheNames.length > 0) {
        console.log(`[sw-unregister] Found ${cacheNames.length} cache(s), deleting...`);
        return Promise.all(
          cacheNames.map(function(cacheName) {
            return caches.delete(cacheName).then(function() {
              console.log('[sw-unregister] ✅ Deleted cache:', cacheName);
            });
          })
        );
      } else {
        console.log('[sw-unregister] ✓ No caches to delete');
      }
    }).catch(function(err) {
      console.error('[sw-unregister] Error deleting caches:', err);
    });
  }
  
  console.log('[sw-unregister] ✅ Cleanup complete - fresh app will load');
})();
