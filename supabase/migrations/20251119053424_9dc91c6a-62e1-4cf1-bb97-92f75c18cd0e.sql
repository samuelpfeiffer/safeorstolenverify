-- ============================================================================
-- PHASE 3: SECURITY HARDENING - FIX WARN-LEVEL RLS ISSUES
-- ============================================================================
-- This migration tightens Row Level Security (RLS) policies on sensitive tables
-- to prevent anonymous access and ensure proper user isolation.
-- ============================================================================

-- ============================================================================
-- HIGH PRIORITY: USER-SPECIFIC SENSITIVE DATA
-- ============================================================================

-- Fix ai_analysis_sessions: Ensure ONLY authenticated users can access their own sessions
DROP POLICY IF EXISTS "authenticated_users_manage_own_ai_sessions" ON public.ai_analysis_sessions;

CREATE POLICY "authenticated_users_manage_own_ai_sessions"
ON public.ai_analysis_sessions
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Add service role policy for backend operations
CREATE POLICY "service_role_full_access_ai_sessions"
ON public.ai_analysis_sessions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Fix ai_feedback: Tighten to user-specific only
DROP POLICY IF EXISTS "authenticated_users_manage_own_ai_feedback" ON public.ai_feedback;
DROP POLICY IF EXISTS "Service role can manage all AI feedback" ON public.ai_feedback;

CREATE POLICY "authenticated_users_manage_own_ai_feedback"
ON public.ai_feedback
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "service_role_full_access_ai_feedback"
ON public.ai_feedback
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Fix audit_logs: Users can only view their own logs, service role can manage all
DROP POLICY IF EXISTS "authenticated_users_view_own_audit_logs" ON public.audit_logs;

CREATE POLICY "authenticated_users_view_own_audit_logs"
ON public.audit_logs
FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR is_admin_user());

-- Only service role can INSERT/UPDATE/DELETE audit logs
CREATE POLICY "service_role_manage_audit_logs"
ON public.audit_logs
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Fix credit_transactions: User-specific only
DROP POLICY IF EXISTS "Users can view their own credit transactions" ON public.credit_transactions;
DROP POLICY IF EXISTS "Users can manage own transactions" ON public.credit_transactions;

CREATE POLICY "users_view_own_credit_transactions"
ON public.credit_transactions
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "service_role_manage_credit_transactions"
ON public.credit_transactions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Fix verification_searches (if table exists): User-specific only
DO $$
BEGIN
  IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'verification_searches') THEN
    EXECUTE 'DROP POLICY IF EXISTS "users_view_own_searches" ON public.verification_searches';
    EXECUTE 'DROP POLICY IF EXISTS "users_manage_own_searches" ON public.verification_searches';
    
    EXECUTE 'CREATE POLICY "users_view_own_searches" ON public.verification_searches FOR SELECT TO authenticated USING (auth.uid() = user_id)';
    EXECUTE 'CREATE POLICY "service_role_manage_searches" ON public.verification_searches FOR ALL TO service_role USING (true) WITH CHECK (true)';
  END IF;
END $$;

-- Fix profiles: Users can view all profiles but only update their own
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "users_view_all_profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "users_update_own_profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "service_role_manage_profiles"
ON public.profiles
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================================================
-- MEDIUM PRIORITY: ADMIN-ONLY TABLES
-- ============================================================================

-- Fix AI executive tables: Admin or service role only
DROP POLICY IF EXISTS "Admin can view executive decisions" ON public.ai_executive_decisions;
DROP POLICY IF EXISTS "Admin can view executive actions" ON public.ai_executive_actions;
DROP POLICY IF EXISTS "Admin can view AI executives" ON public.ai_executives;

CREATE POLICY "admin_view_executive_decisions"
ON public.ai_executive_decisions
FOR SELECT
TO authenticated
USING (is_admin_user());

CREATE POLICY "service_role_manage_executive_decisions"
ON public.ai_executive_decisions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "admin_view_executive_actions"
ON public.ai_executive_actions
FOR SELECT
TO authenticated
USING (is_admin_user());

CREATE POLICY "service_role_manage_executive_actions"
ON public.ai_executive_actions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "admin_view_ai_executives"
ON public.ai_executives
FOR SELECT
TO authenticated
USING (is_admin_user());

CREATE POLICY "service_role_manage_ai_executives"
ON public.ai_executives
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Fix AI SEO and content generation logs: Admin only
DROP POLICY IF EXISTS "Admin can manage AI SEO suggestions" ON public.ai_seo_suggestions;
DROP POLICY IF EXISTS "Admin can manage SEO suggestions" ON public.ai_seo_suggestions;
DROP POLICY IF EXISTS "Admin can view AI content generation logs" ON public.ai_content_generation_log;

CREATE POLICY "admin_manage_seo_suggestions"
ON public.ai_seo_suggestions
FOR ALL
TO authenticated
USING (is_admin_user())
WITH CHECK (is_admin_user());

CREATE POLICY "service_role_manage_seo_suggestions"
ON public.ai_seo_suggestions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "admin_view_content_generation_log"
ON public.ai_content_generation_log
FOR SELECT
TO authenticated
USING (is_admin_user());

CREATE POLICY "service_role_manage_content_generation_log"
ON public.ai_content_generation_log
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================================================
-- CONFIRMATION: INTENTIONALLY PUBLIC TABLES (DOCUMENTED)
-- ============================================================================

-- The following tables intentionally allow public read access:
-- - blog_posts (published only)
-- - blog_categories
-- - blog_tags
-- - community_stories (approved only)
-- - ai_generated_content (published only)
-- These policies are correct and should not be changed.

-- ============================================================================
-- GRANT PROPER PERMISSIONS
-- ============================================================================

-- Ensure authenticated role has proper access
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO authenticated;

-- Ensure service_role has full access
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- ============================================================================
-- SECURITY AUDIT LOG
-- ============================================================================

DO $$
BEGIN
  -- Log this security hardening (fixed UUID casting)
  IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'audit_logs') THEN
    INSERT INTO public.audit_logs (action, table_name, record_id, new_values)
    VALUES (
      'SECURITY_HARDENING',
      'rls_policies',
      gen_random_uuid(),
      jsonb_build_object(
        'phase', 3,
        'description', 'Tightened RLS policies on sensitive tables',
        'tables_affected', ARRAY[
          'ai_analysis_sessions',
          'ai_feedback', 
          'audit_logs',
          'credit_transactions',
          'profiles',
          'ai_executive_decisions',
          'ai_executive_actions',
          'ai_executives',
          'ai_seo_suggestions',
          'ai_content_generation_log'
        ],
        'timestamp', NOW()
      )
    );
  END IF;
END $$;