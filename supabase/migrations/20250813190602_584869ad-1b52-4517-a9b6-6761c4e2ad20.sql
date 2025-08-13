-- Fix All Security Warnings - Complete Resolution
-- This migration addresses every security warning from the linter

-- PHASE 1: Fix Anonymous Access Policy Warnings
-- Ensure all policies are properly scoped to authenticated role only

-- Fix alert_notifications policies
DROP POLICY IF EXISTS "Authenticated users can view their own notifications" ON public.alert_notifications;
CREATE POLICY "secure_alert_notifications_select"
ON public.alert_notifications
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix api_usage_logs policies  
DROP POLICY IF EXISTS "Authenticated users can view their own API usage" ON public.api_usage_logs;
CREATE POLICY "secure_api_usage_logs_select"
ON public.api_usage_logs
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix checkmend_api_usage policies
DROP POLICY IF EXISTS "Authenticated users can view their own CheckMEND API usage" ON public.checkmend_api_usage;
CREATE POLICY "secure_checkmend_api_usage_select"
ON public.checkmend_api_usage
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix checkout_sessions policies
DROP POLICY IF EXISTS "Authenticated users can view their own checkout sessions" ON public.checkout_sessions;
CREATE POLICY "secure_checkout_sessions_select"
ON public.checkout_sessions
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix customer_portal_sessions policies
DROP POLICY IF EXISTS "Authenticated users can view their own portal sessions" ON public.customer_portal_sessions;
CREATE POLICY "secure_customer_portal_sessions_select"
ON public.customer_portal_sessions
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix marketplace_integrations policies
DROP POLICY IF EXISTS "Authenticated users can manage their own marketplace integratio" ON public.marketplace_integrations;
CREATE POLICY "secure_marketplace_integrations_all"
ON public.marketplace_integrations
FOR ALL
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix marketplace_listings policies
DROP POLICY IF EXISTS "Authenticated users can update their own marketplace listings" ON public.marketplace_listings;
DROP POLICY IF EXISTS "Authenticated users can view their own marketplace listings" ON public.marketplace_listings;

CREATE POLICY "secure_marketplace_listings_select"
ON public.marketplace_listings
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "secure_marketplace_listings_update"
ON public.marketplace_listings
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix property_verifications policies
DROP POLICY IF EXISTS "Users can view their own property verifications" ON public.property_verifications;
CREATE POLICY "secure_property_verifications_select"
ON public.property_verifications
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix purchases policies
DROP POLICY IF EXISTS "Authenticated users can view their own purchases" ON public.purchases;
CREATE POLICY "secure_purchases_select"
ON public.purchases
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix rate_limits policies
DROP POLICY IF EXISTS "Authenticated users can view their own rate limits" ON public.rate_limits;
CREATE POLICY "secure_rate_limits_select"
ON public.rate_limits
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix real_time_alerts policies
DROP POLICY IF EXISTS "Users can manage their own alerts" ON public.real_time_alerts;
CREATE POLICY "secure_real_time_alerts_all"
ON public.real_time_alerts
FOR ALL
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix receipts policies
DROP POLICY IF EXISTS "Authenticated users can update their own receipts" ON public.receipts;
DROP POLICY IF EXISTS "Authenticated users can view their own receipts" ON public.receipts;

CREATE POLICY "secure_receipts_select"
ON public.receipts
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "secure_receipts_update"
ON public.receipts
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix recipero_api_usage policies
DROP POLICY IF EXISTS "Authenticated users can view their own API usage" ON public.recipero_api_usage;
CREATE POLICY "secure_recipero_api_usage_select"
ON public.recipero_api_usage
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix social_media_findings policies
DROP POLICY IF EXISTS "Authenticated users can view their own social media findings" ON public.social_media_findings;
CREATE POLICY "secure_social_media_findings_select"
ON public.social_media_findings
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix social_media_monitoring policies
DROP POLICY IF EXISTS "Authenticated users can manage their own social media monitorin" ON public.social_media_monitoring;
CREATE POLICY "secure_social_media_monitoring_all"
ON public.social_media_monitoring
FOR ALL
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix subscribers policies
DROP POLICY IF EXISTS "Authenticated users can update their own subscription" ON public.subscribers;
DROP POLICY IF EXISTS "Authenticated users can view their own subscription" ON public.subscribers;

