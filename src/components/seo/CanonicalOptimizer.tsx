import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSafeLocation } from '@/hooks/useSafeLocation';

interface CanonicalOptimizerProps {
  customCanonical?: string;
}

export const CanonicalOptimizer: React.FC<CanonicalOptimizerProps> = ({
  customCanonical
}) => {
  const location = useSafeLocation();
  
  if (!location) {
    return (
      <Helmet>
        <link rel="canonical" href={customCanonical || "https://safeorstolen.com/"} />
      </Helmet>
    );
  }

  useEffect(() => {
    // Only perform URL canonicalization on production domain
    const isProductionDomain = window.location.hostname === 'safeorstolen.com' || 
                                window.location.hostname === 'www.safeorstolen.com';
    
    if (!isProductionDomain) {
      // Skip URL manipulation in preview/development environments
      return;
    }

    // Redirect non-canonical URLs to canonical versions
    const currentUrl = window.location.href;
    const canonicalUrl = generateCanonicalUrl();
    
    // Check for non-canonical variations
    if (currentUrl !== canonicalUrl && !customCanonical) {
      // Only redirect if it's a clear canonical issue (trailing slash, www, etc.)
      if (shouldRedirectToCanonical(currentUrl, canonicalUrl)) {
        try {
          window.history.replaceState(null, '', canonicalUrl);
        } catch (error) {
          console.warn('Cannot update URL in preview environment:', error);
        }
      }
    }
  }, [location]);

  const generateCanonicalUrl = (): string => {
    if (customCanonical) {
      return customCanonical.startsWith('http') 
        ? customCanonical 
        : `https://safeorstolen.com${customCanonical}`;
    }

    const baseUrl = 'https://safeorstolen.com';
    let path = location.pathname;

    // Remove trailing slash (except for root)
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    // Handle specific redirects and canonical mappings
    const redirects: Record<string, string> = {
      '/imei': '/imei-check',
      '/imei-checker': '/imei-check',
      '/vin-checker': '/vin-verification',
      '/serial-checker': '/serial-number-checker',
      '/verify': '/stolen-item-checker'
    };

    if (redirects[path]) {
      path = redirects[path];
    }

    return `${baseUrl}${path}`;
  };

  const shouldRedirectToCanonical = (current: string, canonical: string): boolean => {
    const currentUrl = new URL(current);
    const canonicalUrl = new URL(canonical);

    // Redirect if:
    // 1. Different protocol (http vs https)
    // 2. Different subdomain (www vs non-www)
    // 3. Trailing slash differences
    // 4. Known redirect paths

    return (
      currentUrl.protocol !== canonicalUrl.protocol ||
      currentUrl.hostname !== canonicalUrl.hostname ||
      currentUrl.pathname !== canonicalUrl.pathname
    );
  };

  const canonicalUrl = generateCanonicalUrl();

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional canonical signals */}
      <meta property="og:url" content={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      
      {/* Prevent duplicate content issues */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      
      {/* Handle pagination if needed */}
      {location.search.includes('page=') && (
        <meta name="robots" content="noindex, follow" />
      )}
    </Helmet>
  );
};