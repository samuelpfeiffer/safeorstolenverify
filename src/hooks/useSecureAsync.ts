import React, { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseSecureAsyncOptions {
  onError?: (error: unknown) => void;
  showToast?: boolean;
  component?: string;
}

export const useSecureAsync = <T>(options: UseSecureAsyncOptions = {}) => {
  const { toast } = useToast();
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null
  });

  const execute = useCallback(async (asyncFn: () => Promise<T>) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const result = await asyncFn();
      setState({
        data: result,
        loading: false,
        error: null
      });
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      
      setState({
        data: null,
        loading: false,
        error: errorMessage
      });
      
      console.error(`Async error in ${options.component || 'unknown component'}:`, error);
      
      if (options.onError) {
        options.onError(error);
      }
      
      if (options.showToast !== false) {
        toast({
          title: "Operation Failed",
          description: errorMessage,
          variant: "destructive"
        });
      }
      
      return null;
    }
  }, [toast, options]);

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null
    });
  }, []);

  return {
    ...state,
    execute,
    reset
  };
};