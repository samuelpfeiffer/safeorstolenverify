-- Fix critical security issues from the linter warnings

-- 1. Fix function search path issues by ensuring all functions have proper search_path
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (
    id, 
    email, 
    full_name,
    avatar_url,
    created_at,
    updated_at
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    NEW.raw_user_meta_data->>'avatar_url',
    NOW(),
    NOW()
  );
  
  RETURN NEW;
END;
$$;

-- Update the update function as well
CREATE OR REPLACE FUNCTION public.update_profiles_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- 2. Improve RLS policies to be more restrictive while maintaining functionality

-- Drop existing problematic policies on profiles
DROP POLICY IF EXISTS "secure_profiles_access" ON public.profiles;
DROP POLICY IF EXISTS "system_service_manage_profiles" ON public.profiles;

-- Create more restrictive profiles policies
CREATE POLICY "profiles_authenticated_select"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "profiles_authenticated_update"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_service_role"
  ON public.profiles FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Fix user_terms_acceptance policies
DROP POLICY IF EXISTS "Users can manage their own terms acceptance" ON public.user_terms_acceptance;
DROP POLICY IF EXISTS "secure_user_terms_acceptance_access" ON public.user_terms_acceptance;

CREATE POLICY "user_terms_authenticated_only"
  ON public.user_terms_acceptance FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "user_terms_service_role"
  ON public.user_terms_acceptance FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 3. Fix verification_items policies to be more secure
DROP POLICY IF EXISTS "Anyone can read verification items" ON public.verification_items;

CREATE POLICY "verification_items_authenticated_read"
  ON public.verification_items FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "verification_items_authenticated_insert"
  ON public.verification_items FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "verification_items_user_update"
  ON public.verification_items FOR UPDATE
  TO authenticated
  USING (reporter_user_id = auth.uid())
  WITH CHECK (reporter_user_id = auth.uid());

-- 4. Fix community_stories to remove public access without authentication
DROP POLICY IF EXISTS "Public can view approved stories without emails" ON public.community_stories;

-- Only authenticated users can view community stories
CREATE POLICY "community_stories_authenticated_view"
  ON public.community_stories FOR SELECT
  TO authenticated
  USING (is_approved = true);

CREATE POLICY "community_stories_user_manage"
  ON public.community_stories FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- 5. Ensure all sensitive tables have proper RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_terms_acceptance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_stories ENABLE ROW LEVEL SECURITY;