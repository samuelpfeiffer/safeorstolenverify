-- PHASE 1: CRITICAL SECURITY FIXES
-- This migration addresses the most critical security vulnerabilities identified in the security audit

-- 1. CREATE SECURITY DEFINER FUNCTIONS FOR ADMIN OPERATIONS
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $function$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles r
    WHERE r.user_id = auth.uid() 
    AND r.role = 'admin'::app_role
  );
$function$;

CREATE OR REPLACE FUNCTION public.is_service_role_or_admin()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $function$
  SELECT auth.role() = 'service_role' OR public.is_admin_user();
$function$;

-- 2. SECURE USER ROLES MANAGEMENT (Prevent Privilege Escalation)
DROP POLICY IF EXISTS "service_role_manage_user_roles" ON public.user_roles;
DROP POLICY IF EXISTS "service_can_manage_user_roles" ON public.user_roles;

CREATE POLICY "admin_only_manage_user_roles"
ON public.user_roles
FOR ALL
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- 3. SECURE NEWSLETTER SUBSCRIBERS (Critical Data Protection)
DROP POLICY IF EXISTS "secure_newsletter_service_only" ON public.newsletter_subscribers;

CREATE POLICY "admin_only_newsletter_access"
ON public.newsletter_subscribers
FOR ALL
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- Allow public function to insert (for newsletter signup)
CREATE POLICY "public_function_newsletter_insert"
ON public.newsletter_subscribers
FOR INSERT
WITH CHECK (auth.role() = 'service_role');

-- 4. RESTRICT OVERLY PERMISSIVE SERVICE ROLE POLICIES
-- Replace blanket service role access with specific admin access

-- API Keys: Admin only management
DROP POLICY IF EXISTS "service_role_manage_api_keys" ON public.api_keys;
CREATE POLICY "admin_manage_api_keys"
ON public.api_keys
FOR ALL
USING (public.is_service_role_or_admin())
WITH CHECK (public.is_service_role_or_admin());

-- Audit Logs: System and admin access only
DROP POLICY IF EXISTS "System can manage audit logs" ON public.audit_logs;
CREATE POLICY "system_admin_manage_audit_logs"
ON public.audit_logs
FOR ALL
USING (public.is_service_role_or_admin())
WITH CHECK (public.is_service_role_or_admin());

-- OAuth Tokens: Remove overly broad service role access
DROP POLICY IF EXISTS "service_role_manage_oauth_tokens" ON public.oauth_tokens;
CREATE POLICY "admin_manage_oauth_tokens"
ON public.oauth_tokens
FOR ALL
USING (public.is_service_role_or_admin() OR auth.uid() = user_id)
WITH CHECK (public.is_service_role_or_admin() OR auth.uid() = user_id);

-- Rate Limits: System operations only
DROP POLICY IF EXISTS "service_role_manage_rate_limits" ON public.rate_limits;
CREATE POLICY "system_only_rate_limits"
ON public.rate_limits
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- 5. ADD ENHANCED AUDIT LOGGING TRIGGER
CREATE OR REPLACE FUNCTION public.log_admin_operations()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  -- Log any admin operations on sensitive tables
  IF TG_TABLE_NAME IN ('user_roles', 'newsletter_subscribers', 'api_keys', 'oauth_tokens') THEN
    INSERT INTO public.audit_logs (
      user_id, action, table_name, record_id, new_values, old_values
    ) VALUES (
      auth.uid(),
      'ADMIN_' || TG_OP || '_' || TG_TABLE_NAME,
      TG_TABLE_NAME,
      COALESCE(NEW.id, OLD.id)::text,
      CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN 
        jsonb_build_object(
          'operation', TG_OP,
          'timestamp', NOW(),
          'admin_user', auth.uid(),
          'table', TG_TABLE_NAME
        )
      ELSE NULL END,
      CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN 
        jsonb_build_object(
          'operation', TG_OP,
          'timestamp', NOW(),
          'admin_user', auth.uid()
        )
      ELSE NULL END
    );
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$function$;

-- Apply admin operation logging to sensitive tables
DROP TRIGGER IF EXISTS admin_operations_audit_user_roles ON public.user_roles;
CREATE TRIGGER admin_operations_audit_user_roles
  AFTER INSERT OR UPDATE OR DELETE ON public.user_roles
  FOR EACH ROW EXECUTE FUNCTION public.log_admin_operations();

DROP TRIGGER IF EXISTS admin_operations_audit_newsletter ON public.newsletter_subscribers;
CREATE TRIGGER admin_operations_audit_newsletter
  AFTER INSERT OR UPDATE OR DELETE ON public.newsletter_subscribers
  FOR EACH ROW EXECUTE FUNCTION public.log_admin_operations();

-- 6. SECURE SYSTEM CONFIGURATION ACCESS
DROP POLICY IF EXISTS "Service role can manage configuration" ON public.system_configuration;
CREATE POLICY "admin_only_system_config"
ON public.system_configuration
FOR ALL
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- 7. ADD RATE LIMITING VALIDATION
CREATE OR REPLACE FUNCTION public.validate_rate_limit_security()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  -- Prevent abuse of rate limiting system
  IF NEW.count > 10000 THEN
    RAISE EXCEPTION 'Rate limit count exceeds maximum allowed value';
  END IF;
  
  -- Log suspicious rate limit modifications
  IF NEW.count > 1000 THEN
    INSERT INTO public.audit_logs (
      user_id, action, table_name, record_id, new_values
    ) VALUES (
      auth.uid(),
      'SUSPICIOUS_RATE_LIMIT_MODIFICATION',
      'rate_limits',
      NEW.id::text,
      jsonb_build_object(
        'high_count', NEW.count,
        'action', NEW.action,
        'user_id', NEW.user_id,
        'timestamp', NOW()
      )
    );
  END IF;
  
  RETURN NEW;
END;
$function$;

DROP TRIGGER IF EXISTS validate_rate_limit_security_trigger ON public.rate_limits;
CREATE TRIGGER validate_rate_limit_security_trigger
  BEFORE INSERT OR UPDATE ON public.rate_limits
  FOR EACH ROW EXECUTE FUNCTION public.validate_rate_limit_security();

-- 8. SECURE PROFILES ACCESS (Prevent unauthorized profile modifications)
DROP POLICY IF EXISTS "Service role can manage profiles" ON public.profiles;
CREATE POLICY "system_service_manage_profiles"
ON public.profiles
FOR ALL
USING (auth.role() = 'service_role' OR public.is_admin_user() OR auth.uid() = id)
WITH CHECK (auth.role() = 'service_role' OR public.is_admin_user() OR auth.uid() = id);