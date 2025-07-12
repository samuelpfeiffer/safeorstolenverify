
-- Create a configuration table to store system-wide settings
CREATE TABLE IF NOT EXISTS public.system_configuration (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  config_key TEXT NOT NULL UNIQUE,
  config_value JSONB NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on the configuration table
ALTER TABLE public.system_configuration ENABLE ROW LEVEL SECURITY;

-- Create policy that allows admins to manage configuration (for now, allow service role)
CREATE POLICY "Service role can manage configuration" ON public.system_configuration
  FOR ALL 
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Insert default rate limiting configuration
INSERT INTO public.system_configuration (config_key, config_value, description) VALUES
  ('rate_limits', '{
    "verification": {"maxRequests": 4, "windowMinutes": "Infinity"},
    "search": {"maxRequests": 4, "windowMinutes": "Infinity"},
    "profile_update": {"maxRequests": 10, "windowMinutes": 60},
    "search_history": {"maxRequests": 100, "windowMinutes": 60}
  }', 'Rate limiting configuration for different actions'),
  ('search_limits', '{
    "free_tier": {"total_searches": 4, "reset_period": "never"},
    "basic_tier": {"total_searches": "unlimited", "reset_period": "monthly"},
    "premium_tier": {"total_searches": "unlimited", "reset_period": "monthly"}
  }', 'Search limit configuration for different subscription tiers'),
  ('security_settings', '{
    "session_timeout_minutes": 60,
    "enable_audit_logging": true,
    "enable_rate_limiting": true,
    "enable_secure_error_handling": true,
    "data_retention": {
      "verification_results": 5,
      "audit_logs": 2,
      "subscribers": 7
    }
  }', 'Security configuration settings');

-- Create trigger to automatically update the updated_at timestamp
CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.system_configuration
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
