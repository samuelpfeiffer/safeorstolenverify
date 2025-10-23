
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import './index.css';

// HMR Error Recovery - Immediate reload on React context corruption
if (import.meta.env.DEV) {
  // Verify React is available at startup
  if (!React || typeof React.useState !== 'function') {
    console.error('React not properly loaded, reloading...');
    sessionStorage.setItem('hmr-reload-count', String(Number(sessionStorage.getItem('hmr-reload-count') || '0') + 1));
    
    // Prevent infinite reload loop
    if (Number(sessionStorage.getItem('hmr-reload-count')) < 3) {
      window.location.reload();
    } else {
      sessionStorage.removeItem('hmr-reload-count');
      alert('React failed to load properly. Please refresh the page manually.');
    }
  }
  
  window.addEventListener('error', (event) => {
    const isReactHookError = 
      event.message?.includes('useState') ||
      event.message?.includes('useEffect') ||
      event.message?.includes('useContext') ||
      event.message?.includes('Cannot read properties of null') ||
      event.message?.includes('Invalid hook call') ||
      event.error?.message?.includes('useState') ||
      event.error?.message?.includes('reading \'useState\'');
    
    if (isReactHookError) {
      console.error('Critical React error detected:', event.message);
      console.warn('Forcing immediate reload to recover from HMR corruption...');
      
      // Clear any corrupted state
      sessionStorage.clear();
      localStorage.removeItem('vite-plugin-react-hmr');
      
      // Force hard reload
      window.location.href = window.location.href;
      event.preventDefault();
      return false;
    }
  });
  
  // Also catch unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const message = event.reason?.message || String(event.reason);
    if (message.includes('Hook') || message.includes('useState') || message.includes('useEffect')) {
      console.warn('HMR promise rejection detected, forcing hard reload...');
      sessionStorage.clear();
      window.location.href = window.location.href;
    }
  });
  
  // Clear reload count on successful load
  window.addEventListener('load', () => {
    setTimeout(() => {
      sessionStorage.removeItem('hmr-reload-count');
    }, 1000);
  });
}

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
