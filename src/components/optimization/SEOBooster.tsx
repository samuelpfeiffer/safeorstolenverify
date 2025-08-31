import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOBoosterProps {
  page?: 'home' | 'pricing' | 'about';
}

export const SEOBooster: React.FC<SEOBoosterProps> = ({ page = 'home' }) => {
  const getPageData = () => {
    switch (page) {
      case 'home':
        return {
          title: "Free Stolen Item Checker | Verify IMEI, VIN, Serial Numbers - SafeOrStolen",
          description: "Check if items are stolen before you buy! Free verification of IMEI, VIN, serial numbers against police databases. 99.9% accuracy, 3-second results. Start free.",
          keywords: "stolen goods checker, verify stolen items, IMEI checker, VIN checker, serial number verification, secondhand safety, fraud prevention, stolen phone check",
          canonical: "https://safeorstolen.com/",
          ogTitle: "SafeOrStolen - Don't Buy Stolen Goods | Free Verification Tool",
          ogDescription: "Instantly verify if items are stolen with 99.9% accuracy. Free checks available. Trusted by 10M+ users worldwide.",
        };
      case 'pricing':
        return {
          title: "Pricing Plans - SafeOrStolen Verification Service | From Free to Enterprise",
          description: "Choose the perfect plan: Free (4 checks/month), Smart Buyer ($7.99), Business Pro ($49.95). All plans include 99.9% accuracy and instant results.",
          keywords: "verification pricing, stolen goods checker cost, IMEI verification price, business verification plans",
          canonical: "https://safeorstolen.com/pricing",
          ogTitle: "SafeOrStolen Pricing - Free Stolen Item Checks & Premium Plans",
          ogDescription: "Start free with 4 verifications per month. Upgrade for unlimited checks and advanced features.",
        };
      default:
        return {
          title: "SafeOrStolen - Stolen Item Verification Platform",
          description: "Verify if items are stolen before buying secondhand goods. Check IMEI, VIN, serial numbers instantly.",
          keywords: "stolen goods, verification, safety",
          canonical: "https://safeorstolen.com/",
          ogTitle: "SafeOrStolen - Verification Platform",
          ogDescription: "Verify items before buying secondhand.",
        };
    }
  };

  const pageData = getPageData();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafeOrStolen",
    "alternateName": "Safe or Stolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "description": "Global leader in stolen item verification services",
    "foundingDate": "2023",
    "founders": [{
      "@type": "Person",
      "name": "SafeOrStolen Team"
    }],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-VERIFY",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://safeorstolen.com"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Verification Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Verification Service",
            "description": "4 free verifications per month"
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Buyer Plan",
            "description": "Unlimited verifications for regular buyers"
          },
          "price": "7.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Pro Plan", 
            "description": "Enterprise verification with API access"
          },
          "price": "49.95",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SafeOrStolen Verification Tool",
    "description": "Free online stolen item checker to verify IMEI, VIN, and serial numbers",
    "url": "https://safeorstolen.com",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript enabled",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "10847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "IMEI verification for smartphones and devices",
      "VIN checking for vehicles", 
      "Serial number verification for electronics",
      "Real-time database checking",
      "99.9% accuracy guarantee",
      "Instant 3-second results",
      "Global coverage in 150+ countries",
      "Free tier with 4 monthly checks",
      "Enterprise API integration",
      "White-label solutions"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does SafeOrStolen verify if items are stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen checks items against multiple databases including police records, insurance claims, and manufacturer blacklists using AI-powered verification technology with 99.9% accuracy."
        }
      },
      {
        "@type": "Question", 
        "name": "Is SafeOrStolen verification free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! SafeOrStolen offers 4 free verifications per month. For unlimited access, upgrade to Smart Buyer ($7.99/month) or Business Pro ($49.95/month) plans."
        }
      },
      {
        "@type": "Question",
        "name": "What types of items can I verify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can verify smartphones (IMEI), vehicles (VIN), electronics (serial numbers), gaming equipment, tools, jewelry, art, collectibles, and more using SafeOrStolen."
        }
      },
      {
        "@type": "Question",
        "name": "How fast are verification results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen provides instant results in under 3 seconds using our advanced AI verification system and real-time database access."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Enhanced SEO Meta Tags */}
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.description} />
      <meta name="keywords" content={pageData.keywords} />
      <link rel="canonical" href={pageData.canonical} />
      
      {/* Open Graph Enhanced */}
      <meta property="og:title" content={pageData.ogTitle} />
      <meta property="og:description" content={pageData.ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageData.canonical} />
      <meta property="og:site_name" content="SafeOrStolen" />
      <meta property="og:image" content="https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SafeOrStolen - Verify stolen items before buying" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageData.ogTitle} />
      <meta name="twitter:description" content={pageData.ogDescription} />
      <meta name="twitter:image" content="https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:creator" content="@safeorstolen" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content="SafeOrStolen" />
      <meta name="publisher" content="SafeOrStolen" />
      <meta name="copyright" content="SafeOrStolen" />
      <meta name="language" content="EN" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geographic Targeting */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Business Information */}
      <meta name="business.email" content="support@safeorstolen.com" />
      <meta name="business.phone" content="+1-555-VERIFY" />
      
      {/* Article/Content Meta */}
      <meta name="article:publisher" content="SafeOrStolen" />
      <meta name="article:author" content="SafeOrStolen Team" />
      
      {/* Mobile Optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Performance & Core Web Vitals */}
      <meta name="theme-color" content="#FF5722" />
      <meta name="msapplication-TileColor" content="#FF5722" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webAppSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style" />
      <link rel="preload" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" as="image" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//safeorstolen.com" />
      <link rel="dns-prefetch" href="//fastercapital.com" />
    </Helmet>
  );
};