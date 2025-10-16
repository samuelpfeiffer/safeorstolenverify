-- Fix function search_path security issue
-- Set search_path on all functions to prevent search_path hijacking attacks

-- Update existing functions to have fixed search_path
ALTER FUNCTION public.reset_monthly_verifications() SET search_path = public;
ALTER FUNCTION public.update_profiles_updated_at() SET search_path = public;
ALTER FUNCTION public.update_seo_updated_at() SET search_path = public;
ALTER FUNCTION public.validate_oauth_token_access(uuid, uuid, text) SET search_path = public;
ALTER FUNCTION public.validate_api_key_access(uuid, uuid, text) SET search_path = public;
ALTER FUNCTION public.is_service_role() SET search_path = public;
ALTER FUNCTION public.update_ai_updated_at_column() SET search_path = public;
ALTER FUNCTION public.is_admin() SET search_path = public;
ALTER FUNCTION public.check_secure_rate_limit(text, text, integer, integer) SET search_path = public;
ALTER FUNCTION public.get_complete_schema() SET search_path = public;
ALTER FUNCTION public.is_service_role_or_admin() SET search_path = public;
ALTER FUNCTION public.validate_serial_number_secure(text) SET search_path = public;
ALTER FUNCTION public.initialize_sample_seo_data() SET search_path = public;
ALTER FUNCTION public.log_newsletter_access_attempt() SET search_path = public;
ALTER FUNCTION public.update_updated_at_column() SET search_path = public;
ALTER FUNCTION public.handle_updated_at() SET search_path = public;
ALTER FUNCTION public.check_enhanced_rate_limit(text, text, integer, integer, text) SET search_path = public;
ALTER FUNCTION public.check_rate_limit_security() SET search_path = public;
ALTER FUNCTION public.clean_expired_checkmend_cache() SET search_path = public;
ALTER FUNCTION public.validate_serial_number_enhanced(text) SET search_path = public;
ALTER FUNCTION public.log_security_sensitive_operations() SET search_path = public;
ALTER FUNCTION public.generate_api_key() SET search_path = public;
ALTER FUNCTION public.get_newsletter_subscriber_count() SET search_path = public;
ALTER FUNCTION public.is_admin_user() SET search_path = public;
ALTER FUNCTION public.get_public_community_stories() SET search_path = public;
ALTER FUNCTION public.validate_and_track_api_usage(text, text, text, text, text) SET search_path = public;
ALTER FUNCTION public.get_current_user_role() SET search_path = public;
ALTER FUNCTION public.log_newsletter_access() SET search_path = public;
ALTER FUNCTION public.has_role(uuid, app_role) SET search_path = public;
ALTER FUNCTION public.clean_expired_pending_verifications() SET search_path = public;
ALTER FUNCTION public.validate_rate_limit_security() SET search_path = public;
ALTER FUNCTION public.log_admin_operations() SET search_path = public;
ALTER FUNCTION public.log_newsletter_security_access() SET search_path = public;
ALTER FUNCTION public.validate_api_key_access(uuid) SET search_path = public;
ALTER FUNCTION public.validate_oauth_token_access(uuid, uuid) SET search_path = public;
ALTER FUNCTION public.cleanup_expired_tokens() SET search_path = public;
ALTER FUNCTION public.log_sensitive_data_access() SET search_path = public;
ALTER FUNCTION public.log_sensitive_access() SET search_path = public;
ALTER FUNCTION public.update_checkmend_cache_updated_at() SET search_path = public;
ALTER FUNCTION public.subscribe_to_newsletter(text) SET search_path = public;
ALTER FUNCTION public.is_authenticated_user() SET search_path = public;
ALTER FUNCTION public.handle_new_user() SET search_path = public, auth;
ALTER FUNCTION public.check_item_verification_status(text, text) SET search_path = public;
ALTER FUNCTION public.get_security_status() SET search_path = public;
ALTER FUNCTION public.check_auth_rate_limit() SET search_path = public;

COMMENT ON FUNCTION public.reset_monthly_verifications IS 'search_path set to prevent hijacking attacks';
COMMENT ON FUNCTION public.is_admin_user IS 'search_path set to prevent hijacking attacks';
COMMENT ON FUNCTION public.has_role IS 'search_path set to prevent hijacking attacks';