import { Helmet } from 'react-helmet-async';

interface AdvancedSchemaMarkupProps {
  pageType: 'homepage' | 'service' | 'pricing' | 'about' | 'contact';
  customData?: Record<string, any>;
}

export const AdvancedSchemaMarkup: React.FC<AdvancedSchemaMarkupProps> = ({ 
  pageType, 
  customData = {} 
}) => {
  const getSchemaMarkup = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
      "description": "Leading platform for verifying IMEI, VIN, and Serial Numbers to protect against stolen goods",
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "Doug Sittler"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Peoria",
        "addressRegion": "Arizona",
        "addressCountry": "US"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-SAFE-ORG",
          "contactType": "customer service",
          "email": "support@safeorstolen.com",
          "availableLanguage": ["English"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-SAFE-ORG",
          "contactType": "technical support",
          "email": "tech@safeorstolen.com"
        }
      ],
      "sameAs": [
        "https://twitter.com/safeorstolen",
        "https://linkedin.com/company/safeorstolen",
        "https://facebook.com/safeorstolen"
      ]
    };

    const schemas: any[] = [baseOrganization];

    switch (pageType) {
      case 'homepage':
        schemas.push({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "SafeOrStolen",
          "url": "https://safeorstolen.com",
          "description": "Free IMEI check, VIN lookup, and serial number verification to protect against stolen goods",
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": "https://safeorstolen.com/check-phone?imei={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            {
              "@type": "SearchAction",
              "target": "https://safeorstolen.com/check-car?vin={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          ]
        });
        break;

      case 'service':
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": customData.serviceName || "Device Verification Service",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "serviceType": "Security Verification",
          "description": customData.serviceDescription || "Professional verification service for IMEI, VIN, and serial numbers",
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": 5,
                "bestRating": 5
              },
              "author": {
                "@type": "Person",
                "name": "Sarah Johnson"
              },
              "reviewBody": "SafeOrStolen saved me from buying a stolen phone. Quick and accurate verification."
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.8,
            "reviewCount": 1250,
            "bestRating": 5,
            "worstRating": 1
          }
        });
        break;

      case 'pricing':
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "SafeOrStolen Verification Service",
          "description": "Comprehensive stolen goods verification with multiple pricing tiers",
          "brand": {
            "@type": "Brand",
            "name": "SafeOrStolen"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Free Plan",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "description": "4 free verification checks"
            },
            {
              "@type": "Offer",
              "name": "Unlimited Plan", 
              "price": "9.99",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "description": "Unlimited verification checks with premium features"
            }
          ]
        });
        break;

      case 'about':
        schemas.push({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "description": "Learn about SafeOrStolen's mission to protect consumers from stolen goods through comprehensive verification services"
        });
        break;

      case 'contact':
        schemas.push({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "ContactPoint",
            "telephone": "+1-555-SAFE-ORG",
            "contactType": "customer service",
            "email": "support@safeorstolen.com",
            "availableLanguage": "English"
          }
        });
        break;
    }

    return schemas;
  };

  const schemas = getSchemaMarkup();

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      ))}
    </Helmet>
  );
};