CREATE POLICY "secure_subscribers_select"
ON public.subscribers
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "secure_subscribers_update"
ON public.subscribers
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix terms_acceptance policies
DROP POLICY IF EXISTS "Authenticated users can view their own terms acceptance" ON public.terms_acceptance;
CREATE POLICY "secure_terms_acceptance_select"
ON public.terms_acceptance
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix verification_results policies
DROP POLICY IF EXISTS "Authenticated users can view their own verification results" ON public.verification_results;
CREATE POLICY "secure_verification_results_select"
ON public.verification_results
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Fix verification_searches policies
DROP POLICY IF EXISTS "Authenticated users can update their own verification searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Authenticated users can view their own verification searches" ON public.verification_searches;

CREATE POLICY "secure_verification_searches_select"
ON public.verification_searches
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "secure_verification_searches_update"
ON public.verification_searches
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- PHASE 2: Fix Blog Table Policies (Keep these public for website functionality)
-- These tables need to remain accessible to anonymous users for the blog to work

-- Ensure blog posts are accessible to public but authors can manage their own
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authors can manage their own blog posts" ON public.blog_posts;

CREATE POLICY "public_can_view_published_blog_posts"
ON public.blog_posts
FOR SELECT
USING (status = 'published');

CREATE POLICY "authors_can_manage_own_blog_posts"
ON public.blog_posts
FOR ALL
TO authenticated
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);

-- Blog post categories and tags remain public for blog functionality
DROP POLICY IF EXISTS "Anyone can view published post categories" ON public.blog_post_categories;
CREATE POLICY "public_can_view_published_post_categories"
ON public.blog_post_categories
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM blog_posts 
    WHERE blog_posts.id = blog_post_categories.post_id 
    AND blog_posts.status = 'published'
  )
);

DROP POLICY IF EXISTS "Anyone can view published post tags" ON public.blog_post_tags;
CREATE POLICY "public_can_view_published_post_tags"
ON public.blog_post_tags
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM blog_posts 
    WHERE blog_posts.id = blog_post_tags.post_id 
    AND blog_posts.status = 'published'
  )
);

-- PHASE 3: Remove all anonymous role access from sensitive tables
-- Ensure no anonymous access to user data tables

REVOKE ALL ON public.alert_notifications FROM anon;
REVOKE ALL ON public.api_keys FROM anon;
REVOKE ALL ON public.api_usage_logs FROM anon;
REVOKE ALL ON public.checkmend_api_usage FROM anon;
REVOKE ALL ON public.checkout_sessions FROM anon;
REVOKE ALL ON public.customer_portal_sessions FROM anon;
REVOKE ALL ON public.marketplace_integrations FROM anon;
REVOKE ALL ON public.marketplace_listings FROM anon;
REVOKE ALL ON public.oauth_tokens FROM anon;
REVOKE ALL ON public.profiles FROM anon;
REVOKE ALL ON public.promotion_stats FROM anon;
REVOKE ALL ON public.property_verifications FROM anon;
REVOKE ALL ON public.purchases FROM anon;
REVOKE ALL ON public.rate_limits FROM anon;
REVOKE ALL ON public.real_time_alerts FROM anon;
REVOKE ALL ON public.receipts FROM anon;
REVOKE ALL ON public.recipero_api_usage FROM anon;
REVOKE ALL ON public.social_media_findings FROM anon;
REVOKE ALL ON public.social_media_monitoring FROM anon;
REVOKE ALL ON public.subscribers FROM anon;
REVOKE ALL ON public.terms_acceptance FROM anon;
REVOKE ALL ON public.verification_results FROM anon;
REVOKE ALL ON public.verification_searches FROM anon;

-- PHASE 4: Ensure proper permissions for authenticated users on all tables
GRANT SELECT, INSERT, UPDATE, DELETE ON public.alert_notifications TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.api_usage_logs TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.checkmend_api_usage TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.checkout_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.customer_portal_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.marketplace_integrations TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.marketplace_listings TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.property_verifications TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.rate_limits TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.real_time_alerts TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.recipero_api_usage TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.social_media_findings TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.social_media_monitoring TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.terms_acceptance TO authenticated;

-- Blog tables keep public SELECT access for website functionality
GRANT SELECT ON public.blog_categories TO anon;
GRANT SELECT ON public.blog_tags TO anon; 
GRANT SELECT ON public.blog_posts TO anon;
GRANT SELECT ON public.blog_post_categories TO anon;
GRANT SELECT ON public.blog_post_tags TO anon;

-- Service role maintains full access for administrative operations
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;