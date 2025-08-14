-- Create newsletter subscribers table with proper security
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_subscribed BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create secure policy for newsletter subscriptions  
CREATE POLICY "Service role can manage newsletter subscriptions" 
ON public.newsletter_subscribers 
FOR ALL 
USING (auth.role() = 'service_role');

-- Create secure function for newsletter subscription that bypasses RLS
CREATE OR REPLACE FUNCTION public.subscribe_to_newsletter(user_email text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result json;
BEGIN
  -- Validate email format
  IF user_email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    SELECT json_build_object('success', false, 'message', 'Invalid email format')
    INTO result;
    RETURN result;
  END IF;

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