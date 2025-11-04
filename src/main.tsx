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

// CRITICAL: Prevent HMR from breaking React context
let root: ReturnType<typeof createRoot> | null = null;

function renderApp() {
  if (!root) {
    root = createRoot(container!);
  }
  root.render(<AppRoot />);
}

// Initial render
renderApp();

// Accept HMR updates without breaking React
if (import.meta.hot) {
  import.meta.hot.accept('./core/app/AppRoot', () => {
    renderApp();
  });
}
