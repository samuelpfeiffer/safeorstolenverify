-- Add property verification tables for Recipero API integration

-- Table to store property verification results
CREATE TABLE public.property_verifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  property_address TEXT NOT NULL,
  property_type TEXT,
  verification_status TEXT NOT NULL DEFAULT 'pending',
  confidence_score INTEGER DEFAULT 0,
  recipero_report_id TEXT,
  api_response JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  data_retention_until TIMESTAMP WITH TIME ZONE DEFAULT (now() + interval '5 years')
);

-- Enable RLS on property verifications
ALTER TABLE public.property_verifications ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for property verifications
CREATE POLICY "Users can view their own property verifications" 
ON public.property_verifications 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own property verifications" 
ON public.property_verifications 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Table to track Recipero API usage
CREATE TABLE public.recipero_api_usage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  api_endpoint TEXT NOT NULL,
  request_count INTEGER DEFAULT 1,
  reset_time TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on API usage tracking
ALTER TABLE public.recipero_api_usage ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for API usage
CREATE POLICY "Users can view their own API usage" 
ON public.recipero_api_usage 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own API usage records" 
ON public.recipero_api_usage 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "System can manage API usage" 
ON public.recipero_api_usage 
FOR ALL 
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Add trigger for automatic timestamp updates on property verifications
CREATE TRIGGER update_property_verifications_updated_at
BEFORE UPDATE ON public.property_verifications
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Update verification_results table to support property types
ALTER TABLE public.verification_results 
ADD COLUMN IF NOT EXISTS property_address TEXT,
ADD COLUMN IF NOT EXISTS recipero_report_id TEXT;