-- ═══════════════════════════════════════════════════════════════
-- AI AGENT AUTONOMOUS SYSTEM TABLES
-- ═══════════════════════════════════════════════════════════════

-- 1. AI Agent Runs - Track all agent executions
CREATE TABLE public.ai_agent_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'running', 'completed', 'failed')),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  input_data JSONB,
  output_data JSONB,
  error_message TEXT,
  tokens_used INTEGER DEFAULT 0,
  cost_estimate DECIMAL(10,4) DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. AI Recommendations - Store recommendations awaiting action
CREATE TABLE public.ai_recommendations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_name TEXT NOT NULL,
  category TEXT NOT NULL,
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('critical', 'high', 'medium', 'low')),
  title TEXT NOT NULL,
  description TEXT,
  action_data JSONB,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'dismissed', 'implemented')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ,
  reviewed_by UUID REFERENCES auth.users(id)
);

-- 3. AI Agent Learnings - Self-improvement patterns
CREATE TABLE public.ai_agent_learnings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_name TEXT NOT NULL,
  pattern_type TEXT NOT NULL,
  pattern_data JSONB NOT NULL,
  confidence_score INTEGER DEFAULT 50 CHECK (confidence_score >= 0 AND confidence_score <= 100),
  success_count INTEGER DEFAULT 0,
  failure_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. AI Content Queue - Generated content awaiting approval
CREATE TABLE public.ai_content_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_type TEXT NOT NULL CHECK (content_type IN ('blog', 'social', 'email', 'landing_page')),
  title TEXT,
  content TEXT,
  metadata JSONB,
  seo_score INTEGER DEFAULT 0 CHECK (seo_score >= 0 AND seo_score <= 100),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'approved', 'published', 'rejected')),
  scheduled_publish_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by TEXT DEFAULT 'ai-content-agent',
  reviewed_by UUID REFERENCES auth.users(id)
);

-- 5. Fraud Analysis - AI fraud detection results
CREATE TABLE public.fraud_analysis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id UUID REFERENCES public.stolen_items(id) ON DELETE CASCADE,
  fraud_probability INTEGER NOT NULL DEFAULT 0 CHECK (fraud_probability >= 0 AND fraud_probability <= 100),
  indicators JSONB,
  recommendation TEXT CHECK (recommendation IN ('approve', 'flag', 'hide', 'ban_user')),
  auto_action_taken TEXT,
  reviewed BOOLEAN DEFAULT FALSE,
  reviewed_by UUID REFERENCES auth.users(id),
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.ai_agent_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_agent_learnings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_content_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fraud_analysis ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Admin only access
CREATE POLICY "admin_manage_ai_agent_runs" ON public.ai_agent_runs
  FOR ALL USING (public.is_admin_user() OR auth.role() = 'service_role')
  WITH CHECK (public.is_admin_user() OR auth.role() = 'service_role');

CREATE POLICY "admin_manage_ai_recommendations" ON public.ai_recommendations
  FOR ALL USING (public.is_admin_user() OR auth.role() = 'service_role')
  WITH CHECK (public.is_admin_user() OR auth.role() = 'service_role');

CREATE POLICY "admin_manage_ai_agent_learnings" ON public.ai_agent_learnings
  FOR ALL USING (public.is_admin_user() OR auth.role() = 'service_role')
  WITH CHECK (public.is_admin_user() OR auth.role() = 'service_role');

CREATE POLICY "admin_manage_ai_content_queue" ON public.ai_content_queue
  FOR ALL USING (public.is_admin_user() OR auth.role() = 'service_role')
  WITH CHECK (public.is_admin_user() OR auth.role() = 'service_role');

CREATE POLICY "admin_manage_fraud_analysis" ON public.fraud_analysis
  FOR ALL USING (public.is_admin_user() OR auth.role() = 'service_role')
  WITH CHECK (public.is_admin_user() OR auth.role() = 'service_role');

-- Indexes for performance
CREATE INDEX idx_ai_agent_runs_agent_name ON public.ai_agent_runs(agent_name);
CREATE INDEX idx_ai_agent_runs_status ON public.ai_agent_runs(status);
CREATE INDEX idx_ai_agent_runs_created_at ON public.ai_agent_runs(created_at DESC);

CREATE INDEX idx_ai_recommendations_status ON public.ai_recommendations(status);
CREATE INDEX idx_ai_recommendations_priority ON public.ai_recommendations(priority);
CREATE INDEX idx_ai_recommendations_category ON public.ai_recommendations(category);

CREATE INDEX idx_ai_content_queue_status ON public.ai_content_queue(status);
CREATE INDEX idx_ai_content_queue_content_type ON public.ai_content_queue(content_type);

CREATE INDEX idx_fraud_analysis_report_id ON public.fraud_analysis(report_id);
CREATE INDEX idx_fraud_analysis_fraud_probability ON public.fraud_analysis(fraud_probability DESC);

-- Updated_at trigger for learnings
CREATE TRIGGER update_ai_agent_learnings_updated_at
  BEFORE UPDATE ON public.ai_agent_learnings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();