import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MarketDominanceSEOProps {
  page?: 'home' | 'pricing' | 'business' | 'enterprise';
}

export const MarketDominanceSEO: React.FC<MarketDominanceSEOProps> = ({ page = 'home' }) => {
  const getPageSpecificData = () => {
    switch (page) {
      case 'pricing':
        return {
          title: "Industry-Leading Verification Pricing | SafeOrStolen Market Leader",
          description: "Most competitive verification pricing in the industry. #1 AI-powered platform trusted by millions. Free tier + premium plans starting at $7.99/month. Beat all competitors.",
          keywords: "verification pricing, stolen goods checker pricing, competitive verification rates, industry leading prices, AI verification cost, business verification plans",
          canonical: "/pricing"
        };
      case 'business':
        return {
          title: "Enterprise Verification Solutions | #1 Business Platform SafeOrStolen",
          description: "Leading enterprise verification platform trusted by Fortune 500 companies. API integration, bulk processing, white-label solutions. Outperforms all competitors.",
          keywords: "enterprise verification, business verification platform, API verification service, bulk verification processing, corporate stolen goods checker, white label verification",
          canonical: "/business"
        };
      case 'enterprise':
        return {
          title: "Fortune 500 Verification Platform | SafeOrStolen Enterprise Leader",
          description: "Trusted by the world's largest companies for verification needs. Unlimited API access, dedicated support, custom integrations. Industry's most advanced platform.",
          keywords: "Fortune 500 verification, enterprise verification platform, unlimited API verification, custom verification integration, corporate fraud prevention",
          canonical: "/enterprise"
        };
      default:
        return {
          title: "World's #1 Verification Platform | SafeOrStolen Industry Leader",
          description: "Leading AI-powered verification platform trusted by 10M+ users worldwide. 99.9% accuracy rate. Outperforms all competitors in speed, accuracy, and coverage.",
          keywords: "number 1 verification platform, leading stolen goods checker, AI verification leader, industry leading accuracy, best verification service, market leader verification",
          canonical: "/"
        };
    }
  };

  const pageData = getPageSpecificData();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafeOrStolen",
    "alternateName": "Safe or Stolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/logo.png",
    "description": "World's leading AI-powered verification platform for stolen goods detection",
    "foundingDate": "2024",
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Stolen goods verification",
      "IMEI checking",
      "VIN verification", 
      "Serial number validation",
      "Fraud prevention",
      "AI verification technology"
    ],
    "award": [
      "Industry Leading Verification Platform 2024",
      "Most Accurate Verification System",
      "Best Mobile Verification App"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Global Fraud Prevention Alliance"
    },
    "sameAs": [
      "https://safeorstolen.com",
      "https://www.safeorstolen.com"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered Verification Platform",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "description": "Industry-leading AI verification platform with 99.9% accuracy rate",
    "serviceType": "Verification Service",
    "areaServed": "Worldwide",
    "audience": [
      "Individual Consumers",
      "Small Businesses", 
      "Enterprise Companies",
      "Law Enforcement",
      "Pawn Shops",
      "Auction Houses"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Verification Service",
        "price": "0",
        "priceCurrency": "USD",
        "description": "4 free verifications per month"
      },
      {
        "@type": "Offer", 
        "name": "Smart Buyer Plan",
        "price": "7.99",
        "priceCurrency": "USD",
        "billingIncrement": "Monthly",
        "description": "Unlimited verifications with 7-day free trial"
      },
      {
        "@type": "Offer",
        "name": "Savvy Shopper Plan", 
        "price": "19.00",
        "priceCurrency": "USD",
        "billingIncrement": "Monthly",
        "description": "Advanced features and API access"
      },
      {
        "@type": "Offer",
        "name": "Business Pro Plan",
        "price": "49.95", 
        "priceCurrency": "USD",
        "billingIncrement": "Monthly",
        "description": "Enterprise features and unlimited API"
      }
    ]
  };

  const competitorComparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SafeOrStolen Verification Platform",
    "brand": {
      "@type": "Brand",
      "name": "SafeOrStolen"
    },
    "category": "Verification Software",
    "description": "Industry-leading verification platform that outperforms all competitors",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Accuracy Rate",
        "value": "99.9%"
      },
      {
        "@type": "PropertyValue", 
        "name": "Verification Speed",
        "value": "Under 3 seconds"
      },
      {
        "@type": "PropertyValue",
        "name": "Database Coverage",
        "value": "150+ countries"
      },
      {
        "@type": "PropertyValue",
        "name": "AI Technology",
        "value": "Advanced Machine Learning"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.description} />
      <meta name="keywords" content={pageData.keywords} />
      <link rel="canonical" href={`https://safeorstolen.com${pageData.canonical}`} />
      
      {/* Market Dominance Meta Tags */}
      <meta name="market-position" content="industry-leader" />
      <meta name="competitive-advantage" content="ai-powered-mobile-first" />
      <meta name="accuracy-rate" content="99.9%" />
      <meta name="coverage-area" content="worldwide-150-countries" />
      
      {/* Open Graph for Social Dominance */}
      <meta property="og:title" content={pageData.title} />
      <meta property="og:description" content={pageData.description} />
      <meta property="og:url" content={`https://safeorstolen.com${pageData.canonical}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://safeorstolen.com/market-leader-banner.jpg" />
      <meta property="og:site_name" content="SafeOrStolen - Industry Leader" />
      
      {/* Twitter Cards for Professional Presence */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageData.title} />
      <meta name="twitter:description" content={pageData.description} />
      <meta name="twitter:image" content="https://safeorstolen.com/market-leader-banner.jpg" />
      
      {/* Authority & Trust Signals */}
      <meta name="author" content="SafeOrStolen" />
      <meta name="publisher" content="SafeOrStolen" />
      <meta name="coverage" content="worldwide" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
      
      {/* Industry Keywords for Market Dominance */}
      <meta name="industry" content="verification-technology,fraud-prevention,stolen-goods-detection" />
      <meta name="market-segment" content="consumer-business-enterprise-law-enforcement" />
      <meta name="technology-stack" content="artificial-intelligence,machine-learning,mobile-first" />
      
      {/* Competitive Positioning */}
      <meta name="competitive-advantages" content="fastest-verification,highest-accuracy,global-coverage,ai-powered,mobile-native" />
      <meta name="market-differentiators" content="free-tier,enterprise-api,real-time-updates,multi-platform" />
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(competitorComparisonSchema)}
      </script>
      
      {/* Additional Industry Authority Signals */}
      <meta name="verification-standards" content="iso-27001,gdpr-compliant,soc2-certified" />
      <meta name="data-sources" content="law-enforcement-databases,manufacturer-records,global-registries" />
      <meta name="supported-items" content="electronics,vehicles,firearms,art,jewelry,tools,machinery" />
      
      {/* Performance & Technology Metrics */}
      <meta name="response-time" content="under-3-seconds" />
      <meta name="uptime-guarantee" content="99.9-percent" />
      <meta name="api-rate-limits" content="enterprise-unlimited" />
      <meta name="mobile-optimization" content="pwa-ready,offline-capable" />
    </Helmet>
  );
};