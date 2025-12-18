-- Create shared_reports table for shareable stolen item report links
CREATE TABLE IF NOT EXISTS public.shared_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stolen_item_id UUID REFERENCES public.stolen_items(id) ON DELETE CASCADE,
  share_code TEXT UNIQUE NOT NULL,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.shared_reports ENABLE ROW LEVEL SECURITY;

-- Public can view shared reports
CREATE POLICY "Anyone can view shared reports" 
ON public.shared_reports 
FOR SELECT 
USING (true);

-- Service role can manage
CREATE POLICY "Service role can manage shared reports" 
ON public.shared_reports 
FOR ALL 
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Users can create shared reports for their stolen items
CREATE POLICY "Users can create shared reports for their items" 
ON public.shared_reports 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.stolen_items 
    WHERE id = stolen_item_id AND user_id = auth.uid()
  )
);

-- Create user_watchlist table for alerts
CREATE TABLE IF NOT EXISTS public.user_watchlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  item_type TEXT NOT NULL,
  identifier TEXT NOT NULL,
  description TEXT,
  alert_email BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, identifier)
);

-- Enable RLS
ALTER TABLE public.user_watchlist ENABLE ROW LEVEL SECURITY;

-- Users can manage their own watchlist
CREATE POLICY "Users can view own watchlist" 
ON public.user_watchlist 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own watchlist items" 
ON public.user_watchlist 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own watchlist items" 
ON public.user_watchlist 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own watchlist items" 
ON public.user_watchlist 
FOR DELETE 
USING (auth.uid() = user_id);

-- Service role can manage all
CREATE POLICY "Service role can manage all watchlist items" 
ON public.user_watchlist 
FOR ALL 
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Add index for efficient lookup
CREATE INDEX IF NOT EXISTS idx_user_watchlist_user_id ON public.user_watchlist(user_id);
CREATE INDEX IF NOT EXISTS idx_user_watchlist_identifier ON public.user_watchlist(identifier);
CREATE INDEX IF NOT EXISTS idx_shared_reports_share_code ON public.shared_reports(share_code);
CREATE INDEX IF NOT EXISTS idx_stolen_items_status ON public.stolen_items(status);
CREATE INDEX IF NOT EXISTS idx_stolen_items_item_type ON public.stolen_items(item_type);
CREATE INDEX IF NOT EXISTS idx_stolen_items_location ON public.stolen_items(location);