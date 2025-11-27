import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  pageType: 'home' | 'service' | 'article' | 'faq' | 'about';
  customData?: any;
}

/**
 * Comprehensive Schema Markup for all page types
 * Ensures rich results in Google, Bing, and AI search engines
 */
export const ComprehensiveSchemaMarkup = ({ pageType, customData }: SchemaMarkupProps) => {
  const getSchemas = () => {
    const baseSchemas: any[] = [];

    // Page-specific schemas
    if (pageType === 'home') {
      baseSchemas.push({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SafeOrStolen Mobile App",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "iOS, Android",
        "description": "Free mobile app to check if phones, laptops, cars, bikes, and electronics are stolen. Scan barcodes, verify serial numbers, IMEI, VIN against police databases.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://safeorstolen.com/mobile-app"
        }
      });

      // Service schema for main offerings
      baseSchemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Stolen Item Verification",
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Verification Services",
          "numberOfItems": 3,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "IMEI Phone Verification",
                "description": "Check if a phone is stolen by IMEI number"
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
                "name": "VIN Car Verification",
                "description": "Verify if a vehicle is stolen by VIN number"
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
                "name": "Serial Number Lookup",
                "description": "Check laptops, tools, bikes, and electronics"
              },
              "price": "0",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://safeorstolen.com/pricing"
            }
          ]
        }
      });
    }

    if (pageType === 'service') {
      baseSchemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": customData?.serviceType || "Item Verification",
        "name": customData?.serviceName || "Stolen Item Verification",
        "description": customData?.description || "Professional verification service",
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen"
        },
        "areaServed": "Worldwide",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://safeorstolen.com",
          "serviceType": "Online"
        }
      });
    }

    if (pageType === 'faq') {
      baseSchemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": customData?.faqs || [
          {
            "@type": "Question",
            "name": "How do I check if a phone is stolen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enter the IMEI number (dial *#06# or check Settings) into our free verification tool. We check against global police databases, manufacturer blacklists, and theft reports."
            }
          },
          {
            "@type": "Question",
            "name": "Is the stolen item checker really free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Get 4 FREE verifications when you sign up. Check phones, laptops, cars, bikes, and any electronics with serial numbers. Premium plans available for unlimited searches."
            }
          },
          {
            "@type": "Question",
            "name": "What items can I verify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Verify phones (IMEI), cars/trucks (VIN), laptops, computers, cameras, power tools, bikes, firearms, watches, jewelry, and any item with a serial number."
            }
          }
        ]
      });
    }

    if (pageType === 'article') {
      baseSchemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": customData?.title,
        "description": customData?.description,
        "author": {
          "@type": "Organization",
          "name": "SafeOrStolen"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SafeOrStolen",
          "logo": {
            "@type": "ImageObject",
            "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
          }
        },
        "datePublished": customData?.publishDate || new Date().toISOString(),
        "dateModified": customData?.modifiedDate || new Date().toISOString()
      });
    }

    return baseSchemas;
  };

  const schemas = getSchemas();

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
