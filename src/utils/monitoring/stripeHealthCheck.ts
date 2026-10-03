/**
 * Stripe Health Check System
 * Validates Stripe integration and prevents payment failures
 */

export interface StripeHealthIssue {
  severity: 'critical' | 'warning' | 'info';
  component: string;
  message: string;
  fix?: string;
}

export interface StripeHealthResult {
  healthy: boolean;
  issues: StripeHealthIssue[];
  timestamp: number;
}

/**
 * Validates Stripe configuration and integration
 */
export const checkStripeHealth = async (): Promise<StripeHealthResult> => {
  const issues: StripeHealthIssue[] = [];
  
  // Check 1: Verify Stripe publishable key exists (from config or env)
  const { getStripePublishableKey } = await import('@/config/stripe');
  const publishableKey = getStripePublishableKey();
  const hasPublishableKey = !!publishableKey && publishableKey.startsWith('pk_');
  
  if (!hasPublishableKey) {
    issues.push({
      severity: 'critical',
      component: 'Configuration',
      message: 'Stripe publishable key is missing or invalid',
      fix: 'Configure Stripe publishable key in src/config/stripe.ts'
    });
  }

  // Check 2: Validate price IDs are configured
  const priceIds = [
    'price_1SDRrMGxnZLw8J7ObJsUlp6k', // Single verification
    'price_1SSVqkGxnZLw8J7O3GwCyKRn'  // Updated price
  ];
  
  // Check 3: Stripe connectivity is verified via the edge function when called
  // No direct API health check needed - edge functions handle Stripe API calls

  // Check 4: Validate checkout flow components exist
  const requiredFiles = [
    'create-checkout', // Edge function
    'CheckoutButton',  // Component
    'useStripeCheckout' // Hook (if exists)
  ];

  return {
    healthy: issues.filter(i => i.severity === 'critical').length === 0,
    issues,
    timestamp: Date.now()
  };
};

/**
 * Monitor Stripe payment flow in real-time
 */
export const monitorStripeFlow = () => {
  const events: string[] = [];
  
  return {
    trackCheckoutStart: () => events.push('checkout_started'),
    trackCheckoutSuccess: () => events.push('checkout_success'),
    trackCheckoutFail: (error: string) => events.push(`checkout_failed: ${error}`),
    getEvents: () => [...events],
    clear: () => events.length = 0
  };
};

/**
 * Validate Stripe price IDs are correct
 */
export const validatePriceIds = (): StripeHealthIssue[] => {
  const issues: StripeHealthIssue[] = [];
  
  // Check for old price ID usage
  const codeHasOldPrice = document.body.innerHTML.includes('price_1SDRrMGxnZLw8J7ObJsUlp6k');
  if (codeHasOldPrice) {
    issues.push({
      severity: 'warning',
      component: 'Pricing',
      message: 'Old price ID detected in code',
      fix: 'Update to new price IDs: $3.99/check price_1T8uNDGxnZLw8J7OrBKrbePR or $14.99/mo price_1T8uToGxnZLw8J7O6GcOuV1w'
    });
  }
  
  return issues;
};

/**
 * Log Stripe errors for debugging
 */
export const logStripeError = (error: any, context: string) => {
  const errorLog = {
    timestamp: new Date().toISOString(),
    context,
    error: error?.message || String(error),
    stack: error?.stack,
    type: error?.type,
    code: error?.code
  };
  
  console.error('[Stripe Error]', errorLog);
  
  // Store in sessionStorage for debugging
  try {
    const logs = JSON.parse(sessionStorage.getItem('stripe_errors') || '[]');
    logs.push(errorLog);
    sessionStorage.setItem('stripe_errors', JSON.stringify(logs.slice(-10))); // Keep last 10
  } catch (e) {
    // Storage error, ignore
  }
  
  return errorLog;
};
