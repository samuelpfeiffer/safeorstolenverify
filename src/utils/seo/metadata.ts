
import type { PageMetadata } from './types';

// Base site configuration - Corporation
const SITE_CONFIG = {
  name: 'Safe or Stolen',
  legalName: 'Safe or Stolen Corp.',
  tagline: 'Verify the Legitimacy of 2nd-hand items before you buy or sell',
  description: 'Comprehensive stolen goods verification platform for all item types. Verify vehicles (cars, motorcycles, boats, jet skis, sidebysides, dirt bikes, mopeds, bicycles), electronics (phones, tablets, laptops, computers, TVs, radios, cameras, watches), firearms, machinery, engines, tools, home appliances, furniture, RC cars, and specialty equipment using IMEI, VIN, and serial numbers. Real-time database checks protecting consumers and businesses from fraud.',
  url: 'https://safeorstolen.com',
  ogImage: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
  twitterHandle: '@safeorstolen',
  author: 'Safe or Stolen Team',
  keywords: [
    // Top Competitor Keywords - Primary Focus
    'stolen item lookup',
    'stolen item check',
    'find stolen property', 
    'report stolen items',
    'search stolen database',
    'online stolen items search',
    'IMEI checker',
    'VIN check',
    'ESN checker',
    'blacklist check',
    'device authenticity check',
    'free IMEI check',
    'check if IMEI is stolen',
    'phone blacklist check',
    'serial number check',
    'second hand item verification',
    'check for stolen electronics',
    'check for stolen vehicles',
    'stolen car check',
    'stolen motorcycle check',
    'stolen boat check',
    'stolen jet ski check',
    'stolen sidebyside check',
    'stolen dirt bike check',
    'stolen moped check',
    'stolen electric bike check',
    'stolen bicycle check',
    'track lost property',
    'phone stolen status',
    'stolen phone search',
    'stolen laptop check',
    'stolen computer check',
    'stolen TV check',
    'stolen camera check',
    'stolen watch check',
    'stolen tablet check',
    'stolen radio check',
    'stolen firearm check',
    'stolen gun database',
    'stolen machinery check',
    'stolen engine check',
    'stolen tools check',
    'stolen home appliances check',
    'stolen furniture check',
    'stolen RC car check',
    'stolen specialty equipment check',
    'lost and found property',
    'stolen valuables database',
    'secondhand goods database',
    'device blocklist lookup',
    
    // New User Intent Keywords
    'is my item stolen',
    'find serial number database',
    'property recovery service',
    'IMEI blacklist check',
    'device check before buying',
    'how to verify secondhand items',
    'is this gadget clear',
    'secure resale lookup',
    'validate used electronics',
    'track stolen gear',
    'check VIN for theft',
    'IMEI block status',
    'avoid buying stolen goods',
    'secondhand item legitimacy',
    'trusted item verification',
    'lost item search engine',
    'blacklist registry search',
    
    // Competitor Brand Alternatives
    'CheckMEND alternative',
    'Stolen 911 alternative',
    'IMEICheck.com alternative',
    'Swappa IMEI Check alternative',
    'Seeker app alternative',
    'stolen items verification service',
    'stolen property checker online',
    'free stolen goods checker',
    
    // Enhanced Core Terms
    'check if item is stolen',
    'check if stolen before buying',
    'secondhand item verification',
    'lost and stolen check',
    'IMEI device check',
    'serial number lookup',
    'VIN lookup',
    'stolen phone check',
    'report lost or stolen',
    'used electronics verification',
    'secondhand car check',
    
    // Marketplace & Consumer Safety
    'buy used safely online',
    'check property before selling',
    'marketplace safety check',
    'eBay stolen check',
    'Facebook Marketplace stolen',
    'Craigslist stolen check',
    'verify before buying',
    'second hand verification',
    'used item check',
    
    // Database & Registry Terms
    'stolen goods database',
    'stolen property registry',
    'lost item database',
    'stolen item register',
    'worldwide stolen database',
    'global stolen property check',
    'property legitimacy tool',
    'trusted item verification',
    'global stolen property database',
    
    // Verification Actions & How-To
    'how to check serial number',
    'how to check VIN',
    'how to check IMEI',
    'where to check if stolen',
    'how to verify before buying',
    'verify serial number',
    'verify VIN',
    'verify IMEI',
    'is my phone stolen',
    'is my car stolen',
    
    // Protection & Prevention
    'stolen goods verification',
    'fraud prevention check',
    'consumer protection',
    'secondhand buyer protection',
    'avoid stolen goods',
    'scam prevention tool',
    'anti-theft register for buyers',
    'property history report',
    
    // Enterprise & Business
    'enterprise verification services',
    'corporate fraud prevention',
    'business verification platform',
    'B2B verification services'
  ] as const,
} as const;

