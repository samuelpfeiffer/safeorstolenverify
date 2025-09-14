import React, { useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: any[];
}

interface WebVitalsTrackerProps {
  onMetric?: (metric: WebVitalsData) => void;
  enableConsoleLogging?: boolean;
  enableAnalytics?: boolean;
}

export const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({
  onMetric,
  enableConsoleLogging = false,
  enableAnalytics = true
}) => {
  
  useEffect(() => {
    const trackMetric = (metric: WebVitalsData) => {
      if (enableConsoleLogging) {
        console.log(`[Web Vitals] ${metric.name}:`, {
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta
        });
      }
      
      // Send to analytics service
      if (enableAnalytics && typeof window !== 'undefined') {
        // Google Analytics 4
        if (window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.rating,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true
          });
        }
        
        // Custom analytics endpoint
        fetch('/api/analytics/web-vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metric: metric.name,
            value: metric.value,
            rating: metric.rating,
            url: window.location.href,
            timestamp: Date.now()
          })
        }).catch(() => {
          // Silently fail if analytics endpoint is not available
        });
      }
      
      // Custom callback
      if (onMetric) {
        onMetric(metric);
      }
    };
    
    // Dynamic import of web-vitals to avoid blocking main bundle
    const loadWebVitals = async () => {
      try {
        const webVitals = await import('web-vitals');
        
        // Track Core Web Vitals
        if (webVitals.getCLS) webVitals.getCLS(trackMetric);
        if (webVitals.getFID) webVitals.getFID(trackMetric);
        if (webVitals.getFCP) webVitals.getFCP(trackMetric);
        if (webVitals.getLCP) webVitals.getLCP(trackMetric);
        if (webVitals.getTTFB) webVitals.getTTFB(trackMetric);
        
        // Track newer metrics if available
        if (webVitals.onINP) {
          webVitals.onINP(trackMetric);
        }
        
      } catch (error) {
        console.warn('Web Vitals library not available:', error);
      }
    };
    
    // Load web vitals after initial render
    if (typeof window !== 'undefined') {
      loadWebVitals();
    }
    
    // Performance observer for additional metrics
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // Long Tasks
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              trackMetric({
                name: 'Long Task',
                value: entry.duration,
                rating: entry.duration > 200 ? 'poor' : entry.duration > 100 ? 'needs-improvement' : 'good',
                delta: 0,
                entries: [entry]
              });
            }
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        
        // Resource Loading Performance
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const resource = entry as PerformanceResourceTiming;
            if (resource.transferSize > 0) {
              const loadTime = resource.responseEnd - resource.startTime;
              if (loadTime > 1000) { // Resources taking over 1s
                trackMetric({
                  name: 'Slow Resource',
                  value: loadTime,
                  rating: loadTime > 3000 ? 'poor' : loadTime > 2000 ? 'needs-improvement' : 'good',
                  delta: 0,
                  entries: [resource]
                });
              }
            }
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        
        // Navigation Timing
        const navigationObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const nav = entry as PerformanceNavigationTiming;
            const domContentLoaded = nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart;
            const loadComplete = nav.loadEventEnd - nav.loadEventStart;
            
            trackMetric({
              name: 'DOM Content Loaded',
              value: domContentLoaded,
              rating: domContentLoaded > 2000 ? 'poor' : domContentLoaded > 1000 ? 'needs-improvement' : 'good',
              delta: 0,
              entries: [nav]
            });
            
            trackMetric({
              name: 'Load Complete',
              value: loadComplete,
              rating: loadComplete > 4000 ? 'poor' : loadComplete > 2000 ? 'needs-improvement' : 'good',
              delta: 0,
              entries: [nav]
            });
          }
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
        
      } catch (error) {
        console.warn('Performance Observer not fully supported:', error);
      }
    }
    
    // Memory usage tracking (if supported)
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const checkMemoryUsage = () => {
        const memory = (performance as any).memory;
        const usedJSHeapSize = memory.usedJSHeapSize;
        const totalJSHeapSize = memory.totalJSHeapSize;
        const usageRatio = usedJSHeapSize / totalJSHeapSize;
        
        trackMetric({
          name: 'Memory Usage',
          value: Math.round(usedJSHeapSize / 1024 / 1024), // MB
          rating: usageRatio > 0.9 ? 'poor' : usageRatio > 0.7 ? 'needs-improvement' : 'good',
          delta: 0,
          entries: [memory]
        });
      };
      
      // Check memory usage every 30 seconds
      const memoryInterval = setInterval(checkMemoryUsage, 30000);
      
      return () => {
        clearInterval(memoryInterval);
      };
    }
    
  }, [onMetric, enableConsoleLogging, enableAnalytics]);
  
  return null; // This component doesn't render anything
};

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}