import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getCanonicalUrl } from '@/utils/seo/canonicalUtils';
import { getRobotsContent } from '@/utils/seo/robotsPolicy';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * SEOHead - Unified SEO meta tag component for all pages
 * 
 * This component handles all SEO-related meta tags in one place:
 * - Title and description
 * - Canonical URL
 * - Robots directives
 * - Open Graph tags
 * - Twitter Card tags
 * - Structured data (JSON-LD)
 * 
 * IMPORTANT: index.html should NOT contain title, description, robots,
 * canonical, og:*, or twitter:* tags as they are managed here.
 */

export interface SEOHeadProps {
  /** Page title - will be appended with " | SafeOrStolen" if not already present */
  title: string;
  /** Meta description - max 160 chars recommended */
  description: string;
  /** Canonical URL path (e.g., "/imei-checker") or full URL */
  canonical?: string;
  /** Open Graph image URL */
  ogImage?: string;
  /** Set to true to add noindex, nofollow */
  noIndex?: boolean;
  /** JSON-LD structured data object or array of objects */
  schemaJson?: Record<string, unknown> | Record<string, unknown>[];
  /** Keywords for meta keywords tag (optional, lower SEO value but still useful) */
  keywords?: string;
  /** Open Graph type - defaults to "website" */
  ogType?: string;
  /** Article publish date for og:article:published_time */
  publishedTime?: string;
  /** Article modified date for og:article:modified_time */
  modifiedTime?: string;
  /** Author name */
  author?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogImage = '/sos-logo.png',
  noIndex = false,
  schemaJson,
  keywords,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author = 'SafeOrStolen',
}) => {
  const location = useSafeLocation();
  const pathname = location?.pathname || '/';

  // Build the full title - append brand if not present
  const fullTitle = title.includes('SafeOrStolen') 
    ? title 
    : `${title} | SafeOrStolen`;

  // Optimize title length (max 60 chars for search results)
  const optimizedTitle = fullTitle.length > 60 
    ? fullTitle.substring(0, 57) + '...' 
    : fullTitle;

  // Optimize description length (max 160 chars)
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;

  // Build canonical URL
  const canonicalUrl = canonical 
    ? getCanonicalUrl(canonical) 
    : getCanonicalUrl(pathname);

  // Build full image URL
  const fullImageUrl = ogImage.startsWith('http') 
    ? ogImage 
    : `https://safeorstolen.com${ogImage}`;

  // Get robots directive
  const robotsContent = getRobotsContent({ pathname, noIndex });

  // Convert schema to array format
  const schemaArray = schemaJson 
    ? Array.isArray(schemaJson) 
      ? schemaJson.filter(Boolean) 
      : [schemaJson]
    : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Robots Directive */}
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="SafeOrStolen" />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={optimizedTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article-specific Open Graph */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && ogType === 'article' && <meta property="article:author" content={author} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={optimizedTitle} />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:creator" content="@safeorstolen" />
      
      {/* JSON-LD Structured Data */}
      {schemaArray.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
