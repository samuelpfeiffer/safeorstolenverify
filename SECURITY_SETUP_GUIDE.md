# SafeOrStolen.com - Security Setup Guide

This guide helps you complete security configurations that require manual setup or database access.

---

## 1. Add Your First Admin User

**Status**: ⚠️ Required - Your `user_roles` table is empty

The user roles system is properly configured, but you need to add your first admin user to access admin functionality.

### Steps:

1. **Sign up** for an account on your app if you haven't already

2. **Find your User ID** - Go to Supabase SQL Editor and run:
   ```sql
   SELECT id, email FROM auth.users ORDER BY created_at DESC LIMIT 5;
   ```

3. **Add yourself as admin** - Copy your user ID and run:
   ```sql
   INSERT INTO public.user_roles (user_id, role)
   VALUES ('YOUR-USER-ID-HERE'::uuid, 'admin'::app_role)
   ON CONFLICT (user_id, role) DO NOTHING;
   ```

4. **Verify** it worked:
   ```sql
   SELECT u.email, r.role 
   FROM public.user_roles r
   JOIN auth.users u ON u.id = r.user_id;
   ```

### What This Enables:
- Access to `/admin` dashboard
- Ability to manage community stories
- Newsletter subscriber management
- System configuration access
- User management capabilities

---

## 2. Review Public Edge Functions

**Status**: ⚠️ Review Required - 13 functions are publicly accessible

Some edge functions don't require JWT authentication. Review each to ensure this is intentional:

### ✅ Legitimately Public (No Action Needed):
- `stripe-webhook` - Uses Stripe signature verification
- `api-verify` - Uses custom API key validation
- `badge-widget` - Public widget embed
- `sitemap-xml` - Public SEO sitemap

### ⚠️ Requires Review:

#### Verification Functions:
- `verify-firearm-hotgunz`
- `verify-checkmend`
- `verify-claude-analysis`
- `enhanced-verification`

**Action**: Confirm these have:
- Custom authentication (API keys, signed requests)
- Rate limiting
- Input validation
- Or add JWT requirement if needed

#### Business Functions:
- `enterprise-api` - Should this be public?
- `marketplace-integration` - Should this be public?
- `database-optimizer` - Could be abused for expensive operations

**Action**: For each function, either:
1. Add authentication requirement in `supabase/config.toml`:
   ```toml
   [functions.function-name]
   verify_jwt = true
   ```
2. Add custom authentication in the function code
3. Document why it's public with a comment

---

## 3. Configure Supabase Auth Settings

**Status**: ℹ️ Optional but Recommended - Manual dashboard configuration

These settings cannot be configured via code and require Supabase dashboard access.

### OTP Expiry Configuration:

1. Go to your Supabase Dashboard
2. Navigate to: **Authentication → Settings → Email**
3. Find: **OTP Expiry**
4. Set to: **300 seconds (5 minutes)** or less
5. Save changes

**Why**: Shorter expiry reduces the window for token theft or brute force attacks.

### Leaked Password Protection:

1. Go to your Supabase Dashboard
2. Navigate to: **Authentication → Settings → Security**
3. Find: **Leaked Password Protection**
4. Toggle: **Enable**
5. Save changes

**Why**: Prevents users from using passwords compromised in data breaches.

---

## 4. Review SECURITY DEFINER Functions

**Status**: ⚠️ Audit Recommended - 135 usages across 48 migrations

Most of your SECURITY DEFINER functions properly set `search_path`, but a comprehensive audit is recommended.

### What to Check:

For each SECURITY DEFINER function in your migrations, ensure it has:
```sql
SET search_path TO 'public'
```

### Priority Functions to Review:

Recent migrations in `supabase/migrations/`:
- Functions related to authentication
- Functions handling sensitive data (API keys, tokens)
- Functions with RLS bypass capabilities

### How to Fix:

If you find a SECURITY DEFINER function without search_path:

```sql
CREATE OR REPLACE FUNCTION public.function_name()
RETURNS type
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'  -- Add this line
AS $$
BEGIN
  -- function body
END;
$$;
```

---

## 5. Error Handling Improvements

**Status**: ✅ Implemented - Error sanitization utility created

The app now includes error sanitization to prevent information leakage. The `errorSanitizer.ts` utility is automatically used in:
- Authentication flows
- Database operations
- Edge function responses

### Manual Updates Needed:

If you add new features, use the sanitization utility:

```typescript
import { logAndSanitizeError } from '@/utils/errorSanitizer';

try {
  // Your operation
} catch (error) {
  const safeMessage = logAndSanitizeError(error, 'Operation Context');
  toast({
    title: 'Error',
    description: safeMessage,
    variant: 'destructive'
  });
}
```

---

## 6. Secure Storage Implementation

**Status**: ✅ Implemented - Secure storage utility created

The app now includes secure storage with expiration. Use it for sensitive data:

```typescript
import { setStorageItem, getStorageItem } from '@/utils/secureStorage';

// Store with 30-minute expiration
setStorageItem('searchHistory', data, 30);

// Retrieve (auto-checks expiration)
const data = getStorageItem('searchHistory');
```

### Migration Guide:

Update existing localStorage usage to use secure storage:

**Before:**
```typescript
localStorage.setItem('data', JSON.stringify(value));
```

**After:**
```typescript
import { setStorageItem } from '@/utils/secureStorage';
setStorageItem('data', value, 60); // 60-minute expiry
```

---

## Security Checklist

Use this checklist to track your security setup:

- [ ] Added first admin user to `user_roles` table
- [ ] Reviewed all public edge functions
- [ ] Configured OTP expiry to 5 minutes or less
- [ ] Enabled Leaked Password Protection
- [ ] Audited SECURITY DEFINER functions for search_path
- [ ] Updated localStorage usage to use secure storage
- [ ] Reviewed error handling in custom code

---

## Next Steps

1. Complete the checklist above
2. Run a new security scan to verify fixes
3. Monitor audit logs for suspicious activity
4. Schedule regular security reviews

For questions or issues, refer to:
- [Lovable Security Docs](https://docs.lovable.dev/features/security)
- [Supabase Security Guide](https://supabase.com/docs/guides/platform/going-into-prod#security)
