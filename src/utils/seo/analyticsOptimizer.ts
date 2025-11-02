/**
 * Analytics & SEO Tracking Optimizer
 * Enhanced Google Analytics 4 integration for maximum SEO insights
 */

import { GA4_MEASUREMENT_ID } from '@/config/analytics';

// Types already declared globally

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
 * Enhanced SEO Event Tracking with comprehensive metadata and segmentation
 */
export const trackSEOInteraction = (action: string, element: string, value?: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  // Enhanced metadata collection
  const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const canonicalUrl = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || window.location.href;
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
    tag: h.tagName.toLowerCase(),
    text: h.textContent?.trim() || '',
    hasId: !!h.id
  }));

  // Advanced Schema markup detection with validation
  const schemaElements = document.querySelectorAll('script[type="application/ld+json"]');
  const schemaValidation = validateSchemaMarkup(schemaElements);
  
  // Page type segmentation
  const pageType = getDetailedPageType(window.location.pathname);
  const contentCategory = getContentCategory(window.location.pathname);
  
  // SEO health metrics
  const seoHealthScore = calculateSEOHealthScore();

  window.gtag('event', 'enhanced_seo_interaction', {
    event_category: getSEOEventCategory(action, element),
    event_action: action,
    event_label: element,
    value: value,
    
    // Enhanced SEO metadata
    meta_description: metaDescription,
    meta_description_length: metaDescription.length,
    canonical_url: canonicalUrl,
    headings_structure: JSON.stringify(headings.map(h => ({ tag: h.tag, hasId: h.hasId }))),
    h1_count: headings.filter(h => h.tag === 'h1').length,
    h1_text: headings.find(h => h.tag === 'h1')?.text || '',
    total_headings: headings.length,
    
    // Schema validation results
    has_structured_data: schemaValidation.hasValidSchema,
    schema_types: schemaValidation.schemaTypes.join(','),
    schema_validation_errors: schemaValidation.validationErrors.length,
    faq_schema_present: schemaValidation.hasFAQSchema,
    product_schema_present: schemaValidation.hasProductSchema,
    review_schema_present: schemaValidation.hasReviewSchema,
    howto_schema_present: schemaValidation.hasHowToSchema,
    
    // Page segmentation
    page_type: pageType,
    content_category: contentCategory,
    is_landing_page: pageType === 'landing',
    is_guide_page: pageType === 'guide',
    is_checkout_page: pageType === 'checkout',
    is_verification_tool: pageType === 'verification_tool',
    
    // SEO health indicators
    seo_health_score: seoHealthScore.overall,
    title_optimization_score: seoHealthScore.title,
    content_optimization_score: seoHealthScore.content,
    technical_seo_score: seoHealthScore.technical,
    
    // Page context
    page_path: window.location.pathname,
    page_title: document.title,
    page_title_length: document.title.length,
    page_word_count: getPageWordCount(),
    internal_links_count: getInternalLinksCount(),
    external_links_count: getExternalLinksCount(),
    images_without_alt: getImagesWithoutAlt(),
    
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
 * Comprehensive Core Web Vitals tracking with device and performance context
 */
export const trackEnhancedWebVitals = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  const deviceContext = getDeviceContext();
  const networkContext = getNetworkContext();

  try {
    // Enhanced LCP tracking
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const lcp = entry.startTime;
        const rating = lcp <= 2500 ? 'good' : lcp <= 4000 ? 'needs_improvement' : 'poor';
        
        window.gtag('event', 'comprehensive_web_vitals', {
          event_category: 'Core_Web_Vitals_Enhanced',
          metric_name: 'LCP',
          metric_value: Math.round(lcp),
          metric_rating: rating,
          
          // Device context
          device_type: deviceContext.type,
          viewport_width: deviceContext.viewportWidth,
          viewport_height: deviceContext.viewportHeight,
          screen_resolution: `${deviceContext.screenWidth}x${deviceContext.screenHeight}`,
          pixel_ratio: deviceContext.pixelRatio,
          
          // Network context
          connection_type: networkContext.effectiveType,
          downlink_speed: networkContext.downlink,
          rtt_latency: networkContext.rtt,
          
          // Page context
          images_count: document.images.length,
          total_resources: performance.getEntriesByType('resource').length,
          page_type: getDetailedPageType(window.location.pathname),
          page_path: window.location.pathname
        });

        // Track critical performance issues
        if (rating === 'poor') {
          trackPerformanceAlert('LCP_CRITICAL', lcp, 'poor');
        }
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Enhanced FID tracking
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const perfEntry = entry as any;
        const fid = perfEntry.processingStart - perfEntry.startTime;
        const rating = fid <= 100 ? 'good' : fid <= 300 ? 'needs_improvement' : 'poor';
        
        window.gtag('event', 'comprehensive_web_vitals', {
          event_category: 'Core_Web_Vitals_Enhanced',
          metric_name: 'FID',
          metric_value: Math.round(fid),
          metric_rating: rating,
          device_type: deviceContext.type,
          viewport_width: deviceContext.viewportWidth,
          page_path: window.location.pathname
        });

        if (rating === 'poor') {
          trackPerformanceAlert('FID_CRITICAL', fid, 'poor');
        }
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Enhanced CLS tracking
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as any;
        if (!layoutShift.hadRecentInput) {
          clsScore += layoutShift.value;
        }
      }
      
      const rating = clsScore <= 0.1 ? 'good' : clsScore <= 0.25 ? 'needs_improvement' : 'poor';
      
      window.gtag('event', 'comprehensive_web_vitals', {
        event_category: 'Core_Web_Vitals_Enhanced',
        metric_name: 'CLS',
        metric_value: Math.round(clsScore * 1000) / 1000,
        metric_rating: rating,
        device_type: deviceContext.type,
        page_path: window.location.pathname
      });

      if (rating === 'poor') {
        trackPerformanceAlert('CLS_CRITICAL', clsScore, 'poor');
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

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
 * Advanced helper functions for comprehensive SEO tracking
 */
const validateSchemaMarkup = (schemaElements: NodeListOf<Element>) => {
  const validationResults = {
    hasValidSchema: false,
    schemaTypes: [] as string[],
    validationErrors: [] as string[],
    hasFAQSchema: false,
    hasProductSchema: false,
    hasReviewSchema: false,
    hasHowToSchema: false
  };

  schemaElements.forEach((script, index) => {
    try {
      const data = JSON.parse(script.textContent || '{}');
      const schemaType = data['@type'] || 'unknown';
      
      validationResults.schemaTypes.push(schemaType);
      validationResults.hasValidSchema = true;
      
      // Check for specific schema types
      if (schemaType === 'FAQPage' || (Array.isArray(data) && data.some(item => item['@type'] === 'Question'))) {
        validationResults.hasFAQSchema = true;
      }
      if (schemaType === 'Product') {
        validationResults.hasProductSchema = true;
      }
      if (schemaType === 'Review' || schemaType === 'AggregateRating') {
        validationResults.hasReviewSchema = true;
      }
      if (schemaType === 'HowTo') {
        validationResults.hasHowToSchema = true;
      }
      
    } catch (error) {
      validationResults.validationErrors.push(`Schema ${index + 1}: Invalid JSON`);
    }
  });

  return validationResults;
};

const getDetailedPageType = (pathname: string): string => {
  const typeMapping: Record<string, string> = {
    '/': 'landing',
    '/stolen-item-checker': 'verification_tool',
    '/imei-check': 'verification_tool', 
    '/vin-verification': 'verification_tool',
    '/check-phone': 'verification_tool',
    '/check-car': 'verification_tool',
    '/how-it-works': 'guide',
    '/for-brands': 'business_landing',
    '/pricing': 'checkout',
    '/contact': 'support',
    '/about': 'company_info',
    '/faq': 'support'
  };

  // Check for blog posts
  if (pathname.includes('/blog/')) return 'blog_post';
  if (pathname.includes('/guide/')) return 'guide';
  if (pathname.includes('/city/')) return 'local_page';
  
  return typeMapping[pathname] || 'standard_page';
};

const getContentCategory = (pathname: string): string => {
  if (pathname.includes('check') || pathname.includes('verify')) return 'verification_tools';
  if (pathname.includes('how') || pathname.includes('guide')) return 'educational_content';
  if (pathname.includes('for-brands') || pathname.includes('pricing')) return 'business_content';
  if (pathname.includes('blog')) return 'blog_content';
  return 'general_content';
};

const calculateSEOHealthScore = () => {
  const title = document.title;
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const h1Elements = document.querySelectorAll('h1');
  const canonical = document.querySelector('link[rel="canonical"]');
  const imagesWithoutAlt = getImagesWithoutAlt();
  const totalImages = document.images.length;

  // Title optimization (0-100)
  let titleScore = 0;
  if (title.length > 10 && title.length < 60) titleScore += 40;
  if (title.toLowerCase().includes('verify') || title.toLowerCase().includes('stolen')) titleScore += 30;
  if (title.includes('|') || title.includes('-')) titleScore += 15;
  if (!title.includes('SafeOrStolen') || title.indexOf('SafeOrStolen') > 20) titleScore += 15;

  // Content optimization (0-100)  
  let contentScore = 0;
  if (metaDesc.length > 50 && metaDesc.length < 160) contentScore += 30;
  if (h1Elements.length === 1) contentScore += 25;
  if (getPageWordCount() > 100) contentScore += 20;
  if (imagesWithoutAlt === 0 && totalImages > 0) contentScore += 25;

  // Technical SEO (0-100)
  let technicalScore = 0;
  if (canonical) technicalScore += 25;
  if (document.querySelector('meta[name="viewport"]')) technicalScore += 25;
  if (document.querySelectorAll('script[type="application/ld+json"]').length > 0) technicalScore += 25;
  if (window.location.protocol === 'https:') technicalScore += 25;

  const overallScore = Math.round((titleScore + contentScore + technicalScore) / 3);

  return {
    overall: overallScore,
    title: titleScore,
    content: contentScore,
    technical: technicalScore
  };
};

const getDeviceContext = () => ({
  type: getDeviceType(),
  viewportWidth: window.innerWidth,
  viewportHeight: window.innerHeight,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
  pixelRatio: window.devicePixelRatio || 1
});

const getNetworkContext = () => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  return {
    effectiveType: connection?.effectiveType || 'unknown',
    downlink: connection?.downlink || 0,
    rtt: connection?.rtt || 0
  };
};

const getImagesWithoutAlt = (): number => {
  return Array.from(document.images).filter(img => !img.alt || img.alt.trim() === '').length;
};

const trackPerformanceAlert = (alertType: string, value: number, severity: string): void => {
  if (window.gtag) {
    window.gtag('event', 'performance_alert', {
      event_category: 'SEO_Performance_Alerts',
      alert_type: alertType,
      metric_value: value,
      severity: severity,
      page_path: window.location.pathname,
      timestamp: Date.now()
    });
  }
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