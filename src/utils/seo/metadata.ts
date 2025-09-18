
import type { PageMetadata } from './types';

// Base site configuration - Corporation
const SITE_CONFIG = {
  name: 'Safe or Stolen',
  legalName: 'Safe or Stolen Corp.',
  tagline: 'Verify the Legitimacy of 2nd-hand items before you buy or sell',
  description: 'Real-time stolen goods verification platform protecting consumers and businesses from fraud. Incorporated corporation providing enterprise-grade verification services.',
  url: 'https://safeorstolen.com',
  ogImage: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
  twitterHandle: '@safeorstolen',
  author: 'Safe or Stolen Team',
  keywords: [
    // Broad Market & Transaction Safety
    'safe secondhand buying',
    'is it safe to buy used',
    'check if item is stolen',
    'verify ownership before buying',
    'secondhand item verification',
    'lost and stolen check',
    'buy and sell safely',
    'protect buyers and sellers',
    'resale security check',
    'property legitimacy tool',
    
    // Device, Vehicle, and ID-Specific
    'IMEI device check',
    'serial number lookup',
    'VIN lookup',
    'electronics background check',
    'stolen phone check',
    'report lost or stolen',
    'used electronics safe',
    'secondhand car check',
    
    // Consumer & E-commerce
    'buy used safely online',
    'check property before selling',
    'scam prevention tool',
    'anti-theft register for buyers',
    'property history report',
    'avoid stolen goods',
    
    // Brand/Trust-Oriented
    'trusted item verification',
    'global stolen property database',
    'secure marketplace tool',
    
    // Core verification terms (existing)
    'check serial number',
    'check VIN number', 
    'check IMEI',
    'check MAC address',
    'VIN lookup stolen',
    'IMEI check stolen',
    'free stolen check',
    'free lost item check',
    
    // Lost and stolen items
    'lost or stolen lookup',
    'stolen and lost property',
    'check if lost or stolen',
    'report lost item',
    'find lost property',
    'recover stolen items',
    
    // Specific item categories
    'check if phone stolen',
    'check if car stolen', 
    'check if bike stolen',
    'check if bicycle stolen',
    'check if laptop stolen',
    'check if camera stolen',
    'check if motorcycle stolen',
    'check if tablet stolen',
    'check if electronics stolen',
    'check if gaming console stolen',
    'check if GPS stolen',
    'check if sports equipment stolen',
    
    // Verification actions
    'is my phone stolen',
    'is my car stolen',
    'is my bike stolen',
    'verify serial number',
    'verify VIN',
    'verify IMEI',
    
    // Database and registry terms
    'stolen goods database',
    'stolen property registry',
    'lost item database',
    'stolen item register',
    'worldwide stolen database',
    'global stolen property check',
    
    // Marketplace safety
    'check before you buy',
    'verify before buying',
    'second hand verification',
    'used item check',
    'marketplace safety check',
    'eBay stolen check',
    'Facebook Marketplace stolen',
    'Craigslist stolen check',
    
    // How-to searches
    'how to check serial number',
    'how to check VIN',
    'how to check IMEI',
    'where to check if stolen',
    'how to verify before buying',
    
    // Protection and prevention
    'stolen goods verification',
    'fraud prevention check',
    'consumer protection',
    'secondhand buyer protection',
    
    // Corporate terms
    'enterprise verification services',
    'corporate fraud prevention',
    'business verification platform',
    'B2B verification services'
  ] as const,
} as const;

