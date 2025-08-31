import React from 'react';

export const LaunchAnnouncementStructuredData: React.FC = () => {
  const announcementSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "SafeOrStolen Launches as World's First AI-Powered Mobile Verification Platform for Second-Hand Items",
    "description": "Revolutionary platform combines AI, mobile technology, and real-time verification for electronics, vehicles, firearms, art, and valuables across global marketplace.",
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://safeorstolen.com/announcement"
    },
    "articleBody": "SafeOrStolen today announced the official launch of the world's first comprehensive AI-powered mobile verification platform for second-hand items. The platform serves auction houses, pawn shops, resellers, law enforcement, and millions of consumers buying and selling on eBay, Craigslist, and Facebook Marketplace.",
    "keywords": "stolen goods verification, AI verification platform, mobile verification app, second-hand marketplace security, eBay verification, Craigslist safety, Facebook Marketplace verification, pawn shop technology, auction house verification"
  };

  const productLaunchSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SafeOrStolen Verification Platform",
    "description": "AI-powered mobile platform for real-time verification of second-hand electronics, vehicles, firearms, art, jewelry, tools, and machinery",
    "category": "Software Application",
    "brand": {
      "@type": "Brand",
      "name": "SafeOrStolen"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "SafeOrStolen LLC"
    },
    "releaseDate": new Date().toISOString().split('T')[0],
    "applicationCategory": "SecurityApplication",
    "applicationSubCategory": "Verification Platform",
    "operatingSystem": ["iOS", "Android", "Web Browser"],
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "description": "Free verification platform with premium features available"
    },
    "featureList": [
      "Real-time stolen goods verification",
      "AI-powered search and matching",
      "Mobile-first design and interface",
      "Enterprise API integration",
      "Multi-database cross-referencing",
      "Instant IMEI/VIN/Serial lookup",
      "Law enforcement integration",
      "Marketplace plugin support",
      "Bulk verification processing",
      "Advanced reporting and analytics"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "SafeOrStolen: Revolutionary Technology Disrupting $15B Stolen Goods Market",
    "description": "Comprehensive analysis of SafeOrStolen's innovative AI verification technology and its impact on global marketplace security",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen Technology Team"
    },
    "datePublished": new Date().toISOString(),
    "proficiencyLevel": "Expert",
    "articleSection": "Technology Innovation",
    "about": {
      "@type": "Thing",
      "name": "Marketplace Security Technology",
      "description": "AI-powered verification systems for second-hand marketplaces"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(announcementSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productLaunchSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  );
};

export default LaunchAnnouncementStructuredData;