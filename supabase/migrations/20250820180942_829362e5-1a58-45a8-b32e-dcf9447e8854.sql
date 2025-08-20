-- 1) Create app_role enum if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
  END IF;
END$$;

-- 2) Create user_roles table to store roles independently of profiles/users data
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- 3) Enable RLS on user_roles and add secure policies
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Allow service role to fully manage roles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'user_roles' AND policyname = 'service_can_manage_user_roles'
  ) THEN
    CREATE POLICY "service_can_manage_user_roles"
    ON public.user_roles
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);
  END IF;
END$$;

-- Allow authenticated users to view only their own roles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'user_roles' AND policyname = 'users_can_view_own_roles'
  ) THEN
    CREATE POLICY "users_can_view_own_roles"
    ON public.user_roles
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);
  END IF;
END$$;

-- 4) Create a SECURITY DEFINER function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles r
    WHERE r.user_id = _user_id
      AND r.role = _role
  );
$$;

-- Grant execute on the helper to authenticated users
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

-- 5) Restrict newsletter_subscribers read access to admins only (keep service role full access)
-- Add SELECT policy for authenticated admins
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'newsletter_subscribers' AND policyname = 'admins_can_select_newsletter_subscribers'
  ) THEN
    CREATE POLICY "admins_can_select_newsletter_subscribers"
    ON public.newsletter_subscribers
    FOR SELECT
    TO authenticated
    USING (public.has_role(auth.uid(), 'admin'::public.app_role));
  END IF;
END$$;

-- Note: Existing policies remain in place:
--   - secure_newsletter_service_only (ALL TO service_role)
--   - secure_newsletter_function_insert (INSERT public WITH CHECK false) for SECURITY DEFINER inserts

-- 6) Optional: audit log function already present; no change required here
