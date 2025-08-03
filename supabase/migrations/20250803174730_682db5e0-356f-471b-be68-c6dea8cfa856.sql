-- Fix RLS policies to properly handle anonymous access where needed
-- Only allow authenticated users to access user-specific data

-- Fix alert_notifications - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own notifications" ON public.alert_notifications;
CREATE POLICY "Authenticated users can view their own notifications" ON public.alert_notifications
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix api_keys - should only allow authenticated users
DROP POLICY IF EXISTS "Users can update their own API keys" ON public.api_keys;
DROP POLICY IF EXISTS "Users can view their own API keys" ON public.api_keys;

CREATE POLICY "Authenticated users can view their own API keys" ON public.api_keys
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own API keys" ON public.api_keys
FOR UPDATE
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix api_usage_logs - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own API usage" ON public.api_usage_logs;
CREATE POLICY "Authenticated users can view their own API usage" ON public.api_usage_logs
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix checkmend_api_usage - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own CheckMEND API usage" ON public.checkmend_api_usage;
CREATE POLICY "Authenticated users can view their own CheckMEND API usage" ON public.checkmend_api_usage
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix checkout_sessions - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own checkout sessions" ON public.checkout_sessions;
CREATE POLICY "Authenticated users can view their own checkout sessions" ON public.checkout_sessions
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix customer_portal_sessions - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own portal sessions" ON public.customer_portal_sessions;
CREATE POLICY "Authenticated users can view their own portal sessions" ON public.customer_portal_sessions
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix marketplace_integrations - should only allow authenticated users
DROP POLICY IF EXISTS "Users can manage their own marketplace integrations" ON public.marketplace_integrations;
CREATE POLICY "Authenticated users can manage their own marketplace integrations" ON public.marketplace_integrations
FOR ALL
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix marketplace_listings - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own marketplace listings" ON public.marketplace_listings;
DROP POLICY IF EXISTS "Users can update their own marketplace listings" ON public.marketplace_listings;

CREATE POLICY "Authenticated users can view their own marketplace listings" ON public.marketplace_listings
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own marketplace listings" ON public.marketplace_listings
FOR UPDATE
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix profiles - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view only their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "Authenticated users can view their own profile" ON public.profiles
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = id);

CREATE POLICY "Authenticated users can update their own profile" ON public.profiles
FOR UPDATE
USING (auth.uid() IS NOT NULL AND auth.uid() = id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = id);

-- Fix purchases - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own purchases" ON public.purchases;
CREATE POLICY "Authenticated users can view their own purchases" ON public.purchases
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix rate_limits - should only allow authenticated users to view their own
DROP POLICY IF EXISTS "Users can view their own rate limits" ON public.rate_limits;
CREATE POLICY "Authenticated users can view their own rate limits" ON public.rate_limits
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix receipts - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own receipts" ON public.receipts;
DROP POLICY IF EXISTS "Users can update their own receipts" ON public.receipts;

CREATE POLICY "Authenticated users can view their own receipts" ON public.receipts
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own receipts" ON public.receipts
FOR UPDATE
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix recipero_api_usage - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own API usage" ON public.recipero_api_usage;
CREATE POLICY "Authenticated users can view their own API usage" ON public.recipero_api_usage
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix social_media_findings - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own social media findings" ON public.social_media_findings;
CREATE POLICY "Authenticated users can view their own social media findings" ON public.social_media_findings
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix social_media_monitoring - should only allow authenticated users
DROP POLICY IF EXISTS "Users can manage their own social media monitoring" ON public.social_media_monitoring;
CREATE POLICY "Authenticated users can manage their own social media monitoring" ON public.social_media_monitoring
FOR ALL
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix subscribers - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own subscription" ON public.subscribers;
DROP POLICY IF EXISTS "Users can update their own subscription" ON public.subscribers;

CREATE POLICY "Authenticated users can view their own subscription" ON public.subscribers
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own subscription" ON public.subscribers
FOR UPDATE
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix terms_acceptance - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view their own terms acceptance" ON public.terms_acceptance;
CREATE POLICY "Authenticated users can view their own terms acceptance" ON public.terms_acceptance
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix verification_results - should only allow authenticated users
DROP POLICY IF EXISTS "Users can view only their own verification results" ON public.verification_results;
CREATE POLICY "Authenticated users can view their own verification results" ON public.verification_results
FOR SELECT
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Fix verification_searches - should only allow authenticated users for their own data
DROP POLICY IF EXISTS "Users can view their own verification searches" ON public.verification_searches;
DROP POLICY IF EXISTS "Users can update their own verification searches" ON public.verification_searches;

CREATE POLICY "Authenticated users can view their own verification searches" ON public.verification_searches
FOR SELECT
USING (auth.uid() IS NOT NULL AND (auth.uid() = user_id OR user_id IS NULL));

CREATE POLICY "Authenticated users can update their own verification searches" ON public.verification_searches
FOR UPDATE
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);