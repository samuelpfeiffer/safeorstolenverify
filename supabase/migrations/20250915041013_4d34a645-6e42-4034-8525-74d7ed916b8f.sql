-- Create SEO monitoring and AI analysis tables

-- SEO keyword tracking table
CREATE TABLE IF NOT EXISTS public.seo_keywords (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  keyword TEXT NOT NULL,
  current_rank INTEGER,
  target_rank INTEGER DEFAULT 1,
  search_volume INTEGER,
  difficulty_score INTEGER CHECK (difficulty_score >= 0 AND difficulty_score <= 100),
  last_checked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Competitor analysis table
CREATE TABLE IF NOT EXISTS public.competitor_analysis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  competitor_domain TEXT NOT NULL,
  keyword TEXT NOT NULL,
  competitor_rank INTEGER,
  our_rank INTEGER,
  content_gap_analysis TEXT,
  ai_insights TEXT,
  last_analyzed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- SEO content suggestions from AI
CREATE TABLE IF NOT EXISTS public.ai_seo_suggestions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  suggestion_type TEXT NOT NULL, -- 'content', 'technical', 'keywords', 'meta'
  priority TEXT NOT NULL DEFAULT 'medium', -- 'high', 'medium', 'low'
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  implementation_notes TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'in_progress', 'completed', 'dismissed'
  ai_confidence_score DECIMAL(3,2) CHECK (ai_confidence_score >= 0 AND ai_confidence_score <= 1),
  expected_impact TEXT, -- 'high', 'medium', 'low'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE
);

-- SEO performance tracking
CREATE TABLE IF NOT EXISTS public.seo_performance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  organic_traffic INTEGER DEFAULT 0,
  keyword_rankings_improved INTEGER DEFAULT 0,
  keyword_rankings_declined INTEGER DEFAULT 0,
  total_keywords_tracking INTEGER DEFAULT 0,
  average_position DECIMAL(4,2),
  click_through_rate DECIMAL(4,2),
  ai_optimization_score INTEGER CHECK (ai_optimization_score >= 0 AND ai_optimization_score <= 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Content performance tracking
CREATE TABLE IF NOT EXISTS public.content_performance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_url TEXT NOT NULL,
  page_title TEXT,
  meta_description TEXT,
  target_keywords TEXT[],
  current_rankings JSONB, -- {keyword: rank}
  organic_traffic INTEGER DEFAULT 0,
  bounce_rate DECIMAL(4,2),
  time_on_page INTEGER, -- seconds
  ai_content_score INTEGER CHECK (ai_content_score >= 0 AND ai_content_score <= 100),
  optimization_suggestions TEXT[],
  last_analyzed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.seo_keywords ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.competitor_analysis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_seo_suggestions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_performance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_performance ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access (adjust based on your user role system)
CREATE POLICY "Admin can manage SEO keywords" ON public.seo_keywords FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin can manage competitor analysis" ON public.competitor_analysis FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin can manage AI SEO suggestions" ON public.ai_seo_suggestions FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin can manage SEO performance" ON public.seo_performance FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin can manage content performance" ON public.content_performance FOR ALL TO authenticated USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_seo_keywords_keyword ON public.seo_keywords(keyword);
CREATE INDEX IF NOT EXISTS idx_seo_keywords_last_checked ON public.seo_keywords(last_checked_at);
CREATE INDEX IF NOT EXISTS idx_competitor_analysis_keyword ON public.competitor_analysis(keyword);
CREATE INDEX IF NOT EXISTS idx_ai_seo_suggestions_priority ON public.ai_seo_suggestions(priority, status);
CREATE INDEX IF NOT EXISTS idx_seo_performance_date ON public.seo_performance(date);
CREATE INDEX IF NOT EXISTS idx_content_performance_url ON public.content_performance(page_url);

-- Create trigger function for updating timestamps
CREATE OR REPLACE FUNCTION public.update_seo_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add update trigger to seo_keywords
CREATE TRIGGER update_seo_keywords_updated_at
  BEFORE UPDATE ON public.seo_keywords
  FOR EACH ROW EXECUTE FUNCTION public.update_seo_updated_at();