
import { useToast } from '@/hooks/use-toast';

export interface SecureError {
  userMessage: string;
  logMessage: string;
  code?: string;
}

export const createSecureError = (
  userMessage: string,
  actualError: any,
  code?: string
): SecureError => {
  return {
    userMessage,
    logMessage: actualError?.message || String(actualError),
    code
  };
};

export const handleSecureError = (
  error: SecureError,
  toast: ReturnType<typeof useToast>['toast']
): void => {
  // Log the actual error for debugging (server-side in production)
  console.error(`[${error.code || 'ERROR'}] ${error.logMessage}`);

  // Show user-friendly message
  toast({
    title: "An error occurred",
    description: error.userMessage,
    variant: "destructive"
  });
};

export const SECURE_ERROR_MESSAGES = {
  VERIFICATION_FAILED: "Unable to verify item. Please try again later.",
  INVALID_INPUT: "Please check your input and try again.",
  RATE_LIMIT_EXCEEDED: "Too many requests. Please wait before trying again.",
  AUTHENTICATION_REQUIRED: "Please sign in to continue.",
  NETWORK_ERROR: "Network error. Please check your connection.",
  UNKNOWN_ERROR: "Something went wrong. Please try again."
} as const;
