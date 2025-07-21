
import { toast as toastFunction } from '@/hooks/use-toast';

export interface SecureError {
  message: string;
  code: string;
  details?: string;
  timestamp: number;
}

export const createSecureError = (
  message: string,
  details?: string,
  code: string = 'GENERAL_ERROR'
): SecureError => {
  return {
    message,
    code,
    details,
    timestamp: Date.now()
  };
};

export const handleSecureError = (
  error: SecureError | Error,
  toast: typeof toastFunction
) => {
  console.error('Secure error:', error);
  
  let message = 'An unexpected error occurred';
  let description = 'Please try again later';
  
  if ('code' in error) {
    message = error.message;
    description = error.details || description;
  } else if (error instanceof Error) {
    message = error.message;
  }
  
  toast({
    title: message,
    description,
    variant: "destructive",
  });
};

export const logSecureEvent = (event: string, data?: any) => {
  const logEntry = {
    event,
    data,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href
  };
  
  console.log('Security Event:', logEntry);
  
  // In production, send to monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to monitoring service
  }
};
