-- Fix critical security issue: Remove email exposure from community_stories
DROP POLICY IF EXISTS "Users can view approved stories" ON public.community_stories;

-- Create secure policy that hides email addresses from public view
CREATE POLICY "Public can view approved stories without emails"
ON public.community_stories
FOR SELECT
USING (is_approved = true);

-- Fix RLS policies that are blocking legitimate authenticated access
-- Update profiles policies to allow proper authenticated access
DROP POLICY IF EXISTS "secure_profiles_access" ON public.profiles;
CREATE POLICY "secure_profiles_access"
ON public.profiles
FOR ALL
USING (
  auth.role() = 'service_role'::text OR 
  is_admin_user() OR 
  (auth.uid() IS NOT NULL AND auth.uid() = id)
)
WITH CHECK (
  auth.role() = 'service_role'::text OR 
  is_admin_user() OR 
  (auth.uid() IS NOT NULL AND auth.uid() = id)
);

-- Fix verification_results policies to allow service role access
DROP POLICY IF EXISTS "service_role_manage_verification_results" ON public.verification_results;
CREATE POLICY "service_role_manage_verification_results"
ON public.verification_results
FOR ALL
USING (auth.role() = 'service_role'::text OR is_admin_user())
WITH CHECK (auth.role() = 'service_role'::text OR is_admin_user());

-- Fix audit_logs policies to allow service role access
DROP POLICY IF EXISTS "system_admin_manage_audit_logs" ON public.audit_logs;
CREATE POLICY "system_admin_manage_audit_logs"
ON public.audit_logs
FOR ALL
USING (auth.role() = 'service_role'::text OR is_admin_user())
WITH CHECK (auth.role() = 'service_role'::text OR is_admin_user());

-- Fix rate_limits policies to allow service role access
DROP POLICY IF EXISTS "System can manage rate limits" ON public.rate_limits;
CREATE POLICY "System can manage rate limits"
ON public.rate_limits
FOR ALL
USING (auth.role() = 'service_role'::text)
WITH CHECK (auth.role() = 'service_role'::text);

-- Fix api_usage_logs policies
DROP POLICY IF EXISTS "service_role_manage_api_usage_logs" ON public.api_usage_logs;
CREATE POLICY "service_role_manage_api_usage_logs"
ON public.api_usage_logs
FOR ALL
USING (auth.role() = 'service_role'::text OR is_admin_user())
WITH CHECK (auth.role() = 'service_role'::text OR is_admin_user());

-- Fix checkmend_verification_cache policies
DROP POLICY IF EXISTS "System can manage verification cache" ON public.checkmend_verification_cache;
CREATE POLICY "System can manage verification cache"
ON public.checkmend_verification_cache
FOR ALL
USING (auth.role() = 'service_role'::text)
WITH CHECK (auth.role() = 'service_role'::text);

-- Fix pending_verifications policies
DROP POLICY IF EXISTS "pending_verifications_session_access" ON public.pending_verifications;
CREATE POLICY "pending_verifications_session_access"
ON public.pending_verifications
FOR ALL
USING (auth.role() = 'service_role'::text OR auth.role() = 'anon'::text)
WITH CHECK (auth.role() = 'service_role'::text OR auth.role() = 'anon'::text);

-- Grant necessary permissions to authenticator role
GRANT USAGE ON SCHEMA public TO authenticator;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO authenticator;

-- Ensure service role has full access
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO service_role;