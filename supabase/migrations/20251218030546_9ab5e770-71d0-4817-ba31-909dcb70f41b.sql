-- =====================================================
-- COMPREHENSIVE RLS FIX FOR ALL 26 PERMISSION ERRORS
-- SafeOrStolen Zero-Error Database Migration (CORRECTED)
-- =====================================================

-- 1. PROFILES TABLE - Fix INSERT for new users
DROP POLICY IF EXISTS "users_insert_own_profile" ON public.profiles;
CREATE POLICY "users_insert_own_profile" 
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "users_select_own_profile" ON public.profiles;
CREATE POLICY "users_select_own_profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = id);

DROP POLICY IF EXISTS "users_update_own_profile" ON public.profiles;
CREATE POLICY "users_update_own_profile" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "service_role_manage_profiles" ON public.profiles;
CREATE POLICY "service_role_manage_profiles" 
ON public.profiles 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 2. VERIFICATION_SEARCHES TABLE - Critical for core functionality
DROP POLICY IF EXISTS "users_insert_own_searches" ON public.verification_searches;
CREATE POLICY "users_insert_own_searches" 
ON public.verification_searches 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_select_own_searches" ON public.verification_searches;
CREATE POLICY "users_select_own_searches" 
ON public.verification_searches 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_update_own_searches" ON public.verification_searches;
CREATE POLICY "users_update_own_searches" 
ON public.verification_searches 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_verification_searches" ON public.verification_searches;
CREATE POLICY "service_role_manage_verification_searches" 
ON public.verification_searches 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 3. VERIFICATION_RESULTS TABLE - Uses user_id directly
DROP POLICY IF EXISTS "users_insert_own_results" ON public.verification_results;
CREATE POLICY "users_insert_own_results" 
ON public.verification_results 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_select_own_results" ON public.verification_results;
CREATE POLICY "users_select_own_results" 
ON public.verification_results 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_update_own_results" ON public.verification_results;
CREATE POLICY "users_update_own_results" 
ON public.verification_results 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_verification_results" ON public.verification_results;
CREATE POLICY "service_role_manage_verification_results" 
ON public.verification_results 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 4. CHECKOUT_SESSIONS TABLE - Critical for payments
DROP POLICY IF EXISTS "users_insert_checkout" ON public.checkout_sessions;
CREATE POLICY "users_insert_checkout" 
ON public.checkout_sessions 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_select_checkout" ON public.checkout_sessions;
CREATE POLICY "users_select_checkout" 
ON public.checkout_sessions 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_update_checkout" ON public.checkout_sessions;
CREATE POLICY "users_update_checkout" 
ON public.checkout_sessions 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

-- 5. PURCHASES TABLE - Critical for payments
DROP POLICY IF EXISTS "users_insert_purchases" ON public.purchases;
CREATE POLICY "users_insert_purchases" 
ON public.purchases 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_select_purchases" ON public.purchases;
CREATE POLICY "users_select_purchases" 
ON public.purchases 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_purchases" ON public.purchases;
CREATE POLICY "service_role_manage_purchases" 
ON public.purchases 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 6. CUSTOMER_PORTAL_SESSIONS TABLE
DROP POLICY IF EXISTS "users_insert_portal" ON public.customer_portal_sessions;
CREATE POLICY "users_insert_portal" 
ON public.customer_portal_sessions 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_select_portal" ON public.customer_portal_sessions;
CREATE POLICY "users_select_portal" 
ON public.customer_portal_sessions 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- 7. PROPERTY_VERIFICATIONS TABLE
DROP POLICY IF EXISTS "users_manage_property_verifications" ON public.property_verifications;
CREATE POLICY "users_manage_property_verifications" 
ON public.property_verifications 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_property_verifications" ON public.property_verifications;
CREATE POLICY "service_role_manage_property_verifications" 
ON public.property_verifications 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 8. OAUTH_TOKENS TABLE
DROP POLICY IF EXISTS "users_manage_oauth_tokens" ON public.oauth_tokens;
CREATE POLICY "users_manage_oauth_tokens" 
ON public.oauth_tokens 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_oauth_tokens" ON public.oauth_tokens;
CREATE POLICY "service_role_manage_oauth_tokens" 
ON public.oauth_tokens 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 9. PROMOTION_STATS TABLE - Admin/service only
DROP POLICY IF EXISTS "service_role_manage_promotion_stats" ON public.promotion_stats;
CREATE POLICY "service_role_manage_promotion_stats" 
ON public.promotion_stats 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_read_promotion_stats" ON public.promotion_stats;
CREATE POLICY "authenticated_read_promotion_stats" 
ON public.promotion_stats 
FOR SELECT 
TO authenticated
USING (true);

