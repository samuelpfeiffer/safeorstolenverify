import { useState, useEffect } from 'react';
import { useNavigate } from '@/lib/router-compat';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { useAuth } from '@/lib/auth';
import { trackPageView } from '@/utils/analytics';
import { useToast } from '@/hooks/use-toast';

export const useAuthPageLogic = () => {
  const location = useSafeLocation();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const isAuthenticated = !!user;
  const { toast } = useToast();
  
  const searchParams = new URLSearchParams(location?.search || '');
  const initialMode = searchParams.get('tab') === 'register' ? 'signup' : 'signin';
  const isConfirmed = searchParams.get('confirmed') === 'true';
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);

  useEffect(() => {
    trackPageView(`Auth - ${mode === 'signin' ? 'Sign In' : 'Sign Up'}`);
  }, [mode]);

  // Handle email confirmation
  useEffect(() => {
    if (isConfirmed) {
      toast({
        title: "Email confirmed!",
        description: "Your email has been verified. You can now sign in to your account.",
        duration: 8000,
      });
      
      // Clean up URL
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete('confirmed');
      window.history.replaceState({}, '', cleanUrl.toString());
      setMode('signin');
    }
  }, [isConfirmed, toast]);

  // Handle successful authentication and redirect
  useEffect(() => {
    if (isAuthenticated && !loading && user) {
      toast({
        title: "Welcome!",
        description: "You have been signed in successfully. Redirecting to your dashboard...",
        duration: 3000,
      });
      
      const from = (location?.state as { from?: { pathname?: string } } | undefined)?.from?.pathname || '/dashboard';
      
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
    }
  }, [isAuthenticated, loading, user, navigate, location, toast]);

  const toggleMode = () => {
    const newMode = mode === 'signin' ? 'signup' : 'signin';
    setMode(newMode);
  };

  return {
    mode,
    loading,
    toggleMode,
    isOAuthFlow: false,
  };
};
