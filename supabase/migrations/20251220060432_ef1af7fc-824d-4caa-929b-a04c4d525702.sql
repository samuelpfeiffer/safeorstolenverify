-- ============================================
-- FIX REMAINING ANONYMOUS ACCESS WARNINGS
-- These are admin-only tables that shouldn't allow anon access
-- ============================================

-- Fix AI Agent Learnings - restrict to authenticated admin only
DROP POLICY IF EXISTS "admin_manage_ai_agent_learnings" ON public.ai_agent_learnings;

CREATE POLICY "admins_manage_ai_agent_learnings" 
ON public.ai_agent_learnings 
FOR ALL 
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_ai_agent_learnings" 
ON public.ai_agent_learnings 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix AI Agent Runs - restrict to authenticated admin only
DROP POLICY IF EXISTS "admin_manage_ai_agent_runs" ON public.ai_agent_runs;

CREATE POLICY "admins_manage_ai_agent_runs" 
ON public.ai_agent_runs 
FOR ALL 
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_ai_agent_runs" 
ON public.ai_agent_runs 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix AI Content Queue - restrict to authenticated admin only
DROP POLICY IF EXISTS "admin_manage_ai_content_queue" ON public.ai_content_queue;

CREATE POLICY "admins_manage_ai_content_queue" 
ON public.ai_content_queue 
FOR ALL 
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_ai_content_queue" 
ON public.ai_content_queue 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix AI Recommendations - restrict to authenticated admin only
DROP POLICY IF EXISTS "admin_manage_ai_recommendations" ON public.ai_recommendations;

CREATE POLICY "admins_manage_ai_recommendations" 
ON public.ai_recommendations 
FOR ALL 
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_ai_recommendations" 
ON public.ai_recommendations 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix Fraud Analysis - restrict to authenticated admin only
DROP POLICY IF EXISTS "admin_manage_fraud_analysis" ON public.fraud_analysis;

CREATE POLICY "admins_manage_fraud_analysis" 
ON public.fraud_analysis 
FOR ALL 
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_fraud_analysis" 
ON public.fraud_analysis 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix audit_logs - update policies to be authenticated only
DROP POLICY IF EXISTS "admins_view_all_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "users_view_own_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "users_insert_own_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "service_role_full_access_audit_logs" ON public.audit_logs;

CREATE POLICY "auth_users_view_own_audit_logs" 
ON public.audit_logs 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "auth_users_insert_own_audit_logs" 
ON public.audit_logs 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "auth_admins_view_all_audit_logs" 
ON public.audit_logs 
FOR SELECT 
TO authenticated
USING (public.is_admin_user());

CREATE POLICY "service_role_audit_logs" 
ON public.audit_logs 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Fix user_roles - make it authenticated only (it was allowing anon via secure_user_roles_access)
DROP POLICY IF EXISTS "secure_user_roles_access" ON public.user_roles;
DROP POLICY IF EXISTS "users_can_view_own_roles" ON public.user_roles;
DROP POLICY IF EXISTS "admin_only_manage_user_roles" ON public.user_roles;

CREATE POLICY "auth_users_view_own_roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "auth_admins_manage_user_roles" 
ON public.user_roles 
FOR ALL 
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_user_roles" 
ON public.user_roles 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);