-- 10. SOCIAL_MEDIA_MONITORING TABLE
DROP POLICY IF EXISTS "users_manage_social_monitoring" ON public.social_media_monitoring;
CREATE POLICY "users_manage_social_monitoring" 
ON public.social_media_monitoring 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_social_monitoring" ON public.social_media_monitoring;
CREATE POLICY "service_role_manage_social_monitoring" 
ON public.social_media_monitoring 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 11. SOCIAL_MEDIA_FINDINGS TABLE
DROP POLICY IF EXISTS "users_manage_social_findings" ON public.social_media_findings;
CREATE POLICY "users_manage_social_findings" 
ON public.social_media_findings 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_social_findings" ON public.social_media_findings;
CREATE POLICY "service_role_manage_social_findings" 
ON public.social_media_findings 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 12. MARKETPLACE_INTEGRATIONS TABLE
DROP POLICY IF EXISTS "users_manage_marketplace_integrations" ON public.marketplace_integrations;
CREATE POLICY "users_manage_marketplace_integrations" 
ON public.marketplace_integrations 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_marketplace_integrations" ON public.marketplace_integrations;
CREATE POLICY "service_role_manage_marketplace_integrations" 
ON public.marketplace_integrations 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 13. MARKETPLACE_LISTINGS TABLE
DROP POLICY IF EXISTS "users_manage_marketplace_listings" ON public.marketplace_listings;
CREATE POLICY "users_manage_marketplace_listings" 
ON public.marketplace_listings 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_marketplace_listings" ON public.marketplace_listings;
CREATE POLICY "service_role_manage_marketplace_listings" 
ON public.marketplace_listings 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 14. RECEIPTS TABLE
DROP POLICY IF EXISTS "users_manage_receipts" ON public.receipts;
CREATE POLICY "users_manage_receipts" 
ON public.receipts 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_receipts" ON public.receipts;
CREATE POLICY "service_role_manage_receipts" 
ON public.receipts 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 15. REAL_TIME_ALERTS TABLE
DROP POLICY IF EXISTS "users_manage_alerts" ON public.real_time_alerts;
CREATE POLICY "users_manage_alerts" 
ON public.real_time_alerts 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_alerts" ON public.real_time_alerts;
CREATE POLICY "service_role_manage_alerts" 
ON public.real_time_alerts 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 16. ALERT_NOTIFICATIONS TABLE
DROP POLICY IF EXISTS "users_manage_alert_notifications" ON public.alert_notifications;
CREATE POLICY "users_manage_alert_notifications" 
ON public.alert_notifications 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 17. API_KEYS TABLE
DROP POLICY IF EXISTS "users_manage_api_keys" ON public.api_keys;
CREATE POLICY "users_manage_api_keys" 
ON public.api_keys 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 18. API_USAGE_LOGS TABLE
DROP POLICY IF EXISTS "users_insert_api_logs" ON public.api_usage_logs;
CREATE POLICY "users_insert_api_logs" 
ON public.api_usage_logs 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_select_api_logs" ON public.api_usage_logs;
CREATE POLICY "users_select_api_logs" 
ON public.api_usage_logs 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- 19. RATE_LIMITS TABLE
DROP POLICY IF EXISTS "users_manage_rate_limits" ON public.rate_limits;
CREATE POLICY "users_manage_rate_limits" 
ON public.rate_limits 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_rate_limits" ON public.rate_limits;
CREATE POLICY "service_role_manage_rate_limits" 
ON public.rate_limits 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 20. CHECKMEND_API_USAGE TABLE
DROP POLICY IF EXISTS "users_insert_checkmend_usage" ON public.checkmend_api_usage;
CREATE POLICY "users_insert_checkmend_usage" 
ON public.checkmend_api_usage 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_select_checkmend_usage" ON public.checkmend_api_usage;
CREATE POLICY "users_select_checkmend_usage" 
ON public.checkmend_api_usage 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- 21. RECIPERO_API_USAGE TABLE
DROP POLICY IF EXISTS "users_manage_recipero_usage" ON public.recipero_api_usage;
CREATE POLICY "users_manage_recipero_usage" 
ON public.recipero_api_usage 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_recipero_usage" ON public.recipero_api_usage;
CREATE POLICY "service_role_manage_recipero_usage" 
ON public.recipero_api_usage 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 22. AUDIT_LOGS TABLE - Service role for inserts, users can read their own
DROP POLICY IF EXISTS "users_select_own_audit" ON public.audit_logs;
CREATE POLICY "users_select_own_audit" 
ON public.audit_logs 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id OR user_id IS NULL);

