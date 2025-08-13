-- Fix all 31 security warnings by making policies explicitly target authenticated role only
-- This addresses all Anonymous Access Policy false positives

-- Remove ALL access from anon role and ensure ONLY authenticated role has access

-- First revoke ALL permissions from anon for all tables
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon;

-- Grant back only the specific permissions needed for blog functionality
GRANT SELECT ON public.blog_categories TO anon;
GRANT SELECT ON public.blog_tags TO anon;
GRANT SELECT ON public.blog_posts TO anon;
GRANT SELECT ON public.blog_post_categories TO anon;
GRANT SELECT ON public.blog_post_tags TO anon;

-- Now recreate ALL policies to be more explicit about authenticated role only
-- This will fix the 28 Anonymous Access Policy warnings

-- 1. Alert notifications - fix policy
DROP POLICY IF EXISTS "secure_alert_notifications_select" ON public.alert_notifications;
CREATE POLICY "authenticated_only_alert_notifications_select"
ON public.alert_notifications
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 2. API usage logs - fix policy  
DROP POLICY IF EXISTS "secure_api_usage_logs_select" ON public.api_usage_logs;
CREATE POLICY "authenticated_only_api_usage_logs_select"
ON public.api_usage_logs
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 3. CheckMEND API usage - fix policy
DROP POLICY IF EXISTS "secure_checkmend_api_usage_select" ON public.checkmend_api_usage;
CREATE POLICY "authenticated_only_checkmend_api_usage_select"
ON public.checkmend_api_usage
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 4. Checkout sessions - fix policy
DROP POLICY IF EXISTS "secure_checkout_sessions_select" ON public.checkout_sessions;
CREATE POLICY "authenticated_only_checkout_sessions_select"
ON public.checkout_sessions
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 5. Customer portal sessions - fix policy
DROP POLICY IF EXISTS "secure_customer_portal_sessions_select" ON public.customer_portal_sessions;
CREATE POLICY "authenticated_only_customer_portal_sessions_select"
ON public.customer_portal_sessions
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 6. Marketplace integrations - fix policy
DROP POLICY IF EXISTS "secure_marketplace_integrations_all" ON public.marketplace_integrations;
CREATE POLICY "authenticated_only_marketplace_integrations_all"
ON public.marketplace_integrations
FOR ALL
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 7. Marketplace listings - fix policies
DROP POLICY IF EXISTS "secure_marketplace_listings_select" ON public.marketplace_listings;
DROP POLICY IF EXISTS "secure_marketplace_listings_update" ON public.marketplace_listings;
CREATE POLICY "authenticated_only_marketplace_listings_select"
ON public.marketplace_listings
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "authenticated_only_marketplace_listings_update"
ON public.marketplace_listings
FOR UPDATE
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 8. Profiles - fix policies
DROP POLICY IF EXISTS "secure_profiles_select" ON public.profiles;
DROP POLICY IF EXISTS "secure_profiles_update" ON public.profiles;
DROP POLICY IF EXISTS "users_can_delete_own_profile" ON public.profiles;
CREATE POLICY "authenticated_only_profiles_select"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = id);

CREATE POLICY "authenticated_only_profiles_update"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = id);

CREATE POLICY "authenticated_only_profiles_delete"
ON public.profiles
FOR DELETE
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = id);

-- 9. Promotion stats - fix policy (this one can stay as is since it's meant for all authenticated users)
DROP POLICY IF EXISTS "authenticated_users_can_view_promotion_stats" ON public.promotion_stats;
CREATE POLICY "authenticated_only_promotion_stats_select"
ON public.promotion_stats
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL);

