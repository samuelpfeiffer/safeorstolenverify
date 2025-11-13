/**
 * Centralized Breadcrumb Configuration
 * Maps routes to their breadcrumb hierarchy for consistent navigation
 */

export interface BreadcrumbConfig {
  name: string;
  href: string;
}

/**
 * Generate breadcrumbs for any route path
 */
export const getBreadcrumbsForPath = (pathname: string): BreadcrumbConfig[] => {
  // Remove trailing slash
  const cleanPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;

  // Handle specific routes with custom breadcrumbs
  const breadcrumbMap: Record<string, BreadcrumbConfig[]> = {
    // Core Pages
    '/': [],
    '/about': [{ name: 'About Us', href: '/about' }],
    '/contact': [{ name: 'Contact', href: '/contact' }],
    '/faq': [{ name: 'FAQ', href: '/faq' }],
    '/pricing': [{ name: 'Pricing', href: '/pricing' }],
    '/how-it-works': [{ name: 'How It Works', href: '/how-it-works' }],
    '/for-brands': [{ name: 'For Brands', href: '/for-brands' }],
    '/terms-of-service': [{ name: 'Terms of Service', href: '/terms-of-service' }],
    '/privacy-policy': [{ name: 'Privacy Policy', href: '/privacy-policy' }],
    
    // Verification Tools
    '/verify': [{ name: 'Verify Item', href: '/verify' }],
    '/stolen-item-checker': [{ name: 'Stolen Item Checker', href: '/stolen-item-checker' }],
    '/check-phone': [{ name: 'Check Phone', href: '/check-phone' }],
    '/check-car': [{ name: 'Check Car', href: '/check-car' }],
    '/check-bike': [{ name: 'Check Bike', href: '/check-bike' }],
    '/check-electronics': [{ name: 'Check Electronics', href: '/check-electronics' }],
    '/imei-checker': [{ name: 'IMEI Checker', href: '/imei-checker' }],
    '/serial-number-checker': [{ name: 'Serial Number Checker', href: '/serial-number-checker' }],
    '/firearms-check': [{ name: 'Firearms Check', href: '/firearms-check' }],
    
    // Blog
    '/blog': [{ name: 'Blog', href: '/blog' }],
    
    // Guides
    '/how-to-check-anything-stolen': [
      { name: 'Guides', href: '/guides' },
      { name: 'How to Check Anything Stolen', href: '/how-to-check-anything-stolen' }
    ],
    '/ultimate-guide-not-buying-stolen': [
      { name: 'Guides', href: '/guides' },
      { name: 'Ultimate Guide', href: '/ultimate-guide-not-buying-stolen' }
    ],
    '/comprehensive-guide': [
      { name: 'Guides', href: '/guides' },
      { name: 'Comprehensive Guide', href: '/comprehensive-guide' }
    ],
    '/how-to-check-if-item-stolen': [
      { name: 'Guides', href: '/guides' },
      { name: 'Check If Item Stolen', href: '/how-to-check-if-item-stolen' }
    ],
    '/how-to-check-laptop-stolen': [
      { name: 'Guides', href: '/guides' },
      { name: 'Check Laptop Stolen', href: '/how-to-check-laptop-stolen' }
    ],
    '/buyer-guide': [
      { name: 'Guides', href: '/guides' },
      { name: 'Buyer Guide', href: '/buyer-guide' }
    ],
    '/seller-guide': [
      { name: 'Guides', href: '/guides' },
      { name: 'Seller Guide', href: '/seller-guide' }
    ],
    '/avoid-stolen-goods': [
      { name: 'Guides', href: '/guides' },
      { name: 'Avoid Stolen Goods', href: '/avoid-stolen-goods' }
    ],
    '/buy-used-electronics-safely': [
      { name: 'Guides', href: '/guides' },
      { name: 'Buy Electronics Safely', href: '/buy-used-electronics-safely' }
    ],
    
    // Competitor Comparisons
    '/safeorstolen-vs-carfax': [
      { name: 'Comparisons', href: '/comparisons' },
      { name: 'vs Carfax', href: '/safeorstolen-vs-carfax' }
    ],
    '/safeorstolen-vs-checkmend': [
      { name: 'Comparisons', href: '/comparisons' },
      { name: 'vs CheckMEND', href: '/safeorstolen-vs-checkmend' }
    ],
    '/safeorstolen-vs-ebay': [
      { name: 'Comparisons', href: '/comparisons' },
      { name: 'vs eBay', href: '/safeorstolen-vs-ebay' }
    ],
    '/safeorstolen-vs-greyscout': [
      { name: 'Comparisons', href: '/comparisons' },
      { name: 'vs GreyScout', href: '/safeorstolen-vs-greyscout' }
    ],
    '/safeorstolen-vs-imeiinfo': [
      { name: 'Comparisons', href: '/comparisons' },
      { name: 'vs IMEI.info', href: '/safeorstolen-vs-imeiinfo' }
    ],
    '/safeorstolen-vs-imeipro': [
      { name: 'Comparisons', href: '/comparisons' },
      { name: 'vs IMEIpro', href: '/safeorstolen-vs-imeipro' }
    ],
    '/safeorstolen-vs-swappa': [
      { name: 'Comparisons', href: '/comparisons' },
      { name: 'vs Swappa', href: '/safeorstolen-vs-swappa' }
    ],
    '/competitor-alternatives': [
      { name: 'Comparisons', href: '/competitor-alternatives' }
    ],
    
    // Business Pages
    '/enterprise-demo': [
      { name: 'Business', href: '/business' },
      { name: 'Enterprise Demo', href: '/enterprise-demo' }
    ],
    '/marketplace': [
      { name: 'Business', href: '/business' },
      { name: 'Marketplace Integration', href: '/marketplace' }
    ],
    '/integrations': [
      { name: 'Business', href: '/business' },
      { name: 'Integrations', href: '/integrations' }
    ],
    '/api-docs': [
      { name: 'Business', href: '/business' },
      { name: 'API Documentation', href: '/api-docs' }
    ],
    '/partnerships': [
      { name: 'Business', href: '/business' },
      { name: 'Partnerships', href: '/partnerships' }
    ],
    
    // Company Pages
    '/our-story': [
      { name: 'About', href: '/about' },
      { name: 'Our Story', href: '/our-story' }
    ],
    '/our-team': [
      { name: 'About', href: '/about' },
      { name: 'Our Team', href: '/our-team' }
    ],
    '/our-mission': [
      { name: 'About', href: '/about' },
      { name: 'Our Mission', href: '/our-mission' }
    ],
    '/case-studies': [
      { name: 'Resources', href: '/resources' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    '/press': [
      { name: 'Resources', href: '/resources' },
      { name: 'Press', href: '/press' }
    ],
    
    // Regional Pages
    '/region/uk': [
      { name: 'Regions', href: '/regions' },
      { name: 'United Kingdom', href: '/region/uk' }
    ],
    '/region/brazil': [
      { name: 'Regions', href: '/regions' },
      { name: 'Brazil', href: '/region/brazil' }
    ],
    '/region/india': [
      { name: 'Regions', href: '/regions' },
      { name: 'India', href: '/region/india' }
    ],
    '/australia-vin-check': [
      { name: 'VIN Lookup', href: '/vin-lookup' },
      { name: 'Australia', href: '/australia-vin-check' }
    ],
    '/canada-vin-check': [
      { name: 'VIN Lookup', href: '/vin-lookup' },
      { name: 'Canada', href: '/canada-vin-check' }
    ],
  };

  // Check for exact match
  if (breadcrumbMap[cleanPath]) {
    return breadcrumbMap[cleanPath];
  }

  // Handle US State VIN Lookups (50 states)
  if (cleanPath.includes('-vin-lookup')) {
    const stateName = cleanPath
      .replace('/', '')
      .replace('-vin-lookup', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return [
      { name: 'VIN Lookup', href: '/vin-lookup' },
      { name: stateName, href: cleanPath }
    ];
  }

  // Handle blog posts
  if (cleanPath.startsWith('/blog/')) {
    const postSlug = cleanPath.replace('/blog/', '');
    const postTitle = postSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return [
      { name: 'Blog', href: '/blog' },
      { name: postTitle, href: cleanPath }
    ];
  }

  // Default: Generate breadcrumbs from path segments
  const segments = cleanPath.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbConfig[] = [];
  
  segments.forEach((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/');
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({ name, href: path });
  });

  return breadcrumbs;
};

/**
 * Get page category for grouping (used for analytics and organization)
 */
export const getPageCategory = (pathname: string): string => {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/check-') || pathname === '/verify' || pathname === '/stolen-item-checker') {
    return 'verification-tools';
  }
  if (pathname.includes('-vin-lookup') || pathname.includes('-vin-check')) {
    return 'regional-vin';
  }
  if (pathname.startsWith('/blog')) return 'blog';
  if (pathname.startsWith('/safeorstolen-vs-') || pathname === '/competitor-alternatives') {
    return 'comparisons';
  }
  if (['/enterprise-demo', '/marketplace', '/integrations', '/api-docs'].includes(pathname)) {
    return 'business';
  }
  if (['/about', '/our-story', '/our-team', '/our-mission'].includes(pathname)) {
    return 'company';
  }
  if (['/how-to-', '/buyer-guide', '/seller-guide', '/avoid-', '/buy-used-'].some(prefix => pathname.includes(prefix))) {
    return 'guides';
  }
  
  return 'other';
};
