import { Helmet } from 'react-helmet-async';

/**
 * Centralized Service Offer Schema
 * 
 * This component provides a single source of truth for SafeOrStolen's service pricing.
 * It replaces all standalone "Offer" schemas that were causing Google Merchant Listings errors.
 * 
 * Google expects standalone Offers to be product listings with fields like:
 * - image
 * - hasMerchantReturnPolicy
 * - shippingDetails
 * - availability
 * 
 * Since SafeOrStolen is a SERVICE (not a product marketplace), we use the Service schema
 * with hasOfferCatalog to properly structure our pricing tiers.
 * 
 * Usage: Import and use this component on any page that needs to display pricing/service information.
 */
export const ServiceOfferSchema = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SafeOrStolen Verification Service",
    "description": "Stolen item verification service for IMEI, VIN, and serial numbers. Protect buyers and sellers from financial loss and legal issues.",
    "serviceType": "Stolen Goods Verification",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "areaServed": {
      "@type": "GeoShape",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Verification Service Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Plan",
            "description": "4 free verification searches per month"
          },
          "price": "0",
          "priceCurrency": "USD",
          "eligibleRegion": {
            "@type": "GeoShape",
            "name": "Worldwide"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Plan",
            "description": "100 verification searches per month"
          },
          "price": "9.99",
          "priceCurrency": "USD",
          "billingIncrement": "monthly",
          "eligibleRegion": {
            "@type": "GeoShape",
            "name": "Worldwide"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Plan",
            "description": "Unlimited verification searches"
          },
          "price": "29.99",
          "priceCurrency": "USD",
          "billingIncrement": "monthly",
          "eligibleRegion": {
            "@type": "GeoShape",
            "name": "Worldwide"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "12847",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};