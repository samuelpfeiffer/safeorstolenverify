# Edge Functions Security Documentation

This document explains the authentication and security model for each edge function.

## 🔒 Authentication Status

### ✅ Protected Functions (JWT Required)

These functions require valid JWT authentication (`verify_jwt = true`):

- **Payment Functions**: `create-checkout`, `check-subscription`, `customer-portal`, `consume-credit`
- **AI Functions**: All AI-related functions (ai-competitor-analysis, ai-content-optimizer, ai-ranking-analyzer, ai-seo-optimizer, ai-performance-analyzer, ai-ad-optimizer, ai-seo-domination, ai-site-optimizer, ai-ceo, ai-coo, ai-cfo, ai-cmo, ai-cto, ai-executive-orchestrator, autonomous-error-fixer, autonomous-seo-optimizer, autonomous-health-monitor)
- **External API Functions**: `arizona-theft-lookup`, `nicb-vincheck`, `gsma-device-check`, `immobilize-lookup`, `carfax-vin-lookup`, `imei-info-lookup`
- **Marketplace**: `marketplace-sync`

**Security**: Users must be authenticated with valid Supabase session. JWT is automatically validated by Supabase.

---

### ⚠️ Public Functions (Alternative Authentication)

These functions don't require JWT but have alternative security measures:

#### 1. **api-verify** (Public with API Key Auth)
- **Authentication**: Custom API key validation
- **Security**: 
  - Validates API keys against `external_api_keys` table
  - Tracks usage and enforces rate limits
  - Logs all access attempts
- **Why Public**: External partners need programmatic access

#### 2. **stripe-webhook** (Public with Signature Verification)
- **Authentication**: Stripe webhook signature validation
- **Security**: 
  - Verifies Stripe-Signature header
  - Uses `STRIPE_WEBHOOK_SECRET` for validation
  - Only processes valid Stripe events
- **Why Public**: Stripe sends events to this endpoint

#### 3. **api-v1-check** (Public API Endpoint)
- **Authentication**: None (guest access allowed)
- **Security**:
  - Rate limiting via IP tracking
  - Input validation and sanitization
  - Limited to read-only verification checks
  - No sensitive data exposure
- **Why Public**: Allows guest users to check items before signup
- **⚠️ TODO**: Add rate limiting based on IP address

---

### 📋 Verification Functions (Require Review)

These functions are currently public and should be reviewed:

#### 4. **verify-firearm-hotgunz** (Public)
- **Current Status**: No authentication required
- **TODO**: 
  - Add JWT authentication OR
  - Implement custom API key validation
  - Add rate limiting
- **Recommendation**: Require authentication - firearm data is sensitive

#### 5. **verify-checkmend** (Public)
- **Current Status**: No authentication required
- **TODO**:
  - Add JWT authentication OR
  - Implement custom API key validation
  - Add rate limiting
- **Recommendation**: Require authentication - uses external paid API

#### 6. **verify-claude-analysis** (Public)
- **Current Status**: No authentication required
- **Uses**: OpenAI/Claude API (costs money)
- **TODO**:
  - Add JWT authentication immediately
  - Add usage tracking
- **Recommendation**: **URGENT** - Costs per request, should require auth

#### 7. **enhanced-verification** (Public)
- **Current Status**: No authentication required
- **TODO**:
  - Add JWT authentication
  - Implement request validation
- **Recommendation**: Require authentication

---

### 🏢 Business Functions (Require Review)

#### 8. **enterprise-api** (Public)
- **Current Status**: No authentication required
- **Concern**: Name suggests it should be protected
- **TODO**:
  - Review if this should be public
  - If public: Add API key authentication like api-verify
  - If private: Add JWT requirement
- **Recommendation**: **Review immediately** - likely needs protection

#### 9. **marketplace-integration** (Public - config says JWT required)
- **Status**: Configuration shows `verify_jwt = true` but listed as concern
- **Action**: Verify configuration is correct and deployed

---

### 🔧 Utility Functions (Legitimately Public)

These functions are intentionally public:

