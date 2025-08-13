-- Security hardening for API keys and OAuth tokens
-- Fix: API Keys and Tokens Could Be Stolen

-- Step 1: Drop existing insecure policies for api_keys table
DROP POLICY IF EXISTS "Authenticated users can update their own API keys" ON public.api_keys;
DROP POLICY IF EXISTS "Authenticated users can view their own API keys" ON public.api_keys;
DROP POLICY IF EXISTS "Users can create their own API keys" ON public.api_keys;

-- Step 2: Create secure policies for api_keys (restrict to authenticated role only)
CREATE POLICY "Authenticated users can view own API keys"
ON public.api_keys
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "Authenticated users can create own API keys"
ON public.api_keys
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "Authenticated users can update own API keys"
ON public.api_keys
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "Authenticated users can delete own API keys"
ON public.api_keys
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Step 3: Revoke all access from public/anon roles
REVOKE ALL ON public.api_keys FROM anon;
REVOKE ALL ON public.api_keys FROM public;
REVOKE ALL ON public.oauth_tokens FROM anon;
REVOKE ALL ON public.oauth_tokens FROM public;

-- Step 4: Grant specific permissions only to authenticated users
GRANT SELECT, INSERT, UPDATE, DELETE ON public.api_keys TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.oauth_tokens TO authenticated;
GRANT ALL ON public.api_keys TO service_role;
GRANT ALL ON public.oauth_tokens TO service_role;

-- Step 5: Ensure RLS is properly enforced
ALTER TABLE public.api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.api_keys FORCE ROW LEVEL SECURITY;
ALTER TABLE public.oauth_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.oauth_tokens FORCE ROW LEVEL SECURITY;

-- Step 6: Add audit logging function for sensitive operations
CREATE OR REPLACE FUNCTION public.log_sensitive_access()
RETURNS TRIGGER AS $$
BEGIN
  -- Log access to sensitive tables
  INSERT INTO public.audit_logs (
    user_id,
    action,
    table_name,
    record_id,
    new_values,
    old_values
  ) VALUES (
    auth.uid(),
    TG_OP,
    TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id),
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN row_to_json(NEW) ELSE NULL END,
    CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN row_to_json(OLD) ELSE NULL END
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 7: Add audit triggers for API keys and OAuth tokens
CREATE TRIGGER api_keys_audit_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.api_keys
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_access();

CREATE TRIGGER oauth_tokens_audit_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.oauth_tokens
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_access();