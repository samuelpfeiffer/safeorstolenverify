import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { AuthContextType, AuthResponse } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client";
import { AuthErrorBoundary } from "@/components/auth/AuthErrorBoundary";
import { toast } from "@/components/ui/sonner";

const SecureAuthContext = createContext<AuthContextType | undefined>(undefined);

const SecureAuthProviderInner = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [session, setSession] = useState<AuthContextType["session"]>(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth: listener first, then getSession
  useEffect(() => {
    let isMounted = true;

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!isMounted) return;
      setSession(session);
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession()
      .then(({ data: { session }, error }) => {
        if (!isMounted) return;
        setSession(session);
        setUser(session?.user ?? null);
        if (error) {
          console.error("Error getting initial session:", error);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn: AuthContextType["signIn"] = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast.error("Sign in failed", { description: error.message });
    } else {
      toast.success("Welcome back!", { description: data.user?.email ?? "Signed in" });
    }

    const response: AuthResponse = {
      data: { user: data.user ?? null, session: data.session ?? null },
      error: error ? { message: error.message, status: (error as any).status } : undefined,
    };
    return response;
  };

  const signUp: AuthContextType["signUp"] = async (email, password, fullName) => {
    const redirectUrl = `${window.location.origin}/`;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: { full_name: fullName },
      },
    });

    if (error) {
      toast.error("Sign up failed", { description: error.message });
    } else if (data.user && !data.session) {
      toast("Check your email", {
        description: "We've sent you a confirmation link to verify your account.",
      });
    } else if (data.session) {
      toast.success("Account created!", { description: "You're signed in." });
    }

    const response: AuthResponse = {
      data: { user: data.user ?? null, session: data.session ?? null },
      error: error ? { message: error.message, status: (error as any).status } : undefined,
    };
    return response;
  };

  const signOut: AuthContextType["signOut"] = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Sign out failed", { description: error.message });
      return;
    }
    toast("Signed out", { description: "You have been signed out." });
  };

  const value = useMemo<AuthContextType>(() => ({
    user,
    session,
    signIn,
    signUp,
    signOut,
    loading,
    isAuthenticated: !!user,
  }), [user, session, loading]);

  return <SecureAuthContext.Provider value={value}>{children}</SecureAuthContext.Provider>;
};

export const SecureAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthErrorBoundary>
      <SecureAuthProviderInner>{children}</SecureAuthProviderInner>
    </AuthErrorBoundary>
  );
};

export const useSecureAuth = () => {
  const context = useContext(SecureAuthContext);
  if (!context) {
    throw new Error("useSecureAuth must be used within a SecureAuthProvider");
  }
  return context;
};
