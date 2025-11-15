/**
 * Integrations Index
 * Central export point for all external integrations
 */

// Supabase Integration
export { supabase } from './supabase/client';
export type { Database } from './supabase/types';

// Edge Functions Helper
export const EdgeFunctions = {
  // Payment Functions
  createCheckout: 'create-checkout',
  checkSubscription: 'check-subscription',
  customerPortal: 'customer-portal',
  stripeWebhook: 'stripe-webhook',
  
  // Verification Functions
  verifyFirearm: 'verify-firearm-hotgunz',
  verifyCheckmend: 'verify-checkmend',
  verifyClaudeAnalysis: 'verify-claude-analysis',
  enhancedVerification: 'enhanced-verification',
  
  // External Source Scrapers
  stolenRegisterCheck: 'stolen-register-check',
  stolen911Check: 'stolen911-check',
  stolenPropertyCheck: 'stolen-property-check',
  stolenlostfoundCheck: 'stolenlostfound-check',
  bikeIndexApi: 'bike-index-api',
  webScraperVerification: 'web-scraper-verification',
  
  // API Functions
  apiV1Check: 'api-v1-check',
  enterpriseApi: 'enterprise-api',
  
  // Integration Functions
  marketplaceIntegration: 'marketplace-integration',
  
  // SEO Functions
  sitemapXml: 'sitemap-xml',
  aiCompetitorAnalysis: 'ai-competitor-analysis',
  aiContentOptimizer: 'ai-content-optimizer',
  aiRankingAnalyzer: 'ai-ranking-analyzer',
  
  // AI Parsing Functions
  aiHtmlParser: 'ai-html-parser',
} as const;

/**
 * Helper function to invoke edge functions
 */
export const invokeEdgeFunction = async <T = any>(
  functionName: keyof typeof EdgeFunctions | string,
  body?: Record<string, any>
) => {
  const { supabase } = await import('./supabase/client');
  
  const funcName = typeof functionName === 'string' 
    ? functionName 
    : EdgeFunctions[functionName];
  
  return await supabase.functions.invoke<T>(funcName, {
    body: body || {},
  });
};
