import React, { createContext, useContext, useEffect, useState } from 'react';
import { useEnhancedSecurity } from '@/hooks/useEnhancedSecurity';
import { useAuth } from '@/lib/auth';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle } from 'lucide-react';

interface EnhancedSecurityContextType {
  isSecure: boolean;
  hasAdminRole: boolean;
  sessionValid: boolean;
  securityWarnings: string[];
  logSecurityEvent: (event: string, details?: Record<string, any>) => Promise<void>;
  performSecurityCheck: () => Promise<void>;
}

const EnhancedSecurityContext = createContext<EnhancedSecurityContextType | undefined>(undefined);

export const EnhancedSecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const { securityStatus, logSecurityEvent, performSecurityCheck } = useEnhancedSecurity();
  const [showSecurityWarnings, setShowSecurityWarnings] = useState(false);

  // Show security warnings for admin users or when there are critical issues
  useEffect(() => {
    if (securityStatus.hasAdminRole || securityStatus.securityWarnings.length > 0) {
      setShowSecurityWarnings(true);
    }
  }, [securityStatus]);

  // Log user login/logout events
  useEffect(() => {
    if (user) {
      logSecurityEvent('USER_LOGIN', {
        user_id: user.id,
        email: user.email,
        login_time: new Date().toISOString()
      });
    } else {
      logSecurityEvent('USER_LOGOUT', {
        logout_time: new Date().toISOString()
      });
    }
  }, [user, logSecurityEvent]);

  const contextValue: EnhancedSecurityContextType = {
    isSecure: securityStatus.isSecure,
    hasAdminRole: securityStatus.hasAdminRole,
    sessionValid: securityStatus.sessionValid,
    securityWarnings: securityStatus.securityWarnings,
    logSecurityEvent,
    performSecurityCheck
  };

  return (
    <EnhancedSecurityContext.Provider value={contextValue}>
      {showSecurityWarnings && securityStatus.securityWarnings.length > 0 && (
        <div className="fixed top-4 right-4 z-50 max-w-md">
          <Alert variant="destructive" className="border-red-500">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <div className="font-semibold mb-2">Security Warnings:</div>
              <ul className="text-sm space-y-1">
                {securityStatus.securityWarnings.map((warning, index) => (
                  <li key={index}>• {warning}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      )}
      
      {securityStatus.isSecure && securityStatus.hasAdminRole && (
        <div className="fixed bottom-4 right-4 z-40">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
            <Shield className="h-3 w-3" />
            Admin Mode
          </div>
        </div>
      )}
      
      {children}
    </EnhancedSecurityContext.Provider>
  );
};

export const useEnhancedSecurityContext = () => {
  const context = useContext(EnhancedSecurityContext);
  if (!context) {
    throw new Error('useEnhancedSecurityContext must be used within EnhancedSecurityProvider');
  }
  return context;
};