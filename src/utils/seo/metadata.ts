
import type { PageMetadata } from './types';

// Base site configuration
const SITE_CONFIG = {
  name: 'Safe or Stolen',
  tagline: 'Verify the Legitimacy of 2nd-hand items before you buy or sell',
  description: 'Real-time stolen goods verification platform protecting consumers and businesses from fraud',
  url: 'https://safeorstolen.com',
  ogImage: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
  twitterHandle: '@safeorstolen',
  author: 'Safe or Stolen Team',
  keywords: [
    'stolen goods verification',
    'secondhand marketplace safety', 
    'fraud prevention',
    'item legitimacy check',
    'consumer protection',
    'safe buying',
    'stolen property check',
    'marketplace security',
    'How to check if something is stolen',
    'How do I check if something is stolen?',
    'Where to check if something is stolen?',
    'Can I check if something is stolen before I buy it?',
    'I want to check if something is stolen',
    'How do I check if something used is stolen?'
  ]
} as const;

// Page-specific metadata
const PAGE_METADATA: Record<string, PageMetadata> = {
  home: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: 'Protect yourself from stolen goods with real-time verification. Check items before you buy or sell in secondhand marketplaces. Enterprise-grade security.',
    keywords: SITE_CONFIG.keywords.join(', '),
    ogTitle: `${SITE_CONFIG.name} - The Ultimate Protection Against Stolen Goods`,
    ogDescription: 'Real-time verification platform that protects millions from unknowingly buying stolen items. Check before you buy.',
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
