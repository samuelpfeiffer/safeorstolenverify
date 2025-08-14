-- Fix RLS policies for newsletter subscribers table
-- Remove overly permissive anonymous access and properly restrict to authenticated users

-- Update newsletter subscribers policy to only allow service role for inserts
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscribers;

-- Create more secure policy for newsletter subscriptions  
CREATE POLICY "Service role can manage newsletter subscriptions" 
ON public.newsletter_subscribers 
FOR ALL 
USING (auth.role() = 'service_role');

-- Allow public read access only for counting purposes (if needed)
CREATE POLICY "Public can count newsletter subscribers" 
ON public.newsletter_subscribers 
FOR SELECT 
USING (false); -- Completely restrict public access

-- Create secure function for newsletter subscription that bypasses RLS
CREATE OR REPLACE FUNCTION public.subscribe_to_newsletter(user_email text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result json;
BEGIN
  -- Insert the email (this will bypass RLS due to SECURITY DEFINER)
  INSERT INTO public.newsletter_subscribers (email, subscribed_at)
  VALUES (user_email, now())
  ON CONFLICT (email) DO UPDATE SET
    subscribed_at = now(),
    is_subscribed = true;
    
  -- Return success
  SELECT json_build_object('success', true, 'message', 'Successfully subscribed to newsletter')
  INTO result;
  
  RETURN result;
EXCEPTION WHEN OTHERS THEN
  -- Return error
  SELECT json_build_object('success', false, 'message', SQLERRM)
  INTO result;
  
  RETURN result;
END;
$$;