import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TermsAcceptance } from '@/components/auth/TermsAcceptance';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useTermsAcceptance } from '@/hooks/useTermsAcceptance';
import { useSignUpForm, SignUpFormData } from '@/hooks/useFormValidation';

interface SignUpFormProps {
  onSuccess?: () => void;
}

type SignUpStep = 'form' | 'terms';

export const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
  const { signUp, loading: authLoading, user, isAuthenticated } = useUnifiedAuth();
  const { acceptTerms, isProcessing } = useTermsAcceptance();
  const [step, setStep] = useState<SignUpStep>('form');
  const [isLoading, setIsLoading] = useState(false);
  const [pendingSignUpData, setPendingSignUpData] = useState<SignUpFormData | null>(null);
  const [createdUserId, setCreatedUserId] = useState<string | null>(null);
  const form = useSignUpForm();

  // Check if user is already authenticated via OAuth
  useEffect(() => {
    if (isAuthenticated && user) {
      onSuccess?.();
    }
  }, [isAuthenticated, user, onSuccess]);

  const handleSignUpFormSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    
    try {
      // Create the account first
      const result = await signUp(data.email, data.password, data.fullName);
      
      if (result.success) {
        // For the new auth system, we'll use the current user
        if (user) {
          setCreatedUserId(user.id);
          setPendingSignUpData(data);
          setStep('terms');
        }
      }
      
    } catch (error) {
      console.error('Sign up failed:', error);
      // Error is handled in the signUp function
    } finally {
      setIsLoading(false);
    }
  };

  const handleTermsAccept = async () => {
    if (!createdUserId) {
      console.error('No user ID available for terms acceptance');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Accept terms with the created user's ID
      const termsResult = await acceptTerms(createdUserId);
      
      if (termsResult.success) {
        // Reset form and complete signup
        form.reset();
        setPendingSignUpData(null);
        setCreatedUserId(null);
        setStep('form');
        
        // Call success callback
        onSuccess?.();
      }
      
    } catch (error) {
      console.error('Terms acceptance failed:', error);
      // Stay on terms page if acceptance fails
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

  // Don't show signup form if user is already authenticated
  if (isAuthenticated && user) {
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
            {form.formState.errors.fullName.message}
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
            {form.formState.errors.email.message}
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
            {form.formState.errors.password.message}
          </p>
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
            {form.formState.errors.confirmPassword.message}
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