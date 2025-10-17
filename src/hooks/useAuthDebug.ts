import { useUnifiedAuth } from './useUnifiedAuth';

export const useAuthDebug = () => {
  const authContext = useUnifiedAuth();
  
  // Auth debugging - only in development
  if (import.meta.env.DEV) {
    console.debug('Auth Debug - Context available:', !!authContext);
    console.debug('Auth Debug - User:', authContext?.user?.id);
    console.debug('Auth Debug - Loading:', authContext?.loading);
    console.debug('Auth Debug - Authenticated:', authContext?.isAuthenticated);
  }
  
  return authContext;
};
