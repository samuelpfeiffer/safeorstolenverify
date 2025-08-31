
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { trackPageView } from '@/utils/analytics';
import { useToast } from '@/hooks/use-toast';

export const useAuthPageLogic = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const isAuthenticated = !!user;
  const { toast } = useToast();
  
  // Track authentication state for debugging in development
  if (process.env.NODE_ENV === 'development') {
    console.log('AuthPageLogic state:', { isAuthenticated, loading, user: !!user });
  }
  
  const searchParams = new URLSearchParams(location.search);
  const initialMode = searchParams.get('tab') === 'register' ? 'signup' : 'signin';
  const isConfirmed = searchParams.get('confirmed') === 'true';
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);

  // Debug logging in development only
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Auth Page State:', { loading, isAuthenticated, userEmail: user?.email, mode, isConfirmed });
    }
  }, [loading, isAuthenticated, user, mode, isConfirmed]);

  useEffect(() => {
    trackPageView(`Auth - ${mode === 'signin' ? 'Sign In' : 'Sign Up'}`);
  }, [mode]);

  // Handle email confirmation
  useEffect(() => {
    if (isConfirmed) {
      // Email confirmation detected
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
      // Authentication success detected
      
      // Show welcome message
      toast({
        title: "Welcome!",
        description: "You have been signed in successfully. Redirecting to your dashboard...",
        duration: 3000,
      });
      
      // Get redirect destination - prioritize dashboard for new users
      const from = location.state?.from?.pathname || '/dashboard';
      
      // Redirect after a short delay
      // Redirecting user to destination
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
    }
  }, [isAuthenticated, loading, user, navigate, location, toast]);

  const toggleMode = () => {
    const newMode = mode === 'signin' ? 'signup' : 'signin';
    // Toggle authentication mode
    setMode(newMode);
  };

  return {
    mode,
    loading,
    toggleMode,
    isOAuthFlow: false,
  };
};
