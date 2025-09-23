/**
 * Analytics & SEO Tracking Optimizer
 * Enhanced Google Analytics 4 integration for maximum SEO insights
 */

// Types already declared globally

// Replace with your actual Google Analytics 4 Measurement ID
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace in production

/**
 * Initialize enhanced Google Analytics 4 with SEO tracking
 */
export const initEnhancedAnalytics = (): void => {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Initialize GA4 with enhanced settings
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, {
    // Enhanced SEO tracking settings
    send_page_view: true,
    page_title: document.title,
    page_location: window.location.href,
    
    // Privacy settings
    anonymize_ip: true,
    allow_google_signals: true,
    allow_ad_personalization_signals: false,
    
    // Enhanced ecommerce for conversions
    enhanced_ecommerce: true,
    
    // Custom dimensions for SEO tracking
    custom_map: {
      'custom_parameter_1': 'page_category',
      'custom_parameter_2': 'user_intent',
      'custom_parameter_3': 'search_query',
      'custom_parameter_4': 'verification_type'
    },
    
    // Site search tracking
    site_search_category_parameter: 'category',
    site_search_query_parameter: 'q',
    
    // Content grouping for SEO analysis
    content_group1: getContentGroup(window.location.pathname),
    content_group2: getPageType(window.location.pathname),
    content_group3: getUserIntent(window.location.pathname)
  });

  // Track initial page view with enhanced data
  trackEnhancedPageView(window.location.pathname);
  
  console.log('Enhanced Analytics initialized with SEO tracking');
};

/**
 * Track enhanced page view with SEO metadata
 */
export const trackEnhancedPageView = (pagePath: string, customParams?: Record<string, any>): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const pageData = {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pagePath,
    
    // SEO-specific tracking
    content_group1: getContentGroup(pagePath),
    content_group2: getPageType(pagePath),
    content_group3: getUserIntent(pagePath),
    
    // Performance tracking for SEO
    connection_type: getConnectionType(),
    device_type: getDeviceType(),
    
    // Custom parameters
    ...customParams
  };

  window.gtag('event', 'page_view', pageData);
  
  // Track Core Web Vitals for this page
  trackCoreWebVitalsGA4();
  
  console.log('Enhanced page view tracked:', pageData);
};

/**
 * Track Core Web Vitals for SEO performance monitoring
 */
export const trackCoreWebVitalsGA4 = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    // Track LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const lcp = entry.startTime;
        const rating = lcp <= 2500 ? 'good' : lcp <= 4000 ? 'needs_improvement' : 'poor';
        
        window.gtag('event', 'core_web_vital', {
          metric_name: 'LCP',
          metric_value: Math.round(lcp),
          metric_rating: rating,
          event_category: 'Web Vitals'
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const perfEntry = entry as any; // PerformanceEventTiming not fully typed
        const fid = perfEntry.processingStart - perfEntry.startTime;
        const rating = fid <= 100 ? 'good' : fid <= 300 ? 'needs_improvement' : 'poor';
        
        window.gtag('event', 'core_web_vital', {
          metric_name: 'FID',
          metric_value: Math.round(fid),
          metric_rating: rating,
          event_category: 'Web Vitals'
        });
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Track CLS (Cumulative Layout Shift)
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as any; // LayoutShift interface not fully typed
        if (!layoutShift.hadRecentInput) {
          clsScore += layoutShift.value;
        }
      }
      
      const rating = clsScore <= 0.1 ? 'good' : clsScore <= 0.25 ? 'needs_improvement' : 'poor';
      
      window.gtag('event', 'core_web_vital', {
        metric_name: 'CLS',
        metric_value: Math.round(clsScore * 1000) / 1000,
        metric_rating: rating,
        event_category: 'Web Vitals'
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

  } catch (error) {
    console.warn('Core Web Vitals tracking failed:', error);
  }
};

/**
 * Track SEO-specific events and user interactions
 */
export const trackSEOInteraction = (action: string, element: string, value?: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'seo_interaction', {
    event_category: 'SEO',
    event_action: action,
    event_label: element,
    value: value,
    
    // Additional SEO context
    page_path: window.location.pathname,
    page_title: document.title,
    timestamp: Date.now()
  });
};

/**
 * Track verification-specific events for conversion optimization
 */
