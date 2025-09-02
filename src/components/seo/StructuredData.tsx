import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'Product' | 'Service' | 'FAQPage' | 'Article';
  data?: Record<string, any>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ 
  type = 'Organization',
  data = {}
}) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          name: 'SafeOrStolen',
          description: 'Verify items aren\'t stolen before you buy. Real-time verification service for IMEI, serial numbers, VIN, and more.',
          url: 'https://safeorstolen.com',
          logo: 'https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-SAFE-ORG',
            contactType: 'Customer Service',
            availableLanguage: 'English'
          },
          sameAs: [
            'https://www.facebook.com/safeorstolen',
            'https://twitter.com/safeorstolen'
          ],
          ...data
        };

      case 'WebSite':
        return {
          ...baseData,
          name: 'SafeOrStolen',
          url: 'https://safeorstolen.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://safeorstolen.com/dashboard?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          },
          ...data
        };

      case 'Service':
        return {
          ...baseData,
          name: 'Stolen Item Verification Service',
          description: 'Professional verification service to check if items are stolen before purchase',
          provider: {
            '@type': 'Organization',
            name: 'SafeOrStolen'
          },
          serviceType: 'Verification Service',
          areaServed: 'Worldwide',
          ...data
        };

      default:
        return { ...baseData, ...data };
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};