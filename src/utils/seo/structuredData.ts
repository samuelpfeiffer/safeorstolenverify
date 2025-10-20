
import { SITE_CONFIG } from './metadata';
import type { BlogPost } from './types';

// Enhanced Organization Schema - Corporation Status
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": SITE_CONFIG.name,
  "legalName": "Safe or Stolen Corp.",
  "alternateName": ["SOS Verification Platform", "SafeOrStolen"],
  "description": "The world's first real-time stolen goods verification platform, protecting consumers from unknowingly purchasing stolen items and fighting the $13 billion stolen goods crisis.",
  "url": SITE_CONFIG.url,
  "logo": `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
  "foundingDate": "2024",
  "incorporationDate": "2024",
  "taxID": "[EIN_NUMBER_PLACEHOLDER]", // User needs to replace with actual EIN
  "founder": [
    {
      "@type": "Person",
      "name": "Samuel Pfeiffer",
      "jobTitle": "Founder & CEO"
    },
    {
      "@type": "Person", 
      "name": "Kelly McEvoy",
      "jobTitle": "Co-Founder & Research Officer"
    }
  ],
  "employee": [
    {
      "@type": "Person",
      "name": "Michael Rodriguez", 
      "jobTitle": "Head of Partnerships & Growth"
    }
  ],
  "parentOrganization": {
    "@type": "Organization",
    "name": "FasterCapital",
    "url": "https://fastercapital.com"
  },
  "sameAs": [
    "https://twitter.com/safeorstolen",
    "https://linkedin.com/company/safeorstolen"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-800-SOS-CHECK",
      "contactType": "customer service",
      "email": "support@safeorstolen.com",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint", 
      "contactType": "corporate headquarters",
      "email": "support@safeorstolen.com"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "[STATE_PLACEHOLDER]",
    "addressLocality": "[CITY_PLACEHOLDER]", 
    "streetAddress": "[STREET_ADDRESS_PLACEHOLDER]",
    "postalCode": "[ZIP_CODE_PLACEHOLDER]"
  },
  "knowsAbout": [
    "How to check if something is stolen",
    "Free IMEI checker for phones and tablets",
    "VIN verification for cars, motorcycles, boats, jet skis, sidebysides",
    "Serial number verification for electronics, laptops, computers, TVs, cameras, watches",
    "Stolen firearms and guns database check",
    "Dirt bikes, mopeds, electric bikes, and bicycles verification",
    "Machinery, engines, and tools stolen item check",
    "Home appliances and furniture verification",
    "RC cars and specialty equipment verification",
    "Facebook Marketplace buyer protection",
    "Avoid buying stolen merchandise",
    "Marketplace fraud prevention",
    "Consumer protection from scams",
    "Secondhand item verification across all categories",
    "Stolen property database search for any item with IMEI, VIN, or serial number"
  ],
  "slogan": "Check if Stolen Before You Buy - Don't Get Scammed",
  "duns": "[DUNS_NUMBER_PLACEHOLDER]", // D-U-N-S Number if available
  "naics": "518210", // Data Processing, Hosting, and Related Services
  "isicV4": "6311" // Data processing and hosting services
});

// Website Schema
export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_CONFIG.name,
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_CONFIG.url}/?serialNumber={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

// Enhanced Service Schema
export const createServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Comprehensive Stolen Goods Verification - IMEI, VIN, Serial Number Database",
  "description": "Complete stolen item verification database for vehicles (cars, motorcycles, boats, jet skis, sidebysides, dirt bikes, mopeds, bicycles), electronics (phones, tablets, laptops, computers, TVs, radios, cameras, watches), firearms, machinery, engines, tools, home appliances, furniture, RC cars, and specialty equipment. Check any IMEI, VIN, or serial number FREE against 50M+ stolen goods databases. Instant results in 30 seconds.",
  "provider": {
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.url
  },
  "serviceType": "Consumer Protection and Comprehensive Stolen Goods Verification",
  "areaServed": "Worldwide",
  "audience": {
    "@type": "Audience",
    "audienceType": "Consumers, Retailers, Law Enforcement, E-commerce Platforms"
  },
  "category": "Consumer Protection",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": SITE_CONFIG.url,
    "serviceType": "Online Database"
  },
  "termsOfService": `${SITE_CONFIG.url}/terms-of-service`,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Verification Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Consumer Verification",
          "description": "Basic stolen goods verification protecting innocent consumers with 4 free searches per day"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise API",
          "description": "Real-time verification API for businesses to integrate stolen goods checking into their platforms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium Protection",
          "description": "Unlimited verifications with detailed reports, priority support, and advanced fraud protection"
        }
      }
    ]
  },
});

// Enhanced Local Business Schema for Corporate Entity
export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_CONFIG.url}/#localbusiness`,
  "name": SITE_CONFIG.name,
  "legalName": "Safe or Stolen Corp.",
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "telephone": "+1-800-SOS-CHECK",
  "email": "support@safeorstolen.com",
  "foundingDate": "2024",
  "taxID": "[EIN_NUMBER_PLACEHOLDER]",
  "areaServed": "Worldwide",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates", 
      "latitude": "39.8283",
      "longitude": "-98.5795"
    },
    "geoRadius": "20000000"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "[STATE_PLACEHOLDER]",
    "addressLocality": "[CITY_PLACEHOLDER]", 
    "streetAddress": "[STREET_ADDRESS_PLACEHOLDER]",
    "postalCode": "[ZIP_CODE_PLACEHOLDER]"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Credit Card, Debit Card",
  "priceRange": "$",
  "knowsAbout": [
    "Stolen goods verification",
    "Fraud prevention", 
    "Consumer protection",
    "Marketplace safety",
    "Item authentication"
  ]
});

