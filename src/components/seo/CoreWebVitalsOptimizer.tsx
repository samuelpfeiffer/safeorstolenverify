import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Core Web Vitals Optimizer for Maximum SEO Performance
 * Targets 100/100 PageSpeed scores for #1 ranking
 */
export const CoreWebVitalsOptimizer: React.FC = () => {
  useEffect(() => {
    // Optimize images lazily
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));

    // Preload critical resources
    const criticalResources = [
      '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.endsWith('.png') || resource.endsWith('.jpg') ? 'image' : 'style';
      link.href = resource;
      if (!resource.endsWith('.png') && !resource.endsWith('.jpg')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Remove unused CSS (basic implementation)
    const removeUnusedCSS = () => {
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      stylesheets.forEach((stylesheet) => {
        const link = stylesheet as HTMLLinkElement;
        if (link.href.includes('unused') || link.href.includes('legacy')) {
          link.remove();
        }
      });
    };

    setTimeout(removeUnusedCSS, 100);

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return (
    <Helmet>
      {/* Critical Resource Hints */}
      <link rel="preload" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" as="image" />
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
        as="style" 
        crossOrigin="anonymous"
      />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//lxrdzbknktwlubbmlsqe.supabase.co" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Preconnect for Critical Third-parties */}
      <link rel="preconnect" href="https://lxrdzbknktwlubbmlsqe.supabase.co" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Optimize Font Loading */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      {/* Critical CSS Inlining Hint */}
      <style>
        {`
          /* Critical above-the-fold styles */
          body { 
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #111827;
            color: #ffffff;
          }
          .hero-section {
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #374151;
            border-top: 4px solid #FF6B35;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      
      {/* Web Vitals Monitoring */}
      <script>
        {`
          // Core Web Vitals monitoring
          (function() {
            function sendMetric(metric) {
              if (typeof gtag !== 'undefined') {
                gtag('event', metric.name, {
                  event_category: 'Web Vitals',
                  event_label: metric.id,
                  value: Math.round(metric.value),
                  non_interaction: true,
                });
              }
            }
            
            // Monitor CLS, FID, FCP, LCP, TTFB
            if ('web-vitals' in window) {
              window['web-vitals'].getCLS(sendMetric);
              window['web-vitals'].getFID(sendMetric);
              window['web-vitals'].getFCP(sendMetric);
              window['web-vitals'].getLCP(sendMetric);
              window['web-vitals'].getTTFB(sendMetric);
            }
          })();
        `}
      </script>
    </Helmet>
  );
};