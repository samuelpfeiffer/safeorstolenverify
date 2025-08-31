import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export const SpeedOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCritical = () => {
      // Preload hero image
      const heroPreload = document.createElement('link');
      heroPreload.rel = 'preload';
      heroPreload.href = '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png';
      heroPreload.as = 'image';
      heroPreload.fetchPriority = 'high';
      document.head.appendChild(heroPreload);

      // Preload FasterCapital logo
      const fcPreload = document.createElement('link');
      fcPreload.rel = 'preload';
      fcPreload.href = '/images/partners/fastercapital-logo.png';
      fcPreload.as = 'image';
      document.head.appendChild(fcPreload);
    };

    // Optimize images for lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img:not([data-optimized])');
      images.forEach((img) => {
        const image = img as HTMLImageElement;
        if (!image.loading) {
          image.loading = 'lazy';
        }
        if (!image.decoding) {
          image.decoding = 'async';
        }
        image.setAttribute('data-optimized', 'true');
      });
    };

    // Initialize optimizations
    preloadCritical();
    optimizeImages();

    // Observe new images
    const observer = new MutationObserver(() => {
      optimizeImages();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Helmet>
      {/* Critical Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://safeorstolen.com" />
      <link rel="dns-prefetch" href="https://fastercapital.com" />
      
      {/* Prefetch next likely pages */}
      <link rel="prefetch" href="/verify" />
      <link rel="prefetch" href="/pricing" />
      <link rel="prefetch" href="/auth" />
      
      {/* Performance Hints */}
      <meta name="resource-hints" content="preconnect, dns-prefetch, preload, prefetch" />
      
      {/* Critical CSS inline */}
      <style>
        {`
          .hero-section { font-display: swap; }
          .critical-above-fold { contain: layout style paint; }
          img { content-visibility: auto; }
        `}
      </style>
    </Helmet>
  );
};