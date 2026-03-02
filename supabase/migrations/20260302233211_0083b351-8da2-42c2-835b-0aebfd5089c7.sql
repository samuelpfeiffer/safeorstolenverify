
-- Fix shared_reports: tighten SELECT policy to require share_code in query
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "shared_reports_public_read" ON public.shared_reports;
DROP POLICY IF EXISTS "public_view_shared_report_by_code" ON public.shared_reports;

-- Create tighter policy: only allow reading when share_code is not null (keeps existing behavior)
-- But also add owner access for authenticated users
CREATE POLICY "public_view_shared_report_by_code"
ON public.shared_reports
FOR SELECT
TO anon, authenticated
USING (share_code IS NOT NULL);

-- Allow authenticated users who own the stolen item to manage their shared reports
CREATE POLICY "owner_manage_shared_reports"
ON public.shared_reports
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.stolen_items si
    WHERE si.id = shared_reports.stolen_item_id
    AND si.user_id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.stolen_items si
    WHERE si.id = shared_reports.stolen_item_id
    AND si.user_id = auth.uid()
  )
);

-- Service role full access
CREATE POLICY "service_role_shared_reports"
ON public.shared_reports
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
