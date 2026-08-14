CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

-- Human readable id: SOS-XXXX-XXXX using an alphabet without I, O, 0, 1
CREATE OR REPLACE FUNCTION public.generate_proof_record_id()
RETURNS text
LANGUAGE plpgsql
VOLATILE
SET search_path TO 'public', 'extensions'
AS $$
DECLARE
  alphabet text := '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  candidate text;
  part1 text;
  part2 text;
  i int;
BEGIN
  LOOP
    part1 := '';
    part2 := '';
    FOR i IN 1..4 LOOP
      part1 := part1 || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
      part2 := part2 || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
    END LOOP;
    candidate := 'SOS-' || part1 || '-' || part2;
    EXIT WHEN NOT EXISTS (SELECT 1 FROM public.proof_records WHERE id = candidate);
  END LOOP;
  RETURN candidate;
END;
$$;

CREATE TABLE public.proof_records (
  id text PRIMARY KEY DEFAULT public.generate_proof_record_id(),
  user_id uuid NULL,
  check_id uuid NULL,
  category text NOT NULL CHECK (category IN ('phone','vehicle','plate','serial','firearm','bike')),
  identifier_hash text NOT NULL,
  identifier_masked text NOT NULL,
  result text NOT NULL CHECK (result IN ('clean','flagged')),
  databases_queried jsonb NOT NULL DEFAULT '[]'::jsonb,
  seller_name text NULL,
  listing_source text NULL,
  meeting_location text NULL,
  purchase_price numeric NULL,
  record_hash text NOT NULL DEFAULT '',
  reveal_identifier boolean NOT NULL DEFAULT false,
  deleted_at timestamptz NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_proof_records_user_created ON public.proof_records (user_id, created_at DESC);

GRANT SELECT, INSERT, UPDATE ON public.proof_records TO authenticated;
GRANT INSERT ON public.proof_records TO anon;
GRANT ALL ON public.proof_records TO service_role;

ALTER TABLE public.proof_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners read their own proof records"
ON public.proof_records FOR SELECT TO authenticated
USING (user_id IS NOT NULL AND user_id = auth.uid());

CREATE POLICY "Anyone can create a proof record for themselves"
ON public.proof_records FOR INSERT TO anon, authenticated
WITH CHECK (user_id IS NULL OR user_id = auth.uid());

CREATE POLICY "Owners update their own proof records"
ON public.proof_records FOR UPDATE TO authenticated
USING (user_id IS NOT NULL AND user_id = auth.uid())
WITH CHECK (user_id IS NOT NULL AND user_id = auth.uid());

-- Tamper evidence: canonical JSON in a fixed key order, hashed on insert.
CREATE OR REPLACE FUNCTION public.proof_records_set_hash()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public', 'extensions'
AS $$
DECLARE
  canonical text;
BEGIN
  canonical :=
    '{"id":' || to_jsonb(NEW.id)::text ||
    ',"created_at":' || to_jsonb(to_char(NEW.created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"'))::text ||
    ',"category":' || to_jsonb(NEW.category)::text ||
    ',"identifier_hash":' || to_jsonb(NEW.identifier_hash)::text ||
    ',"result":' || to_jsonb(NEW.result)::text ||
    ',"databases_queried":' || COALESCE(NEW.databases_queried, '[]'::jsonb)::text ||
    ',"seller_name":' || COALESCE(to_jsonb(NEW.seller_name)::text, 'null') ||
    ',"listing_source":' || COALESCE(to_jsonb(NEW.listing_source)::text, 'null') ||
    ',"meeting_location":' || COALESCE(to_jsonb(NEW.meeting_location)::text, 'null') ||
    ',"purchase_price":' || COALESCE(to_jsonb(NEW.purchase_price)::text, 'null') ||
    '}';

  NEW.record_hash := encode(extensions.digest(canonical, 'sha256'), 'hex');
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_proof_records_set_hash
BEFORE INSERT ON public.proof_records
FOR EACH ROW EXECUTE FUNCTION public.proof_records_set_hash();

-- Immutability: only reveal_identifier, deleted_at, and a one-time
-- anonymous -> account attachment of user_id may ever change.
CREATE OR REPLACE FUNCTION public.proof_records_enforce_immutable()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  IF NEW.id IS DISTINCT FROM OLD.id
     OR NEW.check_id IS DISTINCT FROM OLD.check_id
     OR NEW.category IS DISTINCT FROM OLD.category
     OR NEW.identifier_hash IS DISTINCT FROM OLD.identifier_hash
     OR NEW.identifier_masked IS DISTINCT FROM OLD.identifier_masked
     OR NEW.result IS DISTINCT FROM OLD.result
     OR NEW.databases_queried IS DISTINCT FROM OLD.databases_queried
     OR NEW.seller_name IS DISTINCT FROM OLD.seller_name
     OR NEW.listing_source IS DISTINCT FROM OLD.listing_source
     OR NEW.meeting_location IS DISTINCT FROM OLD.meeting_location
     OR NEW.purchase_price IS DISTINCT FROM OLD.purchase_price
     OR NEW.record_hash IS DISTINCT FROM OLD.record_hash
     OR NEW.created_at IS DISTINCT FROM OLD.created_at THEN
    RAISE EXCEPTION 'proof_records are immutable: only reveal_identifier and deleted_at may be changed';
  END IF;

  IF NEW.user_id IS DISTINCT FROM OLD.user_id AND OLD.user_id IS NOT NULL THEN
    RAISE EXCEPTION 'proof_records ownership cannot be reassigned';
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_proof_records_immutable
BEFORE UPDATE ON public.proof_records
FOR EACH ROW EXECUTE FUNCTION public.proof_records_enforce_immutable();

-- Public verification page: non-sensitive fields only.
CREATE OR REPLACE FUNCTION public.get_proof_record_public(p_id text)
RETURNS TABLE (
  id text,
  created_at timestamptz,
  category text,
  identifier_masked text,
  result text,
  databases_queried jsonb,
  record_hash text,
  reveal_identifier boolean,
  is_deleted boolean
)
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT
    r.id,
    r.created_at,
    r.category,
    r.identifier_masked,
    r.result,
    r.databases_queried,
    r.record_hash,
    r.reveal_identifier,
    (r.deleted_at IS NOT NULL) AS is_deleted
  FROM public.proof_records r
  WHERE r.id = upper(trim(p_id))
  LIMIT 1;
$$;

REVOKE ALL ON FUNCTION public.get_proof_record_public(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_proof_record_public(text) TO anon, authenticated, service_role;

-- One-time attachment of an anonymous record to the signed-in account.
CREATE OR REPLACE FUNCTION public.claim_proof_record(p_id text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  updated int;
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN false;
  END IF;

  UPDATE public.proof_records
  SET user_id = auth.uid()
  WHERE id = upper(trim(p_id)) AND user_id IS NULL;

  GET DIAGNOSTICS updated = ROW_COUNT;
  RETURN updated > 0;
END;
$$;

REVOKE ALL ON FUNCTION public.claim_proof_record(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.claim_proof_record(text) TO authenticated, service_role;