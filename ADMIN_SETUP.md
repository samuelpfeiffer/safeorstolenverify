# SafeOrStolen Admin Setup Guide

This guide covers manual security configurations that need to be completed after deployment.

---

## 1. Add First Admin User

To add an admin user, run this SQL in the Supabase SQL Editor:

```sql
-- Step 1: Find your user ID
SELECT id, email FROM auth.users WHERE email = 'your-admin-email@example.com';

-- Step 2: Insert admin role (replace YOUR_USER_ID with the UUID from step 1)
INSERT INTO public.user_roles (user_id, role)
VALUES ('YOUR_USER_ID', 'admin');
```

**Verification:**
```sql
-- Check that admin role was added
SELECT u.email, r.role 
FROM auth.users u 
JOIN public.user_roles r ON u.id = r.user_id
WHERE r.role = 'admin';
```

---

## 2. Configure Supabase Auth Settings

Go to **Supabase Dashboard → Authentication → URL Configuration**:

### Site URL
Set to your production domain:
```
https://safeorstolen.com
```

### Redirect URLs
Add all allowed redirect URLs:
```
https://safeorstolen.com
https://safeorstolen.com/**
```

### Email OTP Expiry (Security)
Go to **Authentication → Email Templates → Settings**:
- Set **OTP expiry time** to **300 seconds** (5 minutes) or less

### Leaked Password Protection
Go to **Authentication → Providers → Email**:
- Enable **"Check if password is in breach database"** (HaveIBeenPwned protection)

---

## 3. Configure Rate Limiting

The application has built-in rate limiting via the `rate_limits` table and `check_enhanced_rate_limit` function. Default limits:

| Action | Max Requests | Window |
|--------|-------------|--------|
| verification | 10 | 60 min |
| auth | 5 | 15 min |
| api | 100 | 60 min |

To adjust limits, modify the function parameters when calling `check_enhanced_rate_limit`.

---

## 4. Review Public Edge Functions

These edge functions are accessible without JWT authentication (by design for public features):

| Function | Purpose | Has Custom Rate Limiting |
|----------|---------|------------------------|
| `verify-item` | Public item verification | ✓ |
| `ai-verify-item` | AI-powered verification | ✓ |
| `ai-chat` | AI assistant | ✓ |
| `marketplace-url-analyzer` | URL analysis | ✓ |
| `stripe-webhook` | Stripe callbacks | Stripe signature |
| `indexnow-submit` | SEO indexing | API key |

All other functions require JWT authentication via `verify_jwt = true` in `supabase/config.toml`.

---

## 5. Stripe Configuration

Ensure these secrets are set in Supabase Edge Functions:

| Secret | Purpose |
|--------|---------|
| `STRIPE_SECRET_KEY` | Stripe API access |
| `STRIPE_WEBHOOK_SECRET` | Webhook signature verification |
| `STRIPE_PUBLISHABLE_KEY` | Client-side Stripe.js |

Test webhook with Stripe CLI:
```bash
stripe listen --forward-to https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/stripe-webhook
```

---

## 6. Database Security Checklist

- [x] RLS enabled on all tables
- [x] User roles stored in separate `user_roles` table
- [x] `SECURITY DEFINER` functions have `search_path = public`
- [x] Rate limiting implemented
- [x] Audit logging enabled
- [x] Service role policies for edge functions

---

## 7. Monitoring

### Check for errors:
```sql
-- Recent database errors
SELECT * FROM postgres_logs 
WHERE error_severity = 'ERROR' 
ORDER BY timestamp DESC LIMIT 50;

-- Recent auth activity
SELECT * FROM auth.audit_log_entries 
ORDER BY created_at DESC LIMIT 50;
```

### Monitor rate limits:
```sql
SELECT action, COUNT(*), MAX(window_start) as latest
FROM public.rate_limits 
GROUP BY action;
```

---

## Support

For issues, check:
1. Supabase Dashboard → Logs
2. Edge Function logs in Supabase Dashboard
3. Browser console for client-side errors
