-- Clean up duplicate RLS policies that are causing conflicts

-- PROFILES TABLE - Remove duplicates, keep clean ones
DROP POLICY IF EXISTS "Service role can manage all profile fields" ON public.profiles;
DROP POLICY IF EXISTS "Service role full access to profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can update safe profile fields" ON public.profiles;
DROP POLICY IF EXISTS "authenticated_users_insert_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "authenticated_users_update_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "authenticated_users_view_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "service_role_manage_profiles" ON public.profiles;
DROP POLICY IF EXISTS "users_update_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "users_view_all_profiles" ON public.profiles;

-- VERIFICATION_RESULTS TABLE - Remove duplicates
DROP POLICY IF EXISTS "authenticated_users_create_own_verification_results" ON public.verification_results;
DROP POLICY IF EXISTS "authenticated_users_view_own_verification_results" ON public.verification_results;
DROP POLICY IF EXISTS "service_role_manage_verification_results" ON public.verification_results;

-- VERIFICATION_SEARCHES TABLE - Remove duplicates
DROP POLICY IF EXISTS "Users can create their own searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Users can insert their own verification searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Users can view their own searches" ON public.verification_searches;
DROP POLICY IF EXISTS "secure_verification_searches_access" ON public.verification_searches;
DROP POLICY IF EXISTS "service_role_manage_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "service_role_manage_verification_searches" ON public.verification_searches;
DROP POLICY IF EXISTS "users_view_own_searches" ON public.verification_searches;

-- Add service role access back (single policy per table)
CREATE POLICY "service_role_full_access_profiles" ON public.profiles
FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "service_role_full_access_verification_results" ON public.verification_results
FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "service_role_full_access_verification_searches" ON public.verification_searches
FOR ALL TO service_role USING (true) WITH CHECK (true);