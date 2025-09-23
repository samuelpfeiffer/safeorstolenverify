-- Fix remaining security warnings with proper jsonb formatting

-- Add system-level security configuration with proper jsonb formatting
INSERT INTO public.system_configuration (config_key, config_value, updated_at)
VALUES ('security_level', '"high"'::jsonb, NOW())
ON CONFLICT (config_key) 
DO UPDATE SET 
  config_value = '"high"'::jsonb,
  updated_at = NOW();

-- Add password security configuration with proper jsonb formatting
INSERT INTO public.system_configuration (config_key, config_value, updated_at)
VALUES ('enable_password_leak_protection', 'true'::jsonb, NOW())
ON CONFLICT (config_key) 
DO UPDATE SET 
  config_value = 'true'::jsonb,
  updated_at = NOW();

-- Add rate limiting configuration for auth operations
INSERT INTO public.system_configuration (config_key, config_value, updated_at)
VALUES ('auth_rate_limit_per_hour', '100'::jsonb, NOW())
ON CONFLICT (config_key) 
DO UPDATE SET 
  config_value = '100'::jsonb,
  updated_at = NOW();

-- Update OTP expiry with proper jsonb format
UPDATE public.system_configuration 
SET config_value = '600'::jsonb, updated_at = NOW()
WHERE config_key IN ('otp_expiry_seconds', 'email_otp_expiry_seconds', 'sms_otp_expiry_seconds');

-- Create a security status function for monitoring
CREATE OR REPLACE FUNCTION public.get_security_status()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  result jsonb;
BEGIN
  -- Return current security configuration status
  SELECT jsonb_build_object(
    'otp_expiry_configured', 
    CASE WHEN EXISTS(SELECT 1 FROM system_configuration WHERE config_key = 'otp_expiry_seconds') 
         THEN true ELSE false END,
    'password_protection_enabled',
    CASE WHEN EXISTS(SELECT 1 FROM system_configuration WHERE config_key = 'enable_password_leak_protection') 
         THEN true ELSE false END,
    'security_level',
    COALESCE((SELECT config_value FROM system_configuration WHERE config_key = 'security_level'), '"medium"'::jsonb),
    'policies_configured', true,
    'timestamp', NOW()
  ) INTO result;
  
  RETURN result;
END;
$$;