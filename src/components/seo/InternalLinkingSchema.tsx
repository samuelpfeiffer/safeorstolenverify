import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Internal Linking Schema Component
 * Provides structured data for internal page relationships and navigation
 * Helps search engines understand site architecture and content relationships
 */
export const InternalLinkingSchema: React.FC = () => {
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "SafeOrStolen Navigation",
    "url": "https://safeorstolen.com",
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "Verification Services",
        "url": "https://safeorstolen.com/stolen-item-checker",
        "description": "Free stolen item verification services"
      },
      {
        "@type": "SiteNavigationElement", 
        "name": "Serial Number Checker",
        "url": "https://safeorstolen.com/serial-number-checker",
        "description": "Check serial numbers against stolen databases"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "IMEI Check",
        "url": "https://safeorstolen.com/imei-check", 
        "description": "Verify phone IMEI numbers and blacklist status"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "VIN Verification", 
        "url": "https://safeorstolen.com/vin-verification",
        "description": "Check vehicle VIN numbers for theft reports"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Safety Guides",
        "url": "https://safeorstolen.com/how-to-check-if-item-stolen",
        "description": "Comprehensive guides on avoiding stolen goods"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Data Sources",
        "url": "https://safeorstolen.com/data-sources",
        "description": "Information about our verification data sources"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Transparency Report",
        "url": "https://safeorstolen.com/transparency",
        "description": "Transparency and accountability information"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "FAQ",
        "url": "https://safeorstolen.com/faq",
        "description": "Frequently asked questions about our services"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "API Documentation",
        "url": "https://safeorstolen.com/api-docs",
        "description": "Developer API documentation and integration guides"
      }
    ]
  };

  const breadcrumbListSchema = {
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
        "name": "Verification Services",
        "item": "https://safeorstolen.com/stolen-item-checker"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Safety Guides", 
        "item": "https://safeorstolen.com/how-to-check-if-item-stolen"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Resources",
        "item": "https://safeorstolen.com/faq"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(siteNavigationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbListSchema)}
      </script>
    </Helmet>
  );
};