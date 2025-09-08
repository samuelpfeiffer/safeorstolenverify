import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  
  // Ensure consistent canonical URL generation
  const getCanonicalUrl = (path: string): string => {
    const cleanPath = path === '/' ? '/' : path.replace(/\/+$/, '');
    const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    return `https://safeorstolen.com${normalizedPath}`;
  };

  const canonicalUrl = customCanonical 
    ? getCanonicalUrl(customCanonical)
    : getCanonicalUrl(location.pathname);

  const fullTitle = title.includes('Safe or Stolen') ? title : `${title} | Safe or Stolen`;
  const imageUrl = image.startsWith('http') ? image : `https://safeorstolen.com${image}`;

  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:160';

  // Normalize structured data
  const normalizedStructuredData = structuredData 
    ? Array.isArray(structuredData) 
      ? structuredData.filter(Boolean) 
      : [structuredData]
    : [];

  // Default organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe Or Stolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@safeorstolen.com"
    }
  };

  const allStructuredData = [organizationSchema, ...normalizedStructuredData];

  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

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

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#FF5722" />

      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://lxrdzbknktwlubbmlsqe.supabase.co" />

      {/* Structured Data */}
      {allStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {/* Sitemap Reference */}
      <link rel="sitemap" type="application/xml" href="https://safeorstolen.com/sitemap.xml" />
    </Helmet>
  );
};