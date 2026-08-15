-- email_leads: allow admin read
GRANT SELECT ON public.email_leads TO authenticated;
GRANT ALL ON public.email_leads TO service_role;

DROP POLICY IF EXISTS "admins_can_read_email_leads" ON public.email_leads;
CREATE POLICY "admins_can_read_email_leads"
ON public.email_leads
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- gsc_checks: allow admin read + service role full access
GRANT SELECT ON public.gsc_checks TO authenticated;
GRANT ALL ON public.gsc_checks TO service_role;

DROP POLICY IF EXISTS "admins_can_read_gsc_checks" ON public.gsc_checks;
CREATE POLICY "admins_can_read_gsc_checks"
ON public.gsc_checks
FOR SELECT
TO authenticated
USING (public.is_admin_user());

DROP POLICY IF EXISTS "service_role_all_gsc_checks" ON public.gsc_checks;
CREATE POLICY "service_role_all_gsc_checks"
ON public.gsc_checks
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);