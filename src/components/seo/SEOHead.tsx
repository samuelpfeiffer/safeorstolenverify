
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  robotsDirectives?: string;
  alternateUrls?: Record<string, string>;
  preloadUrls?: string[];
}

export const SEOHead = ({
  title = "Safe Or Stolen - Global #1 IMEI, Serial & VIN Verification Service | Verify Before You Buy",
  description = "World's most trusted verification service for second-hand items. Check IMEI numbers, serial numbers, and VIN numbers globally to verify if items are stolen, lost, or legitimate before buying/selling. Protect yourself from fraud worldwide.",
  keywords = "global verification service, IMEI check worldwide, serial number verification international, VIN number check global, stolen item database, second-hand item verification, lost property check, legitimate purchase verification, verify before you buy, fraud prevention",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://safeorstolen.com/og-image.png",
  ogType = "website",
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  robotsDirectives = "index, follow, max-snippet:160, max-image-preview:large, max-video-preview:-1",
  alternateUrls,
  preloadUrls = []
}: SEOHeadProps) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://safeorstolen.com';
  const canonicalUrl = canonical ? `https://safeorstolen.com${canonical}` : currentUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Safe Or Stolen" />
      <meta name="robots" content={robotsDirectives} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-language" content="en-US" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Geographic & Business Meta Tags */}
      <meta name="geo.region" content="Global" />
      <meta name="geo.placename" content="Worldwide" />
      <meta name="business-type" content="Global Verification Service" />
      <meta name="service-area" content="Worldwide" />
      <meta name="service-type" content="IMEI Verification, Serial Number Verification, VIN Verification" />

      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Safe Or Stolen Global Verification Service" />
      <meta property="og:site_name" content="Safe Or Stolen" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:creator" content="@safeorstolen" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      <meta name="twitter:image:alt" content="Safe Or Stolen Global Verification Service" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1E40AF" />
      <meta name="msapplication-TileColor" content="#1E40AF" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />

      {/* DNS Prefetch & Preconnect for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Preload Critical Resources */}
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
        as="style"
        onLoad={() => {
          const link = document.querySelector('link[href*="fonts.googleapis.com"]') as HTMLLinkElement;
          if (link) {
            link.onload = null;
            link.rel = 'stylesheet';
          }
        }}
      />
      <link 
        rel="preload" 
        href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" 
        as="image"
      />

      {/* Custom Preload URLs */}
      {preloadUrls.map((url, index) => (
        <link key={index} rel="preload" href={url} as="image" />
      ))}

      {/* Alternate URLs for International SEO */}
      {alternateUrls && Object.entries(alternateUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* Favicon and App Icons */}
      <link rel="icon" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" type="image/png" />
      <link rel="apple-touch-icon" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};
