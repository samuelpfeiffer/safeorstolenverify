
/**
 * SEO Performance Optimization Utilities
 */

/**
 * Preload critical resources
 */
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);

    // Preload logo image
    const logoPreload = document.createElement('link');
    logoPreload.rel = 'preload';
    logoPreload.href = '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png';
    logoPreload.as = 'image';
    document.head.appendChild(logoPreload);
  }
};

/**
 * Lazy load images with intersection observer
 */
export const setupLazyLoading = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Optimize images for different screen sizes
 */
export const getOptimizedImageUrl = (baseUrl: string, width: number, quality: number = 80): string => {
  // This would integrate with an image optimization service
  // For now, return the base URL
  return baseUrl;
};

/**
 * Add structured data to page
 */
export const addStructuredData = (data: any) => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
};

/**
 * Optimize critical rendering path
 */
export const optimizeCriticalPath = () => {
  if (typeof window !== 'undefined') {
    // Remove unused CSS
    const removeUnusedCSS = () => {
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      stylesheets.forEach(stylesheet => {
        if (stylesheet.getAttribute('href')?.includes('unused')) {
          stylesheet.remove();
        }
      });
    };

    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.getAttribute('src')?.includes('critical')) {
          script.setAttribute('defer', '');
        }
      });
    };

    removeUnusedCSS();
    deferNonCriticalJS();
  }
};

/**
 * Monitor Core Web Vitals
 */
export const monitorCoreWebVitals = () => {
  if (typeof window !== 'undefined') {
    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    let clsEntries: any[] = [];

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          clsEntries.push(entry);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.log('Layout shift observer not supported');
    }

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'first-input') {
          // Fix the TypeScript error by casting to the correct type
          const fidEntry = entry as PerformanceEventTiming;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          console.log('First Input Delay:', fid);
          
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(fid),
              event_category: 'performance'
            });
          }
        }
      }
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.log('First input observer not supported');
    }
  }
};

/**
 * Initialize all performance optimizations
 */
export const initPerformanceOptimizations = () => {
  preloadCriticalResources();
  setupLazyLoading();
  optimizeCriticalPath();
  monitorCoreWebVitals();
};