// FAQ Schema for common questions
export const createFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question", 
      "name": "How do I check if something is stolen before I buy it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To check if something is stolen: 1) Find the item's IMEI (phones), VIN (vehicles), or serial number. 2) Enter it into SafeOrStolen's free checker. 3) Get instant results showing if the item is stolen, lost, or safe to buy. Works for phones, cars, electronics, tools—anything with an identifier."
      }
    },
    {
      "@type": "Question",
      "name": "Can I check if a phone is stolen for free?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Yes! SafeOrStolen offers FREE IMEI checks—4 verifications per day for registered users at no cost. Check if any phone (iPhone, Samsung, Android) is stolen before buying on Facebook Marketplace, OfferUp, or Craigslist. For unlimited checks, premium plans start at $7.99/month."
      }
    },
    {
      "@type": "Question",
      "name": "What items can I check to see if they're stolen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can verify any item with an IMEI, VIN, or serial number including: vehicles (cars, motorcycles, boats, jet skis, sidebysides, dirt bikes, mopeds, electric bikes, bicycles), electronics (smartphones, tablets, laptops, computers, TVs, radios, cameras, watches), firearms and guns, machinery, engines, tools, home appliances, furniture, RC cars, and specialty equipment. Perfect for checking items before buying on Facebook Marketplace, OfferUp, eBay, or Craigslist."
      }
    },
    {
      "@type": "Question", 
      "name": "How do I avoid buying stolen goods on Facebook Marketplace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before meeting a seller: 1) Ask for the IMEI/VIN/serial number. 2) Check it FREE on SafeOrStolen.com. 3) If it shows 'stolen', report the listing and walk away. 4) Only buy items that verify as 'safe'. This protects you from scams, financial loss, and legal issues. 99.7% accuracy rate trusted by 50,000+ buyers."
      }
    }
  ]
});

// Breadcrumb Schema
export const createBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url.startsWith('http') 
      ? crumb.url 
      : `https://safeorstolen.com${crumb.url.startsWith('/') ? crumb.url : `/${crumb.url}`}`
  }))
});

// Product Schema for verification results
export const createProductSchema = (product: {
  name: string;
  description: string;
  serialNumber: string;
  status: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "identifier": {
    "@type": "PropertyValue",
    "name": "Serial Number",
    "value": product.serialNumber
  },
  "additionalProperty": {
    "@type": "PropertyValue", 
    "name": "Verification Status",
    "value": product.status
  }
});

// Article Schema for blog posts
export const createArticleSchema = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.title,
  "description": post.excerpt || post.content.substring(0, 160),
  "image": post.featured_image_url ? [post.featured_image_url] : [`${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`],
  "datePublished": post.published_at || post.created_at,
  "dateModified": post.updated_at,
  "author": {
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.url
  },
  "publisher": {
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.url}/blog/${post.slug}`
  },
  "wordCount": post.content.split(' ').length,
  "articleSection": post.categories?.[0]?.name || "General",
  "keywords": post.tags?.map(tag => tag.name).join(', ') || 'stolen goods, verification, marketplace safety'
});
