/**
 * Structured Data Utilities for SafeOrStolen
 * 
 * ⚠️ IMPORTANT: Global schemas (Organization, WebSite, Service) are in index.html
 * 
 * DO NOT call createOrganizationSchema(), createWebsiteSchema(), or createServiceSchema()
 * on pages - they will create duplicate structured data errors in GSC.
 * 
 * These functions are kept for:
 * - Reference/documentation
 * - Edge functions or server-side rendering if needed
 * - Historical compatibility
 * 
 * For page-specific schemas, use:
 * - createArticleSchema() for blog posts
 * - createBreadcrumbSchema() for breadcrumbs
 * - createVerificationResultSchema() for verification results
 * - createFAQSchema() ONLY on the dedicated /faq page (NOT homepage)
 */

import { SITE_CONFIG } from './metadata';
import type { BlogPost } from './types';

// Enhanced Organization Schema - Corporation Status
// ⚠️ DEPRECATED: This is in index.html - calling this creates duplicate GSC errors
/** @deprecated Use the schema in index.html instead */
export const createOrganizationSchema = () => {
  console.warn('⚠️ createOrganizationSchema() is DEPRECATED. Organization schema is in index.html. Remove this call to fix GSC duplicate errors.');
  return {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "SafeOrStolen",
  "legalName": "SAFEORSTOLEN",
  "alternateName": ["Safe Or Stolen", "Safe or Stolen", "SOS", "safe or stolen"],
  "description": "Fast-growing stolen goods verification platform serving customers across the United States with international expansion underway. Multi-database IMEI, VIN, and serial number verification protecting consumers from unknowingly purchasing stolen items across all categories: vehicles, electronics, firearms, machinery, and specialty equipment. Checks via NICB, GSMA, CheckMEND, Bike Index and growing database partnerships.",
  "slogan": "Complete Multi-Database Verification - Protect Every Purchase",
  "url": SITE_CONFIG.url,
  "logo": `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
  "foundingDate": "2025-08",
  "incorporationDate": "2025-08",
  "taxID": "39-3892151",
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
    "https://linkedin.com/company/safeorstolen",
    "https://www.youtube.com/@safeorstolen",
    "https://facebook.com/safeorstolen",
    "https://www.crunchbase.com/organization/safe-or-stolen",
    "https://www.trustpilot.com/review/safeorstolen.com",
    "https://biz.prlog.org/SafeOrStolen/"
  ],
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "France" },
    { "@type": "Country", "name": "Spain" },
    { "@type": "Country", "name": "Italy" },
    { "@type": "Country", "name": "Japan" },
    { "@type": "Country", "name": "India" }
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Global",
    "geo": {
      "@type": "GeoShape",
      "name": "Worldwide Service Coverage"
    }
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
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
    "addressRegion": "AZ",
    "addressLocality": "Peoria", 
    "streetAddress": "9303 W Gold Dust Ave",
    "postalCode": "85345"
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
    "Stolen property database search for any item with IMEI, VIN, or serial number",
    // AI/ML and Technology
    "Machine learning fraud detection",
    "AI-powered stolen item verification",
    "Predictive analytics for fraud prevention",
    "Computer vision for serial number recognition",
    "Natural language processing for report analysis",
    // Circular Economy & Sustainability
    "Circular economy trust infrastructure",
    "Secondhand market safety verification",
    "Resale market fraud prevention",
    "Sustainable commerce enablement",
    "Pre-owned goods authentication"
  ],
  // Industry classifications for investor visibility
  "industry": [
    "Security Software",
    "Machine Learning & AI",
    "Fraud Prevention Technology",
    "Circular Economy",
    "Secondhand Marketplace Infrastructure",
    "Consumer Protection Technology"
  ],
  "award": [
    "World's Most Comprehensive Stolen Item Verification Database",
    "Leading Global Consumer Protection Platform",
    "International Marketplace Safety Pioneer"
  ],
  "globalLocationNumber": "Worldwide Service Provider",
  "naics": "518210", // Data Processing, Hosting, and Related Services
  "isicV4": "6311", // Data processing and hosting services
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "10-50"
  },
  // Funding and investor signals
  "funding": {
    "@type": "MonetaryGrant",
    "funder": {
      "@type": "Organization",
      "name": "FasterCapital",
      "url": "https://fastercapital.com",
      "description": "Leading startup accelerator and investment firm"
    }
  },
  // Market opportunity signals for investors
  "potentialAction": {
    "@type": "InvestAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://safeorstolen.com/investors"
    },
    "description": "Investment opportunity in $367B global secondhand market infrastructure"
  }
  };
};

// Website Schema
export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SafeOrStolen",
  "alternateName": ["Safe Or Stolen", "Safe or Stolen", "World's Leading Verification Platform"],
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "inLanguage": ["en", "es", "fr", "de", "ja", "pt", "it", "zh"],
  "audience": {
    "@type": "Audience",
    "geographicArea": {
      "@type": "Place",
      "name": "Worldwide"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_CONFIG.url}/verify`,
    "query-input": "required name=search_term_string"
  }
});

