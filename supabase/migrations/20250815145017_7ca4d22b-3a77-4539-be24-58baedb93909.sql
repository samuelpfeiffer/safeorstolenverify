-- Create community stories table for user-submitted experiences
CREATE TABLE IF NOT EXISTS public.community_stories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  name TEXT,
  email TEXT,
  experience_type TEXT NOT NULL 
    CHECK (experience_type IN ('success', 'scam', 'close-call', 'recovery')),
  item_type TEXT NOT NULL 
    CHECK (item_type IN ('phone', 'vehicle', 'electronics', 'bike', 'firearm', 'other')),
  story TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT FALSE NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  search_terms TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('english', 
      COALESCE(story, '') || ' ' ||
      COALESCE(item_type, '') || ' ' ||
      COALESCE(experience_type, '')
    )
  ) STORED
);

-- Create index for full-text search
CREATE INDEX IF NOT EXISTS idx_community_stories_search ON public.community_stories USING GIN(search_terms);
CREATE INDEX IF NOT EXISTS idx_community_stories_approved ON public.community_stories (is_approved, created_at);

-- Enable RLS
ALTER TABLE public.community_stories ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view approved stories" 
ON public.community_stories 
FOR SELECT 
USING (is_approved = true);

CREATE POLICY "Anyone can submit stories" 
ON public.community_stories 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view their own submissions" 
ON public.community_stories 
FOR SELECT 
USING (auth.uid() = user_id);

-- Add trigger for updated_at
CREATE TRIGGER update_community_stories_updated_at
BEFORE UPDATE ON public.community_stories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();