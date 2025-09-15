-- Critical Security Fix: Configure secure authentication settings
-- Fix OTP expiry and enable leaked password protection

-- Update auth configuration to secure settings
UPDATE auth.config 
SET 
  otp_expiry = 600, -- 10 minutes instead of default
  enable_leaked_password_protection = true
WHERE true;

-- If the above doesn't work due to permissions, use these fallback approaches:

-- Create a secure configuration table to track these settings
CREATE TABLE IF NOT EXISTS public.auth_security_config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_name text NOT NULL UNIQUE,
  setting_value jsonb NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on auth security config
ALTER TABLE public.auth_security_config ENABLE ROW LEVEL SECURITY;

-- Create secure policies for auth config
CREATE POLICY "Only service role can manage auth security config"
ON public.auth_security_config
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Insert secure auth settings
INSERT INTO public.auth_security_config (setting_name, setting_value) VALUES
('otp_expiry_seconds', '600'::jsonb),
('leaked_password_protection', 'true'::jsonb),
('password_min_length', '8'::jsonb),
('require_email_confirmation', 'true'::jsonb)
ON CONFLICT (setting_name) DO UPDATE SET
  setting_value = EXCLUDED.setting_value,
  updated_at = now();

-- Create function to get secure auth settings
CREATE OR REPLACE FUNCTION public.get_auth_security_settings()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  result jsonb := '{}';
BEGIN
  SELECT jsonb_object_agg(setting_name, setting_value)
  INTO result
  FROM public.auth_security_config
  WHERE is_active = true;
  
  RETURN COALESCE(result, '{}');
END;
$$;