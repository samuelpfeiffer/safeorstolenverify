import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSecuritySettings } from '@/hooks/useSecuritySettings';
import { securityService } from '@/services/securityService';

interface SecurityContextType {
  isSecurityEnabled: boolean;
  securityLevel: 'low' | 'medium' | 'high';
  enableAuditLogging: boolean;
  enableRateLimiting: boolean;
  sessionTimeoutMinutes: number;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { settings } = useSecuritySettings();
  const [securityState, setSecurityState] = useState<SecurityContextType>({
    isSecurityEnabled: true,
    securityLevel: 'high',
    enableAuditLogging: true,
    enableRateLimiting: true,
    sessionTimeoutMinutes: 30,
  });

  useEffect(() => {
    // Initialize security service
    securityService.initialize();
    
    if (settings) {
      setSecurityState({
        isSecurityEnabled: true,
        securityLevel: 'high',
        enableAuditLogging: settings.enableAuditLogging,
        enableRateLimiting: settings.enableRateLimiting,
        sessionTimeoutMinutes: settings.sessionTimeoutMinutes,
      });
    }
  }, [settings]);

  return (
    <SecurityContext.Provider value={securityState}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within SecurityProvider');
  }
  return context;
};