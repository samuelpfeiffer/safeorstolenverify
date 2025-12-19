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
      "name": "SafeOrStolen - AI-Powered Stolen Item Checker",
      "description": "AI-powered mobile app for stolen goods verification. Uses machine learning fraud detection to protect buyers and sellers. Enables circular economy by building trust in the $367B secondhand market.",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": ["iOS", "Android", "Web Browser"],
      "featureList": [
        "AI-powered stolen item verification",
        "Machine learning fraud detection",
        "Predictive analytics for scam prevention",
        "Buyer and seller protection",
        "Financial loss prevention",
        "Legal issue prevention",
        "Circular economy enablement",
        "Instant mobile IMEI VIN checks",
        "Marketplace integration (Facebook, OfferUp, eBay)",
        "Point-of-sale verification"
      ],
      "url": "https://safeorstolen.com",
      "screenshot": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
      // AI Technology signals
      "usesAI": true,
      "aiTechnology": [
        "Machine Learning Fraud Detection",
        "Predictive Analytics",
        "Computer Vision for Serial Recognition",
        "Natural Language Processing"
      ],
      // Market positioning for investors
      "marketSize": "$367 billion global secondhand market by 2029",
      "growthRate": "10.7% annual growth",
      "keywords": [
        "AI stolen item verification",
        "machine learning fraud detection",
        "circular economy trust platform",
        "secondhand market infrastructure",
        "resale verification technology"
      ]
    }
  ];
};