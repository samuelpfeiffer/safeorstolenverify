import { Helmet } from 'react-helmet-async';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * Advanced Schema Markup Generator - Entity-Based SEO
 * Implements comprehensive schema types to establish topical authority
 * 
 * 2026 AUDIT FIX: Removed fabricated aggregateRating and fake reviews
 * All data must be verifiable per Google Structured Data guidelines
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

  // ProfessionalService Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://safeorstolen.com/#service",
    "name": "SafeOrStolen",
    "description": "Consumer protection platform that verifies whether secondhand items are stolen by checking IMEI, VIN, and serial numbers against law enforcement, insurance, and carrier databases.",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/sos-logo.png",
    "image": "https://safeorstolen.com/sos-logo.png",
    "priceRange": "Free - $9.99/month",
    "email": "support@safeorstolen.com",
    "founder": [
      { "@type": "Person", "name": "Samuel Pfeiffer", "jobTitle": "CEO" },
      { "@type": "Person", "name": "Kelly McEvoy", "jobTitle": "Co-Founder" }
    ],
    "foundingDate": "2024-08",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": [
      "Stolen Item Verification",
      "IMEI Phone Check",
      "VIN Vehicle Lookup",
      "Serial Number Verification",
      "Firearm Serial Number Check",
      "Bicycle Theft Verification"
    ],
    "knowsAbout": [
      "IMEI verification against GSMA and carrier blacklists",
      "VIN lookup against NICB theft records",
      "Firearm serial number verification against NCIC and ATF databases",
      "Bicycle serial number checks via BikeIndex integration",
      "Pawn shop compliance with state due diligence requirements",
      "Facebook Marketplace and OfferUp buyer safety"
    ],
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://www.youtube.com/@safeorstolen",
      "https://www.linkedin.com/company/safeorstolen",
      "https://www.trustpilot.com/review/safeorstolen.com",
      "https://www.crunchbase.com/organization/safe-or-stolen"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://safeorstolen.com/verify",
      "serviceType": "Online verification service",
      "availableLanguage": "English"
    },
    "dateModified": "2026-02-06"
  };

  // Product Schema — NO fake ratings, NO fake reviews
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SafeOrStolen Verification Service",
    "description": "Instant stolen item verification. Check IMEI (phones), VIN (vehicles), and serial numbers (electronics, firearms, bikes) against law enforcement, insurance, and carrier databases. 2 free verifications, results in approximately 3 seconds.",
    "brand": {
      "@type": "Brand",
      "name": "SafeOrStolen"
    },
    "category": "Consumer Protection Software",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "9.99",
      "priceCurrency": "USD",
      "offerCount": "4",
      "offers": [
        { "@type": "Offer", "name": "Free Plan", "price": "0", "priceCurrency": "USD", "description": "2 free verifications, no credit card required" },
        { "@type": "Offer", "name": "Basic Plan", "price": "4.99", "priceCurrency": "USD", "description": "50 verifications per month" },
        { "@type": "Offer", "name": "Pro Plan", "price": "9.99", "priceCurrency": "USD", "description": "Unlimited verifications per month" },
        { "@type": "Offer", "name": "Business Plan", "description": "Custom API pricing for high-volume verification" }
      ]
    },
    "dateModified": "2026-02-06"
  };

  // HowTo Schemas for featured snippets
  const howToSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check if a Phone is Stolen Using IMEI",
      "description": "Step-by-step guide to verify if a mobile phone is stolen using its IMEI number before purchasing secondhand.",
      "totalTime": "PT2M",
      "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
      "tool": [{ "@type": "HowToTool", "name": "SafeOrStolen Mobile App or Website" }],
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Find the IMEI Number", "text": "Dial *#06# on the phone or check Settings → About Phone to find the 15-digit IMEI number. On iPhones, also check Settings → General → About.", "url": "https://safeorstolen.com/imei-checker" },
        { "@type": "HowToStep", "position": 2, "name": "Enter IMEI on SafeOrStolen", "text": "Visit safeorstolen.com/imei-checker or open the SafeOrStolen app. Enter the 15-digit IMEI number.", "url": "https://safeorstolen.com/imei-checker" },
        { "@type": "HowToStep", "position": 3, "name": "Review Verification Results", "text": "Results appear in approximately 3 seconds showing whether the phone is clean, blacklisted by carriers (AT&T, Verizon, T-Mobile), or reported stolen to law enforcement.", "url": "https://safeorstolen.com/imei-checker" }
      ],
      "dateModified": "2026-02-06"
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Verify a Used Car VIN Before Buying",
      "description": "How to check a vehicle identification number (VIN) against stolen vehicle databases before purchasing a used car.",
      "totalTime": "PT3M",
      "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Locate the VIN", "text": "Find the 17-character VIN on the driver's side dashboard (visible through the windshield), the driver's door jamb sticker, or the vehicle title/registration.", "url": "https://safeorstolen.com/vin-checker" },
        { "@type": "HowToStep", "position": 2, "name": "Check VIN on SafeOrStolen", "text": "Enter the 17-character VIN at safeorstolen.com/vin-checker. The system queries NICB, law enforcement, insurance, and DMV databases.", "url": "https://safeorstolen.com/vin-checker" },
        { "@type": "HowToStep", "position": 3, "name": "Review Theft Status Report", "text": "Results show whether the vehicle is reported stolen, has a salvage title, or has outstanding theft records in any state.", "url": "https://safeorstolen.com/vin-checker" }
      ],
      "dateModified": "2026-02-06"
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check if a Gun is Stolen by Serial Number",
      "description": "How to verify a firearm serial number against ATF, NCIC, and state law enforcement databases before purchasing.",
      "totalTime": "PT2M",
      "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Find the Serial Number", "text": "Locate the serial number on the frame (pistols), receiver (rifles/AR-15), or barrel (shotguns). It is typically 6-10 alphanumeric characters.", "url": "https://safeorstolen.com/firearms-check" },
        { "@type": "HowToStep", "position": 2, "name": "Enter Serial Number", "text": "Go to safeorstolen.com/firearms-check and enter the complete serial number.", "url": "https://safeorstolen.com/firearms-check" },
        { "@type": "HowToStep", "position": 3, "name": "Review Results", "text": "The system checks NCIC (7M+ records), ATF eTrace, all 50 state databases, HotGunz, and insurance claims. If flagged, do NOT purchase and report to ATF at 1-800-283-4867.", "url": "https://safeorstolen.com/firearms-check" }
      ],
      "dateModified": "2026-02-06"
    }
  ];

  // ItemList Schema for service directory
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SafeOrStolen Verification Services",
    "description": "Complete list of stolen item verification services offered by SafeOrStolen",
    "numberOfItems": 8,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "IMEI Phone Checker", "url": "https://safeorstolen.com/imei-checker", "description": "Verify phones against GSMA blacklist, carrier records, and law enforcement databases" },
      { "@type": "ListItem", "position": 2, "name": "VIN Vehicle Lookup", "url": "https://safeorstolen.com/vin-checker", "description": "Check vehicles against NICB, DMV, and stolen vehicle databases" },
      { "@type": "ListItem", "position": 3, "name": "Serial Number Checker", "url": "https://safeorstolen.com/serial-number-checker", "description": "Verify electronics, laptops, and equipment serial numbers" },
      { "@type": "ListItem", "position": 4, "name": "Firearm Serial Check", "url": "https://safeorstolen.com/firearms-check", "description": "Check gun serial numbers against NCIC, ATF, and state databases" },
      { "@type": "ListItem", "position": 5, "name": "Bicycle Check", "url": "https://safeorstolen.com/check-bike", "description": "Verify bicycle serial numbers via BikeIndex integration" },
      { "@type": "ListItem", "position": 6, "name": "Xbox/Console Check", "url": "https://safeorstolen.com/check-xbox", "description": "Verify gaming consoles against stolen property and ban databases" },
      { "@type": "ListItem", "position": 7, "name": "License Plate Lookup", "url": "https://safeorstolen.com/license-plate-lookup", "description": "Vehicle registration and theft verification for all 50 states" },
      { "@type": "ListItem", "position": 8, "name": "Laptop Check", "url": "https://safeorstolen.com/check-laptop", "description": "Verify laptop serial numbers against stolen property databases" }
    ]
  };

  // Speakable Schema for voice search
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-description", ".verification-summary", "[data-speakable]"]
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

      {/* Product Schema — verified data only, no fake reviews */}
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>

      {/* HowTo Schemas — IMEI, VIN, Firearm */}
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
