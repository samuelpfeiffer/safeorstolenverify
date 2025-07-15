// Compatibility layer for the new auth system
// This provides backward compatibility for existing components

import { useAuth, useIsAuthenticated } from '@/lib/auth';

export const useUnifiedAuth = () => {
  const auth = useAuth();
  const isAuthenticated = useIsAuthenticated();
  
  return {
    ...auth,
    isAuthenticated,
  };
};

export const useSecureAuth = useUnifiedAuth;