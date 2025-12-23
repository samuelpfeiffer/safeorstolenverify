-- =====================================================
-- PHASE 1: FIX ALL RLS SECURITY WARNINGS
-- Restrict anonymous access to authenticated users only
-- Keep public access ONLY for blog content and approved stories
-- =====================================================

-- =====================================================
-- 1. STOLEN_ITEMS - Remove public SELECT, keep auth only
-- =====================================================
DROP POLICY IF EXISTS "Anyone can view all stolen items" ON public.stolen_items;

-- Keep existing auth policies (users can view/manage their own items)
-- Service role policies remain for backend operations

-- =====================================================
-- 2. SHARED_REPORTS - Restrict to authenticated users
-- =====================================================
DROP POLICY IF EXISTS "Anyone can view shared reports" ON public.shared_reports;

CREATE POLICY "authenticated_view_shared_reports" 
ON public.shared_reports 
FOR SELECT 
TO authenticated
USING (true);

-- =====================================================
-- 3. BLOG CONTENT - Keep public (intentional for SEO)
-- blog_posts, blog_categories, blog_tags, blog_post_categories, blog_post_tags
-- These are already correctly configured - no changes needed
-- =====================================================

-- =====================================================
-- 4. COMMUNITY_STORIES - Already restricted to approved only
-- Remove duplicate policies, keep clean structure
-- =====================================================
DROP POLICY IF EXISTS "Public can view approved stories" ON public.community_stories;
DROP POLICY IF EXISTS "Public can view approved stories without emails" ON public.community_stories;
-- Keep public_view_approved_stories which is correct

-- =====================================================
-- 5. NEWSLETTER_SUBSCRIBERS - Already properly secured
-- Only admins/service role can read, public can insert via function
-- No changes needed
-- =====================================================

-- =====================================================
-- 6. PENDING_VERIFICATIONS - Restrict to authenticated
-- =====================================================
DROP POLICY IF EXISTS "Authenticated users can manage their pending verifications" ON public.pending_verifications;

CREATE POLICY "auth_users_manage_pending_verifications" 
ON public.pending_verifications 
FOR ALL 
TO authenticated
USING (auth.uid() IS NOT NULL)
WITH CHECK (auth.uid() IS NOT NULL);

-- =====================================================
-- 7. VERIFICATION_SEARCHES - Add explicit auth check
-- =====================================================
DROP POLICY IF EXISTS "authenticated_users_insert_searches" ON public.verification_searches;

CREATE POLICY "auth_users_insert_own_searches" 
ON public.verification_searches 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- 8. AI TABLES - Already admin/service only, add explicit role checks
-- These are correctly configured with is_admin_user() checks
-- No changes needed for: ai_agent_learnings, ai_agent_runs, 
-- ai_content_queue, ai_recommendations
-- =====================================================

-- =====================================================
-- 9. AUDIT_LOGS - Ensure auth requirement
-- =====================================================
DROP POLICY IF EXISTS "auth_users_insert_own_audit_logs" ON public.audit_logs;

CREATE POLICY "auth_users_insert_audit_logs" 
ON public.audit_logs 
FOR INSERT 
TO authenticated
WITH CHECK ((auth.uid() = user_id) OR (user_id IS NULL));

-- =====================================================
-- 10. FRAUD_ANALYSIS - Already admin only, no changes
-- =====================================================

-- =====================================================
-- 11. USER_ROLES - Already properly secured
-- Only admins can manage, users can view own
-- =====================================================

-- =====================================================
-- 12. STRIPE_WEBHOOK_EVENTS - Service role only (correct)
-- =====================================================

-- =====================================================
-- 13. GSC_OAUTH_TOKENS - Already properly secured
-- =====================================================

-- =====================================================
-- 14. Update service role policies to use proper checks
-- =====================================================

-- Ensure all service role policies properly check role
-- These are already using (auth.role() = 'service_role') or is_service_role()

-- =====================================================
-- SUMMARY OF CHANGES:
-- - Removed "Anyone can view all stolen items" (was public, now auth only)
-- - Removed "Anyone can view shared reports" (now auth only)
-- - Cleaned up duplicate community_stories policies
-- - Made pending_verifications explicitly auth only
-- - Made verification_searches insert require auth
-- - Made audit_logs insert require auth
-- =====================================================