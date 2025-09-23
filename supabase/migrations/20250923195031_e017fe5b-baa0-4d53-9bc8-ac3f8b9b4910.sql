-- Fix Function Search Path Issues - Set search_path for all functions for security

-- 1. Fix all existing functions to have proper search_path
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'auth'
AS $function$
BEGIN
  INSERT INTO public.profiles (
    id, 
    email, 
    full_name,
    avatar_url,
    created_at,
    updated_at
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    NEW.raw_user_meta_data->>'avatar_url',
    NOW(),
    NOW()
  );
  
  RETURN NEW;
END;
$function$;

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

CREATE OR REPLACE FUNCTION public.check_item_verification_status(item_identifier text, item_type_param text DEFAULT NULL::text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  result_record RECORD;
  verification_result jsonb;
BEGIN
  -- Validate input
  IF item_identifier IS NULL OR length(trim(item_identifier)) = 0 THEN
    RETURN jsonb_build_object(
      'status', 'error',
      'message', 'Invalid identifier provided'
    );
  END IF;

  -- Clean and validate the identifier
  item_identifier := trim(upper(item_identifier));
  
  -- Check for verification status without exposing sensitive details
  SELECT status, item_type, verified_at
  INTO result_record
  FROM public.verification_items
  WHERE identifier = item_identifier
  AND (item_type_param IS NULL OR item_type = item_type_param)
  ORDER BY created_at DESC
  LIMIT 1;
  
  IF result_record IS NULL THEN
    -- Item not found in database - return safe status
    verification_result := jsonb_build_object(
      'status', 'safe',
      'message', 'No records found for this item',
      'verified_at', null,
      'confidence', 'medium'
    );
  ELSE
    -- Return sanitized status information
    verification_result := jsonb_build_object(
      'status', result_record.status,
      'message', CASE 
        WHEN result_record.status = 'stolen' THEN 'This item has been reported as stolen. Contact authorities if you have information.'
        WHEN result_record.status = 'lost' THEN 'This item has been reported as lost. Contact the reporting party through official channels.'
        ELSE 'Item status verified'
      END,
      'verified_at', result_record.verified_at,
      'confidence', 'high'
    );
  END IF;
  
  -- Log the verification check for audit purposes (without exposing the actual identifier)
  INSERT INTO public.audit_logs (
    user_id, action, table_name, new_values
  ) VALUES (
    auth.uid(),
    'VERIFICATION_CHECK',
    'verification_items',
    jsonb_build_object(
      'identifier_hash', encode(sha256(item_identifier::bytea), 'hex'),
      'item_type', item_type_param,
      'timestamp', now(),
      'result_status', verification_result->>'status'
    )
  );
  
  RETURN verification_result;
END;
$function$;