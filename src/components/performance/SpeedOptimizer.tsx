import { useEffect } from 'react';

/**
 * Speed Optimization Component
 * Implements critical performance improvements
 */
export const SpeedOptimizer = () => {
  useEffect(() => {
    // 1. Preconnect to critical domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // 2. Defer non-critical scripts
    const deferScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer="true"]');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = script.getAttribute('src') || '';
        newScript.defer = true;
        document.body.appendChild(newScript);
      });
    };

    // 3. Lazy load images below the fold
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-lazy="true"]');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.removeAttribute('data-lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px'
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // 4. Remove unused CSS (critical CSS inline)
    const optimizeCSS = () => {
      // Mark non-critical stylesheets for async loading
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
      stylesheets.forEach(sheet => {
        const link = sheet as HTMLLinkElement;
        link.media = 'print';
        link.onload = function(this: HTMLLinkElement) {
          this.media = 'all';
        };
      });
    };

    // 5. Implement resource hints
    const addResourceHints = () => {
      // DNS prefetch for external resources
      const dnsPrefetch = [
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      dnsPrefetch.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    // Execute optimizations
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        deferScripts();
        lazyLoadImages();
        optimizeCSS();
        addResourceHints();
      });
    } else {
      deferScripts();
      lazyLoadImages();
      optimizeCSS();
      addResourceHints();
    }

    // 6. Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker registration failed, continue without it
        });
      });
    }

    // Cleanup
    return () => {
      // Remove observers if component unmounts
    };
  }, []);

  return null; // This component doesn't render anything
};
