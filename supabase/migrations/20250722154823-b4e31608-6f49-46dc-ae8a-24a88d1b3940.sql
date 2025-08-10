-- Fix function search path security issues for all database functions

-- Fix clean_expired_checkmend_cache function
DROP FUNCTION IF EXISTS public.clean_expired_checkmend_cache();
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

-- Fix update_checkmend_cache_updated_at function
DROP FUNCTION IF EXISTS public.update_checkmend_cache_updated_at();
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

-- Recreate the trigger for the updated function
DROP TRIGGER IF EXISTS update_checkmend_cache_updated_at ON public.checkmend_verification_cache;
CREATE TRIGGER update_checkmend_cache_updated_at
  BEFORE UPDATE ON public.checkmend_verification_cache
  FOR EACH ROW EXECUTE FUNCTION public.update_checkmend_cache_updated_at();

-- Add missing triggers that were referenced in earlier migrations but not created
-- Ensure all triggers are properly set up for updated_at functions
CREATE TRIGGER IF NOT EXISTS handle_updated_at
  BEFORE UPDATE ON public.audit_logs
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER IF NOT EXISTS handle_updated_at  
  BEFORE UPDATE ON public.rate_limits
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER IF NOT EXISTS handle_updated_at
  BEFORE UPDATE ON public.purchases
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER IF NOT EXISTS handle_updated_at
  BEFORE UPDATE ON public.verification_searches
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER IF NOT EXISTS handle_updated_at
  BEFORE UPDATE ON public.property_verifications
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER IF NOT EXISTS handle_updated_at
  BEFORE UPDATE ON public.system_configuration
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER IF NOT EXISTS handle_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER IF NOT EXISTS handle_updated_at
  BEFORE UPDATE ON public.checkmend_verification_cache
  FOR EACH ROW EXECUTE FUNCTION public.update_checkmend_cache_updated_at();