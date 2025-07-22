
-- Phase 1: Fix Anonymous Access Policies (Warnings 1-18)
-- Update RLS policies to restrict user-specific data to authenticated users only

-- Fix api_usage_logs policies
DROP POLICY IF EXISTS "Users can view their own API usage" ON public.api_usage_logs;
CREATE POLICY "Users can view their own API usage" 
ON public.api_usage_logs 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Fix checkmend_api_usage policies
DROP POLICY IF EXISTS "Users can view their own CheckMEND API usage" ON public.checkmend_api_usage;
CREATE POLICY "Users can view their own CheckMEND API usage" 
ON public.checkmend_api_usage 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Fix property_verifications policies
DROP POLICY IF EXISTS "Users can view their own property verifications" ON public.property_verifications;
CREATE POLICY "Users can view their own property verifications" 
ON public.property_verifications 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create their own property verifications" ON public.property_verifications;
CREATE POLICY "Users can create their own property verifications" 
ON public.property_verifications 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Fix purchases policies
DROP POLICY IF EXISTS "Users can view their own purchases" ON public.purchases;
CREATE POLICY "Users can view their own purchases" 
ON public.purchases 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own purchases" ON public.purchases;
CREATE POLICY "Users can insert their own purchases" 
ON public.purchases 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Fix rate_limits policies
DROP POLICY IF EXISTS "Users can view their own rate limits" ON public.rate_limits;
CREATE POLICY "Users can view their own rate limits" 
ON public.rate_limits 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Fix receipts policies
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

DROP POLICY IF EXISTS "Users can add their own receipts" ON public.receipts;
DROP POLICY IF EXISTS "Users can insert their own receipts" ON public.receipts;
CREATE POLICY "Users can insert their own receipts" 
ON public.receipts 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Fix recipero_api_usage policies
DROP POLICY IF EXISTS "Users can view their own API usage" ON public.recipero_api_usage;
CREATE POLICY "Users can view their own API usage" 
ON public.recipero_api_usage 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create their own API usage records" ON public.recipero_api_usage;
CREATE POLICY "Users can create their own API usage records" 
ON public.recipero_api_usage 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Fix subscribers policies
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

-- Fix terms_acceptance policies
DROP POLICY IF EXISTS "Users can view their own terms acceptance" ON public.terms_acceptance;
CREATE POLICY "Users can view their own terms acceptance" 
ON public.terms_acceptance 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create their own terms acceptance" ON public.terms_acceptance;
DROP POLICY IF EXISTS "Users can insert their own terms acceptance" ON public.terms_acceptance;
CREATE POLICY "Users can insert their own terms acceptance" 
ON public.terms_acceptance 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Fix verification_results policies
DROP POLICY IF EXISTS "Users can view only their own verification results" ON public.verification_results;
CREATE POLICY "Users can view only their own verification results" 
ON public.verification_results 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create their own verification results" ON public.verification_results;
CREATE POLICY "Users can create their own verification results" 
ON public.verification_results 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Fix verification_searches policies
DROP POLICY IF EXISTS "Users can view their own verification searches" ON public.verification_searches;
CREATE POLICY "Users can view their own verification searches" 
ON public.verification_searches 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id OR user_id IS NULL);

DROP POLICY IF EXISTS "Users can add searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Users can insert their own verification searches" ON public.verification_searches;
CREATE POLICY "Users can insert their own verification searches" 
ON public.verification_searches 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own verification searches" ON public.verification_searches;
CREATE POLICY "Users can update their own verification searches" 
ON public.verification_searches 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

-- Fix profiles policies to be more restrictive
DROP POLICY IF EXISTS "Users can view only their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Authenticated users can view all profiles" ON public.profiles;
CREATE POLICY "Users can view only their own profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "System can insert profiles for authenticated users" ON public.profiles;
CREATE POLICY "System can insert profiles for authenticated users" 
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = id OR auth.role() = 'service_role');

-- Keep public access for blog content (these are intentionally public)
-- Blog posts, categories, tags policies remain unchanged as they should be public

-- Keep public access for promotion stats (this is intentionally public)
-- promotion_stats policies remain unchanged as they should be public

-- System/service role policies remain unchanged for administrative functions
