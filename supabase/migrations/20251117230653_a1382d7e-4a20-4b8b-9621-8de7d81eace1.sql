-- Security Fix: Add search_path to all SECURITY DEFINER functions
-- This prevents SQL injection attacks via search_path manipulation
-- Issue: SUPA_function_search_path_mutable (74 functions)

-- Fix functions that are missing SET search_path TO 'public'

-- 1. update_stolen_items_updated_at
CREATE OR REPLACE FUNCTION public.update_stolen_items_updated_at()
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

-- 2. update_seo_updated_at
CREATE OR REPLACE FUNCTION public.update_seo_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$function$;

-- 3. set_clean_blog_slug
CREATE OR REPLACE FUNCTION public.set_clean_blog_slug()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
  -- Only process if slug has timestamp suffix or is being created
  IF NEW.slug ~ '-\d{10,}$' OR (TG_OP = 'INSERT' AND NEW.slug IS NULL) THEN
    IF NEW.slug IS NULL THEN
      -- Generate from title for new posts
      NEW.slug := LOWER(REGEXP_REPLACE(REGEXP_REPLACE(NEW.title, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g'));
    END IF;
    NEW.slug := generate_unique_clean_slug(NEW.slug, NEW.id);
  END IF;
  RETURN NEW;
END;
$function$;

-- 4. update_profiles_updated_at
CREATE OR REPLACE FUNCTION public.update_profiles_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$function$;

-- 5. log_newsletter_access_attempt
CREATE OR REPLACE FUNCTION public.log_newsletter_access_attempt()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Log any access attempt (should only be from secure functions now)
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
      'auth_role', auth.role(),
      'user_id', auth.uid(),
      'access_method', 'direct_table_access'
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$function$;

-- 6. log_security_sensitive_operations
CREATE OR REPLACE FUNCTION public.log_security_sensitive_operations()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Log access to sensitive operations
  IF TG_TABLE_NAME IN ('api_keys', 'oauth_tokens', 'external_api_keys', 'newsletter_subscribers') THEN
    INSERT INTO public.audit_logs (
      user_id, action, table_name, record_id, new_values
    ) VALUES (
      auth.uid(),
      'SENSITIVE_' || TG_OP || '_' || TG_TABLE_NAME,
      TG_TABLE_NAME,
      COALESCE(NEW.id, OLD.id)::text,
      jsonb_build_object(
        'operation', TG_OP,
        'timestamp', now(),
        'user_role', auth.role(),
        'security_level', 'high'
      )
    );
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$function$;

-- 7. update_ai_updated_at_column
CREATE OR REPLACE FUNCTION public.update_ai_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- 8. log_newsletter_access
CREATE OR REPLACE FUNCTION public.log_newsletter_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Log any access attempt to newsletter_subscribers
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
$function$;

-- 9. update_updated_at_column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$function$;

-- 10. log_admin_operations
CREATE OR REPLACE FUNCTION public.log_admin_operations()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
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

-- 11. check_rate_limit_security
CREATE OR REPLACE FUNCTION public.check_rate_limit_security()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Prevent setting extremely high counts
  IF NEW.count > 1000 THEN
    RAISE EXCEPTION 'Rate limit count too high for security';
  END IF;
  
  -- Prevent setting action names that could be security risks
  IF NEW.action ~* '(admin|root|system|delete|drop)' THEN
    RAISE EXCEPTION 'Action name not allowed for security';
  END IF;
  
  RETURN NEW;
END;
$function$;

-- 12. log_sensitive_access
CREATE OR REPLACE FUNCTION public.log_sensitive_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Log access to sensitive tables
  INSERT INTO public.sensitive_data_access_log (
    user_id,
    table_name,
    access_type,
    record_id,
    ip_address
  ) VALUES (
    auth.uid(),
    TG_TABLE_NAME,
    TG_OP,
    COALESCE(NEW.id, OLD.id),
    NULL -- IP address would need to be passed from application layer
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$function$;

-- 13. update_checkmend_cache_updated_at
CREATE OR REPLACE FUNCTION public.update_checkmend_cache_updated_at()
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

-- 14. log_newsletter_security_access
CREATE OR REPLACE FUNCTION public.log_newsletter_security_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Log any unauthorized access attempt
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, new_values
  ) VALUES (
    auth.uid(), 
    'NEWSLETTER_SECURITY_ACCESS_' || TG_OP, 
    'newsletter_subscribers',
    COALESCE(NEW.id, OLD.id)::text,
    jsonb_build_object(
      'operation', TG_OP,
      'timestamp', NOW(),
      'role', auth.role(),
      'user_id', auth.uid(),
      'security_event', 'newsletter_table_access'
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$function$;

-- 15. log_sensitive_data_access
CREATE OR REPLACE FUNCTION public.log_sensitive_data_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Log all modifications to sensitive tables
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, 
    new_values, old_values
  ) VALUES (
    auth.uid(), 
    TG_OP || '_' || TG_TABLE_NAME,
    TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id)::text,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN 
      jsonb_build_object(
        'masked_data', 'SENSITIVE_DATA_ACCESSED',
        'timestamp', NOW(),
        'user_session', auth.uid(),
        'operation', TG_OP
      )
    ELSE NULL END,
    CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN 
      jsonb_build_object('action', 'SENSITIVE_DATA_MODIFIED', 'operation', TG_OP)
    ELSE NULL END
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$function$;

-- 16. notify_users_of_stolen_item
CREATE OR REPLACE FUNCTION public.notify_users_of_stolen_item()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Find users who previously searched for this item
  INSERT INTO public.stolen_item_notifications (
    user_id,
    stolen_item_id,
    notification_type,
    status,
    searched_identifier,
    search_date,
    notification_data
  )
  SELECT DISTINCT
    vs.user_id,
    NEW.id,
    'email',
    'pending',
    vs.identifier,
    vs.created_at,
    jsonb_build_object(
      'item_type', NEW.item_type,
      'brand', NEW.brand,
      'model', NEW.model,
      'date_stolen', NEW.date_stolen,
      'location_stolen', NEW.location_stolen
    )
  FROM public.verification_searches vs
  WHERE vs.user_id IS NOT NULL
    AND vs.user_id != NEW.user_id
    AND (
      (NEW.serial_number IS NOT NULL AND vs.identifier = NEW.serial_number)
      OR (NEW.imei IS NOT NULL AND vs.identifier = NEW.imei)
      OR (NEW.vin IS NOT NULL AND vs.identifier = NEW.vin)
    );
  
  RETURN NEW;
END;
$function$;

-- 17. check_auth_rate_limit
CREATE OR REPLACE FUNCTION public.check_auth_rate_limit()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Simple rate limiting: max 100 operations per hour per user
  IF (SELECT COUNT(*) FROM public.audit_logs 
      WHERE user_id = auth.uid() 
      AND created_at > NOW() - INTERVAL '1 hour') > 100 THEN
    RETURN false;
  END IF;
  RETURN true;
END;
$function$;