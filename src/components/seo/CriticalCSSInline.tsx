import { Helmet } from 'react-helmet-async';

/**
 * Critical CSS that should be inlined in the <head> for fastest rendering
 * This contains only the absolute minimum styles needed for above-the-fold content
 * Optimized for Core Web Vitals (LCP < 2.5s, CLS < 0.1)
 */
export const CriticalCSSInline = () => {
  const criticalCSS = `
    /* Critical layout - prevent CLS */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; }
    
    /* Navigation - fixed height prevents CLS */
    nav, nav.fixed-nav { 
      position: fixed; 
      top: 0; 
      left: 0;
      right: 0;
      height: 80px; 
      z-index: 50;
      contain: layout style;
    }
    
    /* Main content - exact padding for nav */
    main { padding-top: 80px !important; }
    
    /* Hero critical styles - prevent CLS */
    .hero, [data-hero-img] { 
      min-height: 180px; 
      aspect-ratio: 16/9;
      contain: layout style paint;
    }
    
    /* Image stability */
    img { 
      max-width: 100%; 
      height: auto; 
      display: block;
    }
    
    /* Button critical styles */
    button, .btn { 
      cursor: pointer; 
      border: none; 
      border-radius: 0.5rem;
      padding: 0.75rem 1.5rem;
      font-weight: 600;
      min-height: 44px; /* Touch target */
    }
    
    /* Mobile-specific CLS prevention */
    @media (max-width: 768px) {
      h1 { font-size: clamp(1.5rem, 6vw, 2.25rem); min-height: 2.5em; }
      [data-hero-img] { min-height: 160px; }
      .trust-header { min-height: 36px; }
    }
    
    /* Lazy section containment */
    .lazy-section {
      contain: layout style;
      content-visibility: auto;
    }
  `;

  return (
    <Helmet>
      <style type="text/css">{criticalCSS}</style>
    </Helmet>
  );
};
