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

// CRITICAL: Create root once and reuse to prevent HMR issues
const root = createRoot(container);

// Render without StrictMode to prevent HMR crashes
root.render(<AppRoot />);
