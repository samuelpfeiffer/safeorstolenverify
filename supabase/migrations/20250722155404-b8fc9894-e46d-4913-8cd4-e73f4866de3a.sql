-- Final security fixes for RLS policies

-- The linter is detecting policies incorrectly. Let me check if there are any remaining issues
-- by explicitly setting the role restrictions for user-specific data

-- Ensure all user-specific data policies are properly restricted to authenticated users only
ALTER POLICY "Users can view their own API usage" ON public.api_usage_logs TO authenticated;
ALTER POLICY "Users can view their own CheckMEND API usage" ON public.checkmend_api_usage TO authenticated;
ALTER POLICY "Users can view their own API usage" ON public.recipero_api_usage TO authenticated;
ALTER POLICY "Users can view their own property verifications" ON public.property_verifications TO authenticated;
ALTER POLICY "Users can view their own purchases" ON public.purchases TO authenticated;
ALTER POLICY "Users can view their own rate limits" ON public.rate_limits TO authenticated;
ALTER POLICY "Users can view their own receipts" ON public.receipts TO authenticated;
ALTER POLICY "Users can update their own receipts" ON public.receipts TO authenticated;
ALTER POLICY "Users can view their own subscription" ON public.subscribers TO authenticated;
ALTER POLICY "Users can update their own subscription" ON public.subscribers TO authenticated;
ALTER POLICY "Users can view their own terms acceptance" ON public.terms_acceptance TO authenticated;
ALTER POLICY "Users can view only their own verification results" ON public.verification_results TO authenticated;
ALTER POLICY "Users can view their own verification searches" ON public.verification_searches TO authenticated;
ALTER POLICY "Users can update their own verification searches" ON public.verification_searches TO authenticated;
ALTER POLICY "Users can view only their own profile" ON public.profiles TO authenticated;
ALTER POLICY "Users can update their own profile" ON public.profiles TO authenticated;
ALTER POLICY "Authenticated users can view all profiles" ON public.profiles TO authenticated;