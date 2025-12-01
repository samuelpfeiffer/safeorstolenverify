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
  
  // SEO Functions
  indexnowSubmit: 'indexnow-submit',
  batchIndexAllUrls: 'batch-index-all-urls',
  
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
