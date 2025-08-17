-- Security fixes and user terms acceptance table
-- Fix security issue by properly setting search_path in functions

-- 1. Create user_terms_acceptance table
CREATE TABLE IF NOT EXISTS public.user_terms_acceptance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  terms_version TEXT NOT NULL DEFAULT '1.0',
  accepted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on user_terms_acceptance
ALTER TABLE public.user_terms_acceptance ENABLE ROW LEVEL SECURITY;

-- RLS policy for user_terms_acceptance
CREATE POLICY "Users can manage their own terms acceptance"
ON public.user_terms_acceptance
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 2. Fix all SECURITY DEFINER functions with proper search_path
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  current_winners INTEGER;
  is_winner BOOLEAN := FALSE;
BEGIN
  -- Check current promotion winners count
  SELECT total_winners INTO current_winners FROM public.promotion_stats LIMIT 1;
  
  -- If less than 10 winners, make this user a winner
  IF current_winners < 10 THEN
    is_winner := TRUE;
    -- Update the promotion stats
    UPDATE public.promotion_stats 
    SET total_winners = total_winners + 1, 
        updated_at = now();
  END IF;

  -- Insert profile
  INSERT INTO public.profiles (
    id, 
    full_name, 
    email, 
    avatar_url,
    is_promotion_winner,
    promotion_searches_remaining,
    promotion_expires_at
  )
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email,
    NEW.raw_user_meta_data->>'avatar_url',
    is_winner,
    CASE WHEN is_winner THEN 50 ELSE 0 END,
    CASE WHEN is_winner THEN now() + interval '7 days' ELSE NULL END
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    email = EXCLUDED.email,
    avatar_url = EXCLUDED.avatar_url,
    updated_at = now();
    
  RETURN NEW;
END;
$$;

-- 3. Fix other SECURITY DEFINER functions
CREATE OR REPLACE FUNCTION public.log_newsletter_security_access()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
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
$$;

CREATE OR REPLACE FUNCTION public.subscribe_to_newsletter(user_email text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
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

-- 4. Fix other functions with search_path
CREATE OR REPLACE FUNCTION public.log_sensitive_data_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log all modifications to sensitive tables
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, 
    new_values, old_values
  ) VALUES (
    auth.uid(), 
    TG_OP || '_' || TG_TABLE_NAME,
    TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id)::text,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN 
      jsonb_build_object(
        'masked_data', 'SENSITIVE_DATA_ACCESSED',
        'timestamp', NOW(),
        'user_session', auth.uid(),
        'operation', TG_OP
      )
    ELSE NULL END,
    CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN 
      jsonb_build_object('action', 'SENSITIVE_DATA_MODIFIED', 'operation', TG_OP)
    ELSE NULL END
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE OR REPLACE FUNCTION public.cleanup_expired_tokens()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Mark expired API keys as inactive
  UPDATE public.api_keys 
  SET is_active = false, updated_at = NOW()
  WHERE expires_at < NOW() AND is_active = true;
  
  -- Mark expired OAuth tokens as revoked
  UPDATE public.oauth_tokens 
  SET revoked = true, updated_at = NOW()
  WHERE expires_at < NOW() AND revoked = false;
  
  -- Log cleanup activity
  INSERT INTO public.audit_logs (
    user_id, action, table_name, new_values
  ) VALUES (
    NULL, 'AUTOMATED_TOKEN_CLEANUP', 'system',
    jsonb_build_object(
      'cleanup_time', NOW(),
      'action', 'expired_tokens_revoked'
    )
  );
END;
$$;