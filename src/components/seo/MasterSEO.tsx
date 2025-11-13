import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * Master SEO Component - Global SEO configuration
 * 
 * IMPORTANT: This component handles ONLY global SEO elements:
 * - Robots meta tags
 * - Global structured data (Organization, WebSite schemas)
 * - Site verification tags
 * - DNS prefetch hints
 * 
 * Page-specific SEO (title, description, canonical) is handled by PageSEO component
 */
export const MasterSEO: React.FC = () => {
  const location = useSafeLocation();
  
  if (!location) return null;
  
  useEffect(() => {
    // Handle client-side canonical domain enforcement (only if needed)
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      
      // Force www to non-www redirect (one-time only)
      if (currentUrl.includes('://www.safeorstolen.com')) {
        const nonWwwUrl = currentUrl.replace('://www.safeorstolen.com', '://safeorstolen.com');
        window.location.replace(nonWwwUrl);
        return;
      }
      
      // Force HTTP to HTTPS (one-time only)
      if (currentUrl.startsWith('http://safeorstolen.com')) {
        const httpsUrl = currentUrl.replace('http://safeorstolen.com', 'https://safeorstolen.com');
        window.location.replace(httpsUrl);
        return;
      }
    }
  }, []);
  
  // Determine indexing status - exclude private/user-specific pages
  const shouldIndex = !location.pathname.includes('/admin') && 
                     !location.pathname.includes('/auth') && 
                     !location.pathname.includes('/test') &&
                     !location.pathname.includes('/profile') &&
                     !location.pathname.includes('/subscription') &&
                     !location.pathname.includes('/dashboard') && // Private user dashboard
                     !location.pathname.includes('/receipts') && // Private user receipts
                     !location.pathname.includes('/search-history'); // Private search history

  // Base structured data for all pages
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Safe Or Stolen",
    "url": "https://safeorstolen.com",
    "description": "Free stolen item lookup service. Check IMEI, VIN, serial numbers against stolen databases. Verify electronics, vehicles, phones before buying.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://safeorstolen.com/stolen-item-checker?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe Or Stolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "description": "Leading stolen item verification service protecting buyers and sellers in secondhand markets.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@safeorstolen.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.youtube.com/@safeorstolenofficially",
      "https://twitter.com/safeorstolen",
      "https://facebook.com/safeorstolen"
    ]
  };

  return (
    <Helmet>
      {/* NOTE: Canonical tags are handled by PageSEO/OptimizedSEOHead on each page */}
      {/* Removing canonical from here to prevent duplicates (caused 98 indexing errors in GSC) */}
      
      {/* Robots directives - clear and specific */}
      <meta name="robots" content={shouldIndex ? 
        "index, follow, max-snippet:160, max-image-preview:large, max-video-preview:30" : 
        "noindex, nofollow"
      } />
      <meta name="googlebot" content={shouldIndex ? 
        "index, follow, max-snippet:160, max-image-preview:large, max-video-preview:30" : 
        "noindex, nofollow"
      } />
      
      {/* Site verification */}
      <meta name="google-site-verification" content="google29952b5cc1a6a4dd" />
      <meta name="msvalidate.01" content="safeorstolen-bing-verification" />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Technical directives */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Sitemap reference */}
      <link rel="sitemap" type="application/xml" href="https://safeorstolen.com/sitemap.xml" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};