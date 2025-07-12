
-- First, drop the triggers that depend on the function
DROP TRIGGER IF EXISTS handle_updated_at ON public.profiles;
DROP TRIGGER IF EXISTS handle_updated_at ON public.verification_results;
DROP TRIGGER IF EXISTS handle_updated_at ON public.subscribers;

-- Now we can safely drop and recreate the function
DROP FUNCTION IF EXISTS public.handle_updated_at();
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

-- Recreate the triggers
CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.verification_results
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.subscribers
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Fix the handle_new_user function to use proper security settings
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
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

-- Recreate the trigger to ensure it's properly configured
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Add additional security constraints to prevent password-related issues
ALTER TABLE public.profiles 
DROP CONSTRAINT IF EXISTS profiles_email_security_check;

ALTER TABLE public.profiles 
ADD CONSTRAINT profiles_email_security_check 
CHECK (email IS NULL OR (length(email) > 5 AND email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'));

-- Add constraint to prevent weak passwords in user metadata
ALTER TABLE public.profiles 
DROP CONSTRAINT IF EXISTS profiles_full_name_security_check;

ALTER TABLE public.profiles 
ADD CONSTRAINT profiles_full_name_security_check 
CHECK (full_name IS NULL OR (length(trim(full_name)) >= 2 AND full_name !~ '(password|123|admin)'));

-- Update audit logging to be more secure
ALTER TABLE public.audit_logs 
DROP CONSTRAINT IF EXISTS audit_logs_action_security_check;

ALTER TABLE public.audit_logs 
ADD CONSTRAINT audit_logs_action_security_check 
CHECK (action ~ '^[a-zA-Z_][a-zA-Z0-9_]*$' AND length(action) BETWEEN 2 AND 50);

-- Add security check for table names in audit logs
ALTER TABLE public.audit_logs 
DROP CONSTRAINT IF EXISTS audit_logs_table_security_check;

ALTER TABLE public.audit_logs 
ADD CONSTRAINT audit_logs_table_security_check 
CHECK (table_name ~ '^[a-zA-Z_][a-zA-Z0-9_]*$' AND length(table_name) BETWEEN 2 AND 63);

-- Improve rate limiting security
ALTER TABLE public.rate_limits 
DROP CONSTRAINT IF EXISTS rate_limits_window_security_check;

-- Ensure rate limit windows are reasonable (not more than 24 hours in the future)
ALTER TABLE public.rate_limits 
ADD CONSTRAINT rate_limits_window_security_check 
CHECK (window_start <= now() + interval '24 hours');

-- Add security policy to prevent excessive rate limit entries
CREATE OR REPLACE FUNCTION check_rate_limit_security()
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

-- Create trigger for rate limit security
DROP TRIGGER IF EXISTS rate_limit_security_check ON public.rate_limits;
CREATE TRIGGER rate_limit_security_check
  BEFORE INSERT OR UPDATE ON public.rate_limits
  FOR EACH ROW EXECUTE FUNCTION check_rate_limit_security();

-- Add security improvements to verification results
ALTER TABLE public.verification_results 
DROP CONSTRAINT IF EXISTS verification_results_security_check;

ALTER TABLE public.verification_results 
ADD CONSTRAINT verification_results_security_check 
CHECK (
  serial_number !~ '(script|javascript|<|>|&lt;|&gt;)' AND
  item_type !~ '(script|javascript|<|>|&lt;|&gt;)' AND
  length(serial_number) <= 100 AND
  length(item_type) <= 50
);

-- Improve subscribers table security
ALTER TABLE public.subscribers 
DROP CONSTRAINT IF EXISTS subscribers_security_check;

ALTER TABLE public.subscribers 
ADD CONSTRAINT subscribers_security_check 
CHECK (
  email !~ '(script|javascript|<|>|&lt;|&gt;)' AND
  (subscription_tier IS NULL OR subscription_tier IN ('basic', 'premium', 'enterprise', 'free'))
);

-- Update statistics for better query planning after changes
ANALYZE public.profiles;
ANALYZE public.audit_logs;
ANALYZE public.rate_limits;
ANALYZE public.verification_results;
ANALYZE public.subscribers;
