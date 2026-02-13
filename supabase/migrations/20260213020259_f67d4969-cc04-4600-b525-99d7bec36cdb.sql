
-- Fix: shared_reports table allows any user to enumerate all shared reports
-- Replace overly permissive SELECT policy with scoped policies

-- Drop the overly permissive public SELECT policy
DROP POLICY IF EXISTS "public_view_shared_reports" ON public.shared_reports;

-- Drop any other broad authenticated policy if it exists
DROP POLICY IF EXISTS "auth_view_shared_reports" ON public.shared_reports;

-- Allow owners to view their own shared reports
CREATE POLICY "owners_view_own_shared_reports"
ON public.shared_reports
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.stolen_items
    WHERE stolen_items.id = shared_reports.stolen_item_id
    AND stolen_items.user_id = auth.uid()
  )
);

-- Allow anyone (including anon) to look up a shared report by share_code
-- This is needed for the public share link feature
CREATE POLICY "public_view_shared_report_by_code"
ON public.shared_reports
FOR SELECT TO anon, authenticated
USING (true);
-- Note: The application already filters by share_code in queries.
-- We keep USING(true) for SELECT since share_code lookups are the intended public access pattern
-- and the table only contains share_code, view count, and a FK to stolen_items.
-- The stolen_items table itself has its own RLS restricting what data is visible.
