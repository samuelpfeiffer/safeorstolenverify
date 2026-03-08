-- Fix 1: certificates - require caller to match share_token, not just check non-null
DROP POLICY IF EXISTS "public_read_cert_by_token" ON public.certificates;

CREATE POLICY "public_read_cert_by_token"
ON public.certificates
FOR SELECT
USING (false);

-- Security definer function for share_token lookups
CREATE OR REPLACE FUNCTION public.get_certificate_by_share_token(p_share_token text)
RETURNS SETOF certificates
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.certificates
  WHERE share_token = p_share_token
  LIMIT 1;
$$;

-- Fix 2: community_stories - drop the policy that exposes email/name to all authenticated users
DROP POLICY IF EXISTS "authenticated_view_approved_stories" ON public.community_stories;

-- Replace with a policy that only lets users see their own stories
CREATE POLICY "authenticated_view_own_stories"
ON public.community_stories
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);