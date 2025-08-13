-- Create validation functions and apply basic security fixes
-- This migration creates the validation functions and applies security enhancements

-- First, create the validation functions
CREATE OR REPLACE FUNCTION public.validate_api_key_access(
  requesting_user_id UUID,
  target_user_id UUID,
  operation TEXT
)
RETURNS BOOLEAN AS $$
BEGIN
  -- Only allow access if the requesting user matches the target user
  IF requesting_user_id IS NULL OR target_user_id IS NULL THEN
    RETURN FALSE;
  END IF;
  
  IF requesting_user_id != target_user_id THEN
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
EXCEPTION
  WHEN OTHERS THEN
    RETURN FALSE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.validate_oauth_token_access(
  requesting_user_id UUID,
  target_user_id UUID,
  operation TEXT
)
RETURNS BOOLEAN AS $$
BEGIN
  -- Only allow access if the requesting user matches the target user
  IF requesting_user_id IS NULL OR target_user_id IS NULL THEN
    RETURN FALSE;
  END IF;
  
  IF requesting_user_id != target_user_id THEN
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
EXCEPTION
  WHEN OTHERS THEN
    RETURN FALSE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fix api_keys policies to explicitly target authenticated role only
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

-- Fix oauth_tokens policies to explicitly target authenticated role only
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

-- Remove all anonymous role permissions from sensitive tables
REVOKE ALL ON public.alert_notifications FROM anon;
REVOKE ALL ON public.api_keys FROM anon;
REVOKE ALL ON public.api_usage_logs FROM anon;
REVOKE ALL ON public.checkmend_api_usage FROM anon;
REVOKE ALL ON public.checkout_sessions FROM anon;
REVOKE ALL ON public.customer_portal_sessions FROM anon;
REVOKE ALL ON public.marketplace_integrations FROM anon;
REVOKE ALL ON public.marketplace_listings FROM anon;
REVOKE ALL ON public.oauth_tokens FROM anon;
REVOKE ALL ON public.profiles FROM anon;
REVOKE ALL ON public.property_verifications FROM anon;
REVOKE ALL ON public.purchases FROM anon;
REVOKE ALL ON public.rate_limits FROM anon;
REVOKE ALL ON public.real_time_alerts FROM anon;
REVOKE ALL ON public.receipts FROM anon;
REVOKE ALL ON public.recipero_api_usage FROM anon;
REVOKE ALL ON public.social_media_findings FROM anon;
REVOKE ALL ON public.social_media_monitoring FROM anon;
REVOKE ALL ON public.subscribers FROM anon;
REVOKE ALL ON public.terms_acceptance FROM anon;
REVOKE ALL ON public.verification_results FROM anon;
REVOKE ALL ON public.verification_searches FROM anon;

-- Add missing indexes for performance and security
CREATE INDEX IF NOT EXISTS idx_api_keys_user_id_active ON public.api_keys(user_id, is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_oauth_tokens_user_id_revoked ON public.oauth_tokens(user_id, revoked) WHERE revoked = false;