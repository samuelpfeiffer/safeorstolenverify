import React, { useEffect } from 'react';
import { GA4_MEASUREMENT_ID, isAnalyticsConfigured } from '@/config/analytics';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Google Analytics 4 Provider
 * Initializes GA4 tracking when configured
 */
export const GA4Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Only initialize if GA4 ID is configured
    if (!isAnalyticsConfigured()) {
      console.warn(
        '⚠️ Google Analytics not configured. ' +
        'Update GA4_MEASUREMENT_ID in src/config/analytics.ts'
      );
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID, {
      send_page_view: true,
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      
      // Privacy settings
      anonymize_ip: true,
      allow_google_signals: true,
      
      // Enhanced ecommerce
      enhanced_ecommerce: true,
      
      // Custom dimensions for SafeOrStolen
      custom_map: {
        custom_parameter_1: 'verification_type',
        custom_parameter_2: 'item_category',
        custom_parameter_3: 'search_query',
        custom_parameter_4: 'result_status'
      }
    });

    // Track Core Web Vitals
    trackCoreWebVitals();

    // Track engagement
    trackEngagement();

    console.log('✅ Google Analytics 4 initialized:', GA4_MEASUREMENT_ID);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        `script[src*="googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

/**
 * Track Core Web Vitals for SEO
 */
function trackCoreWebVitals() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const lcp = entry.startTime;
        const rating = lcp <= 2500 ? 'good' : lcp <= 4000 ? 'needs_improvement' : 'poor';
        
        window.gtag?.('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(lcp),
          metric_rating: rating
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const perfEntry = entry as any;
        const fid = perfEntry.processingStart - perfEntry.startTime;
        const rating = fid <= 100 ? 'good' : fid <= 300 ? 'needs_improvement' : 'poor';
        
        window.gtag?.('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FID',
          value: Math.round(fid),
          metric_rating: rating
        });
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS - Cumulative Layout Shift
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as any;
        if (!layoutShift.hadRecentInput) {
          clsScore += layoutShift.value;
        }
      }
      
      const rating = clsScore <= 0.1 ? 'good' : clsScore <= 0.25 ? 'needs_improvement' : 'poor';
      
      window.gtag?.('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'CLS',
        value: Math.round(clsScore * 1000) / 1000,
        metric_rating: rating
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (error) {
    console.warn('Core Web Vitals tracking failed:', error);
  }
}

/**
 * Track user engagement
 */
function trackEngagement() {
  let scrollDepth = 0;
  let timeOnPage = Date.now();

  // Scroll depth tracking
  const handleScroll = () => {
    const currentScrollDepth = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (currentScrollDepth > scrollDepth && currentScrollDepth % 25 === 0) {
      scrollDepth = currentScrollDepth;
      window.gtag?.('event', 'scroll_depth', {
        event_category: 'engagement',
        value: scrollDepth
      });
    }
  };

  // Time on page tracking
  const trackTimeOnPage = () => {
    const timeSpent = Math.round((Date.now() - timeOnPage) / 1000);
    if (timeSpent > 30) {
      window.gtag?.('event', 'time_on_page', {
        event_category: 'engagement',
        value: timeSpent
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('beforeunload', trackTimeOnPage);
}