// Page-specific metadata
const PAGE_METADATA: Record<string, PageMetadata> = {
  home: {
    title: `Free Stolen & Lost Property Check - Verify Serial Numbers, VIN, IMEI`,
    description: 'Free worldwide database to check if items are stolen or lost. Verify phones, cars, bikes, electronics before buying. Check serial numbers, VIN, IMEI instantly.',
    keywords: SITE_CONFIG.keywords.join(', '),
    ogTitle: `Free Stolen Property Check - Worldwide Lost & Stolen Database`,
    ogDescription: 'Free tool to check if any item is stolen or lost. Verify serial numbers, VIN, IMEI before buying secondhand items.',
    ogImage: SITE_CONFIG.ogImage,
    robotsDirectives: 'index, follow, max-image-preview:large'
  },
  
  'how-it-works': {
    title: `How It Works - ${SITE_CONFIG.name}`,
    description: 'Learn how our real-time verification system protects you from stolen goods. Simple 3-step process: Search, Verify, Buy Safely.',
    keywords: 'how stolen goods verification works, item verification process, safe buying guide, fraud prevention steps',
    ogTitle: 'How Safe or Stolen Works - 3 Simple Steps to Safe Buying',
    ogDescription: 'Discover how our verification system protects millions from stolen goods with real-time database checks.',
    robotsDirectives: 'index, follow'
  },

  'about-problem': {
    title: `The $13 Billion Stolen Goods Crisis - ${SITE_CONFIG.name}`,
    description: 'Learn about the massive stolen goods problem affecting millions of Americans. Discover why 2.3M people unknowingly buy stolen items yearly and how to protect yourself.',
    keywords: 'stolen goods crisis, secondhand fraud, NICB statistics, stolen property market, consumer protection',
    ogTitle: 'The Hidden $13 Billion Stolen Goods Crisis in America',
    ogDescription: 'Shocking statistics reveal 2.3 million Americans unknowingly buy stolen goods yearly. Learn how to protect yourself.',
    robotsDirectives: 'index, follow'
  },

  'our-story': {
    title: `Our Story - From Problem to Global Solution - ${SITE_CONFIG.name}`,
    description: 'How recognizing the $13 billion stolen goods crisis led to building the world\'s most comprehensive verification platform to protect millions worldwide.',
    keywords: 'Safe or Stolen story, stolen goods solution, fraud prevention company, consumer protection mission',
    ogTitle: 'Our Story: Building the World\'s First Stolen Goods Verification Platform',
    ogDescription: 'From recognizing a $13 billion problem to protecting millions worldwide - the Safe or Stolen story.',
    robotsDirectives: 'index, follow'
  },

  'for-consumers': {
    title: `For Consumers - Safe Secondhand Shopping - ${SITE_CONFIG.name}`,
    description: 'Protect yourself when buying secondhand items. Real-time verification, purchase protection, and peace of mind for all your secondhand purchases.',
    keywords: 'safe secondhand shopping, consumer protection, verify before buying, stolen goods prevention, marketplace safety',
    ogTitle: 'For Consumers: Shop Secondhand with Complete Confidence',
    ogDescription: 'Real-time verification and purchase protection for all your secondhand shopping needs.',
    robotsDirectives: 'index, follow'
  },

  'for-brands': {
    title: `For Brands & Manufacturers - Protect Your Brand - ${SITE_CONFIG.name}`,
    description: 'Partner with us to protect your brand integrity and help customers verify the legitimacy of your products on the secondary market.',
    keywords: 'brand protection, manufacturer partnership, product verification, brand integrity, secondary market protection',
    ogTitle: 'For Brands: Protect Your Products in the Secondary Market',
    ogDescription: 'Help customers verify your products and protect your brand from stolen goods.',
    robotsDirectives: 'index, follow'
  },

  contact: {
    title: `Contact Us - ${SITE_CONFIG.name}`,
    description: 'Get in touch with the Safe or Stolen team. We\'re here to help with verification questions, partnerships, and support.',
    keywords: 'contact Safe or Stolen, customer support, partnership inquiries, verification help',
    ogTitle: 'Contact Safe or Stolen - We\'re Here to Help',
    ogDescription: 'Get in touch for support, partnerships, or any questions about our verification platform.',
    robotsDirectives: 'index, follow'
  },

  blog: {
    title: `Blog - Latest News & Insights - ${SITE_CONFIG.name}`,
    description: 'Stay updated with the latest news, insights, and tips about stolen goods prevention, marketplace safety, and consumer protection.',
    keywords: 'stolen goods news, marketplace safety blog, consumer protection tips, fraud prevention insights',
    ogTitle: 'Safe or Stolen Blog - Latest Marketplace Safety Insights',
    ogDescription: 'Expert insights on marketplace safety, fraud prevention, and protecting yourself from stolen goods.',
    robotsDirectives: 'index, follow'
  },

  'check-phone': {
    title: `Check If Phone Is Stolen - IMEI Lookup | ${SITE_CONFIG.name}`,
    description: 'Check if a phone is stolen using IMEI lookup. Verify smartphones before buying on eBay, Facebook Marketplace. Free stolen phone database check.',
    keywords: 'check if phone stolen, IMEI lookup, check IMEI, stolen phone check, is my phone stolen, verify phone IMEI, stolen smartphone lookup',
    ogTitle: 'Check If Phone Is Stolen - Free IMEI Lookup',
    ogDescription: 'Verify if a smartphone is stolen before you buy. Free IMEI check against stolen phone databases.',
    robotsDirectives: 'index, follow'
  },

  'check-car': {
    title: `Check If Car Is Stolen - VIN Lookup | ${SITE_CONFIG.name}`,
    description: 'Check if a car is stolen using VIN lookup. Verify vehicles before buying. Free stolen car database check for used cars, motorcycles, trucks.',
    keywords: 'check if car stolen, VIN lookup, check VIN number, stolen car check, is my car stolen, verify VIN, stolen vehicle lookup',
    ogTitle: 'Check If Car Is Stolen - Free VIN Lookup',
    ogDescription: 'Verify if a vehicle is stolen before you buy. Free VIN check against stolen car databases.',
    robotsDirectives: 'index, follow'
  },

  'check-electronics': {
    title: `Check If Electronics Are Stolen - Serial Number Lookup | ${SITE_CONFIG.name}`,
    description: 'Check if electronics are stolen using serial number lookup. Verify laptops, tablets, gaming devices before buying. Free stolen electronics database.',
    keywords: 'check if electronics stolen, serial number lookup, check serial number, stolen electronics check, verify electronics, stolen laptop check',
    ogTitle: 'Check If Electronics Are Stolen - Serial Number Lookup',
    ogDescription: 'Verify if electronics are stolen before you buy. Free serial number check for laptops, tablets, gaming devices.',
    robotsDirectives: 'index, follow'
  }
};

// Helper function to get page metadata
export const getPageMetadata = (pageKey: string): PageMetadata => {
  return PAGE_METADATA[pageKey] || PAGE_METADATA.home;
};

// Helper function to generate dynamic metadata for blog posts
export const getBlogPostMetadata = (post: { title: string; excerpt: string; slug: string }): PageMetadata => {
  return {
    title: `${post.title} - ${SITE_CONFIG.name} Blog`,
    description: post.excerpt,
    keywords: 'stolen goods, marketplace safety, consumer protection, fraud prevention',
    ogTitle: post.title,
    ogDescription: post.excerpt,
    ogImage: SITE_CONFIG.ogImage,
    robotsDirectives: 'index, follow'
  };
};

// Export site config for use in other components
export { SITE_CONFIG };
