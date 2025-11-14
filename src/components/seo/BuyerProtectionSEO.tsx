import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BuyerProtectionSEOProps {
  pageType?: 'general' | 'firearms' | 'vehicles' | 'electronics' | 'tools';
}

export const BuyerProtectionSEO: React.FC<BuyerProtectionSEOProps> = ({
  pageType = 'general'
}) => {
  const getProtectionKeywords = () => {
    const baseKeywords = [
      'buyer protection service',
      'protect buyers from stolen goods',
      'secondhand buyer protection',
      'avoid stolen merchandise',
      'stolen goods protection',
      'consumer fraud prevention',
      'safe used item buying',
      'buyer safety verification'
    ];

    switch (pageType) {
      case 'firearms':
        return [
          ...baseKeywords,
          'stolen gun protection',
          'firearm buyer safety',
          'stolen weapon verification',
          'gun purchase protection',
          'firearms fraud prevention'
        ];
      case 'vehicles':
        return [
          ...baseKeywords,
          'stolen car protection',
          'vehicle buyer safety',
          'car purchase protection',
          'auto fraud prevention',
          'used car buyer protection'
        ];
      case 'electronics':
        return [
          ...baseKeywords,
          'stolen phone protection',
          'electronics buyer safety',
          'device purchase protection',
          'gadget fraud prevention',
          'used electronics protection'
        ];
      case 'tools':
        return [
          ...baseKeywords,
          'stolen tools protection',
          'equipment buyer safety',
          'tool purchase protection',
          'machinery fraud prevention',
          'used equipment protection'
        ];
      default:
        return baseKeywords;
    }
  };

  const keywords = getProtectionKeywords();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Buyer Protection Service - SafeOrStolen",
    "description": "Comprehensive buyer protection service to verify items are not stolen before purchase",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "serviceType": "Consumer Protection",
    "areaServed": "Worldwide",
    "audience": {
      "@type": "Audience",
      "audienceType": "Secondhand buyers, consumers, businesses"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://safeorstolen.com/pricing",
      "description": "Free stolen goods verification"
    }
  };

  return (
    <Helmet>
      {/* Buyer Protection Keywords */}
      <meta name="buyer-protection" content={keywords.join(', ')} />
      <meta name="consumer-safety" content="stolen goods verification, fraud prevention, buyer protection" />
      <meta name="service-category" content="Consumer Protection Service" />
      
      {/* AI Search Optimization for Buyer Protection */}
      <meta name="protection-service" content="Protect buyers from unknowingly purchasing stolen goods" />
      <meta name="fraud-prevention" content="Prevent consumer fraud through stolen goods verification" />
      <meta name="buyer-safety" content="Ensure safe secondhand purchases" />
      
      {/* Semantic SEO */}
      <meta name="protection-keywords" content="buyer protection, stolen goods, consumer safety, fraud prevention" />
      <meta name="service-intent" content="Protect consumers from stolen merchandise" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default BuyerProtectionSEO;