# Backend Integration Guide

Complete guide for using all backend components, APIs, services, and edge functions in SafeOrStolen.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Supabase Integration](#supabase-integration)
3. [Edge Functions](#edge-functions)
4. [Services](#services)
5. [Custom Hooks](#custom-hooks)
6. [API Utilities](#api-utilities)
7. [Authentication](#authentication)
8. [Examples](#examples)

## Quick Start

### Import Everything You Need

```typescript
// Core API functionality
import { supabase, EdgeFunctions, invokeEdgeFunction } from '@/core/api';

// All services
import { aiService, pwaService, securityService } from '@/services';

// All hooks
import { 
  useUnifiedAuth, 
  useSubscription, 
  useSearchLimits,
  useEnhancedSecurity 
} from '@/hooks';

// Utilities
import { validateSerialNumber, sanitizeInput } from '@/utils/inputValidation';
```

## Supabase Integration

### Direct Client Access

```typescript
import { supabase } from '@/integrations/supabase/client';

// Query data
const { data, error } = await supabase
  .from('profiles')
  .select('*')
  .eq('id', userId);

// Insert data
const { data, error } = await supabase
  .from('verification_items')
  .insert({ serial_number: '123', status: 'verified' });
```

### Type-Safe Queries

```typescript
import type { Database } from '@/integrations/supabase/types';

type Profile = Database['public']['Tables']['profiles']['Row'];
```

## Edge Functions

### Available Edge Functions

```typescript
import { EdgeFunctions, invokeEdgeFunction } from '@/integrations';

// Payment Functions
EdgeFunctions.createCheckout
EdgeFunctions.checkSubscription
EdgeFunctions.customerPortal
EdgeFunctions.stripeWebhook

// Verification Functions
EdgeFunctions.verifyFirearm
EdgeFunctions.verifyCheckmend
EdgeFunctions.verifyClaudeAnalysis
EdgeFunctions.enhancedVerification

// API Functions
EdgeFunctions.apiV1Check
EdgeFunctions.enterpriseApi

// Integration Functions
EdgeFunctions.marketplaceIntegration

// SEO Functions
EdgeFunctions.sitemapXml
EdgeFunctions.aiCompetitorAnalysis
EdgeFunctions.aiContentOptimizer
EdgeFunctions.aiRankingAnalyzer
```

### Calling Edge Functions

```typescript
import { invokeEdgeFunction } from '@/integrations';

// Simple invocation
const result = await invokeEdgeFunction('create-checkout', {
  priceId: 'price_123',
  userId: 'user_456'
});

// Using EdgeFunctions enum
const result = await invokeEdgeFunction(EdgeFunctions.createCheckout, {
  priceId: 'price_123',
  userId: 'user_456'
});

// With type safety
interface CheckoutResponse {
  url: string;
  sessionId: string;
}

const { data, error } = await invokeEdgeFunction<CheckoutResponse>(
  'create-checkout',
  { priceId: 'price_123' }
);

if (data) {
  console.log('Checkout URL:', data.url);
}
```

## Services

### AI Service

```typescript
import { aiService } from '@/services';

// Analyze verification
const analysis = await aiService.analyzeVerification({
  serialNumber: 'ABC123',
  itemType: 'phone',
  category: 'electronics'
});

console.log('Risk Score:', analysis.riskScore);
console.log('Recommendations:', analysis.recommendations);

// Generate content
const content = await aiService.generateContent({
  product: { name: 'iPhone 13', category: 'electronics' },
  verification: { status: 'verified' }
});

// Chat interface
const response = await aiService.chat('Is this item safe to buy?', [
  { role: 'user', content: 'Previous message' }
]);
```

### PWA Service

```typescript
import { pwaService } from '@/services';

// Initialize database
await pwaService.initDB();

// Cache verification
await pwaService.cacheVerification('ABC123', { status: 'verified' });

// Get cached data
const cached = await pwaService.getCachedVerification('ABC123');

// Clear old cache
await pwaService.clearOldCache();
```

### Security Service

```typescript
import { securityService } from '@/services';

// Initialize security checks
securityService.initialize();

// Get security metrics
const metrics = securityService.getSecurityMetrics();
console.log('Secure Context:', metrics.secureContext);
console.log('Certificate Valid:', metrics.certificateValid);
```

## Custom Hooks

### Authentication Hooks

```typescript
import { useUnifiedAuth } from '@/hooks';

function MyComponent() {
  const { 
    user, 
    session, 
    loading, 
    isAuthenticated,
    signIn,
    signOut 
  } = useUnifiedAuth();

  const handleSignIn = async () => {
    await signIn('email@example.com', 'password');
  };

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome {user?.email}</p>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
}
```

### Subscription Hooks

```typescript
import { useEnhancedSubscription } from '@/hooks';

function SubscriptionComponent() {
  const {
    subscriptionData,
    isLoading,
    createSubscriptionCheckout,
    openCustomerPortal,
    refreshSubscription
  } = useEnhancedSubscription();

  const handleUpgrade = async () => {
    const checkoutUrl = await createSubscriptionCheckout('price_123');
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  return (
    <div>
      <p>Plan: {subscriptionData?.planName}</p>
      <button onClick={handleUpgrade}>Upgrade</button>
      <button onClick={openCustomerPortal}>Manage Billing</button>
    </div>
  );
}
```

### Search Limits Hook

```typescript
import { useEnhancedSearchLimits } from '@/hooks';

function SearchComponent() {
  const {
    limitsData,
    consumeSearch,
    isLoading
  } = useEnhancedSearchLimits();

  const handleSearch = async () => {
    const allowed = await consumeSearch();
    if (allowed) {
      // Perform search
    } else {
      alert(`Search limit reached. ${limitsData.remaining} searches remaining.`);
    }
  };

  return (
    <div>
      <p>Searches: {limitsData.used} / {limitsData.limit}</p>
      <button onClick={handleSearch} disabled={limitsData.remaining === 0}>
        Search
      </button>
    </div>
  );
}
```

### Security Hook

```typescript
import { useEnhancedSecurity } from '@/hooks';

function SecurityComponent() {
  const {
    securityStatus,
    checkAdminRole,
    validateAccess,
    isLoading
  } = useEnhancedSecurity();

  return (
    <div>
      <p>Security Level: {securityStatus.level}</p>
      <p>Is Admin: {securityStatus.isAdmin ? 'Yes' : 'No'}</p>
      <p>2FA Enabled: {securityStatus.twoFactorEnabled ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

## API Utilities

### Input Validation

```typescript
import { 
  validateSerialNumber, 
  validateEmail,
  sanitizeInput 
} from '@/utils/inputValidation';

// Validate serial number
const result = validateSerialNumber('ABC-123-DEF');
if (result.isValid) {
  console.log('Valid serial number');
} else {
  console.error('Error:', result.error);
}

// Validate email
const emailResult = validateEmail('user@example.com');

// Sanitize input
const clean = sanitizeInput('User <script>alert("xss")</script> Input');
```

### Security Audit

```typescript
import { 
  logEnhancedSecurityEvent,
  detectSuspiciousActivity,
  enhancedInputSanitization 
} from '@/utils/enhancedSecurityAudit';

// Log security event
await logEnhancedSecurityEvent({
  type: 'login',
  severity: 'info',
  description: 'User logged in successfully'
});

// Detect suspicious patterns
const isSuspicious = detectSuspiciousActivity(userInput);

// Sanitize with enhanced security
const sanitized = enhancedInputSanitization(userInput);
```

### Analytics

```typescript
import { 
  trackPageView,
  trackEvent,
  trackSearch,
  trackVerificationPurchase 
} from '@/utils/analytics';

// Track page view
trackPageView('HomePage');

// Track custom event
trackEvent('button_click', { 
  button_name: 'sign_up',
  page: 'landing' 
});

// Track search
trackSearch('ABC123', 'phone', 5);

// Track purchase
trackVerificationPurchase('ABC123', 9.99, 'USD');
```

## Authentication

### Complete Auth Flow

```typescript
import { useAuth } from '@/lib/auth';

function AuthExample() {
  const { user, session, signIn, signUp, signOut, resetPassword } = useAuth();

  // Sign in
  const handleSignIn = async (email: string, password: string) => {
    const result = await signIn(email, password);
    if (result.success) {
      console.log('Signed in successfully');
    } else {
      console.error('Error:', result.error);
    }
  };

  // Sign up
  const handleSignUp = async (email: string, password: string, name: string) => {
    const result = await signUp(email, password, name);
    if (result.success) {
      console.log('Account created');
    }
  };

  // Sign out
  const handleSignOut = async () => {
    await signOut();
  };

  // Reset password
  const handleReset = async (email: string) => {
    const result = await resetPassword(email);
    if (result.success) {
      console.log('Reset email sent');
    }
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome {user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => handleSignIn('test@example.com', 'password')}>
          Sign In
        </button>
      )}
    </div>
  );
}
```

## Examples

### Complete Verification Flow

```typescript
import { supabase } from '@/integrations/supabase/client';
import { useEnhancedSearchLimits } from '@/hooks';
import { validateSerialNumber } from '@/utils/inputValidation';
import { trackSearch } from '@/utils/analytics';
import { aiService } from '@/services';

function VerificationFlow() {
  const { consumeSearch } = useEnhancedSearchLimits();

  const performVerification = async (serialNumber: string) => {
    // 1. Validate input
    const validation = validateSerialNumber(serialNumber);
    if (!validation.isValid) {
      throw new Error(validation.error);
    }

    // 2. Check search limits
    const allowed = await consumeSearch();
    if (!allowed) {
      throw new Error('Search limit exceeded');
    }

    // 3. Query database
    const { data, error } = await supabase
      .from('verification_items')
      .select('*')
      .eq('identifier', serialNumber)
      .single();

    // 4. AI analysis
    const analysis = await aiService.analyzeVerification({
      serialNumber,
      itemType: 'phone',
      category: 'electronics'
    });

    // 5. Track analytics
    trackSearch(serialNumber, 'phone', data ? 1 : 0);

    return {
      verification: data,
      analysis
    };
  };

  return <div>Verification Component</div>;
}
```

### Payment Integration

```typescript
import { invokeEdgeFunction } from '@/integrations';
import { useEnhancedSubscription } from '@/hooks';
import { trackEvent } from '@/utils/analytics';

function PaymentFlow() {
  const { createSubscriptionCheckout } = useEnhancedSubscription();

  const handlePurchase = async (priceId: string) => {
    try {
      // Track intent
      trackEvent('checkout_started', { priceId });

      // Create checkout session
      const checkoutUrl = await createSubscriptionCheckout(priceId);
      
      if (checkoutUrl) {
        // Redirect to Stripe
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error('Payment failed:', error);
      trackEvent('checkout_failed', { error: error.message });
    }
  };

  return (
    <button onClick={() => handlePurchase('price_123')}>
      Subscribe Now
    </button>
  );
}
```

## Best Practices

1. **Always validate user input** before sending to backend
2. **Use type-safe queries** with TypeScript
3. **Handle errors gracefully** with try-catch blocks
4. **Track important events** for analytics
5. **Use hooks for state management** instead of direct API calls
6. **Cache data** when appropriate with PWA service
7. **Log security events** for audit trail
8. **Test edge functions** locally before deployment

## Troubleshooting

### Common Issues

**Edge Function Not Found**
```typescript
// Wrong
await supabase.functions.invoke('nonexistent-function');

// Correct
import { EdgeFunctions } from '@/integrations';
await supabase.functions.invoke(EdgeFunctions.createCheckout);
```

**Authentication Errors**
```typescript
// Always check auth state before operations
const { session } = useUnifiedAuth();
if (!session) {
  return <div>Please sign in</div>;
}
```

**Rate Limiting**
```typescript
// Always check limits before operations
const { consumeSearch } = useEnhancedSearchLimits();
const allowed = await consumeSearch();
if (!allowed) {
  // Handle limit exceeded
}
```

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Edge Functions Guide](https://supabase.com/docs/guides/functions)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [React Hooks Guide](https://react.dev/reference/react)
