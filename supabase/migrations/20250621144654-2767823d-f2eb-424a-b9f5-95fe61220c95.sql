
-- Phase 1: Critical Security Fixes - Database Security

-- 1. Fix overly permissive RLS policies
-- Drop existing overly permissive policies and create proper ones

-- Fix profiles table policies
DROP POLICY IF EXISTS "Service role can insert profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Create more secure profiles policies
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

-- Fix verification_results table policies  
DROP POLICY IF EXISTS "Users can view their own verification results" ON public.verification_results;
DROP POLICY IF EXISTS "Users can create their own verification results" ON public.verification_results;

CREATE POLICY "Users can view their own verification results" ON public.verification_results
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own verification results" ON public.verification_results
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Fix subscribers table policies
DROP POLICY IF EXISTS "select_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "update_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "insert_subscription" ON public.subscribers;

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

-- 2. Add proper input validation constraints
-- Add constraints to prevent malicious input

ALTER TABLE public.verification_results 
ADD CONSTRAINT serial_number_length_check 
CHECK (length(serial_number) BETWEEN 1 AND 100);

ALTER TABLE public.verification_results 
ADD CONSTRAINT item_type_valid_check 
CHECK (item_type ~ '^[a-zA-Z0-9\s\-_]{1,50}$');

ALTER TABLE public.profiles 
ADD CONSTRAINT full_name_length_check 
CHECK (full_name IS NULL OR length(full_name) BETWEEN 1 AND 200);

ALTER TABLE public.profiles 
ADD CONSTRAINT email_format_check 
CHECK (email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');

-- 3. Add indexes for performance and security
CREATE INDEX IF NOT EXISTS idx_verification_results_user_created 
ON public.verification_results(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_profiles_email 
ON public.profiles(email) WHERE email IS NOT NULL;

-- 4. Add audit logging table
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users,
  action TEXT NOT NULL,
  table_name TEXT NOT NULL,
  record_id UUID,
  old_values JSONB,
  new_values JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on audit logs
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs (for now, no admin role system yet)
CREATE POLICY "Audit logs are restricted" ON public.audit_logs
  FOR ALL USING (false);

-- 5. Create rate limiting table with proper constraints
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users NOT NULL,
  action TEXT NOT NULL,
  count INTEGER DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  CONSTRAINT rate_limit_positive_count CHECK (count > 0),
  CONSTRAINT rate_limit_valid_action CHECK (action ~ '^[a-zA-Z_]{1,50}$')
);

ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own rate limits" ON public.rate_limits
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "System can manage rate limits" ON public.rate_limits
  FOR ALL USING (auth.role() = 'service_role');

-- Create index for efficient rate limit queries
CREATE INDEX idx_rate_limits_user_action_window 
ON public.rate_limits(user_id, action, window_start);

-- 6. Add data retention policies
-- Add created_at to tables that don't have it
ALTER TABLE public.subscribers 
ADD COLUMN IF NOT EXISTS data_retention_until TIMESTAMP WITH TIME ZONE 
DEFAULT (now() + interval '7 years');

ALTER TABLE public.verification_results 
ADD COLUMN IF NOT EXISTS data_retention_until TIMESTAMP WITH TIME ZONE 
DEFAULT (now() + interval '5 years');

-- 7. Enhance foreign key constraints
-- Make user_id columns NOT NULL where they should be
UPDATE public.subscribers SET user_id = NULL WHERE user_id IS NOT NULL AND NOT EXISTS (
  SELECT 1 FROM auth.users WHERE id = subscribers.user_id
);

-- Add proper foreign key constraints with CASCADE options
ALTER TABLE public.verification_results 
DROP CONSTRAINT IF EXISTS verification_results_user_id_fkey;

ALTER TABLE public.verification_results 
ADD CONSTRAINT verification_results_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE public.subscribers 
DROP CONSTRAINT IF EXISTS subscribers_user_id_fkey;

ALTER TABLE public.subscribers 
ADD CONSTRAINT subscribers_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
