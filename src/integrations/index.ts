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
  universalStateLookup: 'universal-state-lookup',
  nicbVincheck: 'nicb-vincheck',
  
  // API Functions
  apiV1Check: 'api-v1-check',
  apiVerify: 'api-verify',
  enterpriseApi: 'enterprise-api',
  consumeCredit: 'consume-credit',
  
  // Integration Functions
  marketplaceIntegration: 'marketplace-integration',
  
  // SEO Functions
  sitemapXml: 'sitemap-xml',
  indexnowSubmit: 'indexnow-submit',
  
  // Widget Functions
  badgeWidget: 'badge-widget',
  
  // Notification Functions
  sendStolenItemAlert: 'send-stolen-item-alert',
  sendStolenAlertEmail: 'send-stolen-alert-email',
  processStolenNotifications: 'process-stolen-notifications',
  
  // GSC Integration
  gscApi: 'gsc-api',
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
