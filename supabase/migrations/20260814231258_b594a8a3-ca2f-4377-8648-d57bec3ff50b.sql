DELETE FROM public.proof_records WHERE identifier_hash IN ('abc123', 'abc124');

CREATE OR REPLACE FUNCTION public.create_proof_record(
  p_category text,
  p_identifier_hash text,
  p_identifier_masked text,
  p_result text,
  p_databases_queried jsonb,
  p_check_id uuid DEFAULT NULL,
  p_email text DEFAULT NULL,
  p_marketing_opt_in boolean DEFAULT false
)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_id text;
BEGIN
  IF p_category NOT IN ('phone','vehicle','plate','serial','firearm','bike') THEN
    RAISE EXCEPTION 'invalid category';
  END IF;
  IF p_result NOT IN ('clean','flagged') THEN
    RAISE EXCEPTION 'invalid result';
  END IF;
  IF length(coalesce(p_identifier_hash,'')) <> 64 THEN
    RAISE EXCEPTION 'identifier_hash must be a SHA-256 hex digest';
  END IF;
  IF p_email IS NOT NULL AND length(p_email) > 255 THEN
    RAISE EXCEPTION 'email too long';
  END IF;

  INSERT INTO public.proof_records (
    user_id, check_id, category, identifier_hash, identifier_masked,
    result, databases_queried, email, marketing_opt_in
  ) VALUES (
    auth.uid(), p_check_id, p_category, p_identifier_hash, left(p_identifier_masked, 32),
    p_result, coalesce(p_databases_queried, '[]'::jsonb), nullif(trim(coalesce(p_email,'')), ''),
    coalesce(p_marketing_opt_in, false)
  )
  RETURNING id INTO new_id;

  RETURN new_id;
END;
$$;

REVOKE ALL ON FUNCTION public.create_proof_record(text, text, text, text, jsonb, uuid, text, boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.create_proof_record(text, text, text, text, jsonb, uuid, text, boolean) TO anon, authenticated, service_role;