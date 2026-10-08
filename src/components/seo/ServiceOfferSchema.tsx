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
      "name": "SafeOrStolen Free Verification",
      "description": "2 free stolen-item checks using SafeOrStolen reports, public web results, and AI analysis.",
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
        "price": "0",
        "priceValidUntil": "2027-12-31",
        "description": "2 free verifications included",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SafeOrStolen Unlimited Plan",
      "description": "Unlimited monthly verification searches. All item types: IMEI, VIN, serial numbers, license plates, firearms. Includes mobile app with barcode scanning.",
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
        "price": "10.00",
        "priceValidUntil": "2027-12-31",
        "description": "Unlimited verifications for $10/month",
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
