// CHAMPIONSHIP CACHE BUSTING VERSION 2.0
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import './index.css';

// CRITICAL: Force cache invalidation
console.log('🚀 CHAMPIONSHIP APP LOADING - Version 2.0');

// Verify React is available
if (typeof React === 'undefined') {
  throw new Error('React not available - critical failure');
}

// Initialize basic PWA features only
const initializeBasicPWA = async () => {
  try {
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.register('/sw-secure.js');
      console.log('✅ Service Worker registered');
    }
  } catch (error) {
    console.warn('⚠️ PWA features unavailable:', error);
  }
};

// DOM and app initialization
const initializeApp = () => {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error('Root element not found');
  }

  const root = createRoot(container);
  
  try {
    root.render(
      <React.StrictMode>
        <AppRoot />
      </React.StrictMode>
    );
    console.log('✅ App rendered successfully');
  } catch (error) {
    console.error('❌ App render failed:', error);
    container.innerHTML = `
      <div style="min-height:100vh;background:#1a1a1a;color:white;display:flex;align-items:center;justify-content:center;font-family:system-ui">
        <div style="text-align:center;padding:2rem">
          <h1>Application Error</h1>
          <p>Please refresh the page</p>
          <button onclick="window.location.reload()" style="margin-top:1rem;padding:0.5rem 1rem;background:#ff6b35;color:white;border:none;border-radius:4px;cursor:pointer">
            Refresh
          </button>
        </div>
      </div>
    `;
  }
};

// Initialize everything
initializeBasicPWA();
initializeApp();