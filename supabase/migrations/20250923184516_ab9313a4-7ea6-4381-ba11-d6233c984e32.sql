-- Fix RLS policy for pending_verifications to be more restrictive
-- Remove anonymous access for better security

DROP POLICY IF EXISTS "pending_verifications_session_access" ON public.pending_verifications;

CREATE POLICY "authenticated_users_can_manage_pending_verifications"
ON public.pending_verifications
FOR ALL
USING (auth.role() = 'service_role'::text OR (auth.uid() IS NOT NULL))
WITH CHECK (auth.role() = 'service_role'::text OR (auth.uid() IS NOT NULL));

-- Update profiles table to ensure better constraints
-- Make sure user can't create duplicate profiles
ALTER TABLE public.profiles ADD CONSTRAINT unique_profile_per_user UNIQUE (id);

-- Add better validation for search counts  
ALTER TABLE public.profiles ADD CONSTRAINT valid_search_count CHECK (search_count >= 0);
ALTER TABLE public.profiles ADD CONSTRAINT valid_promotion_searches CHECK (promotion_searches_remaining >= 0);