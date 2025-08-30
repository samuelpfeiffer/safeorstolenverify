-- Set up admin role for support@safeorstolen.com
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role 
FROM auth.users 
WHERE email = 'support@safeorstolen.com'
ON CONFLICT (user_id, role) DO NOTHING;

-- Update system configuration for support email
INSERT INTO public.system_configuration (config_key, config_value, description)
VALUES (
  'support_email',
  '"support@safeorstolen.com"'::jsonb,
  'Official support email address'
)
ON CONFLICT (config_key) DO UPDATE SET
  config_value = '"support@safeorstolen.com"'::jsonb,
  updated_at = now();