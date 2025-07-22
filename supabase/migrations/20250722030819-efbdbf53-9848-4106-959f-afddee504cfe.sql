
-- Add CheckMEND v2 specific columns to verification_results table
ALTER TABLE verification_results 
ADD COLUMN checkmend_report_id TEXT,
ADD COLUMN due_diligence_data JSONB,
ADD COLUMN risk_assessment JSONB,
ADD COLUMN ownership_verification JSONB,
ADD COLUMN insurance_history JSONB,
ADD COLUMN network_status JSONB,
ADD COLUMN device_specifications JSONB;

-- Create CheckMEND API usage tracking table
CREATE TABLE checkmend_api_usage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  api_endpoint TEXT NOT NULL,
  request_count INTEGER DEFAULT 1,
  reset_time TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on checkmend_api_usage
ALTER TABLE checkmend_api_usage ENABLE ROW LEVEL SECURITY;

-- Create policies for checkmend_api_usage
CREATE POLICY "System can manage CheckMEND API usage" 
  ON checkmend_api_usage 
  FOR ALL 
  USING (auth.role() = 'service_role'::text)
  WITH CHECK (auth.role() = 'service_role'::text);

CREATE POLICY "Users can view their own CheckMEND API usage" 
  ON checkmend_api_usage 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own CheckMEND API usage records" 
  ON checkmend_api_usage 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create enhanced verification cache table for CheckMEND data
CREATE TABLE checkmend_verification_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  serial_number TEXT NOT NULL,
  item_type TEXT NOT NULL,
  cache_key TEXT NOT NULL UNIQUE,
  verification_data JSONB NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on checkmend_verification_cache
ALTER TABLE checkmend_verification_cache ENABLE ROW LEVEL SECURITY;

-- Create policies for checkmend_verification_cache
CREATE POLICY "System can manage verification cache" 
  ON checkmend_verification_cache 
  FOR ALL 
  USING (auth.role() = 'service_role'::text)
  WITH CHECK (auth.role() = 'service_role'::text);

-- Create function to clean expired cache entries
CREATE OR REPLACE FUNCTION clean_expired_checkmend_cache()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM checkmend_verification_cache 
  WHERE expires_at < now();
END;
$$;

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_checkmend_cache_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_checkmend_cache_updated_at_trigger
  BEFORE UPDATE ON checkmend_verification_cache
  FOR EACH ROW
  EXECUTE FUNCTION update_checkmend_cache_updated_at();

-- Add indexes for better performance
CREATE INDEX idx_checkmend_cache_serial_type ON checkmend_verification_cache(serial_number, item_type);
CREATE INDEX idx_checkmend_cache_expires ON checkmend_verification_cache(expires_at);
CREATE INDEX idx_checkmend_api_usage_user_endpoint ON checkmend_api_usage(user_id, api_endpoint);
