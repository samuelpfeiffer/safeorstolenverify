-- Create API keys table for external API access
CREATE TABLE IF NOT EXISTS public.external_api_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  api_key TEXT UNIQUE NOT NULL,
  key_name TEXT NOT NULL,
  permissions JSONB DEFAULT '{"check": true}'::jsonb,
  usage_count INTEGER DEFAULT 0,
  usage_limit INTEGER DEFAULT 1000,
  is_active BOOLEAN DEFAULT true,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create items database for verification
CREATE TABLE IF NOT EXISTS public.verification_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier TEXT NOT NULL,
  item_type TEXT NOT NULL CHECK (item_type IN ('imei', 'vin', 'serial')),
  status TEXT NOT NULL CHECK (status IN ('safe', 'lost', 'stolen', 'unknown')),
  message TEXT,
  reported_by UUID REFERENCES auth.users(id),
  verified_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create API usage tracking table
CREATE TABLE IF NOT EXISTS public.api_usage_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  api_key_id UUID REFERENCES public.external_api_keys(id) ON DELETE CASCADE,
  endpoint TEXT NOT NULL,
  identifier TEXT,
  response_status INTEGER,
  response_time_ms INTEGER,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_verification_items_identifier ON public.verification_items(identifier);
CREATE INDEX IF NOT EXISTS idx_verification_items_type ON public.verification_items(item_type);
CREATE INDEX IF NOT EXISTS idx_verification_items_status ON public.verification_items(status);
CREATE INDEX IF NOT EXISTS idx_external_api_keys_key ON public.external_api_keys(api_key);
CREATE INDEX IF NOT EXISTS idx_api_usage_tracking_api_key ON public.api_usage_tracking(api_key_id);

-- Enable RLS
ALTER TABLE public.external_api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.api_usage_tracking ENABLE ROW LEVEL SECURITY;

-- RLS policies for external_api_keys
CREATE POLICY "Users can manage their own API keys" ON public.external_api_keys
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage all API keys" ON public.external_api_keys
  FOR ALL USING (auth.role() = 'service_role');

-- RLS policies for verification_items
CREATE POLICY "Anyone can read verification items" ON public.verification_items
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create verification items" ON public.verification_items
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Users can update their own reported items" ON public.verification_items
  FOR UPDATE USING (auth.uid() = reported_by);

CREATE POLICY "Service role can manage all verification items" ON public.verification_items
  FOR ALL USING (auth.role() = 'service_role');

-- RLS policies for API usage tracking
CREATE POLICY "Service role can manage API usage tracking" ON public.api_usage_tracking
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "API key owners can view their usage" ON public.api_usage_tracking
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.external_api_keys 
      WHERE external_api_keys.id = api_usage_tracking.api_key_id 
      AND external_api_keys.user_id = auth.uid()
    )
  );

-- Create function to generate API key
CREATE OR REPLACE FUNCTION public.generate_api_key()
RETURNS TEXT AS $$
BEGIN
  RETURN 'sos_' || encode(gen_random_bytes(32), 'hex');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to validate API key and track usage
CREATE OR REPLACE FUNCTION public.validate_and_track_api_usage(
  p_api_key TEXT,
  p_endpoint TEXT,
  p_identifier TEXT DEFAULT NULL,
  p_ip_address TEXT DEFAULT NULL,
  p_user_agent TEXT DEFAULT NULL
) RETURNS JSONB AS $$
DECLARE
  v_key_record RECORD;
  v_usage_id UUID;
BEGIN
  -- Get API key record
  SELECT id, user_id, usage_count, usage_limit, is_active, expires_at
  INTO v_key_record
  FROM public.external_api_keys
  WHERE api_key = p_api_key;
  
  -- Check if key exists and is valid
  IF v_key_record.id IS NULL THEN
    RETURN jsonb_build_object('valid', false, 'error', 'Invalid API key');
  END IF;
  
  -- Check if key is active
  IF NOT v_key_record.is_active THEN
    RETURN jsonb_build_object('valid', false, 'error', 'API key is inactive');
  END IF;
  
  -- Check if key is expired
  IF v_key_record.expires_at IS NOT NULL AND v_key_record.expires_at < now() THEN
    RETURN jsonb_build_object('valid', false, 'error', 'API key has expired');
  END IF;
  
  -- Check usage limit
  IF v_key_record.usage_limit IS NOT NULL AND v_key_record.usage_count >= v_key_record.usage_limit THEN
    RETURN jsonb_build_object('valid', false, 'error', 'API key usage limit exceeded');
  END IF;
  
  -- Update usage count
  UPDATE public.external_api_keys
  SET usage_count = usage_count + 1,
      updated_at = now()
  WHERE id = v_key_record.id;
  
  -- Track API usage
  INSERT INTO public.api_usage_tracking (
    api_key_id, endpoint, identifier, ip_address, user_agent
  ) VALUES (
    v_key_record.id, p_endpoint, p_identifier, p_ip_address, p_user_agent
  ) RETURNING id INTO v_usage_id;
  
  RETURN jsonb_build_object(
    'valid', true,
    'api_key_id', v_key_record.id,
    'user_id', v_key_record.user_id,
    'usage_id', v_usage_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Insert some sample verification data
INSERT INTO public.verification_items (identifier, item_type, status, message) VALUES
  ('356938035643809', 'imei', 'safe', 'Device is clean and not reported stolen'),
  ('1HGBH41JXMN109186', 'vin', 'stolen', 'Vehicle reported stolen on 2024-01-15'),
  ('SN12345ABC', 'serial', 'lost', 'Item reported lost by owner'),
  ('987654321012345', 'imei', 'unknown', 'No records found for this device'),
  ('WBAVA33508P123456', 'vin', 'safe', 'Vehicle is clean and not reported stolen')
ON CONFLICT DO NOTHING;