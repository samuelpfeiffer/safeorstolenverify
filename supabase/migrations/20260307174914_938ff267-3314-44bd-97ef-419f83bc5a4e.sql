-- 1. Fix shared_reports: Replace overly permissive public_view policy
DROP POLICY IF EXISTS "public_view_shared_report_by_code" ON public.shared_reports;

-- Create a security definer function to look up shared reports by code
CREATE OR REPLACE FUNCTION public.get_shared_report_by_code(p_share_code text)
RETURNS SETOF public.shared_reports
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT * FROM public.shared_reports
  WHERE share_code = p_share_code
  LIMIT 1;
$$;

-- 2. Fix community_stories: Remove email/name from public reads
DROP POLICY IF EXISTS "community_stories_public_read" ON public.community_stories;

CREATE OR REPLACE VIEW public.community_stories_public AS
SELECT 
  id,
  experience_type,
  story,
  item_type,
  created_at,
  updated_at,
  is_approved
FROM public.community_stories
WHERE is_approved = true;

GRANT SELECT ON public.community_stories_public TO anon, authenticated;

CREATE POLICY "authenticated_view_approved_stories" ON public.community_stories
  FOR SELECT
  TO authenticated
  USING (is_approved = true);

-- 3. Fix stolen_items: Create public view without police_report_number and user_id
CREATE OR REPLACE VIEW public.stolen_items_public AS
SELECT 
  id,
  serial_number,
  imei,
  vin,
  item_type,
  brand,
  model,
  description,
  location,
  date_stolen,
  status,
  created_at,
  updated_at
FROM public.stolen_items
WHERE status IN ('reported', 'verified');

GRANT SELECT ON public.stolen_items_public TO anon, authenticated;

DROP POLICY IF EXISTS "stolen_items_public_read" ON public.stolen_items;

CREATE POLICY "authenticated_read_reported_items" ON public.stolen_items
  FOR SELECT
  TO authenticated
  USING (status IN ('reported', 'verified'));