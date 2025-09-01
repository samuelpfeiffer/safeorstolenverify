-- Fix Newsletter Subscribers Security Issue
-- Remove existing policies that could allow public access
DROP POLICY IF EXISTS "admin_only_newsletter_access" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "admins_can_select_newsletter_subscribers" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "public_function_newsletter_insert" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "secure_newsletter_function_insert" ON public.newsletter_subscribers;

-- Create secure policies that only allow proper access
-- 1. Only service role can insert (for the newsletter subscription function)
CREATE POLICY "newsletter_service_role_insert" 
ON public.newsletter_subscribers 
FOR INSERT 
TO service_role
WITH CHECK (true);

-- 2. Only authenticated admin users can view newsletter subscribers
CREATE POLICY "newsletter_admin_select" 
ON public.newsletter_subscribers 
FOR SELECT 
TO authenticated
USING (is_admin_user());

-- 3. Only authenticated admin users can update subscriber status
CREATE POLICY "newsletter_admin_update" 
ON public.newsletter_subscribers 
FOR UPDATE 
TO authenticated
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- 4. Only authenticated admin users can delete subscribers
CREATE POLICY "newsletter_admin_delete" 
ON public.newsletter_subscribers 
FOR DELETE 
TO authenticated
USING (is_admin_user());

-- Log the security fix
INSERT INTO public.audit_logs (
  user_id, action, table_name, new_values
) VALUES (
  NULL, 
  'SECURITY_FIX_NEWSLETTER_POLICIES', 
  'newsletter_subscribers',
  jsonb_build_object(
    'fix_type', 'remove_public_access',
    'timestamp', NOW(),
    'description', 'Fixed email harvesting vulnerability by restricting access to admins only'
  )
);