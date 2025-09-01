
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import { pwaService } from '@/services/pwaService';
import { performanceOptimizer } from '@/utils/performanceOptimizer';
import { seoOptimizer } from '@/utils/seoOptimizer';
import './index.css';

// Initialize performance optimizations
performanceOptimizer.preloadCriticalResources();
performanceOptimizer.optimizeCSSDelivery();
seoOptimizer.optimizeImages();

// Initialize PWA service and clean old cache on startup
pwaService.initDB().then(() => {
  pwaService.clearOldCache().catch(() => {
    // Silently handle cache cleanup errors
  });
}).catch(() => {
  // Silently handle PWA initialization errors
});

// Register service worker for PWA capabilities
if ('serviceWorker' in navigator) {
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
