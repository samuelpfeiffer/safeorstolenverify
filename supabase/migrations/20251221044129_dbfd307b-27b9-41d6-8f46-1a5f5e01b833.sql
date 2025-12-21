-- Fix RLS policies for tables with permission denied errors
-- This migration addresses the permission errors seen in postgres logs

-- =====================================================
-- FIX: verification_searches - authenticated users need access
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "anon_can_insert_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "anon_can_view_recent_own_searches" ON public.verification_searches;

-- Allow authenticated users to manage their own searches
CREATE POLICY "authenticated_users_manage_own_searches" 
ON public.verification_searches 
FOR ALL 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Allow authenticated users to insert searches (with their user_id)
CREATE POLICY "authenticated_users_insert_searches"
ON public.verification_searches
FOR INSERT
WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Allow service role full access
DROP POLICY IF EXISTS "service_role_full_access_searches" ON public.verification_searches;
CREATE POLICY "service_role_full_access_searches"
ON public.verification_searches
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- =====================================================
-- FIX: profiles - ensure authenticated users can access own profile
-- =====================================================
DROP POLICY IF EXISTS "users_can_view_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_can_update_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_can_insert_own_profile" ON public.profiles;

CREATE POLICY "users_can_view_own_profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "users_can_update_own_profile"
ON public.profiles
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "users_can_insert_own_profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- =====================================================
-- FIX: checkout_sessions - authenticated users need access
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_checkout_sessions" ON public.checkout_sessions;

CREATE POLICY "users_manage_own_checkout_sessions"
ON public.checkout_sessions
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- FIX: verification_results - authenticated users need access
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_verification_results" ON public.verification_results;

CREATE POLICY "users_manage_own_verification_results"
ON public.verification_results
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- FIX: rate_limits - authenticated users need access
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_rate_limits" ON public.rate_limits;

CREATE POLICY "users_manage_own_rate_limits"
ON public.rate_limits
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- FIX: audit_logs - authenticated users can view own & insert
-- =====================================================
DROP POLICY IF EXISTS "auth_users_view_own_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "auth_users_insert_own_audit_logs" ON public.audit_logs;

CREATE POLICY "auth_users_view_own_audit_logs"
ON public.audit_logs
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "auth_users_insert_own_audit_logs"
ON public.audit_logs
FOR INSERT
WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- =====================================================
-- FIX: purchases - authenticated users need access
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_purchases" ON public.purchases;

CREATE POLICY "users_manage_own_purchases"
ON public.purchases
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- FIX: customer_portal_sessions - authenticated users need access
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_portal_sessions" ON public.customer_portal_sessions;

CREATE POLICY "users_manage_own_portal_sessions"
ON public.customer_portal_sessions
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);