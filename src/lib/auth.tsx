import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { logAndSanitizeError } from '@/utils/errorSanitizer';
import { initializeSecureStorage } from '@/utils/secureStorage';

export interface AuthUser {
  id: string;
  email: string;
  fullName?: string;
  avatar?: string;
  emailVerified: boolean;
  createdAt: string;
}

export interface AuthState {
  user: AuthUser | null;
  session: Session | null;
  loading: boolean;
  initialized: boolean;
}

export interface AuthActions {
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
}

export type AuthContextType = AuthState & AuthActions;

const AuthContext = createContext<AuthContextType | null>(null);

const transformUser = (user: User | null): AuthUser | null => {
  if (!user) return null;
  
  return {
    id: user.id,
    email: user.email!,
    fullName: user.user_metadata?.full_name || user.user_metadata?.name,
    avatar: user.user_metadata?.avatar_url,
    emailVerified: user.email_confirmed_at !== null,
    createdAt: user.created_at,
  };
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
    initialized: false,
  });
  
  const { toast } = useToast();

  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const MAX_RETRIES = 3;
    const MOBILE_TIMEOUT = 5000; // 5 second timeout for mobile

    // Initialize secure storage with expiration
    initializeSecureStorage();

    // Mobile-optimized session initialization
    const getInitialSession = async () => {
      try {
        // Add timeout for mobile to prevent infinite loading
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Session timeout')), MOBILE_TIMEOUT)
        );
        
        const sessionPromise = supabase.auth.getSession();
        
        const result = await Promise.race([sessionPromise, timeoutPromise]) as any;
        const { data: { session }, error } = result;
        
        if (mounted) {
          if (error) {
            // Continue with no session rather than blocking
          }
          
          setState({
            user: transformUser(session?.user || null),
            session,
            loading: false,
            initialized: true,
          });
        }
      } catch (error) {
        if (mounted && retryCount < MAX_RETRIES) {
          retryCount++;
          setTimeout(() => getInitialSession(), 1000);
        } else if (mounted) {
          // Force initialization complete even if session failed
          setState({
            user: null,
            session: null,
            loading: false,
            initialized: true,
          });
        }
      }
    };

    // Listen for auth changes with error handling
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!mounted) return;

        setState({
          user: transformUser(session?.user || null),
          session,
          loading: false,
          initialized: true,
        });

        // Handle auth events with feedback
        if (event === 'SIGNED_IN') {
          const userName = session?.user?.user_metadata?.full_name || session?.user?.email?.split('@')[0] || 'there';
          toast({
            title: `🎉 Successfully Signed In!`,
            description: `Welcome back, ${userName}! You're ready to verify items.`,
            duration: 5000,
          });
        } else if (event === 'SIGNED_OUT') {
          toast({
            title: '👋 Signed Out',
            description: 'Successfully signed out of your account.',
            duration: 3000,
          });
        }
      }
    );

    getInitialSession();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [toast]);

  const signIn = async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        setState(prev => ({ ...prev, loading: false }));
        
        let errorMessage = 'Sign in failed';
        if (error.message.includes('Invalid login credentials')) {
          errorMessage = 'Invalid email or password';
        } else if (error.message.includes('Email not confirmed')) {
          errorMessage = 'Please check your email and click the verification link';
        } else {
          errorMessage = error.message;
        }

        toast({
          title: 'Sign in failed',
          description: errorMessage,
          variant: 'destructive',
        });

        return { success: false, error: errorMessage };
      }

      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      const errorMessage = 'An unexpected error occurred';
      
      toast({
        title: 'Sign in failed',
        description: errorMessage,
        variant: 'destructive',
      });

      return { success: false, error: errorMessage };
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
          emailRedirectTo: `${window.location.origin}/auth?verified=true`,
        },
      });

      setState(prev => ({ ...prev, loading: false }));

      if (error) {
        let errorMessage = 'Sign up failed';
        if (error.message.includes('already registered') || error.message.includes('User already registered')) {
          // Clear the form and suggest sign in instead
          toast({
            title: 'Account already exists',
            description: 'An account with this email already exists. Please sign in instead.',
            variant: 'destructive',
          });
          return { success: false, error: 'User already exists' };
        } else if (error.message.includes('Password')) {
          errorMessage = 'Password must be at least 6 characters';
        } else {
          errorMessage = error.message;
        }

        toast({
          title: 'Sign up failed',
          description: errorMessage,
          variant: 'destructive',
        });

        return { success: false, error: errorMessage };
      }

      // Send welcome email for new users
      if (data.user && !error) {
        console.log("User created successfully, sending welcome email...");
        
        try {
          await supabase.functions.invoke('send-welcome-email', {
            body: {
              email: data.user.email,
              fullName: fullName,
              userId: data.user.id
            }
          });
          // Success - email sent
        } catch (emailError) {
          // Don't fail the signup if email fails
          // Only log in development
          if (process.env.NODE_ENV === 'development') {
            console.error("Error sending welcome email:", emailError);
          }
        }
      }

      if (data.user && !data.session) {
        toast({
          title: '🎉 Account Created Successfully!',
          description: 'Please check your email and click the verification link to unlock your 4 free searches!',
          duration: 12000,
        });
      } else {
        toast({
          title: '🎉 Welcome to SafeOrStolen!',
          description: 'Account created! You now have 4 free verification searches to stay protected from stolen goods.',
          duration: 10000,
        });
      }

      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      const safeMessage = logAndSanitizeError(error, 'SignUp');
      
      toast({
        title: 'Sign up failed',
        description: safeMessage,
        variant: 'destructive',
      });

      return { success: false, error: safeMessage };
    }
  };

  const signOut = async () => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      // Clear sensitive localStorage data before signing out
      localStorage.removeItem('searchHistory');
      localStorage.removeItem('savedReceipts');
      localStorage.removeItem('userJourney');
      sessionStorage.clear();
      
      const { error } = await supabase.auth.signOut();
      
      if (error && process.env.NODE_ENV === 'development') {
        console.error('Sign out error:', error);
      }
      
      // Always clear local state regardless of API response
      setState({
        user: null,
        session: null,
        loading: false,
        initialized: true,
      });
      
      toast({
        title: 'Signed out',
        description: 'Successfully signed out.',
      });
    } catch (error) {
      console.error('Sign out error:', error);
      // Force clear state even if API fails
      setState({
        user: null,
        session: null,
        loading: false,
        initialized: true,
      });
      
      toast({
        title: 'Signed out',
        description: 'You have been signed out.',
      });
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth?reset=true`,
      });

      if (error) {
        toast({
          title: 'Reset failed',
          description: error.message,
          variant: 'destructive',
        });
        return { success: false, error: error.message };
      }

      toast({
        title: 'Reset email sent',
        description: 'Check your email for password reset instructions.',
      });

      return { success: true };
    } catch (error) {
      const errorMessage = 'Failed to send reset email';
      toast({
        title: 'Reset failed',
        description: errorMessage,
        variant: 'destructive',
      });
      return { success: false, error: errorMessage };
    }
  };

  const value: AuthContextType = {
    ...state,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    console.error('useAuth called outside AuthProvider - this should not happen in production');
    // Return a safe default instead of throwing to prevent entire app crash
    return {
      user: null,
      session: null,
      loading: false,
      initialized: false,
      signIn: async () => ({ success: false, error: 'Auth not initialized' }),
      signUp: async () => ({ success: false, error: 'Auth not initialized' }),
      signOut: async () => {},
      resetPassword: async () => ({ success: false, error: 'Auth not initialized' }),
    };
  }
  return context;
}

export function useAuthState(): AuthState {
  const { user, session, loading, initialized } = useAuth();
  return { user, session, loading, initialized };
}

// Convenience hooks
export function useUser(): AuthUser | null {
  const { user } = useAuth();
  return user;
}

export function useSession(): Session | null {
  const { session } = useAuth();
  return session;
}

export function useIsAuthenticated(): boolean {
  const { user, initialized } = useAuth();
  return initialized && user !== null;
}