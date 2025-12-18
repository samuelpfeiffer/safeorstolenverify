-- =====================================================
-- PHASE 1: EMERGENCY DATABASE CLEANUP
-- Drop 59 unused tables, keep 20 essential
-- =====================================================

-- ===================
-- DROP AI TABLES (10 tables) - Not being used
-- ===================
DROP TABLE IF EXISTS ai_executive_actions CASCADE;
DROP TABLE IF EXISTS ai_executive_decisions CASCADE;
DROP TABLE IF EXISTS ai_executives CASCADE;
DROP TABLE IF EXISTS ai_analysis_sessions CASCADE;
DROP TABLE IF EXISTS ai_content_generation_log CASCADE;
DROP TABLE IF EXISTS ai_feedback CASCADE;
DROP TABLE IF EXISTS ai_generated_content CASCADE;
DROP TABLE IF EXISTS ai_model_performance CASCADE;
DROP TABLE IF EXISTS ai_seo_suggestions CASCADE;
DROP TABLE IF EXISTS ai_system_config CASCADE;

-- ===================
-- DROP SOCIAL/MARKETPLACE TABLES (4 tables)
-- ===================
DROP TABLE IF EXISTS social_media_findings CASCADE;
DROP TABLE IF EXISTS social_media_monitoring CASCADE;
DROP TABLE IF EXISTS marketplace_listings CASCADE;
DROP TABLE IF EXISTS marketplace_integrations CASCADE;

-- ===================
-- DROP CONTENT/SEO TABLES (12 tables)
-- ===================
DROP TABLE IF EXISTS content_generation_queue CASCADE;
DROP TABLE IF EXISTS content_issues CASCADE;
DROP TABLE IF EXISTS content_performance CASCADE;
DROP TABLE IF EXISTS content_performance_tracking CASCADE;
DROP TABLE IF EXISTS competitor_analysis CASCADE;
DROP TABLE IF EXISTS seo_keywords CASCADE;
DROP TABLE IF EXISTS seo_performance CASCADE;
DROP TABLE IF EXISTS gsc_oauth_tokens CASCADE;
DROP TABLE IF EXISTS gsc_performance_cache CASCADE;
DROP TABLE IF EXISTS gsc_url_status CASCADE;
DROP TABLE IF EXISTS indexnow_submissions CASCADE;
DROP TABLE IF EXISTS blog_content_strategy CASCADE;

-- ===================
-- DROP UNUSED API/OAUTH TABLES (7 tables)
-- ===================
DROP TABLE IF EXISTS api_usage_tracking CASCADE;
DROP TABLE IF EXISTS external_api_keys CASCADE;
DROP TABLE IF EXISTS api_keys CASCADE;
DROP TABLE IF EXISTS api_usage_logs CASCADE;
DROP TABLE IF EXISTS oauth_tokens CASCADE;
DROP TABLE IF EXISTS external_verification_cache CASCADE;
DROP TABLE IF EXISTS checkmend_api_usage CASCADE;

-- ===================
-- DROP UNUSED VERIFICATION TABLES (5 tables)
-- ===================
DROP TABLE IF EXISTS checkmend_verification_cache CASCADE;
DROP TABLE IF EXISTS property_verifications CASCADE;
DROP TABLE IF EXISTS state_theft_lookup_cache CASCADE;
DROP TABLE IF EXISTS state_verification_databases CASCADE;
DROP TABLE IF EXISTS verification_items CASCADE;

-- ===================
-- DROP UNUSED ALERT/NOTIFICATION TABLES (4 tables)
-- ===================
DROP TABLE IF EXISTS alert_notifications CASCADE;
DROP TABLE IF EXISTS real_time_alerts CASCADE;
DROP TABLE IF EXISTS stolen_item_notifications CASCADE;
DROP TABLE IF EXISTS user_webhooks CASCADE;

