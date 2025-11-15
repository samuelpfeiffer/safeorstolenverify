import React from 'react';
import { OptimizedSEOHead } from './OptimizedSEOHead';
import { getCanonicalUrl } from '@/utils/seo/canonicalUtils';
import { useSafeLocation } from '@/hooks/useSafeLocation';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
  canonical?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
}

export const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noIndex = false,
  canonical: customCanonical,
  structuredData
}) => {
  const location = useSafeLocation();
  
  // Build canonical URL - always provide a value
  const canonical = customCanonical 
    ? getCanonicalUrl(customCanonical) 
    : location?.pathname 
      ? getCanonicalUrl(location.pathname)
      : getCanonicalUrl('/');

  // Ensure structuredData is always an array for OptimizedSEOHead
  const normalizedStructuredData = structuredData 
    ? Array.isArray(structuredData) 
      ? structuredData.filter(Boolean) 
      : [structuredData]
    : undefined;

  return (
    <OptimizedSEOHead
      title={title}
      description={description}
      keywords={keywords}
      canonical={canonical}
      image={image}
      type={type}
      noIndex={noIndex}
      structuredData={normalizedStructuredData}
    />
  );
};