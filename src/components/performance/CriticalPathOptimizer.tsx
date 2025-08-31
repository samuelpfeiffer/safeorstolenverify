import { useEffect } from 'react';

export const CriticalPathOptimizer = () => {
  useEffect(() => {
    // Inline critical CSS for faster rendering
    const inlineCriticalCSS = () => {
      const criticalCSS = `
        /* Critical CSS for LCP optimization */
        .hero-section, .search-form, .trust-indicators {
          font-display: swap;
        }
        
        /* Prevent layout shift */
        img { 
          height: auto; 
          max-width: 100%;
        }
        
        /* Optimize font loading */
        @font-face {
          font-family: 'Inter';
          font-display: swap;
          src: local('Inter');
        }
      `;

      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);
    };

    // Remove render-blocking resources
    const optimizeResourceLoading = () => {
      // Defer non-critical scripts
      document.querySelectorAll('script[src]').forEach(script => {
        const src = script.getAttribute('src') || '';
        if (!src.includes('critical') && !src.includes('analytics')) {
          script.setAttribute('defer', '');
        }
      });

      // Optimize CSS loading
      document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (!href.includes('critical')) {
          link.setAttribute('media', 'print');
          link.setAttribute('onload', "this.media='all'; this.onload=null;");
        }
      });
    };

    // Prefetch next-page resources
    const prefetchNextPageResources = () => {
      const nextPageResources = [
        '/verification',
        '/dashboard',
        '/pricing'
      ];

      nextPageResources.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = path;
        document.head.appendChild(link);
      });
    };

    // Optimize images for mobile LCP
    const optimizeImagesForMobile = () => {
      const heroImages = document.querySelectorAll('img[data-critical], .hero-section img, .search-form img');
      
      heroImages.forEach(img => {
        const imageElement = img as HTMLImageElement;
        
        // Set high priority for LCP candidates
        imageElement.loading = 'eager';
        imageElement.setAttribute('fetchpriority', 'high');
        imageElement.setAttribute('decoding', 'sync');
        
        // Add responsive images if needed
        if (imageElement.src && !imageElement.srcset) {
          const baseSrc = imageElement.src;
          imageElement.srcset = `
            ${baseSrc}?w=480 480w,
            ${baseSrc}?w=800 800w,
            ${baseSrc}?w=1200 1200w
          `;
          imageElement.sizes = '(max-width: 480px) 480px, (max-width: 800px) 800px, 1200px';
        }
      });
    };

    // Execute optimizations
    inlineCriticalCSS();
    optimizeResourceLoading();
    prefetchNextPageResources();
    optimizeImagesForMobile();

    // Clean up on unmount
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};