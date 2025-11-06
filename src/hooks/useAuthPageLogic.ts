import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  
  console.log('🔐 AuthPageLogic state:', { isAuthenticated, loading, user: !!user });
  
  const searchParams = new URLSearchParams(location?.search || '');
  const initialMode = searchParams.get('tab') === 'register' ? 'signup' : 'signin';
  const isConfirmed = searchParams.get('confirmed') === 'true';
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);

  // Debug logging
  useEffect(() => {
    console.log('=== Secure Auth Page Logic State ===');
    console.log('Loading:', loading);
    console.log('Authenticated:', isAuthenticated);
    console.log('User:', user?.email);
    console.log('Mode:', mode);
    console.log('Is Confirmed:', isConfirmed);
  }, [loading, isAuthenticated, user, mode, isConfirmed]);

  useEffect(() => {
    trackPageView(`Auth - ${mode === 'signin' ? 'Sign In' : 'Sign Up'}`);
  }, [mode]);

  // Handle email confirmation
  useEffect(() => {
    if (isConfirmed) {
      console.log('Email confirmation detected');
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
      console.log('=== Secure Authentication Success Detected ===');
      console.log('User:', user.email);
      console.log('User ID:', user.id);
      
      // Show welcome message
      toast({
        title: "Welcome!",
        description: "You have been signed in successfully. Redirecting to your dashboard...",
        duration: 3000,
      });
      
      // Get redirect destination - prioritize dashboard for new users
      const from = location.state?.from?.pathname || '/dashboard';
      
      // Redirect after a short delay
      console.log('Redirecting to:', from);
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
    }
  }, [isAuthenticated, loading, user, navigate, location, toast]);

  const toggleMode = () => {
    const newMode = mode === 'signin' ? 'signup' : 'signin';
    console.log('Toggling mode from', mode, 'to', newMode);
    setMode(newMode);
  };

  return {
    mode,
    loading,
    toggleMode,
    isOAuthFlow: false,
  };
};
