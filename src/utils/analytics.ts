
// Analytics utility functions

/**
 * Initialize analytics
 */
export const initAnalytics = () => {
  // Disabled in Lovable preview to avoid external script side effects
  if (typeof window !== 'undefined') {
    console.log('Analytics disabled in preview environment');
  }
};

/**
 * Track a page view in analytics with SEO data
 */
export const trackPageView = (pageName: string, customParams?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    console.log(`Page view tracked: ${pageName}`, customParams);
    
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname,
        content_group1: getContentGroup(pageName),
        custom_map: {
          custom_parameter_1: 'page_category'
        },
        ...customParams
      });
    }

    // Track Core Web Vitals for SEO
    trackCoreWebVitals();
  }
};

/**
 * Track Core Web Vitals for SEO performance
 */
export const trackCoreWebVitals = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Track Largest Contentful Paint (LCP)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          window.gtag?.('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(entry.startTime || 0),
            event_category: 'performance'
          });
        }
      }
    });
    
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.log('Performance observer not supported');
    }
  }
};

/**
 * Get content group for analytics categorization
 */
const getContentGroup = (pageName: string): string => {
  const pageMap: Record<string, string> = {
    'Home': 'Landing Pages',
    'How It Works': 'Information Pages',
    'For Brands': 'Business Pages',
    'For Consumers': 'Consumer Pages',
    'Contact': 'Support Pages',
    'Auth': 'User Management',
    'Terms of Service': 'Legal Pages',
    'Privacy Policy': 'Legal Pages',
    'Search History': 'User Dashboard',
    'Purchase History': 'User Dashboard',
    'Receipts': 'User Dashboard'
  };
  return pageMap[pageName] || 'Other';
};

/**
 * Track a custom event in analytics
 */
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (typeof window !== 'undefined') {
    console.log(`Event tracked: ${eventName}`, eventParams);
    
    if (window.gtag) {
      window.gtag('event', eventName, {
        event_category: eventParams.category || 'engagement',
        event_label: eventParams.label,
        value: eventParams.value,
        custom_parameter: eventParams.custom_parameter,
        ...eventParams
      });
    }
  }
};

/**
 * Track SEO-related user interactions
 */
export const trackSEOEvent = (action: string, element: string, value?: string) => {
  trackEvent('seo_interaction', {
    category: 'SEO',
    action: action,
    label: element,
    value: value
  });
};

/**
 * Track a conversion
 */
export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined') {
    console.log(`Conversion tracked: ${conversionId}, Value: ${value}`);
    
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `AW-CONVERSION_ID/${conversionId}`,
        'value': value,
        'currency': 'USD',
        'transaction_id': Date.now().toString()
      });
    }
  }
};

/**
 * Track a search query with enhanced SEO data
 */
export const trackSearch = (query: string, itemType?: string, resultCount?: number) => {
  if (typeof window !== 'undefined') {
    console.log(`Search tracked: ${query}, Type: ${itemType || 'unknown'}, Results: ${resultCount || 0}`);
    
    if (window.gtag) {
      window.gtag('event', 'search', {
        search_term: query,
        item_type: itemType || 'unknown',
        search_results_count: resultCount || 0,
        event_category: 'site_search'
      });
    }
  }
};

/**
 * Track a successful verification purchase
 */
export const trackVerificationPurchase = (serialNumber: string, amount: number, currency: string = 'USD') => {
  if (typeof window !== 'undefined') {
    console.log(`Verification purchase tracked: ${serialNumber}, Amount: ${amount} ${currency}`);
    
    if (window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: Date.now().toString(),
        value: amount,
        currency: currency,
        items: [{
          item_id: serialNumber,
          item_name: `Verification for ${serialNumber}`,
          item_category: 'verification_service',
          price: amount,
          quantity: 1
        }]
      });
    }
  }
};

/**
 * Track scroll depth for content engagement
 */
export const trackScrollDepth = () => {
  if (typeof window !== 'undefined') {
    let maxScroll = 0;
    const trackScrollThresholds = [25, 50, 75, 90, 100];
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        const threshold = trackScrollThresholds.find(t => scrollPercent >= t && maxScroll < t);
        if (threshold) {
          trackEvent('scroll_depth', {
            category: 'engagement',
            label: `${threshold}%`,
            value: threshold
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
};

