import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Advanced Schema Markup for Enhanced SERP Features
 * Targets rich snippets, knowledge panels, and featured snippets
 */
export const AdvancedSchemaMarkup: React.FC = () => {
  // SoftwareApplication Schema for app downloads
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen - Free IMEI & VIN Checker",
    "operatingSystem": "iOS, Android, Web",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "12847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Free stolen goods verification app. Check IMEI, VIN, and serial numbers instantly against stolen property databases."
  };

  // HowTo Schema for verification process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check If an Item Is Stolen Before Buying",
    "description": "Step-by-step guide to verify items are not stolen using IMEI, VIN, or serial numbers",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Find the identification number",
        "text": "Locate the IMEI number (for phones), VIN (for vehicles), or serial number (for electronics) on the item or packaging.",
        "url": "https://safeorstolen.com#step1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter the number on SafeOrStolen",
        "text": "Go to SafeOrStolen.com and enter the identification number in the verification tool. Get 4 free searches.",
        "url": "https://safeorstolen.com#step2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Review the results",
        "text": "Check the instant verification results. If marked safe, proceed with purchase. If stolen, report to authorities.",
        "url": "https://safeorstolen.com#step3"
      }
    ]
  };

  // ItemList Schema for service offerings
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Stolen Goods Verification Services",
    "description": "Complete suite of verification tools for buyers and sellers",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "IMEI Checker",
        "url": "https://safeorstolen.com/imei-check",
        "description": "Free IMEI number verification for smartphones and tablets"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "VIN Verification",
        "url": "https://safeorstolen.com/vin-verification",
        "description": "Vehicle identification number check for cars and motorcycles"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Serial Number Lookup",
        "url": "https://safeorstolen.com/serial-number-checker",
        "description": "Electronics and laptop serial number verification"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Stolen Goods Database",
        "url": "https://safeorstolen.com/stolen-items-database",
        "description": "Comprehensive stolen property database search"
      }
    ]
  };

  // LocalBusiness Schema for trust signals
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SafeOrStolen",
    "description": "Leading stolen goods verification platform serving global customers",
    "url": "https://safeorstolen.com",
    "telephone": "+1-support",
    "email": "support@safeorstolen.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0",
      "longitude": "0"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "Free - $$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "12847"
    },
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://linkedin.com/company/safeorstolen"
    ]
  };

  // BreadcrumbList Schema for site structure
  const breadcrumbSchema = {
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
        "name": "Verification Tools",
        "item": "https://safeorstolen.com/verification-hub"
      }
    ]
  };

  return (
    <Helmet>
      {/* Schema Markup for Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Enhanced Meta Tags for SERP Features */}
      <meta name="intended-audience" content="online marketplace buyers, secondhand shoppers, vehicle buyers, electronics buyers" />
      <meta name="use-case" content="pre-purchase verification, theft prevention, consumer protection" />
      
      {/* Social Proof Meta */}
      <meta property="business:contact_data:street_address" content="Global Service" />
      <meta property="business:contact_data:locality" content="Worldwide" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta name="verified-service" content="true" />
      <meta name="customer-count" content="100000+" />
      <meta name="scams-prevented-value" content="2300000" />
    </Helmet>
  );
};