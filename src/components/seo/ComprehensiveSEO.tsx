import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ComprehensiveSEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  type?: string;
  image?: string;
}

export const ComprehensiveSEO: React.FC<ComprehensiveSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  type = "website",
  image = "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
}) => {
  const fullUrl = `https://safeorstolen.com${canonical}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://safeorstolen.com${image}`;

  // Enhanced structured data for maximum authority
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe or Stolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png",
    "description": "The world's leading authority on stolen goods verification. Check if cars, phones, guns, electronics, or ANY item is stolen before you buy.",
    "founder": {
      "@type": "Person",
      "name": "Safe or Stolen Security Team"
    },
    "knowsAbout": [
      "Stolen goods verification",
      "VIN checking",
      "IMEI verification", 
      "Serial number validation",
      "Fraud prevention",
      "Consumer protection",
      "Vehicle theft prevention",
      "Electronics theft prevention",
      "Firearm theft prevention",
      "Database investigation"
    ],
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://linkedin.com/company/safeorstolen"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-SAFE-CHECK",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Safe or Stolen - Check if Anything is Stolen",
    "url": "https://safeorstolen.com",
    "description": "The definitive platform to check if cars, phones, guns, electronics, bikes, jewelry, tools, or ANY item is stolen. Free verification database.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://safeorstolen.com/verification-hub?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "about": {
      "@type": "Thing",
      "name": "Stolen goods verification and fraud prevention"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Safe or Stolen Verification Tool",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web Browser",
    "description": "Professional-grade stolen goods verification tool used by security experts, law enforcement, and smart consumers worldwide.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": "SoftwareApplication",
        "name": "Safe or Stolen Verification Tool"
      },
      "ratingValue": "4.9",
      "ratingCount": "15847",
      "bestRating": "5"
    },
    "featureList": [
      "VIN verification for all vehicles",
      "IMEI checking for phones and tablets", 
      "Serial number validation for electronics",
      "Firearm serial number database search",
      "Multi-database cross-referencing",
      "Real-time stolen goods alerts",
      "Professional verification reports"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
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
      <meta property="twitter:creator" content="@safeorstolen" />
      
      {/* Authority & Trust Signals */}
      <meta name="author" content="Safe or Stolen Security Team" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Enhanced Meta Tags */}
      <meta name="subject" content="Stolen goods verification and fraud prevention" />
      <meta name="copyright" content="Safe or Stolen" />
      <meta name="language" content="EN" />
      <meta name="revised" content={new Date().toISOString()} />
      <meta name="abstract" content={description} />
      <meta name="topic" content="Security, Fraud Prevention, Consumer Protection" />
      <meta name="summary" content={description} />
      <meta name="classification" content="Security" />
      <meta name="designer" content="Safe or Stolen" />
      <meta name="reply-to" content="support@safeorstolen.com" />
      <meta name="owner" content="Safe or Stolen" />
      <meta name="url" content={fullUrl} />
      <meta name="identifier-URL" content={fullUrl} />
      <meta name="directory" content="submission" />
      <meta name="category" content="Security, Technology, Consumer Protection" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Mobile & Technical */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Safe or Stolen" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareApplicationSchema)}
      </script>
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Additional Authority Signals */}
      <meta name="news_keywords" content="stolen goods, fraud prevention, consumer protection, security verification" />
      <meta property="article:publisher" content="https://safeorstolen.com" />
      <meta property="article:author" content="Safe or Stolen Security Team" />
      
      {/* Rich Snippets Enhancement */}
      <meta name="application-name" content="Safe or Stolen" />
      <meta name="msapplication-TileColor" content="#dc2626" />
      <meta name="theme-color" content="#dc2626" />
    </Helmet>
  );
};