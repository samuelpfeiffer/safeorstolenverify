import React, { memo } from 'react';
import { withLazyLoading } from './LazyLoader';

// Create lazy-loaded versions of heavy components
export const LazyPricingPage = withLazyLoading(
  () => import('@/pages/PricingPage'),
  <div className="min-h-screen bg-sos flex items-center justify-center">
    <div className="text-white">Loading pricing...</div>
  </div>
);

export const LazyDashboardPage = withLazyLoading(
  () => import('@/pages/DashboardPage'),
  <div className="min-h-screen bg-sos flex items-center justify-center">
    <div className="text-white">Loading dashboard...</div>
  </div>
);

// Bundle analyzer component for development
export const BundleAnalyzer = memo(() => {
  if (import.meta.env.PROD) return null;

  const analyzeBundles = () => {
    const scripts = document.querySelectorAll('script[src]');
    const styles = document.querySelectorAll('link[rel="stylesheet"]');
    
    console.group('📦 Bundle Analysis');
    console.log(`Scripts loaded: ${scripts.length}`);
    console.log(`Stylesheets loaded: ${styles.length}`);
    
    scripts.forEach((script, index) => {
      const src = (script as HTMLScriptElement).src;
      if (src) {
        console.log(`Script ${index + 1}: ${src.split('/').pop()}`);
      }
    });
    
    styles.forEach((style, index) => {
      const href = (style as HTMLLinkElement).href;
      if (href) {
        console.log(`Stylesheet ${index + 1}: ${href.split('/').pop()}`);
      }
    });
    
    console.groupEnd();
  };

  React.useEffect(() => {
    // Analyze bundles on load
    setTimeout(analyzeBundles, 2000);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 opacity-20 hover:opacity-100 transition-opacity">
      <button
        onClick={analyzeBundles}
        className="bg-gray-800 text-white p-2 rounded-[0.25rem] text-xs"
      >
        📦 Analyze
      </button>
    </div>
  );
});

BundleAnalyzer.displayName = 'BundleAnalyzer';