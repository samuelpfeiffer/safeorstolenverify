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
  import.meta.hot.accept('./core/app/AppRoot', () => {
    // Re-render with the updated AppRoot
    root.render(<AppRoot />);
  });
}
