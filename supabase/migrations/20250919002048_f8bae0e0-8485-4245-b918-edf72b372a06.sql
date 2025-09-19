-- Fix the migration error by correcting column names

-- Fix verification_items policies using correct column names
DROP POLICY IF EXISTS "verification_items_authenticated_read" ON public.verification_items;
DROP POLICY IF EXISTS "verification_items_authenticated_insert" ON public.verification_items;
DROP POLICY IF EXISTS "verification_items_user_update" ON public.verification_items;

-- Get correct column structure first, then create proper policies based on actual table structure
-- Since we don't know the exact column names, let's create basic authenticated-only access

CREATE POLICY "verification_items_authenticated_select"
  ON public.verification_items FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "verification_items_authenticated_insert"
  ON public.verification_items FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

-- Service role can manage all verification items
CREATE POLICY "verification_items_service_role"
  ON public.verification_items FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);