export const trackVerificationEvent = (verificationType: string, result: string, serialNumber?: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  // Track the verification event
  window.gtag('event', 'verification_completed', {
    event_category: 'Verification',
    verification_type: verificationType,
    verification_result: result,
    
    // Don't track actual serial numbers for privacy
    has_serial_number: !!serialNumber,
    
    // SEO context
    page_path: window.location.pathname,
    user_intent: 'verification',
    
    // For conversion tracking
    value: result === 'safe' ? 1 : 0,
    currency: 'USD'
  });

  // Track as conversion if successful verification
  if (result === 'safe' || result === 'verified') {
    window.gtag('event', 'conversion', {
      send_to: `${GA4_MEASUREMENT_ID}/verification_success`,
      value: 1,
      currency: 'USD',
      transaction_id: `verification_${Date.now()}`
    });
  }
};

/**
 * Track search events for SEO optimization
 */
export const trackSiteSearch = (searchQuery: string, resultCount: number, category?: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'search', {
    search_term: searchQuery,
    content_category: category || 'verification',
    
    // SEO-specific data
    search_results_count: resultCount,
    search_success: resultCount > 0,
    search_intent: getSearchIntent(searchQuery),
    
    // Custom dimensions
    custom_parameter_3: searchQuery
  });
};

/**
 * Track user engagement for SEO signals
 */
export const trackEngagementMetrics = (): void => {
  if (typeof window === 'undefined') return;

  let scrollDepth = 0;
  let timeOnPage = Date.now();
  
  // Track scroll depth
  const trackScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > scrollDepth && scrollPercent % 25 === 0) {
      scrollDepth = scrollPercent;
      
      if (window.gtag) {
        window.gtag('event', 'scroll_depth', {
          event_category: 'Engagement',
          scroll_depth: scrollPercent,
          page_path: window.location.pathname
        });
      }
    }
  };
  
  // Track time on page when user leaves
  const trackTimeOnPage = () => {
    const timeSpent = Math.round((Date.now() - timeOnPage) / 1000);
    
    if (window.gtag && timeSpent > 10) { // Only track if user spent more than 10 seconds
      window.gtag('event', 'time_on_page', {
        event_category: 'Engagement',
        time_spent: timeSpent,
        page_path: window.location.pathname,
        engaged_session: timeSpent > 60 // Mark as engaged if > 1 minute
      });
    }
  };
  
  window.addEventListener('scroll', trackScroll, { passive: true });
  window.addEventListener('beforeunload', trackTimeOnPage);
};

/**
 * Helper functions for content categorization
 */
const getContentGroup = (pathname: string): string => {
  const groupMap: Record<string, string> = {
    '/': 'Landing Pages',
    '/dashboard': 'App Pages',
    '/stolen-item-checker': 'Verification Tools',
    '/imei-check': 'Verification Tools',
    '/vin-verification': 'Verification Tools',
    '/check-phone': 'Verification Tools',
    '/check-car': 'Verification Tools',
    '/how-it-works': 'Information Pages',
    '/for-brands': 'Business Pages',
    '/about': 'Company Pages',
    '/contact': 'Support Pages',
    '/blog': 'Content Pages',
    '/faq': 'Support Pages'
  };
  
  for (const [path, group] of Object.entries(groupMap)) {
    if (pathname.startsWith(path)) return group;
  }
  
  return 'Other Pages';
};

const getPageType = (pathname: string): string => {
  if (pathname === '/') return 'homepage';
  if (pathname.includes('/blog/')) return 'blog_post';
  if (pathname.includes('/check-')) return 'verification_tool';
  if (pathname.includes('/city/')) return 'local_page';
  return 'standard_page';
};

const getUserIntent = (pathname: string): string => {
  if (pathname.includes('check') || pathname.includes('verify')) return 'verification';
  if (pathname.includes('how') || pathname.includes('guide')) return 'informational';
  if (pathname.includes('for-brands') || pathname.includes('pricing')) return 'commercial';
  if (pathname.includes('about') || pathname.includes('contact')) return 'navigational';
  return 'informational';
};

const getConnectionType = (): string => {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection;
    return connection?.effectiveType || 'unknown';
  }
  return 'unknown';
};

const getDeviceType = (): string => {
  if (typeof window === 'undefined') return 'unknown';
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

const getSearchIntent = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('how') || lowerQuery.includes('what') || lowerQuery.includes('why')) {
    return 'informational';
  }
  if (lowerQuery.includes('check') || lowerQuery.includes('verify') || lowerQuery.includes('lookup')) {
    return 'transactional';
  }
  if (lowerQuery.includes('best') || lowerQuery.includes('compare') || lowerQuery.includes('review')) {
    return 'commercial';
  }
  
  return 'navigational';
};

/**
 * Track errors for SEO monitoring
 */
export const trackSEOError = (errorType: string, errorMessage: string, url?: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'seo_error', {
    event_category: 'SEO Errors',
    error_type: errorType,
    error_message: errorMessage,
    page_url: url || window.location.href,
    timestamp: Date.now()
  });
};