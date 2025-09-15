-- Critical Security Fix: Update all database functions to have secure search_path
-- This fixes the Function Search Path Mutable warnings in the linter

-- Fix search_path for all functions that don't have it set
ALTER FUNCTION public.update_ai_updated_at_column() SET search_path = 'public';
ALTER FUNCTION public.generate_api_key() SET search_path = 'public';
ALTER FUNCTION public.get_newsletter_subscriber_count() SET search_path = 'public';
ALTER FUNCTION public.get_public_community_stories() SET search_path = 'public';
ALTER FUNCTION public.get_current_user_role() SET search_path = 'public';
ALTER FUNCTION public.log_newsletter_access() SET search_path = 'public';
ALTER FUNCTION public.is_admin_user() SET search_path = 'public';
ALTER FUNCTION public.is_service_role_or_admin() SET search_path = 'public';
ALTER FUNCTION public.has_role(_user_id uuid, _role app_role) SET search_path = 'public';
ALTER FUNCTION public.validate_and_track_api_usage(p_api_key text, p_endpoint text, p_identifier text, p_ip_address text, p_user_agent text) SET search_path = 'public';
ALTER FUNCTION public.validate_serial_number_secure(input_serial text) SET search_path = 'public';
ALTER FUNCTION public.log_newsletter_access_attempt() SET search_path = 'public';
ALTER FUNCTION public.validate_rate_limit_security() SET search_path = 'public';
ALTER FUNCTION public.check_secure_rate_limit(user_identifier text, action_type text, max_requests integer, window_minutes integer) SET search_path = 'public';
ALTER FUNCTION public.log_admin_operations() SET search_path = 'public';
ALTER FUNCTION public.log_newsletter_security_access() SET search_path = 'public';
ALTER FUNCTION public.validate_api_key_access(key_user_id uuid) SET search_path = 'public';
ALTER FUNCTION public.validate_oauth_token_access(token_user_id uuid, token_id uuid) SET search_path = 'public';
ALTER FUNCTION public.cleanup_expired_tokens() SET search_path = 'public';
ALTER FUNCTION public.log_sensitive_data_access() SET search_path = 'public';
ALTER FUNCTION public.check_rate_limit_security() SET search_path = 'public';
ALTER FUNCTION public.handle_new_user() SET search_path = 'public', 'auth';
ALTER FUNCTION public.log_sensitive_access() SET search_path = 'public';
ALTER FUNCTION public.clean_expired_pending_verifications() SET search_path = 'public';
ALTER FUNCTION public.clean_expired_checkmend_cache() SET search_path = 'public';
ALTER FUNCTION public.update_checkmend_cache_updated_at() SET search_path = 'public';
ALTER FUNCTION public.validate_api_key_access(requesting_user_id uuid, resource_user_id uuid, operation_type text) SET search_path = 'public';
ALTER FUNCTION public.validate_oauth_token_access(requesting_user_id uuid, resource_user_id uuid, operation_type text) SET search_path = 'public';
ALTER FUNCTION public.update_updated_at_column() SET search_path = 'public';
ALTER FUNCTION public.handle_updated_at() SET search_path = 'public';
ALTER FUNCTION public.is_authenticated_user() SET search_path = 'public';
ALTER FUNCTION public.subscribe_to_newsletter(user_email text) SET search_path = 'public';