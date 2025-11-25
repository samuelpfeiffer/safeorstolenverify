/**
 * ⚠️ DEPRECATED: Use PageSEO instead
 * This component is maintained for backward compatibility only.
 * New pages should use the PageSEO component from '@/components/seo/PageSEO'
 * 
 * IMPORTANT: Global Organization schema moved to MasterSEO to prevent duplicates
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSafeLocation } from '@/hooks/useSafeLocation';

interface UnifiedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  structuredData?: Record<string, any> | Record<string, any>[];
  canonical?: string;
}

export const UnifiedSEO: React.FC<UnifiedSEOProps> = ({
  title,
  description,
  keywords,
  image = "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
  type = "website",
  noindex = false,
  structuredData,
  canonical: customCanonical
}) => {
  const location = useSafeLocation();
  
  const getCanonicalUrl = (path: string): string => {
    const cleanPath = path === '/' ? '/' : path.replace(/\/+$/, '');
    const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    return `https://safeorstolen.com${normalizedPath}`;
  };

  const canonicalUrl = customCanonical 
    ? getCanonicalUrl(customCanonical)
    : getCanonicalUrl(location?.pathname || '/');

  const fullTitle = title.includes('Safe or Stolen') ? title : `${title} | Safe or Stolen`;
  const imageUrl = image.startsWith('http') ? image : `https://safeorstolen.com${image}`;

  // Normalize structured data (DO NOT add Organization schema - it's in MasterSEO)
  const normalizedStructuredData = structuredData 
    ? Array.isArray(structuredData) 
      ? structuredData.filter(Boolean) 
      : [structuredData]
    : [];

  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Safe or Stolen" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Robots Meta Tags */}
      {!noindex && (
        <>
          <meta name="robots" content="index, follow, max-snippet:160, max-image-preview:large, max-video-preview:30" />
          <meta name="googlebot" content="index, follow, max-snippet:160, max-image-preview:large, max-video-preview:30" />
        </>
      )}

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#FF5722" />

      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://lxrdzbknktwlubbmlsqe.supabase.co" />

      {/* Page-specific structured data only */}
      {normalizedStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
