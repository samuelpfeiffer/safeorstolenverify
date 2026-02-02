-- =====================================================
-- Security Fix: Restrict Anonymous Access to Authenticated Only
-- Fixes SUPA_auth_allow_anonymous_sign_ins warning
-- =====================================================

-- =====================================================
-- 1. VERIFICATION_SEARCHES - Remove anon access
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "users_insert_own_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "users_update_own_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "users_delete_own_searches" ON public.verification_searches;

-- Create authenticated-only policies
CREATE POLICY "authenticated_view_own_searches" ON public.verification_searches
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "authenticated_insert_own_searches" ON public.verification_searches
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "authenticated_update_own_searches" ON public.verification_searches
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "authenticated_delete_own_searches" ON public.verification_searches
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- =====================================================
-- 2. PROFILES - Ensure authenticated-only access
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_update_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_insert_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "admin_view_profiles" ON public.profiles;

CREATE POLICY "authenticated_view_own_profile" ON public.profiles
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "authenticated_update_own_profile" ON public.profiles
  FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "authenticated_insert_own_profile" ON public.profiles
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "admin_view_all_profiles" ON public.profiles
  FOR SELECT TO authenticated
  USING (is_admin_user());

-- =====================================================
-- 3. VERIFICATION_RESULTS - Authenticated only
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_verification_results" ON public.verification_results;
DROP POLICY IF EXISTS "users_update_own_verification_results" ON public.verification_results;
DROP POLICY IF EXISTS "users_delete_own_verification_results" ON public.verification_results;

CREATE POLICY "authenticated_view_own_results" ON public.verification_results
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "authenticated_update_own_results" ON public.verification_results
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "authenticated_delete_own_results" ON public.verification_results
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- =====================================================
-- 4. STOLEN_ITEMS - Authenticated only for user operations
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_stolen_items" ON public.stolen_items;
DROP POLICY IF EXISTS "users_update_own_stolen_items" ON public.stolen_items;
DROP POLICY IF EXISTS "users_delete_own_stolen_items" ON public.stolen_items;

CREATE POLICY "authenticated_view_own_stolen_items" ON public.stolen_items
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "authenticated_update_own_stolen_items" ON public.stolen_items
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "authenticated_delete_own_stolen_items" ON public.stolen_items
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- =====================================================
-- 5. USER_WATCHLIST - Authenticated only
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_watchlist" ON public.user_watchlist;
DROP POLICY IF EXISTS "users_update_own_watchlist" ON public.user_watchlist;
DROP POLICY IF EXISTS "users_delete_own_watchlist" ON public.user_watchlist;

CREATE POLICY "authenticated_view_own_watchlist" ON public.user_watchlist
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "authenticated_manage_own_watchlist" ON public.user_watchlist
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- 6. PURCHASES - Authenticated only
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_purchases" ON public.purchases;

CREATE POLICY "authenticated_view_own_purchases" ON public.purchases
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- =====================================================
-- 7. CREDIT_TRANSACTIONS - Authenticated only
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_credits" ON public.credit_transactions;

CREATE POLICY "authenticated_view_own_credits" ON public.credit_transactions
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- =====================================================
-- 8. CHECKOUT_SESSIONS - Authenticated only
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_checkout_sessions" ON public.checkout_sessions;

CREATE POLICY "authenticated_view_own_checkout_sessions" ON public.checkout_sessions
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- =====================================================
-- 9. CUSTOMER_PORTAL_SESSIONS - Authenticated only
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_portal_sessions" ON public.customer_portal_sessions;

CREATE POLICY "authenticated_view_own_portal_sessions" ON public.customer_portal_sessions
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- =====================================================
-- 10. STOLEN_ITEM_NOTIFICATIONS - Authenticated only
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_notifications" ON public.stolen_item_notifications;
DROP POLICY IF EXISTS "users_update_own_notifications" ON public.stolen_item_notifications;

CREATE POLICY "authenticated_view_own_notifications" ON public.stolen_item_notifications
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "authenticated_update_own_notifications" ON public.stolen_item_notifications
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- 11. GSC_OAUTH_TOKENS - Authenticated only
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_gsc_tokens" ON public.gsc_oauth_tokens;

CREATE POLICY "authenticated_manage_own_gsc_tokens" ON public.gsc_oauth_tokens
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- 12. RATE_LIMITS - Authenticated only
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_rate_limits" ON public.rate_limits;

CREATE POLICY "authenticated_view_own_rate_limits" ON public.rate_limits
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- =====================================================
-- 13. PENDING_VERIFICATIONS - Authenticated only
-- =====================================================
DROP POLICY IF EXISTS "authenticated_select_own_pending_verifications" ON public.pending_verifications;
DROP POLICY IF EXISTS "authenticated_delete_own_pending_verifications" ON public.pending_verifications;

