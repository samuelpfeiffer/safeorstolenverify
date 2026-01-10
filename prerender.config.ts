// Prerender configuration for bot-friendly static HTML generation
// Only includes VALID routes that exist in AppRoutes.tsx
export const prerenderRoutes = [
  // Tier 1: Critical pages
  '/',
  '/verify',
  '/app',
  '/download',
  '/pricing',
  
  // Tier 2: High-value landing pages
  '/imei-checker',
  '/vin-checker',
  '/serial-number-checker',
  '/check-phone',
  '/check-car',
  '/check-bike',
  '/check-laptop',
  '/check-electronics',
  '/firearms-check',
  '/license-plate-lookup',
  
  // Tier 3: Important informational pages
  '/how-it-works',
  '/about',
  '/faq',
  '/for-businesses',
  '/for-pawn-shops',
  '/for-dealers',
  
  // Comparison pages
  '/compare',
  '/vs-checkmend',
  '/vs-imeiinfo',
  '/vs-swappa',
  '/vs-carfax',
  '/vs-autocheck',
  
  // Top state VIN pages
  '/california-vin-lookup',
  '/texas-vin-lookup',
  '/florida-vin-lookup',
  '/new-york-vin-lookup',
  '/illinois-vin-lookup',
  '/georgia-vin-lookup',
  '/pennsylvania-vin-lookup',
  '/ohio-vin-lookup',
  '/north-carolina-vin-lookup',
  '/washington-vin-lookup',
  
  // Blog
  '/blog',
  '/blog/how-to-check-if-phone-stolen',
  '/blog/complete-vin-guide',
  '/blog/facebook-marketplace-scams',
  '/blog/how-to-check-if-iphone-stolen',
  
  // Legal
  '/terms',
  '/privacy',
];

export const botUserAgents = [
  'googlebot',
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'whatsapp',
  'slackbot',
  'telegrambot'
];
