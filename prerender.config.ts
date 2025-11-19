// Prerender configuration for bot-friendly static HTML generation
export const prerenderRoutes = [
  // Tier 1: Critical pages
  '/',
  '/verify',
  
  // Tier 2: High-value pages
  '/install-app',
  '/mobile-app',
  '/check-phone',
  '/check-car',
  '/check-electronics',
  '/check-bike',
  '/crime-prevention-impact',
  
  // Tier 3: Important conversion pages
  '/pricing',
  '/how-it-works',
  '/firearms-check',
  '/for-businesses',
  '/fastercapital/raise-capital',
  
  // Statistics & Data Pages
  '/statistics/stolen-goods',
  
  // Marketplace Guides (CRITICAL - Fix Soft 404)
  '/guides/ebay-buyer-protection',
  '/guides/offerup-verification',
  '/guides/pawnshop-buying-tips',
  '/guides/auction-house-safety',
  '/guides/check-facebook-marketplace-items',
  '/guides/verify-craigslist-items',
  '/guides/offerup-scam-protection',
  
  // Mobile App Comparison Pages
  '/mobile-app/vs-carfax',
  '/mobile-app/vs-checkmend',
  '/mobile-app/vs-autocheck',
  
  // Top state pages (VIN + License Plate)
  '/arizona-vin-lookup',
  '/arizona-license-plate-lookup',
  '/california-vin-lookup',
  '/california-license-plate-lookup',
  '/texas-vin-lookup',
  '/texas-license-plate-lookup',
  '/florida-vin-lookup',
  '/florida-license-plate-lookup',
  '/new-york-vin-lookup',
  '/new-york-license-plate-lookup',
  '/utah-vin-lookup',
  '/virginia-vin-lookup',
  '/wyoming-vin-lookup',
  '/wisconsin-vin-lookup',
  '/washington-vin-lookup',
  '/south-dakota-vin-lookup',
  
  // International pages
  '/uk-vehicle-check',
  '/canada-vin-lookup',
  '/australia-vehicle-check',
  
  // Comparison pages
  '/comparison-checkmend',
  '/competitor-alternatives',
  
  // Blog (CRITICAL - Fix Soft 404)
  '/blog',
  '/blog/facebook-marketplace-safety',
  
  // Legal
  '/terms',
  '/privacy',
  '/transparency'
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
