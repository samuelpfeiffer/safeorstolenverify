
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import { pwaService } from '@/services/pwaService';
import './index.css';

// Initialize PWA service and clean old cache on startup
pwaService.initDB().then(() => {
  pwaService.clearOldCache().catch(console.error);
}).catch(console.error);

// Register service worker for PWA capabilities (simplified)
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  navigator.serviceWorker.register('/sw.js').catch(() => {
    // Silently fail for better mobile compatibility
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
