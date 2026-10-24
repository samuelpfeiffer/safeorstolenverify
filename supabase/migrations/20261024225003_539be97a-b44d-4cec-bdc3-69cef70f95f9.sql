CREATE OR REPLACE FUNCTION public.claim_lifetime_free_check(p_user_id uuid, p_fingerprint text, p_ip_key text DEFAULT NULL) RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE used_count bigint; browser_count bigint; ip_count bigint;
BEGIN
  IF p_user_id IS NULL AND coalesce(p_fingerprint, '') = '' THEN RETURN false; END IF;
  -- Serialise all free claims, including transitions from browser to account.
  PERFORM pg_advisory_xact_lock(7311042401);
  SELECT coalesce(sum(check_count),0) INTO used_count FROM public.usage_tracking WHERE p_user_id IS NOT NULL AND user_id = p_user_id;
  SELECT coalesce(sum(check_count),0) INTO browser_count FROM public.usage_tracking WHERE fingerprint = p_fingerprint;
  IF used_count >= 1 OR browser_count >= 1 THEN RETURN false; END IF;
  IF p_user_id IS NULL AND p_ip_key IS NOT NULL THEN
    SELECT coalesce(sum(check_count),0) INTO ip_count FROM public.usage_tracking WHERE fingerprint = p_ip_key;
    IF ip_count >= 6 THEN RETURN false; END IF;
    INSERT INTO public.usage_tracking(fingerprint,user_id,check_count,last_check_at) VALUES(p_ip_key,NULL,1,now());
  END IF;
  INSERT INTO public.usage_tracking(fingerprint,user_id,check_count,last_check_at) VALUES(coalesce(nullif(p_fingerprint,''),'user:' || p_user_id::text),p_user_id,1,now());
  RETURN true;
END $$;
REVOKE ALL ON FUNCTION public.claim_lifetime_free_check(uuid,text,text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.claim_lifetime_free_check(uuid,text,text) TO service_role;