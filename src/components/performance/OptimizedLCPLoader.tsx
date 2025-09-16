import React, { useEffect } from 'react';

export const OptimizedLCPLoader: React.FC = () => {
  useEffect(() => {
    // Critical resource preloading for LCP optimization
    const preloadCriticalResources = () => {
      // Preload the hero image immediately
      const heroImageLink = document.createElement('link');
      heroImageLink.rel = 'preload';
      heroImageLink.as = 'image';
      heroImageLink.href = '/lovable-uploads/45491b3e-261f-4838-95f8-a95ae95bd6ea.png';
      heroImageLink.fetchPriority = 'high';
      document.head.appendChild(heroImageLink);

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'style';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Optimize images for LCP
    const optimizeForLCP = () => {
      // Set fetchPriority high for critical images
      const criticalImages = document.querySelectorAll('img[loading="eager"]');
      criticalImages.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        imgElement.fetchPriority = 'high';
      });
    };

    // Simple lazy loading for non-critical images
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        // Observe images with data-src
        document.querySelectorAll('img[data-src]').forEach((img) => {
          imageObserver.observe(img);
        });
      }
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeForLCP();
    setupLazyLoading();

    // Clean up
    return () => {
      // Remove preload links after they're no longer needed
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach((link) => {
        if (link.getAttribute('href')?.includes('45491b3e-261f-4838-95f8-a95ae95bd6ea')) {
          // Keep hero image preload
          return;
        }
      });
    };
  }, []);

  return null;
};
