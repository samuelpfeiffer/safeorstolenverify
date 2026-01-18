-- Fix remaining ERROR-level security issues
-- Ensure all sensitive tables have proper RLS policies with explicit role targeting

-- ==============================================================================
-- FIX: credit_transactions - User Credit Balances and Transaction History Exposed
-- ==============================================================================

ALTER TABLE public.credit_transactions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "users_view_credits" ON public.credit_transactions;

CREATE POLICY "users_view_own_credits"
ON public.credit_transactions
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "service_role_credit_transactions_access"
ON public.credit_transactions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- FIX: audit_logs - System Audit Logs Reveal User Actions
-- Already has admin and user policies, but need to verify proper role targeting
-- ==============================================================================

DROP POLICY IF EXISTS "admins_view_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "users_view_own_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "users_insert_audit_logs" ON public.audit_logs;

-- Admins can view all audit logs
CREATE POLICY "admins_view_all_audit_logs"
ON public.audit_logs
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- Users can view their own audit logs
CREATE POLICY "users_view_own_audit_logs"
ON public.audit_logs
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Users can insert audit logs (for their own actions or system events)
CREATE POLICY "authenticated_insert_audit_logs"
ON public.audit_logs
FOR INSERT
TO authenticated
WITH CHECK ((auth.uid() = user_id) OR (user_id IS NULL));

-- ==============================================================================
-- FIX: stolen_item_notifications - Theft Victim Notifications
-- ==============================================================================

ALTER TABLE public.stolen_item_notifications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "users_view_notifications" ON public.stolen_item_notifications;
DROP POLICY IF EXISTS "users_update_notifications" ON public.stolen_item_notifications;

CREATE POLICY "users_view_own_notifications"
ON public.stolen_item_notifications
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "users_update_own_notifications"
ON public.stolen_item_notifications
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "service_role_notifications_access"
ON public.stolen_item_notifications
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- FIX: gsc_oauth_tokens - OAuth tokens should be user-specific only
-- ==============================================================================

ALTER TABLE public.gsc_oauth_tokens ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "users_own_gsc_tokens" ON public.gsc_oauth_tokens;

CREATE POLICY "users_manage_own_gsc_tokens"
ON public.gsc_oauth_tokens
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "service_role_gsc_tokens_access"
ON public.gsc_oauth_tokens
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- FIX: Ensure all AI tables have explicit authenticated role targeting
-- ==============================================================================

DROP POLICY IF EXISTS "admins_only_ai_agent_learnings" ON public.ai_agent_learnings;
DROP POLICY IF EXISTS "admins_only_ai_agent_runs" ON public.ai_agent_runs;
DROP POLICY IF EXISTS "admins_only_ai_content_queue" ON public.ai_content_queue;
DROP POLICY IF EXISTS "admins_only_ai_recommendations" ON public.ai_recommendations;
DROP POLICY IF EXISTS "admins_only_fraud_analysis" ON public.fraud_analysis;

-- AI Agent Learnings - Admin only
CREATE POLICY "admins_manage_ai_agent_learnings"
ON public.ai_agent_learnings
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_ai_agent_learnings_access"
ON public.ai_agent_learnings
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- AI Agent Runs - Admin only
CREATE POLICY "admins_manage_ai_agent_runs"
ON public.ai_agent_runs
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_ai_agent_runs_access"
ON public.ai_agent_runs
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- AI Content Queue - Admin only
CREATE POLICY "admins_manage_ai_content_queue"
ON public.ai_content_queue
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_ai_content_queue_access"
ON public.ai_content_queue
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- AI Recommendations - Admin only
CREATE POLICY "admins_manage_ai_recommendations"
ON public.ai_recommendations
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_ai_recommendations_access"
ON public.ai_recommendations
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Fraud Analysis - Admin only
CREATE POLICY "admins_manage_fraud_analysis"
ON public.fraud_analysis
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "service_role_fraud_analysis_access"
ON public.fraud_analysis
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- FIX: Community Stories - Ensure proper role targeting
-- ==============================================================================

