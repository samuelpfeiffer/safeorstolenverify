import React from 'react';
import { Helmet } from 'react-helmet-async';
import { createOrganizationSchema, createServiceSchema, createWebsiteSchema } from '@/utils/seo/structuredData';

interface EnhancedSEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'service';
  additionalSchemas?: Array<Record<string, any>>;
}

export const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({
  title,
  description,
  keywords = "stolen goods verification, consumer protection, marketplace safety, fraud prevention, real-time verification, FasterCapital",
  canonical,
  image = "/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png",
  type = 'website',
  additionalSchemas = []
}) => {
  const baseUrl = window.location.origin;
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : window.location.href;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // Core schemas
  const schemas = [
    createOrganizationSchema(),
    createServiceSchema(),
    createWebsiteSchema(),
    ...additionalSchemas
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Safe or Stolen" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@safeorstolen" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Safe or Stolen Team" />
      <meta name="theme-color" content="#FF6B35" />
      
      {/* FasterCapital Specific */}
      <meta name="business-model" content="SaaS Consumer Protection Platform" />
      <meta name="market-size" content="$13 billion stolen goods crisis" />
      <meta name="target-audience" content="Online marketplace consumers and businesses" />
      <meta name="accelerator" content="FasterCapital" />
      
      {/* Schema.org Structured Data */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </Helmet>
  );
};