// Page-specific metadata
const PAGE_METADATA: Record<string, PageMetadata> = {
  home: {
    title: `Stolen Item Lookup | IMEI, VIN & Serial Number Verification - All Categories`,
    description: 'Complete stolen item verification database for vehicles (cars, motorcycles, boats, jet skis, sidebysides, dirt bikes, mopeds, bicycles), electronics (phones, tablets, laptops, computers, TVs, radios, cameras, watches), firearms, machinery, engines, tools, home appliances, furniture, RC cars, and specialty equipment. Free IMEI, VIN & serial number checks.',
    keywords: SITE_CONFIG.keywords.join(', '),
    ogTitle: `Complete Stolen Item Verification - All Categories | IMEI, VIN & Serial Number Database`,
    ogDescription: 'Comprehensive stolen item database for vehicles, electronics, firearms, machinery, tools, and more. Verify any IMEI, VIN, or serial number instantly.',
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
    title: `Free IMEI Checker - Phone Blacklist Check | Stolen Phone Search`,
    description: 'Free IMEI check for stolen phones. Verify phone blacklist status, ESN checker, device authenticity check. Better than Swappa IMEI Check - instant phone stolen status.',
    keywords: 'free IMEI check, IMEI checker, phone blacklist check, check if IMEI is stolen, phone stolen status, stolen phone search, ESN checker, device authenticity check',
    ogTitle: 'Free IMEI Checker - Verify Phone Blacklist & Stolen Status',
    ogDescription: 'Instant IMEI verification. Check phone blacklist, stolen status & device authenticity. Free alternative to premium IMEI checkers.',
    robotsDirectives: 'index, follow'
  },

  'check-car': {
    title: `VIN Check - Free Vehicle Stolen Property Check | Check for Stolen Vehicles`,
    description: 'Free VIN check for stolen vehicles. Search stolen database for cars, trucks, motorcycles. Track lost property & verify secondhand vehicles before buying.',
    keywords: 'VIN check, check for stolen vehicles, VIN lookup, stolen vehicle lookup, track lost property, secondhand vehicle verification, free VIN checker',
    ogTitle: 'Free VIN Check - Verify Vehicle History & Stolen Status',
    ogDescription: 'Instant VIN verification for stolen vehicles. Free vehicle history check & stolen property database search.',
    robotsDirectives: 'index, follow'
  },

  'check-electronics': {
    title: `Serial Number Check - Free Electronics Stolen Item Lookup | Check for Stolen Electronics`,
    description: 'Free serial number check for stolen electronics. Verify laptops, tablets, gaming devices. Check for stolen electronics in secondhand goods database before buying.',
    keywords: 'serial number check, check for stolen electronics, serial number lookup, stolen electronics check, secondhand goods database, device authenticity check',
    ogTitle: 'Free Serial Number Check - Electronics Stolen Item Verification',
    ogDescription: 'Instant serial number verification for electronics. Check stolen item database for laptops, tablets & gaming devices.',
    robotsDirectives: 'index, follow'
  },

  'stolen-item-checker': {
    title: `Stolen Item Checker - Free Online Stolen Items Search | Report Stolen Items`,
    description: 'Free stolen item checker & online stolen items search. Report stolen items, find stolen property, search stolen database. Best CheckMEND & Stolen 911 alternative.',
    keywords: 'stolen item checker, online stolen items search, report stolen items, find stolen property, search stolen database, stolen item lookup, stolen item check',
    ogTitle: 'Free Stolen Item Checker - Search Database & Report Items',
    ogDescription: 'Comprehensive stolen item checker. Search stolen database, report items & find stolen property online.',
    robotsDirectives: 'index, follow'
  },

  'how-to-check-stolen': {
    title: `How to Check if Your Item is Stolen | Complete Verification Guide`,
    description: 'Complete guide: How to check if items are stolen using IMEI, VIN & serial numbers. Step-by-step process to verify secondhand items, avoid buying stolen goods.',
    keywords: 'how to check if item stolen, is my item stolen, device check before buying, verify secondhand items, avoid buying stolen goods, stolen item verification guide',
    ogTitle: 'How to Check if Items Are Stolen - Complete Guide',
    ogDescription: 'Step-by-step guide to verify if items are stolen. Learn IMEI, VIN & serial number checking.',
    robotsDirectives: 'index, follow'
  },

  'imei-blacklist-guide': {
    title: `IMEI Blacklists Explained | Free Phone Blacklist Check Guide`,
    description: 'Complete guide to IMEI blacklists: what they are, how to check IMEI block status, and what to do if your phone is blacklisted. Free IMEI blacklist checker.',
    keywords: 'IMEI blacklist check, IMEI block status, phone blacklist check, what is IMEI blacklist, check if phone blocked, carrier blacklist lookup',
    ogTitle: 'IMEI Blacklists Explained - Complete Phone Blacklist Guide',
    ogDescription: 'Learn about IMEI blacklists, check phone block status, and understand carrier blacklist databases.',
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
