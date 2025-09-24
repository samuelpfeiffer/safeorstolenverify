
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from '@/core/app/AppRoot';
import { pwaService } from '@/services/pwaService';
import { initPerformanceMonitoring } from '@/utils/seo/performanceOptimizer';
import { initEnhancedAnalytics } from '@/utils/seo/analyticsOptimizer';
import { ComprehensiveSEOTracker } from '@/components/seo/ComprehensiveSEOTracker';
import { ABTestingFramework } from '@/components/seo/ABTestingFramework';
import { OutboundLinkTracker } from '@/components/seo/OutboundLinkTracker';
import { SEOHealthMonitor } from '@/components/seo/SEOHealthMonitor';
import './index.css';

// Initialize comprehensive SEO tracking system
initPerformanceMonitoring();
initEnhancedAnalytics();

// Initialize PWA service and clean old cache on startup
pwaService.initDB().then(() => {
  pwaService.clearOldCache().catch(() => {
    // Silent fail for better UX
  });
}).catch(() => {
  // Silent fail for better UX
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
    <ComprehensiveSEOTracker />
    <OutboundLinkTracker />
  </React.StrictMode>
);
