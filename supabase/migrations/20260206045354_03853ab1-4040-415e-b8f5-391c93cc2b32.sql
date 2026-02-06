-- Add explicit deny for anonymous access to gsc_oauth_tokens
-- Defense-in-depth: ensures anon role cannot access OAuth tokens
CREATE POLICY "deny_anon_gsc_tokens_access"
ON public.gsc_oauth_tokens
AS RESTRICTIVE
FOR ALL
TO anon
USING (false)
WITH CHECK (false);