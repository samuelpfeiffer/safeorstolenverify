import { useEffect } from 'react';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * Performance Monitor Component
 * Tracks Core Web Vitals and sends data to analytics
 */

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export const PerformanceMonitor = () => {
  const location = useSafeLocation();
  
  if (!location) return null;

  useEffect(() => {
    const metrics: PerformanceMetrics = {};

    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(metrics.lcp ?? 0),
              page_path: location.pathname,
            });
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            metrics.fid = entry.processingStart - entry.startTime;
            
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(metrics.fid),
                page_path: location.pathname,
              });
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              metrics.cls = clsValue;
            }
          });
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000),
              page_path: location.pathname,
            });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
              
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_label: 'FCP',
                  value: Math.round(metrics.fcp ?? 0),
                  page_path: location.pathname,
                });
              }
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Time to First Byte (TTFB)
        if (performance.timing) {
          metrics.ttfb = performance.timing.responseStart - performance.timing.requestStart;
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'TTFB',
              value: Math.round(metrics.ttfb),
              page_path: location.pathname,
            });
          }
        }

        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
          setTimeout(() => {
            console.log('Core Web Vitals:', metrics);
            
            // Warn if metrics exceed thresholds
            if (metrics.lcp && metrics.lcp > 2500) {
              console.warn(`⚠️ LCP is slow: ${Math.round(metrics.lcp)}ms (should be < 2500ms)`);
            }
            if (metrics.fid && metrics.fid > 100) {
              console.warn(`⚠️ FID is slow: ${Math.round(metrics.fid)}ms (should be < 100ms)`);
            }
            if (metrics.cls && metrics.cls > 0.1) {
              console.warn(`⚠️ CLS is high: ${metrics.cls.toFixed(3)} (should be < 0.1)`);
            }
          }, 3000);
        }

      } catch (error) {
        console.error('Error setting up performance monitoring:', error);
      }
    }
  }, [location.pathname]);

  // Register service worker for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return null;
};

// Extend window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
