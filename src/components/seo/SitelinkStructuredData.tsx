import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SitelinkStructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Safe Or Stolen",
    "alternateName": "SafeOrStolen.com",
    "url": "https://safeorstolen.com",
    "description": "Check if items are stolen or safe to buy. Verify serial numbers, IMEI, and VIN numbers against stolen item databases.",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://safeorstolen.com/verify?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "mainEntity": {
      "@type": "Organization",
      "name": "Safe Or Stolen LLC",
      "url": "https://safeorstolen.com",
      "sameAs": [
        "https://www.facebook.com/SafeOrStolenLLC"
      ]
    }
  };

  const sitelinksSearchBox = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://safeorstolen.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://safeorstolen.com/verify?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safeorstolen.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Serial Number Check",
        "item": "https://safeorstolen.com/verify"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "IMEI Check",
        "item": "https://safeorstolen.com/imei"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "VIN Check",
        "item": "https://safeorstolen.com/vin"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Pricing",
        "item": "https://safeorstolen.com/pricing"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(sitelinksSearchBox)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};