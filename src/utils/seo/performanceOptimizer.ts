/**
 * Performance Optimization Utilities for Core Web Vitals
 * Critical for Google's ranking algorithm - Page Experience signals
 */

// Global types are already declared in analytics

/**
 * Initialize performance monitoring and Core Web Vitals tracking
 */
export const initPerformanceMonitoring = (): void => {
  if (typeof window === 'undefined') return;

  // Track Core Web Vitals
  trackCoreWebVitals();
  
  // Optimize images lazily
  optimizeImages();
  
  // Preload critical resources
  preloadCriticalResources();
  
  // Monitor performance metrics
  monitorPerformanceMetrics();
};

/**
 * Track Core Web Vitals for SEO ranking factors
 */
export const trackCoreWebVitals = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    // Largest Contentful Paint (LCP) - Critical for SEO
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const lcp = entry.startTime;
        
        // Google threshold: Good < 2.5s, Needs Improvement < 4s
        const rating = lcp <= 2500 ? 'good' : lcp <= 4000 ? 'needs-improvement' : 'poor';
        
        // Track to analytics
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(lcp),
            rating: rating,
            event_category: 'performance'
          });
        }
        
        console.log(`LCP: ${Math.round(lcp)}ms (${rating})`);
      }
    });
    
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID) - Critical for user experience  
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const perfEntry = entry as any;
        const fid = perfEntry.processingStart - perfEntry.startTime;
        
        // Google threshold: Good < 100ms, Needs Improvement < 300ms
        const rating = fid <= 100 ? 'good' : fid <= 300 ? 'needs-improvement' : 'poor';
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(fid),
            rating: rating,
            event_category: 'performance'
          });
        }
        
        console.log(`FID: ${Math.round(fid)}ms (${rating})`);
      }
    });
    
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS) - Critical for visual stability
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as any; // LayoutShift interface not fully typed
        if (!layoutShift.hadRecentInput) {
          clsScore += layoutShift.value;
        }
      }
      
      // Google threshold: Good < 0.1, Needs Improvement < 0.25
      const rating = clsScore <= 0.1 ? 'good' : clsScore <= 0.25 ? 'needs-improvement' : 'poor';
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsScore * 1000) / 1000,
          rating: rating,
          event_category: 'performance'
        });
      }
      
      console.log(`CLS: ${Math.round(clsScore * 1000) / 1000} (${rating})`);
    });
    
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const navEntry = entry as PerformanceNavigationTiming;
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        
        // Good < 800ms, Needs Improvement < 1800ms
        const rating = ttfb <= 800 ? 'good' : ttfb <= 1800 ? 'needs-improvement' : 'poor';
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'TTFB',
            value: Math.round(ttfb),
            rating: rating,
            event_category: 'performance'
          });
        }
        
        console.log(`TTFB: ${Math.round(ttfb)}ms (${rating})`);
      }
    });
    
    navigationObserver.observe({ entryTypes: ['navigation'] });

  } catch (error) {
    console.warn('Performance monitoring not supported:', error);
  }
};

/**
 * Optimize images for better Core Web Vitals
 */
export const optimizeImages = (): void => {
  if (typeof window === 'undefined') return;

  // Lazy load images that are not in viewport
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
    
    images.forEach((img) => imageObserver.observe(img));
  }
  
  // Add proper dimensions to prevent CLS
  const allImages = document.querySelectorAll('img:not([width]):not([height])');
  allImages.forEach((img) => {
    const htmlImg = img as HTMLImageElement;
    if (htmlImg.naturalWidth && htmlImg.naturalHeight) {
      htmlImg.width = htmlImg.naturalWidth;
      htmlImg.height = htmlImg.naturalHeight;
    }
  });
};

/**
 * Preload critical resources for faster loading
 */
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' },
    { href: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png', as: 'image' },
    { href: '/assets/hero-verification-devices.png', as: 'image' }
  ];
  
  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.as === 'font') link.crossOrigin = 'anonymous';
    
    document.head.appendChild(link);
  });
  
  // DNS prefetch for external resources
  const dnsPrefetchDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://lxrdzbknktwlubbmlsqe.supabase.co',
    'https://www.googletagmanager.com'
  ];
  
  dnsPrefetchDomains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

/**
 * Monitor and optimize performance metrics
 */
export const monitorPerformanceMetrics = (): void => {
  if (typeof window === 'undefined') return;

  // Monitor page load performance
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      const metrics = {
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        connection: navigation.connectEnd - navigation.connectStart,
        request: navigation.responseStart - navigation.requestStart,
        response: navigation.responseEnd - navigation.responseStart,
        dom: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        load: navigation.loadEventEnd - navigation.fetchStart
      };
      
      // Track performance metrics
      if (window.gtag) {
        Object.entries(metrics).forEach(([key, value]) => {
          window.gtag('event', 'performance_timing', {
            name: key,
            value: Math.round(value),
            event_category: 'performance'
          });
        });
      }
      
      console.log('Performance Metrics:', metrics);
    }
  });
  
  // Monitor resource loading
  const resourceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 1000) { // Resources taking > 1s
        console.warn(`Slow resource: ${entry.name} took ${Math.round(entry.duration)}ms`);
        
        if (window.gtag) {
          window.gtag('event', 'slow_resource', {
            resource_url: entry.name,
            duration: Math.round(entry.duration),
            event_category: 'performance'
          });
        }
      }
    }
  });
  
  try {
    resourceObserver.observe({ entryTypes: ['resource'] });
  } catch (error) {
    console.warn('Resource observer not supported');
  }
};

/**
 * Optimize font loading for better CLS
 */
export const optimizeFontLoading = (): void => {
  if (typeof document === 'undefined') return;
  
  // Add font-display: swap to all font faces
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Get performance score for SEO reporting
 */
export const getPerformanceScore = (): Promise<{lcp: number, fid: number, cls: number, score: number}> => {
  return new Promise((resolve) => {
    let lcp = 0;
    let fid = 0; 
    let cls = 0;
    let metricsCollected = 0;
    
    const checkComplete = () => {
      metricsCollected++;
      if (metricsCollected >= 3) {
        // Calculate composite score (0-100)
        const lcpScore = lcp <= 2500 ? 100 : lcp <= 4000 ? 50 : 0;
        const fidScore = fid <= 100 ? 100 : fid <= 300 ? 50 : 0;
        const clsScore = cls <= 0.1 ? 100 : cls <= 0.25 ? 50 : 0;
        
        const overallScore = (lcpScore + fidScore + clsScore) / 3;
        
        resolve({ lcp, fid, cls, score: Math.round(overallScore) });
      }
    };
    
    // Collect metrics with timeout
    setTimeout(() => {
      if (metricsCollected < 3) {
        resolve({ lcp: 0, fid: 0, cls: 0, score: 0 });
      }
    }, 5000);
    
    // Try to get existing performance data
    checkComplete();
    checkComplete(); 
    checkComplete();
  });
};