-- Fix critical security vulnerability: Remove public access to verification_items table
-- This table contains sensitive stolen item data that should not be publicly accessible

-- First, drop the dangerous public read policy
DROP POLICY IF EXISTS "Anyone can read verification items" ON public.verification_items;

-- Also remove the overly permissive authenticated select policy
DROP POLICY IF EXISTS "verification_items_authenticated_select" ON public.verification_items;

-- Create secure policies that restrict access appropriately

-- Only allow service role and admin users to read verification items for administrative purposes
CREATE POLICY "Admin and service role can read verification items" 
ON public.verification_items 
FOR SELECT 
USING (
  auth.role() = 'service_role' OR 
  is_admin_user()
);

-- Users can only read their own reported items (if they reported something stolen)
CREATE POLICY "Users can read their own reported items" 
ON public.verification_items 
FOR SELECT 
USING (
  auth.uid() IS NOT NULL AND 
  auth.uid() = reported_by
);

-- Create a secure function for verification checks that doesn't expose raw data
CREATE OR REPLACE FUNCTION public.check_item_verification_status(
  item_identifier text,
  item_type_param text
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
  SELECT status, item_type, verified_at, message
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
  
  -- Log the verification check for audit purposes
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
$$;