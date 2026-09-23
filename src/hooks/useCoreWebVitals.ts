import React, { useEffect, useState } from 'react';
// FID has been replaced with INP in web-vitals v3+
import { onCLS, onLCP, onFCP, onTTFB, onINP } from 'web-vitals';
import type { Metric } from 'web-vitals';

interface WebVitalsMetrics {
  cls: number | null;
  inp: number | null;
  lcp: number | null;
  fcp: number | null;
  ttfb: number | null;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Core Web Vitals monitoring hook
 * Tracks and reports performance metrics critical for SEO ranking
 */
export const useCoreWebVitals = () => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({
    cls: null,
    inp: null,
    lcp: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    const handleMetric = (metric: Metric) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value
      }));

      // Send to analytics for tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }

      // Log poor performance for SEO debugging
      const thresholds = {
        CLS: 0.1,
        INP: 200,
        LCP: 2500,
        FCP: 1800,
        TTFB: 800
      };

      const threshold = thresholds[metric.name as keyof typeof thresholds];
      if (threshold && metric.value > threshold) {
        console.warn(`[SEO Warning] ${metric.name} exceeded threshold:`, {
          value: metric.value,
          threshold,
          url: window.location.href
        });
      }
    };

    // Register all Core Web Vitals
    onCLS(handleMetric);
    onINP(handleMetric);
    onLCP(handleMetric);
    onFCP(handleMetric);
    onTTFB(handleMetric);
  }, []);

  return metrics;
};

/**
 * Performance optimization utilities
 */
export const optimizeImages = () => {
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });
};

export const prefetchCriticalResources = () => {
  const criticalUrls = [
    '/check-phone',
    '/vin-checker',
    '/check-electronics',
    '/dashboard'
  ];

  criticalUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};
