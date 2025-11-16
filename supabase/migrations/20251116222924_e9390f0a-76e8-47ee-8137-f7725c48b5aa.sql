-- Phase 2: Security Hardening - Restrict Anonymous Access
-- This migration restricts RLS policies to authenticated users only for sensitive tables

-- ============================================
-- AI ANALYSIS & CONTENT TABLES
-- ============================================

-- ai_analysis_sessions: Restrict to authenticated users only
DROP POLICY IF EXISTS "authenticated_users_manage_own_ai_sessions" ON public.ai_analysis_sessions;
CREATE POLICY "authenticated_users_manage_own_ai_sessions" 
ON public.ai_analysis_sessions
FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- ai_feedback: Restrict to authenticated users only
DROP POLICY IF EXISTS "authenticated_users_manage_own_ai_feedback" ON public.ai_feedback;
CREATE POLICY "authenticated_users_manage_own_ai_feedback"
ON public.ai_feedback
FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- ai_model_performance: Read-only for authenticated, manage for service role
DROP POLICY IF EXISTS "Authenticated users can view AI model performance" ON public.ai_model_performance;
CREATE POLICY "Authenticated users can view AI model performance"
ON public.ai_model_performance
FOR SELECT
TO authenticated
USING (true);

-- ============================================
-- AI EXECUTIVE SYSTEM TABLES
-- ============================================

-- ai_executive_actions: Service role and admin only
DROP POLICY IF EXISTS "Service role can manage executive actions" ON public.ai_executive_actions;
DROP POLICY IF EXISTS "admin_or_service_view_ai_actions" ON public.ai_executive_actions;

CREATE POLICY "Service role can manage executive actions"
ON public.ai_executive_actions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Admin can view executive actions"
ON public.ai_executive_actions
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- ai_executive_decisions: Service role and admin only
DROP POLICY IF EXISTS "Service role can manage executive decisions" ON public.ai_executive_decisions;
DROP POLICY IF EXISTS "admin_or_service_view_ai_decisions" ON public.ai_executive_decisions;

CREATE POLICY "Service role can manage executive decisions"
ON public.ai_executive_decisions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Admin can view executive decisions"
ON public.ai_executive_decisions
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- ai_executives: Service role and admin only
DROP POLICY IF EXISTS "Service role can manage AI executives" ON public.ai_executives;
DROP POLICY IF EXISTS "admin_or_service_view_ai_executives" ON public.ai_executives;

CREATE POLICY "Service role can manage AI executives"
ON public.ai_executives
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Admin can view AI executives"
ON public.ai_executives
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- ============================================
-- AI CONTENT GENERATION
-- ============================================

-- ai_content_generation_log: Admin only
DROP POLICY IF EXISTS "Admin can view AI content generation logs" ON public.ai_content_generation_log;
CREATE POLICY "Admin can view AI content generation logs"
ON public.ai_content_generation_log
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- ai_generated_content: Keep public read for SEO, restrict writes
DROP POLICY IF EXISTS "Generated content is viewable by everyone" ON public.ai_generated_content;
DROP POLICY IF EXISTS "Service role can manage content" ON public.ai_generated_content;

CREATE POLICY "Public can view published AI content"
ON public.ai_generated_content
FOR SELECT
USING (status = 'published');

CREATE POLICY "Service role can manage AI content"
ON public.ai_generated_content
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================
-- BLOG CONTENT (Keep public for SEO)
-- ============================================

-- blog_posts: Public read for published, authenticated write
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can manage their own blog posts" ON public.blog_posts;

CREATE POLICY "Public can view published blog posts"
ON public.blog_posts
FOR SELECT
USING (status = 'published');

CREATE POLICY "Authenticated users can manage their own blog posts"
ON public.blog_posts
FOR ALL
TO authenticated
USING (author_id = auth.uid())
WITH CHECK (author_id = auth.uid());

-- ============================================
-- SEO TABLES
-- ============================================

