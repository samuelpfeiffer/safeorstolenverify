import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import './index.css';

// Enhanced Service Worker registration with update handling
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('✅ Service Worker registered successfully');
        
        // Check for updates every 60 seconds
        setInterval(() => {
          registration.update();
        }, 60000);
        
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker available, show update notification
                console.log('🔄 New version available! Refresh to update.');
              }
            });
          }
        });
      })
      .catch((error) => {
        console.warn('Service Worker registration failed:', error);
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
