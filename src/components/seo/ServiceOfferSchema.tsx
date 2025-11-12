import { Helmet } from 'react-helmet-async';

/**
 * Service Offer Schema for Search Engines
 * 
 * This schema uses Service type to properly represent our verification services
 * and avoid Google Merchant Center validation errors.
 */
export const ServiceOfferSchema = () => {
  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SafeOrStolen Single Verification",
      "description": "Single stolen item verification check for IMEI, VIN, or serial number. Instant results from 50M+ global database records.",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Verification Service",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "url": "https://safeorstolen.com/pricing",
        "priceCurrency": "USD",
        "price": "0.50",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SafeOrStolen Personal Plan",
      "description": "Monthly subscription with 100 verification searches. Perfect for casual buyers and sellers on marketplaces.",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Subscription Verification Service",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "url": "https://safeorstolen.com/pricing",
        "priceCurrency": "USD",
        "price": "9.99",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  return (
    <Helmet>
      {services.map((service, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(service)}
        </script>
      ))}
    </Helmet>
  );
};