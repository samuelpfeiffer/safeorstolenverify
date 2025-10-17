
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import './index.css';

// HMR Error Recovery - Aggressive reload on React context corruption
if (import.meta.env.DEV) {
  let errorCount = 0;
  const MAX_ERRORS = 2;
  
  window.addEventListener('error', (event) => {
    const errorPatterns = [
      'useState',
      'useEffect',
      'useContext',
      'useReducer',
      'useCallback',
      'useMemo',
      'useRef',
      'Cannot read properties of null',
      'Cannot read properties of undefined',
      'Hook',
      'Invalid hook call'
    ];
    
    const isReactError = errorPatterns.some(pattern => 
      event.message?.includes(pattern) || event.error?.message?.includes(pattern)
    );
    
    if (isReactError) {
      errorCount++;
      console.warn(`HMR error detected (${errorCount}/${MAX_ERRORS}):`, event.message);
      
      if (errorCount >= MAX_ERRORS) {
        console.warn('Multiple HMR errors detected, forcing reload...');
        // Clear all cached modules and state
        if (import.meta.hot) {
          import.meta.hot.invalidate();
        }
        sessionStorage.clear();
        window.location.reload();
      } else {
        // First error - try soft recovery
        setTimeout(() => {
          errorCount = Math.max(0, errorCount - 1);
        }, 3000);
      }
    }
  });
  
  // Also catch unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const message = event.reason?.message || String(event.reason);
    if (message.includes('Hook') || message.includes('useState') || message.includes('useEffect')) {
      console.warn('HMR promise rejection detected, reloading...');
      window.location.reload();
    }
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
