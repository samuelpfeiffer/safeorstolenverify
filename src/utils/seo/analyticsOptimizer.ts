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
  
  // Initialize enhanced tracking features
  trackEngagementMetrics();
  trackSchemaMarkup();
  trackReferralSources();
  trackEnhancedWebVitals();

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
 * Track SEO-specific events and user interactions with enhanced metadata
 */
export const trackSEOInteraction = (action: string, element: string, value?: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  // Enhanced metadata collection
  const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const canonicalUrl = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || window.location.href;
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
    tag: h.tagName.toLowerCase(),
    text: h.textContent?.trim() || ''
  }));

  // Schema markup detection
  const schemaElements = document.querySelectorAll('script[type="application/ld+json"]');
  const hasStructuredData = schemaElements.length > 0;
  const schemaTypes = Array.from(schemaElements).map(script => {
    try {
      const data = JSON.parse(script.textContent || '{}');
      return data['@type'] || 'unknown';
    } catch {
      return 'invalid';
    }
  });

  window.gtag('event', 'seo_interaction', {
    event_category: getSEOEventCategory(action, element),
    event_action: action,
    event_label: element,
    value: value,
    
    // Enhanced SEO metadata
    meta_description: metaDescription,
    canonical_url: canonicalUrl,
    headings_count: headings.length,
    h1_text: headings.find(h => h.tag === 'h1')?.text || '',
    has_structured_data: hasStructuredData,
    schema_types: schemaTypes.join(','),
    
    // Page context
    page_path: window.location.pathname,
    page_title: document.title,
    page_word_count: getPageWordCount(),
    internal_links_count: getInternalLinksCount(),
    external_links_count: getExternalLinksCount(),
    
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
 * Track enhanced user engagement for SEO signals
 */
export const trackEngagementMetrics = (): void => {
  if (typeof window === 'undefined') return;

  let scrollDepth = 0;
  let maxScrollDepth = 0;
  let timeOnPage = Date.now();
  let readingTime = 0;
  let scrollEvents = 0;
  let dwellTimeTracked = false;

  // Enhanced scroll tracking with reading behavior
  const trackScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    scrollEvents++;
    maxScrollDepth = Math.max(maxScrollDepth, scrollPercent);

    // Track milestone scroll depths
    if (scrollPercent > scrollDepth && [10, 25, 50, 75, 90, 100].includes(scrollPercent)) {
      scrollDepth = scrollPercent;
      
      if (window.gtag) {
        window.gtag('event', 'scroll_depth', {
          event_category: 'Enhanced_Engagement',
          event_action: 'Scroll_Milestone',
          event_label: `${scrollPercent}%`,
          scroll_depth: scrollPercent,
          max_scroll: maxScrollDepth,
          scroll_events: scrollEvents,
          reading_speed: calculateReadingSpeed(),
          page_path: window.location.pathname
        });
      }
    }

    // Track dwell time at 30 seconds for engaged users
    if (!dwellTimeTracked && Date.now() - timeOnPage > 30000 && scrollPercent > 25) {
      dwellTimeTracked = true;
      if (window.gtag) {
        window.gtag('event', 'engaged_user', {
          event_category: 'Enhanced_Engagement',
          event_action: 'Dwell_Time',
          value: 30,
          scroll_depth: scrollPercent,
          page_path: window.location.pathname
        });
      }
    }
  };

  // Enhanced time tracking with reading behavior analysis
  const trackTimeOnPage = () => {
    const timeSpent = Math.round((Date.now() - timeOnPage) / 1000);
    
    if (window.gtag && timeSpent > 5) {
      window.gtag('event', 'time_on_page', {
        event_category: 'Enhanced_Engagement',
        event_action: 'Session_End',
        time_spent: timeSpent,
        max_scroll_depth: maxScrollDepth,
        scroll_events: scrollEvents,
        reading_speed: calculateReadingSpeed(),
        bounce_candidate: timeSpent < 15 && maxScrollDepth < 25,
        engaged_session: timeSpent > 60 && maxScrollDepth > 50,
        page_path: window.location.pathname
      });
    }
  };

  // Track content interaction (clicks, selections)
  const trackContentInteraction = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A') {
      const isInternal = target.getAttribute('href')?.startsWith('/') || 
                        target.getAttribute('href')?.includes(window.location.hostname);
      
      if (window.gtag) {
        window.gtag('event', 'content_interaction', {
          event_category: 'Enhanced_Engagement',
          event_action: isInternal ? 'Internal_Link_Click' : 'External_Link_Click',
          event_label: target.textContent?.trim() || 'Unknown',
          link_url: target.getAttribute('href') || '',
          page_path: window.location.pathname
        });
      }
    }
  };

  window.addEventListener('scroll', trackScroll, { passive: true });
  window.addEventListener('beforeunload', trackTimeOnPage);
  window.addEventListener('click', trackContentInteraction);
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
 * Track Schema.org markup validation and performance
 */
