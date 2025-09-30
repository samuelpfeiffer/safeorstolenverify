import React, { useEffect } from 'react';

export const SEOEnhancements: React.FC = () => {
  useEffect(() => {
    // Add preconnect for critical domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnectDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Add DNS prefetch for external resources
    const dnsPrefetchDomains = [
      'https://www.google-analytics.com',
    ];

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Optimize image loading with native lazy loading
    document.querySelectorAll('img[data-src]').forEach((img) => {
      const image = img as HTMLImageElement;
      image.src = image.dataset.src || '';
      image.removeAttribute('data-src');
    });

    // Add structured data for organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "logo": "https://safeorstolen.com/logo.png",
      "description": "Leading verification service for checking if items are reported as lost or stolen",
      "sameAs": [
        "https://www.facebook.com/safeorstolen",
        "https://twitter.com/safeorstolen",
        "https://www.linkedin.com/company/safeorstolen"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": ["English"]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.querySelectorAll('link[rel="preconnect"], link[rel="dns-prefetch"]').forEach(link => {
        if (preconnectDomains.includes(link.getAttribute('href') || '') || 
            dnsPrefetchDomains.includes(link.getAttribute('href') || '')) {
          link.remove();
        }
      });
      
      document.querySelectorAll('script[type="application/ld+json"]').forEach(s => {
        if (s.textContent?.includes('SafeOrStolen')) {
          s.remove();
        }
      });
    };
  }, []);

  return null;
};
