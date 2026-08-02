import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { markAuthListenerActive } from '@/utils/monitoring/authHealthCheck';

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
    // Setup auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setState({
          user: transformUser(session?.user || null),
          session: session ?? null,
          loading: false,
          initialized: true,
        });
      }
    );

    // Mark listener as active for health monitoring
    markAuthListenerActive();

    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setState({
        user: transformUser(session?.user || null),
        session: session ?? null,
        loading: false,
        initialized: true,
      });
    });

    return () => subscription.unsubscribe();
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

        return { success: false, error: errorMessage };
      }

      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      const errorMessage = 'An unexpected error occurred';
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
          emailRedirectTo: (() => {
            // Preserve the ?redirect= target (e.g. the MCP OAuth consent URL) through email confirmation.
            try {
              const raw = new URLSearchParams(window.location.search).get('redirect');
              if (raw) {
                const decoded = decodeURIComponent(raw);
                if (decoded.startsWith('/') && !decoded.startsWith('//')) {
                  return `${window.location.origin}/auth?verified=true&redirect=${encodeURIComponent(decoded)}`;
                }
              }
            } catch {
              /* fall through */
            }
            return `${window.location.origin}/auth?verified=true`;
          })(),
        },
      });

      setState(prev => ({ ...prev, loading: false }));

      if (error) {
        let errorMessage = 'Sign up failed';
        if (error.message.includes('already registered') || error.message.includes('User already registered')) {
          return { success: false, error: 'User already exists' };
        } else if (error.message.includes('Password')) {
          errorMessage = 'Password must be at least 6 characters';
        } else {
          errorMessage = error.message;
        }

        return { success: false, error: errorMessage };
      }

      // Welcome email removed - handled via database trigger

      return { success: true };
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      const errorMessage = error instanceof Error ? error.message : 'Sign up failed';
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
      
      await supabase.auth.signOut();
      
      // Always clear local state
      setState({
        user: null,
        session: null,
        loading: false,
        initialized: true,
      });
    } catch (error) {
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
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      const errorMessage = 'Failed to send reset email';
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
