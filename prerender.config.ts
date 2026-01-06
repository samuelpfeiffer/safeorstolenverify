// Prerender configuration for bot-friendly static HTML generation
// Only includes VALID routes that exist in AppRoutes.tsx
// Updated January 2026 to include all 50 state license plate pages
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
  
  // Top state VIN pages (10 kept with unique content)
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
  
  // All 50 state license plate pages (GSC noindex fix - January 2026)
  '/alabama-license-plate-lookup',
  '/alaska-license-plate-lookup',
  '/arizona-license-plate-lookup',
  '/arkansas-license-plate-lookup',
  '/california-license-plate-lookup',
  '/colorado-license-plate-lookup',
  '/connecticut-license-plate-lookup',
  '/delaware-license-plate-lookup',
  '/florida-license-plate-lookup',
  '/georgia-license-plate-lookup',
  '/hawaii-license-plate-lookup',
  '/idaho-license-plate-lookup',
  '/illinois-license-plate-lookup',
  '/indiana-license-plate-lookup',
  '/iowa-license-plate-lookup',
  '/kansas-license-plate-lookup',
  '/kentucky-license-plate-lookup',
  '/louisiana-license-plate-lookup',
  '/maine-license-plate-lookup',
  '/maryland-license-plate-lookup',
  '/massachusetts-license-plate-lookup',
  '/michigan-license-plate-lookup',
  '/minnesota-license-plate-lookup',
  '/mississippi-license-plate-lookup',
  '/missouri-license-plate-lookup',
  '/montana-license-plate-lookup',
  '/nebraska-license-plate-lookup',
  '/nevada-license-plate-lookup',
  '/new-hampshire-license-plate-lookup',
  '/new-jersey-license-plate-lookup',
  '/new-mexico-license-plate-lookup',
  '/new-york-license-plate-lookup',
  '/north-carolina-license-plate-lookup',
  '/north-dakota-license-plate-lookup',
  '/ohio-license-plate-lookup',
  '/oklahoma-license-plate-lookup',
  '/oregon-license-plate-lookup',
  '/pennsylvania-license-plate-lookup',
  '/rhode-island-license-plate-lookup',
  '/south-carolina-license-plate-lookup',
  '/south-dakota-license-plate-lookup',
  '/tennessee-license-plate-lookup',
  '/texas-license-plate-lookup',
  '/utah-license-plate-lookup',
  '/vermont-license-plate-lookup',
  '/virginia-license-plate-lookup',
  '/washington-license-plate-lookup',
  '/west-virginia-license-plate-lookup',
  '/wisconsin-license-plate-lookup',
  '/wyoming-license-plate-lookup',
  
  // Mobile pages (now indexed - January 2026)
  '/mobile-verify',
  '/mobile-dashboard',
  '/mobile-settings',
  
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
