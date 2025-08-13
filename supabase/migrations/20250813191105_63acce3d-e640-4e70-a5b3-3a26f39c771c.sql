-- Enhanced Security for API Keys and OAuth Tokens (Fixed)
-- Implements multiple layers of protection beyond basic RLS

-- PHASE 1: Create Security Functions for Enhanced Validation

-- Function to validate API key access with additional security checks
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

-- Function to validate OAuth token access with enhanced security
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

-- Function to log sensitive data access
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

-- PHASE 2: Update RLS Policies with Enhanced Security Functions

-- Enhanced API Keys policies with additional validation
DROP POLICY IF EXISTS "secure_api_keys_select" ON public.api_keys;
DROP POLICY IF EXISTS "secure_api_keys_insert" ON public.api_keys;
DROP POLICY IF EXISTS "secure_api_keys_update" ON public.api_keys;
DROP POLICY IF EXISTS "secure_api_keys_delete" ON public.api_keys;
DROP POLICY IF EXISTS "enhanced_api_keys_select" ON public.api_keys;
DROP POLICY IF EXISTS "enhanced_api_keys_insert" ON public.api_keys;
DROP POLICY IF EXISTS "enhanced_api_keys_update" ON public.api_keys;
DROP POLICY IF EXISTS "enhanced_api_keys_delete" ON public.api_keys;

CREATE POLICY "enhanced_secure_api_keys_select"
ON public.api_keys
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND public.validate_api_key_access(user_id)
  AND (expires_at IS NULL OR expires_at > NOW())
  AND is_active = true
);

CREATE POLICY "enhanced_secure_api_keys_insert"
ON public.api_keys
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND public.validate_api_key_access(user_id)
);

CREATE POLICY "enhanced_secure_api_keys_update"
ON public.api_keys
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND public.validate_api_key_access(user_id)
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND public.validate_api_key_access(user_id)
);

CREATE POLICY "enhanced_secure_api_keys_delete"
ON public.api_keys
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND public.validate_api_key_access(user_id)
);

-- Enhanced OAuth Tokens policies with additional validation
DROP POLICY IF EXISTS "secure_oauth_tokens_select" ON public.oauth_tokens;
DROP POLICY IF EXISTS "secure_oauth_tokens_insert" ON public.oauth_tokens;
DROP POLICY IF EXISTS "secure_oauth_tokens_update" ON public.oauth_tokens;
DROP POLICY IF EXISTS "secure_oauth_tokens_delete" ON public.oauth_tokens;
DROP POLICY IF EXISTS "enhanced_oauth_tokens_select" ON public.oauth_tokens;
DROP POLICY IF EXISTS "enhanced_oauth_tokens_insert" ON public.oauth_tokens;
DROP POLICY IF EXISTS "enhanced_oauth_tokens_update" ON public.oauth_tokens;
DROP POLICY IF EXISTS "enhanced_oauth_tokens_delete" ON public.oauth_tokens;

CREATE POLICY "enhanced_secure_oauth_tokens_select"
ON public.oauth_tokens
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND public.validate_oauth_token_access(user_id, id)
  AND (expires_at IS NULL OR expires_at > NOW())
  AND revoked = false
);

CREATE POLICY "enhanced_secure_oauth_tokens_insert"
ON public.oauth_tokens
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "enhanced_secure_oauth_tokens_update"
ON public.oauth_tokens
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND public.validate_oauth_token_access(user_id, id)
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "enhanced_secure_oauth_tokens_delete"
ON public.oauth_tokens
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND public.validate_oauth_token_access(user_id, id)
);

-- PHASE 3: Add Enhanced Audit Triggers (Fixed - no SELECT triggers)

-- Enhanced audit trigger for API keys
DROP TRIGGER IF EXISTS audit_api_keys_changes ON public.api_keys;
CREATE TRIGGER audit_api_keys_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.api_keys
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_data_access();

-- Enhanced audit trigger for OAuth tokens  
DROP TRIGGER IF EXISTS audit_oauth_tokens_changes ON public.oauth_tokens;
CREATE TRIGGER audit_oauth_tokens_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.oauth_tokens
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_data_access();

-- PHASE 4: Create Additional Security Tables

-- Table for tracking sensitive data access patterns
CREATE TABLE IF NOT EXISTS public.sensitive_data_access_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  table_name text NOT NULL,
  record_id text,
  access_type text NOT NULL,
  ip_address text,
  user_agent text,
  session_data jsonb DEFAULT '{}',
  risk_score integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on the new table
ALTER TABLE public.sensitive_data_access_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sensitive_data_access_log FORCE ROW LEVEL SECURITY;

-- Policy for sensitive data access log (system only for now)
CREATE POLICY "system_can_manage_sensitive_access_log"
ON public.sensitive_data_access_log
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- PHASE 5: Add Token Rotation and Cleanup Functions

-- Function to automatically expire old API keys
CREATE OR REPLACE FUNCTION public.cleanup_expired_tokens()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
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
$$;

-- PHASE 6: Additional Security Constraints

-- Add constraints to ensure data integrity (if not exists)
DO $$
BEGIN
  -- Add expiry check constraint for api_keys
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'api_keys_expiry_check'
  ) THEN
    ALTER TABLE public.api_keys 
    ADD CONSTRAINT api_keys_expiry_check 
    CHECK (expires_at IS NULL OR expires_at > created_at);
  END IF;
  
  -- Add expiry check constraint for oauth_tokens
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'oauth_tokens_expiry_check'
  ) THEN
    ALTER TABLE public.oauth_tokens 
    ADD CONSTRAINT oauth_tokens_expiry_check 
    CHECK (expires_at IS NULL OR expires_at > created_at);
  END IF;
END $$;

-- Add indexes for performance on security queries
CREATE INDEX IF NOT EXISTS idx_api_keys_user_active 
ON public.api_keys(user_id, is_active, expires_at);

CREATE INDEX IF NOT EXISTS idx_oauth_tokens_user_revoked 
ON public.oauth_tokens(user_id, revoked, expires_at);

CREATE INDEX IF NOT EXISTS idx_audit_logs_sensitive_data 
ON public.audit_logs(table_name, created_at) 
WHERE table_name IN ('api_keys', 'oauth_tokens');

-- Grant necessary permissions
GRANT SELECT, INSERT ON public.sensitive_data_access_log TO authenticated;
GRANT ALL ON public.sensitive_data_access_log TO service_role;