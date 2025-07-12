
import { useToast } from "@/hooks/use-toast";

export const useAuthErrorHandler = () => {
  const { toast } = useToast();

  const handleSignInError = (error: any) => {
    console.error("Sign in error:", error);
    
    if (error.message.includes("Email not confirmed")) {
      toast({
        title: "Email not confirmed",
        description: "Please check your email and click the confirmation link before signing in.",
        variant: "destructive",
      });
    } else if (error.message.includes("Invalid login credentials") || error.message.includes("Invalid credentials")) {
      toast({
        title: "Invalid credentials",
        description: "Please check your email and password and try again.",
        variant: "destructive",
      });
    } else if (error.message.includes("Email rate limit exceeded")) {
      toast({
        title: "Too many attempts",
        description: "Please wait a moment before trying again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Error signing in",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSignUpError = (error: any) => {
    console.error("Sign up error:", error);
    
    if (error.message.includes("User already registered")) {
      toast({
        title: "Account already exists",
        description: "An account with this email already exists. Please sign in instead.",
        variant: "destructive",
      });
    } else if (error.message.includes("Password should be at least")) {
      toast({
        title: "Password too weak",
        description: "Password should be at least 6 characters long.",
        variant: "destructive",
      });
    } else if (error.message.includes("Unable to validate email address")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Error creating account",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSignOutError = (error: any) => {
    console.error("Sign out error:", error);
    toast({
      title: "Error signing out",
      description: error.message,
      variant: "destructive",
    });
  };

  return {
    handleSignInError,
    handleSignUpError,
    handleSignOutError,
  };
};