CREATE POLICY "authenticated_only_select_pending_verifications" ON public.pending_verifications
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "authenticated_only_delete_pending_verifications" ON public.pending_verifications
  FOR DELETE TO authenticated
  USING (true);

-- =====================================================
-- 14. USER_ROLES - Authenticated only  
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_roles" ON public.user_roles;
DROP POLICY IF EXISTS "admins_manage_user_roles" ON public.user_roles;

CREATE POLICY "authenticated_view_own_roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "admin_manage_user_roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (is_admin_user())
  WITH CHECK (is_admin_user());

-- =====================================================
-- 15. COMMUNITY_STORIES - Authenticated for user actions
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_stories" ON public.community_stories;

CREATE POLICY "authenticated_manage_own_stories" ON public.community_stories
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- 16. AUDIT_LOGS - Authenticated only for user view
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "admins_view_all_audit_logs" ON public.audit_logs;

CREATE POLICY "authenticated_view_own_audit_logs" ON public.audit_logs
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "admin_view_all_audit_logs" ON public.audit_logs
  FOR SELECT TO authenticated
  USING (is_admin_user());

-- =====================================================
-- 17. AI TABLES - Admin authenticated only
-- =====================================================
DROP POLICY IF EXISTS "admins_manage_ai_agent_learnings" ON public.ai_agent_learnings;
DROP POLICY IF EXISTS "admins_manage_ai_agent_runs" ON public.ai_agent_runs;
DROP POLICY IF EXISTS "admins_manage_ai_content_queue" ON public.ai_content_queue;
DROP POLICY IF EXISTS "admins_manage_ai_recommendations" ON public.ai_recommendations;
DROP POLICY IF EXISTS "admins_manage_fraud_analysis" ON public.fraud_analysis;

CREATE POLICY "admin_manage_ai_agent_learnings" ON public.ai_agent_learnings
  FOR ALL TO authenticated
  USING (is_admin_user())
  WITH CHECK (is_admin_user());

CREATE POLICY "admin_manage_ai_agent_runs" ON public.ai_agent_runs
  FOR ALL TO authenticated
  USING (is_admin_user())
  WITH CHECK (is_admin_user());

CREATE POLICY "admin_manage_ai_content_queue" ON public.ai_content_queue
  FOR ALL TO authenticated
  USING (is_admin_user())
  WITH CHECK (is_admin_user());

CREATE POLICY "admin_manage_ai_recommendations" ON public.ai_recommendations
  FOR ALL TO authenticated
  USING (is_admin_user())
  WITH CHECK (is_admin_user());

CREATE POLICY "admin_manage_fraud_analysis" ON public.fraud_analysis
  FOR ALL TO authenticated
  USING (is_admin_user())
  WITH CHECK (is_admin_user());

-- =====================================================
-- 18. NEWSLETTER_SUBSCRIBERS - Admin authenticated only
-- =====================================================
DROP POLICY IF EXISTS "admins_read_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "admins_update_newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "admins_delete_newsletter" ON public.newsletter_subscribers;

CREATE POLICY "admin_read_newsletter" ON public.newsletter_subscribers
  FOR SELECT TO authenticated
  USING (is_admin_user());

CREATE POLICY "admin_update_newsletter" ON public.newsletter_subscribers
  FOR UPDATE TO authenticated
  USING (is_admin_user())
  WITH CHECK (is_admin_user());

CREATE POLICY "admin_delete_newsletter" ON public.newsletter_subscribers
  FOR DELETE TO authenticated
  USING (is_admin_user());

-- =====================================================
-- 19. STRIPE_WEBHOOK_EVENTS - Admin authenticated only
-- =====================================================
DROP POLICY IF EXISTS "admins_view_webhook_events" ON public.stripe_webhook_events;

CREATE POLICY "admin_view_webhook_events" ON public.stripe_webhook_events
  FOR SELECT TO authenticated
  USING (is_admin_user());

-- =====================================================
-- 20. BLOG_POSTS - Author/Admin authenticated only
-- =====================================================
DROP POLICY IF EXISTS "admins_manage_all_blog_posts" ON public.blog_posts;
DROP POLICY IF EXISTS "authors_manage_own_blog_posts" ON public.blog_posts;

CREATE POLICY "admin_manage_all_blog_posts" ON public.blog_posts
  FOR ALL TO authenticated
  USING (is_admin_user())
  WITH CHECK (is_admin_user());

CREATE POLICY "author_manage_own_blog_posts" ON public.blog_posts
  FOR ALL TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);