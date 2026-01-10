import { Helmet } from 'react-helmet-async';

/**
 * Critical CSS that should be inlined in the <head> for fastest rendering
 * This contains only the absolute minimum styles needed for above-the-fold content
 */
export const CriticalCSSInline = () => {
  const criticalCSS = `
    /* Critical layout styles */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; }
    .container { max-width: 1280px; margin: 0 auto; padding: 0 1rem; }
    
    /* Navigation critical styles */
    nav { position: fixed; top: 0; width: 100%; z-index: 50; }
    
    /* Hero critical styles */
    .hero { min-height: 100vh; display: flex; align-items: center; }
    
    /* Button critical styles */
    button, .btn { 
      cursor: pointer; 
      border: none; 
      border-radius: 0.5rem;
      padding: 0.75rem 1.5rem;
      font-weight: 600;
    }
    
    /* Prevent layout shift */
    img { max-width: 100%; height: auto; }
  `;

  return (
    <Helmet>
      <style type="text/css">{criticalCSS}</style>
    </Helmet>
  );
};
