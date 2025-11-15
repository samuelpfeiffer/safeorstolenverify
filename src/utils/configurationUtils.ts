
import { supabase } from '@/integrations/supabase/client';

// Default fallback configuration if database is not available
const DEFAULT_CONFIG = {
  rate_limits: {
    verification: { maxRequests: 10, windowMinutes: 60 },
    search: { maxRequests: 10, windowMinutes: 60 },
    profile_update: { maxRequests: 10, windowMinutes: 60 },
    search_history: { maxRequests: 100, windowMinutes: 60 }
  },
  search_limits: {
    free_tier: { total_searches: 2, reset_period: '14_days' },
    basic_tier: { total_searches: 'unlimited', reset_period: 'monthly' },
    premium_tier: { total_searches: 'unlimited', reset_period: 'monthly' }
  },
  security_settings: {
    session_timeout_minutes: 60,
    enable_audit_logging: true,
    enable_rate_limiting: true,
    enable_secure_error_handling: true,
    data_retention: {
      verification_results: 5,
      audit_logs: 2,
      subscribers: 7
    }
  }
};

let cachedConfig: any = null;
let lastFetch: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getSystemConfiguration = async () => {
  // Return cached config if it's fresh
  if (cachedConfig && Date.now() - lastFetch < CACHE_DURATION) {
    return cachedConfig;
  }

  try {
    const { data, error } = await supabase
      .from('system_configuration')
      .select('config_key, config_value');

    if (error) {
      console.error('Error fetching system configuration, using defaults:', error);
      return DEFAULT_CONFIG;
    }

    if (data) {
      const configMap: any = {};
      data.forEach((item: any) => {
        configMap[item.config_key] = item.config_value;
      });

      cachedConfig = { ...DEFAULT_CONFIG, ...configMap };
      lastFetch = Date.now();
      return cachedConfig;
    }
  } catch (error) {
    console.error('Error fetching system configuration, using defaults:', error);
  }

  return DEFAULT_CONFIG;
};

export const getRateLimits = async () => {
  const config = await getSystemConfiguration();
  return config.rate_limits;
};

export const getSearchLimits = async () => {
  const config = await getSystemConfiguration();
  return config.search_limits;
};

export const getSecuritySettings = async () => {
  const config = await getSystemConfiguration();
  return config.security_settings;
};
