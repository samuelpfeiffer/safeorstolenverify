
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import { pwaService } from '@/services/pwaService';
import './index.css';

// Initialize PWA service with robust error handling
const initializePWA = async () => {
  try {
    await pwaService.initDB();
    await pwaService.clearOldCache();
    console.log('PWA services initialized successfully');
  } catch (error) {
    console.warn('PWA service initialization failed, continuing without PWA features:', error);
  }
};

// Initialize PWA
initializePWA();

// Register service worker for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw-secure.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
        
        // Mobile performance optimization
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          if (connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')) {
            registration.update();
          }
        }
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
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
