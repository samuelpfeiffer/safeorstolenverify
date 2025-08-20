-- Fix Critical Security Vulnerability: Newsletter Subscribers Email Exposure
-- Remove the overly permissive policy that allows public access to email addresses

-- Drop the dangerous policy that allows everyone to access newsletter data
DROP POLICY IF EXISTS "newsletter_service_role_only" ON public.newsletter_subscribers;

-- Create secure policies that protect customer email addresses
-- Only service role and system functions can access newsletter data
CREATE POLICY "secure_newsletter_service_only" 
ON public.newsletter_subscribers 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Allow the public subscribe function to work (it uses SECURITY DEFINER)
-- This policy allows the newsletter subscription function to insert new subscriptions
CREATE POLICY "secure_newsletter_function_insert" 
ON public.newsletter_subscribers 
FOR INSERT 
TO public
WITH CHECK (false); -- This will be bypassed by SECURITY DEFINER functions

-- Completely block public SELECT access to protect email addresses
-- No policy = no public access to email data
-- The existing subscribe_to_newsletter() function will still work via SECURITY DEFINER

-- Add audit logging for any newsletter table access attempts
CREATE OR REPLACE FUNCTION public.log_newsletter_access_attempt()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log any access attempt (should only be from secure functions now)
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, new_values
  ) VALUES (
    auth.uid(), 
    'NEWSLETTER_ACCESS_' || TG_OP, 
    'newsletter_subscribers',
    COALESCE(NEW.id, OLD.id)::text,
    jsonb_build_object(
      'operation', TG_OP,
      'timestamp', NOW(),
      'auth_role', auth.role(),
      'user_id', auth.uid(),
      'access_method', 'direct_table_access'
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Create trigger to log all newsletter table access
DROP TRIGGER IF EXISTS newsletter_access_audit_trigger ON public.newsletter_subscribers;
CREATE TRIGGER newsletter_access_audit_trigger
  BEFORE INSERT OR UPDATE OR DELETE ON public.newsletter_subscribers
  FOR EACH ROW EXECUTE FUNCTION public.log_newsletter_access_attempt();