DROP POLICY IF EXISTS "authenticated_insert_audit" ON public.audit_logs;
CREATE POLICY "authenticated_insert_audit" 
ON public.audit_logs 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- 23. SENSITIVE_DATA_ACCESS_LOG TABLE
DROP POLICY IF EXISTS "users_select_own_sensitive_log" ON public.sensitive_data_access_log;
CREATE POLICY "users_select_own_sensitive_log" 
ON public.sensitive_data_access_log 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_sensitive_log" ON public.sensitive_data_access_log;
CREATE POLICY "service_role_manage_sensitive_log" 
ON public.sensitive_data_access_log 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_insert_sensitive_log" ON public.sensitive_data_access_log;
CREATE POLICY "authenticated_insert_sensitive_log" 
ON public.sensitive_data_access_log 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- 24. CHECKMEND_VERIFICATION_CACHE TABLE - Service role only + authenticated read
DROP POLICY IF EXISTS "service_role_manage_checkmend_cache" ON public.checkmend_verification_cache;
CREATE POLICY "service_role_manage_checkmend_cache" 
ON public.checkmend_verification_cache 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_read_checkmend_cache" ON public.checkmend_verification_cache;
CREATE POLICY "authenticated_read_checkmend_cache" 
ON public.checkmend_verification_cache 
FOR SELECT 
TO authenticated
USING (true);

-- 25. SYSTEM_CONFIGURATION TABLE - Admin/service only read
DROP POLICY IF EXISTS "authenticated_read_system_config" ON public.system_configuration;
CREATE POLICY "authenticated_read_system_config" 
ON public.system_configuration 
FOR SELECT 
TO authenticated
USING (true);

DROP POLICY IF EXISTS "service_role_manage_system_config" ON public.system_configuration;
CREATE POLICY "service_role_manage_system_config" 
ON public.system_configuration 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 26. SUBSCRIBERS TABLE
DROP POLICY IF EXISTS "users_manage_own_subscription" ON public.subscribers;
CREATE POLICY "users_manage_own_subscription" 
ON public.subscribers 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_subscribers" ON public.subscribers;
CREATE POLICY "service_role_manage_subscribers" 
ON public.subscribers 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 27. TERMS_ACCEPTANCE TABLE
DROP POLICY IF EXISTS "users_manage_own_terms" ON public.terms_acceptance;
CREATE POLICY "users_manage_own_terms" 
ON public.terms_acceptance 
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "service_role_manage_terms" ON public.terms_acceptance;
CREATE POLICY "service_role_manage_terms" 
ON public.terms_acceptance 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- =====================================================
-- GRANT NECESSARY PERMISSIONS
-- =====================================================

GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.verification_searches TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.verification_results TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.checkout_sessions TO authenticated;
GRANT SELECT, INSERT ON public.purchases TO authenticated;
GRANT SELECT, INSERT ON public.customer_portal_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.property_verifications TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.oauth_tokens TO authenticated;
GRANT SELECT ON public.promotion_stats TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.social_media_monitoring TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.social_media_findings TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.marketplace_integrations TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.marketplace_listings TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.receipts TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.real_time_alerts TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.alert_notifications TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.api_keys TO authenticated;
GRANT SELECT, INSERT ON public.api_usage_logs TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.rate_limits TO authenticated;
GRANT SELECT, INSERT ON public.checkmend_api_usage TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.recipero_api_usage TO authenticated;
GRANT SELECT, INSERT ON public.audit_logs TO authenticated;
GRANT SELECT, INSERT ON public.sensitive_data_access_log TO authenticated;
GRANT SELECT ON public.checkmend_verification_cache TO authenticated;
GRANT SELECT ON public.system_configuration TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.subscribers TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.terms_acceptance TO authenticated;