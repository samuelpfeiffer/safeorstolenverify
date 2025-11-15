import { Helmet } from 'react-helmet-async';

export const MobileAppSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen",
    "operatingSystem": ["iOS", "Android", "Web"],
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "description": "Mobile app for instant stolen goods verification. Check IMEI, VIN, serial numbers, and firearms. The only mobile app that verifies all item types.",
    "screenshot": "https://safeorstolen.com/images/sos-logo.png",
    "softwareVersion": "2.0",
    "datePublished": "2024-01-01",
    "permissions": "camera, notifications, storage",
    "countriesSupported": "US, CA, UK, AU, EU",
    "featureList": [
      "IMEI phone verification",
      "VIN vehicle verification", 
      "Firearm serial number checking",
      "Electronics verification",
      "Barcode scanning",
      "Offline mode",
      "Push notifications",
      "Verification history",
      "Camera scanning",
      "Real-time alerts"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
