
-- Create table for storing verification results from external APIs
CREATE TABLE public.verification_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  serial_number TEXT NOT NULL,
  item_type TEXT NOT NULL,
  verification_status TEXT NOT NULL CHECK (verification_status IN ('safe', 'stolen', 'lost', 'unknown', 'error')),
  api_source TEXT NOT NULL,
  api_response JSONB,
  confidence_score INTEGER DEFAULT 0 CHECK (confidence_score >= 0 AND confidence_score <= 100),
  verified_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies
ALTER TABLE public.verification_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own verification results" 
  ON public.verification_results 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own verification results" 
  ON public.verification_results 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create table for API rate limiting
CREATE TABLE public.api_usage_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  api_endpoint TEXT NOT NULL,
  request_count INTEGER DEFAULT 1,
  reset_time TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.api_usage_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own API usage" 
  ON public.api_usage_logs 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own API usage logs" 
  ON public.api_usage_logs 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_verification_results_user_id ON public.verification_results(user_id);
CREATE INDEX idx_verification_results_serial_number ON public.verification_results(serial_number);
CREATE INDEX idx_api_usage_logs_user_id ON public.api_usage_logs(user_id);
CREATE INDEX idx_api_usage_logs_reset_time ON public.api_usage_logs(reset_time);
