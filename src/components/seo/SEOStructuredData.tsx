import React from 'react';

interface SEOStructuredDataProps {
  type: 'organization' | 'service' | 'product' | 'faq' | 'localBusiness';
  data?: any;
}

export const SEOStructuredData: React.FC<SEOStructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SafeOrStolen",
          "description": "Leading platform for verifying IMEI, VIN, and Serial Numbers to protect buyers and sellers from stolen goods",
          "url": "https://safeorstolen.com",
          "logo": "https://safeorstolen.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-SAFE-CHECK",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Peoria",
            "addressRegion": "Arizona",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://twitter.com/safeorstolen",
            "https://facebook.com/safeorstolen",
            "https://linkedin.com/company/safeorstolen"
          ]
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SafeOrStolen",
          "description": "IMEI, VIN & Serial Number Verification Service in Peoria, Arizona",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Peoria",
            "addressRegion": "AZ",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.5806",
            "longitude": "-112.2374"
          },
          "url": "https://safeorstolen.com",
          "telephone": "+1-555-SAFE-CHECK",
          "priceRange": "Free - $9.99",
          "openingHours": "Mo-Su 00:00-23:59"
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Device Verification Service",
          "description": "Instant IMEI, VIN, and Serial Number verification to check if devices are stolen",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "serviceType": "Device Verification",
          "areaServed": "Worldwide",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://safeorstolen.com",
            "serviceSmsNumber": "+1-555-SAFE-CHECK"
          }
        };

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "IMEI Checker & Device Verification",
          "description": "Verify if phones, cars, bikes are stolen with instant IMEI, VIN, serial number lookup",
          "brand": {
            "@type": "Brand",
            "name": "SafeOrStolen"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://safeorstolen.com"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "ratingCount": "1250"
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I check if my phone is stolen using IMEI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Enter your phone's IMEI number (dial *#06# to find it) into our free IMEI checker. We'll instantly search multiple stolen device databases to verify if your phone is reported stolen."
              }
            },
            {
              "@type": "Question", 
              "name": "What is an IMEI blacklist check?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An IMEI blacklist check verifies if a phone's IMEI number appears on carrier blacklists or stolen device databases. Blacklisted phones cannot connect to cellular networks."
              }
            },
            {
              "@type": "Question",
              "name": "How can I verify a car's VIN number?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use our VIN lookup tool to check if a vehicle is reported stolen. Enter the 17-character VIN number and we'll search police databases and stolen vehicle reports."
              }
            },
            {
              "@type": "Question",
              "name": "Is the device verification service free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We offer 4 free device verifications. For unlimited checks, upgrade to our $9.99/month plan with advanced features and priority support."
              }
            }
          ]
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};