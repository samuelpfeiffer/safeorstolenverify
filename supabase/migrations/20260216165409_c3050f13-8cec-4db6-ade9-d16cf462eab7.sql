
-- ============================================================
-- Fix 1: Add RESTRICTIVE deny-anon policies to all tables
-- that should only allow authenticated access.
-- Tables that already have deny_anon policies are skipped.
-- Tables with intentional public SELECT (blog, community_stories, shared_reports, stolen_items) keep public reads.
-- ============================================================

-- ai_agent_learnings (admin only, no anon needed)
CREATE POLICY deny_anon_ai_agent_learnings ON public.ai_agent_learnings
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- ai_agent_runs
CREATE POLICY deny_anon_ai_agent_runs ON public.ai_agent_runs
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- ai_content_queue
CREATE POLICY deny_anon_ai_content_queue ON public.ai_content_queue
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- ai_recommendations
CREATE POLICY deny_anon_ai_recommendations ON public.ai_recommendations
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- audit_logs (no anon access)
CREATE POLICY deny_anon_audit_logs ON public.audit_logs
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- blog_posts: keep public SELECT for published posts, deny writes
CREATE POLICY deny_anon_blog_posts_write ON public.blog_posts
  AS RESTRICTIVE FOR INSERT TO anon WITH CHECK (false);
CREATE POLICY deny_anon_blog_posts_update ON public.blog_posts
  AS RESTRICTIVE FOR UPDATE TO anon USING (false) WITH CHECK (false);
CREATE POLICY deny_anon_blog_posts_delete ON public.blog_posts
  AS RESTRICTIVE FOR DELETE TO anon USING (false);

-- checkout_sessions
CREATE POLICY deny_anon_checkout_sessions ON public.checkout_sessions
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- community_stories: keep public SELECT for approved, deny writes
CREATE POLICY deny_anon_community_stories_write ON public.community_stories
  AS RESTRICTIVE FOR INSERT TO anon WITH CHECK (false);
CREATE POLICY deny_anon_community_stories_update ON public.community_stories
  AS RESTRICTIVE FOR UPDATE TO anon USING (false) WITH CHECK (false);
CREATE POLICY deny_anon_community_stories_delete ON public.community_stories
  AS RESTRICTIVE FOR DELETE TO anon USING (false);

-- credit_transactions
CREATE POLICY deny_anon_credit_transactions ON public.credit_transactions
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- customer_portal_sessions
CREATE POLICY deny_anon_customer_portal_sessions ON public.customer_portal_sessions
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- fraud_analysis
CREATE POLICY deny_anon_fraud_analysis ON public.fraud_analysis
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- newsletter_subscribers (admin only, service_role inserts)
CREATE POLICY deny_anon_newsletter_subscribers ON public.newsletter_subscribers
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- pending_verifications
CREATE POLICY deny_anon_pending_verifications ON public.pending_verifications
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- purchases
CREATE POLICY deny_anon_purchases ON public.purchases
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- rate_limits
CREATE POLICY deny_anon_rate_limits ON public.rate_limits
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- shared_reports: keep public SELECT for share links, deny writes
CREATE POLICY deny_anon_shared_reports_write ON public.shared_reports
  AS RESTRICTIVE FOR INSERT TO anon WITH CHECK (false);
CREATE POLICY deny_anon_shared_reports_update ON public.shared_reports
  AS RESTRICTIVE FOR UPDATE TO anon USING (false) WITH CHECK (false);
CREATE POLICY deny_anon_shared_reports_delete ON public.shared_reports
  AS RESTRICTIVE FOR DELETE TO anon USING (false);

-- stolen_item_notifications
CREATE POLICY deny_anon_stolen_item_notifications ON public.stolen_item_notifications
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- stripe_webhook_events
CREATE POLICY deny_anon_stripe_webhook_events ON public.stripe_webhook_events
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- user_roles
CREATE POLICY deny_anon_user_roles ON public.user_roles
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- user_watchlist
CREATE POLICY deny_anon_user_watchlist ON public.user_watchlist
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- verification_results
CREATE POLICY deny_anon_verification_results ON public.verification_results
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- verification_searches
CREATE POLICY deny_anon_verification_searches ON public.verification_searches
  AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);

-- ============================================================
-- Fix 2: Tighten pending_verifications "always true" policies
-- Scope DELETE to session_id ownership check
-- ============================================================

-- Drop overly permissive policies
DROP POLICY IF EXISTS authenticated_only_delete_pending_verifications ON public.pending_verifications;
DROP POLICY IF EXISTS authenticated_only_select_pending_verifications ON public.pending_verifications;
DROP POLICY IF EXISTS authenticated_insert_pending_verifications ON public.pending_verifications;

-- Re-create with proper scoping (session_id is user-generated, scope to non-expired)
CREATE POLICY authenticated_select_pending_verifications ON public.pending_verifications
  FOR SELECT TO authenticated USING (expires_at > now());

CREATE POLICY authenticated_insert_pending_verifications ON public.pending_verifications
  FOR INSERT TO authenticated WITH CHECK (expires_at > now());

CREATE POLICY authenticated_delete_pending_verifications ON public.pending_verifications
  FOR DELETE TO authenticated USING (expires_at > now());
