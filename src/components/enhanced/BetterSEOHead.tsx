import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * @deprecated Use SEOHead from '@/components/seo/SEOHead' instead.
 * This component is kept for backwards compatibility only.
 */
interface BetterSEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

export const BetterSEOHead: React.FC<BetterSEOHeadProps> = ({
  title,
  description,
  keywords,
  image = "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
  url,
  type = "website",
  author = "SafeOrStolen",
  publishedTime,
  modifiedTime,
  canonical,
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = title.includes('SafeOrStolen') ? title : `${title} | SafeOrStolen`;
  const currentPath = typeof window !== 'undefined' ? window.location.pathname.split('?')[0].split('#')[0] : '/';
  const canonicalUrl = canonical 
    ? (canonical.startsWith('http') ? canonical : `https://safeorstolen.com${canonical}`) 
    : `https://safeorstolen.com${currentPath}`;
  const imageUrl = image.startsWith('http') ? image : `https://safeorstolen.com${image}`;

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SafeOrStolen" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@safeorstolen" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#FF5722" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://lxrdzbknktwlubbmlsqe.supabase.co" />
      <link rel="dns-prefetch" href="https://js.stripe.com" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* PWA Meta */}
      <meta name="application-name" content="SafeOrStolen" />
      <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
    </Helmet>
  );
};