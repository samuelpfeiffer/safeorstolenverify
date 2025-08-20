-- Fix remaining functions without search_path
-- These are the remaining functions that need search_path security fixes

-- 1. Fix cleanup functions
CREATE OR REPLACE FUNCTION public.clean_expired_pending_verifications()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  DELETE FROM public.pending_verifications 
  WHERE expires_at < now();
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

CREATE OR REPLACE FUNCTION public.clean_expired_checkmend_cache()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  DELETE FROM checkmend_verification_cache 
  WHERE expires_at < now();
END;
$$;

-- 2. Fix trigger functions
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

CREATE OR REPLACE FUNCTION public.update_checkmend_cache_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.check_rate_limit_security()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Prevent setting extremely high counts
  IF NEW.count > 1000 THEN
    RAISE EXCEPTION 'Rate limit count too high for security';
  END IF;
  
  -- Prevent setting action names that could be security risks
  IF NEW.action ~* '(admin|root|system|delete|drop)' THEN
    RAISE EXCEPTION 'Action name not allowed for security';
  END IF;
  
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- 3. Fix validation functions with overloaded signatures
CREATE OR REPLACE FUNCTION public.validate_api_key_access(requesting_user_id uuid, resource_user_id uuid, operation_type text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Basic validation: user can only access their own resources
  IF requesting_user_id != resource_user_id THEN
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
END;
$$;

CREATE OR REPLACE FUNCTION public.validate_oauth_token_access(requesting_user_id uuid, resource_user_id uuid, operation_type text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Basic validation: user can only access their own tokens
  IF requesting_user_id != resource_user_id THEN
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
END;
$$;

-- 4. Fix authentication helper function
CREATE OR REPLACE FUNCTION public.is_authenticated_user()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT auth.role() = 'authenticated' AND auth.uid() IS NOT NULL;
$$;

-- 5. Fix newsletter subscription function
CREATE OR REPLACE FUNCTION public.subscribe_to_newsletter(user_email text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
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
$$;