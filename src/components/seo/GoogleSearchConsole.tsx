import React from 'react';
import { Helmet } from 'react-helmet-async';

export const GoogleSearchConsole: React.FC = () => {
  return (
    <Helmet>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="google29952b5cc1a6a4dd" />
      
      {/* Enhanced Robots Directives */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Google-specific Directives */}
      <meta name="google" content="nositelinksearchbox" />
      <meta name="google" content="notranslate" />
      
      {/* Enhanced Crawling Instructions */}
      <meta name="revisit-after" content="1 day" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://safeorstolen.com/"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Verify Items",
              "item": "https://safeorstolen.com/#verification"
            }
          ]
        })}
      </script>

      {/* Local Business Schema for Better Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Safe Or Stolen",
          "description": "Professional stolen goods verification service",
          "url": "https://safeorstolen.com",
          "serviceArea": {
            "@type": "Place",
            "name": "Worldwide"
          },
          "priceRange": "Free - $$$",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Verification Services",
            "numberOfItems": 3,
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "IMEI Verification",
                  "description": "Check if phone IMEI is stolen or blacklisted"
                },
                "price": "0",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://safeorstolen.com/pricing"
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "VIN Verification",
                  "description": "Check if vehicle VIN is reported stolen"
                },
                "price": "0",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://safeorstolen.com/pricing"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Serial Number Verification",
                  "description": "Verify electronics and other items by serial number"
                },
                "price": "0",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://safeorstolen.com/pricing"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};