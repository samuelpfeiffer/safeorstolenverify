import { Helmet } from 'react-helmet-async';

/**
 * Advanced Schema Markup Generator - Entity-Based SEO
 * Implements comprehensive schema types to establish topical authority
 */

export const AdvancedSchemaGenerator = () => {
  // Knowledge Graph entities for SafeOrStolen
  const entitySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://safeorstolen.com/#organization",
        "name": "SafeOrStolen",
        "url": "https://safeorstolen.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
          "width": 512,
          "height": 512
        },
        "description": "The only stolen goods verification platform with mobile apps for iOS and Android. Check IMEI, VIN, serial numbers, and firearms.",
        "foundingDate": "2024",
        "sameAs": [
          "https://twitter.com/safeorstolen",
          "https://facebook.com/safeorstolen",
          "https://linkedin.com/company/safeorstolen"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "support@safeorstolen.com",
          "availableLanguage": ["English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://safeorstolen.com/#website",
        "url": "https://safeorstolen.com",
        "name": "SafeOrStolen",
        "publisher": { "@id": "https://safeorstolen.com/#organization" },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://safeorstolen.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://safeorstolen.com/#mobileapp",
        "name": "SafeOrStolen - Stolen Goods Checker",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": ["iOS", "Android"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "downloadUrl": [
          "https://apps.apple.com/app/safeorstolen",
          "https://play.google.com/store/apps/details?id=com.safeorstolen"
        ],
        "screenshot": [
          "https://safeorstolen.com/screenshots/imei-check.jpg",
          "https://safeorstolen.com/screenshots/vin-verification.jpg",
          "https://safeorstolen.com/screenshots/firearm-check.jpg"
        ],
        "featureList": [
          "IMEI verification",
          "VIN checking",
          "Firearm serial number lookup",
          "Camera scanning",
          "Barcode reader",
          "Offline history",
          "4 free searches"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://safeorstolen.com/#service",
        "serviceType": "Stolen Goods Verification",
        "provider": { "@id": "https://safeorstolen.com/#organization" },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
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
                "description": "Check if a phone or mobile device IMEI number is stolen"
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
                "description": "Verify vehicle identification numbers for stolen cars"
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
                "name": "Firearm Serial Number Check",
                "description": "Check gun serial numbers against stolen firearms databases"
              },
              "price": "0",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://safeorstolen.com/pricing"
            }
          ]
        }
      },
      {
        "@type": "Brand",
        "@id": "https://safeorstolen.com/#brand",
        "name": "SafeOrStolen",
        "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
        "slogan": "Verify Before You Buy - Mobile Apps for iOS & Android"
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
      "tool": [
        {
          "@type": "HowToTool",
          "name": "SafeOrStolen Mobile App"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Find IMEI Number",
          "text": "Dial *#06# on the phone or check Settings > About Phone",
          "image": "https://safeorstolen.com/guides/find-imei.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Open SafeOrStolen App",
          "text": "Download and open the SafeOrStolen app on iOS or Android",
          "image": "https://safeorstolen.com/guides/open-app.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Enter IMEI",
          "text": "Type or scan the 15-digit IMEI number",
          "image": "https://safeorstolen.com/guides/enter-imei.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "View Results",
          "text": "Get instant verification results showing if the phone is stolen, lost, or safe",
          "image": "https://safeorstolen.com/guides/view-results.jpg"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Verify a Vehicle VIN Number Before Buying",
      "description": "Complete guide to checking vehicle VIN numbers for theft history",
      "totalTime": "PT3M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Locate VIN",
          "text": "Find the 17-character VIN on the dashboard, door jamb, or title"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Use SafeOrStolen",
          "text": "Enter VIN in SafeOrStolen mobile app or website"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Review Report",
          "text": "Check comprehensive theft history and stolen vehicle records"
        }
      ]
    }
  ];

  // FAQ Schema optimized for voice search
  const voiceSearchFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does CheckMend have a mobile app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, CheckMend does not have a mobile app for iOS or Android. SafeOrStolen is the only verification service with mobile apps, offering IMEI, VIN, and firearm checking on iPhone and Android devices."
        }
      },
      {
        "@type": "Question",
        "name": "What's better than CheckMend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen is better than CheckMend because it offers mobile apps for iOS and Android, includes 4 free searches, and is the only service that verifies firearms. CheckMend has no mobile app and requires payment upfront."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check if a gun is stolen on my phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SafeOrStolen is the only mobile app for iOS and Android that lets you check firearm serial numbers against stolen gun databases. Download the free app and get 4 free searches."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free IMEI checker app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SafeOrStolen offers a free IMEI checker app for iOS and Android with 4 free IMEI checks included. IMEIinfo and CheckMend do not have mobile apps."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check if something is stolen before buying?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the SafeOrStolen mobile app to check IMEI numbers (phones), VIN numbers (vehicles), or serial numbers (electronics and firearms). Get instant verification results showing if items are stolen, lost, or safe to buy."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(entitySchema)}
      </script>
      {howToSchemas.map((schema, index) => (
        <script key={`howto-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      <script type="application/ld+json">
        {JSON.stringify(voiceSearchFAQ)}
      </script>
    </Helmet>
  );
};
