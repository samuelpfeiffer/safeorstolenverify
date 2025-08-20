import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface EnhancedPageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
  structuredData?: Record<string, any>[];
  alternateUrls?: { [key: string]: string };
  breadcrumbPath?: Array<{ name: string; url: string }>;
}

export const EnhancedPageSEO: React.FC<EnhancedPageSEOProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noIndex = false,
  structuredData = [],
  alternateUrls = {},
  breadcrumbPath = []
}) => {
  const location = useLocation();
  const baseUrl = 'https://safeorstolen.com';
  const canonicalUrl = `${baseUrl}${location.pathname}`;
  const imageUrl = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png`;

  // Generate breadcrumb structured data
  const breadcrumbStructuredData = breadcrumbPath.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbPath.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`
    }))
  } : null;

  const allStructuredData = [
    ...structuredData,
    ...(breadcrumbStructuredData ? [breadcrumbStructuredData] : [])
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      <meta name="googlebot" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="Safe or Stolen" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:creator" content="@safeorstolen" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Safe or Stolen Team" />
      <meta name="publisher" content="Safe or Stolen" />
      <meta name="copyright" content="© 2024 Safe or Stolen. All rights reserved." />
      <meta name="theme-color" content="#1a1625" />
      
      {/* Alternate URLs for internationalization */}
      {Object.entries(alternateUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Page-specific optimizations */}
      {location.pathname === '/' && (
        <>
          <link rel="preload" as="image" href={imageUrl} />
          <meta name="google" content="nositelinksearchbox" />
        </>
      )}
    </Helmet>
  );
};