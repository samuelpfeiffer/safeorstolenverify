-- Drop existing functions and recreate with correct parameters
-- This fixes the parameter naming issue

-- Drop existing functions first
DROP FUNCTION IF EXISTS public.validate_api_key_access(uuid, uuid, text);
DROP FUNCTION IF EXISTS public.validate_oauth_token_access(uuid, uuid, text);

-- Create validation functions for API keys and OAuth tokens with correct parameters
CREATE OR REPLACE FUNCTION public.validate_api_key_access(
  requesting_user_id UUID,
  resource_user_id UUID,
  operation_type TEXT
) RETURNS BOOLEAN AS $$
BEGIN
  -- Basic validation: user can only access their own resources
  IF requesting_user_id != resource_user_id THEN
    RETURN FALSE;
  END IF;
  
  -- Additional security checks can be added here
  -- For now, we allow all operations for the resource owner
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.validate_oauth_token_access(
  requesting_user_id UUID,
  resource_user_id UUID,
  operation_type TEXT
) RETURNS BOOLEAN AS $$
BEGIN
  -- Basic validation: user can only access their own tokens
  IF requesting_user_id != resource_user_id THEN
    RETURN FALSE;
  END IF;
  
  -- Additional security checks can be added here
  -- For now, we allow all operations for the resource owner
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Now update the policies for api_keys
DROP POLICY IF EXISTS "secure_api_keys_delete" ON public.api_keys;
DROP POLICY IF EXISTS "secure_api_keys_insert" ON public.api_keys;
DROP POLICY IF EXISTS "secure_api_keys_select" ON public.api_keys;
DROP POLICY IF EXISTS "secure_api_keys_update" ON public.api_keys;

CREATE POLICY "api_keys_authenticated_delete"
ON public.api_keys
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND validate_api_key_access(auth.uid(), user_id, 'DELETE')
);

CREATE POLICY "api_keys_authenticated_insert"
ON public.api_keys
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND validate_api_key_access(auth.uid(), user_id, 'INSERT')
);

CREATE POLICY "api_keys_authenticated_select"
ON public.api_keys
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND validate_api_key_access(auth.uid(), user_id, 'SELECT')
);

CREATE POLICY "api_keys_authenticated_update"
ON public.api_keys
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND validate_api_key_access(auth.uid(), user_id, 'UPDATE')
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND validate_api_key_access(auth.uid(), user_id, 'UPDATE')
);

-- Update the policies for oauth_tokens
DROP POLICY IF EXISTS "secure_oauth_tokens_delete" ON public.oauth_tokens;
DROP POLICY IF EXISTS "secure_oauth_tokens_insert" ON public.oauth_tokens;
DROP POLICY IF EXISTS "secure_oauth_tokens_select" ON public.oauth_tokens;
DROP POLICY IF EXISTS "secure_oauth_tokens_update" ON public.oauth_tokens;

CREATE POLICY "oauth_tokens_authenticated_delete"
ON public.oauth_tokens
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND validate_oauth_token_access(auth.uid(), user_id, 'DELETE')
);

CREATE POLICY "oauth_tokens_authenticated_insert"
ON public.oauth_tokens
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND validate_oauth_token_access(auth.uid(), user_id, 'INSERT')
);

CREATE POLICY "oauth_tokens_authenticated_select"
ON public.oauth_tokens
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND validate_oauth_token_access(auth.uid(), user_id, 'SELECT')
);

CREATE POLICY "oauth_tokens_authenticated_update"
ON public.oauth_tokens
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND validate_oauth_token_access(auth.uid(), user_id, 'UPDATE')
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
  AND validate_oauth_token_access(auth.uid(), user_id, 'UPDATE')
);

-- Add performance and security indexes
CREATE INDEX IF NOT EXISTS idx_api_keys_user_id_active ON public.api_keys(user_id, is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_oauth_tokens_user_id_revoked ON public.oauth_tokens(user_id, revoked) WHERE revoked = false;

-- Add audit triggers for sensitive data access
DROP TRIGGER IF EXISTS audit_api_keys_access ON public.api_keys;
DROP TRIGGER IF EXISTS audit_oauth_tokens_access ON public.oauth_tokens;

CREATE TRIGGER audit_api_keys_access
AFTER INSERT OR UPDATE OR DELETE ON public.api_keys
FOR EACH ROW
EXECUTE FUNCTION log_sensitive_access();

CREATE TRIGGER audit_oauth_tokens_access
AFTER INSERT OR UPDATE OR DELETE ON public.oauth_tokens
FOR EACH ROW
EXECUTE FUNCTION log_sensitive_access();