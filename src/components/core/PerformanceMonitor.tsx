import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    let observer: PerformanceObserver | null = null;
    let loadHandler: (() => void) | null = null;

    // Simple performance monitoring without external dependencies
    if ('PerformanceObserver' in window) {
      observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const metrics = {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              firstPaint: navEntry.responseEnd - navEntry.requestStart
            };
            
            // Only log in development
            if (process.env.NODE_ENV === 'development') {
              console.log('Performance Metrics:', metrics);
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
    }

    // Simple load time measurement
    const startTime = performance.now();
    
    loadHandler = () => {
      const loadTime = performance.now() - startTime;
      if (process.env.NODE_ENV === 'development') {
        console.log('App Load Time:', loadTime + 'ms');
      }
    };

    if (document.readyState === 'complete') {
      loadHandler();
    } else {
      window.addEventListener('load', loadHandler);
    }

    // Cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (loadHandler) {
        window.removeEventListener('load', loadHandler);
      }
    };
  }, []);

  return null;
};