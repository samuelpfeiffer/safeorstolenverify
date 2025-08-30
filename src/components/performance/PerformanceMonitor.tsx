import React, { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface PerformanceMonitorProps {
  onMetrics?: (metrics: PerformanceMetrics) => void;
  threshold?: {
    loadTime?: number;
    fcp?: number;
    lcp?: number;
    cls?: number;
    fid?: number;
  };
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetrics,
  threshold = {
    loadTime: 3000,
    fcp: 1800,
    lcp: 2500,
    cls: 0.1,
    fid: 100
  }
}) => {
  const hasReported = useRef(false);

  useEffect(() => {
    if (hasReported.current) return;

    const measurePerformance = () => {
      if (!('performance' in window)) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      
      const metrics: PerformanceMetrics = {
        loadTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
        domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
        firstContentfulPaint: Math.round(fcpEntry?.startTime || 0),
        largestContentfulPaint: Math.round(lcpEntries[lcpEntries.length - 1]?.startTime || 0),
        cumulativeLayoutShift: 0,
        firstInputDelay: 0
      };

      // Measure CLS
      if ('PerformanceObserver' in window) {
        try {
          const clsObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                metrics.cumulativeLayoutShift += (entry as any).value;
              }
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // Measure FID
          const fidObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              metrics.firstInputDelay = Math.round((entry as any).processingStart - entry.startTime);
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Stop observing after 10 seconds
          setTimeout(() => {
            clsObserver.disconnect();
            fidObserver.disconnect();
          }, 10000);
        } catch (e) {
          // Silently fail if PerformanceObserver is not supported
        }
      }

      // Report metrics
      if (onMetrics) {
        onMetrics(metrics);
      }

      // Log performance warnings
      const warnings = [];
      if (metrics.loadTime > (threshold.loadTime || 3000)) {
        warnings.push(`Slow load time: ${metrics.loadTime}ms`);
      }
      if (metrics.firstContentfulPaint > (threshold.fcp || 1800)) {
        warnings.push(`Slow FCP: ${metrics.firstContentfulPaint}ms`);
      }
      if (metrics.largestContentfulPaint > (threshold.lcp || 2500)) {
        warnings.push(`Slow LCP: ${metrics.largestContentfulPaint}ms`);
      }
      if (metrics.cumulativeLayoutShift > (threshold.cls || 0.1)) {
        warnings.push(`High CLS: ${metrics.cumulativeLayoutShift}`);
      }
      if (metrics.firstInputDelay > (threshold.fid || 100)) {
        warnings.push(`High FID: ${metrics.firstInputDelay}ms`);
      }

      if (warnings.length > 0) {
        console.warn('Performance issues detected:', warnings.join(', '));
      }

      hasReported.current = true;
    };

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      setTimeout(measurePerformance, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measurePerformance, 1000);
      });
    }
  }, [onMetrics, threshold]);

  return null;
};