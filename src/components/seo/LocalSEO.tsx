import React from 'react';
import { Helmet } from 'react-helmet-async';

export const LocalSEO: React.FC = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Safe or Stolen",
    "description": "Stolen goods verification service helping consumers check IMEI, VIN, and serial numbers before purchasing secondhand items",
    "url": "https://safeorstolen.com",
    "telephone": "+1-206-249-2203",
    "email": "safeorstolenmail@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Phoenix",
      "addressRegion": "AZ",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.4484",
      "longitude": "-112.0740"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country", 
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "33.4484",
        "longitude": "-112.0740"
      },
      "geoRadius": "50000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Stolen Goods Verification Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IMEI Check",
            "description": "Verify if smartphones are stolen using IMEI lookup"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "VIN Verification",
            "description": "Check if vehicles are stolen using VIN lookup"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Serial Number Check",
            "description": "Verify electronics and other items using serial numbers"
          }
        }
      ]
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "Free - $9.99"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      
      {/* Local Business Meta Tags */}
      <meta name="geo.region" content="US-AZ" />
      <meta name="geo.placename" content="Phoenix" />
      <meta name="geo.position" content="33.4484;-112.0740" />
      <meta name="ICBM" content="33.4484, -112.0740" />
      
      {/* Service Area */}
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="target-country" content="US, CA, UK, AU" />
    </Helmet>
  );
};