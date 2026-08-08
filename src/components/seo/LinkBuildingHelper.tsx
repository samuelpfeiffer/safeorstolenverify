import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LinkBuildingHelperProps {
  pageTitle: string;
  pageUrl: string;
  contentType?: 'guide' | 'tool' | 'resource' | 'news';
}

export const LinkBuildingHelper: React.FC<LinkBuildingHelperProps> = ({
  pageTitle,
  pageUrl,
  contentType = 'resource'
}) => {
  // High-value linkable content signals
  const getLinkableContentSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "url": pageUrl,
      "name": pageTitle,
      "publisher": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "url": "https://safeorstolen.com"
      },
      "isAccessibleForFree": true,
      "audience": {
        "@type": "Audience",
        "audienceType": "general public"
      }
    };

    switch (contentType) {
      case 'guide':
        return {
          ...baseSchema,
          "@type": "HowTo",
          "description": "Comprehensive guide for verifying if items are stolen",
          "totalTime": "PT5M",
          "supply": [
            "Item serial number",
            "IMEI or VIN number",
            "Purchase documentation"
          ],
          "tool": "SafeOrStolen Verification System",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Enter Item Details",
              "text": "Input the serial number, IMEI, or VIN"
            },
            {
              "@type": "HowToStep", 
              "name": "Database Check",
              "text": "System checks multiple law enforcement databases"
            },
            {
              "@type": "HowToStep",
              "name": "Get Results",
              "text": "Receive instant verification results"
            }
          ]
        };

      case 'tool':
        return {
          ...baseSchema,
          "@type": "SoftwareApplication",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://safeorstolen.com/pricing"
          },
          "featureList": [
            "IMEI Verification",
            "VIN Checking", 
            "Serial Number Lookup",
            "Real-time Results"
          ]
        };

      case 'news':
        return {
          ...baseSchema,
          "@type": "NewsArticle",
          "datePublished": new Date().toISOString(),
          "headline": pageTitle,
          "articleSection": "Security News",
          "keywords": "stolen goods, fraud prevention, consumer protection"
        };

      default:
        return {
          ...baseSchema,
          "@type": "WebPage",
          "about": {
            "@type": "Thing",
            "name": "Stolen Item Verification"
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Item Verification Service"
          }
        };
    }
  };

  const linkableSchema = getLinkableContentSchema();

  // Social sharing optimization for link building
  const socialMeta = {
    title: pageTitle,
    description: "Free tool to check if items are stolen - Protect yourself from buying stolen goods",
    image: "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    url: pageUrl
  };

  return (
    <Helmet>
      {/* Enhanced Open Graph for social sharing */}
      <meta property="og:title" content={socialMeta.title} />
      <meta property="og:description" content={socialMeta.description} />
      <meta property="og:image" content={socialMeta.image} />
      <meta property="og:url" content={socialMeta.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SafeOrStolen" />
      
      {/* Twitter Card optimization */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialMeta.title} />
      <meta name="twitter:description" content={socialMeta.description} />
      <meta name="twitter:image" content={socialMeta.image} />
      <meta name="twitter:site" content="@safeorstolen" />
      
      
      {/* Linkable content signals */}
      <meta name="content-type" content={contentType} />
      <meta name="link-worthy" content="true" />
      <meta name="shareable" content="true" />
      <meta name="reference-quality" content="high" />
      
      {/* Citation and reference signals */}
      <meta name="citation-ready" content="true" />
      <meta name="academic-reference" content="suitable" />
      <meta name="professional-resource" content="true" />
      
      {/* Content value indicators */}
      <meta name="content-value" content="high" />
      <meta name="resource-type" content="evergreen" />
      <meta name="link-attraction" content="optimized" />
      
      {/* Industry authority signals */}
      <meta name="industry-standard" content="true" />
      <meta name="best-practice" content="included" />
      <meta name="expert-created" content="true" />
      
      <script type="application/ld+json">
        {JSON.stringify(linkableSchema)}
      </script>
    </Helmet>
  );
};