-- ai_seo_suggestions: Admin only
DROP POLICY IF EXISTS "Admin can manage SEO suggestions" ON public.ai_seo_suggestions;
CREATE POLICY "Admin can manage SEO suggestions"
ON public.ai_seo_suggestions
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- seo_keywords: Admin only
DROP POLICY IF EXISTS "Admin can manage SEO keywords" ON public.seo_keywords;
CREATE POLICY "Admin can manage SEO keywords"
ON public.seo_keywords
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- seo_performance: Admin only
DROP POLICY IF EXISTS "Admin can manage SEO performance" ON public.seo_performance;
CREATE POLICY "Admin can manage SEO performance"
ON public.seo_performance
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- ============================================
-- CONTENT STRATEGY TABLES
-- ============================================

-- blog_content_strategy: Admin only
DROP POLICY IF EXISTS "Admin can manage content strategy" ON public.blog_content_strategy;
CREATE POLICY "Admin can manage content strategy"
ON public.blog_content_strategy
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- content_generation_queue: Service role only
DROP POLICY IF EXISTS "Service role can manage content queue" ON public.content_generation_queue;
CREATE POLICY "Service role can manage content queue"
ON public.content_generation_queue
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- content_issues: Admin only
DROP POLICY IF EXISTS "Admin can manage content issues" ON public.content_issues;
CREATE POLICY "Admin can manage content issues"
ON public.content_issues
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- content_performance: Admin can view
DROP POLICY IF EXISTS "Admin can view content performance" ON public.content_performance;
CREATE POLICY "Admin can view content performance"
ON public.content_performance
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- content_performance_tracking: Service role only
DROP POLICY IF EXISTS "Service role can track content performance" ON public.content_performance_tracking;
CREATE POLICY "Service role can track content performance"
ON public.content_performance_tracking
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================
-- BUSINESS METRICS (Admin only)
-- ============================================

-- business_metrics: Admin view only
DROP POLICY IF EXISTS "Admin can view business metrics" ON public.business_metrics;
CREATE POLICY "Admin can view business metrics"
ON public.business_metrics
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- autonomous_system_metrics: Service role only
DROP POLICY IF EXISTS "Service role can track autonomous metrics" ON public.autonomous_system_metrics;
CREATE POLICY "Service role can track autonomous metrics"
ON public.autonomous_system_metrics
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================
-- COMPETITOR ANALYSIS (Admin only)
-- ============================================

-- competitor_analysis: Admin only
DROP POLICY IF EXISTS "Admin can manage competitor analysis" ON public.competitor_analysis;
CREATE POLICY "Admin can manage competitor analysis"
ON public.competitor_analysis
FOR ALL
TO authenticated
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- ============================================
-- COMMUNITY STORIES (Public read, authenticated write)
-- ============================================

-- community_stories: Public can view approved, users manage own
DROP POLICY IF EXISTS "Anyone can view approved stories" ON public.community_stories;
DROP POLICY IF EXISTS "Users can manage their own stories" ON public.community_stories;

CREATE POLICY "Public can view approved stories"
ON public.community_stories
FOR SELECT
USING (is_approved = true);

CREATE POLICY "Authenticated users can create stories"
ON public.community_stories
FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Users can update their own stories"
ON public.community_stories
FOR UPDATE
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- ============================================
-- VERIFICATION TABLES (Authenticated only)
-- ============================================

-- verification_searches: Users can only see their own
DROP POLICY IF EXISTS "Users can view their own searches" ON public.verification_searches;
CREATE POLICY "Users can view their own searches"
ON public.verification_searches
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can create their own searches"
ON public.verification_searches
FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

-- ============================================
-- NEWSLETTER (Secure function access only)
-- ============================================

-- newsletter_subscribers: No direct access, function only
DROP POLICY IF EXISTS "Newsletter managed by secure functions" ON public.newsletter_subscribers;
CREATE POLICY "Newsletter managed by secure functions"
ON public.newsletter_subscribers
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- ============================================
-- SUMMARY
-- ============================================
-- This migration:
-- 1. Restricts AI tables to authenticated users or service role
-- 2. Keeps public read access for SEO-critical content (blogs, published AI content)
-- 3. Admin-only access for metrics, analytics, and system management
-- 4. Service role access for automated systems
-- 5. User-scoped access for personal data (searches, feedback)
--
-- Anonymous users can now only:
-- - View published blog posts
-- - View published AI-generated content
-- - View approved community stories
-- 
-- Everything else requires authentication.