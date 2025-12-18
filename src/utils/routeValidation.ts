// Route validation utility to check for valid pages
export const validateRoutes = () => {
  const routes = [
    '/',
    '/auth',
    '/verify',  
    '/pricing',
    '/about',
    '/faq',
    '/terms',
    '/privacy',
    '/blog',
    '/how-it-works',
    '/for-brands',
    '/for-businesses',
    '/for-marketplaces',
    '/for-pawn-shops',
    '/cookies',
    '/refunds',
    '/referral',
    '/api-docs',
    '/sitemap',
    '/community',
    '/case-studies',
    '/trust-verification',
    '/data-sources',
    '/transparency',
    '/accuracy',
    '/ultimate-guide',
    '/auction-houses',
    '/check-if-stolen',
    '/avoid-stolen-goods',
    '/comprehensive-guide',
    '/partnerships',
    '/fastercapital/raise-capital',
    '/firearms-check',
    '/check-car',
    '/check-electronics',
    '/check-bike',
    '/check-phone',
    '/problem',
    '/community-watch',
    '/resource-center',
    '/database',
    '/app',
    '/dashboard',
    '/account',
    '/imei-checker',
    '/vin-checker',
    '/serial-number-checker',
    '/report-stolen',
  ];

  return routes;
};

export const logRouteTest = (route: string, status: 'pass' | 'fail', error?: string) => {
  console.log(`🧪 Route Test: ${route} - ${status === 'pass' ? '✅' : '❌'} ${error ? `(${error})` : ''}`);
};
