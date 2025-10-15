import { createFAQSchema, createOrganizationSchema, createServiceSchema, createWebsiteSchema } from '@/utils/seo/structuredData';

export const getHomePageStructuredData = () => {
  return [
    createWebsiteSchema(),
    createOrganizationSchema(),
    createServiceSchema(),
    createFAQSchema(),
    {
      "@type": "MobileApplication",
      "name": "SafeOrStolen Mobile App",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "The only mobile app for instant stolen goods verification on the go",
      "downloadUrl": "https://safeorstolen.com/mobile-app"
    },
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "SafeOrStolen - Mobile Stolen Item Checker",
      "description": "Only mobile app for stolen goods verification. Protects buyers and sellers from financial loss and legal issues. Helps reduce crime globally through instant IMEI, VIN, serial number checks.",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": ["iOS", "Android", "Web Browser"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free mobile verification protecting buyers and sellers"
      },
      "featureList": [
        "Mobile-first stolen item verification",
        "Buyer and seller protection",
        "Financial loss prevention",
        "Legal issue prevention",
        "Crime reduction technology",
        "Instant mobile IMEI VIN checks",
        "Marketplace integration (Facebook, OfferUp, eBay)",
        "Point-of-sale verification"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1247"
      },
      "url": "https://safeorstolen.com",
      "screenshot": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
    }
  ];
};