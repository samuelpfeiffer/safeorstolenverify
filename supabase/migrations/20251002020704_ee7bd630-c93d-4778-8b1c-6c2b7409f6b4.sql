-- CRITICAL SECURITY FIX: Protect profiles table from unauthorized access
-- Drop existing weak policies
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_service_role" ON public.profiles;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;

-- Create strict RLS policies for profiles (using 'id' column, not 'user_id')
CREATE POLICY "Users can only view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can only update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Service role full access to profiles"
  ON public.profiles
  FOR ALL
  USING (auth.role() = 'service_role');

-- CRITICAL SECURITY FIX: Strengthen existing API keys policies
-- The api_keys table already has policies but we'll ensure they're strict
DROP POLICY IF EXISTS "api_keys_service_role" ON public.api_keys;

CREATE POLICY "Service role full access to API keys"
  ON public.api_keys
  FOR ALL
  USING (auth.role() = 'service_role');

-- Add security function to check admin access (if not exists)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid()
    AND role = 'admin'
  );
$$;

-- Configure auth security settings in system_configuration
INSERT INTO public.system_configuration (config_key, config_value, description)
VALUES 
  ('otp_expiry_seconds', '300'::jsonb, 'OTP expires after 5 minutes for security'),
  ('enable_password_leak_protection', 'true'::jsonb, 'Enable password leak detection'),
  ('security_level', '"high"'::jsonb, 'Security level configuration')
ON CONFLICT (config_key) 
DO UPDATE SET 
  config_value = EXCLUDED.config_value,
  updated_at = now();

-- Log security improvements
INSERT INTO public.audit_logs (action, table_name, new_values)
VALUES (
  'SECURITY_HARDENING_COMPLETE',
  'system',
  jsonb_build_object(
    'timestamp', now(),
    'changes', 'Hardened RLS policies for profiles and api_keys tables',
    'security_level', 'high'
  )
);