import React, { createContext, useContext, useEffect, useState } from 'react';
import { useEnhancedSecurity } from '@/hooks/useEnhancedSecurity';
import { useSecureRateLimit } from '@/hooks/useSecureRateLimit';
import { applySecurityHeaders, validateSecureContext } from '@/utils/securityHeaders';

interface SecurityContextType {
  isSecureContext: boolean;
  securityStatus: any;
  rateLimit: any;
  isLoading: boolean;
}

const SecurityContext = createContext<SecurityContextType | null>(null);

export const SecurityContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { securityStatus, isLoading } = useEnhancedSecurity();
  const rateLimit = useSecureRateLimit();
  const [isSecureContext, setIsSecureContext] = useState(false);

  useEffect(() => {
    // Apply security headers and validate context
    applySecurityHeaders();
    setIsSecureContext(validateSecureContext());
    
    // Set up CSP violation reporting
    document.addEventListener('securitypolicyviolation', (event) => {
      console.warn('CSP Violation:', {
        violatedDirective: event.violatedDirective,
        blockedURI: event.blockedURI,
        documentURI: event.documentURI,
        lineNumber: event.lineNumber
      });
      
      // In production, you'd send this to your monitoring service
    });

    return () => {
      document.removeEventListener('securitypolicyviolation', () => {});
    };
  }, []);

  const value: SecurityContextType = {
    isSecureContext,
    securityStatus,
    rateLimit,
    isLoading
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurityContext = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurityContext must be used within SecurityContextProvider');
  }
  return context;
};