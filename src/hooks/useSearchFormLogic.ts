import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { usePendingVerification } from '@/hooks/usePendingVerification';
import { detectItemType } from '@/utils/itemTypeDetector';
import { validateSerialNumberSecurity, sanitizeInputSecurity } from '@/utils/simpleValidation';
import { handleSecureError, createSecureError } from '@/utils/errorHandling';

export const useSearchFormLogic = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { toast } = useToast();
  const { consumeSearch, remainingSearches, hasReachedLimit, isSubscribed } = useSearchLimits();
  const { isAuthenticated, user } = useUnifiedAuth();
  const { savePendingVerification } = usePendingVerification();

  const handleInputChange = (value: string) => {
    const sanitized = sanitizeInputSecurity(value);
    setInput(sanitized);
    // Clear error when user types
    if (error) setError('');
  };

  const handleSearch = async () => {
    // Clear previous errors
    setError('');
    
    // Validate input
    const validation = await validateSerialNumberSecurity(input);
    
    if (!validation.isValid) {
      const errorMessage = validation.errors[0];
      setError(errorMessage);
      const error = createSecureError(
        errorMessage,
        `Invalid input: ${input}`,
        'INVALID_INPUT'
      );
      handleSecureError(error, toast);
      return;
    }

    const cleanInput = sanitizeInputSecurity(input.trim());
    const itemType = detectItemType(cleanInput);

    // Handle non-authenticated users
    if (!isAuthenticated) {
      await savePendingVerification(cleanInput, itemType, 'buyer');
      toast({
        title: 'Sign up to start verifying',
        description: 'Create an account to verify items. 2 free checks, then $0.99/check or $2.99/month unlimited.',
      });
      navigate('/auth?tab=signup');
      return;
    }

    // Handle users who reached their limit
    if (hasReachedLimit && !isSubscribed) {
      toast({
        title: 'Upgrade for unlimited verifications',
        description: "You've used your free searches. Upgrade now for unlimited access.",
        variant: "destructive",
      });
      navigate('/pricing?reason=limit-reached&source=search');
      return;
    }

    // Consume search credit
    const canProceed = await consumeSearch();
    if (!canProceed) return;

    // Proceed with verification (to be implemented by parent component)
    return { cleanInput, itemType };
  };

  const clearInput = () => {
    setInput('');
    setError('');
  };

  return {
    input,
    isLoading,
    error,
    setIsLoading,
    handleInputChange,
    handleSearch,
    clearInput,
    remainingSearches,
    hasReachedLimit,
    isSubscribed,
    isAuthenticated,
    user,
  };
};
