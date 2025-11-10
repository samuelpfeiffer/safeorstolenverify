import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import './index.css';

console.log('[main.tsx] ✓ Application entry point loaded');
console.log('[main.tsx] → React version:', React.version);
console.log('[main.tsx] → Environment:', import.meta.env.MODE);

// One-time service worker cleanup migration
if ('serviceWorker' in navigator) {
  const SW_CLEANUP_KEY = 'sw_cleanup_done_v1';
  
  if (!localStorage.getItem(SW_CLEANUP_KEY)) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
        console.log('🗑️ Unregistered legacy service worker');
      });
      localStorage.setItem(SW_CLEANUP_KEY, 'true');
    });
  }
}

const container = document.getElementById('root');
if (!container) {
  console.error('[main.tsx] ✗ Root element not found in DOM!');
  throw new Error('Root element not found');
}

console.log('[main.tsx] ✓ Root element found, creating React root');

// Create root and render
const root = createRoot(container);
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
