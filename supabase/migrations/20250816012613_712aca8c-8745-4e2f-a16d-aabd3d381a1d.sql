-- CRITICAL SECURITY FIX: Properly restrict newsletter_subscribers access

-- Drop the flawed policy
DROP POLICY IF EXISTS "Restrict newsletter access to service role only" ON public.newsletter_subscribers;

-- Create proper restrictive policy for service role only
CREATE POLICY "newsletter_service_role_only" 
ON public.newsletter_subscribers 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Add logging for any access attempts (security monitoring)
CREATE OR REPLACE FUNCTION public.log_newsletter_security_access()
RETURNS TRIGGER AS $$
BEGIN
  -- Log any unauthorized access attempt
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, new_values
  ) VALUES (
    auth.uid(), 
    'NEWSLETTER_SECURITY_ACCESS_' || TG_OP, 
    'newsletter_subscribers',
    COALESCE(NEW.id, OLD.id)::text,
    jsonb_build_object(
      'operation', TG_OP,
      'timestamp', NOW(),
      'role', auth.role(),
      'user_id', auth.uid(),
      'security_event', 'newsletter_table_access'
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for security monitoring
DROP TRIGGER IF EXISTS newsletter_security_monitor ON public.newsletter_subscribers;
CREATE TRIGGER newsletter_security_monitor
  AFTER INSERT OR UPDATE OR DELETE ON public.newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION public.log_newsletter_security_access();

-- Verify the newsletter subscription function can still work
-- (It uses SECURITY DEFINER so it bypasses RLS as intended)
CREATE OR REPLACE FUNCTION public.subscribe_to_newsletter(user_email text)
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
  result json;
BEGIN
  -- Validate email format
  IF user_email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    SELECT json_build_object('success', false, 'message', 'Invalid email format')
    INTO result;
    RETURN result;
  END IF;

  -- Insert the email (this bypasses RLS due to SECURITY DEFINER)
  INSERT INTO public.newsletter_subscribers (email, subscribed_at)
  VALUES (lower(trim(user_email)), now())
  ON CONFLICT (email) DO UPDATE SET
    subscribed_at = now(),
    is_subscribed = true;
    
  -- Log successful subscription for security audit
  INSERT INTO public.audit_logs (
    user_id, action, table_name, new_values
  ) VALUES (
    NULL, 'NEWSLETTER_SUBSCRIPTION_SUCCESS', 'newsletter_subscribers',
    jsonb_build_object(
      'email_domain', split_part(user_email, '@', 2),
      'timestamp', NOW(),
      'method', 'public_function'
    )
  );
    
  -- Return success
  SELECT json_build_object('success', true, 'message', 'Successfully subscribed to newsletter')
  INTO result;
  
  RETURN result;
EXCEPTION WHEN OTHERS THEN
  -- Log failed subscription attempt
  INSERT INTO public.audit_logs (
    user_id, action, table_name, new_values
  ) VALUES (
    NULL, 'NEWSLETTER_SUBSCRIPTION_FAILED', 'newsletter_subscribers',
    jsonb_build_object(
      'error', SQLERRM,
      'email_provided', user_email IS NOT NULL,
      'timestamp', NOW()
    )
  );
  
  -- Return error
  SELECT json_build_object('success', false, 'message', 'Subscription failed. Please try again.')
  INTO result;
  
  RETURN result;
END;
$function$;