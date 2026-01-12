/**
 * Service Worker Reset Utility
 * Forces complete cache clearing and SW re-registration
 */

export const forceServiceWorkerReset = async (): Promise<void> => {
  console.log('[SW Reset] Starting complete service worker reset...');
  
  try {
    // Unregister all service workers
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      console.log(`[SW Reset] Found ${registrations.length} service worker(s) to unregister`);
      
      await Promise.all(
        registrations.map(async (registration) => {
          const success = await registration.unregister();
          console.log(`[SW Reset] Unregistered SW: ${success}`);
          return success;
        })
      );
    }
    
    // Clear all caches
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      console.log(`[SW Reset] Found ${cacheNames.length} cache(s) to delete`);
      
      await Promise.all(
        cacheNames.map(async (cacheName) => {
          const success = await caches.delete(cacheName);
          console.log(`[SW Reset] Deleted cache "${cacheName}": ${success}`);
          return success;
        })
      );
    }
    
    console.log('[SW Reset] Complete! Reloading page...');
    
    // Force reload bypassing cache
    window.location.reload();
  } catch (error) {
    console.error('[SW Reset] Error during reset:', error);
    // Still try to reload
    window.location.reload();
  }
};

/**
 * Check if a new service worker is available
 */
export const checkForServiceWorkerUpdate = async (): Promise<boolean> => {
  if (!('serviceWorker' in navigator)) return false;
  
  try {
    const registration = await navigator.serviceWorker.ready;
    await registration.update();
    return registration.waiting !== null;
  } catch {
    return false;
  }
};
