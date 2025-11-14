/**
 * ⚠️ DEPRECATED: Use PageSEO instead
 * This component is maintained for backward compatibility only.
 * New pages should use the PageSEO component from '@/components/seo/PageSEO'
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
  
  // Ensure consistent canonical URL generation
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

  // Normalize structured data
  const normalizedStructuredData = structuredData 
    ? Array.isArray(structuredData) 
      ? structuredData.filter(Boolean) 
      : [structuredData]
    : [];

  // Enhanced organization schema for better AI/Google understanding
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation", "SoftwareApplication"],
    "name": "Safe or Stolen",
    "legalName": "Safe or Stolen Corp.",
    "alternateName": ["SOS Verification", "SafeOrStolen", "Safe Or Stolen Platform"],
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "description": "Real-time stolen goods verification platform protecting consumers from unknowingly purchasing stolen items. Free worldwide database checks for phones, cars, electronics using IMEI, VIN, serial numbers.",
    "foundingDate": "2024",
    "slogan": "Verify Before You Buy - Fighting the $13B Stolen Goods Crisis",
    "knowsAbout": [
      "Stolen goods verification",
      "IMEI lookup", 
      "VIN lookup",
      "Serial number check",
      "Consumer protection",
      "Marketplace fraud prevention",
      "Secondhand item verification",
      "Property legitimacy verification"
    ],
    "serviceArea": "Worldwide",
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service", 
        "email": "support@safeorstolen.com",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "contactType": "technical support",
        "email": "support@safeorstolen.com"
      }
    ],
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://linkedin.com/company/safeorstolen"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Stolen Goods Verification Services",
      "numberOfItems": 3,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Free IMEI Phone Check",
            "description": "Check if a phone is stolen using IMEI lookup"
          },
          "price": "0",
          "priceCurrency": "USD",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://safeorstolen.com/pricing"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free VIN Car Check", 
            "description": "Verify if a vehicle is stolen using VIN lookup"
          },
          "price": "0",
          "priceCurrency": "USD",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://safeorstolen.com/pricing"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electronics Serial Number Check",
            "description": "Verify electronics using serial number against stolen databases"
          },
          "price": "0",
          "priceCurrency": "USD",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://safeorstolen.com/pricing"
        }
      ]
    }
  };

  const allStructuredData = [organizationSchema, ...normalizedStructuredData];

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

      {/* Robots Meta Tags - CRITICAL FOR INDEXING */}
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