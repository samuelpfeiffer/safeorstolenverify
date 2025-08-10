
-- Create table to store Recipero API configurations
CREATE TABLE public.recipero_api_configs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  api_name TEXT NOT NULL UNIQUE, -- 'modelcheck', 'checkmend', 'claimscheck', 'nmpr'
  api_version TEXT NOT NULL,
  base_url TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  rate_limit_per_minute INTEGER DEFAULT 60,
  timeout_seconds INTEGER DEFAULT 30,
  retry_attempts INTEGER DEFAULT 3,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table to store enhanced verification results
CREATE TABLE public.enhanced_verification_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  serial_number TEXT NOT NULL,
  item_type TEXT NOT NULL, -- 'phone', 'laptop', 'tablet', etc.
  
  -- ModelCheck v2 results
  modelcheck_status TEXT, -- 'clean', 'stolen', 'blacklisted', 'error'
  modelcheck_brand TEXT,
  modelcheck_model TEXT,
  modelcheck_color TEXT,
  modelcheck_capacity TEXT,
  modelcheck_carrier TEXT,
  modelcheck_country TEXT,
  modelcheck_verification_date TIMESTAMP WITH TIME ZONE,
  modelcheck_raw_response JSONB,
  
  -- CheckMEND v2 results
  checkmend_status TEXT, -- 'clean', 'stolen', 'insurance_claim', 'error'
  checkmend_theft_status TEXT,
  checkmend_insurance_status TEXT,
  checkmend_claim_date TIMESTAMP WITH TIME ZONE,
  checkmend_police_report_number TEXT,
  checkmend_raw_response JSONB,
  
  -- ClaimsCheck v1 results
  claimscheck_status TEXT, -- 'no_claims', 'active_claim', 'settled_claim', 'error'
  claimscheck_claim_type TEXT,
  claimscheck_claim_amount DECIMAL(10,2),
  claimscheck_claim_date TIMESTAMP WITH TIME ZONE,
  claimscheck_insurer TEXT,
  claimscheck_raw_response JSONB,
  
  -- NMPR v1 results (optional)
  nmpr_status TEXT, -- 'registered', 'not_registered', 'error'
  nmpr_registration_date TIMESTAMP WITH TIME ZONE,
  nmpr_owner_notification_sent BOOLEAN DEFAULT false,
  nmpr_raw_response JSONB,
  
  -- Overall verification summary
  overall_status TEXT NOT NULL, -- 'safe', 'stolen', 'suspicious', 'error'
  risk_score INTEGER DEFAULT 0, -- 0-100 scale
  confidence_level TEXT DEFAULT 'medium', -- 'high', 'medium', 'low'
  verification_sources TEXT[], -- array of APIs that responded successfully
  
  -- Metadata
  ip_address INET,
  user_agent TEXT,
  processing_time_ms INTEGER,
  api_costs_usd DECIMAL(8,4) DEFAULT 0.00,
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table to track API usage and costs
CREATE TABLE public.recipero_api_usage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  api_name TEXT NOT NULL,
  serial_number TEXT NOT NULL,
  request_timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  response_status TEXT NOT NULL, -- 'success', 'error', 'timeout'
  response_time_ms INTEGER,
  cost_usd DECIMAL(8,4) DEFAULT 0.00,
  error_message TEXT,
  rate_limited BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default API configurations
INSERT INTO public.recipero_api_configs (api_name, api_version, base_url) VALUES
('modelcheck', 'v2', 'https://api.recipero.com/modelcheck/v2'),
('checkmend', 'v2', 'https://api.recipero.com/checkmend/v2'),
('claimscheck', 'v1', 'https://api.recipero.com/claimscheck/v1'),
('nmpr', 'v1', 'https://api.recipero.com/nmpr/v1');

-- Enable RLS on all tables
ALTER TABLE public.recipero_api_configs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enhanced_verification_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recipero_api_usage ENABLE ROW LEVEL SECURITY;

-- RLS policies for recipero_api_configs (admin only)
CREATE POLICY "Admin can manage API configs" 
  ON public.recipero_api_configs 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.uid() = id 
      AND email IN ('admin@safeorstolen.com', 'samandhisbigideas@gmail.com')
    )
  );

-- RLS policies for enhanced_verification_results
CREATE POLICY "Users can view their own verification results" 
  ON public.enhanced_verification_results 
  FOR SELECT 
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can create verification results" 
  ON public.enhanced_verification_results 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Admin can view all verification results" 
  ON public.enhanced_verification_results 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.uid() = id 
      AND email IN ('admin@safeorstolen.com', 'samandhisbigideas@gmail.com')
    )
  );

-- RLS policies for recipero_api_usage
CREATE POLICY "Users can view their own API usage" 
  ON public.recipero_api_usage 
  FOR SELECT 
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can create API usage records" 
  ON public.recipero_api_usage 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Admin can view all API usage" 
  ON public.recipero_api_usage 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.uid() = id 
      AND email IN ('admin@safeorstolen.com', 'samandhisbigideas@gmail.com')
    )
  );

-- Create indexes for better performance
CREATE INDEX idx_enhanced_verification_results_user_id ON public.enhanced_verification_results(user_id);
CREATE INDEX idx_enhanced_verification_results_serial_number ON public.enhanced_verification_results(serial_number);
CREATE INDEX idx_enhanced_verification_results_overall_status ON public.enhanced_verification_results(overall_status);
CREATE INDEX idx_enhanced_verification_results_created_at ON public.enhanced_verification_results(created_at);

CREATE INDEX idx_recipero_api_usage_user_id ON public.recipero_api_usage(user_id);
CREATE INDEX idx_recipero_api_usage_api_name ON public.recipero_api_usage(api_name);
CREATE INDEX idx_recipero_api_usage_created_at ON public.recipero_api_usage(created_at);
