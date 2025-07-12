
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSystemConfiguration } from './useSystemConfiguration';

interface SecuritySettings {
  enableAuditLogging: boolean;
  enableRateLimiting: boolean;
  enableInputValidation: boolean;
  enableSecureErrorHandling: boolean;
  logLevel: 'debug' | 'error';
  sessionTimeoutMinutes: number;
  dataRetention: {
    verification_results: number;
    audit_logs: number;
    subscribers: number;
  };
}

export const useSecuritySettings = () => {
  const { config, updateConfiguration, isLoading: configLoading } = useSystemConfiguration();
  const [settings, setSettings] = useState<SecuritySettings | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (config?.security_settings) {
      const isDevelopment = import.meta.env.DEV;
      
      setSettings({
        enableAuditLogging: config.security_settings.enable_audit_logging && !isDevelopment,
        enableRateLimiting: config.security_settings.enable_rate_limiting,
        enableInputValidation: true, // Always enabled
        enableSecureErrorHandling: config.security_settings.enable_secure_error_handling,
        logLevel: (isDevelopment ? 'debug' : 'error') as 'debug' | 'error',
        sessionTimeoutMinutes: config.security_settings.session_timeout_minutes,
        dataRetention: config.security_settings.data_retention
      });
    }
  }, [config]);

  const updateSetting = async (key: keyof SecuritySettings, value: boolean | string | number | object) => {
    try {
      if (!config) return false;

      const updatedSecuritySettings = {
        ...config.security_settings,
        [key === 'sessionTimeoutMinutes' ? 'session_timeout_minutes' : 
         key === 'enableAuditLogging' ? 'enable_audit_logging' :
         key === 'enableRateLimiting' ? 'enable_rate_limiting' :
         key === 'enableSecureErrorHandling' ? 'enable_secure_error_handling' :
         key === 'dataRetention' ? 'data_retention' : key]: value
      };

      const success = await updateConfiguration('security_settings', updatedSecuritySettings);
      
      if (success && settings) {
        setSettings({ ...settings, [key]: value });
      }
      
      return success;
    } catch (error) {
      console.error('Failed to update security setting:', error);
      toast({
        title: "Update failed",
        description: "Failed to update security setting. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const saveAllSettings = async () => {
    setIsLoading(true);
    try {
      if (!settings || !config) return false;

      const updatedSecuritySettings = {
        session_timeout_minutes: settings.sessionTimeoutMinutes,
        enable_audit_logging: settings.enableAuditLogging,
        enable_rate_limiting: settings.enableRateLimiting,
        enable_secure_error_handling: settings.enableSecureErrorHandling,
        data_retention: settings.dataRetention
      };

      const success = await updateConfiguration('security_settings', updatedSecuritySettings);
      
      if (success) {
        toast({
          title: "Settings saved",
          description: "Your security settings have been updated successfully.",
          variant: "default"
        });
      }
      
      return success;
    } catch (error) {
      console.error('Failed to save security settings:', error);
      toast({
        title: "Save failed",
        description: "Failed to save security settings. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const resetToDefaults = async () => {
    try {
      if (!config) return false;

      const defaultSecuritySettings = {
        session_timeout_minutes: 60,
        enable_audit_logging: true,
        enable_rate_limiting: true,
        enable_secure_error_handling: true,
        data_retention: {
          verification_results: 5,
          audit_logs: 2,
          subscribers: 7
        }
      };

      const success = await updateConfiguration('security_settings', defaultSecuritySettings);
      
      if (success) {
        toast({
          title: "Settings reset",
          description: "Security settings have been reset to defaults.",
          variant: "default"
        });
      }
      
      return success;
    } catch (error) {
      console.error('Failed to reset security settings:', error);
      toast({
        title: "Reset failed",
        description: "Failed to reset security settings. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  return {
    settings,
    updateSetting,
    saveAllSettings,
    resetToDefaults,
    isLoading: isLoading || configLoading
  };
};
