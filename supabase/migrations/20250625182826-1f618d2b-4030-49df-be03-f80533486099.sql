
-- Phase 1: Clean up duplicate and conflicting RLS policies
-- Drop existing problematic policies and recreate them properly

-- Clean up profiles table policies
DROP POLICY IF EXISTS "Service role can insert profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "System can insert profiles" ON public.profiles;

-- Create proper profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE 
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "System can insert profiles" ON public.profiles
  FOR INSERT 
  WITH CHECK (auth.uid() = id OR auth.role() = 'service_role');

-- Clean up verification_results policies
DROP POLICY IF EXISTS "Users can view their own verification results" ON public.verification_results;
DROP POLICY IF EXISTS "Users can create their own verification results" ON public.verification_results;

CREATE POLICY "Users can view their own verification results" ON public.verification_results
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own verification results" ON public.verification_results
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Clean up subscribers policies
DROP POLICY IF EXISTS "select_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "update_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "insert_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "Users can view their own subscription" ON public.subscribers;
DROP POLICY IF EXISTS "Users can update their own subscription" ON public.subscribers;
DROP POLICY IF EXISTS "Service role can manage subscriptions" ON public.subscribers;

CREATE POLICY "Users can view their own subscription" ON public.subscribers
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own subscription" ON public.subscribers
  FOR UPDATE 
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role can manage subscriptions" ON public.subscribers
  FOR ALL 
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Clean up rate_limits policies
DROP POLICY IF EXISTS "Users can view their own rate limits" ON public.rate_limits;
DROP POLICY IF EXISTS "System can manage rate limits" ON public.rate_limits;

CREATE POLICY "Users can view their own rate limits" ON public.rate_limits
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "System can manage rate limits" ON public.rate_limits
  FOR ALL 
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Clean up audit_logs policies
DROP POLICY IF EXISTS "Audit logs are restricted" ON public.audit_logs;

CREATE POLICY "System can manage audit logs" ON public.audit_logs
  FOR ALL 
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Phase 2: Add missing foreign key constraints and fix existing ones
-- Fix verification_results foreign key
ALTER TABLE public.verification_results 
DROP CONSTRAINT IF EXISTS verification_results_user_id_fkey;

ALTER TABLE public.verification_results 
ADD CONSTRAINT verification_results_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Fix subscribers foreign key
ALTER TABLE public.subscribers 
DROP CONSTRAINT IF EXISTS subscribers_user_id_fkey;

ALTER TABLE public.subscribers 
ADD CONSTRAINT subscribers_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Fix verification_searches foreign key
ALTER TABLE public.verification_searches 
DROP CONSTRAINT IF EXISTS verification_searches_user_id_fkey;

ALTER TABLE public.verification_searches 
ADD CONSTRAINT verification_searches_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Fix rate_limits foreign key
ALTER TABLE public.rate_limits 
DROP CONSTRAINT IF EXISTS rate_limits_user_id_fkey;

ALTER TABLE public.rate_limits 
ADD CONSTRAINT rate_limits_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Fix api_usage_logs foreign key
ALTER TABLE public.api_usage_logs 
DROP CONSTRAINT IF EXISTS api_usage_logs_user_id_fkey;

ALTER TABLE public.api_usage_logs 
ADD CONSTRAINT api_usage_logs_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Fix audit_logs foreign key (allow NULL for system operations)
ALTER TABLE public.audit_logs 
DROP CONSTRAINT IF EXISTS audit_logs_user_id_fkey;

ALTER TABLE public.audit_logs 
ADD CONSTRAINT audit_logs_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;

-- Fix receipts foreign key
ALTER TABLE public.receipts 
DROP CONSTRAINT IF EXISTS receipts_user_id_fkey;

ALTER TABLE public.receipts 
ADD CONSTRAINT receipts_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Fix terms_acceptance foreign key
ALTER TABLE public.terms_acceptance 
DROP CONSTRAINT IF EXISTS terms_acceptance_user_id_fkey;

