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
    '/faq': [{ name: 'FAQ', href: '/faq' }],
    '/pricing': [{ name: 'Pricing', href: '/pricing' }],
    '/how-it-works': [{ name: 'How It Works', href: '/how-it-works' }],
    '/for-businesses': [{ name: 'For Business', href: '/for-businesses' }],
    '/terms': [{ name: 'Terms', href: '/terms' }],
    '/privacy': [{ name: 'Privacy', href: '/privacy' }],
    
    // Verification Tools
    '/verify': [{ name: 'Verify Item', href: '/verify' }],
    '/check-phone': [{ name: 'Check Phone', href: '/check-phone' }],
    '/vin-checker': [{ name: 'Check Car', href: '/vin-checker' }],
    '/check-bike': [{ name: 'Check Bike', href: '/check-bike' }],
    '/check-electronics': [{ name: 'Check Electronics', href: '/check-electronics' }],
    '/imei-checker': [{ name: 'IMEI Checker', href: '/imei-checker' }],
    '/serial-number-checker': [{ name: 'Serial Number Checker', href: '/serial-number-checker' }],
    '/firearms-check': [{ name: 'Firearms Check', href: '/firearms-check' }],
    
    // Blog
    '/blog': [{ name: 'Blog', href: '/blog' }],
    
    // Guides - redirect to blog
    '/blog/complete-verification-guide': [
      { name: 'Blog', href: '/blog' },
      { name: 'Complete Verification Guide', href: '/blog/complete-verification-guide' }
    ],
    '/blog/how-to-check-if-phone-stolen': [
      { name: 'Blog', href: '/blog' },
      { name: 'Phone Verification Guide', href: '/blog/how-to-check-if-phone-stolen' }
    ],
    '/blog/complete-vin-guide': [
      { name: 'Blog', href: '/blog' },
      { name: 'VIN Guide', href: '/blog/complete-vin-guide' }
    ],
    '/blog/protect-yourself-buying-used-electronics': [
      { name: 'Blog', href: '/blog' },
      { name: 'Electronics Safety', href: '/blog/protect-yourself-buying-used-electronics' }
    ],
    
    // Competitor Comparisons
    '/vs-carfax': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs Carfax', href: '/vs-carfax' }
    ],
    '/vs-checkmend': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs other services', href: '/vs-other-services' }
    ],
    '/vs-imeiinfo': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs IMEI.info', href: '/vs-imeiinfo' }
    ],
    '/vs-swappa': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs Swappa', href: '/vs-swappa' }
    ],
    '/vs-autocheck': [
      { name: 'Comparisons', href: '/compare' },
      { name: 'vs AutoCheck', href: '/vs-autocheck' }
    ],
    
    // Business Pages
    '/for-pawn-shops': [
      { name: 'Business', href: '/for-businesses' },
      { name: 'For Pawn Shops', href: '/for-pawn-shops' }
    ],
    '/for-dealers': [
      { name: 'Business', href: '/for-businesses' },
      { name: 'For Dealers', href: '/for-dealers' }
    ],
    '/for-marketplaces': [
      { name: 'Business', href: '/for-businesses' },
      { name: 'For Marketplaces', href: '/for-marketplaces' }
    ],
    '/for-auction-houses': [
      { name: 'Business', href: '/for-businesses' },
      { name: 'For Auction Houses', href: '/for-auction-houses' }
    ],
    
    // Press Kit
    '/press-kit': [
      { name: 'Press', href: '/press-kit' }
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
      { name: 'VIN Checker', href: '/vin-checker' },
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
  if (pathname.startsWith('/check-') || pathname === '/verify') {
    return 'verification-tools';
  }
  if (pathname.includes('-vin-lookup') || pathname.includes('-vin-check')) {
    return 'regional-vin';
  }
  if (pathname.startsWith('/blog')) return 'blog';
  if (pathname.startsWith('/vs-') || pathname === '/compare') {
    return 'comparisons';
  }
  if (['/for-businesses', '/for-pawn-shops', '/for-dealers', '/for-marketplaces', '/for-auction-houses'].includes(pathname)) {
    return 'business';
  }
  if (['/about'].includes(pathname)) {
    return 'company';
  }
  if (pathname.startsWith('/blog/') && pathname !== '/blog') {
    return 'guides';
  }
  
  return 'other';
};
