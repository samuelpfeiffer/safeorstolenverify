-- AI Executive System Tables
CREATE TABLE IF NOT EXISTS public.ai_executives (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role TEXT NOT NULL, -- 'CEO', 'COO', 'CFO', 'CMO', 'CTO'
  status TEXT DEFAULT 'active',
  last_decision_at TIMESTAMP WITH TIME ZONE,
  decisions_count INTEGER DEFAULT 0,
  actions_taken INTEGER DEFAULT 0,
  success_rate NUMERIC DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.ai_executive_decisions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  executive_role TEXT NOT NULL,
  decision_type TEXT NOT NULL,
  decision_data JSONB NOT NULL,
  reasoning TEXT,
  confidence NUMERIC,
  priority TEXT DEFAULT 'medium',
  status TEXT DEFAULT 'pending', -- 'pending', 'approved', 'executed', 'failed'
  impact_score NUMERIC,
  executed_at TIMESTAMP WITH TIME ZONE,
  result JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.ai_executive_actions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  decision_id UUID REFERENCES public.ai_executive_decisions(id),
  executive_role TEXT NOT NULL,
  action_type TEXT NOT NULL,
  action_data JSONB NOT NULL,
  status TEXT DEFAULT 'pending',
  result JSONB,
  error TEXT,
  executed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.business_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_type TEXT NOT NULL,
  metric_value NUMERIC NOT NULL,
  metric_data JSONB,
  recorded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.ai_executives ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_executive_decisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_executive_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_metrics ENABLE ROW LEVEL SECURITY;

-- RLS Policies (Admin and Service Role access)
CREATE POLICY "Admin can view AI executives" ON public.ai_executives FOR SELECT USING (is_admin_user());
CREATE POLICY "Service role can manage AI executives" ON public.ai_executives FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin can view executive decisions" ON public.ai_executive_decisions FOR SELECT USING (is_admin_user());
CREATE POLICY "Service role can manage executive decisions" ON public.ai_executive_decisions FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin can view executive actions" ON public.ai_executive_actions FOR SELECT USING (is_admin_user());
CREATE POLICY "Service role can manage executive actions" ON public.ai_executive_actions FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin can view business metrics" ON public.business_metrics FOR SELECT USING (is_admin_user());
CREATE POLICY "Service role can manage business metrics" ON public.business_metrics FOR ALL USING (auth.role() = 'service_role');

-- Initialize AI Executives
INSERT INTO public.ai_executives (role, status) VALUES
  ('CEO', 'active'),
  ('COO', 'active'),
  ('CFO', 'active'),
  ('CMO', 'active'),
  ('CTO', 'active')
ON CONFLICT DO NOTHING;