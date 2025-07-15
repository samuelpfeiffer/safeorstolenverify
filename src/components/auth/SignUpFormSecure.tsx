
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { TermsAcceptance } from '@/components/auth/TermsAcceptance';
import { useAuth } from '@/lib/auth';
import { useTermsAcceptance } from '@/hooks/useTermsAcceptance';
import { useSecureSignUpForm, getMobileErrorMessage, SecureSignUpFormData } from '@/hooks/useSecureFormValidation';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface SignUpFormSecureProps {
  onSuccess?: () => void;
}

type SignUpStep = 'form' | 'terms';

export const SignUpFormSecure = ({ onSuccess }: SignUpFormSecureProps) => {
  const { signUp, loading: authLoading, user } = useAuth();
  const isAuthenticated = !!user;
  const { acceptTerms, isProcessing } = useTermsAcceptance();
  const [step, setStep] = useState<SignUpStep>('form');
  const [isLoading, setIsLoading] = useState(false);
  const [pendingSignUpData, setPendingSignUpData] = useState<SecureSignUpFormData | null>(null);
  const [createdUserId, setCreatedUserId] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const form = useSecureSignUpForm({
    enableMobileOptimizations: isMobile,
    enableRealTimeValidation: true,
    enableSecurityChecks: true
  });

  // Check if user is already authenticated via OAuth
  useEffect(() => {
    if (isAuthenticated && user) {
      const provider = user.app_metadata?.provider;
      if (provider === 'google') {
        console.log('OAuth user already authenticated, skipping signup form');
        onSuccess?.();
      }
    }
  }, [isAuthenticated, user, onSuccess]);

  const handleSignUpFormSubmit = async (data: SecureSignUpFormData) => {
    console.log('=== Secure Sign Up Form Submitted ===');
    setIsLoading(true);
    
    try {
      const result = await signUp(data.email, data.password, data.fullName);
      
      if (result.data?.user) {
        setCreatedUserId(result.data.user.id);
        setPendingSignUpData(data);
        setStep('terms');
        console.log('Account created, proceeding to terms acceptance');
      } else {
        console.log('Account creation pending email confirmation');
      }
      
    } catch (error) {
      console.error('Secure sign up failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTermsAccept = async () => {
    if (!createdUserId) {
      console.error('No user ID available for terms acceptance');
      return;
    }
    
    console.log('=== Terms Accepted, Recording Acceptance ===');
    setIsLoading(true);
    
    try {
      const termsResult = await acceptTerms(createdUserId);
      
      if (termsResult.success) {
        form.reset();
        setPendingSignUpData(null);
        setCreatedUserId(null);
        setStep('form');
        onSuccess?.();
      }
      
    } catch (error) {
      console.error('Terms acceptance failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSignUp = () => {
    setStep('form');
    setPendingSignUpData(null);
    setCreatedUserId(null);
  };

  const currentlyLoading = isLoading || authLoading || isProcessing;

  // Don't show signup form if user is already authenticated via OAuth
  if (isAuthenticated && user?.app_metadata?.provider === 'google') {
    return null;
  }

  if (step === 'terms') {
    return (
      <div className="w-full max-w-md mx-auto">
        <TermsAcceptance 
          onAccept={handleTermsAccept}
          onBack={handleBackToSignUp}
          isLoading={currentlyLoading}
        />
      </div>
    );
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
