import { useState, useCallback } from 'react';
import { useSecureRateLimit } from '@/hooks/useSecureRateLimit';
import { useToast } from '@/hooks/use-toast';
import { sanitizeUserInput } from '@/utils/securitySanitization';

interface SecureSubmissionOptions {
  actionType: string;
  maxLength?: number;
  allowHtml?: boolean;
  rateLimitMax?: number;
  rateLimitWindow?: number;
}

export const useSecureFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { checkRateLimit } = useSecureRateLimit();
  const { toast } = useToast();

  const secureSubmit = useCallback(async (
    data: Record<string, any>,
    submitFunction: (sanitizedData: Record<string, any>) => Promise<any>,
    options: SecureSubmissionOptions
  ) => {
    const {
      actionType,
      maxLength = 1000,
      rateLimitMax = 5,
      rateLimitWindow = 60
    } = options;

    setIsSubmitting(true);

    try {
      // Check rate limiting first
      const rateLimitResult = await checkRateLimit(actionType, rateLimitMax, rateLimitWindow);
      
      if (!rateLimitResult.allowed) {
        return { success: false, error: 'Rate limit exceeded. Please try again later.' };
      }

      // Sanitize all string inputs
      const sanitizedData: Record<string, any> = {};
      
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string') {
          sanitizedData[key] = sanitizeUserInput(value, maxLength);
        } else {
          sanitizedData[key] = value;
        }
      }

      // Submit with sanitized data
      const result = await submitFunction(sanitizedData);
      
      return { success: true, data: result };
    } catch (error) {
      console.error(`Secure form submission failed for ${actionType}:`, error);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred';
      
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  }, [checkRateLimit, toast]);

  return {
    secureSubmit,
    isSubmitting
  };
};