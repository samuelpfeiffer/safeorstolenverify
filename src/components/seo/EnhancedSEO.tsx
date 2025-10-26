/**
 * ⚠️ DEPRECATED: Use PageSEO instead
 * This component is maintained for backward compatibility only.
 * New pages should use the PageSEO component from '@/components/seo/PageSEO'
 * 
 * Migration example:
 * Old: <EnhancedSEO title="..." description="..." keywords={[...]} />
 * New: <PageSEO title="..." description="..." keywords="..." canonical="/path" />
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = 'SafeOrStolen - Verify Before You Buy or Sell Second-Hand Items',
  description = 'Protect yourself from buying or selling stolen goods. Check IMEI, VIN, and serial numbers instantly. Trusted by 100,000+ users worldwide. Free verification for buyers and sellers.',
  keywords = [
    'verify before you buy',
    'verify before you sell',
    'check if stolen',
    'IMEI check',
    'VIN verification',
    'serial number lookup',
    'secondhand market safety',
    'stolen goods database',
    'buyer protection',
    'seller protection'
  ],
  image = '/assets/hero-verification-devices.png',
  url = 'https://safeorstolen.com'
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        url: url,
        name: 'SafeOrStolen',
        description: description,
        publisher: {
          '@id': `${url}/#organization`
        },
        potentialAction: [{
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${url}/?s={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }]
      },
      {
        '@type': 'Organization',
        '@id': `${url}/#organization`,
        name: 'SafeOrStolen',
        url: url,
        logo: {
          '@type': 'ImageObject',
          url: `${url}/assets/hero-verification-devices.png`
        },
        description: 'Leading verification platform protecting buyers and sellers in the secondhand market',
        sameAs: [
          'https://www.facebook.com/safeorstolen',
          'https://twitter.com/safeorstolen'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          availableLanguage: ['English']
        }
      },
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        serviceType: 'Item Verification Service',
        provider: {
          '@id': `${url}/#organization`
        },
        areaServed: {
          '@type': 'Place',
          name: 'Worldwide'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Verification Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Free Item Verification',
                description: '4 free verifications for all users'
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="SafeOrStolen" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Performance and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#FF5722" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};
