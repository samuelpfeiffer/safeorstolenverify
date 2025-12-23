-- =====================================================
-- FINAL FIX: Drop and recreate all policies with explicit role targeting
-- This ensures the linter sees proper role restrictions
-- =====================================================

-- AI TABLES
DROP POLICY IF EXISTS "admins_manage_ai_agent_learnings" ON public.ai_agent_learnings;
DROP POLICY IF EXISTS "service_role_ai_agent_learnings" ON public.ai_agent_learnings;
CREATE POLICY "admins_only_ai_agent_learnings" ON public.ai_agent_learnings FOR ALL TO authenticated USING (public.is_admin_user()) WITH CHECK (public.is_admin_user());

DROP POLICY IF EXISTS "admins_manage_ai_agent_runs" ON public.ai_agent_runs;
DROP POLICY IF EXISTS "service_role_ai_agent_runs" ON public.ai_agent_runs;
CREATE POLICY "admins_only_ai_agent_runs" ON public.ai_agent_runs FOR ALL TO authenticated USING (public.is_admin_user()) WITH CHECK (public.is_admin_user());

DROP POLICY IF EXISTS "admins_manage_ai_content_queue" ON public.ai_content_queue;
DROP POLICY IF EXISTS "service_role_ai_content_queue" ON public.ai_content_queue;
CREATE POLICY "admins_only_ai_content_queue" ON public.ai_content_queue FOR ALL TO authenticated USING (public.is_admin_user()) WITH CHECK (public.is_admin_user());

DROP POLICY IF EXISTS "admins_manage_ai_recommendations" ON public.ai_recommendations;
DROP POLICY IF EXISTS "service_role_ai_recommendations" ON public.ai_recommendations;
CREATE POLICY "admins_only_ai_recommendations" ON public.ai_recommendations FOR ALL TO authenticated USING (public.is_admin_user()) WITH CHECK (public.is_admin_user());

-- AUDIT LOGS
DROP POLICY IF EXISTS "auth_admins_view_all_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "auth_users_view_own_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "auth_users_insert_audit_logs" ON public.audit_logs;
DROP POLICY IF EXISTS "service_role_audit_logs" ON public.audit_logs;
CREATE POLICY "admins_view_audit_logs" ON public.audit_logs FOR SELECT TO authenticated USING (public.is_admin_user());
CREATE POLICY "users_view_own_audit_logs" ON public.audit_logs FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "users_insert_audit_logs" ON public.audit_logs FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id) OR (user_id IS NULL));

-- BLOG POSTS (keep public read, fix manage policy)
DROP POLICY IF EXISTS "auth_authors_manage_own_blog_posts" ON public.blog_posts;
CREATE POLICY "authors_manage_blog_posts" ON public.blog_posts FOR ALL TO authenticated USING (auth.uid() = author_id) WITH CHECK (auth.uid() = author_id);

-- CHECKOUT SESSIONS
DROP POLICY IF EXISTS "users_manage_own_checkout_sessions" ON public.checkout_sessions;
DROP POLICY IF EXISTS "service_role_full_access_checkout_sessions" ON public.checkout_sessions;
CREATE POLICY "users_own_checkout_sessions" ON public.checkout_sessions FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- COMMUNITY STORIES
DROP POLICY IF EXISTS "auth_users_manage_own_stories" ON public.community_stories;
DROP POLICY IF EXISTS "auth_users_create_stories" ON public.community_stories;
DROP POLICY IF EXISTS "service_role_manage_community_stories" ON public.community_stories;
CREATE POLICY "users_manage_stories" ON public.community_stories FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- CREDIT TRANSACTIONS
DROP POLICY IF EXISTS "users_view_own_credit_transactions" ON public.credit_transactions;
DROP POLICY IF EXISTS "service_role_full_access_credit_transactions" ON public.credit_transactions;
CREATE POLICY "users_view_credits" ON public.credit_transactions FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- CUSTOMER PORTAL SESSIONS
DROP POLICY IF EXISTS "users_manage_own_portal_sessions" ON public.customer_portal_sessions;
DROP POLICY IF EXISTS "service_role_full_access_portal_sessions" ON public.customer_portal_sessions;
CREATE POLICY "users_own_portal_sessions" ON public.customer_portal_sessions FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- FRAUD ANALYSIS
DROP POLICY IF EXISTS "admins_manage_fraud_analysis" ON public.fraud_analysis;
DROP POLICY IF EXISTS "service_role_fraud_analysis" ON public.fraud_analysis;
CREATE POLICY "admins_only_fraud_analysis" ON public.fraud_analysis FOR ALL TO authenticated USING (public.is_admin_user()) WITH CHECK (public.is_admin_user());

-- GSC OAUTH TOKENS
DROP POLICY IF EXISTS "users_manage_own_gsc_tokens" ON public.gsc_oauth_tokens;
DROP POLICY IF EXISTS "service_role_manage_gsc_tokens" ON public.gsc_oauth_tokens;
CREATE POLICY "users_own_gsc_tokens" ON public.gsc_oauth_tokens FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- NEWSLETTER SUBSCRIBERS
DROP POLICY IF EXISTS "newsletter_admin_select" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_update" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_delete" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_secure_insert" ON public.newsletter_subscribers;
CREATE POLICY "admins_read_newsletter" ON public.newsletter_subscribers FOR SELECT TO authenticated USING (public.is_service_role_or_admin());
CREATE POLICY "admins_update_newsletter" ON public.newsletter_subscribers FOR UPDATE TO authenticated USING (public.is_service_role_or_admin()) WITH CHECK (public.is_service_role_or_admin());
CREATE POLICY "admins_delete_newsletter" ON public.newsletter_subscribers FOR DELETE TO authenticated USING (public.is_service_role_or_admin());
-- Keep public insert for subscription form (intentional)
CREATE POLICY "public_subscribe_newsletter" ON public.newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (true);

