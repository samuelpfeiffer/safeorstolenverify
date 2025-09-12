-- Phase 1: Critical Email Exposure Fixes
-- Fix newsletter_subscribers RLS policies to restrict email access
DROP POLICY IF EXISTS "newsletter_service_role_insert" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_select" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_update" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_delete" ON public.newsletter_subscribers;

-- Create secure newsletter policies - corrected syntax
CREATE POLICY "newsletter_secure_insert" ON public.newsletter_subscribers
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "newsletter_admin_select" ON public.newsletter_subscribers
FOR SELECT 
USING (is_service_role_or_admin());

CREATE POLICY "newsletter_admin_update" ON public.newsletter_subscribers
FOR UPDATE 
USING (is_service_role_or_admin())
WITH CHECK (is_service_role_or_admin());

CREATE POLICY "newsletter_admin_delete" ON public.newsletter_subscribers
FOR DELETE 
USING (is_service_role_or_admin());

-- Create secure function to get newsletter count without exposing emails
CREATE OR REPLACE FUNCTION public.get_newsletter_subscriber_count()
RETURNS integer
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT COUNT(*)::integer FROM public.newsletter_subscribers WHERE is_subscribed = true;
$$;

-- Create secure function to get community stories without emails
CREATE OR REPLACE FUNCTION public.get_public_community_stories()
RETURNS TABLE (
  id uuid,
  name text,
  experience_type text,
  story text,
  item_type text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  is_approved boolean
)
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
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
$$;

-- Enhanced security validation functions
CREATE OR REPLACE FUNCTION public.validate_serial_number_secure(input_serial text)
RETURNS jsonb
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  sanitized_serial text;
BEGIN
  -- Sanitize and validate serial number input
  sanitized_serial := trim(input_serial);
  
  IF sanitized_serial IS NULL OR length(sanitized_serial) = 0 THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Serial number is required');
  END IF;
  
  IF length(sanitized_serial) > 100 THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Serial number too long');
  END IF;
  
  -- Check for malicious patterns
  IF sanitized_serial ~* '(<script|javascript:|data:|vbscript:)' THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Invalid characters detected');
  END IF;
  
  RETURN jsonb_build_object('valid', true, 'sanitized_value', sanitized_serial);
END;
$$;

-- Server-side rate limiting function
CREATE OR REPLACE FUNCTION public.check_secure_rate_limit(user_identifier text, action_type text, max_requests integer DEFAULT 10, window_minutes integer DEFAULT 60)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  current_count integer;
  window_start timestamp with time zone;
BEGIN
  window_start := now() - (window_minutes || ' minutes')::interval;
  
  -- Count recent requests for this user/action combination
  SELECT COUNT(*)
  INTO current_count
  FROM public.rate_limits 
  WHERE user_id::text = user_identifier 
    AND action = action_type 
    AND window_start > window_start;
    
  -- Check if limit exceeded
  IF current_count >= max_requests THEN
    RETURN jsonb_build_object(
      'allowed', false, 
      'limit_exceeded', true,
      'reset_time', (window_start + (window_minutes || ' minutes')::interval)
    );
  END IF;
  
  -- Log this request
  INSERT INTO public.rate_limits (user_id, action, count, window_start)
  VALUES (user_identifier::uuid, action_type, 1, now())
  ON CONFLICT (user_id, action) 
  DO UPDATE SET count = rate_limits.count + 1, window_start = now()
  WHERE rate_limits.window_start < window_start;
  
  RETURN jsonb_build_object('allowed', true, 'remaining', max_requests - current_count - 1);
END;
$$;