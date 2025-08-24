import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getCanonicalUrl, normalizeCanonicalUrl } from '@/utils/seo/canonicalUtils';

interface UnifiedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: Record<string, any> | Record<string, any>[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const UnifiedSEO: React.FC<UnifiedSEOProps> = ({
  title,
  description,
  keywords,
  image = "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
  type = "website",
  canonical,
  noIndex = false,
  noFollow = false,
  structuredData,
  author = "Safe or Stolen",
  publishedTime,
  modifiedTime
}) => {
  const location = useLocation();
  
  // Generate canonical URL - always use non-www version
  const canonicalUrl = canonical 
    ? normalizeCanonicalUrl(`https://safeorstolen.com${canonical}`)
    : getCanonicalUrl(location.pathname);
  
  // Ensure image URL is absolute and uses non-www
  const imageUrl = image.startsWith('http') 
    ? normalizeCanonicalUrl(image)
    : `https://safeorstolen.com${image}`;
  
  // Generate full title
  const fullTitle = title.includes('Safe or Stolen') ? title : `${title} | Safe or Stolen`;
  
  // Generate robots content
  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow'
  ].join(', ');

  // Format structured data as array
  const structuredDataArray = structuredData 
    ? (Array.isArray(structuredData) ? structuredData : [structuredData])
    : [];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      
      {/* Canonical URL - Critical for preventing duplicates */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Safe or Stolen" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@safeorstolen" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#FF5722" />
      <meta name="application-name" content="Safe or Stolen" />
      <meta name="apple-mobile-web-app-title" content="Safe or Stolen" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://lxrdzbknktwlubbmlsqe.supabase.co" />
      <link rel="dns-prefetch" href="https://js.stripe.com" />
      
      {/* Structured Data */}
      {structuredDataArray.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};