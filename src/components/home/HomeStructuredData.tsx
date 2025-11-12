import { createFAQSchema, createOrganizationSchema, createServiceSchema, createWebsiteSchema } from '@/utils/seo/structuredData';

export const getHomePageStructuredData = () => {
  return [
    createWebsiteSchema(),
    createOrganizationSchema(),
    createServiceSchema(),
    createFAQSchema(),
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "SafeOrStolen - Mobile Stolen Item Checker",
      "description": "Only mobile app for stolen goods verification. Protects buyers and sellers from financial loss and legal issues. Helps reduce crime globally through instant IMEI, VIN, serial number checks.",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": ["iOS", "Android", "Web Browser"],
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
      "url": "https://safeorstolen.com",
      "screenshot": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
    }
  ];
};