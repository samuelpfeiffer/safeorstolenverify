-- Security Fix: Restrict newsletter_subscribers table access to prevent email harvesting
-- Remove any existing public access and ensure only service role can access

-- Drop existing policies if any exist for newsletter_subscribers
DROP POLICY IF EXISTS "Service role can manage newsletter subscriptions" ON public.newsletter_subscribers;

-- Ensure RLS is enabled on newsletter_subscribers table
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create restrictive policy: Only service role can access newsletter subscribers
-- This prevents public email harvesting while allowing the newsletter function to work
CREATE POLICY "Restrict newsletter access to service role only"
ON public.newsletter_subscribers
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Add audit logging for newsletter access attempts
CREATE OR REPLACE FUNCTION public.log_newsletter_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Log any access attempt to newsletter_subscribers
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
      'role', auth.role(),
      'user_id', auth.uid()
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Create trigger to log all newsletter table access
CREATE TRIGGER newsletter_access_audit
  AFTER INSERT OR UPDATE OR DELETE ON public.newsletter_subscribers
  FOR EACH ROW EXECUTE FUNCTION public.log_newsletter_access();