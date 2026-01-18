-- Security Hardening Migration: Fix ERROR-level vulnerabilities
-- This migration ensures that sensitive tables are properly protected from anonymous access

-- ==============================================================================
-- PHASE 1: PROFILES TABLE SECURITY HARDENING
-- Issue: profiles_table_public_exposure - Customer emails and Stripe IDs could be exposed
-- ==============================================================================

-- First, let's ensure the profiles table has RLS enabled (should already be enabled)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to recreate with proper restrictive settings
DROP POLICY IF EXISTS "users_view_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_insert_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_update_profile" ON public.profiles;

-- Create new restrictive policies for profiles - explicitly for authenticated role only
CREATE POLICY "users_view_own_profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "users_insert_own_profile"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "users_update_own_profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Allow service role full access for backend operations (webhooks, etc.)
CREATE POLICY "service_role_profiles_access"
ON public.profiles
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Admin access to profiles for support purposes
CREATE POLICY "admin_view_profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- ==============================================================================
-- PHASE 2: VERIFICATION_RESULTS TABLE SECURITY HARDENING
-- Issue: verification_results_public_exposure - Private verification reports could be accessed
-- ==============================================================================

-- Ensure RLS is enabled
ALTER TABLE public.verification_results ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policies with explicit role targeting
DROP POLICY IF EXISTS "users_own_verification_results" ON public.verification_results;

-- Users can only access their own verification results
CREATE POLICY "users_view_own_verification_results"
ON public.verification_results
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "users_insert_own_verification_results"
ON public.verification_results
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_update_own_verification_results"
ON public.verification_results
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_delete_own_verification_results"
ON public.verification_results
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Service role access for backend operations
CREATE POLICY "service_role_verification_results_access"
ON public.verification_results
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- PHASE 3: VERIFICATION_SEARCHES TABLE SECURITY HARDENING
-- Issue: verification_searches_inadequate_protection - Search history could reveal patterns
-- ==============================================================================

-- Ensure RLS is enabled
ALTER TABLE public.verification_searches ENABLE ROW LEVEL SECURITY;

-- Drop and recreate with explicit role targeting
DROP POLICY IF EXISTS "users_own_searches" ON public.verification_searches;

-- Authenticated users can manage their own searches
CREATE POLICY "users_view_own_searches"
ON public.verification_searches
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "users_insert_own_searches"
ON public.verification_searches
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_update_own_searches"
ON public.verification_searches
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_delete_own_searches"
ON public.verification_searches
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Service role access for backend operations (anonymous search tracking, etc.)
CREATE POLICY "service_role_verification_searches_access"
ON public.verification_searches
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- PHASE 4: PURCHASES TABLE SECURITY HARDENING
-- Ensure payment data is properly protected
-- ==============================================================================

-- Ensure RLS is enabled
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- Drop and recreate with explicit role targeting
DROP POLICY IF EXISTS "users_own_purchases" ON public.purchases;

-- Authenticated users can view their own purchases
CREATE POLICY "users_view_own_purchases"
ON public.purchases
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "users_insert_own_purchases"
ON public.purchases
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Service role access for Stripe webhooks
CREATE POLICY "service_role_purchases_access"
ON public.purchases
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- PHASE 5: RATE_LIMITS TABLE SECURITY
-- ==============================================================================

-- Ensure RLS is enabled
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Drop and recreate with explicit role targeting
DROP POLICY IF EXISTS "users_own_rate_limits" ON public.rate_limits;

-- Authenticated users can see their own rate limits
CREATE POLICY "users_view_own_rate_limits"
ON public.rate_limits
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Service role for rate limit enforcement
CREATE POLICY "service_role_rate_limits_access"
ON public.rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- PHASE 6: CHECKOUT_SESSIONS AND PORTAL_SESSIONS SECURITY
-- ==============================================================================

-- Checkout sessions
ALTER TABLE public.checkout_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "users_own_checkout_sessions" ON public.checkout_sessions;

CREATE POLICY "users_view_own_checkout_sessions"
ON public.checkout_sessions
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "service_role_checkout_sessions_access"
ON public.checkout_sessions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Customer portal sessions
ALTER TABLE public.customer_portal_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "users_own_portal_sessions" ON public.customer_portal_sessions;

CREATE POLICY "users_view_own_portal_sessions"
ON public.customer_portal_sessions
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "service_role_portal_sessions_access"
ON public.customer_portal_sessions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- PHASE 7: AUDIT_LOGS TABLE SECURITY (Enhanced)
-- ==============================================================================

-- Ensure RLS is enabled
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Keep existing policies but add service role access
CREATE POLICY "service_role_audit_logs_access"
ON public.audit_logs
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);