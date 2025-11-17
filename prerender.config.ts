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
  
  // Top state pages (sample)
  '/arizona-vin-lookup',
  '/california-vin-lookup',
  '/texas-vin-lookup',
  '/florida-vin-lookup',
  '/new-york-vin-lookup',
  
  // International pages
  '/uk-vehicle-check',
  '/canada-vin-lookup',
  '/australia-vehicle-check',
  
  // Comparison pages
  '/comparison-checkmend',
  '/competitor-alternatives',
  
  // Blog
  '/blog',
  
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
