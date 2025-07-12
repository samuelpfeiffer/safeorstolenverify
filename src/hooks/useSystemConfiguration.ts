
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SystemConfig {
  rate_limits: {
    verification: { maxRequests: number; windowMinutes: number | string };
    search: { maxRequests: number; windowMinutes: number | string };
    profile_update: { maxRequests: number; windowMinutes: number };
    search_history: { maxRequests: number; windowMinutes: number };
  };
  search_limits: {
    free_tier: { total_searches: number; reset_period: string };
    basic_tier: { total_searches: number | string; reset_period: string };
    premium_tier: { total_searches: number | string; reset_period: string };
  };
  security_settings: {
    session_timeout_minutes: number;
    enable_audit_logging: boolean;
    enable_rate_limiting: boolean;
    enable_secure_error_handling: boolean;
    data_retention: {
      verification_results: number;
      audit_logs: number;
      subscribers: number;
    };
  };
}

export const useSystemConfiguration = () => {
  const [config, setConfig] = useState<SystemConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchConfiguration = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('system_configuration')
        .select('config_key, config_value');

      if (error) {
        console.error('Error fetching system configuration:', error);
        return;
      }

      if (data) {
        const configMap: Partial<SystemConfig> = {};
        data.forEach((item: any) => {
          configMap[item.config_key as keyof SystemConfig] = item.config_value;
        });
        setConfig(configMap as SystemConfig);
      }
    } catch (error) {
      console.error('Error fetching system configuration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateConfiguration = async (key: keyof SystemConfig, value: any) => {
    try {
      const { error } = await supabase
        .from('system_configuration')
        .update({ 
          config_value: value,
          updated_at: new Date().toISOString()
        })
        .eq('config_key', key);

      if (error) {
        toast({
          title: "Configuration update failed",
          description: error.message,
          variant: "destructive"
        });
        return false;
      }

      // Update local state
      setConfig(prev => prev ? { ...prev, [key]: value } : null);
      
      toast({
        title: "Configuration updated",
        description: `${key} has been updated successfully.`,
        variant: "default"
      });
      
      return true;
    } catch (error) {
      console.error('Error updating configuration:', error);
      toast({
        title: "Configuration update failed",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
      return false;
    }
  };

  useEffect(() => {
    fetchConfiguration();
  }, []);

  return {
    config,
    isLoading,
    updateConfiguration,
    refreshConfiguration: fetchConfiguration
  };
};
