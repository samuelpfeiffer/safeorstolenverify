
-- stolen_items
DROP POLICY IF EXISTS authenticated_read_reported_items ON public.stolen_items;
DROP POLICY IF EXISTS stolen_items_owner_read ON public.stolen_items;
DROP POLICY IF EXISTS stolen_items_admin_read ON public.stolen_items;
CREATE POLICY stolen_items_owner_read ON public.stolen_items
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
CREATE POLICY stolen_items_admin_read ON public.stolen_items
  FOR SELECT TO authenticated
  USING (public.is_admin_user());

-- blog_post_embeddings
DROP POLICY IF EXISTS blog_embeddings_write_auth ON public.blog_post_embeddings;
DROP POLICY IF EXISTS blog_embeddings_admin_write ON public.blog_post_embeddings;
CREATE POLICY blog_embeddings_admin_write ON public.blog_post_embeddings
  FOR ALL TO authenticated
  USING (public.is_admin_user())
  WITH CHECK (public.is_admin_user());

-- community_stories: hide email column
REVOKE SELECT (email) ON public.community_stories FROM anon, authenticated;

-- verification_searches: exclude anonymous (guest) sign-ins
DROP POLICY IF EXISTS authenticated_view_own_searches ON public.verification_searches;
DROP POLICY IF EXISTS authenticated_update_own_searches ON public.verification_searches;
DROP POLICY IF EXISTS authenticated_delete_own_searches ON public.verification_searches;
DROP POLICY IF EXISTS authenticated_insert_own_searches ON public.verification_searches;

CREATE POLICY authenticated_view_own_searches ON public.verification_searches
  FOR SELECT TO authenticated
  USING (
    (SELECT auth.uid()) = user_id
    AND COALESCE((auth.jwt() ->> 'is_anonymous')::boolean, false) = false
  );
CREATE POLICY authenticated_insert_own_searches ON public.verification_searches
  FOR INSERT TO authenticated
  WITH CHECK (
    (SELECT auth.uid()) = user_id
    AND COALESCE((auth.jwt() ->> 'is_anonymous')::boolean, false) = false
  );
CREATE POLICY authenticated_update_own_searches ON public.verification_searches
  FOR UPDATE TO authenticated
  USING (
    (SELECT auth.uid()) = user_id
    AND COALESCE((auth.jwt() ->> 'is_anonymous')::boolean, false) = false
  )
  WITH CHECK (
    (SELECT auth.uid()) = user_id
    AND COALESCE((auth.jwt() ->> 'is_anonymous')::boolean, false) = false
  );
CREATE POLICY authenticated_delete_own_searches ON public.verification_searches
  FOR DELETE TO authenticated
  USING (
    (SELECT auth.uid()) = user_id
    AND COALESCE((auth.jwt() ->> 'is_anonymous')::boolean, false) = false
  );

-- Revoke EXECUTE on sensitive SECURITY DEFINER functions
REVOKE EXECUTE ON FUNCTION public.get_complete_schema() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.generate_api_key() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.reset_monthly_verifications() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.clean_expired_pending_verifications() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.log_newsletter_access() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.handle_updated_at() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.update_notification_updated_at() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.update_stolen_items_updated_at() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.check_auth_rate_limit() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.check_enhanced_rate_limit(text, text, integer, integer, text) FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.check_secure_rate_limit(text, text, integer, integer) FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.validate_and_track_api_usage(text, text, text, text, text) FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.validate_api_key_access(uuid) FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.generate_unique_clean_slug(text, uuid) FROM anon, authenticated, PUBLIC;
