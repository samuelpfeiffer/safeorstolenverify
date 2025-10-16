
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import './index.css';

// Defer PWA initialization to avoid blocking
setTimeout(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}, 3000);

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);

// Conditionally use StrictMode to prevent HMR context errors in development
const isDev = import.meta.env.DEV;
root.render(
  isDev ? (
    <AppRoot />
  ) : (
    <React.StrictMode>
      <AppRoot />
    </React.StrictMode>
  )
);
