import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { getCanonicalUrl } from '@/utils/seo/canonicalUtils';

interface OptimizedSEOWrapperProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noIndex?: boolean;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
  children: React.ReactNode;
}

export const OptimizedSEOWrapper: React.FC<OptimizedSEOWrapperProps> = ({
  title,
  description,
  keywords,
  canonical: customCanonical,
  noIndex = false,
  ogImage = 'https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
  ogType = 'website',
  structuredData,
  children
}) => {
  const location = useSafeLocation();
  const canonical = customCanonical 
    ? getCanonicalUrl(customCanonical) 
    : getCanonicalUrl(location?.pathname || '/');
  
  const fullTitle = title.includes('Safe Or Stolen') ? title : `${title} | Safe Or Stolen`;
  const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:160, max-image-preview:large';

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="title" content={fullTitle} />
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content={robotsContent} />
        <meta name="googlebot" content={robotsContent} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Safe Or Stolen" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@safeorstolen" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Additional Meta */}
        <meta name="author" content="Safe Or Stolen" />
        <meta name="theme-color" content="#ff6b35" />
        
        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}

        {/* Preload critical resources */}
        <link rel="preload" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>
      
      {children}
    </>
  );
};

// Common structured data generators
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Safe Or Stolen",
  "url": "https://safeorstolen.com",
  "description": "Global verification service for IMEI, serial numbers, and VIN numbers",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://safeorstolen.com/dashboard?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Safe Or Stolen",
  "url": "https://safeorstolen.com",
  "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
  "description": "Global verification service for stolen goods detection",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "support",
    "contactType": "customer service",
    "email": "support@safeorstolen.com"
  },
  "sameAs": [
    "https://twitter.com/safeorstolen"
  ]
});

export const generateServiceSchema = (serviceType: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `${serviceType} Verification - Safe Or Stolen`,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Safe Or Stolen",
    "url": "https://safeorstolen.com"
  },
  "serviceType": "Security Verification Service",
  "areaServed": "Worldwide"
});