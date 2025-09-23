import { useAuth } from '@/lib/auth';

export function useUnifiedAuth() {
  const auth = useAuth();
  
  return {
    user: auth.user,
    session: auth.session,
    loading: auth.loading,
    initialized: auth.initialized,
    isAuthenticated: auth.initialized && auth.user !== null,
    signIn: auth.signIn,
    signUp: auth.signUp,
    signOut: auth.signOut,
    resetPassword: auth.resetPassword,
  };
}