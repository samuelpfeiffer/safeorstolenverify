import { Helmet } from 'react-helmet-async';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * Advanced Schema Markup Generator - Entity-Based SEO
 * Implements comprehensive schema types to establish topical authority
 * Enhanced with BreadcrumbList, LocalBusiness, and more
 */

export const AdvancedSchemaGenerator = () => {
  const location = useSafeLocation();
  const currentPath = location?.pathname || '/';
  const currentUrl = `https://safeorstolen.com${currentPath}`;

  // Generate dynamic BreadcrumbList based on current path
  const generateBreadcrumbs = () => {
    const pathParts = currentPath.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safeorstolen.com/"
      }
    ];

    let currentPathBuilder = '';
    pathParts.forEach((part, index) => {
      currentPathBuilder += `/${part}`;
      const name = part
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://safeorstolen.com${currentPathBuilder}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  };

  // ProfessionalService Schema (more accurate than LocalBusiness for online service)
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://safeorstolen.com/#service",
    "name": "SafeOrStolen",
    "description": "Stolen item verification service checking IMEI, VIN, and serial numbers against 50+ databases",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/sos-logo.png",
    "image": "https://safeorstolen.com/sos-logo.png",
    "priceRange": "Free - $9.99",
    "email": "support@safeorstolen.com",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": ["Stolen Item Verification", "IMEI Check", "VIN Lookup", "Serial Number Verification"],
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://facebook.com/safeorstolen",
      "https://linkedin.com/company/safeorstolen",
      "https://www.youtube.com/@safeorstolen"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://safeorstolen.com/verify",
      "serviceType": "Online verification service",
      "availableLanguage": "English"
    }
  };

  // Product Schema for the verification service
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SafeOrStolen Verification Service",
    "description": "Instant stolen item verification checking IMEI, VIN, and serial numbers against 50+ global databases including NCIC, NICB, carrier blacklists",
    "brand": {
      "@type": "Brand",
      "name": "SafeOrStolen"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "9.99",
      "priceCurrency": "USD",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "price": "0",
          "priceCurrency": "USD",
          "description": "2 free verifications"
        },
        {
          "@type": "Offer",
          "name": "Pro Plan",
          "price": "9.99",
          "priceCurrency": "USD",
          "description": "Unlimited verifications per month"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2547",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Saved me from buying a stolen iPhone on Facebook Marketplace. Instant results!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mike T."
        },
        "reviewBody": "Essential for any used car purchase. Found out the VIN was flagged before I wasted my money."
      }
    ]
  };

  // HowTo Schema for featured snippets
  const howToSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check if a Phone is Stolen Using IMEI",
      "description": "Step-by-step guide to verify if a mobile phone is stolen using its IMEI number",
      "totalTime": "PT2M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "tool": [
        {
          "@type": "HowToTool",
          "name": "SafeOrStolen Mobile App or Website"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Find IMEI Number",
          "text": "Dial *#06# on the phone or check Settings > About Phone to find the 15-digit IMEI",
          "url": "https://safeorstolen.com/imei-checker#step-1"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Go to SafeOrStolen",
          "text": "Visit safeorstolen.com or download the free app on iOS or Android",
          "url": "https://safeorstolen.com/imei-checker#step-2"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Enter IMEI",
          "text": "Type or scan the 15-digit IMEI number into the verification box",
          "url": "https://safeorstolen.com/imei-checker#step-3"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "View Results",
          "text": "Get instant verification results showing if the phone is stolen, lost, blacklisted, or safe to buy",
          "url": "https://safeorstolen.com/imei-checker#step-4"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Verify a Vehicle VIN Number Before Buying",
      "description": "Complete guide to checking vehicle VIN numbers for theft history before purchasing a used car",
      "totalTime": "PT3M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Locate VIN",
          "text": "Find the 17-character VIN on the dashboard (driver's side), door jamb, or vehicle title",
          "url": "https://safeorstolen.com/vin-checker#step-1"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Use SafeOrStolen",
          "text": "Enter VIN in SafeOrStolen mobile app or website for instant verification",
          "url": "https://safeorstolen.com/vin-checker#step-2"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Review Report",
          "text": "Check comprehensive theft history, salvage titles, and stolen vehicle records from 50+ databases",
          "url": "https://safeorstolen.com/vin-checker#step-3"
        }
      ]
    }
  ];

  // ItemList Schema for category pages
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SafeOrStolen Verification Services",
    "description": "Complete list of stolen item verification services",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "IMEI Checker",
        "url": "https://safeorstolen.com/imei-checker",
        "description": "Check if a phone is stolen using its IMEI number"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "VIN Checker",
        "url": "https://safeorstolen.com/vin-checker",
        "description": "Verify vehicle theft history with VIN lookup"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Serial Number Checker",
        "url": "https://safeorstolen.com/serial-number-checker",
        "description": "Verify electronics and equipment serial numbers"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Bike Check",
        "url": "https://safeorstolen.com/check-bike",
        "description": "Check if a bicycle is stolen"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Laptop Check",
        "url": "https://safeorstolen.com/check-laptop",
        "description": "Verify laptop theft status"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Firearms Check",
        "url": "https://safeorstolen.com/firearms-check",
        "description": "Check firearm serial numbers against stolen databases"
      }
    ]
  };

  // SpeakableSpecification for voice search optimization
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-text", ".verification-result"]
    },
    "url": currentUrl
  };

  return (
    <Helmet>
      {/* Dynamic Breadcrumbs */}
      {currentPath !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbs())}
        </script>
      )}

      {/* ProfessionalService Schema */}
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>

      {/* Product Schema */}
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>

      {/* HowTo Schemas */}
      {howToSchemas.map((schema, index) => (
        <script key={`howto-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {/* ItemList Schema */}
      <script type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </script>

      {/* Speakable Schema for Voice Search */}
      <script type="application/ld+json">
        {JSON.stringify(speakableSchema)}
      </script>
    </Helmet>
  );
};
