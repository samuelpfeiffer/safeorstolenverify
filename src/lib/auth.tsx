import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

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

  useEffect(() => {
    const startTime = Date.now();
    console.log('[AuthProvider] ✓ Starting authentication initialization');
    let mounted = true;
    let authTimeout: NodeJS.Timeout;

    const initAuth = async () => {
      console.log('[AuthProvider] → Fetching initial session from Supabase');
      try {
        const sessionStart = Date.now();
        const { data: { session }, error } = await supabase.auth.getSession();
        const sessionTime = Date.now() - sessionStart;
        console.log(`[AuthProvider] ✓ Session fetched (${sessionTime}ms)`, { hasSession: !!session, error: error?.message });

        if (!mounted) {
          console.log('[AuthProvider] ⚠️ Component unmounted during session fetch');
          return;
        }

        if (error) {
          console.error('[AuthProvider] ✗ Error fetching session:', error);
          setState(prev => ({ ...prev, loading: false, initialized: true }));
          window.dispatchEvent(new Event('auth-ready'));
          return;
        }

        const totalTime = Date.now() - startTime;
        console.log(`[AuthProvider] ✓ Authentication initialized successfully (${totalTime}ms)`, {
          userId: session?.user?.id,
          email: session?.user?.email
        });
        
        setState({
          user: transformUser(session?.user || null),
          session: session ?? null,
          loading: false,
          initialized: true
        });
        
        // Signal that auth is ready
        window.dispatchEvent(new Event('auth-ready'));
      } catch (err) {
        const totalTime = Date.now() - startTime;
        console.error(`[AuthProvider] ✗ Failed to initialize auth (${totalTime}ms):`, err);
        if (mounted) {
          setState(prev => ({ ...prev, loading: false, initialized: true }));
          window.dispatchEvent(new Event('auth-ready'));
        }
      }
    };

    // Set up auth state listener
    console.log('[AuthProvider] → Setting up auth state change listener');
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;
        
        console.log(`[AuthProvider] ✓ Auth state changed: ${event}`, {
          userId: session?.user?.id,
          email: session?.user?.email
        });
        
        setState({
          user: transformUser(session?.user || null),
          session: session ?? null,
          loading: false,
          initialized: true
        });
      }
    );

    // Safety timeout for mobile - force initialization after 5 seconds
    authTimeout = setTimeout(() => {
      if (mounted && !state.initialized) {
        const totalTime = Date.now() - startTime;
        console.warn(`[AuthProvider] ⚠️ Auth initialization timeout (${totalTime}ms) - forcing initialized state`);
        setState(prev => ({ ...prev, loading: false, initialized: true }));
        window.dispatchEvent(new Event('auth-ready'));
      }
    }, 5000);

    initAuth();

    return () => {
      console.log('[AuthProvider] Cleaning up authentication system');
      mounted = false;
      clearTimeout(authTimeout);
      subscription?.unsubscribe();
    };
  }, []);

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

        console.error('[AUTH] Sign in failed:', errorMessage);
        return { success: false, error: errorMessage };
      }

      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      const errorMessage = 'An unexpected error occurred';
      console.error('[AUTH] Sign in exception:', errorMessage);
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
          console.error('[AUTH] User already exists');
          return { success: false, error: 'User already exists' };
        } else if (error.message.includes('Password')) {
          errorMessage = 'Password must be at least 6 characters';
        } else {
          errorMessage = error.message;
        }

        console.error('[AUTH] Sign up failed:', errorMessage);
        return { success: false, error: errorMessage };
      }

      // Send welcome email for new users
      if (data.user && !error) {
        console.log("[AUTH] User created successfully, sending welcome email...");
        
        try {
          await supabase.functions.invoke('send-welcome-email', {
            body: {
              email: data.user.email,
              fullName: fullName,
              userId: data.user.id
            }
          });
        } catch (emailError) {
          if (process.env.NODE_ENV === 'development') {
            console.error("[AUTH] Error sending welcome email:", emailError);
          }
        }
      }

      console.log('[AUTH] Sign up successful');
      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      const errorMessage = error instanceof Error ? error.message : 'Sign up failed';
      console.error('[AUTH] Sign up exception:', errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const signOut = async () => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      
      // Clear localStorage data before signing out
      localStorage.removeItem('user_journey');
      localStorage.removeItem('offline-queue');
      sessionStorage.clear();
      
      const { error } = await supabase.auth.signOut();
      
      if (error && process.env.NODE_ENV === 'development') {
        console.error('[AUTH] Sign out error:', error);
      }
      
      // Always clear local state regardless of API response
      setState({
        user: null,
        session: null,
        loading: false,
        initialized: true,
      });
      
      console.log('[AUTH] Signed out successfully');
    } catch (error) {
      console.error('[AUTH] Sign out exception:', error);
      // Force clear state even if API fails
      setState({
        user: null,
        session: null,
        loading: false,
        initialized: true,
      });
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth?reset=true`,
      });

      if (error) {
        console.error('[AUTH] Reset failed:', error.message);
        return { success: false, error: error.message };
      }

      console.log('[AUTH] Reset email sent successfully');
      return { success: true };
    } catch (error) {
      const errorMessage = 'Failed to send reset email';
      console.error('[AUTH] Reset exception:', errorMessage);
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
