import { Helmet } from 'react-helmet-async';

interface CriticalSEOFixesProps {
  pageType?: 'homepage' | 'service' | 'blog' | 'landing';
}

export const CriticalSEOFixes: React.FC<CriticalSEOFixesProps> = ({ pageType = 'homepage' }) => {
  const getPageSpecificOptimizations = () => {
    switch (pageType) {
      case 'homepage':
        return {
          preloadResources: [
            '/lovable-uploads/45491b3e-261f-4838-95f8-a95ae95bd6ea.png',
            '/dashboard',
            '/auth'
          ],
          criticalCSS: `
            .hero-section { 
              min-height: 100vh; 
              background: linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background)/.8) 100%);
            }
            .main-headline { 
              font-size: clamp(2rem, 8vw, 4rem); 
              line-height: 1.1; 
              font-weight: 800;
              color: hsl(var(--sos-orange));
            }
          `
        };
      case 'service':
        return {
          preloadResources: ['/dashboard'],
          criticalCSS: `
            .service-hero { padding-top: 2rem; }
            .service-title { font-size: clamp(1.875rem, 5vw, 3rem); }
          `
        };
      default:
        return {
          preloadResources: [],
          criticalCSS: ''
        };
    }
  };

  const optimizations = getPageSpecificOptimizations();

  return (
    <Helmet>
      {/* Critical performance optimizations */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* Preload critical resources */}
      {optimizations.preloadResources.map((resource, index) => (
        <link 
          key={index} 
          rel="preload" 
          href={resource} 
          as={resource.includes('.png') || resource.includes('.jpg') ? 'image' : 'document'}
          fetchPriority={index === 0 ? 'high' : 'low'}
        />
      ))}
      
      {/* Critical inline CSS */}
      {optimizations.criticalCSS && (
        <style>{optimizations.criticalCSS}</style>
      )}
      
      {/* Enhanced robots directives */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:160, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:160, max-video-preview:-1" />
      
      {/* Performance and UX signals */}
      <meta name="theme-color" content="hsl(var(--sos-orange))" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="hsl(var(--background))" media="(prefers-color-scheme: dark)" />
      
      {/* Enhanced security for SEO */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};