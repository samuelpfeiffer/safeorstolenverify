-- Create user_stats table for tracking searches and subscriptions
CREATE TABLE IF NOT EXISTS user_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  free_searches_used INTEGER DEFAULT 0,
  free_searches_limit INTEGER DEFAULT 2,
  free_searches_expiry TIMESTAMPTZ,
  is_subscribed BOOLEAN DEFAULT false,
  subscription_tier TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create search_history table
CREATE TABLE IF NOT EXISTS search_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  identifier TEXT NOT NULL,
  search_type TEXT NOT NULL,
  results JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create stolen_items table (main database)
CREATE TABLE IF NOT EXISTS stolen_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  imei TEXT,
  vin TEXT,
  serial_number TEXT,
  item_type TEXT NOT NULL,
  brand TEXT,
  model TEXT,
  description TEXT,
  stolen_date DATE,
  location TEXT,
  police_report_number TEXT,
  reported_by UUID REFERENCES auth.users(id),
  status TEXT DEFAULT 'stolen',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for fast searches
CREATE INDEX IF NOT EXISTS idx_stolen_items_imei ON stolen_items(imei) WHERE imei IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_stolen_items_vin ON stolen_items(vin) WHERE vin IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_stolen_items_serial ON stolen_items(serial_number) WHERE serial_number IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_search_history_user ON search_history(user_id);
CREATE INDEX IF NOT EXISTS idx_search_history_created ON search_history(created_at DESC);

-- Enable RLS
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE stolen_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_stats
CREATE POLICY "Users can view own stats"
ON user_stats FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update own stats"
ON user_stats FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own stats"
ON user_stats FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- RLS Policies for search_history
CREATE POLICY "Users can view own search history"
ON search_history FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own search history"
ON search_history FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own search history"
ON search_history FOR DELETE
USING (auth.uid() = user_id);

-- RLS Policies for stolen_items
CREATE POLICY "Anyone can search stolen items"
ON stolen_items FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can report stolen items"
ON stolen_items FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Users can update their own reports"
ON stolen_items FOR UPDATE
USING (auth.uid() = reported_by);

-- Service role full access
CREATE POLICY "Service role full access to user_stats"
ON user_stats FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Service role full access to search_history"
ON search_history FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Service role full access to stolen_items"
ON stolen_items FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_user_stats_updated_at
    BEFORE UPDATE ON user_stats
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_stolen_items_updated_at
    BEFORE UPDATE ON stolen_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();