ALTER TABLE public.terms_acceptance 
ADD CONSTRAINT terms_acceptance_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Phase 3: Enhance data validation constraints
-- Remove old constraints that might conflict
ALTER TABLE public.verification_results 
DROP CONSTRAINT IF EXISTS serial_number_length_check;

ALTER TABLE public.verification_results 
DROP CONSTRAINT IF EXISTS item_type_valid_check;

ALTER TABLE public.verification_results 
DROP CONSTRAINT IF EXISTS confidence_score_range_check;

ALTER TABLE public.profiles 
DROP CONSTRAINT IF EXISTS full_name_length_check;

ALTER TABLE public.profiles 
DROP CONSTRAINT IF EXISTS email_format_check;

ALTER TABLE public.subscribers
DROP CONSTRAINT IF EXISTS email_format_check;

ALTER TABLE public.subscribers
DROP CONSTRAINT IF EXISTS subscription_tier_check;

ALTER TABLE public.rate_limits 
DROP CONSTRAINT IF EXISTS rate_limit_positive_count;

ALTER TABLE public.rate_limits 
DROP CONSTRAINT IF EXISTS rate_limit_valid_action;

-- Add enhanced validation constraints
ALTER TABLE public.verification_results 
ADD CONSTRAINT serial_number_length_check 
CHECK (length(serial_number) BETWEEN 1 AND 100);

ALTER TABLE public.verification_results 
ADD CONSTRAINT item_type_valid_check 
CHECK (item_type ~ '^[a-zA-Z0-9\s\-_\.]{1,50}$');

ALTER TABLE public.verification_results 
ADD CONSTRAINT confidence_score_range_check 
CHECK (confidence_score >= 0 AND confidence_score <= 100);

ALTER TABLE public.profiles 
ADD CONSTRAINT full_name_length_check 
CHECK (full_name IS NULL OR (length(trim(full_name)) BETWEEN 1 AND 200));

