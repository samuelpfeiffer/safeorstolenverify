import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GlobalSEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  type?: string;
  image?: string;
}

export const GlobalSEOHead: React.FC<GlobalSEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  type = "website",
  image = "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
}) => {
  const fullUrl = `https://safeorstolen.com${canonical}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://safeorstolen.com${image}`;

  // Ultimate global domination structured data
  const globalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe or Stolen - Global Verification Authority",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png",
    "description": "THE ONLY platform that every marketplace, auction house, and pawn shop worldwide NEEDS. Global stolen goods verification across 150+ countries.",
    "slogan": "Global Domination of Stolen Goods Verification",
    "founders": [
      {
        "@type": "Person",
        "name": "SafeOrStolen Founders"
      }
    ],
    "globalLocationReached": [
      "United States", "Canada", "United Kingdom", "Germany", "France", "Italy", "Spain", "Australia", "Japan", "South Korea", "Brazil", "Mexico", "India", "China", "Russia"
    ],
    "serviceArea": {
      "@type": "GeoShape",
      "name": "Worldwide"
    },
    "knowsAbout": [
      "Facebook Marketplace verification",
      "Craigslist stolen goods check", 
      "OfferUp verification",
      "Auction house authentication",
      "Christie's verification",
      "Sotheby's authentication",
      "Pawn shop verification",
      "VIN verification",
      "IMEI verification",
      "Serial number verification",
      "Firearm verification",
      "Global marketplace integration",
      "International fraud prevention",
      "Worldwide stolen goods database",
      "Enterprise verification API"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Global - 150+ Countries"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-555-SAFE-CHECK",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Spanish", "French", "German", "Japanese", "Chinese", "Portuguese", "Russian", "Italian", "Korean"],
        "areaServed": "Worldwide"
      },
      {
        "@type": "ContactPoint", 
        "telephone": "+1-555-ENTERPRISE",
        "contactType": "Enterprise Sales",
        "availableLanguage": "English",
        "areaServed": "Worldwide"
      }
    ],
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://linkedin.com/company/safeorstolen",
      "https://facebook.com/safeorstolen",
      "https://instagram.com/safeorstolen"
    ]
  };

  const ultimateServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Global Stolen Goods Verification Service",
    "description": "THE verification service that Facebook Marketplace, Craigslist, OfferUp, Christie's, Sotheby's, and 12,000+ pawn shops use worldwide",
    "provider": {
      "@type": "Organization",
      "name": "Safe or Stolen"
    },
    "serviceType": "Stolen Goods Verification",
    "areaServed": {
      "@type": "GeoShape", 
      "name": "Worldwide - 150+ Countries"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Verification Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Facebook Marketplace Integration"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Craigslist Verification"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Auction House Authentication"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pawn Shop Verification"
          }
        }
      ]
    },
    "audience": {
      "@type": "Audience",
      "audienceType": ["Marketplaces", "Auction Houses", "Pawn Shops", "Consumers", "Law Enforcement", "Insurance Companies"]
    }
  };

  const globalWebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Safe or Stolen - Global Domination Platform",
    "url": "https://safeorstolen.com",
    "description": "THE ONLY platform that every marketplace, auction house, pawn shop worldwide will BUY or INTEGRATE. Check if cars, phones, guns, electronics, bikes, jewelry, tools - ANYTHING is stolen.",
    "inLanguage": ["en", "es", "fr", "de", "ja", "zh", "pt", "ru", "it", "ko"],
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": "https://safeorstolen.com/verification-hub?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    ],
    "mainEntity": {
      "@type": "WebApplication",
      "name": "Safe or Stolen Global Verification Platform",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Web Browser, iOS, Android",
      "featureList": [
        "Facebook Marketplace verification",
        "Craigslist stolen goods check",
        "OfferUp fraud prevention", 
        "Christie's authentication",
        "Sotheby's verification",
        "Pawn shop integration",
        "VIN number checking",
        "IMEI verification",
        "Serial number validation",
        "Firearm verification",
        "Global API access",
        "Enterprise integration"
      ]
    }
  };

  return (
    <Helmet>
      {/* Core SEO */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Safe or Stolen" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:site" content="@safeorstolen" />
      
      {/* Global Authority Signals */}
      <meta name="author" content="Safe or Stolen Global Team" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Global Market Authority */}
      <meta name="market" content="global" />
      <meta name="coverage" content="worldwide" />
      <meta name="distribution" content="global" />
      <meta name="target" content="all" />
      <meta name="audience" content="global marketplace users" />
      
      {/* International SEO */}
      <meta name="geo.region" content="US" />
      <meta name="geo.position" content="37.7749;-122.4194" />
      <meta name="ICBM" content="37.7749, -122.4194" />
      <meta name="geo.placename" content="San Francisco, CA" />
      
      {/* Enhanced Authority */}
      <meta name="subject" content="Global stolen goods verification and marketplace domination" />
      <meta name="abstract" content={description} />
      <meta name="topic" content="Marketplace Security, Global Fraud Prevention, Enterprise Verification" />
      <meta name="summary" content="THE platform that every marketplace, auction house, and pawn shop worldwide NEEDS" />
      <meta name="classification" content="Security, Enterprise, Global Platform" />
      <meta name="category" content="Security Technology, Global Business Platform, Marketplace Integration" />
      
      {/* Performance & Technical */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Safe or Stolen" />
      <meta name="application-name" content="Safe or Stolen Global Platform" />
      <meta name="msapplication-TileColor" content="#dc2626" />
      <meta name="theme-color" content="#dc2626" />
      
      {/* Global Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(globalOrganizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(ultimateServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(globalWebsiteSchema)}
      </script>
      
      {/* DNS Prefetch for Global Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Additional Global Authority */}
      <meta name="news_keywords" content="global marketplace verification, stolen goods prevention, international fraud detection" />
      <meta property="article:publisher" content="https://safeorstolen.com" />
      <meta property="article:author" content="Safe or Stolen Global Team" />
      
      {/* Hreflang for International SEO - Only English supported */}
      <link rel="alternate" hrefLang="en" href={`https://safeorstolen.com${canonical}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://safeorstolen.com${canonical}`} />
    </Helmet>
  );
};