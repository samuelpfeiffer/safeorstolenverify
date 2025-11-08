import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import './index.css';

// Service Worker DISABLED temporarily to fix black screen issue
// Unregister any existing service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
      console.log('🗑️ Unregistered service worker');
    });
  });
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

// Create root and render
const root = createRoot(container);
root.render(<AppRoot />);

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