#### 10. **sitemap-xml** (Public)
- **Purpose**: SEO sitemap generation
- **Security**: Read-only, no sensitive data
- **Why Public**: Search engines need access

#### 11. **badge-widget** (Public)
- **Purpose**: Embeddable verification badge for websites
- **Security**: Read-only, displays public verification status
- **Why Public**: Third-party sites embed this widget

#### 12. **database-optimizer** (Public)
- **Current Status**: No authentication required
- **Concern**: Could trigger expensive database operations
- **TODO**:
  - Add authentication (JWT or internal secret)
  - Implement request throttling
- **Recommendation**: Protect this function

#### 13. **enrich-blog-content** (Public)
- **Current Status**: No authentication required
- **TODO**: Add JWT authentication or scheduled job trigger
- **Recommendation**: Should not be publicly callable

#### 14. **schedule-blog-enrichment** (Public)
- **Current Status**: No authentication required
- **TODO**: Add JWT authentication or scheduled job trigger
- **Recommendation**: Should not be publicly callable

---

## 🛠️ How to Secure a Function

### Option 1: Add JWT Authentication (Recommended)

Edit `supabase/config.toml`:
```toml
[functions.your-function-name]
verify_jwt = true
```

Then in your function, access the authenticated user:
```typescript
const authHeader = req.headers.get('Authorization');
const token = authHeader?.replace('Bearer ', '');

// Create authenticated Supabase client
const supabaseClient = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
);

// Get user
const { data: { user } } = await supabaseClient.auth.getUser();
if (!user) {
  return new Response(JSON.stringify({ error: 'Unauthorized' }), {
    status: 401,
    headers: corsHeaders
  });
}
```

### Option 2: Custom API Key Authentication

Follow the pattern in `api-verify/index.ts`:
```typescript
const apiKey = req.headers.get('x-api-key');

const { data: validation } = await supabase.rpc('validate_and_track_api_usage', {
  p_api_key: apiKey,
  p_endpoint: 'your-endpoint-name',
  p_identifier: identifier,
  p_ip_address: req.headers.get('x-forwarded-for'),
  p_user_agent: req.headers.get('user-agent')
});

if (!validation || !validation.valid) {
  return new Response(JSON.stringify({ error: validation?.error || 'Invalid API key' }), {
    status: 401,
    headers: corsHeaders
  });
}
```

### Option 3: Rate Limiting (For Public Functions)

```typescript
// Check rate limit
const { data: rateLimit } = await supabase.rpc('check_enhanced_rate_limit', {
  user_identifier: 'guest',
  action_type: 'your_action',
  max_requests: 10,
  window_minutes: 60,
  ip_address: req.headers.get('x-forwarded-for')
});

if (!rateLimit?.allowed) {
  return new Response(
    JSON.stringify({ 
      error: 'Rate limit exceeded',
      reset_time: rateLimit?.reset_time 
    }),
    { status: 429, headers: corsHeaders }
  );
}
```

---

## ✅ Security Checklist

When creating or modifying edge functions:

- [ ] Determine if function should be public or protected
- [ ] If protected: Set `verify_jwt = true` in config.toml
- [ ] If public: Implement alternative authentication (API keys, rate limiting)
- [ ] Add input validation for all parameters
- [ ] Use error sanitization (don't expose internal errors)
- [ ] Log security events to audit_logs table
- [ ] Add rate limiting for expensive operations
- [ ] Test authentication bypass attempts
- [ ] Document why function is public (if applicable)

---

## 🚨 Priority Actions

1. **URGENT**: Add JWT auth to `verify-claude-analysis` (costs money per request)
2. **HIGH**: Review and secure `enterprise-api`
3. **HIGH**: Secure `database-optimizer`
4. **MEDIUM**: Add auth to verification functions
5. **MEDIUM**: Secure blog enrichment functions
6. **LOW**: Add rate limiting to `api-v1-check`

---

## 📚 References

- [Supabase Edge Functions Auth](https://supabase.com/docs/guides/functions/auth)
- [JWT Verification](https://supabase.com/docs/guides/functions/deploy#disabling-jwt-verification)
- [Lovable Security Docs](https://docs.lovable.dev/features/security)