-- ===================
-- DROP UNUSED METRICS/STATS TABLES (4 tables)
-- ===================
DROP TABLE IF EXISTS autonomous_system_metrics CASCADE;
DROP TABLE IF EXISTS business_metrics CASCADE;
DROP TABLE IF EXISTS deep_thinking_processes CASCADE;
DROP TABLE IF EXISTS internet_search_results CASCADE;

-- ===================
-- DROP UNUSED/DUPLICATE USER TABLES (6 tables)
-- ===================
DROP TABLE IF EXISTS recipero_api_usage CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS search_history CASCADE;
DROP TABLE IF EXISTS sensitive_data_access_log CASCADE;
DROP TABLE IF EXISTS users_roles CASCADE;
DROP TABLE IF EXISTS user_stats CASCADE;

-- ===================
-- DROP UNUSED MISC TABLES (7 tables)
-- ===================
DROP TABLE IF EXISTS receipts CASCADE;
DROP TABLE IF EXISTS promotion_stats CASCADE;
DROP TABLE IF EXISTS subscribers CASCADE;
DROP TABLE IF EXISTS subscription_history CASCADE;
DROP TABLE IF EXISTS system_configuration CASCADE;
DROP TABLE IF EXISTS terms_acceptance CASCADE;
DROP TABLE IF EXISTS user_terms_acceptance CASCADE;

-- ===================
-- TABLES KEPT (20 essential tables):
-- ===================
-- 1. profiles - user data
-- 2. verification_searches - core product
-- 3. verification_results - core product  
-- 4. stolen_items - user reports
-- 5. pending_verifications - verification flow
-- 6. checkout_sessions - Stripe payments
-- 7. purchases - payment records
-- 8. credit_transactions - credits system
-- 9. customer_portal_sessions - Stripe portal
-- 10. stripe_webhook_events - payment webhooks
-- 11. newsletter_subscribers - email list
-- 12. audit_logs - security compliance
-- 13. rate_limits - security
-- 14. user_roles - access control
-- 15. blog_posts - content
-- 16. blog_categories - content
-- 17. blog_tags - content
-- 18. blog_post_categories - content
-- 19. blog_post_tags - content
-- 20. community_stories - user stories

-- ===================
-- CLEAN UP ORPHANED FUNCTIONS
-- ===================
DROP FUNCTION IF EXISTS log_newsletter_access_attempt() CASCADE;
DROP FUNCTION IF EXISTS log_newsletter_security_access() CASCADE;
DROP FUNCTION IF EXISTS log_security_sensitive_operations() CASCADE;
DROP FUNCTION IF EXISTS log_sensitive_access() CASCADE;
DROP FUNCTION IF EXISTS log_sensitive_data_access() CASCADE;
DROP FUNCTION IF EXISTS validate_api_key_access(uuid, uuid, text) CASCADE;
DROP FUNCTION IF EXISTS validate_oauth_token_access(uuid, uuid, text) CASCADE;
DROP FUNCTION IF EXISTS validate_oauth_token_access(uuid, uuid) CASCADE;
DROP FUNCTION IF EXISTS check_rate_limit_security() CASCADE;
DROP FUNCTION IF EXISTS validate_rate_limit_security() CASCADE;
DROP FUNCTION IF EXISTS initialize_sample_seo_data() CASCADE;
DROP FUNCTION IF EXISTS get_security_status() CASCADE;
DROP FUNCTION IF EXISTS cleanup_expired_cache() CASCADE;
DROP FUNCTION IF EXISTS cleanup_expired_tokens() CASCADE;
DROP FUNCTION IF EXISTS clean_expired_checkmend_cache() CASCADE;
DROP FUNCTION IF EXISTS update_checkmend_cache_updated_at() CASCADE;
DROP FUNCTION IF EXISTS update_seo_updated_at() CASCADE;
DROP FUNCTION IF EXISTS log_admin_operations() CASCADE;
DROP FUNCTION IF EXISTS notify_users_of_stolen_item() CASCADE;
DROP FUNCTION IF EXISTS update_notification_status(uuid, text, text) CASCADE;