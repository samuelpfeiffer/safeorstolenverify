import { Helmet } from 'react-helmet-async';

/**
 * Proper Product Schema for Google Merchant Center
 * 
 * This schema is specifically formatted for Google Merchant Listings
 * with all required fields to avoid validation errors.
 */
export const ServiceOfferSchema = () => {
  // Proper Product schema with ALL required Merchant Center fields
  const products = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "SafeOrStolen Single Verification",
      "description": "Single stolen item verification check for IMEI, VIN, or serial number. Instant results from 50M+ global database records.",
      "brand": {
        "@type": "Brand",
        "name": "SafeOrStolen"
      },
      "image": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
      "offers": {
        "@type": "Offer",
        "url": "https://safeorstolen.com/pricing",
        "priceCurrency": "USD",
        "price": "0.50",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "SafeOrStolen"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "SafeOrStolen Personal Plan",
      "description": "Monthly subscription with 100 verification searches. Perfect for casual buyers and sellers on marketplaces.",
      "brand": {
        "@type": "Brand",
        "name": "SafeOrStolen"
      },
      "image": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
      "offers": {
        "@type": "Offer",
        "url": "https://safeorstolen.com/pricing",
        "priceCurrency": "USD",
        "price": "9.99",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "SafeOrStolen"
        }
      }
    }
  ];

  return (
    <Helmet>
      {products.map((product, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(product)}
        </script>
      ))}
    </Helmet>
  );
};