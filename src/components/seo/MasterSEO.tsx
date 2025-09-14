import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface MasterSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
  structuredData?: Record<string, any> | Record<string, any>[];
  customCanonical?: string;
}

/**
 * Master SEO Component - Single source of truth for all SEO
 * Eliminates canonical conflicts and consolidates all SEO functionality
 */
export const MasterSEO: React.FC<MasterSEOProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noIndex = false,
  structuredData,
  customCanonical
}) => {
  const location = useLocation();
  
  // Single canonical URL logic - no conflicts
  const getCanonicalUrl = (path: string): string => {
    const cleanPath = path === '/' ? '/' : path.replace(/\/+$/, '');
    return `https://safeorstolen.com${cleanPath}`;
  };

  const canonical = customCanonical 
    ? getCanonicalUrl(customCanonical) 
    : getCanonicalUrl(location.pathname);

  const fullTitle = title.includes('SafeOrStolen') || title.includes('Safe Or Stolen') 
    ? title 
    : `${title} | SafeOrStolen`;

  const imageUrl = image?.startsWith('http') 
    ? image 
    : `https://safeorstolen.com${image || '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png'}`;

  const robots = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:160';

  // Default organization schema
  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe Or Stolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@safeorstolen.com"
    }
  };

  // Website search action schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Safe Or Stolen",
    "url": "https://safeorstolen.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://safeorstolen.com/dashboard?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Combine structured data
  const allStructuredData = [
    defaultOrganizationSchema,
    websiteSchema,
    ...(structuredData 
      ? Array.isArray(structuredData) 
        ? structuredData 
        : [structuredData]
      : [])
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      
      {/* Canonical URL - Single source of truth */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="SafeOrStolen" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Performance & Technical SEO */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://js.stripe.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://js.stripe.com" />
      
      {/* Structured Data */}
      {allStructuredData.map((schema, index) => (
        <script 
          key={index}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};