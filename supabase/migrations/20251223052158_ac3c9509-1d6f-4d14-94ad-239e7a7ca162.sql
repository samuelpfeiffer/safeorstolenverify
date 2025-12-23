-- =====================================================
-- PHASE 2: FIX REMAINING RLS WARNINGS
-- Add explicit TO authenticated clause to all admin policies
-- =====================================================

-- =====================================================
-- AI TABLES - Fix admin policies to require authentication
-- =====================================================

-- ai_agent_learnings
DROP POLICY IF EXISTS "admins_manage_ai_agent_learnings" ON public.ai_agent_learnings;
CREATE POLICY "admins_manage_ai_agent_learnings" 
ON public.ai_agent_learnings 
FOR ALL 
TO authenticated
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- ai_agent_runs
DROP POLICY IF EXISTS "admins_manage_ai_agent_runs" ON public.ai_agent_runs;
CREATE POLICY "admins_manage_ai_agent_runs" 
ON public.ai_agent_runs 
FOR ALL 
TO authenticated
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- ai_content_queue
DROP POLICY IF EXISTS "admins_manage_ai_content_queue" ON public.ai_content_queue;
CREATE POLICY "admins_manage_ai_content_queue" 
ON public.ai_content_queue 
FOR ALL 
TO authenticated
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- ai_recommendations
DROP POLICY IF EXISTS "admins_manage_ai_recommendations" ON public.ai_recommendations;
CREATE POLICY "admins_manage_ai_recommendations" 
ON public.ai_recommendations 
FOR ALL 
TO authenticated
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- =====================================================
-- AUDIT_LOGS - Fix policies
-- =====================================================
DROP POLICY IF EXISTS "auth_admins_view_all_audit_logs" ON public.audit_logs;
CREATE POLICY "auth_admins_view_all_audit_logs" 
ON public.audit_logs 
FOR SELECT 
TO authenticated
USING (is_admin_user());

DROP POLICY IF EXISTS "auth_users_view_own_audit_logs" ON public.audit_logs;
CREATE POLICY "auth_users_view_own_audit_logs" 
ON public.audit_logs 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- =====================================================
-- FRAUD_ANALYSIS - Fix admin policy
-- =====================================================
DROP POLICY IF EXISTS "admins_manage_fraud_analysis" ON public.fraud_analysis;
CREATE POLICY "admins_manage_fraud_analysis" 
ON public.fraud_analysis 
FOR ALL 
TO authenticated
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- =====================================================
-- USER_ROLES - Fix policies
-- =====================================================
DROP POLICY IF EXISTS "auth_admins_manage_user_roles" ON public.user_roles;
CREATE POLICY "auth_admins_manage_user_roles" 
ON public.user_roles 
FOR ALL 
TO authenticated
USING (is_admin_user())
WITH CHECK (is_admin_user());

DROP POLICY IF EXISTS "auth_users_view_own_roles" ON public.user_roles;
CREATE POLICY "auth_users_view_own_roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- =====================================================
-- CHECKOUT_SESSIONS - Fix policy
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_checkout_sessions" ON public.checkout_sessions;
CREATE POLICY "users_manage_own_checkout_sessions" 
ON public.checkout_sessions 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- CREDIT_TRANSACTIONS - Fix policy
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_credit_transactions" ON public.credit_transactions;
CREATE POLICY "users_view_own_credit_transactions" 
ON public.credit_transactions 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- =====================================================
-- CUSTOMER_PORTAL_SESSIONS - Fix policy
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_portal_sessions" ON public.customer_portal_sessions;
CREATE POLICY "users_manage_own_portal_sessions" 
ON public.customer_portal_sessions 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- GSC_OAUTH_TOKENS - Fix policy
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_gsc_tokens" ON public.gsc_oauth_tokens;
CREATE POLICY "users_manage_own_gsc_tokens" 
ON public.gsc_oauth_tokens 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- NEWSLETTER_SUBSCRIBERS - Fix policies
-- =====================================================
DROP POLICY IF EXISTS "newsletter_admin_select" ON public.newsletter_subscribers;
CREATE POLICY "newsletter_admin_select" 
ON public.newsletter_subscribers 
FOR SELECT 
TO authenticated
USING (is_service_role_or_admin());

DROP POLICY IF EXISTS "newsletter_admin_update" ON public.newsletter_subscribers;
CREATE POLICY "newsletter_admin_update" 
ON public.newsletter_subscribers 
FOR UPDATE 
TO authenticated
USING (is_service_role_or_admin())
WITH CHECK (is_service_role_or_admin());

DROP POLICY IF EXISTS "newsletter_admin_delete" ON public.newsletter_subscribers;
CREATE POLICY "newsletter_admin_delete" 
ON public.newsletter_subscribers 
FOR DELETE 
TO authenticated
USING (is_service_role_or_admin());

-- =====================================================
-- PROFILES - Fix policies
-- =====================================================
DROP POLICY IF EXISTS "users_can_view_own_profile" ON public.profiles;
CREATE POLICY "users_can_view_own_profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = id);

DROP POLICY IF EXISTS "users_can_update_own_profile" ON public.profiles;
CREATE POLICY "users_can_update_own_profile" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "users_can_insert_own_profile" ON public.profiles;
CREATE POLICY "users_can_insert_own_profile" 
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = id);

