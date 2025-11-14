import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getCanonicalUrl } from '@/utils/seo/canonicalUtils';
import { useSafeLocation } from '@/hooks/useSafeLocation';

interface CanonicalTagProps {
  /** 
   * Custom canonical URL. If not provided, uses current pathname.
   * Can be relative (/path) or absolute (https://...)
   */
  url?: string;
}

/**
 * Centralized Canonical Tag Component
 * 
 * Ensures ONLY ONE canonical tag per page with proper format:
 * - Non-www (safeorstolen.com)
 * - HTTPS protocol
 * - No query parameters
 * - No hash fragments
 * - No trailing slash (except root)
 * 
 * Usage:
 * <CanonicalTag url="/about" />
 * <CanonicalTag url="https://safeorstolen.com/pricing" />
 * <CanonicalTag /> // Uses current pathname
 */
export const CanonicalTag: React.FC<CanonicalTagProps> = ({ url }) => {
  const location = useSafeLocation();
  
  // Determine the path to canonicalize
  const path = url || (location ? location.pathname : '/');
  
  // Generate clean canonical URL
  const canonicalUrl = getCanonicalUrl(path);
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};
