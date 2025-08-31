import React, { useEffect } from 'react';

export const GlobalSEOOptimization = () => {
  useEffect(() => {
    // International SEO optimization
    const internationalSEOTags = [
      // Core international targeting
      { name: 'geo.region', content: 'US-CA-GB-AU-DE-FR-ES-IT-JP-KR-CN-BR-MX-IN-RU-AR' },
      { name: 'geo.placename', content: 'Global' },
      { name: 'geo.position', content: 'Global' },
      { name: 'ICBM', content: 'Global Coverage' },
      
      // Language and region targeting
      { name: 'language', content: 'EN,ES,FR,DE,IT,PT,JA,KO,ZH,RU,AR' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'target', content: 'all' },
      
      // Search engine optimization
      { name: 'googlebot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' },
      { name: 'bingbot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' },
      { name: 'slurp', content: 'index,follow' },
      { name: 'duckduckbot', content: 'index,follow' },
      
      // Global marketplace targeting
      { name: 'category', content: 'Marketplace Safety,Consumer Protection,AI Verification,Mobile Technology' },
      { name: 'classification', content: 'Technology,Consumer Services,Security,Fraud Prevention' },
      { name: 'subject', content: 'Stolen Goods Verification,Marketplace Safety,Consumer Protection,AI Technology' },
      
      // Business and industry targeting
      { name: 'industry', content: 'Technology,Consumer Protection,Security,E-commerce,Mobile Applications' },
      { name: 'business-type', content: 'Technology Company,SaaS Platform,Mobile Application,Security Service' },
      
      // Content optimization
      { name: 'page-type', content: 'homepage,service,technology,mobile-app' },
      { name: 'content-type', content: 'verification-platform' },
      { name: 'audience', content: 'consumers,businesses,law-enforcement,auction-houses,pawn-shops,resellers' }
    ];

    // Inject international SEO meta tags
    internationalSEOTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Global hreflang implementation for maximum international reach
    const globalHreflangTags = [
      // English variants
      { hreflang: 'en', href: 'https://safeorstolen.com/' },
      { hreflang: 'en-US', href: 'https://safeorstolen.com/?region=us' },
      { hreflang: 'en-GB', href: 'https://safeorstolen.com/?region=gb' },
      { hreflang: 'en-AU', href: 'https://safeorstolen.com/?region=au' },
      { hreflang: 'en-CA', href: 'https://safeorstolen.com/?region=ca' },
      { hreflang: 'en-IN', href: 'https://safeorstolen.com/?region=in' },
      
      // Spanish variants
      { hreflang: 'es', href: 'https://safeorstolen.com/?lang=es' },
      { hreflang: 'es-ES', href: 'https://safeorstolen.com/?lang=es&region=es' },
      { hreflang: 'es-MX', href: 'https://safeorstolen.com/?lang=es&region=mx' },
      { hreflang: 'es-AR', href: 'https://safeorstolen.com/?lang=es&region=ar' },
      
      // Other major languages
      { hreflang: 'fr-FR', href: 'https://safeorstolen.com/?lang=fr&region=fr' },
      { hreflang: 'de-DE', href: 'https://safeorstolen.com/?lang=de&region=de' },
      { hreflang: 'it-IT', href: 'https://safeorstolen.com/?lang=it&region=it' },
      { hreflang: 'pt-BR', href: 'https://safeorstolen.com/?lang=pt&region=br' },
      { hreflang: 'ja-JP', href: 'https://safeorstolen.com/?lang=ja&region=jp' },
      { hreflang: 'ko-KR', href: 'https://safeorstolen.com/?lang=ko&region=kr' },
      { hreflang: 'zh-CN', href: 'https://safeorstolen.com/?lang=zh&region=cn' },
      { hreflang: 'zh-TW', href: 'https://safeorstolen.com/?lang=zh&region=tw' },
      { hreflang: 'ru-RU', href: 'https://safeorstolen.com/?lang=ru&region=ru' },
      { hreflang: 'ar-SA', href: 'https://safeorstolen.com/?lang=ar&region=sa' },
      
      // Default fallback
      { hreflang: 'x-default', href: 'https://safeorstolen.com/' }
    ];

    globalHreflangTags.forEach(tag => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = tag.hreflang;
      link.href = tag.href;
      document.head.appendChild(link);
    });

    // Advanced structured data for global recognition
    const globalOrganizationSchema = {
      "@context": "https://schema.org",
      "@type": "TechCompany",
      "@id": "https://safeorstolen.com/#organization",
      "name": "Safe or Stolen Corp.",
      "legalName": "Safe or Stolen Corporation",
      "alternateName": ["SafeOrStolen", "SOS Verification", "Safe Or Stolen"],
      "description": "Global leader in AI-powered verification technology for second-hand marketplaces, fighting the $13 billion stolen goods crisis worldwide.",
      "url": "https://safeorstolen.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
        "width": 800,
        "height": 600
      },
      "foundingDate": "2024",
      "slogan": "Verify Before You Buy - Fighting the $13B Stolen Goods Crisis",
      "keywords": "AI verification, stolen goods prevention, marketplace safety, mobile verification app, real-time verification, global verification platform",
      "industry": "Technology",
      "numberOfEmployees": "10-50",
      "areaServed": [
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Country", 
          "name": "Canada"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        },
        {
          "@type": "Country",
          "name": "Australia"
        },
        {
          "@type": "Country",
          "name": "Germany"
        },
        {
          "@type": "Country",
          "name": "France"
        },
        {
          "@type": "Country",
          "name": "Spain"
        },
        {
          "@type": "Country",
          "name": "Italy"
        },
        {
          "@type": "Country",
          "name": "Japan"  
        },
        {
          "@type": "Country",
          "name": "South Korea"
        },
        {
          "@type": "Country",
          "name": "Brazil"
        },
        {
          "@type": "Country",
          "name": "Mexico"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "0",
          "longitude": "0"
        },
        "geoRadius": "20037508"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-800-SOS-CHECK",
          "contactType": "customer service",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Japanese", "Korean", "Chinese", "Russian", "Arabic"]
        },
        {
          "@type": "ContactPoint",
          "email": "support@safeorstolen.com",
          "contactType": "customer support",
          "areaServed": "Worldwide"
        }
      ],
      "sameAs": [
        "https://twitter.com/safeorstolen",
        "https://linkedin.com/company/safeorstolen",
        "https://facebook.com/safeorstolen",
        "https://instagram.com/safeorstolen"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "AI Technology Certification",
          "description": "Advanced AI verification technology certification"
        }
      ],
      "award": [
        "Revolutionary Technology Platform 2024",
        "Global Marketplace Safety Innovation"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "Stolen Goods Prevention", 
        "Consumer Protection",
        "Marketplace Safety",
        "Mobile Technology",
        "Real-time Verification",
        "Database Management",
        "API Development",
        "Global Security"
      ]
    };

    const globalSchema = document.createElement('script');
    globalSchema.type = 'application/ld+json';
    globalSchema.id = 'global-seo-schema';
    globalSchema.textContent = JSON.stringify(globalOrganizationSchema);
    document.head.appendChild(globalSchema);

    return () => {
      // Cleanup function
      const metaElements = document.querySelectorAll('meta[name="geo.region"], meta[name="language"], meta[name="coverage"], meta[name="category"], meta[name="industry"], meta[name="business-type"], meta[name="audience"]');
      metaElements.forEach(el => el.remove());
      
      const hreflangElements = document.querySelectorAll('link[rel="alternate"][hreflang]');
      hreflangElements.forEach(el => el.remove());
      
      const schemaElement = document.getElementById('global-seo-schema');
      if (schemaElement) schemaElement.remove();
    };
  }, []);

  return null; // This is a pure SEO component with no UI
};