-- 10. Property verifications - fix policy
DROP POLICY IF EXISTS "secure_property_verifications_select" ON public.property_verifications;
CREATE POLICY "authenticated_only_property_verifications_select"
ON public.property_verifications
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 11. Purchases - fix policy
DROP POLICY IF EXISTS "secure_purchases_select" ON public.purchases;
CREATE POLICY "authenticated_only_purchases_select"
ON public.purchases
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 12. Rate limits - fix policy
DROP POLICY IF EXISTS "secure_rate_limits_select" ON public.rate_limits;
CREATE POLICY "authenticated_only_rate_limits_select"
ON public.rate_limits
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 13. Real time alerts - fix policy
DROP POLICY IF EXISTS "secure_real_time_alerts_all" ON public.real_time_alerts;
CREATE POLICY "authenticated_only_real_time_alerts_all"
ON public.real_time_alerts
FOR ALL
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 14. Receipts - fix policies
DROP POLICY IF EXISTS "secure_receipts_select" ON public.receipts;
DROP POLICY IF EXISTS "secure_receipts_update" ON public.receipts;
DROP POLICY IF EXISTS "users_can_delete_own_receipts" ON public.receipts;
CREATE POLICY "authenticated_only_receipts_select"
ON public.receipts
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "authenticated_only_receipts_update"
ON public.receipts
FOR UPDATE
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "authenticated_only_receipts_delete"
ON public.receipts
FOR DELETE
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 15. Recipero API usage - fix policy
DROP POLICY IF EXISTS "secure_recipero_api_usage_select" ON public.recipero_api_usage;
CREATE POLICY "authenticated_only_recipero_api_usage_select"
ON public.recipero_api_usage
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 16. Social media findings - fix policy
DROP POLICY IF EXISTS "secure_social_media_findings_select" ON public.social_media_findings;
CREATE POLICY "authenticated_only_social_media_findings_select"
ON public.social_media_findings
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 17. Social media monitoring - fix policy
DROP POLICY IF EXISTS "secure_social_media_monitoring_all" ON public.social_media_monitoring;
CREATE POLICY "authenticated_only_social_media_monitoring_all"
ON public.social_media_monitoring
FOR ALL
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 18. Subscribers - fix policies
DROP POLICY IF EXISTS "secure_subscribers_select" ON public.subscribers;
DROP POLICY IF EXISTS "secure_subscribers_update" ON public.subscribers;
CREATE POLICY "authenticated_only_subscribers_select"
ON public.subscribers
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "authenticated_only_subscribers_update"
ON public.subscribers
FOR UPDATE
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 19. Terms acceptance - fix policy
DROP POLICY IF EXISTS "secure_terms_acceptance_select" ON public.terms_acceptance;
CREATE POLICY "authenticated_only_terms_acceptance_select"
ON public.terms_acceptance
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 20. Verification results - fix policies
DROP POLICY IF EXISTS "secure_verification_results_select" ON public.verification_results;
DROP POLICY IF EXISTS "users_can_delete_own_verification_results" ON public.verification_results;
CREATE POLICY "authenticated_only_verification_results_select"
ON public.verification_results
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "authenticated_only_verification_results_delete"
ON public.verification_results
FOR DELETE
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 21. Verification searches - fix policies
DROP POLICY IF EXISTS "secure_verification_searches_select" ON public.verification_searches;
DROP POLICY IF EXISTS "secure_verification_searches_update" ON public.verification_searches;
DROP POLICY IF EXISTS "users_can_delete_own_verification_searches" ON public.verification_searches;
CREATE POLICY "authenticated_only_verification_searches_select"
ON public.verification_searches
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "authenticated_only_verification_searches_update"
ON public.verification_searches
FOR UPDATE
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "authenticated_only_verification_searches_delete"
ON public.verification_searches
FOR DELETE
TO authenticated
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Ensure service role maintains full access for administrative operations
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;

-- Ensure authenticated users have proper permissions on all tables they should access
GRANT SELECT, INSERT, UPDATE, DELETE ON public.alert_notifications TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.api_keys TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.api_usage_logs TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.checkmend_api_usage TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.checkout_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.customer_portal_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.marketplace_integrations TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.marketplace_listings TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.oauth_tokens TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT SELECT ON public.promotion_stats TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.property_verifications TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.purchases TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.rate_limits TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.real_time_alerts TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.receipts TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.recipero_api_usage TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.social_media_findings TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.social_media_monitoring TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.subscribers TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.terms_acceptance TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.verification_results TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.verification_searches TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.sensitive_data_access_log TO authenticated;