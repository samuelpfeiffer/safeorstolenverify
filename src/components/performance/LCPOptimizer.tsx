import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Optimizes Largest Contentful Paint (LCP) to meet Core Web Vitals
 * Target: LCP < 2.5s (currently 6892ms - POOR)
 */
export const LCPOptimizer = () => {
  useEffect(() => {
    // Optimize below-the-fold images only (hero is already optimized)
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        // Skip first 3 images (already optimized in components)
        if (index >= 3) {
          img.loading = 'lazy';
          img.decoding = 'async';
        }
      });
    };

    // Defer to after critical render
    const timeoutId = setTimeout(optimizeImages, 300);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Helmet>
      {/* Preconnect for faster resource loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Critical CSS for LCP optimization */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Critical styles for LCP optimization */
          img{
            max-width:100%;
            height:auto;
          }
          /* Reduce layout shift */
          *{
            box-sizing:border-box;
          }
        `
      }} />
    </Helmet>
  );
};
