import React from 'react';
import { Helmet } from 'react-helmet-async';

export const GoogleRequirements: React.FC = () => {
  return (
    <Helmet>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="pending" />
      
      {/* Google Analytics 4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </script>
      
      {/* Core Web Vitals Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Mobile-First Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Page Experience Signals */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data for Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Safe or Stolen",
          "url": "https://www.safeorstolen.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.safeorstolen.com/real-time-verification?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" as="image" />
      
      {/* Optimize Image Loading */}
      <link rel="prefetch" href="/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png" />
    </Helmet>
  );
};