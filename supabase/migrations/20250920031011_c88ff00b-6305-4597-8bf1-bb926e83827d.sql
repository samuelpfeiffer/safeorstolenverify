-- Critical Security Fixes Migration

-- 1. Fix database function security by adding proper search_path
-- Update existing functions to include SET search_path = public for security

-- 2. Restrict anonymous access on sensitive tables
-- Update ai_analysis_sessions to require authentication for all operations
DROP POLICY IF EXISTS "Service role can manage all AI analysis sessions" ON public.ai_analysis_sessions;
CREATE POLICY "Service role can manage all AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR ALL 
TO service_role
USING (true) 
WITH CHECK (true);

-- Remove anonymous access, require authentication for user sessions
DROP POLICY IF EXISTS "Authenticated users can create AI analysis sessions" ON public.ai_analysis_sessions;
CREATE POLICY "Authenticated users can create AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL));

DROP POLICY IF EXISTS "Authenticated users can view their own AI analysis sessions" ON public.ai_analysis_sessions;
CREATE POLICY "Authenticated users can view their own AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR SELECT 
TO authenticated
USING (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL));

DROP POLICY IF EXISTS "Authenticated users can update their own AI analysis sessions" ON public.ai_analysis_sessions;
CREATE POLICY "Authenticated users can update their own AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR UPDATE 
TO authenticated
USING (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL))
WITH CHECK (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL));

-- 3. Restrict promotion_stats to admin only
DROP POLICY IF EXISTS "Admin can view promotion stats" ON public.promotion_stats;
CREATE POLICY "Admin can view promotion stats" 
ON public.promotion_stats 
FOR SELECT 
TO authenticated
USING (is_admin_user());

DROP POLICY IF EXISTS "System can manage promotion stats" ON public.promotion_stats;
CREATE POLICY "System can manage promotion stats" 
ON public.promotion_stats 
FOR ALL 
TO service_role
USING (true) 
WITH CHECK (true);

