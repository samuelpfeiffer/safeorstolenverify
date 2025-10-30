-- Remove redundant RLS policies from checkout_sessions table
-- This consolidates 4 policies down to 2 essential policies

-- Drop duplicate service role policy
DROP POLICY IF EXISTS "service_role_manage_checkout_sessions" ON public.checkout_sessions;

-- Drop redundant user INSERT policy (already covered by secure_checkout_sessions_access)
DROP POLICY IF EXISTS "Users can create their own checkout sessions" ON public.checkout_sessions;

-- Result: Only 2 policies remain:
-- 1. "secure_checkout_sessions_access" - User access (ALL operations)
-- 2. "Service role can manage all checkout sessions" - Service role access (ALL operations)