-- PENDING VERIFICATIONS
DROP POLICY IF EXISTS "auth_users_manage_pending_verifications" ON public.pending_verifications;
CREATE POLICY "users_pending_verifications" ON public.pending_verifications FOR ALL TO authenticated USING (auth.uid() IS NOT NULL) WITH CHECK (auth.uid() IS NOT NULL);

-- PROFILES
DROP POLICY IF EXISTS "users_can_view_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_can_update_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_can_insert_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "service_role_full_access_profiles" ON public.profiles;
CREATE POLICY "users_view_profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "users_update_profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE POLICY "users_insert_profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);

-- PURCHASES
DROP POLICY IF EXISTS "users_manage_own_purchases" ON public.purchases;
DROP POLICY IF EXISTS "service_role_full_access_purchases" ON public.purchases;
CREATE POLICY "users_own_purchases" ON public.purchases FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- RATE LIMITS
DROP POLICY IF EXISTS "users_manage_own_rate_limits" ON public.rate_limits;
DROP POLICY IF EXISTS "service_role_full_access_rate_limits" ON public.rate_limits;
CREATE POLICY "users_own_rate_limits" ON public.rate_limits FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- SHARED REPORTS
DROP POLICY IF EXISTS "authenticated_view_shared_reports" ON public.shared_reports;
DROP POLICY IF EXISTS "auth_users_create_shared_reports" ON public.shared_reports;
DROP POLICY IF EXISTS "Service role can manage shared reports" ON public.shared_reports;
CREATE POLICY "auth_view_shared_reports" ON public.shared_reports FOR SELECT TO authenticated USING (true);
CREATE POLICY "users_create_shared_reports" ON public.shared_reports FOR INSERT TO authenticated WITH CHECK (EXISTS (SELECT 1 FROM stolen_items WHERE stolen_items.id = shared_reports.stolen_item_id AND stolen_items.user_id = auth.uid()));

-- STOLEN ITEM NOTIFICATIONS
DROP POLICY IF EXISTS "users_view_own_notifications" ON public.stolen_item_notifications;
DROP POLICY IF EXISTS "users_update_own_notifications" ON public.stolen_item_notifications;
DROP POLICY IF EXISTS "service_role_manage_notifications" ON public.stolen_item_notifications;
CREATE POLICY "users_view_notifications" ON public.stolen_item_notifications FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "users_update_notifications" ON public.stolen_item_notifications FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- STOLEN ITEMS
DROP POLICY IF EXISTS "auth_users_view_own_stolen_items" ON public.stolen_items;
DROP POLICY IF EXISTS "auth_users_insert_own_stolen_items" ON public.stolen_items;
DROP POLICY IF EXISTS "auth_users_update_own_stolen_items" ON public.stolen_items;
DROP POLICY IF EXISTS "auth_users_delete_own_stolen_items" ON public.stolen_items;
DROP POLICY IF EXISTS "Service role can manage all stolen item data" ON public.stolen_items;
DROP POLICY IF EXISTS "Service role can manage all stolen items" ON public.stolen_items;
CREATE POLICY "users_view_stolen_items" ON public.stolen_items FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "users_insert_stolen_items" ON public.stolen_items FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "users_update_stolen_items" ON public.stolen_items FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "users_delete_stolen_items" ON public.stolen_items FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- USER ROLES
DROP POLICY IF EXISTS "auth_admins_manage_user_roles" ON public.user_roles;
DROP POLICY IF EXISTS "auth_users_view_own_roles" ON public.user_roles;
DROP POLICY IF EXISTS "service_role_user_roles" ON public.user_roles;
CREATE POLICY "admins_manage_roles" ON public.user_roles FOR ALL TO authenticated USING (public.is_admin_user()) WITH CHECK (public.is_admin_user());
CREATE POLICY "users_view_roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- USER WATCHLIST
DROP POLICY IF EXISTS "auth_users_view_own_watchlist" ON public.user_watchlist;
DROP POLICY IF EXISTS "auth_users_insert_own_watchlist" ON public.user_watchlist;
DROP POLICY IF EXISTS "auth_users_update_own_watchlist" ON public.user_watchlist;
DROP POLICY IF EXISTS "auth_users_delete_own_watchlist" ON public.user_watchlist;
DROP POLICY IF EXISTS "Service role can manage all watchlist items" ON public.user_watchlist;
CREATE POLICY "users_view_watchlist" ON public.user_watchlist FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "users_insert_watchlist" ON public.user_watchlist FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "users_update_watchlist" ON public.user_watchlist FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "users_delete_watchlist" ON public.user_watchlist FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- VERIFICATION RESULTS
DROP POLICY IF EXISTS "users_manage_own_verification_results" ON public.verification_results;
DROP POLICY IF EXISTS "service_role_full_access_verification_results" ON public.verification_results;
CREATE POLICY "users_own_verification_results" ON public.verification_results FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- VERIFICATION SEARCHES
DROP POLICY IF EXISTS "auth_users_manage_own_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "auth_users_insert_own_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "service_role_full_access_searches" ON public.verification_searches;
CREATE POLICY "users_own_searches" ON public.verification_searches FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);