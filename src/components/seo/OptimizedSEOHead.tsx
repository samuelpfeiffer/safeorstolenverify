import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OptimizedSEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
  structuredData?: object[];
  noIndex?: boolean;
}

export const OptimizedSEOHead: React.FC<OptimizedSEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  image = '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
  type = 'website',
  structuredData = [],
  noIndex = false
}) => {
  const fullImageUrl = image?.startsWith('http') ? image : `https://safeorstolen.com${image}`;
  const fullCanonicalUrl = canonical ? `https://safeorstolen.com${canonical}` : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonical && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:site_name" content="Safe or Stolen" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@safeorstolen" />
      
      {/* Structured Data */}
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};