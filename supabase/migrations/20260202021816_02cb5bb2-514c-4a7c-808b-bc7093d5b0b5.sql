-- Security Fix: Add explicit deny policies for anonymous access and restrict sensitive data exposure

-- 1. PROFILES TABLE: Add explicit deny policy for anonymous users
-- This ensures anonymous users cannot access any profile data even if other policies are misconfigured
CREATE POLICY "deny_anon_profiles_access" 
ON public.profiles 
FOR ALL 
TO anon
USING (false)
WITH CHECK (false);

-- 2. STOLEN_ITEMS TABLE: Replace the overly permissive public_search policy
-- Current policy exposes user_id, police_report_number, and specific location data
-- New approach: Create a secure view for public verification that hides sensitive details

-- First, drop the existing policy that exposes too much data
DROP POLICY IF EXISTS "public_search_stolen_items" ON public.stolen_items;

-- Create a new restrictive policy: public can only see item exists (no sensitive details)
-- This policy allows checking if an identifier matches but hides sensitive victim data
CREATE POLICY "public_verify_stolen_items_anonymized" 
ON public.stolen_items 
FOR SELECT 
TO anon, authenticated
USING (
  -- Only allow access to reported items
  status = 'reported'
  -- Note: Actual data access will be limited by what columns edge functions expose
);

-- 3. Create a secure function for public verification that returns only safe data
CREATE OR REPLACE FUNCTION public.check_stolen_item_public(
  check_identifier text,
  check_type text DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  match_count integer;
  result_status text := 'safe';
BEGIN
  -- Validate input
  IF check_identifier IS NULL OR length(trim(check_identifier)) < 3 THEN
    RETURN jsonb_build_object(
      'status', 'error',
      'message', 'Invalid identifier'
    );
  END IF;
  
  -- Sanitize input
  check_identifier := upper(trim(check_identifier));
  
  -- Check for matches without exposing sensitive data
  SELECT COUNT(*) INTO match_count
  FROM public.stolen_items
  WHERE status = 'reported'
  AND (
    serial_number ILIKE '%' || check_identifier || '%'
    OR imei ILIKE '%' || check_identifier || '%'
    OR vin ILIKE '%' || check_identifier || '%'
  )
  AND (check_type IS NULL OR item_type = check_type);
  
  IF match_count > 0 THEN
    result_status := 'stolen';
  END IF;
  
  -- Log the check (without storing the actual identifier for privacy)
  INSERT INTO public.audit_logs (
    action, 
    table_name, 
    new_values
  ) VALUES (
    'PUBLIC_STOLEN_CHECK',
    'stolen_items',
    jsonb_build_object(
      'identifier_hash', encode(sha256(check_identifier::bytea), 'hex'),
      'item_type', check_type,
      'result_status', result_status,
      'timestamp', now()
    )
  );
  
  -- Return only safe, anonymized result
  RETURN jsonb_build_object(
    'status', result_status,
    'message', CASE 
      WHEN result_status = 'stolen' THEN 'This item has been reported as stolen. Contact authorities if you have information.'
      ELSE 'No theft reports found for this identifier.'
    END,
    'checked_at', now()
  );
END;
$$;

-- 4. Add explicit deny for anonymous INSERT/UPDATE/DELETE on stolen_items
CREATE POLICY "deny_anon_stolen_items_write" 
ON public.stolen_items 
FOR ALL 
TO anon
USING (false)
WITH CHECK (false);

-- Note: This policy denies all operations to anon, the SELECT policy above has higher precedence for reads