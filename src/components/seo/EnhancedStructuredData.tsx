import React from 'react';
import { Helmet } from 'react-helmet-async';
import { validateSchema, logSchemaValidation } from '@/utils/seo/schemaValidation';

interface EnhancedStructuredDataProps {
  data: any | any[];
}

/**
 * Enhanced Structured Data Component
 * Supports multiple schema types for comprehensive SEO
 * Optimized for Google, AI search engines, and rich results
 */
export const EnhancedStructuredData: React.FC<EnhancedStructuredDataProps> = ({ data }) => {
  const structuredDataArray = Array.isArray(data) ? data : [data];
  
  // Validate schemas in development
  if (import.meta.env.DEV) {
    structuredDataArray.forEach((schema, index) => {
      const schemaType = schema['@type'] || 'Unknown';
      const result = validateSchema(schema);
      logSchemaValidation(`${schemaType} #${index + 1}`, result);
    });
  }
  
  return (
    <Helmet>
      {structuredDataArray.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

/**
 * Creates a Breadcrumb schema
 */
export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Creates a HowTo schema
 */
export const createHowToSchema = (
  name: string,
  description: string,
  steps: Array<{ name: string; text: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };
};

/**
 * Creates a Service schema
 */
export const createServiceSchema = (
  name: string,
  description: string,
  provider: string = "SafeOrStolen",
  price: string = "0",
  url: string = "https://safeorstolen.com/pricing",
  serviceType: string = "Stolen Item Verification"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": "https://safeorstolen.com",
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://safeorstolen.com"
    },
    "serviceType": serviceType,
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://safeorstolen.com"
    },
    "offers": {
      "@type": "Offer",
      "url": url,
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
      "validFrom": new Date().toISOString().split('T')[0]
    }
  };
};

/**
 * Creates a FAQ schema
 */
export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Creates a Pricing Service schema (for pricing/subscription offerings)
 * This is specifically for service offerings, not physical products
 * NOTE: Do NOT include aggregateRating without actual Review markup to avoid Google errors
 */
export const createPricingServiceSchema = (
  name: string,
  description: string,
  price: string,
  url: string = "https://safeorstolen.com/pricing",
  provider: string = "SafeOrStolen",
  imageUrl: string = "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider
    },
    "image": imageUrl,
    "url": url,
    "offers": {
      "@type": "Offer",
      "url": url,
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
      "validFrom": new Date().toISOString().split('T')[0],
      "seller": {
        "@type": "Organization",
        "name": provider
      }
    }
  };

  return schema;
};

/**
 * Creates an Article schema
 */
export const createArticleSchema = (
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified?: string,
  author: string = "SafeOrStolen Team",
  imageUrl: string = "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
        "width": 600,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
};
