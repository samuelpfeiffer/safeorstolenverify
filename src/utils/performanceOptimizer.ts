/**
 * Performance Optimization Utilities
 * Helps improve Core Web Vitals and overall site performance
 */

export const performanceOptimizer = {
  /**
   * Lazy load images with intersection observer
   */
  lazyLoadImages() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  },

  /**
   * Preload critical resources
   */
  preloadCriticalResources() {
    if (typeof document !== 'undefined') {
      // Preload critical API endpoints
      const criticalEndpoints = [
        'https://lxrdzbknktwlubbmlsqe.supabase.co/rest/v1/profiles',
        'https://lxrdzbknktwlubbmlsqe.supabase.co/auth/v1/user'
      ];

      criticalEndpoints.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    }
  },

  /**
   * Optimize CSS delivery
   */
  optimizeCSSDelivery() {
    if (typeof document !== 'undefined') {
      // Load non-critical CSS asynchronously
      const nonCriticalCSS = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
      ];

      nonCriticalCSS.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'style';
        link.onload = function() {
          (this as HTMLLinkElement).onload = null;
          (this as HTMLLinkElement).rel = 'stylesheet';
        };
        document.head.appendChild(link);
      });
    }
  },

  /**
   * Reduce main thread blocking
   */
  reduceMainThreadBlocking() {
    if (typeof window !== 'undefined') {
      // Use requestIdleCallback for non-critical operations
      const scheduleWork = (callback: () => void) => {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(callback);
        } else {
          setTimeout(callback, 0);
        }
      };

      // Schedule analytics and non-critical operations
      scheduleWork(() => {
        // Non-critical analytics initialization
        console.log('Initializing non-critical operations');
      });
    }
  },

  /**
   * Optimize bundle size
   */
  analyzeBundleSize() {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      // Analyze bundle size in development
      const scripts = document.querySelectorAll('script[src]');
      const styles = document.querySelectorAll('link[rel="stylesheet"]');
      
      console.group('Bundle Analysis');
      console.log(`Scripts: ${scripts.length}`);
      console.log(`Stylesheets: ${styles.length}`);
      console.groupEnd();
    }
  },

  /**
   * Implement service worker for caching
   */
  implementServiceWorker() {
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }
};

export default performanceOptimizer;