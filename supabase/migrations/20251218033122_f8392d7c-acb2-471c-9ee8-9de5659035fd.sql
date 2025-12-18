
-- =====================================================
-- FIX DUPLICATE RLS POLICIES - CRITICAL DATABASE FIX
-- =====================================================

-- ===================
-- PROFILES TABLE
-- ===================
-- Drop duplicate policies (keep snake_case versions)
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "service_role_full_access_profiles" ON public.profiles;

-- ===================
-- VERIFICATION_RESULTS TABLE
-- ===================
-- Drop duplicate policies (keep snake_case versions)
DROP POLICY IF EXISTS "Users can insert own results" ON public.verification_results;
DROP POLICY IF EXISTS "Users can view own results" ON public.verification_results;
DROP POLICY IF EXISTS "service_role_full_access_verification_results" ON public.verification_results;

-- ===================
-- VERIFICATION_SEARCHES TABLE
-- ===================
-- Drop duplicate policies (keep snake_case versions)
DROP POLICY IF EXISTS "Users can insert own searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Users can update own searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Users can view own searches" ON public.verification_searches;
DROP POLICY IF EXISTS "service_role_full_access_verification_searches" ON public.verification_searches;

-- ===================
-- VERIFY REMAINING POLICIES
-- ===================
-- After this migration, each table should have:
-- profiles: users_select_own_profile, users_insert_own_profile, users_update_own_profile, service_role_manage_profiles
-- verification_results: users_select_own_results, users_insert_own_results, users_update_own_results, service_role_manage_verification_results
-- verification_searches: users_select_own_searches, users_insert_own_searches, users_update_own_searches, service_role_manage_verification_searches, Anonymous policies
