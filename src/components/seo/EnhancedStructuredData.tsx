import { Helmet } from 'react-helmet-async';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * Enhanced Structured Data Component
 * Implements comprehensive Schema.org markup for rich snippets
 */

export const EnhancedStructuredData = () => {
  const location = useSafeLocation();
  const currentUrl = `https://safeorstolen.com${location?.pathname || '/'}`;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafeOrStolen",
    "legalName": "SafeOrStolen LLC",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "SafeOrStolen Founders"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@safeorstolen.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.youtube.com/@safeorstolenofficially",
      "https://x.com/safeorstolen",
      "https://www.linkedin.com/company/safeorstolen/"
    ]
  };

  // LocalBusiness Schema (for local SEO)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SafeOrStolen",
    "image": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "@id": "https://safeorstolen.com",
    "url": "https://safeorstolen.com",
    "telephone": "",
    "priceRange": "$0.50 - $29.99",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    }
  };

  // SoftwareApplication Schema (for mobile app)
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen",
    "operatingSystem": ["iOS", "Android", "Web"],
    "applicationCategory": "SecurityApplication",
    "price": "Free",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247"
    }
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SafeOrStolen",
    "url": "https://safeorstolen.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://safeorstolen.com/dashboard?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // BreadcrumbList Schema
  const getBreadcrumbSchema = () => {
    if (!location) return null;
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    if (pathSegments.length === 0) return null;

    const breadcrumbList = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safeorstolen.com"
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        "item": `https://safeorstolen.com/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    ];

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbList
    };
  };

  // Service Schema (not a product - SafeOrStolen is a verification service)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SafeOrStolen Verification Service",
    "description": "Mobile app and web platform for verifying stolen phones, cars, and electronics using IMEI, VIN, and serial numbers",
    "serviceType": "Security Verification Service",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "areaServed": "Worldwide",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // HowTo Schema for guides
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check if a Phone is Stolen Using IMEI",
    "description": "Step-by-step guide to verify if a phone is stolen before buying",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Find IMEI Number",
        "text": "Dial *#06# on the phone to display the IMEI number",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Enter IMEI in SafeOrStolen",
        "text": "Open SafeOrStolen app and enter the 15-digit IMEI number",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Review Results",
        "text": "Check verification results across 50+ global databases",
        "position": 3
      }
    ]
  };

  const breadcrumbSchema = getBreadcrumbSchema();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareAppSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      {location?.pathname.includes('how-it-works') && (
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      )}
    </Helmet>
  );
};
