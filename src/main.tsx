import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import './index.css';

// Service Worker registration - deferred
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
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
