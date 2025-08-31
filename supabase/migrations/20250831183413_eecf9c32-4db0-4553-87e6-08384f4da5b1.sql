-- Advanced AI System Database Tables

-- AI Analysis Sessions Table
CREATE TABLE public.ai_analysis_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  query TEXT NOT NULL,
  analysis_type VARCHAR(50) NOT NULL CHECK (analysis_type IN ('comprehensive', 'security', 'market', 'risk', 'pattern')),
  priority VARCHAR(20) NOT NULL CHECK (priority IN ('low', 'medium', 'high', 'critical')),
  status VARCHAR(20) NOT NULL DEFAULT 'processing' CHECK (status IN ('processing', 'completed', 'failed')),
  result TEXT,
  confidence DECIMAL(3,2),
  sources TEXT[],
  reasoning TEXT[],
  recommendations TEXT[],
  models_used TEXT[],
  processing_time_ms INTEGER,
  cost_estimate DECIMAL(10,6),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Deep Thinking Processes Table
CREATE TABLE public.deep_thinking_processes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.ai_analysis_sessions(id) ON DELETE CASCADE,
  process_id VARCHAR(255) NOT NULL UNIQUE,
  query TEXT NOT NULL,
  context JSONB,
  steps JSONB[] DEFAULT '{}',
  final_analysis TEXT,
  confidence DECIMAL(3,2),
  reasoning TEXT[],
  recommendations TEXT[],
  sources TEXT[],
  start_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  end_time TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Internet Search Results Table
CREATE TABLE public.internet_search_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.ai_analysis_sessions(id) ON DELETE CASCADE,
  search_query TEXT NOT NULL,
  search_type VARCHAR(50) NOT NULL,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  snippet TEXT,
  source VARCHAR(100) NOT NULL,
  confidence DECIMAL(3,2),
  relevance DECIMAL(3,2),
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- AI Model Performance Tracking
CREATE TABLE public.ai_model_performance (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  model_id VARCHAR(100) NOT NULL,
  model_name VARCHAR(200) NOT NULL,
  provider VARCHAR(100) NOT NULL,
  total_queries INTEGER DEFAULT 0,
  successful_queries INTEGER DEFAULT 0,
  total_latency_ms BIGINT DEFAULT 0,
  success_rate DECIMAL(3,2),
  average_latency_ms DECIMAL(10,2),
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(model_id)
);

-- User Feedback and Learning Data
CREATE TABLE public.ai_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.ai_analysis_sessions(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  helpful BOOLEAN NOT NULL,
  accurate BOOLEAN NOT NULL,
  actionable BOOLEAN NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comments TEXT,
  outcome_useful BOOLEAN DEFAULT false,
  outcome_prevented_fraud BOOLEAN DEFAULT false,
  outcome_saved_money BOOLEAN DEFAULT false,
  outcome_improved_safety BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Advanced AI Configuration
CREATE TABLE public.ai_system_config (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  config_key VARCHAR(100) NOT NULL UNIQUE,
  config_value JSONB NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  updated_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default AI configuration
INSERT INTO public.ai_system_config (config_key, config_value, description) VALUES
('model_preferences', '{"primary": "gpt-4o", "fallback": ["claude-3-opus", "gpt-4o-mini"], "specialized": {"security": "o1-preview", "market": "gpt-4o-mini"}}', 'AI model selection preferences'),
('search_providers', '{"enabled": ["google", "bing", "duckduckgo", "government"], "rate_limits": {"google": 100, "bing": 1000, "duckduckgo": -1}}', 'Internet search provider configuration'),
('deep_thinking_config', '{"max_thinking_time": 30000, "min_confidence_threshold": 0.7, "enable_multi_step": true}', 'Deep thinking engine configuration'),
('learning_config', '{"enable_continuous_learning": true, "feedback_weight": 0.3, "adaptation_frequency": 3600000}', 'Continuous learning system configuration');

-- Enable Row Level Security
ALTER TABLE public.ai_analysis_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deep_thinking_processes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.internet_search_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_model_performance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_system_config ENABLE ROW LEVEL SECURITY;

-- RLS Policies for AI Analysis Sessions
CREATE POLICY "Users can view their own AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR SELECT 
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can create AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can update their own AI analysis sessions" 
ON public.ai_analysis_sessions 
FOR UPDATE 
USING (auth.uid() = user_id OR user_id IS NULL);

-- RLS Policies for Deep Thinking Processes
CREATE POLICY "Users can access deep thinking processes for their sessions" 
ON public.deep_thinking_processes 
FOR ALL
USING (
  session_id IN (
    SELECT id FROM public.ai_analysis_sessions 
    WHERE user_id = auth.uid() OR user_id IS NULL
  )
);

-- RLS Policies for Search Results
CREATE POLICY "Users can access search results for their sessions" 
ON public.internet_search_results 
FOR ALL
USING (
  session_id IN (
    SELECT id FROM public.ai_analysis_sessions 
    WHERE user_id = auth.uid() OR user_id IS NULL
  )
);

-- RLS Policies for Model Performance (read-only for users)
CREATE POLICY "Users can view AI model performance" 
ON public.ai_model_performance 
FOR SELECT 
USING (true);

-- RLS Policies for Feedback
CREATE POLICY "Users can manage their own feedback" 
ON public.ai_feedback 
FOR ALL
USING (auth.uid() = user_id);

-- RLS Policies for System Config (read-only for users)
CREATE POLICY "Users can view active AI system config" 
ON public.ai_system_config 
FOR SELECT 
USING (is_active = true);

-- Create indexes for performance
CREATE INDEX idx_ai_sessions_user_id ON public.ai_analysis_sessions(user_id);
CREATE INDEX idx_ai_sessions_status ON public.ai_analysis_sessions(status);
CREATE INDEX idx_ai_sessions_created_at ON public.ai_analysis_sessions(created_at DESC);
CREATE INDEX idx_deep_thinking_session_id ON public.deep_thinking_processes(session_id);
CREATE INDEX idx_search_results_session_id ON public.internet_search_results(session_id);
CREATE INDEX idx_model_performance_model_id ON public.ai_model_performance(model_id);
CREATE INDEX idx_ai_feedback_session_id ON public.ai_feedback(session_id);
CREATE INDEX idx_ai_config_key ON public.ai_system_config(config_key);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_ai_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_ai_sessions_updated_at
  BEFORE UPDATE ON public.ai_analysis_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_ai_updated_at_column();

CREATE TRIGGER update_ai_config_updated_at
  BEFORE UPDATE ON public.ai_system_config
  FOR EACH ROW
  EXECUTE FUNCTION public.update_ai_updated_at_column();