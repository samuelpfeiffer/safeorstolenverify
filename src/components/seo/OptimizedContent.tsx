import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OptimizedContentProps {
  pageType: 'homepage' | 'verification' | 'guide' | 'business' | 'about' | 'contact';
  customTitle?: string;
  customDescription?: string;
  keywords?: string[];
  includeBusinessSchema?: boolean;
}

export const OptimizedContent: React.FC<OptimizedContentProps> = ({
  pageType,
  customTitle,
  customDescription,
  keywords = [],
  includeBusinessSchema = true
}) => {
  
  const getOptimizedContent = (type: string) => {
    const contentMap = {
      homepage: {
        title: "Verify Stolen Goods Instantly - $2.3M in Scams Prevented | SafeOrStolen",
        description: "Check if phone, car or device is stolen in 30 seconds. Enter IMEI, VIN, or serial number to verify with SafeOrStolen's global theft database. Shop with confidence.",
        keywords: ["verify stolen goods", "IMEI check stolen", "VIN verification", "stolen phone checker", "marketplace safety", "prevent scam buying"],
        h1: "Verify Before You Buy - Protect Against $2.3M in Prevented Scams",
        schema: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "SafeOrStolen",
          "url": "https://safeor.stolen",
          "description": "Global platform for verifying stolen goods and preventing marketplace fraud",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://safeor.stolen/stolen-item-checker?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "sameAs": [
            "https://twitter.com/safeorstolen",
            "https://facebook.com/safeorstolen"
          ]
        }
      },
      verification: {
        title: "Free IMEI & VIN Verification - Check if Device is Stolen | SafeOrStolen",
        description: "Instantly verify IMEI, VIN, or serial numbers in our comprehensive database. Free stolen goods checker protects buyers and sellers from fraud.",
        keywords: ["IMEI verification free", "VIN check stolen", "serial number lookup", "device verification", "stolen goods database"],
        h1: "Free IMEI & VIN Verification - Instant Stolen Goods Check",
        schema: {
          "@context": "https://schema.org", 
          "@type": "Service",
          "name": "Stolen Device Verification",
          "description": "Comprehensive verification service for IMEI, VIN, and serial numbers",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "Audience",
            "audienceType": "Consumers and Businesses"
          }
        }
      },
      guide: {
        title: "How to Check if Phone is Stolen - Complete IMEI Verification Guide 2025",
        description: "Step-by-step guide to verify IMEI numbers and avoid buying stolen phones. Learn red flags, verification methods, and legal protection tips.",
        keywords: ["how to check stolen phone", "IMEI verification guide", "avoid buying stolen device", "phone verification steps"],
        h1: "Complete Guide: How to Check if a Phone is Stolen in 2025",
        schema: {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Check if a Phone is Stolen",
          "description": "Complete guide for verifying phone legitimacy before purchase",
          "image": "https://safeor.stolen/images/phone-verification-guide.jpg",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Find IMEI Number",
              "text": "Dial *#06# or check device settings to find the IMEI number"
            },
            {
              "@type": "HowToStep", 
              "name": "Verify IMEI",
              "text": "Enter IMEI into SafeOrStolen's verification database"
            },
            {
              "@type": "HowToStep",
              "name": "Check Results",
              "text": "Review verification status and fraud indicators"
            }
          ]
        }
      },
      business: {
        title: "Enterprise Verification API - Marketplace Protection for Brands | SafeOrStolen",
        description: "Integrate stolen goods verification into your marketplace. API access, bulk verification, and real-time fraud protection for e-commerce platforms.",
        keywords: ["marketplace verification API", "enterprise fraud protection", "bulk IMEI verification", "business verification service"],
        h1: "Enterprise Verification Solutions - Protect Your Marketplace from $2.3M in Fraud",
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Enterprise Verification API",
          "description": "Professional verification service for marketplaces and businesses",
          "serviceType": "API Integration Service",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "areaServed": "Worldwide"
        }
      },
      about: {
        title: "About SafeOrStolen - Leaders in Marketplace Safety & Fraud Prevention",
        description: "SafeOrStolen protects consumers and businesses from stolen goods fraud. Learn about our mission, technology, and $2.3M in prevented scams.",
        keywords: ["SafeOrStolen company", "marketplace safety leader", "fraud prevention technology", "stolen goods database"],
        h1: "Protecting Buyers & Sellers - $2.3M in Scams Prevented and Growing",
        schema: {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "SafeOrStolen",
            "description": "Global leader in marketplace fraud prevention and stolen goods verification"
          }
        }
      },
      contact: {
        title: "Contact SafeOrStolen - Get Help with Verification & Fraud Reports",
        description: "Contact SafeOrStolen for verification support, fraud reports, or enterprise inquiries. Expert help for marketplace safety questions.",
        keywords: ["SafeOrStolen contact", "fraud report help", "verification support", "stolen goods assistance"],
        h1: "Get Expert Help - Contact Our Marketplace Safety Team",
        schema: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          }
        }
      }
    };
    
    return contentMap[type as keyof typeof contentMap] || contentMap.homepage;
  };

  const content = getOptimizedContent(pageType);
  const finalTitle = customTitle || content.title;
  const finalDescription = customDescription || content.description;
  const finalKeywords = [...content.keywords, ...keywords].join(', ');

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafeOrStolen",
    "url": "https://safeor.stolen",
    "logo": "https://safeor.stolen/logo.png",
    "description": "Global platform for verifying stolen goods and preventing marketplace fraud",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-SAFE-CHECK",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://facebook.com/safeorstolen",
      "https://linkedin.com/company/safeorstolen"
    ]
  };

  return (
    <Helmet>
      {/* Essential SEO Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Advanced SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="author" content="SafeOrStolen Team" />
      <meta name="copyright" content="© 2025 SafeOrStolen. All rights reserved." />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      <meta property="og:image" content="https://safeor.stolen/images/og-image.jpg" />
      <meta property="og:image:alt" content="SafeOrStolen - Verify stolen goods and protect your purchases" />
      <meta property="og:site_name" content="SafeOrStolen" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content="https://safeor.stolen/images/twitter-image.jpg" />
      <meta name="twitter:image:alt" content="SafeOrStolen verification platform" />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:creator" content="@safeorstolen" />
      
      {/* Mobile and PWA */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#1a365d" />
      <meta name="msapplication-navbutton-color" content="#1a365d" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(content.schema)}
      </script>
      
      {/* Business Schema (if enabled) */}
      {includeBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      )}
      
      {/* Enhanced Analytics Configuration */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": finalTitle,
          "description": finalDescription,
          "url": typeof window !== 'undefined' ? window.location.href : '',
          "mainEntity": content.schema,
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://safeor.stolen"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};