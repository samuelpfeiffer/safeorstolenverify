-- Create external verification cache table for scraper results
CREATE TABLE IF NOT EXISTS external_verification_cache (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier TEXT NOT NULL,
  source TEXT NOT NULL,
  result JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);

-- Create unique index to prevent duplicate cache entries
CREATE UNIQUE INDEX IF NOT EXISTS idx_cache_identifier_source 
ON external_verification_cache(identifier, source);

-- Create index for efficient expiry cleanup
CREATE INDEX IF NOT EXISTS idx_cache_expiry 
ON external_verification_cache(expires_at);

-- Enable RLS
ALTER TABLE external_verification_cache ENABLE ROW LEVEL SECURITY;

-- Allow service role full access for edge functions
CREATE POLICY "Service role can manage cache"
ON external_verification_cache
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Function to cleanup expired cache entries (runs periodically)
CREATE OR REPLACE FUNCTION cleanup_expired_cache()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM external_verification_cache
  WHERE expires_at < NOW();
END;
$$;