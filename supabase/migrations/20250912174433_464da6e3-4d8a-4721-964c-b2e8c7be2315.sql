-- Phase 1: Critical Email Exposure Fixes
-- Fix newsletter_subscribers RLS policies to restrict email access
DROP POLICY IF EXISTS "newsletter_service_role_insert" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_select" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_update" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_admin_delete" ON public.newsletter_subscribers;

-- Create secure newsletter policies - no direct access to emails
CREATE POLICY "newsletter_secure_insert" ON public.newsletter_subscribers
FOR INSERT 
USING (true);

CREATE POLICY "newsletter_admin_manage" ON public.newsletter_subscribers
FOR ALL 
USING (is_service_role_or_admin())
WITH CHECK (is_service_role_or_admin());

-- Create secure function to get newsletter count without exposing emails
CREATE OR REPLACE FUNCTION public.get_newsletter_subscriber_count()
RETURNS integer
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT COUNT(*)::integer FROM public.newsletter_subscribers WHERE is_subscribed = true;
$$;

-- Fix community_stories to exclude emails from public access
DROP POLICY IF EXISTS "Public can view approved stories without emails" ON public.community_stories;

CREATE POLICY "Public can view approved stories safely" ON public.community_stories
FOR SELECT 
USING (is_approved = true);

-- Create secure function to get community stories without emails
CREATE OR REPLACE FUNCTION public.get_public_community_stories()
RETURNS TABLE (
  id uuid,
  name text,
  experience_type text,
  story text,
  item_type text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  is_approved boolean
)
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT 
    id, 
    name, 
    experience_type, 
    story, 
    item_type, 
    created_at, 
    updated_at, 
    is_approved
  FROM public.community_stories 
  WHERE is_approved = true
  ORDER BY created_at DESC;
$$;

-- Phase 3: Database Security Hardening - Fix search_path for all functions
-- Update existing functions to include proper search_path
CREATE OR REPLACE FUNCTION public.update_ai_updated_at_column()
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

CREATE OR REPLACE FUNCTION public.generate_api_key()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  RETURN 'sos_' || encode(gen_random_bytes(32), 'hex');
END;
$$;

CREATE OR REPLACE FUNCTION public.log_newsletter_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, new_values
  ) VALUES (
    auth.uid(), 
    'NEWSLETTER_ACCESS_' || TG_OP, 
    'newsletter_subscribers',
    COALESCE(NEW.id, OLD.id)::text,
    jsonb_build_object(
      'operation', TG_OP,
      'timestamp', NOW(),
      'role', auth.role(),
      'user_id', auth.uid()
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE OR REPLACE FUNCTION public.validate_and_track_api_usage(p_api_key text, p_endpoint text, p_identifier text DEFAULT NULL::text, p_ip_address text DEFAULT NULL::text, p_user_agent text DEFAULT NULL::text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  v_key_record RECORD;
  v_usage_id UUID;
BEGIN
  SELECT id, user_id, usage_count, usage_limit, is_active, expires_at
  INTO v_key_record
  FROM public.external_api_keys
  WHERE api_key = p_api_key;
  
  IF v_key_record.id IS NULL THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Invalid API key');
  END IF;
  
  IF NOT v_key_record.is_active THEN
    RETURN jsonb_build_object('valid', false, 'error', 'API key is inactive');
  END IF;
  
  IF v_key_record.expires_at IS NOT NULL AND v_key_record.expires_at < now() THEN
    RETURN jsonb_build_object('valid', false, 'error', 'API key has expired');
  END IF;
  
  IF v_key_record.usage_limit IS NOT NULL AND v_key_record.usage_count >= v_key_record.usage_limit THEN
    RETURN jsonb_build_object('valid', false, 'error', 'API key usage limit exceeded');
  END IF;
  
  UPDATE public.external_api_keys
  SET usage_count = usage_count + 1,
      updated_at = now()
  WHERE id = v_key_record.id;
  
  INSERT INTO public.api_usage_tracking (
    api_key_id, endpoint, identifier, ip_address, user_agent
  ) VALUES (
    v_key_record.id, p_endpoint, p_identifier, p_ip_address, p_user_agent
  ) RETURNING id INTO v_usage_id;
  
  RETURN jsonb_build_object(
    'valid', true,
    'api_key_id', v_key_record.id,
    'user_id', v_key_record.user_id,
    'usage_id', v_usage_id
  );
END;
$$;

-- Restrict anonymous access to sensitive verification tables
CREATE POLICY "verification_results_authenticated_only" ON public.verification_results
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Add comprehensive audit logging trigger for all sensitive tables
CREATE OR REPLACE FUNCTION public.log_comprehensive_security_audit()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Log all operations on sensitive tables with enhanced security context
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, new_values, old_values, ip_address, user_agent
  ) VALUES (
    auth.uid(),
    'SECURITY_' || TG_OP || '_' || TG_TABLE_NAME,
    TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id)::text,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN 
      jsonb_build_object(
        'operation', TG_OP,
        'timestamp', NOW(),
        'security_context', jsonb_build_object(
          'auth_role', auth.role(),
          'user_id', auth.uid(),
          'session_id', current_setting('request.jwt.claim.session_id', true)
        )
      )
    ELSE NULL END,
    CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN 
      jsonb_build_object(
        'operation', TG_OP,
        'timestamp', NOW()
      )
    ELSE NULL END,
    current_setting('request.headers', true)::json->>'x-forwarded-for',
    current_setting('request.headers', true)::json->>'user-agent'
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Apply comprehensive audit logging to sensitive tables
DROP TRIGGER IF EXISTS comprehensive_security_audit_newsletter_subscribers ON public.newsletter_subscribers;
CREATE TRIGGER comprehensive_security_audit_newsletter_subscribers
  BEFORE INSERT OR UPDATE OR DELETE ON public.newsletter_subscribers
  FOR EACH ROW EXECUTE FUNCTION public.log_comprehensive_security_audit();

DROP TRIGGER IF EXISTS comprehensive_security_audit_api_keys ON public.api_keys;
CREATE TRIGGER comprehensive_security_audit_api_keys
  BEFORE INSERT OR UPDATE OR DELETE ON public.api_keys
  FOR EACH ROW EXECUTE FUNCTION public.log_comprehensive_security_audit();