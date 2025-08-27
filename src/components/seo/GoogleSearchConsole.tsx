import React from 'react';
import { Helmet } from 'react-helmet-async';

export const GoogleSearchConsole: React.FC = () => {
  return (
    <Helmet>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="your-google-search-console-verification-code" />
      
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
      
      {/* Structured Data for Enhanced Search Results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I check if something is stolen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Enter the item's IMEI, serial number, or VIN into our verification system. We'll instantly check against global stolen goods databases to tell you if it's safe to buy."
              }
            },
            {
              "@type": "Question", 
              "name": "Is the stolen goods check free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer free verification checks for IMEI, serial numbers, and VIN numbers. Premium features are available for enhanced verification."
              }
            },
            {
              "@type": "Question",
              "name": "What types of items can I verify?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can verify phones (IMEI), cars (VIN), bikes, electronics, firearms, and any item with a serial number. We support verification for all major categories of secondhand goods."
              }
            }
          ]
        })}
      </script>

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
          "aggregateRating": {
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "ProfessionalService",
              "name": "Safe Or Stolen"
            },
            "ratingValue": "4.8",
            "reviewCount": "1247",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Verification Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "IMEI Verification",
                  "description": "Check if phone IMEI is stolen or blacklisted"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "VIN Verification",
                  "description": "Check if vehicle VIN is reported stolen"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Serial Number Verification",
                  "description": "Verify electronics and other items by serial number"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};