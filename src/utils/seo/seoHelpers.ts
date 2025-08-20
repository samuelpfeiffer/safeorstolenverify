/**
 * SEO Helper utilities for consistent optimization across all pages
 */

export interface PageSEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  noIndex?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  structuredData?: Record<string, any>[];
}

/**
 * Generate SEO-optimized title with brand consistency
 */
export const generateSEOTitle = (pageTitle: string, includeBrand = true): string => {
  const brand = 'Safe or Stolen';
  const maxLength = 60;
  
  if (!includeBrand) return pageTitle.slice(0, maxLength);
  
  const fullTitle = `${pageTitle} | ${brand}`;
  return fullTitle.length > maxLength 
    ? `${pageTitle.slice(0, maxLength - brand.length - 3)} | ${brand}` 
    : fullTitle;
};

/**
 * Generate SEO-optimized description
 */
export const generateSEODescription = (description: string): string => {
  const maxLength = 160;
  return description.length > maxLength 
    ? `${description.slice(0, maxLength - 3)}...` 
    : description;
};

/**
 * Predefined SEO configurations for common page types
 */
export const pageSEOConfigs: Record<string, Partial<PageSEOConfig>> = {
  home: {
    title: 'Check if IMEI, Serial Numbers & VIN are Stolen | Free Verification Tool',
    description: 'Instantly verify if phones (IMEI), cars (VIN), bikes, electronics are stolen before buying. Free stolen goods checker. Protect yourself from marketplace fraud.',
    keywords: 'check if stolen, IMEI check stolen, VIN stolen lookup, serial number verification, stolen goods check, verify before you buy, marketplace safety, fraud prevention',
    type: 'website'
  },
  about: {
    title: 'About Safe Or Stolen | Verify Before You Buy',
    description: 'Learn our mission to make secondhand buying safer with instant IMEI, serial and VIN checks. Fighting the $13 billion stolen goods crisis.',
    keywords: 'about safe or stolen, company mission, verify before you buy, stolen goods prevention',
    type: 'website'
  },
  pricing: {
    title: 'Pricing Plans | Safe Or Stolen Verification Service',
    description: 'Choose the right verification plan for your needs. Free basic checks, premium features for businesses. Transparent pricing, no hidden fees.',
    keywords: 'pricing plans, verification service cost, IMEI check pricing, stolen goods verification plans',
    type: 'service'
  },
  contact: {
    title: 'Contact Us | Safe Or Stolen Support',
    description: 'Get help with stolen goods verification. Contact our support team for assistance with IMEI, VIN, and serial number checks.',
    keywords: 'contact support, help, customer service, verification assistance',
    type: 'website'
  },
  faq: {
    title: 'FAQ | Frequently Asked Questions About Stolen Goods Verification',
    description: 'Get answers to common questions about checking if items are stolen, IMEI verification, VIN checks, and marketplace safety.',
    keywords: 'FAQ, frequently asked questions, how to check if stolen, IMEI help, VIN verification help',
    type: 'website'
  },
  'how-it-works': {
    title: 'How It Works | Safe Or Stolen Verification Process',
    description: 'Learn how our stolen goods verification works. Simple 3-step process to check IMEI, serial numbers, and VIN before buying.',
    keywords: 'how it works, verification process, check stolen goods, IMEI verification process, VIN check process',
    type: 'website'
  }
};

/**
 * Generate structured data for different page types
 */
export const generatePageStructuredData = (pageType: string, customData?: Record<string, any>): Record<string, any>[] => {
  const baseUrl = 'https://safeorstolen.com';
  
  const commonSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "Safe Or Stolen",
      "url": baseUrl,
      "logo": `${baseUrl}/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png`,
      "description": "Global verification service for IMEI, serial numbers, and VIN to check if items are stolen"
    }
  ];

  switch (pageType) {
    case 'home':
      return [
        ...commonSchemas,
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Safe Or Stolen",
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }
      ];
    
    case 'service':
      return [
        ...commonSchemas,
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Stolen Goods Verification",
          "provider": { "@id": `${baseUrl}/#organization` },
          "areaServed": "Worldwide",
          "description": "Real-time verification service to check if items are stolen"
        }
      ];
    
    case 'faq':
      return [
        ...commonSchemas,
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I check if something is stolen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Enter the item's IMEI, serial number, or VIN into our verification system to check against stolen goods databases."
              }
            }
          ]
        }
      ];
    
    default:
      return commonSchemas;
  }
};

/**
 * Generate breadcrumb data for SEO
 */
export const generateBreadcrumbs = (path: string): Array<{ name: string; url: string }> => {
  const pathSegments = path.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', url: '/' }];
  
  let currentPath = '';
  for (const segment of pathSegments) {
    currentPath += `/${segment}`;
    const name = segment.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    breadcrumbs.push({ name, url: currentPath });
  }
  
  return breadcrumbs;
};

/**
 * Google-specific SEO optimizations
 */
export const googleSEOSettings = {
  maxTitleLength: 60,
  maxDescriptionLength: 160,
  optimalKeywordCount: 5,
  requiredMetaTags: [
    'title',
    'description', 
    'canonical',
    'og:title',
    'og:description',
    'og:image',
    'twitter:card',
    'robots'
  ]
};

/**
 * Validate SEO configuration for Google compliance
 */
export const validateSEOConfig = (config: PageSEOConfig): { valid: boolean; issues: string[] } => {
  const issues: string[] = [];
  
  if (!config.title) {
    issues.push('Missing title');
  } else if (config.title.length > googleSEOSettings.maxTitleLength) {
    issues.push(`Title too long (${config.title.length}/${googleSEOSettings.maxTitleLength})`);
  }
  
  if (!config.description) {
    issues.push('Missing description');
  } else if (config.description.length > googleSEOSettings.maxDescriptionLength) {
    issues.push(`Description too long (${config.description.length}/${googleSEOSettings.maxDescriptionLength})`);
  }
  
  return {
    valid: issues.length === 0,
    issues
  };
};