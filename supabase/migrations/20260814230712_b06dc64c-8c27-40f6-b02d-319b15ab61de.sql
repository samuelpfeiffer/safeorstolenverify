-- Align proof_records with v1 scope
ALTER TABLE public.proof_records
  ADD COLUMN IF NOT EXISTS email text,
  ADD COLUMN IF NOT EXISTS marketing_opt_in boolean NOT NULL DEFAULT false;

ALTER TABLE public.proof_records
  DROP COLUMN IF EXISTS seller_name,
  DROP COLUMN IF EXISTS listing_source,
  DROP COLUMN IF EXISTS meeting_location,
  DROP COLUMN IF EXISTS purchase_price,
  DROP COLUMN IF EXISTS reveal_identifier;

-- record_hash canonicalization (must be reproducible byte for byte):
-- SHA-256 (hex, lowercase) of a JSON object with keys in ASCII-sorted order:
--   category, created_at, databases_queried, id, identifier_hash, result
-- No whitespace anywhere. Strings JSON-escaped with double quotes.
-- created_at is the UTC instant formatted as YYYY-MM-DDTHH24:MI:SSZ (second precision).
-- databases_queried is the jsonb array serialized compactly in stored order.
CREATE OR REPLACE FUNCTION public.proof_records_set_hash()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  canonical text;
BEGIN
  IF NEW.created_at IS NULL THEN
    NEW.created_at := now();
  END IF;

  canonical :=
    '{"category":' || to_jsonb(NEW.category)::text ||
    ',"created_at":' || to_jsonb(to_char(NEW.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"'))::text ||
    ',"databases_queried":' || COALESCE(NEW.databases_queried, '[]'::jsonb)::text ||
    ',"id":' || to_jsonb(NEW.id)::text ||
    ',"identifier_hash":' || to_jsonb(NEW.identifier_hash)::text ||
    ',"result":' || to_jsonb(NEW.result)::text ||
    '}';

  NEW.record_hash := encode(extensions.digest(canonical, 'sha256'), 'hex');
  RETURN NEW;
END;
$$;

-- Immutable except deleted_at (and one-time ownership claim of an anonymous record)
CREATE OR REPLACE FUNCTION public.proof_records_enforce_immutable()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.id IS DISTINCT FROM OLD.id
     OR NEW.check_id IS DISTINCT FROM OLD.check_id
     OR NEW.category IS DISTINCT FROM OLD.category
     OR NEW.identifier_hash IS DISTINCT FROM OLD.identifier_hash
     OR NEW.identifier_masked IS DISTINCT FROM OLD.identifier_masked
     OR NEW.result IS DISTINCT FROM OLD.result
     OR NEW.databases_queried IS DISTINCT FROM OLD.databases_queried
     OR NEW.email IS DISTINCT FROM OLD.email
     OR NEW.marketing_opt_in IS DISTINCT FROM OLD.marketing_opt_in
     OR NEW.record_hash IS DISTINCT FROM OLD.record_hash
     OR NEW.created_at IS DISTINCT FROM OLD.created_at THEN
    RAISE EXCEPTION 'proof_records are immutable: only deleted_at may be changed';
  END IF;

  IF NEW.user_id IS DISTINCT FROM OLD.user_id AND OLD.user_id IS NOT NULL THEN
    RAISE EXCEPTION 'proof_records ownership cannot be reassigned';
  END IF;

  RETURN NEW;
END;
$$;

-- Public view of a record: only non-sensitive fields.
DROP FUNCTION IF EXISTS public.get_proof_record_public(text);
CREATE FUNCTION public.get_proof_record_public(p_id text)
RETURNS TABLE (
  id text,
  category text,
  result text,
  identifier_masked text,
  created_at timestamptz,
  record_hash text,
  deleted_at timestamptz,
  databases_queried jsonb
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT r.id, r.category, r.result, r.identifier_masked,
         r.created_at, r.record_hash, r.deleted_at, r.databases_queried
  FROM public.proof_records r
  WHERE r.id = upper(trim(p_id))
  LIMIT 1;
$$;

REVOKE ALL ON FUNCTION public.get_proof_record_public(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_proof_record_public(text) TO anon, authenticated, service_role;