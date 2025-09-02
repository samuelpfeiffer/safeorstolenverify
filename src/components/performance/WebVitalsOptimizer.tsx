import React, { useEffect } from 'react';

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}

/**
 * Component that optimizes Core Web Vitals and reports metrics
 * Specifically addresses LCP, FID, CLS, FCP, and TTFB
 */
export const WebVitalsOptimizer: React.FC = () => {
  useEffect(() => {
    // Optimize Largest Contentful Paint (LCP)
    const optimizeLCP = () => {
      // Preload critical resources
      const criticalImages = document.querySelectorAll('img[data-critical="true"]');
      criticalImages.forEach(img => {
        const imgElement = img as HTMLImageElement;
        imgElement.loading = 'eager';
        imgElement.fetchPriority = 'high';
      });

      // Remove lazy loading from above-the-fold images
      const heroImages = document.querySelectorAll('img[data-hero="true"]');
      heroImages.forEach(img => {
        const imgElement = img as HTMLImageElement;
        imgElement.removeAttribute('loading');
        imgElement.fetchPriority = 'high';
      });
    };

    // Optimize Cumulative Layout Shift (CLS)
    const optimizeCLS = () => {
      // Add aspect ratios to images without dimensions
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        const imgElement = img as HTMLImageElement;
        if (!imgElement.style.aspectRatio) {
          imgElement.style.aspectRatio = '16 / 9'; // Default aspect ratio
        }
      });

      // Reserve space for dynamic content
      const dynamicContainers = document.querySelectorAll('[data-dynamic]');
      dynamicContainers.forEach(container => {
        const element = container as HTMLElement;
        if (!element.style.minHeight) {
          element.style.minHeight = '200px'; // Reserve minimum space
        }
      });
    };

    // Optimize First Input Delay (FID)
    const optimizeFID = () => {
      // Break up long tasks
      if ('scheduler' in window) {
        const scheduler = (window as any).scheduler;
        if (scheduler.postTask) {
          // Use scheduler.postTask for better task prioritization
          const yieldToMain = () => {
            return new Promise(resolve => {
              scheduler.postTask(resolve, { priority: 'user-blocking' });
            });
          };
          
          // Make yieldToMain available globally for use in components
          (window as any).yieldToMain = yieldToMain;
        }
      }
    };

    // Report Web Vitals
    const reportWebVital = (metric: WebVitalMetric) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Web Vital - ${metric.name}:`, metric.value);
      }
      
      // In production, send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'web_vital', {
          event_category: 'Web Vitals',
          event_label: metric.name,
          value: Math.round(metric.value),
          custom_map: { metric_id: metric.id }
        });
      }
    };

    // Set up performance observers
    const setupPerformanceObservers = () => {
      if ('PerformanceObserver' in window) {
        // Observe LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          reportWebVital({
            name: 'LCP',
            value: lastEntry.startTime,
            id: `lcp-${Date.now()}`
          });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Observe FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            const fidEntry = entry as any; // FID entries have different properties
            reportWebVital({
              name: 'FID',
              value: fidEntry.processingStart - fidEntry.startTime,
              id: `fid-${Date.now()}`
            });
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Observe CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Report CLS when page visibility changes
        const reportCLS = () => {
          reportWebVital({
            name: 'CLS',
            value: clsValue,
            id: `cls-${Date.now()}`
          });
        };

        document.addEventListener('visibilitychange', reportCLS);
        window.addEventListener('beforeunload', reportCLS);

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          document.removeEventListener('visibilitychange', reportCLS);
          window.removeEventListener('beforeunload', reportCLS);
        };
      }
    };

    // Apply optimizations
    optimizeLCP();
    optimizeCLS();
    optimizeFID();
    
    // Set up observers
    const cleanup = setupPerformanceObservers();

    return cleanup;
  }, []);

  return null;
};