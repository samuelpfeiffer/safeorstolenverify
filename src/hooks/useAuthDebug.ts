
import { useUnifiedAuth } from './useUnifiedAuth';

export const useAuthDebug = () => {
  const authContext = useUnifiedAuth();
  
  console.log('Auth Debug - Context available:', !!authContext);
  console.log('Auth Debug - User:', authContext?.user?.id);
  console.log('Auth Debug - Loading:', authContext?.loading);
  console.log('Auth Debug - Authenticated:', authContext?.isAuthenticated);
  
  return authContext;
};
