
-- Critical Security Fixes - Phase 1: Fix Profile Privacy Breach and Clean Up Policies

-- Step 1: Fix the critical profile privacy breach
-- Drop the overly permissive profile policies that allow users to see all profiles
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "System can insert profiles" ON public.profiles;

-- Create secure profile policies that only allow users to see their own data
CREATE POLICY "Users can view only their own profile" ON public.profiles
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update only their own profile" ON public.profiles
  FOR UPDATE 
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "System can insert profiles for authenticated users" ON public.profiles
  FOR INSERT 
  WITH CHECK (auth.uid() = id OR auth.role() = 'service_role');

-- Step 2: Clean up verification_results policies
DROP POLICY IF EXISTS "Users can view their own verification results" ON public.verification_results;
DROP POLICY IF EXISTS "Users can create their own verification results" ON public.verification_results;

CREATE POLICY "Users can view only their own verification results" ON public.verification_results
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own verification results" ON public.verification_results
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Step 3: Clean up subscribers policies
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

CREATE POLICY "Service role can manage all subscriptions" ON public.subscribers
  FOR ALL 
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Step 4: Add missing RLS policies for tables that need them
-- Enable RLS on all user-related tables
ALTER TABLE public.api_usage_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.receipts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.terms_acceptance ENABLE ROW LEVEL SECURITY;

-- Add secure policies for api_usage_logs
DROP POLICY IF EXISTS "Users can view their own API usage" ON public.api_usage_logs;
DROP POLICY IF EXISTS "System can manage API usage logs" ON public.api_usage_logs;

CREATE POLICY "Users can view their own API usage" ON public.api_usage_logs
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "System can manage API usage logs" ON public.api_usage_logs
  FOR ALL USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Add secure policies for verification_searches
DROP POLICY IF EXISTS "Users can view their own verification searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Users can insert their own verification searches" ON public.verification_searches;

CREATE POLICY "Users can view their own verification searches" ON public.verification_searches
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own verification searches" ON public.verification_searches
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Add secure policies for receipts
DROP POLICY IF EXISTS "Users can view their own receipts" ON public.receipts;
DROP POLICY IF EXISTS "Users can insert their own receipts" ON public.receipts;

CREATE POLICY "Users can view their own receipts" ON public.receipts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own receipts" ON public.receipts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Add secure policies for terms_acceptance
DROP POLICY IF EXISTS "Users can view their own terms acceptance" ON public.terms_acceptance;
DROP POLICY IF EXISTS "Users can insert their own terms acceptance" ON public.terms_acceptance;

CREATE POLICY "Users can view their own terms acceptance" ON public.terms_acceptance
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own terms acceptance" ON public.terms_acceptance
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Step 5: Add security constraints to prevent malicious input
-- Add input validation constraints
ALTER TABLE public.verification_results 
DROP CONSTRAINT IF EXISTS verification_results_security_check;

ALTER TABLE public.verification_results 
ADD CONSTRAINT verification_results_security_check 
CHECK (
  serial_number !~ '(script|javascript|<|>|&lt;|&gt;|drop|delete|insert|update|select)' AND
  item_type !~ '(script|javascript|<|>|&lt;|&gt;|drop|delete|insert|update|select)' AND
  length(serial_number) BETWEEN 1 AND 100 AND
  length(item_type) BETWEEN 1 AND 50
);

-- Add email security constraints
ALTER TABLE public.profiles 
DROP CONSTRAINT IF EXISTS profiles_email_security_check;

ALTER TABLE public.profiles 
ADD CONSTRAINT profiles_email_security_check 
CHECK (email IS NULL OR (
  length(email) BETWEEN 5 AND 254 AND 
  email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' AND
  email !~ '(script|javascript|<|>|&lt;|&gt;)'
));

-- Add name security constraints
ALTER TABLE public.profiles 
DROP CONSTRAINT IF EXISTS profiles_name_security_check;

ALTER TABLE public.profiles 
ADD CONSTRAINT profiles_name_security_check 
CHECK (full_name IS NULL OR (
  length(trim(full_name)) BETWEEN 1 AND 200 AND
  full_name !~ '(script|javascript|<|>|&lt;|&gt;|drop|delete|insert|update|select)'
));

-- Step 6: Add performance indexes for security queries
CREATE INDEX IF NOT EXISTS idx_profiles_secure_lookup 
ON public.profiles(id, email) WHERE email IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_verification_results_user_secure 
ON public.verification_results(user_id, created_at DESC, verification_status);

CREATE INDEX IF NOT EXISTS idx_subscribers_user_secure 
ON public.subscribers(user_id, subscribed, subscription_end) WHERE subscribed = true;

-- Step 7: Update table statistics for better query planning
ANALYZE public.profiles;
ANALYZE public.verification_results;
ANALYZE public.subscribers;
ANALYZE public.api_usage_logs;
ANALYZE public.verification_searches;
ANALYZE public.receipts;
ANALYZE public.terms_acceptance;
