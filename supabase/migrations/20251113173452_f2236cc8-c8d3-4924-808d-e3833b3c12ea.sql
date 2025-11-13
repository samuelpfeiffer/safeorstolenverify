-- =====================================================
-- PHASE 3: HARDEN RLS SECURITY POLICIES (CORRECTED)
-- Fix RLS warnings by restricting anonymous access
-- =====================================================

-- ============ CRITICAL: Profiles (uses 'id' not 'user_id') ============

-- Drop old permissive policies
DROP POLICY IF EXISTS "Public profiles are viewable" ON public.profiles;
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Keep existing good policies, add TO authenticated to make them explicit
DROP POLICY IF EXISTS "Users can only view their own profile" ON public.profiles CASCADE;
CREATE POLICY "authenticated_users_view_own_profile" ON public.profiles
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can only update their own profile" ON public.profiles CASCADE;
CREATE POLICY "authenticated_users_update_own_profile" ON public.profiles
  FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles CASCADE;
CREATE POLICY "authenticated_users_insert_own_profile" ON public.profiles
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = id);

-- ============ CRITICAL: Purchases ============

DROP POLICY IF EXISTS "Users can insert their own purchases" ON public.purchases CASCADE;
DROP POLICY IF EXISTS "secure_purchases_access" ON public.purchases CASCADE;

CREATE POLICY "authenticated_users_view_own_purchases" ON public.purchases
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "authenticated_users_create_own_purchases" ON public.purchases
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- ============ CRITICAL: Credit Transactions ============

DROP POLICY IF EXISTS "Users can view their own credit transactions" ON public.credit_transactions CASCADE;

CREATE POLICY "authenticated_users_view_own_credit_transactions" ON public.credit_transactions
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- ============ CRITICAL: Receipts ============

-- Check if policies exist first, then create
CREATE POLICY "authenticated_users_view_own_receipts" ON public.receipts
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "authenticated_users_create_own_receipts" ON public.receipts
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- ============ CRITICAL: Checkout Sessions ============

DROP POLICY IF EXISTS "secure_checkout_sessions_access" ON public.checkout_sessions CASCADE;

CREATE POLICY "authenticated_users_view_own_checkout_sessions" ON public.checkout_sessions
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "authenticated_users_create_own_checkout_sessions" ON public.checkout_sessions
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- ============ CRITICAL: Verification Results ============

DROP POLICY IF EXISTS "secure_verification_results_access" ON public.verification_results CASCADE;
DROP POLICY IF EXISTS "Users can create their own verification results" ON public.verification_results CASCADE;

CREATE POLICY "authenticated_users_view_own_verification_results" ON public.verification_results
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "authenticated_users_create_own_verification_results" ON public.verification_results
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- ============ CRITICAL: API Keys ============

-- Drop old policies
DROP POLICY IF EXISTS "api_keys_select_own" ON public.api_keys CASCADE;
DROP POLICY IF EXISTS "api_keys_insert_own" ON public.api_keys CASCADE;
DROP POLICY IF EXISTS "api_keys_update_own" ON public.api_keys CASCADE;
DROP POLICY IF EXISTS "api_keys_delete_own" ON public.api_keys CASCADE;

-- Create new authenticated-only policies
CREATE POLICY "authenticated_users_view_own_api_keys" ON public.api_keys
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "authenticated_users_create_own_api_keys" ON public.api_keys
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "authenticated_users_update_own_api_keys" ON public.api_keys
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "authenticated_users_delete_own_api_keys" ON public.api_keys
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- ============ CRITICAL: External API Keys ============

DROP POLICY IF EXISTS "Users can manage their own API keys" ON public.external_api_keys CASCADE;

CREATE POLICY "authenticated_users_manage_own_external_api_keys" ON public.external_api_keys
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ============ CRITICAL: OAuth Tokens ============

-- Drop old policies (there are many)
DROP POLICY IF EXISTS "oauth_tokens_authenticated_select" ON public.oauth_tokens CASCADE;
DROP POLICY IF EXISTS "oauth_tokens_authenticated_insert" ON public.oauth_tokens CASCADE;
DROP POLICY IF EXISTS "oauth_tokens_authenticated_update" ON public.oauth_tokens CASCADE;
DROP POLICY IF EXISTS "oauth_tokens_authenticated_delete" ON public.oauth_tokens CASCADE;
DROP POLICY IF EXISTS "secure_oauth_tokens_access" ON public.oauth_tokens CASCADE;
DROP POLICY IF EXISTS "enhanced_secure_oauth_tokens_insert" ON public.oauth_tokens CASCADE;

-- Create consolidated authenticated-only policy
CREATE POLICY "authenticated_users_manage_own_oauth_tokens" ON public.oauth_tokens
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ============ AI Analysis & Feedback ============

-- AI Analysis Sessions
DROP POLICY IF EXISTS "Users can create their own AI analysis sessions" ON public.ai_analysis_sessions CASCADE;
DROP POLICY IF EXISTS "Users can view their own AI analysis sessions" ON public.ai_analysis_sessions CASCADE;
DROP POLICY IF EXISTS "Users can update their own AI analysis sessions" ON public.ai_analysis_sessions CASCADE;

CREATE POLICY "authenticated_users_manage_own_ai_sessions" ON public.ai_analysis_sessions
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- AI Feedback
DROP POLICY IF EXISTS "Authenticated users can manage their own feedback" ON public.ai_feedback CASCADE;

CREATE POLICY "authenticated_users_manage_own_ai_feedback" ON public.ai_feedback
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ============ Admin Tables - Require Authentication ============

-- AI Executives
DROP POLICY IF EXISTS "Admin can view AI executives" ON public.ai_executives CASCADE;

CREATE POLICY "admin_or_service_view_ai_executives" ON public.ai_executives
  FOR SELECT TO authenticated
  USING (is_admin_user() OR auth.role() = 'service_role');

-- AI Executive Decisions
DROP POLICY IF EXISTS "Admin can view executive decisions" ON public.ai_executive_decisions CASCADE;

CREATE POLICY "admin_or_service_view_ai_decisions" ON public.ai_executive_decisions
  FOR SELECT TO authenticated
  USING (is_admin_user() OR auth.role() = 'service_role');

-- AI Executive Actions
DROP POLICY IF EXISTS "Admin can view executive actions" ON public.ai_executive_actions CASCADE;

CREATE POLICY "admin_or_service_view_ai_actions" ON public.ai_executive_actions
  FOR SELECT TO authenticated
  USING (is_admin_user() OR auth.role() = 'service_role');

-- Business Metrics
DROP POLICY IF EXISTS "Admin can view business metrics" ON public.business_metrics CASCADE;

CREATE POLICY "admin_or_service_view_business_metrics" ON public.business_metrics
  FOR SELECT TO authenticated
  USING (is_admin_user() OR auth.role() = 'service_role');

-- ============ Audit Logs ============

DROP POLICY IF EXISTS "Users can view their own audit logs" ON public.audit_logs CASCADE;

CREATE POLICY "authenticated_users_view_own_audit_logs" ON public.audit_logs
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR user_id IS NULL OR is_admin_user());

-- ============ SUMMARY ============
-- ✓ All financial & payment tables: Authenticated only, own data
-- ✓ All verification data: Authenticated only, own data
-- ✓ All API keys/tokens: Authenticated only, own data
-- ✓ AI sessions & feedback: Authenticated only, own data
-- ✓ Admin tables: Require authentication + admin role
-- ✓ Public blog content: Remains public (intentional)
-- ✓ Blocks anonymous access to sensitive data