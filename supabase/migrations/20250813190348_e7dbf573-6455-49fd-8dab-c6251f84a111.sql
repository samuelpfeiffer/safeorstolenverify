-- Comprehensive Supabase Security Hardening
-- This migration addresses all critical security vulnerabilities identified in the security scan

-- PHASE 1: Function Security Hardening
-- Fix search_path vulnerability in database functions

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.log_sensitive_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Log access to sensitive tables
  INSERT INTO public.audit_logs (
    user_id,
    action,
    table_name,
    record_id,
    new_values,
    old_values
  ) VALUES (
    auth.uid(),
    TG_OP,
    TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id),
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN row_to_json(NEW) ELSE NULL END,
    CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN row_to_json(OLD) ELSE NULL END
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$function$;

-- PHASE 2: Critical RLS Policy Fixes
-- Fix profiles table policies to use authenticated role instead of public

-- Drop existing problematic policies on profiles
DROP POLICY IF EXISTS "Authenticated users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Authenticated users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "System can insert profiles for authenticated users" ON public.profiles;

-- Create secure policies for profiles table
CREATE POLICY "secure_profiles_select"
ON public.profiles
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = id
);

CREATE POLICY "secure_profiles_update"
ON public.profiles
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = id
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = id
);

CREATE POLICY "secure_profiles_insert"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = id
);

-- Fix oauth_tokens policies
DROP POLICY IF EXISTS "Users can view their own oauth tokens" ON public.oauth_tokens;
DROP POLICY IF EXISTS "Users can insert their own oauth tokens" ON public.oauth_tokens;
DROP POLICY IF EXISTS "Users can update their own oauth tokens" ON public.oauth_tokens;
DROP POLICY IF EXISTS "Users can delete their own oauth tokens" ON public.oauth_tokens;

CREATE POLICY "secure_oauth_tokens_select"
ON public.oauth_tokens
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "secure_oauth_tokens_insert"
ON public.oauth_tokens
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "secure_oauth_tokens_update"
ON public.oauth_tokens
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

CREATE POLICY "secure_oauth_tokens_delete"
ON public.oauth_tokens
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- PHASE 3: Data Access Security
-- Restrict promotion_stats and other business data

-- Drop existing public policy on promotion_stats
DROP POLICY IF EXISTS "Anyone can view promotion stats" ON public.promotion_stats;

-- Create secure policy for promotion_stats (only authenticated users)
CREATE POLICY "authenticated_users_can_view_promotion_stats"
ON public.promotion_stats
FOR SELECT
TO authenticated
USING (true);

-- Secure blog categories and tags (limit to authenticated users for management)
DROP POLICY IF EXISTS "Anyone can view blog categories" ON public.blog_categories;
DROP POLICY IF EXISTS "Anyone can view blog tags" ON public.blog_tags;

CREATE POLICY "public_can_view_blog_categories"
ON public.blog_categories
FOR SELECT
USING (true);

CREATE POLICY "public_can_view_blog_tags"
ON public.blog_tags
FOR SELECT
USING (true);

-- PHASE 4: Policy Cleanup and Optimization
-- Ensure all sensitive tables have proper DELETE policies

-- Add missing DELETE policies for verification_results
CREATE POLICY "users_can_delete_own_verification_results"
ON public.verification_results
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Add missing DELETE policies for verification_searches
CREATE POLICY "users_can_delete_own_verification_searches"
ON public.verification_searches
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Add missing DELETE policies for receipts
CREATE POLICY "users_can_delete_own_receipts"
ON public.receipts
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = user_id
);

-- Add missing DELETE policy for profiles
CREATE POLICY "users_can_delete_own_profile"
ON public.profiles
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND auth.uid() = id
);

-- PHASE 5: Database Integrity and Security Enforcement
-- Ensure RLS is enabled and forced on all sensitive tables

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles FORCE ROW LEVEL SECURITY;

ALTER TABLE public.verification_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_results FORCE ROW LEVEL SECURITY;

ALTER TABLE public.verification_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_searches FORCE ROW LEVEL SECURITY;

ALTER TABLE public.receipts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.receipts FORCE ROW LEVEL SECURITY;

ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.purchases FORCE ROW LEVEL SECURITY;

ALTER TABLE public.promotion_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.promotion_stats FORCE ROW LEVEL SECURITY;

-- PHASE 6: Revoke unnecessary permissions
-- Remove public/anon access from sensitive tables

REVOKE ALL ON public.profiles FROM anon;
REVOKE ALL ON public.profiles FROM public;

REVOKE ALL ON public.verification_results FROM anon;
REVOKE ALL ON public.verification_results FROM public;

REVOKE ALL ON public.verification_searches FROM anon;
REVOKE ALL ON public.verification_searches FROM public;

REVOKE ALL ON public.purchases FROM anon;
REVOKE ALL ON public.purchases FROM public;

REVOKE ALL ON public.receipts FROM anon;
REVOKE ALL ON public.receipts FROM public;

-- Grant appropriate permissions to authenticated users
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.verification_results TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.verification_searches TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.purchases TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.receipts TO authenticated;

-- Ensure service_role has full access for administrative operations
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;

-- Add audit trigger to sensitive tables for monitoring
CREATE TRIGGER audit_profiles_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_access();

CREATE TRIGGER audit_verification_results_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.verification_results
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_access();