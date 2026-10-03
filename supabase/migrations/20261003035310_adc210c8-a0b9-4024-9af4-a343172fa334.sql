CREATE POLICY "item photos owner read" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'item-photos' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "item photos owner insert" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'item-photos' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "item photos owner delete" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'item-photos' AND (storage.foldername(name))[1] = auth.uid()::text);