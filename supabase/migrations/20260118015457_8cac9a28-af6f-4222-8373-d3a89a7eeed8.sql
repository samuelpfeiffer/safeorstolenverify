-- Fix newsletter_subscribers security: Remove public INSERT policy and restrict to service_role only
-- This ensures all inserts must go through the subscribe_to_newsletter RPC function

-- Drop the overly permissive public INSERT policy
DROP POLICY IF EXISTS "public_subscribe_newsletter" ON public.newsletter_subscribers;

-- Create a service-role-only INSERT policy (the RPC function uses SECURITY DEFINER so it can still insert)
-- The SECURITY DEFINER function bypasses RLS, so we don't need a separate policy for it
-- This policy allows service_role for admin operations
CREATE POLICY "service_role_newsletter_insert" 
ON public.newsletter_subscribers 
FOR INSERT 
TO service_role 
WITH CHECK (true);

-- Enhance the subscribe_to_newsletter function with rate limiting
CREATE OR REPLACE FUNCTION public.subscribe_to_newsletter(user_email text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  result json;
  attempt_count integer;
  email_domain text;
BEGIN
  -- Extract email domain for logging (without storing full email in audit logs)
  email_domain := split_part(lower(trim(user_email)), '@', 2);
  
  -- Rate limit: max 5 subscription attempts per hour (tracked by email domain to prevent spam)
  SELECT COUNT(*) INTO attempt_count
  FROM public.audit_logs
  WHERE action = 'NEWSLETTER_SUBSCRIPTION_ATTEMPT'
    AND created_at > NOW() - INTERVAL '1 hour'
    AND new_values->>'email_domain' = email_domain;
  
  -- Log this attempt
  INSERT INTO public.audit_logs (
    user_id, action, table_name, new_values
  ) VALUES (
    NULL, 'NEWSLETTER_SUBSCRIPTION_ATTEMPT', 'newsletter_subscribers',
    jsonb_build_object(
      'email_domain', email_domain,
      'timestamp', NOW(),
      'method', 'rpc_function'
    )
  );
  
  IF attempt_count >= 5 THEN
    RETURN json_build_object('success', false, 'message', 'Too many subscription attempts. Please try again later.');
  END IF;

  -- Validate email format (strict validation)
  IF user_email IS NULL OR trim(user_email) = '' THEN
    RETURN json_build_object('success', false, 'message', 'Email address is required');
  END IF;
  
  IF user_email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RETURN json_build_object('success', false, 'message', 'Invalid email format');
  END IF;
  
  -- Check email length
  IF length(user_email) > 255 THEN
    RETURN json_build_object('success', false, 'message', 'Email address is too long');
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
      'email_domain', email_domain,
      'timestamp', NOW(),
      'method', 'rpc_function'
    )
  );
    
  -- Return success
  RETURN json_build_object('success', true, 'message', 'Successfully subscribed to newsletter');
  
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
  RETURN json_build_object('success', false, 'message', 'Subscription failed. Please try again.');
END;
$$;