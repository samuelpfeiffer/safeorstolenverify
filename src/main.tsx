import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import './index.css';

console.log('🚀 SafeOrStolen');
console.log(`Version: ${import.meta.env.MODE}-${Date.now()}`);
console.log(`Build Time: ${new Date().toISOString()}`);

console.log('[main.tsx] ✓ Application entry point loaded');
console.log('[main.tsx] → React version:', React.version);
console.log('[main.tsx] → Environment:', import.meta.env.MODE);

// Light cache cleanup - only clears old versions
const clearOldCaches = async () => {
  try {
    if ('caches' in window) {
      const names = await caches.keys();
      const oldCaches = names.filter(n => !n.includes('v2'));
      await Promise.all(oldCaches.map(name => caches.delete(name)));
    }
  } catch (err) {
    console.error('[main.tsx] Cache cleanup error:', err);
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

// Render app
clearOldCaches();
console.log('[main.tsx] → Rendering AppRoot component');
root.render(<AppRoot />);
console.log('[main.tsx] ✓ Initial render complete - React is now in control');

container.setAttribute('data-react-mounted', 'true');
console.log('[main.tsx] ✓ React successfully mounted to DOM');

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
