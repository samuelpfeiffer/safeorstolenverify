import React from 'react';
import { SEOHead } from './SEOHead';
import { getCanonicalUrl } from '@/utils/seo/canonicalUtils';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * PageSEO - Wrapper component for SEOHead
 * Normalizes props and delegates to the unified SEOHead component.
 */
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
  noIndex,
  canonical: customCanonical,
  structuredData,
}) => {
  const location = useSafeLocation();
  
  // Build canonical URL - always provide a value
  const canonical = customCanonical 
    ? getCanonicalUrl(customCanonical) 
    : location?.pathname 
      ? getCanonicalUrl(location.pathname)
      : getCanonicalUrl('/');

  // Ensure structuredData is always an array for SEOHead
  const normalizedStructuredData = structuredData 
    ? Array.isArray(structuredData) 
      ? structuredData.filter(Boolean) 
      : [structuredData]
    : undefined;

  return (
    <SEOHead
      title={title}
      description={description}
      keywords={keywords}
      canonical={canonical}
      ogImage={image}
      ogType={type}
      noIndex={noIndex}
      schemaJson={normalizedStructuredData}
    />
  );
};
