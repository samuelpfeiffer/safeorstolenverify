/**
 * SEO Optimization Utilities
 * Helps ensure proper HTML rendering and meta tag management
 */

export const seoOptimizer = {
  /**
   * Ensures the page title is properly set
   */
  setPageTitle(title: string, suffix = ' | SafeOrStolen') {
    if (typeof document !== 'undefined') {
      document.title = title + suffix;
    }
  },

  /**
   * Sets meta description for the current page
   */
  setMetaDescription(description: string) {
    if (typeof document !== 'undefined') {
      let metaTag = document.querySelector('meta[name="description"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'description');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', description);
    }
  },

  /**
   * Sets canonical URL for the current page
   */
  setCanonicalUrl(url: string) {
    if (typeof document !== 'undefined') {
      let linkTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.rel = 'canonical';
        document.head.appendChild(linkTag);
      }
      linkTag.href = url;
    }
  },

  /**
   * Preloads critical resources for better performance
   */
  preloadResource(href: string, as: string = 'fetch', crossorigin: boolean = true) {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (crossorigin) link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  },

  /**
   * Adds structured data to the page
   */
  addStructuredData(data: object) {
    if (typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }
  },

  /**
   * Ensures proper meta robots tag
   */
  setMetaRobots(content: string = 'index, follow') {
    if (typeof document !== 'undefined') {
      let metaTag = document.querySelector('meta[name="robots"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'robots');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    }
  },

  /**
   * Optimizes images with proper alt tags and lazy loading
   */
  optimizeImages() {
    if (typeof document !== 'undefined') {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', 'SafeOrStolen verification service');
        }
        if (!img.getAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });
    }
  }
};

/**
 * Performance monitoring utility
 */
export const performanceMonitor = {
  /**
   * Measures and logs Core Web Vitals
   */
  measureWebVitals() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
        });
      }).observe({ type: 'largest-contentful-paint', buffered: true });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
      }).observe({ type: 'first-input', buffered: true });

      // Cumulative Layout Shift
      let cumulativeLayoutShift = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            cumulativeLayoutShift += entry.value;
            console.log('CLS:', cumulativeLayoutShift);
          }
        });
      }).observe({ type: 'layout-shift', buffered: true });
    }
  },

  /**
   * Optimizes resource loading
   */
  optimizeResourceLoading() {
    if (typeof document !== 'undefined') {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Add font display swap for better performance
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
      `;
      document.head.appendChild(style);
    }
  }
};

export default seoOptimizer;