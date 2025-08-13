import React from 'react';
import { OptimizedSEOHead } from './OptimizedSEOHead';
import { getCanonicalUrl } from '@/utils/seo/canonicalUtils';
import { useLocation } from 'react-router-dom';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
  structuredData?: Record<string, any>;
}

export const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noIndex = false,
  structuredData
}) => {
  const location = useLocation();
  const canonical = getCanonicalUrl(location.pathname);

  return (
    <OptimizedSEOHead
      title={title}
      description={description}
      keywords={keywords}
      canonical={canonical}
      image={image}
      type={type}
      noIndex={noIndex}
      structuredData={structuredData}
    />
  );
};