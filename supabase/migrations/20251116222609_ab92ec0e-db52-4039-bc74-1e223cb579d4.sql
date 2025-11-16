-- Phase 1 Critical Fix: Add SET search_path TO 'public' to all database functions
-- This fixes 79 security warnings about missing search_path parameters

-- Fix generate_api_key function
CREATE OR REPLACE FUNCTION public.generate_api_key()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  RETURN 'sos_' || encode(gen_random_bytes(32), 'hex');
END;
$function$;

-- Fix get_current_user_role function
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Get the current user's role from profiles table
  RETURN (
    SELECT user_role 
    FROM public.profiles 
    WHERE user_id = auth.uid()
  );
END;
$function$;

-- Fix cleanup_expired_tokens function
CREATE OR REPLACE FUNCTION public.cleanup_expired_tokens()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Mark expired API keys as inactive
  UPDATE public.api_keys 
  SET is_active = false, updated_at = NOW()
  WHERE expires_at < NOW() AND is_active = true;
  
  -- Mark expired OAuth tokens as revoked
  UPDATE public.oauth_tokens 
  SET revoked = true, updated_at = NOW()
  WHERE expires_at < NOW() AND revoked = false;
  
  -- Log cleanup activity
  INSERT INTO public.audit_logs (
    user_id, action, table_name, new_values
  ) VALUES (
    NULL, 'AUTOMATED_TOKEN_CLEANUP', 'system',
    jsonb_build_object(
      'cleanup_time', NOW(),
      'action', 'expired_tokens_revoked'
    )
  );
END;
$function$;

-- Fix handle_new_user trigger function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'auth'
AS $function$
BEGIN
  INSERT INTO public.profiles (
    id, 
    email, 
    full_name,
    avatar_url,
    created_at,
    updated_at
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    NEW.raw_user_meta_data->>'avatar_url',
    NOW(),
    NOW()
  );
  
  RETURN NEW;
END;
$function$;

-- Fix is_authenticated_user function
CREATE OR REPLACE FUNCTION public.is_authenticated_user()
RETURNS boolean
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT auth.role() = 'authenticated' AND auth.uid() IS NOT NULL;
$function$;

-- Fix check_auth_rate_limit function
CREATE OR REPLACE FUNCTION public.check_auth_rate_limit()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Simple rate limiting: max 100 operations per hour per user
  IF (SELECT COUNT(*) FROM public.audit_logs 
      WHERE user_id = auth.uid() 
      AND created_at > NOW() - INTERVAL '1 hour') > 100 THEN
    RETURN false;
  END IF;
  RETURN true;
END;
$function$;

-- Fix get_security_status function
CREATE OR REPLACE FUNCTION public.get_security_status()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  result jsonb;
BEGIN
  -- Return current security configuration status
  SELECT jsonb_build_object(
    'otp_expiry_configured', 
    CASE WHEN EXISTS(SELECT 1 FROM system_configuration WHERE config_key = 'otp_expiry_seconds') 
         THEN true ELSE false END,
    'password_protection_enabled',
    CASE WHEN EXISTS(SELECT 1 FROM system_configuration WHERE config_key = 'enable_password_leak_protection') 
         THEN true ELSE false END,
    'security_level',
    COALESCE((SELECT config_value FROM system_configuration WHERE config_key = 'security_level'), '"medium"'::jsonb),
    'policies_configured', true,
    'timestamp', NOW()
  ) INTO result;
  
  RETURN result;
END;
$function$;

-- Fix clean_expired_pending_verifications function
CREATE OR REPLACE FUNCTION public.clean_expired_pending_verifications()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  DELETE FROM public.pending_verifications 
  WHERE expires_at < now();
END;
$function$;

-- Fix clean_expired_checkmend_cache function
CREATE OR REPLACE FUNCTION public.clean_expired_checkmend_cache()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  DELETE FROM checkmend_verification_cache 
  WHERE expires_at < now();
END;
$function$;

-- Fix reset_monthly_verifications function
CREATE OR REPLACE FUNCTION public.reset_monthly_verifications()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  UPDATE profiles
  SET 
    verifications_used_this_month = 0,
    billing_cycle_start_date = NOW()
  WHERE 
    subscription_tier IN ('starter', 'personal', 'professional', 'enterprise')
    AND billing_cycle_start_date < NOW() - INTERVAL '1 month';
    
  -- Log the reset in audit logs
  INSERT INTO audit_logs (action, table_name, new_values)
  VALUES (
    'MONTHLY_QUOTA_RESET',
    'profiles',
    jsonb_build_object(
      'reset_count', (SELECT COUNT(*) FROM profiles 
                      WHERE subscription_tier IN ('starter', 'personal', 'professional', 'enterprise')
                      AND billing_cycle_start_date < NOW() - INTERVAL '1 month'),
      'timestamp', NOW()
    )
  );
END;
$function$;

-- Fix increment_search_count function
CREATE OR REPLACE FUNCTION public.increment_search_count(user_id uuid)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  new_count INTEGER;
BEGIN
  UPDATE public.profiles
  SET search_count = search_count + 1
  WHERE id = user_id
  RETURNING search_count INTO new_count;
  
  RETURN new_count;
END;
$function$;

-- Fix get_newsletter_subscriber_count function
CREATE OR REPLACE FUNCTION public.get_newsletter_subscriber_count()
RETURNS integer
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT COUNT(*)::integer FROM public.newsletter_subscribers WHERE is_subscribed = true;
$function$;

-- Fix get_public_community_stories function
CREATE OR REPLACE FUNCTION public.get_public_community_stories()
RETURNS TABLE(id uuid, name text, experience_type text, story text, item_type text, created_at timestamp with time zone, updated_at timestamp with time zone, is_approved boolean)
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT 
    id, 
    name, 
    experience_type, 
    story, 
    item_type, 
    created_at, 
    updated_at, 
    is_approved
  FROM public.community_stories 
  WHERE is_approved = true
  ORDER BY created_at DESC;
$function$;

-- Fix is_admin function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid()
    AND role = 'admin'
  );
$function$;

-- Fix is_admin_user function
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles r
    WHERE r.user_id = auth.uid() 
    AND r.role = 'admin'::app_role
  );
$function$;

-- Fix is_service_role_or_admin function
CREATE OR REPLACE FUNCTION public.is_service_role_or_admin()
RETURNS boolean
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT auth.role() = 'service_role' OR public.is_admin_user();
$function$;