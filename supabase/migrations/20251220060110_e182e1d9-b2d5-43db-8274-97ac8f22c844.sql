-- ============================================
-- CRITICAL SECURITY FIX #1: Profiles Table RLS
-- Drop and recreate policies to prevent data exposure
-- ============================================

-- Drop existing problematic policies
DROP POLICY IF EXISTS "users_insert_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_select_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_update_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "service_role_manage_profiles" ON public.profiles;

-- Create strict user isolation policies
CREATE POLICY "users_can_view_own_profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "users_can_insert_own_profile" 
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "users_can_update_own_profile" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Service role for backend operations only
CREATE POLICY "service_role_full_access_profiles" 
ON public.profiles 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================
-- CRITICAL SECURITY FIX #2: Audit Logs Table RLS
-- Prevent activity/IP leakage
-- ============================================

-- Drop existing problematic policies
DROP POLICY IF EXISTS "authenticated_users_insert_own_audit" ON public.audit_logs;
DROP POLICY IF EXISTS "authenticated_users_view_own_audit" ON public.audit_logs;
DROP POLICY IF EXISTS "service_role_insert_system_audit" ON public.audit_logs;
DROP POLICY IF EXISTS "service_role_manage_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "system_admin_manage_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "users_admins_view_audit_logs" ON public.audit_logs;

-- Create strict policies for audit logs
CREATE POLICY "users_view_own_audit_logs" 
ON public.audit_logs 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "users_insert_own_audit_logs" 
ON public.audit_logs 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Admin access via security definer function
CREATE POLICY "admins_view_all_audit_logs" 
ON public.audit_logs 
FOR SELECT 
TO authenticated
USING (public.is_admin_user());

-- Service role for system operations
CREATE POLICY "service_role_full_access_audit_logs" 
ON public.audit_logs 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================
-- CRITICAL SECURITY FIX #3: Rate Limits Table RLS
-- Consolidate 4 overlapping policies into 2
-- ============================================

-- Drop all existing conflicting policies
DROP POLICY IF EXISTS "System can manage rate limits" ON public.rate_limits;
DROP POLICY IF EXISTS "secure_rate_limits_access" ON public.rate_limits;
DROP POLICY IF EXISTS "service_role_manage_rate_limits" ON public.rate_limits;
DROP POLICY IF EXISTS "system_only_rate_limits" ON public.rate_limits;
DROP POLICY IF EXISTS "users_manage_rate_limits" ON public.rate_limits;

-- Create only 2 clear policies
CREATE POLICY "users_manage_own_rate_limits" 
ON public.rate_limits 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "service_role_full_access_rate_limits" 
ON public.rate_limits 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================
-- ADDITIONAL SECURITY FIXES
-- ============================================

-- Fix checkout_sessions - consolidate duplicate policies
DROP POLICY IF EXISTS "Service role can manage all checkout sessions" ON public.checkout_sessions;
DROP POLICY IF EXISTS "Users can insert own checkout sessions" ON public.checkout_sessions;
DROP POLICY IF EXISTS "Users can update own checkout sessions" ON public.checkout_sessions;
DROP POLICY IF EXISTS "Users can view own checkout sessions" ON public.checkout_sessions;
DROP POLICY IF EXISTS "users_create_own_checkout" ON public.checkout_sessions;
DROP POLICY IF EXISTS "users_insert_checkout" ON public.checkout_sessions;
DROP POLICY IF EXISTS "users_select_checkout" ON public.checkout_sessions;
DROP POLICY IF EXISTS "users_update_checkout" ON public.checkout_sessions;
DROP POLICY IF EXISTS "users_view_own_checkout" ON public.checkout_sessions;

CREATE POLICY "users_manage_own_checkout_sessions" 
ON public.checkout_sessions 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "service_role_full_access_checkout_sessions" 
ON public.checkout_sessions 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix customer_portal_sessions - consolidate duplicate policies
DROP POLICY IF EXISTS "Users can create their own portal sessions" ON public.customer_portal_sessions;
DROP POLICY IF EXISTS "service_role_manage_customer_portal_sessions" ON public.customer_portal_sessions;
DROP POLICY IF EXISTS "users_insert_portal" ON public.customer_portal_sessions;
DROP POLICY IF EXISTS "users_manage_own_portal_sessions" ON public.customer_portal_sessions;
DROP POLICY IF EXISTS "users_select_portal" ON public.customer_portal_sessions;

CREATE POLICY "users_manage_own_portal_sessions" 
ON public.customer_portal_sessions 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "service_role_full_access_portal_sessions" 
ON public.customer_portal_sessions 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix purchases table - consolidate duplicate policies
DROP POLICY IF EXISTS "Users can insert own purchases" ON public.purchases;
DROP POLICY IF EXISTS "Users can view own purchases" ON public.purchases;
DROP POLICY IF EXISTS "authenticated_users_create_own_purchases" ON public.purchases;
DROP POLICY IF EXISTS "authenticated_users_view_own_purchases" ON public.purchases;
DROP POLICY IF EXISTS "service_role_manage_purchases" ON public.purchases;
DROP POLICY IF EXISTS "users_insert_purchases" ON public.purchases;
DROP POLICY IF EXISTS "users_select_purchases" ON public.purchases;

CREATE POLICY "users_manage_own_purchases" 
ON public.purchases 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "service_role_full_access_purchases" 
ON public.purchases 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix verification_results - consolidate policies
DROP POLICY IF EXISTS "service_role_manage_verification_results" ON public.verification_results;
DROP POLICY IF EXISTS "users_insert_own_results" ON public.verification_results;
DROP POLICY IF EXISTS "users_select_own_results" ON public.verification_results;
DROP POLICY IF EXISTS "users_update_own_results" ON public.verification_results;

CREATE POLICY "users_manage_own_verification_results" 
ON public.verification_results 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "service_role_full_access_verification_results" 
ON public.verification_results 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix verification_searches - consolidate policies
DROP POLICY IF EXISTS "Anonymous users can insert searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Anonymous users can view recent searches" ON public.verification_searches;
DROP POLICY IF EXISTS "service_role_manage_verification_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "users_insert_own_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "users_select_own_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "users_update_own_searches" ON public.verification_searches;

-- Allow anonymous searches (for guest users) but with restrictions
CREATE POLICY "anon_can_insert_searches" 
ON public.verification_searches 
FOR INSERT 
TO anon
WITH CHECK (user_id IS NULL);

CREATE POLICY "anon_can_view_recent_own_searches" 
ON public.verification_searches 
FOR SELECT 
TO anon
USING (user_id IS NULL AND created_at > (now() - interval '1 hour'));

CREATE POLICY "users_manage_own_searches" 
ON public.verification_searches 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "service_role_full_access_searches" 
ON public.verification_searches 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix credit_transactions - consolidate policies
DROP POLICY IF EXISTS "Service role can manage all credit transactions" ON public.credit_transactions;
DROP POLICY IF EXISTS "Users can insert own credit transactions" ON public.credit_transactions;
DROP POLICY IF EXISTS "Users can view own credit transactions" ON public.credit_transactions;
DROP POLICY IF EXISTS "service_role_manage_credit_transactions" ON public.credit_transactions;
DROP POLICY IF EXISTS "users_view_own_credit_trans" ON public.credit_transactions;

CREATE POLICY "users_view_own_credit_transactions" 
ON public.credit_transactions 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "service_role_full_access_credit_transactions" 
ON public.credit_transactions 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);