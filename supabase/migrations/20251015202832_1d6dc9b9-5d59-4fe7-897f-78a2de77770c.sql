-- Fix SECURITY DEFINER functions missing search_path
-- This prevents search_path hijacking attacks

-- Fix validate_serial_number_secure function
CREATE OR REPLACE FUNCTION public.validate_serial_number_secure(input_serial text)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  sanitized_serial text;
BEGIN
  -- Sanitize and validate serial number input
  sanitized_serial := trim(upper(regexp_replace(input_serial, '[^A-Z0-9]', '', 'g')));
  
  IF sanitized_serial IS NULL OR length(sanitized_serial) = 0 THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Serial number is required');
  END IF;
  
  IF length(sanitized_serial) < 3 THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Serial number too short (minimum 3 characters)');
  END IF;
  
  IF length(sanitized_serial) > 50 THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Serial number too long (maximum 50 characters)');
  END IF;
  
  -- Check for malicious patterns
  IF sanitized_serial ~* '(SCRIPT|JAVASCRIPT|VBSCRIPT|ONLOAD|ONERROR)' THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Invalid characters detected');
  END IF;
  
  RETURN jsonb_build_object('valid', true, 'sanitized_value', sanitized_serial);
END;
$function$;

-- Fix check_secure_rate_limit function
CREATE OR REPLACE FUNCTION public.check_secure_rate_limit(user_identifier text, action_type text, max_requests integer DEFAULT 10, window_minutes integer DEFAULT 60)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  current_count integer;
  window_start timestamp with time zone;
  user_uuid uuid;
BEGIN
  window_start := now() - (window_minutes || ' minutes')::interval;
  
  -- Validate and convert user identifier
  BEGIN
    user_uuid := user_identifier::uuid;
  EXCEPTION WHEN invalid_text_representation THEN
    RETURN jsonb_build_object(
      'allowed', false, 
      'error', 'Invalid user identifier'
    );
  END;
  
  -- Count recent requests for this user/action combination
  SELECT COUNT(*)
  INTO current_count
  FROM public.rate_limits 
  WHERE user_id = user_uuid 
    AND action = action_type 
    AND window_start > window_start;
    
  -- Check if limit exceeded
  IF current_count >= max_requests THEN
    -- Log rate limit violation
    INSERT INTO public.audit_logs (
      user_id, action, table_name, new_values
    ) VALUES (
      user_uuid,
      'RATE_LIMIT_EXCEEDED',
      'rate_limits',
      jsonb_build_object(
        'action', action_type,
        'count', current_count,
        'limit', max_requests,
        'timestamp', now()
      )
    );
    
    RETURN jsonb_build_object(
      'allowed', false, 
      'limit_exceeded', true,
      'reset_time', (window_start + (window_minutes || ' minutes')::interval)
    );
  END IF;
  
  -- Log this request
  INSERT INTO public.rate_limits (user_id, action, count, window_start)
  VALUES (user_uuid, action_type, 1, now())
  ON CONFLICT (user_id, action) 
  DO UPDATE SET 
    count = rate_limits.count + 1, 
    window_start = CASE 
      WHEN rate_limits.window_start < window_start THEN now()
      ELSE rate_limits.window_start
    END;
  
  RETURN jsonb_build_object(
    'allowed', true, 
    'remaining', max_requests - current_count - 1
  );
END;
$function$;

-- Fix validate_oauth_token_access function
CREATE OR REPLACE FUNCTION public.validate_oauth_token_access(requesting_user_id uuid, resource_user_id uuid, operation_type text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Basic validation: user can only access their own tokens
  IF requesting_user_id != resource_user_id THEN
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
END;
$function$;

-- Fix validate_api_key_access function
CREATE OR REPLACE FUNCTION public.validate_api_key_access(requesting_user_id uuid, resource_user_id uuid, operation_type text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Basic validation: user can only access their own resources
  IF requesting_user_id != resource_user_id THEN
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
END;
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