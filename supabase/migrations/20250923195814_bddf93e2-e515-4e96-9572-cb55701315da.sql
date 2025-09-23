-- Fix OTP expiry configuration
-- This addresses the "Auth OTP Long Expiry" security warning

-- Insert or update the OTP expiry configuration in system_configuration table
INSERT INTO public.system_configuration (config_key, config_value, updated_at)
VALUES ('otp_expiry_seconds', '600', NOW())  -- 10 minutes = 600 seconds
ON CONFLICT (config_key) 
DO UPDATE SET 
  config_value = '600',
  updated_at = NOW();

-- Also set email OTP expiry specifically
INSERT INTO public.system_configuration (config_key, config_value, updated_at)
VALUES ('email_otp_expiry_seconds', '600', NOW())
ON CONFLICT (config_key) 
DO UPDATE SET 
  config_value = '600',
  updated_at = NOW();

-- Set SMS OTP expiry specifically  
INSERT INTO public.system_configuration (config_key, config_value, updated_at)
VALUES ('sms_otp_expiry_seconds', '600', NOW())
ON CONFLICT (config_key) 
DO UPDATE SET 
  config_value = '600',
  updated_at = NOW();