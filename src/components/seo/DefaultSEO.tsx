import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

// Default, site-wide SEO fallback to ensure every route is indexable with a proper canonical URL
export const DefaultSEO: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const canonical = `https://safeorstolen.com${path === '/' ? '/' : path}`;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Safe Or Stolen",
    "url": "https://safeorstolen.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://safeorstolen.com/dashboard?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe Or Stolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@safeorstolen.com"
    }
  };

  return (
    <Helmet>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:160" />
      <link rel="canonical" href={canonical} />
      <link rel="sitemap" type="application/xml" href="https://safeorstolen.com/sitemap.xml" />
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  );
};