export const trackSchemaMarkup = (): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const schemaElements = document.querySelectorAll('script[type="application/ld+json"]');
  const validSchemas: string[] = [];
  const invalidSchemas: string[] = [];

  schemaElements.forEach((script, index) => {
    try {
      const data = JSON.parse(script.textContent || '{}');
      const schemaType = data['@type'] || 'unknown';
      validSchemas.push(schemaType);
      
      // Track specific schema types
      window.gtag('event', 'schema_validation', {
        event_category: 'Schema_Markup',
        event_action: 'Valid_Schema',
        event_label: schemaType,
        schema_index: index,
        has_context: !!data['@context'],
        page_path: window.location.pathname
      });
    } catch {
      invalidSchemas.push(`schema_${index}`);
      
      window.gtag('event', 'schema_validation', {
        event_category: 'Schema_Markup',
        event_action: 'Invalid_Schema',
        event_label: `schema_${index}`,
        page_path: window.location.pathname
      });
    }
  });

  // Overall schema summary
  if (validSchemas.length > 0 || invalidSchemas.length > 0) {
    window.gtag('event', 'schema_summary', {
      event_category: 'Schema_Markup',
      valid_schemas: validSchemas.length,
      invalid_schemas: invalidSchemas.length,
      schema_types: validSchemas.join(','),
      page_path: window.location.pathname
    });
  }
};

/**
 * Track backlink clicks and referral sources
 */
export const trackReferralSources = (): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const referrer = document.referrer;
  if (referrer && !referrer.includes(window.location.hostname)) {
    const referrerDomain = new URL(referrer).hostname;
    
    window.gtag('event', 'referral_traffic', {
      event_category: 'Traffic_Sources',
      event_action: 'External_Referrer',
      event_label: referrerDomain,
      referrer_url: referrer,
      page_path: window.location.pathname
    });
  }

  // Track outbound link clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLAnchorElement;
    if (target.tagName === 'A' && target.href) {
      const isExternal = !target.href.includes(window.location.hostname) && 
                        target.href.startsWith('http');
      
      if (isExternal && window.gtag) {
        const domain = new URL(target.href).hostname;
        window.gtag('event', 'outbound_click', {
          event_category: 'Traffic_Sources',
          event_action: 'Outbound_Link',
          event_label: domain,
          link_url: target.href,
          link_text: target.textContent?.trim() || '',
          page_path: window.location.pathname
        });
      }
    }
  });
};

/**
 * A/B testing for SEO elements
 */
export const trackSEOABTest = (testName: string, variant: string, element: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'seo_ab_test', {
    event_category: 'SEO_AB_Testing',
    event_action: testName,
    event_label: variant,
    test_element: element,
    page_path: window.location.pathname,
    timestamp: Date.now()
  });
};

/**
 * Track Core Web Vitals with enhanced context
 */
export const trackEnhancedWebVitals = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    // Enhanced LCP tracking with element details
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const lcp = entry.startTime;
        const rating = lcp <= 2500 ? 'good' : lcp <= 4000 ? 'needs_improvement' : 'poor';
        
        window.gtag('event', 'enhanced_web_vital', {
          event_category: 'Core_Web_Vitals',
          metric_name: 'LCP',
          metric_value: Math.round(lcp),
          metric_rating: rating,
          connection_type: getConnectionType(),
          device_type: getDeviceType(),
          page_word_count: getPageWordCount(),
          images_count: document.images.length,
          page_path: window.location.pathname
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

  } catch (error) {
    console.warn('Enhanced Core Web Vitals tracking failed:', error);
  }
};

/**
 * Helper functions for enhanced tracking
 */
const getSEOEventCategory = (action: string, element: string): string => {
  const categoryMap: Record<string, string> = {
    'title_click': 'SEO_Title_Optimization',
    'meta_view': 'SEO_Meta_Optimization', 
    'schema_interaction': 'SEO_Schema_Markup',
    'faq_expansion': 'SEO_FAQ_Engagement',
    'review_submission': 'SEO_Review_Generation',
    'breadcrumb_click': 'SEO_Navigation',
    'internal_link': 'SEO_Internal_Linking',
    'rich_snippet': 'SEO_Rich_Results'
  };
  
  return categoryMap[action] || 'SEO_General';
};

const getPageWordCount = (): number => {
  const text = document.body.textContent || '';
  return text.trim().split(/\s+/).length;
};

const getInternalLinksCount = (): number => {
  const links = Array.from(document.querySelectorAll('a[href]'));
  return links.filter(link => {
    const href = link.getAttribute('href') || '';
    return href.startsWith('/') || href.includes(window.location.hostname);
  }).length;
};

const getExternalLinksCount = (): number => {
  const links = Array.from(document.querySelectorAll('a[href]'));
  return links.filter(link => {
    const href = link.getAttribute('href') || '';
    return href.startsWith('http') && !href.includes(window.location.hostname);
  }).length;
};

const calculateReadingSpeed = (): number => {
  const wordCount = getPageWordCount();
  const timeOnPage = (Date.now() - performance.timing.navigationStart) / 1000;
  return Math.round((wordCount / timeOnPage) * 60); // Words per minute
};

/**
 * Track errors for SEO monitoring
 */
export const trackSEOError = (errorType: string, errorMessage: string, url?: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'seo_error', {
    event_category: 'SEO_Errors',
    error_type: errorType,
    error_message: errorMessage,
    page_url: url || window.location.href,
    page_title: document.title,
    has_structured_data: document.querySelectorAll('script[type="application/ld+json"]').length > 0,
    timestamp: Date.now()
  });
};