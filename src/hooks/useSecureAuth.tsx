import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType } from "@/types/auth";
import { useAuthState } from "./useAuthState";
import { secureSignIn, secureSignUp, secureSignOut } from "@/utils/auth/secureAuthOperations";
import { toast } from "@/components/ui/sonner";
import { AuthErrorBoundary } from "@/components/auth/AuthErrorBoundary";

const SecureAuthContext = createContext<AuthContextType | undefined>(undefined);

// Inner provider that safely uses hooks
const SecureAuthProviderInner = ({ children }: { children: React.ReactNode }) => {
  const authState = useAuthState();
  const { user, session, loading: authStateLoading, error: authError } = authState;
  const [operationLoading, setOperationLoading] = useState<boolean>(false);
  

  // Handle auth state errors
  useEffect(() => {
    if (authError) {
      console.error('Auth state error:', authError);
      toast.error("Authentication Error", {
        description: authError,
      });
    }
  }, [authError, toast]);

  const signIn = async (email: string, password: string) => {
    try {
      setOperationLoading(true);
      const result = await secureSignIn(email, password);
      
      if (result.error) {
        toast.error("Sign in failed", {
          description: result.error.message,
        });
        throw new Error(result.error.message);
      }
      
      return result;
    } catch (error: any) {
      throw error;
    } finally {
      setOperationLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setOperationLoading(true);
      const result = await secureSignUp(email, password, fullName);
      
      if (result.error) {
        toast.error("Sign up failed", {
          description: result.error.message,
        });
        throw new Error(result.error.message);
      }

      if (result.data?.user && !result.data?.session) {
        toast("Check your email", {
          description: "We've sent you a confirmation link. Please check your email and click the link to verify your account.",
          duration: 10000,
        });
      } else if (result.data?.session) {
        toast.success("Account created successfully!", {
          description: "Please complete the terms acceptance to finish registration.",
        });
      }
      
      return result;
    } catch (error: any) {
      throw error;
    } finally {
      setOperationLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setOperationLoading(true);
      await secureSignOut();
      
      toast("Signed out", {
        description: "You have been successfully signed out.",
      });
    } catch (error: any) {
      console.error("Unexpected error during secure sign out:", error);
      toast.error("Sign out failed", {
        description: "Unable to sign out. Please try again.",
      });
    } finally {
      setOperationLoading(false);
    }
  };

  const loading = authStateLoading || operationLoading;

  const value = {
    user,
    session,
    signIn,
    signUp,
    signOut,
    loading,
    isAuthenticated: !!user,
  };

  return <SecureAuthContext.Provider value={value}>{children}</SecureAuthContext.Provider>;
};

// Main provider with error boundary
export const SecureAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthErrorBoundary>
      <SecureAuthProviderInner>{children}</SecureAuthProviderInner>
    </AuthErrorBoundary>
  );
};

export const useSecureAuth = () => {
  const context = useContext(SecureAuthContext);
  if (context === undefined) {
    const error = new Error("useSecureAuth must be used within a SecureAuthProvider");
    console.error('Hook usage error:', error);
    throw error;
  }
  return context;
};