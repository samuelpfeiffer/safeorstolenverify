import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  price: string = "0"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://safeorstolen.com"
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD"
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
 * Creates a Product schema (Optional - only use when legitimately selling physical/digital products)
 * NOTE: Do NOT include aggregateRating without actual Review markup to avoid Google errors
 */
export const createProductSchema = (
  name: string,
  description: string,
  price: string
) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
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
  author: string = "SafeOrStolen Team"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      }
    }
  };
};
