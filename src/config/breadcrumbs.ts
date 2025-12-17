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
    '/contact': [{ name: 'About & Support', href: '/about' }],
    '/faq': [{ name: 'FAQ', href: '/faq' }],
    '/pricing': [{ name: 'Pricing', href: '/pricing' }],
    '/how-it-works': [{ name: 'How It Works', href: '/how-it-works' }],
    '/for-brands': [{ name: 'For Business', href: '/for-businesses' }],
    '/terms-of-service': [{ name: 'Terms', href: '/terms' }],
    '/privacy-policy': [{ name: 'Privacy', href: '/privacy' }],
    
    // Verification Tools
    '/verify': [{ name: 'Verify Item', href: '/verify' }],
    '/stolen-item-checker': [{ name: 'Verify Item', href: '/verify' }],
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
      { name: 'Guides', href: '/blog' },
      { name: 'How to Check Anything Stolen', href: '/how-to-check-anything-stolen' }
    ],
    '/ultimate-guide-not-buying-stolen': [
      { name: 'Guides', href: '/blog' },
      { name: 'Ultimate Guide', href: '/ultimate-guide-not-buying-stolen' }
    ],
    '/comprehensive-guide': [
      { name: 'Guides', href: '/blog' },
      { name: 'Comprehensive Guide', href: '/comprehensive-guide' }
    ],
    '/how-to-check-if-item-stolen': [
      { name: 'Guides', href: '/blog' },
      { name: 'Check If Item Stolen', href: '/how-to-check-if-item-stolen' }
    ],
    '/how-to-check-laptop-stolen': [
      { name: 'Guides', href: '/blog' },
      { name: 'Check Laptop Stolen', href: '/how-to-check-laptop-stolen' }
    ],
    '/buyer-guide': [
      { name: 'Guides', href: '/blog' },
      { name: 'Buyer Guide', href: '/buyer-guide' }
    ],
    '/seller-guide': [
      { name: 'Guides', href: '/blog' },
      { name: 'Seller Guide', href: '/seller-guide' }
    ],
    '/avoid-stolen-goods': [
      { name: 'Guides', href: '/blog' },
      { name: 'Avoid Stolen Goods', href: '/avoid-stolen-goods' }
    ],
    '/buy-used-electronics-safely': [
      { name: 'Guides', href: '/blog' },
      { name: 'Buy Electronics Safely', href: '/buy-used-electronics-safely' }
    ],
    
    // Competitor Comparisons
    '/safeorstolen-vs-carfax': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs Carfax', href: '/safeorstolen-vs-carfax' }
    ],
    '/safeorstolen-vs-checkmend': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs CheckMEND', href: '/safeorstolen-vs-checkmend' }
    ],
    '/safeorstolen-vs-ebay': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs eBay', href: '/safeorstolen-vs-ebay' }
    ],
    '/safeorstolen-vs-greyscout': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs GreyScout', href: '/safeorstolen-vs-greyscout' }
    ],
    '/safeorstolen-vs-imeiinfo': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs IMEI.info', href: '/safeorstolen-vs-imeiinfo' }
    ],
    '/safeorstolen-vs-imeipro': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs IMEIpro', href: '/safeorstolen-vs-imeipro' }
    ],
    '/safeorstolen-vs-swappa': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs Swappa', href: '/safeorstolen-vs-swappa' }
    ],
    '/competitor-alternatives': [
      { name: 'Comparisons', href: '/competitor-alternatives' }
    ],
    
    // Business Pages
    '/enterprise-demo': [
      { name: 'Business', href: '/for-businesses' },
      { name: 'Business Solutions', href: '/for-businesses' }
    ],
    '/marketplace': [
      { name: 'Business', href: '/for-businesses' },
      { name: 'For Marketplaces', href: '/for-marketplaces' }
    ],
    '/integrations': [
      { name: 'Business', href: '/for-businesses' },
      { name: 'Integrations', href: '/for-businesses' }
    ],
    '/api-docs': [
      { name: 'Business', href: '/for-businesses' },
      { name: 'API Documentation', href: '/for-businesses' }
    ],
    '/partnerships': [
      { name: 'Business', href: '/for-businesses' },
      { name: 'Partnerships', href: '/for-businesses' }
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
