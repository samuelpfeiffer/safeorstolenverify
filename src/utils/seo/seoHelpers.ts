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
  const brand = 'SafeOrStolen';
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
  },
  'stolen-item-checker': {
    title: 'Stolen Item Checker - Free IMEI, VIN & Serial Number Lookup',
    description: 'Check if any item is stolen instantly. Free verification for phones (IMEI), vehicles (VIN), electronics, bikes, and more. Protect yourself from stolen goods.',
    keywords: 'stolen item checker, check stolen items, stolen goods verification, stolen item lookup, stolen database check, verify stolen goods',
    type: 'website'
  },
  'stolen-vehicle-database': {
    title: 'Stolen Vehicle Database - Check Cars, Motorcycles & More',
    description: 'Access the global stolen vehicle database. Check VINs for cars, trucks, motorcycles, boats against theft reports. Free vehicle verification.',
    keywords: 'stolen vehicle database, stolen car database, stolen motorcycle lookup, stolen vehicle check, vehicle theft database',
    type: 'website'
  },
  'stolen-phone-check': {
    title: 'Stolen Phone Check - Free IMEI Verification & Lookup',
    description: 'Check if a phone is stolen before buying. Verify IMEI numbers for iPhone, Samsung, Android devices against stolen phone databases.',
    keywords: 'stolen phone check, check if phone stolen, phone IMEI check, stolen iPhone lookup, stolen Android verification',
    type: 'website'
  },
  'check-stolen-database': {
    title: 'Check Stolen Database - Verify IMEI, VIN & Serial Numbers',
    description: 'Search our comprehensive stolen goods database. Check IMEI, VIN, and serial numbers against police reports and theft registries instantly.',
    keywords: 'check stolen database, stolen goods database, theft database search, stolen items registry, police stolen database',
    type: 'website'
  },
  'stolen-item-lookup': {
    title: 'Stolen Item Lookup - Instant Verification Service',
    description: 'Lookup any item to see if it\'s stolen. Instant verification for phones, vehicles, electronics, and more. Free stolen item search.',
    keywords: 'stolen item lookup, lookup stolen goods, item theft check, stolen goods search, verify stolen items',
    type: 'website'
  },
  'check-stolen-item': {
    title: 'Check Stolen Item - Free Online Verification Tool',
    description: 'Check stolen items online for free. Verify IMEI, VIN, serial numbers before buying. Protect yourself from purchasing stolen goods.',
    keywords: 'check stolen item, verify stolen goods, stolen item verification, check if stolen, item theft verification',
    type: 'website'
  },
  'stolen-items-list': {
    title: 'Stolen Items List - Search Database of Reported Thefts',
    description: 'Browse and search the stolen items list. Find reported stolen phones, vehicles, electronics, and more. Check before you buy.',
    keywords: 'stolen items list, list of stolen goods, stolen property list, theft reports database, stolen goods registry',
    type: 'website'
  },
  'vin-check-lookup': {
    title: 'VIN Check Lookup - Free Vehicle History & Theft Check',
    description: 'Free VIN check and lookup service. Verify vehicle history, check for theft reports, and get instant results before buying any vehicle.',
    keywords: 'VIN check lookup, vehicle VIN lookup, free VIN check, car history lookup, VIN theft check',
    type: 'website'
  },
  'check-stolen-car': {
    title: 'Check Stolen Car - Free VIN Verification Service',
    description: 'Check if a car is stolen before you buy. Free VIN verification against stolen vehicle databases. Protect yourself from car theft fraud.',
    keywords: 'check stolen car, stolen car check, car theft verification, verify car not stolen, stolen vehicle check',
    type: 'website'
  },
  'search-stolen-vehicle': {
    title: 'Search Stolen Vehicle - Free VIN Database Lookup',
    description: 'Search stolen vehicle databases by VIN number. Check cars, trucks, motorcycles against national theft registries instantly.',
    keywords: 'search stolen vehicle, stolen vehicle search, vehicle theft search, VIN stolen search, find stolen cars',
    type: 'website'
  },
  'search-stolen-firearms': {
    title: 'Search Stolen Firearms - Gun Serial Number Verification',
    description: 'Search stolen firearms database. Verify gun serial numbers against national stolen weapons registries. Check before purchasing firearms.',
    keywords: 'search stolen firearms, stolen gun database, firearms serial check, stolen weapons lookup, gun theft verification',
    type: 'website'
  },
  'search-stolen-guns': {
    title: 'Search Stolen Guns - Weapon Serial Number Database',
    description: 'Search stolen guns and weapons by serial number. Free verification against stolen firearms databases. Ensure legal gun purchases.',
    keywords: 'search stolen guns, stolen gun lookup, gun serial verification, weapons theft check, stolen firearms search',
    type: 'website'
  },
  'search-stolen-bikes': {
    title: 'Search Stolen Bikes - Bicycle Serial Number Lookup',
    description: 'Search stolen bikes and bicycles by serial number. Check bike registries before buying used bikes. Free bicycle theft verification.',
    keywords: 'search stolen bikes, stolen bicycle check, bike serial lookup, bicycle theft database, stolen bike search',
    type: 'website'
  },
  'search-stolen-mobile': {
    title: 'Search Stolen Mobile - Phone IMEI Verification',
    description: 'Search stolen mobile phones by IMEI number. Check if smartphones are reported stolen before buying. Free mobile theft verification.',
    keywords: 'search stolen mobile, stolen mobile check, mobile IMEI search, phone theft lookup, stolen smartphone verification',
    type: 'website'
  },
  'search-stolen-iphone': {
    title: 'Search Stolen iPhone - IMEI Check & Verification',
    description: 'Search stolen iPhone database by IMEI. Check if an iPhone is reported stolen or blacklisted before purchase. Free iPhone verification.',
    keywords: 'search stolen iPhone, stolen iPhone check, iPhone IMEI lookup, Apple theft verification, iPhone blacklist check',
    type: 'website'
  },
  'check-vehicle-stolen': {
    title: 'Check Vehicle Stolen - Free VIN Theft Verification',
    description: 'Check if a vehicle was stolen using VIN number. Free verification against national stolen vehicle databases. Protect your vehicle purchase.',
    keywords: 'check vehicle stolen, vehicle theft check, was vehicle stolen, VIN theft verification, stolen vehicle lookup',
    type: 'website'
  },
  'stolen-car-vin': {
    title: 'Stolen Car VIN Check - Verify Vehicle History',
    description: 'Check stolen car VIN numbers against theft databases. Verify vehicle history and theft status before buying any car.',
    keywords: 'stolen car VIN, VIN stolen check, car VIN theft lookup, vehicle VIN verification, stolen car database',
    type: 'website'
  },
  'vehicles-by-license-plate': {
    title: 'Check Stolen Vehicles by License Plate Number',
    description: 'Search stolen vehicles using license plate numbers. Verify vehicle ownership and theft status by plate lookup.',
    keywords: 'stolen vehicles by license plate, license plate check, plate number lookup, vehicle plate verification, stolen car plate',
    type: 'website'
  },
  'how-do-i-check-if-stolen': {
    title: 'How Do I Check if Something is Stolen? - Free Guide',
    description: 'Learn how to check if items are stolen before buying. Step-by-step guide to verify IMEI, VIN, serial numbers. Free stolen goods verification.',
    keywords: 'how do i check if stolen, check if something stolen, verify item not stolen, how to check stolen goods',
    type: 'website'
  },
  'is-this-stolen': {
    title: 'Is This Stolen? - Free Instant Verification Tool',
    description: 'Find out if your item is stolen instantly. Check phones, cars, electronics against theft databases. Free verification in seconds.',
    keywords: 'is this stolen, check if stolen, stolen verification, is item stolen, stolen goods check',
    type: 'website'
  },
  'verify-not-stolen': {
    title: 'Verify Item Not Stolen - Free Database Check',
    description: 'Verify items are not stolen before purchase. Free checks for phones, vehicles, electronics against global theft databases.',
    keywords: 'verify not stolen, verify item safe, check not stolen, stolen verification service',
    type: 'website'
  },
  'stolen-goods-search': {
    title: 'Stolen Goods Search - Free Database Lookup',
    description: 'Search stolen goods databases for free. Check IMEI, VIN, serial numbers against police reports and theft registries.',
    keywords: 'stolen goods search, search stolen items, stolen property search, theft database search',
    type: 'website'
  },
  'free-stolen-check': {
    title: 'Free Stolen Check - IMEI, VIN & Serial Verification',
    description: 'Free stolen item checks. Verify phones, cars, electronics instantly. No credit card required. 2 free searches for new users.',
    keywords: 'free stolen check, free IMEI check, free VIN check, free verification, no cost stolen check',
    type: 'website'
  },
  'stolen-property-check': {
    title: 'Stolen Property Check - Verify Before You Buy',
    description: 'Check stolen property databases before purchasing. Free verification for all items. Protect yourself from buying stolen goods.',
    keywords: 'stolen property check, property theft verification, check stolen property, stolen goods verification',
    type: 'website'
  },
  'check-if-phone-was-stolen': {
    title: 'Check if Phone Was Stolen - IMEI Verification',
    description: 'Check if a phone was stolen by IMEI number. Free verification for iPhone, Android, Samsung. Instant stolen phone check.',
    keywords: 'check if phone was stolen, phone stolen check, was phone stolen, stolen phone verification',
    type: 'website'
  },
  'check-if-car-was-stolen': {
    title: 'Check if Car Was Stolen - VIN Verification',
    description: 'Check if a car was stolen by VIN number. Free vehicle theft verification. Check before buying any used car.',
    keywords: 'check if car was stolen, car stolen check, was car stolen, stolen car verification',
    type: 'website'
  },
  'stolen-item-search': {
    title: 'Stolen Item Search - Global Database Access',
    description: 'Search global stolen item databases. Find reported stolen phones, cars, electronics, and more. Free instant search.',
    keywords: 'stolen item search, search stolen goods, stolen property search, item theft search',
    type: 'website'
  },
  'check-stolen-goods': {
    title: 'Check Stolen Goods - Free Verification Service',
    description: 'Check stolen goods before buying. Free IMEI, VIN, serial number verification. Protect yourself from theft fraud.',
    keywords: 'check stolen goods, stolen goods checker, verify stolen goods, stolen merchandise check',
    type: 'website'
  },
  'stolen-check-free': {
    title: 'Stolen Check Free - No Credit Card Required',
    description: 'Free stolen checks for all items. No credit card, no signup required for basic checks. Verify items instantly.',
    keywords: 'stolen check free, free theft check, no cost verification, free stolen lookup',
    type: 'website'
  },
  'verify-serial-number': {
    title: 'Verify Serial Number - Check Against Theft Database',
    description: 'Verify serial numbers for electronics, tools, appliances. Check if items are stolen before purchase. Free verification.',
    keywords: 'verify serial number, serial number check, serial verification, check serial stolen',
    type: 'website'
  },
  'imei-stolen-check': {
    title: 'IMEI Stolen Check - Verify Phone Not Blacklisted',
    description: 'IMEI stolen check for all phones. Check if IMEI is blacklisted or reported stolen. Free iPhone and Android verification.',
    keywords: 'IMEI stolen check, check IMEI stolen, IMEI blacklist check, phone IMEI verification',
    type: 'website'
  },
  'vin-stolen-check': {
    title: 'VIN Stolen Check - Vehicle Theft Verification',
    description: 'VIN stolen check for all vehicles. Verify cars, trucks, motorcycles against theft databases. Free VIN verification.',
    keywords: 'VIN stolen check, check VIN stolen, vehicle VIN verification, VIN theft check',
    type: 'website'
  },
  'stolen-search-console': {
    title: 'Stolen Search Console - Real-Time Analytics | SafeOrStolen',
    description: 'Access real-time stolen item search analytics, trending searches, and global statistics. Monitor patterns and protect your community with live data insights.',
    keywords: 'stolen search console, search analytics, stolen item trends, real-time data, search statistics, theft patterns',
    type: 'website'
  },
  'about-company': {
    title: 'About Safe or Stolen LLC - Company Information & Leadership',
    description: 'Learn about Safe or Stolen LLC, our mission, leadership team, and commitment to transparency. Headquartered in Peoria, Arizona, serving users worldwide.',
    keywords: 'Safe or Stolen company, about us, leadership team, company information, Samuel Pfeiffer, Arizona LLC',
    type: 'website'
  },
  'transparency': {
    title: 'Transparency Report - Safe or Stolen | Platform Statistics & Operations',
    description: 'View our quarterly transparency report including platform statistics, data handling practices, law enforcement cooperation, and operational details.',
    keywords: 'transparency report, platform statistics, data handling, privacy practices, operational transparency',
    type: 'website'
  },
  'roadmap': {
    title: 'Platform Roadmap - Safe or Stolen | Development Timeline & Features',
    description: 'View our platform development roadmap, upcoming features, and launch timeline for SafeOrStolen.com service and mobile applications.',
    keywords: 'platform roadmap, development timeline, upcoming features, mobile app launch, service updates',
    type: 'website'
  },
  'company-verification': {
    title: 'Official Company Verification - Safe or Stolen LLC | Peoria, Arizona',
    description: 'Official verification: Safe or Stolen LLC is a legitimate Arizona corporation incorporated July 7, 2025, headquartered in Peoria, AZ. We are NOT affiliated with any Shelton, WA company.',
    keywords: 'Safe or Stolen LLC, Peoria Arizona, Arizona corporation, company verification, legitimate business, not Shelton Washington, SafeOrStolen verification, Arizona business, Samuel Pfeiffer',
    type: 'website'
  },
  'trust-verification': {
    title: 'Trust & Security Verification - Certified Secure Platform',
    description: 'Verify our enterprise-grade security certifications including SOC 2, ISO 27001, GDPR, and PCI DSS compliance. View our security badges, audits, and trust indicators.',
    keywords: 'security verification, trust certification, SOC 2, ISO 27001, GDPR compliant, PCI DSS, secure platform, verified site, security audit, compliance certification, enterprise security, data protection',
    type: 'website'
  },
  'security': {
    title: 'Security & Privacy - Enterprise Data Protection',
    description: 'Learn about our enterprise-grade security measures, data encryption, privacy policies, and compliance with international security standards.',
    keywords: 'security measures, data protection, privacy policy, encryption, GDPR compliance, data security, secure platform',
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
            "target": `${baseUrl}/verify`,
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