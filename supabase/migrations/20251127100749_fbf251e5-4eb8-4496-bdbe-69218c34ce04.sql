-- =====================================================
-- FIX WARN-LEVEL SECURITY ISSUES: RLS Policy Enforcement
-- =====================================================
-- Addresses: Anonymous Access Policies warnings for sensitive tables
-- Tables: ai_analysis_sessions, ai_content_generation_log, ai_executive_actions
-- Fix: Ensure all policies explicitly check authentication status

-- =======================
-- ai_analysis_sessions
-- =======================
-- Current policies allow 'anon' role but enforce auth.uid() checks
-- Update to explicitly require authenticated role

DROP POLICY IF EXISTS "authenticated_users_manage_own_ai_sessions" ON public.ai_analysis_sessions;
DROP POLICY IF EXISTS "service_role_full_access_ai_sessions" ON public.ai_analysis_sessions;
DROP POLICY IF EXISTS "Service role can manage all AI analysis sessions" ON public.ai_analysis_sessions;

-- User access: explicitly require authenticated role
CREATE POLICY "authenticated_users_manage_own_ai_sessions" 
ON public.ai_analysis_sessions
AS RESTRICTIVE
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Service role access
CREATE POLICY "service_role_full_access_ai_sessions" 
ON public.ai_analysis_sessions
AS PERMISSIVE
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- =======================
-- ai_content_generation_log
-- =======================
-- Admin-only table - must use is_admin_user() check

DROP POLICY IF EXISTS "admin_view_content_generation_log" ON public.ai_content_generation_log;
DROP POLICY IF EXISTS "Service role can insert AI content logs" ON public.ai_content_generation_log;
DROP POLICY IF EXISTS "service_role_manage_content_generation_log" ON public.ai_content_generation_log;

-- Admin view access
CREATE POLICY "admin_view_content_generation_log" 
ON public.ai_content_generation_log
AS RESTRICTIVE
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- Service role insert access
CREATE POLICY "service_role_insert_content_logs" 
ON public.ai_content_generation_log
AS PERMISSIVE
FOR INSERT
TO service_role
WITH CHECK (true);

-- Service role full access
CREATE POLICY "service_role_manage_content_generation_log" 
ON public.ai_content_generation_log
AS PERMISSIVE
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- =======================
-- ai_executive_actions
-- =======================
-- Admin-only table - must use is_admin_user() check

DROP POLICY IF EXISTS "admin_view_executive_actions" ON public.ai_executive_actions;
DROP POLICY IF EXISTS "Service role can manage executive actions" ON public.ai_executive_actions;
DROP POLICY IF EXISTS "service_role_manage_executive_actions" ON public.ai_executive_actions;

-- Admin view access
CREATE POLICY "admin_view_executive_actions" 
ON public.ai_executive_actions
AS RESTRICTIVE
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- Service role full access
CREATE POLICY "service_role_manage_executive_actions" 
ON public.ai_executive_actions
AS PERMISSIVE
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- =======================
-- ai_executive_decisions
-- =======================
-- Admin-only table

DROP POLICY IF EXISTS "admin_view_executive_decisions" ON public.ai_executive_decisions;
DROP POLICY IF EXISTS "Service role can manage executive decisions" ON public.ai_executive_decisions;
DROP POLICY IF EXISTS "service_role_manage_executive_decisions" ON public.ai_executive_decisions;

-- Admin view access
CREATE POLICY "admin_view_executive_decisions" 
ON public.ai_executive_decisions
AS RESTRICTIVE
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- Service role full access
CREATE POLICY "service_role_manage_executive_decisions" 
ON public.ai_executive_decisions
AS PERMISSIVE
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- =======================
-- ai_executives
-- =======================
-- Admin-only table

DROP POLICY IF EXISTS "admin_view_ai_executives" ON public.ai_executives;
DROP POLICY IF EXISTS "Service role can manage AI executives" ON public.ai_executives;
DROP POLICY IF EXISTS "service_role_manage_ai_executives" ON public.ai_executives;

-- Admin view access
CREATE POLICY "admin_view_ai_executives" 
ON public.ai_executives
AS RESTRICTIVE
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- Service role full access
CREATE POLICY "service_role_manage_ai_executives" 
ON public.ai_executives
AS PERMISSIVE
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- =======================
-- VERIFICATION
-- =======================
-- Verify all policies are correctly applied

DO $$
DECLARE
  policy_count integer;
BEGIN
  -- Count restrictive policies on sensitive tables
  SELECT COUNT(*) INTO policy_count
  FROM pg_policies
  WHERE schemaname = 'public'
  AND tablename IN (
    'ai_analysis_sessions',
    'ai_content_generation_log',
    'ai_executive_actions',
    'ai_executive_decisions',
    'ai_executives'
  )
  AND cmd = 'SELECT';
  
  RAISE NOTICE 'Applied % restrictive SELECT policies on sensitive tables', policy_count;
  
  IF policy_count < 5 THEN
    RAISE WARNING 'Expected at least 5 restrictive policies, found %', policy_count;
  END IF;
END $$;