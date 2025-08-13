-- Fix function search path security warnings and remaining issues
-- This addresses the final security warnings

-- Fix function search path issues by setting explicit search path
CREATE OR REPLACE FUNCTION public.validate_api_key_access(
  requesting_user_id UUID,
  resource_user_id UUID,
  operation_type TEXT
) RETURNS BOOLEAN 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = 'public'
AS $$
BEGIN
  -- Basic validation: user can only access their own resources
  IF requesting_user_id != resource_user_id THEN
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
END;
$$;

CREATE OR REPLACE FUNCTION public.validate_oauth_token_access(
  requesting_user_id UUID,
  resource_user_id UUID,
  operation_type TEXT
) RETURNS BOOLEAN 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = 'public'
AS $$
BEGIN
  -- Basic validation: user can only access their own tokens
  IF requesting_user_id != resource_user_id THEN
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
END;
$$;

-- Update the log_sensitive_access function with proper search path
CREATE OR REPLACE FUNCTION public.log_sensitive_access()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = 'public'
AS $$
BEGIN
  -- Log access to sensitive tables
  INSERT INTO public.sensitive_data_access_log (
    user_id,
    table_name,
    action,
    record_id,
    ip_address
  ) VALUES (
    auth.uid(),
    TG_TABLE_NAME,
    TG_OP,
    COALESCE(NEW.id, OLD.id),
    NULL -- IP address would need to be passed from application layer
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Fix all existing functions to have proper search paths
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
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

CREATE OR REPLACE FUNCTION public.clean_expired_checkmend_cache()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  DELETE FROM checkmend_verification_cache 
  WHERE expires_at < now();
END;
$$;

CREATE OR REPLACE FUNCTION public.update_checkmend_cache_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
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
SET search_path = 'public'
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

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;