-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can view stolen items" ON public.stolen_items;
DROP POLICY IF EXISTS "Authenticated users can report stolen items" ON public.stolen_items;
DROP POLICY IF EXISTS "Users can update their own reports" ON public.stolen_items;
DROP POLICY IF EXISTS "Service role can manage all stolen items" ON public.stolen_items;

-- Drop existing tables if they exist (cascade to drop dependencies)
DROP TABLE IF EXISTS public.user_stats CASCADE;
DROP TABLE IF EXISTS public.search_history CASCADE;
DROP TABLE IF EXISTS public.stolen_items CASCADE;

-- Create user_stats table for tracking free searches
CREATE TABLE public.user_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  free_searches_used INTEGER NOT NULL DEFAULT 0,
  free_searches_expiry TIMESTAMP WITH TIME ZONE,
  is_subscribed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create search_history table
CREATE TABLE public.search_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  identifier TEXT NOT NULL,
  search_type TEXT NOT NULL,
  results JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create stolen_items table
CREATE TABLE public.stolen_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  imei TEXT,
  vin TEXT,
  serial_number TEXT,
  item_type TEXT NOT NULL,
  brand TEXT,
  model TEXT,
  description TEXT,
  date_stolen TIMESTAMP WITH TIME ZONE,
  location TEXT,
  police_report_number TEXT,
  status TEXT NOT NULL DEFAULT 'reported',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Enable RLS on user_stats
ALTER TABLE public.user_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own stats"
  ON public.user_stats FOR SELECT
  USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own stats"
  ON public.user_stats FOR INSERT
  WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own stats"
  ON public.user_stats FOR UPDATE
  USING (auth.uid()::text = user_id::text);

CREATE POLICY "Service role can manage all user stats"
  ON public.user_stats FOR ALL
  USING (true);

-- Enable RLS on search_history
ALTER TABLE public.search_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own search history"
  ON public.search_history FOR SELECT
  USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own search history"
  ON public.search_history FOR INSERT
  WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Service role can manage all search history"
  ON public.search_history FOR ALL
  USING (true);

-- Enable RLS on stolen_items
ALTER TABLE public.stolen_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view all stolen items"
  ON public.stolen_items FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create stolen item reports"
  ON public.stolen_items FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Users can update their own stolen item reports"
  ON public.stolen_items FOR UPDATE
  USING (auth.uid()::text = user_id::text);

CREATE POLICY "Service role can manage all stolen item data"
  ON public.stolen_items FOR ALL
  USING (true);

-- Create indexes for better performance
CREATE INDEX idx_user_stats_user_id ON public.user_stats(user_id);
CREATE INDEX idx_search_history_user_id ON public.search_history(user_id);
CREATE INDEX idx_search_history_created_at ON public.search_history(created_at DESC);
CREATE INDEX idx_stolen_items_imei ON public.stolen_items(imei) WHERE imei IS NOT NULL;
CREATE INDEX idx_stolen_items_vin ON public.stolen_items(vin) WHERE vin IS NOT NULL;
CREATE INDEX idx_stolen_items_serial ON public.stolen_items(serial_number) WHERE serial_number IS NOT NULL;

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Create triggers for updated_at
CREATE TRIGGER set_user_stats_updated_at
  BEFORE UPDATE ON public.user_stats
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_stolen_items_updated_at
  BEFORE UPDATE ON public.stolen_items
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();