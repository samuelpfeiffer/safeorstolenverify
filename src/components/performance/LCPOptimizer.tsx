import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Optimizes Largest Contentful Paint (LCP) to meet Core Web Vitals
 * Target: LCP < 2.5s (currently 6892ms - POOR)
 */
export const LCPOptimizer = () => {
  useEffect(() => {
    // Optimize images for faster LCP
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        // Prioritize above-the-fold images
        if (index < 3) {
          img.loading = 'eager';
          img.decoding = 'async';
          // @ts-ignore - fetchPriority is not in TypeScript types yet
          img.fetchPriority = 'high';
        } else {
          img.loading = 'lazy';
          img.decoding = 'async';
        }
      });
    };

    // Run optimization after initial render
    const timeoutId = setTimeout(optimizeImages, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Helmet>
      {/* Preconnect to external domains for faster resource loading */}
      <link rel="preconnect" href="https://safeorstolen.com" />
      <link rel="dns-prefetch" href="https://safeorstolen.com" />
      
      {/* Critical CSS for LCP optimization */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Load fonts asynchronously */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          /* Critical styles for LCP optimization */
          img{
            content-visibility:auto;
            max-width:100%;
            height:auto;
          }
          .hero-image{
            display:block;
            width:100%;
            height:auto;
          }
          /* Reduce layout shift */
          *{
            box-sizing:border-box;
          }
          /* Optimize animations */
          @media (prefers-reduced-motion: reduce) {
            *,*::before,*::after{
              animation-duration:0.01ms!important;
              animation-iteration-count:1!important;
              transition-duration:0.01ms!important;
            }
          }
        `
      }} />
    </Helmet>
  );
};
