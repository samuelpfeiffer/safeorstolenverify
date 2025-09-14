import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export const CoreWebVitalsOptimizer: React.FC = () => {
  useEffect(() => {
    // Optimize LCP by preloading critical resources
    const preloadCriticalResources = () => {
      // Preload hero image for faster LCP
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/lovable-uploads/45491b3e-261f-4838-95f8-a95ae95bd6ea.png';
      link.as = 'image';
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    };

    // Optimize CLS by preventing layout shifts
    const preventLayoutShifts = () => {
      // Set explicit dimensions for images below the fold
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      lazyImages.forEach((img: any) => {
        if (!img.width || !img.height) {
          img.style.aspectRatio = '16/9';
          img.style.objectFit = 'cover';
        }
      });
    };

    // Optimize FID by deferring non-critical JavaScript
    const optimizeFID = () => {
      // Defer non-critical JavaScript execution
      const deferredScripts = document.querySelectorAll('script:not([src*="gtag"]):not([src*="gptengineer"])');
      deferredScripts.forEach((script: any) => {
        if (!script.defer && !script.async) {
          script.defer = true;
        }
      });
    };

    preloadCriticalResources();
    
    // Run optimizations after initial render
    requestIdleCallback(() => {
      preventLayoutShifts();
      optimizeFID();
    });

  }, []);

  return (
    <Helmet>
      {/* Critical CSS for above-the-fold content */}
      <style>{`
        /* Inline critical CSS for LCP optimization */
        .hero-section { min-height: 100vh; }
        .hero-image { 
          width: 100%; 
          height: auto; 
          object-fit: contain;
          content-visibility: auto;
          contain-intrinsic-size: 1200px 600px;
        }
        /* Prevent CLS from dynamic content */
        .loading-placeholder { 
          min-height: 200px; 
          background: linear-gradient(90deg, hsl(var(--muted)) 25%, transparent 37%, hsl(var(--muted)) 63%);
          background-size: 400% 100%;
          animation: loading 1.4s ease infinite;
        }
        @keyframes loading {
          0% { background-position: 100% 50%; }
          100% { background-position: -100% 50%; }
        }
      `}</style>

      {/* Resource hints for performance */}
      <link rel="preload" href="/lovable-uploads/45491b3e-261f-4838-95f8-a95ae95bd6ea.png" as="image" fetchPriority="high" />
      <link rel="prefetch" href="/dashboard" />
      <link rel="prefetch" href="/auth" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Viewport optimizations */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Performance hints */}
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
    </Helmet>
  );
};