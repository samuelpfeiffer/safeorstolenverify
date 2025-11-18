import { Helmet } from 'react-helmet-async';

export const MobileAppSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen - Research Stolen Items",
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
    "description": "Mobile app for researching stolen items before buying. Research IMEI, VIN, serial numbers. Investigate stolen goods instantly. Download FREE. The only app that researches 100+ stolen item databases. Works for eBay, Facebook Marketplace, OfferUp, auctions, pawn shops. Free Carfax alternative for vehicles.",
    "keywords": ["research stolen items", "research stolen phone", "research stolen car", "lookup stolen goods", "investigate stolen property", "research IMEI stolen", "research VIN stolen", "stolen item research app", "secondhand research app", "buyer protection research", "carfax alternative app", "ebay verification app", "facebook marketplace checker", "offerup safety app", "auction verification", "pawnshop checker"],
    "screenshot": "https://safeorstolen.com/images/sos-logo.png",
    "softwareVersion": "2.0",
    "datePublished": "2024-01-01",
    "permissions": "camera, notifications, storage",
    "countriesSupported": "US, CA, UK, AU, EU",
    "featureList": [
      "Research stolen phones instantly",
      "Research stolen vehicles and VINs",
      "Lookup stolen goods databases",
      "Investigate serial numbers",
      "Research before buying secondhand",
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
