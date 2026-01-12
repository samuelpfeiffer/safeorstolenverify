/**
 * Performance optimization utilities for Googlebot and Core Web Vitals
 * These run client-side but help ensure fast rendering
 */

/**
 * Preload critical resources for faster LCP
 */
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return;
  
  const criticalImages = [
    '/images/hero-device.png',
    '/sos-logo.png'
  ];
  
  criticalImages.forEach(src => {
    const existingLink = document.querySelector(`link[rel="preload"][href="${src}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      (link as any).fetchPriority = 'high';
      document.head.appendChild(link);
    }
  });
};

/**
 * Defer non-critical CSS
 */
export const deferNonCriticalCSS = () => {
  const deferredStyles = document.querySelectorAll('link[rel="preload"][as="style"]') as NodeListOf<HTMLLinkElement>;
  deferredStyles.forEach((link) => {
    link.addEventListener('load', () => {
      link.rel = 'stylesheet';
    });
  });
};

/**
 * Defer non-critical scripts
 */
export const deferNonCriticalScripts = () => {
  if (typeof document === 'undefined') return;
  
  const scripts = document.querySelectorAll('script[src*="stripe"], script[src*="analytics"]');
  scripts.forEach(script => {
    if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
      script.setAttribute('defer', '');
    }
  });
};

/**
 * Optimize images for performance
 */
export const optimizeImages = () => {
  if (typeof document === 'undefined') return;
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            delete img.dataset.src;
          }
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    document.querySelectorAll('img[data-src], img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
    
    return () => imageObserver.disconnect();
  }
};

/**
 * Setup Service Worker for caching
 */
export const setupServiceWorker = async () => {
  if ('serviceWorker' in navigator && 'caches' in window) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('ServiceWorker registered:', registration);
    } catch (error) {
      console.log('ServiceWorker registration failed:', error);
    }
  }
};

/**
 * Cache critical resources
 */
export const cacheResources = () => {
  if ('caches' in window) {
    caches.open('v1').then(cache => {
      cache.addAll([
        '/',
        '/main.css',
        '/main.js',
        '/images/hero-device.png'
      ]);
    });
  }
};

/**
 * Add resource hints for better performance
 */
export const addResourceHints = () => {
  if (typeof document === 'undefined') return;
  
  const dnsPrefetchLinks = [
    'https://fonts.googleapis.com',
    'https://lxrdzbknktwlubbmlsqe.supabase.co'
  ];

  dnsPrefetchLinks.forEach(domain => {
    if (!document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`)) {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    }
  });
};

/**
 * Report Core Web Vitals for debugging
 */
export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

/**
 * Optimize for Googlebot rendering
 * Googlebot has ~5 second timeout for JS execution
 */
export const optimizeForGooglebot = () => {
  if (typeof document === 'undefined') return;
  
  // Ensure critical content is visible immediately
  const root = document.getElementById('root');
  if (root) {
    root.style.display = 'block';
    root.style.visibility = 'visible';
  }
  
  // Remove loading states quickly
  setTimeout(() => {
    const loadingElements = document.querySelectorAll('.loading, .skeleton, [data-loading]');
    loadingElements.forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });
  }, 100);
};

/**
 * Initialize all performance optimizations
 */
export const initPerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;
  
  // Run immediately for Googlebot
  optimizeForGooglebot();
  preloadCriticalResources();
  addResourceHints();
  
  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      deferNonCriticalCSS();
      deferNonCriticalScripts();
      optimizeImages();
    });
  } else {
    deferNonCriticalCSS();
    deferNonCriticalScripts();
    optimizeImages();
  }
  
  // Report Web Vitals in development
  if (import.meta.env.DEV) {
    reportWebVitals(console.log);
  }
};