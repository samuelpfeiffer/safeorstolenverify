-- Priority 1: Critical Database Security Fixes

-- 1. Add SET search_path to all existing functions for security
CREATE OR REPLACE FUNCTION public.is_service_role()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT auth.role() = 'service_role';
$$;

CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles r
    WHERE r.user_id = auth.uid() 
    AND r.role = 'admin'::app_role
  );
$$;

CREATE OR REPLACE FUNCTION public.is_service_role_or_admin()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT auth.role() = 'service_role' OR public.is_admin_user();
$$;

CREATE OR REPLACE FUNCTION public.is_authenticated_user()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT auth.role() = 'authenticated' AND auth.uid() IS NOT NULL;
$$;

-- 2. Restrict anonymous access on AI tables - require authentication
DROP POLICY IF EXISTS "Authenticated users can view their own AI analysis sessions" ON public.ai_analysis_sessions;
CREATE POLICY "Authenticated users can view their own AI analysis sessions"
ON public.ai_analysis_sessions
FOR SELECT
USING (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL));

DROP POLICY IF EXISTS "Authenticated users can create AI analysis sessions" ON public.ai_analysis_sessions;
CREATE POLICY "Authenticated users can create AI analysis sessions"
ON public.ai_analysis_sessions
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL));

DROP POLICY IF EXISTS "Authenticated users can update their own AI analysis sessions" ON public.ai_analysis_sessions;
CREATE POLICY "Authenticated users can update their own AI analysis sessions"
ON public.ai_analysis_sessions
FOR UPDATE
USING (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL))
WITH CHECK (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL));

-- 3. Restrict promotion_stats to admin only
DROP POLICY IF EXISTS "secure_promotion_stats_access" ON public.promotion_stats;
CREATE POLICY "Admin can view promotion stats"
ON public.promotion_stats
FOR SELECT
USING (public.is_admin_user() OR auth.role() = 'service_role');

-- 4. Enhanced rate limiting function with better security
CREATE OR REPLACE FUNCTION public.check_secure_rate_limit(
  user_identifier text,
  action_type text,
  max_requests integer DEFAULT 10,
  window_minutes integer DEFAULT 60
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;

-- 5. Enhanced input validation function
CREATE OR REPLACE FUNCTION public.validate_serial_number_secure(input_serial text)
RETURNS jsonb
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
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
$$;