ALTER TABLE public.profiles 
ADD CONSTRAINT email_format_check 
CHECK (email IS NULL OR email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');

ALTER TABLE public.subscribers
ADD CONSTRAINT email_format_check 
CHECK (email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');

ALTER TABLE public.subscribers
ADD CONSTRAINT subscription_tier_check 
CHECK (subscription_tier IS NULL OR subscription_tier IN ('basic', 'premium', 'enterprise'));

ALTER TABLE public.rate_limits 
ADD CONSTRAINT rate_limit_positive_count CHECK (count > 0);

ALTER TABLE public.rate_limits 
ADD CONSTRAINT rate_limit_valid_action CHECK (action ~ '^[a-zA-Z_]{1,50}$');

-- Phase 4: Performance optimization indexes
-- Create composite indexes for common query patterns
CREATE INDEX IF NOT EXISTS idx_verification_results_user_created 
ON public.verification_results(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_verification_results_status_type 
ON public.verification_results(verification_status, item_type);

CREATE INDEX IF NOT EXISTS idx_verification_searches_user_created 
ON public.verification_searches(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_rate_limits_user_action_window 
ON public.rate_limits(user_id, action, window_start);

CREATE INDEX IF NOT EXISTS idx_audit_logs_user_created 
ON public.audit_logs(user_id, created_at DESC) WHERE user_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_profiles_email 
ON public.profiles(email) WHERE email IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_subscribers_email 
ON public.subscribers(email);

CREATE INDEX IF NOT EXISTS idx_api_usage_logs_user_endpoint 
ON public.api_usage_logs(user_id, api_endpoint, created_at DESC);

-- Partial indexes for specific use cases
CREATE INDEX IF NOT EXISTS idx_verification_results_stolen 
ON public.verification_results(user_id, created_at DESC) 
WHERE verification_status = 'stolen';

CREATE INDEX IF NOT EXISTS idx_subscribers_active 
ON public.subscribers(user_id, subscription_end) 
WHERE subscribed = true;

-- Phase 5: Data cleanup and integrity fixes
-- Clean up orphaned records (be careful with this in production)
DELETE FROM public.verification_results 
WHERE user_id NOT IN (SELECT id FROM auth.users);

DELETE FROM public.verification_searches 
WHERE user_id NOT IN (SELECT id FROM auth.users);

DELETE FROM public.rate_limits 
WHERE user_id NOT IN (SELECT id FROM auth.users);

DELETE FROM public.api_usage_logs 
WHERE user_id NOT IN (SELECT id FROM auth.users);

DELETE FROM public.receipts 
WHERE user_id NOT IN (SELECT id FROM auth.users);

DELETE FROM public.terms_acceptance 
WHERE user_id NOT IN (SELECT id FROM auth.users);

-- Clean up subscribers with invalid user_id (but keep those with NULL user_id)
DELETE FROM public.subscribers 
WHERE user_id IS NOT NULL AND user_id NOT IN (SELECT id FROM auth.users);

-- Phase 6: Add missing triggers and functions
-- Ensure the profile creation trigger exists and is correct
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
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
$function$;

-- Ensure the trigger exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Add updated_at trigger function for automatic timestamp updates
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Add updated_at triggers to relevant tables (drop first to avoid conflicts)
DROP TRIGGER IF EXISTS handle_updated_at ON public.profiles;
CREATE TRIGGER handle_updated_at 
  BEFORE UPDATE ON public.profiles 
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_updated_at ON public.verification_results;
CREATE TRIGGER handle_updated_at 
  BEFORE UPDATE ON public.verification_results 
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_updated_at ON public.subscribers;
CREATE TRIGGER handle_updated_at 
  BEFORE UPDATE ON public.subscribers 
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Phase 7: Final security enhancements
-- Ensure all tables have proper RLS enabled
ALTER TABLE public.api_usage_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.receipts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.terms_acceptance ENABLE ROW LEVEL SECURITY;

-- Add missing RLS policies for api_usage_logs
DROP POLICY IF EXISTS "Users can view their own API usage" ON public.api_usage_logs;
CREATE POLICY "Users can view their own API usage" ON public.api_usage_logs
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "System can manage API usage logs" ON public.api_usage_logs;
CREATE POLICY "System can manage API usage logs" ON public.api_usage_logs
  FOR ALL USING (auth.role() = 'service_role');

-- Add missing RLS policies for verification_searches
DROP POLICY IF EXISTS "Users can view their own verification searches" ON public.verification_searches;
CREATE POLICY "Users can view their own verification searches" ON public.verification_searches
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own verification searches" ON public.verification_searches;
CREATE POLICY "Users can insert their own verification searches" ON public.verification_searches
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own verification searches" ON public.verification_searches;
CREATE POLICY "Users can update their own verification searches" ON public.verification_searches
  FOR UPDATE USING (auth.uid() = user_id);

-- Add missing RLS policies for receipts
DROP POLICY IF EXISTS "Users can view their own receipts" ON public.receipts;
CREATE POLICY "Users can view their own receipts" ON public.receipts
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own receipts" ON public.receipts;
CREATE POLICY "Users can insert their own receipts" ON public.receipts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Add missing RLS policies for terms_acceptance
DROP POLICY IF EXISTS "Users can view their own terms acceptance" ON public.terms_acceptance;
CREATE POLICY "Users can view their own terms acceptance" ON public.terms_acceptance
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own terms acceptance" ON public.terms_acceptance;
CREATE POLICY "Users can insert their own terms acceptance" ON public.terms_acceptance
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Update table statistics for better query planning
ANALYZE public.profiles;
ANALYZE public.verification_results;
ANALYZE public.verification_searches;
ANALYZE public.subscribers;
ANALYZE public.rate_limits;
ANALYZE public.audit_logs;
ANALYZE public.api_usage_logs;
ANALYZE public.receipts;
ANALYZE public.terms_acceptance;
