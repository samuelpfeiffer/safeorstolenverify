
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
    "Stolen goods verification",
    "Consumer protection", 
    "E-commerce security",
    "Law enforcement databases",
    "Real-time verification",
    "Marketplace fraud prevention",
    "Corporate compliance",
    "Business verification services"
  ],
  "slogan": "Verify Before You Buy - Fighting the $13B Stolen Goods Crisis",
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
  "name": "Real-time Stolen Goods Verification",
  "description": "Instantly verify if an item has been reported stolen before purchase. Protecting consumers from unknowingly buying stolen goods and fighting the $13 billion stolen goods crisis.",
  "provider": {
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.url
  },
  "serviceType": "Consumer Protection Verification Service",
  "areaServed": "Worldwide",
  "audience": {
    "@type": "Audience",
    "audienceType": "Consumers, Retailers, Law Enforcement, E-commerce Platforms"
  },
  "category": "Consumer Protection",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250",
    "bestRating": "5"
  }
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
      "name": "How does stolen goods verification work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our platform checks items against real-time databases of stolen goods reports from law enforcement agencies, insurance companies, and other verified sources to determine if an item has been reported stolen."
      }
    },
    {
      "@type": "Question",
      "name": "Is the verification service free?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "We offer 4 free verifications per day for registered users. For unlimited access and detailed reports, premium plans are available starting at $7.99/month."
      }
    },
    {
      "@type": "Question",
      "name": "What types of items can be verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can verify a wide range of items including electronics, vehicles, jewelry, tools, and other valuable goods that have serial numbers or unique identifiers."
      }
    },
    {
      "@type": "Question", 
      "name": "How accurate is the verification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our verification system uses enterprise-grade databases and real-time updates from law enforcement and insurance companies, providing highly accurate results for reported stolen items."
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
    "item": crumb.url
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
