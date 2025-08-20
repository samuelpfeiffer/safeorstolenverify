-- Fix Function Search Path Security Issues
-- Update all functions to have secure search_path settings

-- 1. Fix newsletter access logging function
CREATE OR REPLACE FUNCTION public.log_newsletter_access_attempt()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log any access attempt (should only be from secure functions now)
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, new_values
  ) VALUES (
    auth.uid(), 
    'NEWSLETTER_ACCESS_' || TG_OP, 
    'newsletter_subscribers',
    COALESCE(NEW.id, OLD.id)::text,
    jsonb_build_object(
      'operation', TG_OP,
      'timestamp', NOW(),
      'auth_role', auth.role(),
      'user_id', auth.uid(),
      'access_method', 'direct_table_access'
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- 2. Fix newsletter security access function  
CREATE OR REPLACE FUNCTION public.log_newsletter_security_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log any unauthorized access attempt
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, new_values
  ) VALUES (
    auth.uid(), 
    'NEWSLETTER_SECURITY_ACCESS_' || TG_OP, 
    'newsletter_subscribers',
    COALESCE(NEW.id, OLD.id)::text,
    jsonb_build_object(
      'operation', TG_OP,
      'timestamp', NOW(),
      'role', auth.role(),
      'user_id', auth.uid(),
      'security_event', 'newsletter_table_access'
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- 3. Fix newsletter access function
CREATE OR REPLACE FUNCTION public.log_newsletter_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log any access attempt to newsletter_subscribers
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, new_values
  ) VALUES (
    auth.uid(), 
    'NEWSLETTER_ACCESS_' || TG_OP, 
    'newsletter_subscribers',
    COALESCE(NEW.id, OLD.id)::text,
    jsonb_build_object(
      'operation', TG_OP,
      'timestamp', NOW(),
      'role', auth.role(),
      'user_id', auth.uid()
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- 4. Fix API key access validation function
CREATE OR REPLACE FUNCTION public.validate_api_key_access(key_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  current_user_id uuid;
  rate_limit_exceeded boolean := false;
BEGIN
  -- Get current authenticated user
  current_user_id := auth.uid();
  
  -- Basic user ownership check
  IF current_user_id IS NULL OR current_user_id != key_user_id THEN
    -- Log unauthorized access attempt
    INSERT INTO public.audit_logs (
      user_id, action, table_name, record_id, new_values
    ) VALUES (
      current_user_id, 'UNAUTHORIZED_API_KEY_ACCESS', 'api_keys', NULL,
      jsonb_build_object('attempted_user_id', key_user_id, 'timestamp', NOW())
    );
    RETURN false;
  END IF;
  
  -- Check rate limiting for API key access (100 requests per hour)
  SELECT CASE 
    WHEN COUNT(*) > 100 THEN true 
    ELSE false 
  END INTO rate_limit_exceeded
  FROM public.audit_logs 
  WHERE user_id = current_user_id 
    AND action LIKE '%API_KEY%' 
    AND created_at > NOW() - INTERVAL '1 hour';
    
  IF rate_limit_exceeded THEN
    INSERT INTO public.audit_logs (
      user_id, action, table_name, record_id, new_values
    ) VALUES (
      current_user_id, 'RATE_LIMIT_EXCEEDED_API_KEYS', 'api_keys', NULL,
      jsonb_build_object('limit_type', 'hourly_api_key_access', 'timestamp', NOW())
    );
    RETURN false;
  END IF;
  
  RETURN true;
END;
$$;

-- 5. Fix OAuth token access validation function
CREATE OR REPLACE FUNCTION public.validate_oauth_token_access(token_user_id uuid, token_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  current_user_id uuid;
  token_expired boolean := false;
  token_revoked boolean := false;
BEGIN
  current_user_id := auth.uid();
  
  -- Basic user ownership check
  IF current_user_id IS NULL OR current_user_id != token_user_id THEN
    INSERT INTO public.audit_logs (
      user_id, action, table_name, record_id, new_values
    ) VALUES (
      current_user_id, 'UNAUTHORIZED_OAUTH_ACCESS', 'oauth_tokens', token_id::text,
      jsonb_build_object('attempted_user_id', token_user_id, 'timestamp', NOW())
    );
    RETURN false;
  END IF;
  
  -- Check if token is expired or revoked
  SELECT 
    CASE WHEN expires_at < NOW() THEN true ELSE false END,
    revoked
  INTO token_expired, token_revoked
  FROM public.oauth_tokens 
  WHERE id = token_id AND user_id = current_user_id;
  
  IF token_expired OR token_revoked THEN
    INSERT INTO public.audit_logs (
      user_id, action, table_name, record_id, new_values
    ) VALUES (
      current_user_id, 'EXPIRED_OR_REVOKED_TOKEN_ACCESS', 'oauth_tokens', token_id::text,
      jsonb_build_object('expired', token_expired, 'revoked', token_revoked, 'timestamp', NOW())
    );
    RETURN false;
  END IF;
  
  RETURN true;
END;
$$;

-- 6. Fix sensitive data access logging function
CREATE OR REPLACE FUNCTION public.log_sensitive_data_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log all modifications to sensitive tables
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, 
    new_values, old_values
  ) VALUES (
    auth.uid(), 
    TG_OP || '_' || TG_TABLE_NAME,
    TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id)::text,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN 
      jsonb_build_object(
        'masked_data', 'SENSITIVE_DATA_ACCESSED',
        'timestamp', NOW(),
        'user_session', auth.uid(),
        'operation', TG_OP
      )
    ELSE NULL END,
    CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN 
      jsonb_build_object('action', 'SENSITIVE_DATA_MODIFIED', 'operation', TG_OP)
    ELSE NULL END
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- 7. Fix sensitive access logging function
CREATE OR REPLACE FUNCTION public.log_sensitive_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log access to sensitive tables
  INSERT INTO public.sensitive_data_access_log (
    user_id,
    table_name,
    access_type,
    record_id,
    ip_address
  ) VALUES (
    auth.uid(),
    TG_TABLE_NAME,
    TG_OP,
    COALESCE(NEW.id, OLD.id),
    NULL -- IP address would need to be passed from application layer
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;