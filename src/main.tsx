
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize security service and enhanced error handling
import { securityService } from "./services/securityService";
import { logReactEnvironment } from "./utils/reactDetection";

// Enhanced initialization with better error recovery
if (typeof window !== 'undefined') {
  securityService.initialize();
  
  // One-time reset handler (?reset=1)
  const params = new URLSearchParams(window.location.search);
  if (params.get('reset') === '1') {
    (async () => {
      try {
        if ('serviceWorker' in navigator) {
          const regs = await navigator.serviceWorker.getRegistrations();
          await Promise.all(regs.map(r => r.unregister()));
        }
        if ('caches' in window) {
          const names = await caches.keys();
          await Promise.all(names.map(n => caches.delete(n)));
        }
      } finally {
        params.delete('reset');
        const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
        window.history.replaceState({}, '', newUrl);
        window.location.reload();
      }
    })();
  }
  
  // Log React environment for debugging
  console.log('🚀 Initializing rebuilt SOS app...');
  logReactEnvironment();
  // Enhanced module loading error handling
  window.addEventListener('error', (event) => {
    if (event.message.includes('Loading chunk') || event.message.includes('dynamically imported module')) {
      console.error('Module loading error detected, implementing recovery...', event.error);
      // Clear any cached modules before reload
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          registrations.forEach(registration => registration.unregister());
        }).finally(() => window.location.reload());
      } else {
        window.location.reload();
      }
    }
  });
  
  // Ensure newest Service Worker takes control and notify app to reload (disabled when PWA is off)
  const PWA_ENABLED = false;
  if (PWA_ENABLED && 'serviceWorker' in navigator) {
    // Listen for SW reload messages
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SW_RELOAD') {
        console.log('Service Worker requested reload');
        window.location.reload();
      }
    });

    // Trigger update check
    navigator.serviceWorker.getRegistration().then((reg) => {
      reg?.update().catch(() => {/* ignore */});
    });
  }
  
  // Performance monitoring
  if ('performance' in window) {
    window.addEventListener('load', () => {
      console.log('App loaded in:', performance.now(), 'ms');
    });
  }
}


const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <App />
);
