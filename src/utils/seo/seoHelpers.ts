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
    title: 'Verify Stolen Goods Instantly - IMEI, VIN & Serial Check',
    description: 'Instantly check if phones, cars, electronics are stolen before buying. Enter IMEI, VIN or serial number to verify with our global theft database - $2.3M in scams prevented.',
    keywords: 'verify stolen goods, IMEI check stolen phone, VIN stolen car lookup, serial number verification, stolen item checker, marketplace safety, fraud prevention',
    type: 'website'
  },
  about: {
    title: 'About SafeOrStolen - $13B Stolen Goods Crisis Solution',  
    description: 'Our mission: make secondhand buying safer with instant IMEI, VIN & serial checks. Fighting the $13 billion stolen goods crisis with real-time verification.',
    keywords: 'about safeorstolen, stolen goods prevention, theft database, verification service mission, marketplace safety',
    type: 'website'
  },
  pricing: {
    title: 'Pricing - Free IMEI & VIN Checks, Premium Business Plans',
    description: 'Free basic stolen goods verification. Premium plans for businesses: bulk checks, API access, priority support. No hidden fees, cancel anytime.',
    keywords: 'free IMEI check, VIN verification pricing, stolen goods API pricing, business verification plans',
    type: 'service'
  },
  contact: {
    title: 'Contact SafeOrStolen Support - Verification Help Available',
    description: 'Need help with stolen goods verification? Contact our expert support team for IMEI, VIN, serial number checks and marketplace safety guidance.',
    keywords: 'contact support, verification help, IMEI support, VIN check help, stolen goods assistance',
    type: 'website'
  },
  faq: {
    title: 'FAQ - How to Check if Items are Stolen Before Buying',
    description: 'Get answers: How to verify IMEI numbers, check VIN for stolen cars, serial number verification, and avoid buying stolen goods from marketplaces.',
    keywords: 'how to check if stolen, IMEI verification FAQ, VIN check questions, serial number help, marketplace safety FAQ',
    type: 'website'
  },
  'how-it-works': {
    title: 'How Stolen Goods Verification Works - 30 Second Process',
    description: 'Learn how our stolen item verification works: 1) Enter IMEI/VIN/Serial 2) Real-time database check 3) Instant results. Protect yourself in 30 seconds.',
    keywords: 'how verification works, stolen goods check process, IMEI verification steps, VIN check process, serial number lookup',
    type: 'website'
  },
  'check-phone': {
    title: 'Check if Phone is Stolen - Free IMEI Verification Tool',
    description: 'Verify phone IMEI numbers against stolen device databases. Check if iPhone, Android, or any mobile device is reported stolen before buying.',
    keywords: 'check phone stolen, IMEI verification, stolen phone check, verify iPhone IMEI, Android stolen check',
    type: 'website'
  },
  'check-car': {
    title: 'Check if Car is Stolen - Free VIN Verification Lookup', 
    description: 'Verify vehicle VIN numbers against stolen car databases. Check if cars, trucks, motorcycles are reported stolen before purchasing.',
    keywords: 'check car stolen, VIN verification, stolen vehicle check, verify car VIN, stolen car lookup',
    type: 'website'
  },
  'check-electronics': {
    title: 'Check Electronics - Serial Number Stolen Verification',
    description: 'Verify electronics serial numbers: laptops, tablets, gaming consoles, cameras. Check if devices are stolen before buying from marketplaces.',
    keywords: 'check electronics stolen, serial number verification, laptop stolen check, gaming console verification',
    type: 'website'
  },
  'imei-check': {
    title: 'IMEI Check - Verify Phone Not Stolen in 30 Seconds',
    description: 'Free IMEI checker tool. Enter phone IMEI to verify against stolen device databases. Check iPhone, Samsung, Android IMEI - protect yourself from stolen phones.',
    keywords: 'IMEI check, IMEI checker, verify IMEI, phone IMEI lookup, stolen phone IMEI, IMEI database',
    type: 'website'
  },
  'vin-verification': {
    title: 'VIN Check - Verify Car Not Stolen Before Buying',
    description: 'Free VIN verification tool. Check vehicle identification numbers against stolen car databases. Verify cars, trucks, motorcycles before purchase.',
    keywords: 'VIN check, VIN verification, car VIN lookup, stolen car VIN, vehicle identification check',
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