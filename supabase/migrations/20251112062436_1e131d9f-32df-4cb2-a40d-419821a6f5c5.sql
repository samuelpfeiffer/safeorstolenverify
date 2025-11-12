-- Content Generation System Tables

-- AI Generated Content Log
CREATE TABLE IF NOT EXISTS public.ai_generated_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content_type TEXT NOT NULL, -- 'blog', 'guide', 'comparison', 'faq'
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  meta_description TEXT,
  keywords TEXT[],
  target_competitors TEXT[],
  seo_score INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft', -- 'draft', 'published', 'optimized'
  ai_model TEXT,
  generation_prompt TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE,
  last_optimized_at TIMESTAMP WITH TIME ZONE
);

-- Content Issues Tracking
CREATE TABLE IF NOT EXISTS public.content_issues (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content_id UUID REFERENCES public.ai_generated_content(id) ON DELETE CASCADE,
  issue_type TEXT NOT NULL, -- 'broken_link', 'seo_score_low', 'missing_meta', 'duplicate_content', 'low_readability'
  severity TEXT NOT NULL, -- 'critical', 'high', 'medium', 'low'
  description TEXT NOT NULL,
  detected_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  fixed_at TIMESTAMP WITH TIME ZONE,
  fix_action TEXT,
  auto_fixed BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'open' -- 'open', 'fixing', 'fixed', 'ignored'
);

-- Competitor Analysis
CREATE TABLE IF NOT EXISTS public.competitor_analysis (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  competitor_name TEXT NOT NULL,
  competitor_url TEXT NOT NULL,
  content_gap TEXT, -- Topics they cover that we don't
  keyword_opportunities TEXT[],
  their_ranking INTEGER,
  our_ranking INTEGER,
  analysis_data JSONB,
  analyzed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Content Generation Queue
CREATE TABLE IF NOT EXISTS public.content_generation_queue (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content_type TEXT NOT NULL,
  topic TEXT NOT NULL,
  priority INTEGER DEFAULT 5, -- 1-10, 10 is highest
  target_keywords TEXT[],
  competitor_urls TEXT[],
  status TEXT DEFAULT 'queued', -- 'queued', 'generating', 'completed', 'failed'
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Content Performance Metrics
CREATE TABLE IF NOT EXISTS public.content_performance (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content_id UUID REFERENCES public.ai_generated_content(id) ON DELETE CASCADE,
  views INTEGER DEFAULT 0,
  organic_traffic INTEGER DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  avg_time_on_page INTEGER, -- seconds
  bounce_rate DECIMAL,
  keyword_rankings JSONB, -- { "keyword": rank }
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.ai_generated_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.competitor_analysis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_generation_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_performance ENABLE ROW LEVEL SECURITY;

-- Public read access for generated content
CREATE POLICY "Generated content is viewable by everyone"
ON public.ai_generated_content FOR SELECT
USING (status = 'published');

-- Admin policies (you may want to adjust this based on your admin setup)
CREATE POLICY "Service role can manage content"
ON public.ai_generated_content FOR ALL
USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage issues"
ON public.content_issues FOR ALL
USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage competitor analysis"
ON public.competitor_analysis FOR ALL
USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage queue"
ON public.content_generation_queue FOR ALL
USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage performance"
ON public.content_performance FOR ALL
USING (auth.role() = 'service_role');

-- Indexes for performance
CREATE INDEX idx_content_status ON public.ai_generated_content(status);
CREATE INDEX idx_content_slug ON public.ai_generated_content(slug);
CREATE INDEX idx_issues_status ON public.content_issues(status, severity);
CREATE INDEX idx_queue_status ON public.content_generation_queue(status, priority DESC);