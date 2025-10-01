-- Fix critical security issues: Simplify RLS policies for profiles and api_keys tables
-- Remove overlapping policies that could create security gaps

-- ============================================
-- PROFILES TABLE - Simplify RLS policies
-- ============================================

-- Drop all existing profiles policies
DROP POLICY IF EXISTS "Service role can manage profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "secure_profiles_access" ON public.profiles;
DROP POLICY IF EXISTS "secure_profiles_insert" ON public.profiles;
DROP POLICY IF EXISTS "system_service_manage_profiles" ON public.profiles;

-- Create single, clear policies for profiles
CREATE POLICY "profiles_select_own"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "profiles_insert_own"
  ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_update_own"
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_service_role"
  ON public.profiles
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ============================================
-- API_KEYS TABLE - Simplify RLS policies
-- ============================================

-- Drop all existing api_keys policies
DROP POLICY IF EXISTS "admin_manage_api_keys" ON public.api_keys;
DROP POLICY IF EXISTS "api_keys_authenticated_delete" ON public.api_keys;
DROP POLICY IF EXISTS "api_keys_authenticated_insert" ON public.api_keys;
DROP POLICY IF EXISTS "api_keys_authenticated_select" ON public.api_keys;
DROP POLICY IF EXISTS "api_keys_authenticated_update" ON public.api_keys;
DROP POLICY IF EXISTS "enhanced_secure_api_keys_insert" ON public.api_keys;
DROP POLICY IF EXISTS "secure_api_keys_access" ON public.api_keys;

-- Create single, clear policies for api_keys
CREATE POLICY "api_keys_select_own"
  ON public.api_keys
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "api_keys_insert_own"
  ON public.api_keys
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "api_keys_update_own"
  ON public.api_keys
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "api_keys_delete_own"
  ON public.api_keys
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "api_keys_service_role"
  ON public.api_keys
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Add comment to document the security fix
COMMENT ON TABLE public.profiles IS 'User profile data with simplified RLS policies - users can only access their own data';
COMMENT ON TABLE public.api_keys IS 'User API keys with simplified RLS policies - users can only access their own keys, keys should be encrypted at rest';