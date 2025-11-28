-- GSC OAuth Tokens Storage
CREATE TABLE IF NOT EXISTS gsc_oauth_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  access_token TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  scopes TEXT[],
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- GSC Performance Data Cache (avoid API rate limits)
CREATE TABLE IF NOT EXISTS gsc_performance_cache (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  data_type TEXT NOT NULL,
  query_params JSONB,
  data JSONB NOT NULL,
  fetched_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL
);

-- GSC URL Status Tracking
CREATE TABLE IF NOT EXISTS gsc_url_status (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  url TEXT NOT NULL UNIQUE,
  verdict TEXT,
  indexing_state TEXT,
  coverage_state TEXT,
  robots_txt_state TEXT,
  page_fetch_state TEXT,
  last_crawl_time TIMESTAMPTZ,
  google_canonical TEXT,
  user_canonical TEXT,
  crawled_as TEXT,
  checked_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- IndexNow Submission History
CREATE TABLE IF NOT EXISTS indexnow_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  urls TEXT[] NOT NULL,
  status TEXT NOT NULL,
  response JSONB,
  submitted_at TIMESTAMPTZ DEFAULT now()
);

-- RLS Policies
ALTER TABLE gsc_oauth_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE gsc_performance_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE gsc_url_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE indexnow_submissions ENABLE ROW LEVEL SECURITY;

-- Admin users can manage GSC tokens
CREATE POLICY "Admin users manage GSC tokens" ON gsc_oauth_tokens
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.email IN ('safeorstolenmail@gmail.com')
    )
  );

-- Admin users can view GSC cache
CREATE POLICY "Admin users view GSC cache" ON gsc_performance_cache
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.email IN ('safeorstolenmail@gmail.com')
    )
  );

-- Service role can manage cache
CREATE POLICY "Service role manages cache" ON gsc_performance_cache
  FOR ALL USING (auth.role() = 'service_role');

-- Admin users can view URL status
CREATE POLICY "Admin users view URL status" ON gsc_url_status
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.email IN ('safeorstolenmail@gmail.com')
    )
  );

-- Service role can manage URL status
CREATE POLICY "Service role manages URL status" ON gsc_url_status
  FOR ALL USING (auth.role() = 'service_role');

-- Admin users can view submissions
CREATE POLICY "Admin users view submissions" ON indexnow_submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.email IN ('safeorstolenmail@gmail.com')
    )
  );

-- Service role can manage submissions
CREATE POLICY "Service role manages submissions" ON indexnow_submissions
  FOR ALL USING (auth.role() = 'service_role');

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_gsc_url_status_url ON gsc_url_status(url);
CREATE INDEX IF NOT EXISTS idx_gsc_url_status_checked_at ON gsc_url_status(checked_at DESC);
CREATE INDEX IF NOT EXISTS idx_gsc_performance_cache_type ON gsc_performance_cache(data_type);
CREATE INDEX IF NOT EXISTS idx_gsc_performance_cache_expires ON gsc_performance_cache(expires_at);
CREATE INDEX IF NOT EXISTS idx_indexnow_submissions_date ON indexnow_submissions(submitted_at DESC);