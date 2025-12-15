import React from 'react';
import { Helmet } from 'react-helmet-async';

export const GoogleSearchConsoleSetup: React.FC = () => {
  return (
    <Helmet>
      {/* Google Search Console Verification - To be replaced with actual token */}
      <meta name="google-site-verification" content="google29952b5cc1a6a4dd" />
      
      {/* Google Analytics 4 - Active */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-0T59FF9N6Z"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0T59FF9N6Z');
        `}
      </script>
      
      {/* Enhanced SEO for Google Discovery */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Page Performance Hints */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      
      {/* Important Schema.org structured data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://safeorstolen.com/#organization",
              "name": "Safe Or Stolen",
              "url": "https://safeorstolen.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
              },
              "description": "Global verification service to check if items are stolen before purchasing",
              "foundingDate": "2024",
              "legalName": "Safe Or Stolen",
              "sameAs": [
                "https://twitter.com/safeorstolen"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://safeorstolen.com/#website",
              "url": "https://safeorstolen.com",
              "name": "Safe Or Stolen",
              "description": "Check if items are stolen before you buy - IMEI, VIN, Serial Number verification",
              "publisher": {
                "@id": "https://safeorstolen.com/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://safeorstolen.com/verify",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "Service",
              "@id": "https://safeorstolen.com/#service",
              "name": "Stolen Goods Verification Service",
              "description": "Real-time verification to check if IMEI, serial numbers, and VIN are stolen",
              "provider": {
                "@id": "https://safeorstolen.com/#organization"
              },
              "serviceType": "Verification Service",
              "areaServed": "Worldwide"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};