
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import { pwaService } from '@/services/pwaService';
import './index.css';

// Initialize PWA service and clean old cache on startup
pwaService.initDB().then(() => {
  pwaService.clearOldCache().catch(console.error);
}).catch(console.error);

// Register secure service worker for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw-secure.js')
      .then((registration) => {
        console.log('Secure SW registered: ', registration);
        
        // Enhanced mobile performance
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          if (connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')) {
            // Enable aggressive caching for slow connections
            registration.update();
          }
        }
      })
      .catch((registrationError) => {
        console.log('Secure SW registration failed: ', registrationError);
      });
  });
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>
);
