-- Fix RLS policies to restrict anonymous access where appropriate

-- Update profiles policies to require authentication for all operations
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;
CREATE POLICY "Authenticated users can view all profiles" 
ON public.profiles 
FOR SELECT 
TO authenticated 
USING (true);

-- Update system tables to require authentication
DROP POLICY IF EXISTS "System can manage audit logs" ON public.audit_logs;
CREATE POLICY "System can manage audit logs" 
ON public.audit_logs 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "System can manage rate limits" ON public.rate_limits;
CREATE POLICY "System can manage rate limits" 
ON public.rate_limits 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "System can manage API usage logs" ON public.api_usage_logs;
CREATE POLICY "System can manage API usage logs" 
ON public.api_usage_logs 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "System can manage CheckMEND API usage" ON public.checkmend_api_usage;
CREATE POLICY "System can manage CheckMEND API usage" 
ON public.checkmend_api_usage 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "System can manage API usage" ON public.recipero_api_usage;
CREATE POLICY "System can manage API usage" 
ON public.recipero_api_usage 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "System can manage verification cache" ON public.checkmend_verification_cache;
CREATE POLICY "System can manage verification cache" 
ON public.checkmend_verification_cache 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "Service role can manage all subscriptions" ON public.subscribers;
CREATE POLICY "Service role can manage all subscriptions" 
ON public.subscribers 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "Service role can manage configuration" ON public.system_configuration;
CREATE POLICY "Service role can manage configuration" 
ON public.system_configuration 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- User-specific data should require authentication
DROP POLICY IF EXISTS "Users can view their own API usage" ON public.api_usage_logs;
CREATE POLICY "Users can view their own API usage" 
ON public.api_usage_logs 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own CheckMEND API usage" ON public.checkmend_api_usage;
CREATE POLICY "Users can view their own CheckMEND API usage" 
ON public.checkmend_api_usage 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own API usage" ON public.recipero_api_usage;
CREATE POLICY "Users can view their own API usage" 
ON public.recipero_api_usage 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own property verifications" ON public.property_verifications;
CREATE POLICY "Users can view their own property verifications" 
ON public.property_verifications 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own purchases" ON public.purchases;
CREATE POLICY "Users can view their own purchases" 
ON public.purchases 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own rate limits" ON public.rate_limits;
CREATE POLICY "Users can view their own rate limits" 
ON public.rate_limits 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own receipts" ON public.receipts;
CREATE POLICY "Users can view their own receipts" 
ON public.receipts 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own receipts" ON public.receipts;
CREATE POLICY "Users can update their own receipts" 
ON public.receipts 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own subscription" ON public.subscribers;
CREATE POLICY "Users can view their own subscription" 
ON public.subscribers 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own subscription" ON public.subscribers;
CREATE POLICY "Users can update their own subscription" 
ON public.subscribers 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own terms acceptance" ON public.terms_acceptance;
CREATE POLICY "Users can view their own terms acceptance" 
ON public.terms_acceptance 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view only their own verification results" ON public.verification_results;
CREATE POLICY "Users can view only their own verification results" 
ON public.verification_results 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Users can view their own verification searches" ON public.verification_searches;
CREATE POLICY "Users can view their own verification searches" 
ON public.verification_searches 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id OR user_id IS NULL);

DROP POLICY IF EXISTS "Users can update their own verification searches" ON public.verification_searches;
CREATE POLICY "Users can update their own verification searches" 
ON public.verification_searches 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

-- Update profile policies to require proper authentication
DROP POLICY IF EXISTS "Users can view only their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update only their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

CREATE POLICY "Users can view only their own profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);