// Enhanced Service Schema
export const createServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Complete Multi-Database Stolen Item Verification - IMEI, VIN & Serial Number Check",
  "description": "Trusted stolen item verification service serving customers across the United States with expanding international coverage. Multi-database verification for vehicles (cars, motorcycles, boats, jet skis, sidebysides, dirt bikes, mopeds, bicycles), electronics (phones, tablets, laptops, computers, TVs, radios, cameras, watches), firearms, machinery, engines, tools, home appliances, furniture, RC cars, and specialty equipment. Check any IMEI, VIN, or serial number against verified databases including NICB, GSMA, CheckMEND, and Bike Index. Fast results in 30 seconds.",
  "provider": {
    "@type": "Organization",
    "name": "SafeOrStolen",
    "alternateName": ["Safe Or Stolen", "Safe or Stolen"],
    "url": SITE_CONFIG.url
  },
  "serviceType": "Consumer Protection and Multi-Database Stolen Goods Verification",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "European Union" },
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "France" },
    { "@type": "Country", "name": "Spain" },
    { "@type": "Country", "name": "Italy" },
    { "@type": "Country", "name": "Japan" },
    { "@type": "Country", "name": "South Korea" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "Brazil" },
    { "@type": "Country", "name": "Mexico" }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "US Consumers, Retailers, Law Enforcement, E-commerce Platforms, Businesses"
  },
  "category": "Consumer Protection and Fraud Prevention",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": SITE_CONFIG.url,
    "serviceType": "Online Multi-Database Verification Platform",
    "availableLanguage": ["English"]
  },
  "serviceOutput": "Verification Results Across All Item Categories",
  "termsOfService": `${SITE_CONFIG.url}/terms`,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Verification Services",
    "numberOfItems": 1,
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Unlimited Verification",
          "description": "Unlimited stolen goods verification — all item types, all databases, IMEI, VIN, serial numbers, license plates, firearms"
        },
        "price": "10.00",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": `${SITE_CONFIG.url}/pricing`
      }
    ]
  }
});

// Enhanced Local Business Schema for Corporate Entity
export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_CONFIG.url}/#localbusiness`,
  "name": "SafeOrStolen",
  "legalName": "SAFEORSTOLEN",
  "alternateName": ["Safe Or Stolen", "Safe or Stolen"],
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "email": "support@safeorstolen.com",
  "foundingDate": "2025-08",
  "taxID": "39-3892151",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Australia" }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates", 
      "latitude": "33.5806",
      "longitude": "-112.2374"
    },
    "geoRadius": "20000000"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "AZ",
    "addressLocality": "Peoria", 
    "streetAddress": "9303 W Gold Dust Ave",
    "postalCode": "85345"
  },
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
        "text": "To check if something is stolen: 1) Find the item's IMEI (phones), VIN (vehicles), or serial number. 2) Enter it into SafeOrStolen's verification tool. 3) Get instant results showing if the item is stolen, lost, or safe to buy. Works for phones, cars, electronics, tools—anything with an identifier. 2 free checks, then $0.99/check or $10/month unlimited."
      }
    },
    {
      "@type": "Question",
      "name": "Can I check if a phone is stolen for free?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "SafeOrStolen offers 2 free checks, then $0.99/check or $10/month unlimited. Check any phone (iPhone, Samsung, Android) before buying on Facebook Marketplace, OfferUp, or Craigslist. Results in 3 seconds from 100+ databases including GSMA and carrier blacklists."
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
        "text": "Before meeting a seller: 1) Ask for the IMEI/VIN/serial number. 2) Check it on SafeOrStolen.com ($0.99/check or $10/month unlimited). 3) If it shows 'stolen', report the listing and walk away. 4) Only buy items that verify as 'safe'. This protects you from scams, financial loss, and legal issues."
      }
    },
    {
      "@type": "Question",
      "name": "How does SafeOrStolen use AI and machine learning for fraud detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SafeOrStolen uses advanced AI and machine learning technology for fraud detection: 1) Predictive analytics identifies suspicious patterns across 50+ databases. 2) Machine learning algorithms detect fraud indicators in real-time. 3) Computer vision technology assists with serial number recognition. 4) Natural language processing analyzes stolen item reports. Our AI-powered verification provides 99.7% accuracy, making us a leader in circular economy trust infrastructure for the $367B global secondhand market."
      }
    },
    {
      "@type": "Question",
      "name": "What is the circular economy and how does SafeOrStolen enable it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The circular economy is a sustainable model where products are reused, resold, and recycled instead of discarded. The global secondhand market is projected to reach $367 billion by 2029 at 10.7% annual growth. SafeOrStolen enables the circular economy by providing trust infrastructure—our AI-powered verification ensures secondhand items are legitimate, protecting buyers and sellers while promoting sustainable commerce and reducing waste."
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

// Verification Result Schema (formerly Product Schema)
// Note: Changed from Product to Thing to avoid Google Merchant Listings errors
// SafeOrStolen is a service, not a product marketplace
export const createVerificationResultSchema = (result: {
  name: string;
  description: string;
  serialNumber: string;
  status: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Thing",
  "name": result.name,
  "description": result.description,
  "identifier": {
    "@type": "PropertyValue",
    "name": "Serial Number",
    "value": result.serialNumber
  },
  "additionalProperty": {
    "@type": "PropertyValue", 
    "name": "Verification Status",
    "value": result.status
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
    "name": "SafeOrStolen",
    "url": SITE_CONFIG.url
  },
  "publisher": {
    "@type": "Organization",
    "name": "SafeOrStolen",
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