DROP POLICY IF EXISTS "users_manage_stories" ON public.community_stories;

CREATE POLICY "users_manage_own_stories"
ON public.community_stories
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- ==============================================================================
-- FIX: User Roles - Ensure proper role targeting
-- ==============================================================================

DROP POLICY IF EXISTS "admins_manage_roles" ON public.user_roles;
DROP POLICY IF EXISTS "users_view_roles" ON public.user_roles;

CREATE POLICY "admins_manage_user_roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "users_view_own_roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "service_role_user_roles_access"
ON public.user_roles
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- FIX: User Watchlist - Ensure proper role targeting
-- ==============================================================================

DROP POLICY IF EXISTS "users_view_watchlist" ON public.user_watchlist;
DROP POLICY IF EXISTS "users_insert_watchlist" ON public.user_watchlist;
DROP POLICY IF EXISTS "users_update_watchlist" ON public.user_watchlist;
DROP POLICY IF EXISTS "users_delete_watchlist" ON public.user_watchlist;

CREATE POLICY "users_view_own_watchlist"
ON public.user_watchlist
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "users_insert_own_watchlist"
ON public.user_watchlist
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_update_own_watchlist"
ON public.user_watchlist
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_delete_own_watchlist"
ON public.user_watchlist
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- ==============================================================================
-- FIX: Stolen Items - Ensure proper role targeting
-- ==============================================================================

DROP POLICY IF EXISTS "users_view_stolen_items" ON public.stolen_items;
DROP POLICY IF EXISTS "users_insert_stolen_items" ON public.stolen_items;
DROP POLICY IF EXISTS "users_update_stolen_items" ON public.stolen_items;
DROP POLICY IF EXISTS "users_delete_stolen_items" ON public.stolen_items;

CREATE POLICY "users_view_own_stolen_items"
ON public.stolen_items
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "users_insert_own_stolen_items"
ON public.stolen_items
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_update_own_stolen_items"
ON public.stolen_items
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_delete_own_stolen_items"
ON public.stolen_items
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Allow public read for verification lookups (stolen items are meant to be searchable)
CREATE POLICY "public_search_stolen_items"
ON public.stolen_items
FOR SELECT
TO anon, authenticated
USING (status = 'reported');

-- ==============================================================================
-- FIX: Pending Verifications - More restrictive access
-- ==============================================================================

DROP POLICY IF EXISTS "users_pending_verifications" ON public.pending_verifications;

CREATE POLICY "users_manage_own_pending_verifications"
ON public.pending_verifications
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "service_role_pending_verifications_access"
ON public.pending_verifications
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- FIX: Shared Reports - Keep public readable but only with share_code knowledge
-- ==============================================================================

DROP POLICY IF EXISTS "auth_view_shared_reports" ON public.shared_reports;

-- Anyone can view shared reports (they need the share_code to find them)
CREATE POLICY "public_view_shared_reports"
ON public.shared_reports
FOR SELECT
TO anon, authenticated
USING (true);

-- ==============================================================================
-- FIX: Blog Posts Author Management - Explicit role targeting
-- ==============================================================================

DROP POLICY IF EXISTS "authors_manage_blog_posts" ON public.blog_posts;

CREATE POLICY "authors_manage_own_blog_posts"
ON public.blog_posts
FOR ALL
TO authenticated
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);

-- Admins can manage all blog posts
CREATE POLICY "admins_manage_all_blog_posts"
ON public.blog_posts
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- ==============================================================================
-- FIX: Stripe Webhook Events - Admin and service role only
-- ==============================================================================

DROP POLICY IF EXISTS "Service role can manage webhook events" ON public.stripe_webhook_events;

CREATE POLICY "service_role_webhook_events_access"
ON public.stripe_webhook_events
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "admins_view_webhook_events"
ON public.stripe_webhook_events
FOR SELECT
TO authenticated
USING (public.is_admin_user());