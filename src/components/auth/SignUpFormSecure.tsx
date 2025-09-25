import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/lib/auth';
import { useSecureSignUpForm, getMobileErrorMessage, SecureSignUpFormData } from '@/hooks/useSecureFormValidation';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface SignUpFormSecureProps {
  onSuccess?: () => void;
}

export const SignUpFormSecure = ({ onSuccess }: SignUpFormSecureProps) => {
  const { signUp, loading: authLoading, user } = useAuth();
  const { toast } = useToast();
  const isAuthenticated = !!user;
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();
  
  const form = useSecureSignUpForm({
    enableMobileOptimizations: isMobile,
    enableRealTimeValidation: true,
    enableSecurityChecks: true
  });

  // Check if user is already authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      onSuccess?.();
    }
  }, [isAuthenticated, user, onSuccess]);

  const handleSignUpFormSubmit = async (data: SecureSignUpFormData) => {
    setIsLoading(true);
    
    try {
      const result = await signUp(data.email, data.password, data.fullName);
      
      if (result.success) {
        // Show success message immediately
        toast({
          title: "🎉 Account Created Successfully!",
          description: "Thank you for signing up! Please check your email to verify your account, then sign in.",
          duration: 8000,
        });
        
        // Reset form and call success callback
        form.reset();
        onSuccess?.();
        
      } else {
        toast({
          title: "Sign up failed",
          description: result.error || "Please check your information and try again.",
          variant: "destructive",
        });
      }
      
    } catch (error: any) {
      console.error('Sign up error:', error);
      toast({
        title: "Sign up failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentlyLoading = isLoading || authLoading;

  // Don't show signup form if user is already authenticated
  if (isAuthenticated && user) {
    return null;
  }

  return (
    <form onSubmit={form.handleSubmit(handleSignUpFormSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="fullName" className="text-white">Full Name</Label>
        <Input
          {...form.register('fullName')}
          type="text"
          placeholder="Enter your full name"
          disabled={currentlyLoading}
          className="bg-gray-800 border-gray-600 text-white disabled:opacity-50"
        />
        {form.formState.errors.fullName && (
          <p className="text-red-400 text-sm mt-1">
            {getMobileErrorMessage(form.formState.errors.fullName.message || '', isMobile)}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-white">Email</Label>
        <Input
          {...form.register('email')}
          type="email"
          placeholder="Enter your email"
          disabled={currentlyLoading}
          className="bg-gray-800 border-gray-600 text-white disabled:opacity-50"
        />
        {form.formState.errors.email && (
          <p className="text-red-400 text-sm mt-1">
            {getMobileErrorMessage(form.formState.errors.email.message || '', isMobile)}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="password" className="text-white">Password</Label>
        <Input
          {...form.register('password')}
          type="password"
          placeholder="Create a password"
          disabled={currentlyLoading}
          className="bg-gray-800 border-gray-600 text-white disabled:opacity-50"
        />
        {form.formState.errors.password && (
          <p className="text-red-400 text-sm mt-1">
            {getMobileErrorMessage(form.formState.errors.password.message || '', isMobile)}
          </p>
        )}
        {form.passwordStrength && form.passwordStrength.score > 0 && (
          <div className="mt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400">Password Strength</span>
              <span className={cn('text-xs font-medium', form.passwordStrength.color)}>
                {form.passwordStrength.label}
              </span>
            </div>
            <Progress 
              value={form.passwordStrength.score} 
              className="h-2"
            />
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
        <Input
          {...form.register('confirmPassword')}
          type="password"
          placeholder="Confirm your password"
          disabled={currentlyLoading}
          className="bg-gray-800 border-gray-600 text-white disabled:opacity-50"
        />
        {form.formState.errors.confirmPassword && (
          <p className="text-red-400 text-sm mt-1">
            {getMobileErrorMessage(form.formState.errors.confirmPassword.message || '', isMobile)}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={currentlyLoading}
        className="w-full bg-sos-orange hover:bg-sos-orange/90 disabled:opacity-50"
      >
        {currentlyLoading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Creating Account...</span>
          </div>
        ) : (
          'Create Account'
        )}
      </Button>
    </form>
  );
};