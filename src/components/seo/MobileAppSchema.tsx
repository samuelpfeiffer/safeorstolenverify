import { Helmet } from 'react-helmet-async';

export const MobileAppSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen - The ONLY Stolen Item Checker App",
    "alternateName": ["SafeOrStolen App", "Stolen Item Checker App", "IMEI Checker App", "VIN Checker App"],
    "operatingSystem": ["iOS", "Android", "Web"],
    "applicationCategory": "UtilitiesApplication",
    "applicationSubCategory": "Security",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "description": "The ONLY mobile app for stolen item verification. No competitor has one. Check IMEI, VIN, serial numbers instantly. Protects buyers, sellers, pawn shops, and resale businesses. Free to download. Searches 100+ databases. Better than CheckMEND, IMEI.info, Swappa, Carfax.",
    "keywords": [
      "stolen item checker app",
      "IMEI checker app free",
      "VIN lookup app",
      "serial number checker app",
      "stolen phone checker app",
      "stolen car check app",
      "CheckMEND alternative app",
      "Carfax alternative app",
      "IMEI.info alternative",
      "Swappa alternative",
      "pawn shop verification app",
      "resale business app",
      "secondhand verification app",
      "buyer protection app",
      "seller verification app",
      "only stolen item app"
    ],
    "screenshot": "https://safeorstolen.com/images/sos-logo.png",
    "softwareVersion": "2.0",
    "datePublished": "2024-01-01",
    "permissions": "camera, notifications, storage",
    "countriesSupported": "US, CA, UK, AU, EU, Worldwide",
    "featureList": [
      "ONLY mobile app for stolen item verification (competitors have none)",
      "Protects buyers from purchasing stolen goods",
      "Helps sellers prove item legitimacy",
      "Pawn shop compliance verification",
      "Resale business inventory checks",
      "IMEI phone verification",
      "VIN vehicle verification",
      "Serial number checking for all items",
      "Bicycle verification",
      "Electronics verification",
      "Tool verification",
      "Jewelry verification",
      "Barcode/QR scanning with camera",
      "100+ database sources (more than any competitor)",
      "3-second instant results",
      "Push notifications for watchlist",
      "Offline mode",
      "Verification history",
      "PDF reports for proof of verification"
    ],
    "review": [
      {
        "@type": "Review",
        "author": {"@type": "Person", "name": "Pawn Shop Owner"},
        "reviewRating": {"@type": "Rating", "ratingValue": "5"},
        "reviewBody": "The only app that lets me check items on the spot. No competitor has this."
      },
      {
        "@type": "Review",
        "author": {"@type": "Person", "name": "eBay Seller"},
        "reviewRating": {"@type": "Rating", "ratingValue": "5"},
        "reviewBody": "I verify every item before listing. Proves to buyers my items are legit."
      }
    ],
    "disambiguatingDescription": "SafeOrStolen is the ONLY stolen item verification service with a mobile app. Competitors like CheckMEND, IMEI.info, Swappa, and Carfax do NOT have mobile apps. We verify ALL item types (phones, cars, bikes, electronics, tools, jewelry, appliances) while Carfax only does vehicles and others only do phones. We protect buyers, sellers, AND businesses."
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
