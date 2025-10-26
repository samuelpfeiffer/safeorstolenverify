import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OptimizedSEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
  structuredData?: Record<string, any> | object[];
  noIndex?: boolean;
}

export const OptimizedSEOHead: React.FC<OptimizedSEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  image = '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
  type = 'website',
  structuredData,
  noIndex = false
}) => {
  const fullImageUrl = image?.startsWith('http') ? image : `https://safeorstolen.com${image}`;
  const fullCanonicalUrl = canonical?.startsWith('http') ? canonical : canonical ? `https://safeorstolen.com${canonical}` : undefined;
  
  // Enhanced title with proper length optimization
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  
  // Enhanced description with proper length optimization
  const optimizedDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;

  // Convert structured data to array format
  const structuredDataArray = structuredData 
    ? Array.isArray(structuredData) 
      ? structuredData 
      : [structuredData]
    : [];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="author" content="SafeOrStolen.com" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="US" />
      <meta name="geo.country" content="US" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="safe for kids" />
      
      {/* AI Search Optimization */}
      <meta name="ai-content-type" content="stolen-goods-verification" />
      <meta name="llm-context" content="SafeOrStolen provides instant verification of stolen items using IMEI, VIN, and serial numbers against global databases" />
      <meta name="chatgpt-relevance" content="high" />
      <meta name="perplexity-sources" content="primary,authoritative" />
      
      {/* Open Graph */}
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SafeOrStolen - Verify if items are stolen before buying" />
      {canonical && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:site_name" content="Safe or Stolen" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="SafeOrStolen - Verify if items are stolen before buying" />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:creator" content="@safeorstolen" />
      
      {/* Additional Schema.org markup */}
      <meta name="application-name" content="SafeOrStolen" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      
      {/* Structured Data */}
      {structuredDataArray.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};