import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import { logVersionInfo } from '@/config/version';
import './index.css';

// Log app version and build info
logVersionInfo();

console.log('[main.tsx] ✓ Application entry point loaded');
console.log('[main.tsx] → React version:', React.version);
console.log('[main.tsx] → Environment:', import.meta.env.MODE);

// Nuclear cache cleanup on every app load
const clearAllCaches = async () => {
  try {
    console.log('[main.tsx] 🧹 Starting aggressive cache cleanup...');
    
    // Clear all service workers
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      if (registrations.length > 0) {
        await Promise.all(registrations.map(reg => reg.unregister()));
        console.log('[main.tsx] ✅ Cleared service workers');
      }
    }
    
    // Clear all browser caches
    if ('caches' in window) {
      const names = await caches.keys();
      if (names.length > 0) {
        await Promise.all(names.map(name => caches.delete(name)));
        console.log('[main.tsx] ✅ Cleared all caches');
      }
    }
    
    // Version-based storage cleanup
    const APP_VERSION = `v${Date.now()}`;
    const storedVersion = localStorage.getItem('app_version');
    
    if (storedVersion !== APP_VERSION) {
      const preservedKeys = ['supabase.auth.token', 'sb-auth-token'];
      const toRestore: Record<string, string> = {};
      
      // Preserve auth tokens
      preservedKeys.forEach(key => {
        const value = localStorage.getItem(key);
        if (value) toRestore[key] = value;
      });
      
      // Clear storage
      localStorage.clear();
      sessionStorage.clear();
      
      // Restore auth tokens
      Object.entries(toRestore).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });
      
      localStorage.setItem('app_version', APP_VERSION);
      console.log('[main.tsx] ✅ Cleared storage (preserved auth)');
    }
    
    console.log('[main.tsx] ✅ Cache cleanup complete');
  } catch (err) {
    console.error('[main.tsx] ⚠️ Cache cleanup failed:', err);
    // Continue loading app even if cleanup fails
  }
};

const container = document.getElementById('root');
if (!container) {
  console.error('[main.tsx] ✗ Root element not found in DOM!');
  throw new Error('Root element not found');
}

console.log('[main.tsx] ✓ Root element found, creating React root');

// Create root at module scope for HMR
let root = createRoot(container);

// Clear caches then render app
clearAllCaches().then(() => {
  console.log('[main.tsx] → Rendering AppRoot component');
  root.render(<AppRoot />);
  
  console.log('[main.tsx] ✓ Initial render complete - React is now in control');
  
  // Add global mount indicator
  setTimeout(() => {
    if (container.querySelector('[data-react-mounted]') === null) {
      container.setAttribute('data-react-mounted', 'true');
      console.log('[main.tsx] ✓ React successfully mounted to DOM');
    }
  }, 100);
}).catch(err => {
  console.error('[main.tsx] ✗ Failed to initialize app:', err);
  // Fallback: render anyway
  root.render(<AppRoot />);
});

// HMR: Properly handle hot updates to prevent React context issues
if (import.meta.hot) {
  let currentRoot = root;
  
  import.meta.hot.accept('./core/app/AppRoot', (newModule) => {
    if (newModule) {
      // Unmount old root completely
      currentRoot.unmount();
      
      // Create fresh React root with clean context
      const container = document.getElementById('root');
      if (!container) throw new Error('Root element not found');
      
      currentRoot = createRoot(container);
      currentRoot.render(<AppRoot />);
    }
  });
  
  // Prevent DevTools from interfering with HMR
  (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ || {
    supportsFiber: true,
    inject: () => {},
    onCommitFiberRoot: () => {},
    onCommitFiberUnmount: () => {},
  };
}