-- =====================================================
-- PURCHASES - Fix policy
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_purchases" ON public.purchases;
CREATE POLICY "users_manage_own_purchases" 
ON public.purchases 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- RATE_LIMITS - Fix policy
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_rate_limits" ON public.rate_limits;
CREATE POLICY "users_manage_own_rate_limits" 
ON public.rate_limits 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- STOLEN_ITEM_NOTIFICATIONS - Fix policies
-- =====================================================
DROP POLICY IF EXISTS "users_view_own_notifications" ON public.stolen_item_notifications;
CREATE POLICY "users_view_own_notifications" 
ON public.stolen_item_notifications 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_update_own_notifications" ON public.stolen_item_notifications;
CREATE POLICY "users_update_own_notifications" 
ON public.stolen_item_notifications 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- STOLEN_ITEMS - Fix all policies
-- =====================================================
DROP POLICY IF EXISTS "Users can view their own stolen items" ON public.stolen_items;
DROP POLICY IF EXISTS "Users can insert their own stolen items" ON public.stolen_items;
DROP POLICY IF EXISTS "Users can update their own stolen items" ON public.stolen_items;
DROP POLICY IF EXISTS "Users can delete their own stolen items" ON public.stolen_items;
DROP POLICY IF EXISTS "Authenticated users can create stolen item reports" ON public.stolen_items;
DROP POLICY IF EXISTS "Users can update their own stolen item reports" ON public.stolen_items;

CREATE POLICY "auth_users_view_own_stolen_items" 
ON public.stolen_items 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "auth_users_insert_own_stolen_items" 
ON public.stolen_items 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "auth_users_update_own_stolen_items" 
ON public.stolen_items 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "auth_users_delete_own_stolen_items" 
ON public.stolen_items 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- =====================================================
-- USER_WATCHLIST - Fix policies
-- =====================================================
DROP POLICY IF EXISTS "Users can view own watchlist" ON public.user_watchlist;
DROP POLICY IF EXISTS "Users can insert own watchlist items" ON public.user_watchlist;
DROP POLICY IF EXISTS "Users can update own watchlist items" ON public.user_watchlist;
DROP POLICY IF EXISTS "Users can delete own watchlist items" ON public.user_watchlist;

CREATE POLICY "auth_users_view_own_watchlist" 
ON public.user_watchlist 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "auth_users_insert_own_watchlist" 
ON public.user_watchlist 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "auth_users_update_own_watchlist" 
ON public.user_watchlist 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "auth_users_delete_own_watchlist" 
ON public.user_watchlist 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- =====================================================
-- VERIFICATION_RESULTS - Fix policy
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_verification_results" ON public.verification_results;
CREATE POLICY "users_manage_own_verification_results" 
ON public.verification_results 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- VERIFICATION_SEARCHES - Fix policies
-- =====================================================
DROP POLICY IF EXISTS "authenticated_users_manage_own_searches" ON public.verification_searches;
CREATE POLICY "auth_users_manage_own_searches" 
ON public.verification_searches 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- COMMUNITY_STORIES - Fix policies (keep public read for approved)
-- =====================================================
DROP POLICY IF EXISTS "users_manage_own_stories" ON public.community_stories;
CREATE POLICY "auth_users_manage_own_stories" 
ON public.community_stories 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "auth_create_stories" ON public.community_stories;
CREATE POLICY "auth_users_create_stories" 
ON public.community_stories 
FOR INSERT 
TO authenticated
WITH CHECK ((auth.uid() = user_id) OR (user_id IS NULL));

-- =====================================================
-- SHARED_REPORTS - Fix policies
-- =====================================================
DROP POLICY IF EXISTS "Users can create shared reports for their items" ON public.shared_reports;
CREATE POLICY "auth_users_create_shared_reports" 
ON public.shared_reports 
FOR INSERT 
TO authenticated
WITH CHECK (EXISTS ( 
  SELECT 1 FROM stolen_items 
  WHERE stolen_items.id = shared_reports.stolen_item_id 
  AND stolen_items.user_id = auth.uid()
));

-- =====================================================
-- BLOG CONTENT - These intentionally stay public for SEO
-- Adding explicit anon role to make intent clear
-- =====================================================
DROP POLICY IF EXISTS "public_can_view_blog_categories" ON public.blog_categories;
CREATE POLICY "public_can_view_blog_categories" 
ON public.blog_categories 
FOR SELECT 
TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "public_can_view_blog_tags" ON public.blog_tags;
CREATE POLICY "public_can_view_blog_tags" 
ON public.blog_tags 
FOR SELECT 
TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "public_can_view_published_blog_posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Public can view published blog posts" ON public.blog_posts;
CREATE POLICY "public_can_view_published_blog_posts" 
ON public.blog_posts 
FOR SELECT 
TO anon, authenticated
USING (status = 'published');

DROP POLICY IF EXISTS "Authenticated users can manage their own blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "authors_can_manage_own_blog_posts" ON public.blog_posts;
CREATE POLICY "auth_authors_manage_own_blog_posts" 
ON public.blog_posts 
FOR ALL 
TO authenticated
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);

DROP POLICY IF EXISTS "public_can_view_published_post_categories" ON public.blog_post_categories;
CREATE POLICY "public_can_view_published_post_categories" 
ON public.blog_post_categories 
FOR SELECT 
TO anon, authenticated
USING (EXISTS ( 
  SELECT 1 FROM blog_posts 
  WHERE blog_posts.id = blog_post_categories.post_id 
  AND blog_posts.status = 'published'
));

DROP POLICY IF EXISTS "public_can_view_published_post_tags" ON public.blog_post_tags;
CREATE POLICY "public_can_view_published_post_tags" 
ON public.blog_post_tags 
FOR SELECT 
TO anon, authenticated
USING (EXISTS ( 
  SELECT 1 FROM blog_posts 
  WHERE blog_posts.id = blog_post_tags.post_id 
  AND blog_posts.status = 'published'
));

-- Keep public read for approved community stories (intentional for social proof)
DROP POLICY IF EXISTS "public_view_approved_stories" ON public.community_stories;
CREATE POLICY "public_view_approved_stories" 
ON public.community_stories 
FOR SELECT 
TO anon, authenticated
USING (is_approved = true);