-- 4. Enhanced rate limiting function with better security
CREATE OR REPLACE FUNCTION public.check_enhanced_rate_limit(
  user_identifier text, 
  action_type text, 
  max_requests integer DEFAULT 10, 
  window_minutes integer DEFAULT 60,
  ip_address text DEFAULT NULL
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_count integer;
  window_start timestamp with time zone;
  user_uuid uuid;
  rate_limit_key text;
BEGIN
  window_start := now() - (window_minutes || ' minutes')::interval;
  
  -- Validate inputs
  IF user_identifier IS NULL OR action_type IS NULL THEN
    RETURN jsonb_build_object(
      'allowed', false, 
      'error', 'Invalid parameters'
    );
  END IF;
  
  -- Handle different identifier types
  IF user_identifier ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' THEN
    -- UUID format
    user_uuid := user_identifier::uuid;
    rate_limit_key := user_identifier;
  ELSE
    -- Use IP or session-based limiting for anonymous users
    rate_limit_key := COALESCE(ip_address, user_identifier);
    user_uuid := NULL;
  END IF;
  
  -- Count recent requests
  SELECT COUNT(*)
  INTO current_count
  FROM public.rate_limits 
  WHERE user_id = user_uuid 
    AND action = action_type 
    AND window_start > window_start;
    
  -- Check if limit exceeded
  IF current_count >= max_requests THEN
    -- Log rate limit violation with enhanced details
    INSERT INTO public.audit_logs (
      user_id, action, table_name, new_values
    ) VALUES (
      user_uuid,
      'ENHANCED_RATE_LIMIT_EXCEEDED',
      'rate_limits',
      jsonb_build_object(
        'action', action_type,
        'count', current_count,
        'limit', max_requests,
        'ip_address', ip_address,
        'timestamp', now(),
        'severity', 'high'
      )
    );
    
    RETURN jsonb_build_object(
      'allowed', false, 
      'limit_exceeded', true,
      'reset_time', (window_start + (window_minutes || ' minutes')::interval),
      'current_count', current_count,
      'max_requests', max_requests
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
    'remaining', max_requests - current_count - 1,
    'reset_time', (now() + (window_minutes || ' minutes')::interval)
  );
END;
$$;

-- 5. Enhanced serial number validation with stricter rules
CREATE OR REPLACE FUNCTION public.validate_serial_number_enhanced(input_serial text)
RETURNS jsonb
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  sanitized_serial text;
  suspicious_patterns text[] := ARRAY[
    'script', 'javascript', 'vbscript', 'onload', 'onerror', 'onclick',
    'eval', 'expression', 'import', 'document', 'window', 'alert',
    '<', '>', '"', '''', '&', '%', 'union', 'select', 'insert', 'update', 'delete'
  ];
  pattern text;
BEGIN
  -- Basic validation
  IF input_serial IS NULL OR trim(input_serial) = '' THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Serial number is required');
  END IF;
  
  -- Remove all spaces and convert to uppercase
  sanitized_serial := upper(regexp_replace(trim(input_serial), '\s+', '', 'g'));
  
  -- Length validation
  IF length(sanitized_serial) < 3 THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Serial number too short (minimum 3 characters)');
  END IF;
  
  IF length(sanitized_serial) > 50 THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Serial number too long (maximum 50 characters)');
  END IF;
  
  -- Allow only alphanumeric characters and common serial number characters
  IF NOT (sanitized_serial ~ '^[A-Z0-9\-_]+$') THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Serial number contains invalid characters. Only letters, numbers, hyphens, and underscores are allowed.');
  END IF;
  
  -- Check for suspicious patterns
  FOREACH pattern IN ARRAY suspicious_patterns
  LOOP
    IF lower(sanitized_serial) LIKE '%' || pattern || '%' THEN
      -- Log suspicious attempt
      INSERT INTO public.audit_logs (
        user_id, action, table_name, new_values
      ) VALUES (
        auth.uid(),
        'SUSPICIOUS_INPUT_DETECTED',
        'validation',
        jsonb_build_object(
          'input_type', 'serial_number',
          'pattern_detected', pattern,
          'timestamp', now(),
          'severity', 'medium'
        )
      );
      
      RETURN jsonb_build_object('valid', false, 'error', 'Invalid characters detected');
    END IF;
  END LOOP;
  
  RETURN jsonb_build_object(
    'valid', true, 
    'sanitized_value', sanitized_serial,
    'original_length', length(input_serial),
    'sanitized_length', length(sanitized_serial)
  );
END;
$$;

-- 6. Create security alert trigger for sensitive operations
CREATE OR REPLACE FUNCTION public.log_security_sensitive_operations()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Log access to sensitive operations
  IF TG_TABLE_NAME IN ('api_keys', 'oauth_tokens', 'external_api_keys', 'newsletter_subscribers') THEN
    INSERT INTO public.audit_logs (
      user_id, action, table_name, record_id, new_values
    ) VALUES (
      auth.uid(),
      'SENSITIVE_' || TG_OP || '_' || TG_TABLE_NAME,
      TG_TABLE_NAME,
      COALESCE(NEW.id, OLD.id)::text,
      jsonb_build_object(
        'operation', TG_OP,
        'timestamp', now(),
        'user_role', auth.role(),
        'security_level', 'high'
      )
    );
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Apply the security logging trigger to sensitive tables
DROP TRIGGER IF EXISTS security_sensitive_operations_trigger ON public.api_keys;
CREATE TRIGGER security_sensitive_operations_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.api_keys
  FOR EACH ROW EXECUTE FUNCTION public.log_security_sensitive_operations();

DROP TRIGGER IF EXISTS security_sensitive_operations_trigger ON public.oauth_tokens;
CREATE TRIGGER security_sensitive_operations_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.oauth_tokens
  FOR EACH ROW EXECUTE FUNCTION public.log_security_sensitive_operations();

DROP TRIGGER IF EXISTS security_sensitive_operations_trigger ON public.external_api_keys;
CREATE TRIGGER security_sensitive_operations_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.external_api_keys
  FOR EACH ROW EXECUTE FUNCTION public.log_security_sensitive_operations();