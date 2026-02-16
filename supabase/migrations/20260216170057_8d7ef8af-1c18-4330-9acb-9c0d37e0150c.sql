
-- Fix: pending_verifications overly permissive policies
-- Replace broad authenticated access with session_id-scoped security definer functions

-- Drop the overly permissive policies
DROP POLICY IF EXISTS authenticated_select_pending_verifications ON public.pending_verifications;
DROP POLICY IF EXISTS authenticated_insert_pending_verifications ON public.pending_verifications;
DROP POLICY IF EXISTS authenticated_delete_pending_verifications ON public.pending_verifications;

-- Also drop any anon deny policies that might conflict
DROP POLICY IF EXISTS anon_deny_pending_verifications ON public.pending_verifications;

-- Create restrictive policies: only service_role can directly access
-- All user access goes through security definer functions below
CREATE POLICY "deny_all_pending_verifications"
  ON public.pending_verifications
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Security definer function to save pending verification (bypasses RLS safely)
CREATE OR REPLACE FUNCTION public.save_pending_verification(
  p_session_id text,
  p_serial_number text,
  p_item_type text DEFAULT NULL,
  p_user_intent text DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Validate inputs
  IF p_session_id IS NULL OR length(trim(p_session_id)) < 10 THEN
    RETURN jsonb_build_object('success', false, 'error', 'Invalid session ID');
  END IF;
  
  IF p_serial_number IS NULL OR length(trim(p_serial_number)) < 1 THEN
    RETURN jsonb_build_object('success', false, 'error', 'Serial number required');
  END IF;

  INSERT INTO public.pending_verifications (session_id, serial_number, item_type, user_intent)
  VALUES (p_session_id, p_serial_number, p_item_type, p_user_intent);

  RETURN jsonb_build_object('success', true);
END;
$$;

-- Security definer function to retrieve and delete pending verification by session_id
CREATE OR REPLACE FUNCTION public.retrieve_pending_verification(p_session_id text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_record RECORD;
BEGIN
  IF p_session_id IS NULL OR length(trim(p_session_id)) < 10 THEN
    RETURN NULL;
  END IF;

  -- Get the most recent non-expired record for this session
  SELECT id, session_id, serial_number, item_type, user_intent, created_at, expires_at
  INTO v_record
  FROM public.pending_verifications
  WHERE session_id = p_session_id
    AND expires_at > now()
  ORDER BY created_at DESC
  LIMIT 1;

  IF v_record.id IS NULL THEN
    RETURN NULL;
  END IF;

  -- Delete after retrieval (one-time use)
  DELETE FROM public.pending_verifications WHERE id = v_record.id;

  RETURN jsonb_build_object(
    'id', v_record.id,
    'session_id', v_record.session_id,
    'serial_number', v_record.serial_number,
    'item_type', v_record.item_type,
    'user_intent', v_record.user_intent,
    'created_at', v_record.created_at,
    'expires_at', v_record.expires_at
  );
END;
$$;
