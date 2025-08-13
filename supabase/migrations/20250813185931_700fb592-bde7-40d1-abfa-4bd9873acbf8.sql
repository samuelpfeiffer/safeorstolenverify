-- Security hardening for API keys and OAuth tokens (Fixed)
-- Fix: API Keys and Tokens Could Be Stolen

-- Step 1: Drop all existing policies for api_keys table
DO $$
BEGIN
    -- Drop api_keys policies
    DROP POLICY IF EXISTS "Authenticated users can update their own API keys" ON public.api_keys;
    DROP POLICY IF EXISTS "Authenticated users can view their own API keys" ON public.api_keys;
    DROP POLICY IF EXISTS "Users can create their own API keys" ON public.api_keys;
    DROP POLICY IF EXISTS "Authenticated users can view own API keys" ON public.api_keys;
    DROP POLICY IF EXISTS "Authenticated users can create own API keys" ON public.api_keys;
    DROP POLICY IF EXISTS "Authenticated users can update own API keys" ON public.api_keys;
    DROP POLICY IF EXISTS "Authenticated users can delete own API keys" ON public.api_keys;
EXCEPTION WHEN OTHERS THEN
    -- Continue if policies don't exist
    NULL;
END $$;

-- Step 2: Create secure policies for api_keys (restrict to authenticated role only)
CREATE POLICY "secure_api_keys_select"
ON public.api_keys
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "secure_api_keys_insert"
ON public.api_keys
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "secure_api_keys_update"
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

CREATE POLICY "secure_api_keys_delete"
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