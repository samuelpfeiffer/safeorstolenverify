import React, { useRef, useCallback } from 'react';

interface RequestOptions {
  timeout?: number;
  dedupe?: boolean;
  retries?: number;
}

interface PendingRequest {
  promise: Promise<any>;
  abortController: AbortController;
  timestamp: number;
}

export const useRequestManager = () => {
  const pendingRequests = useRef<Map<string, PendingRequest>>(new Map());
  const cache = useRef<Map<string, { data: any; timestamp: number; ttl: number }>>(new Map());
  const isMountedRef = useRef(true);

  const cleanup = useCallback(() => {
    // Cancel all pending requests
    pendingRequests.current.forEach(({ abortController }) => {
      abortController.abort();
    });
    pendingRequests.current.clear();
    
    // Clear cache
    cache.current.clear();
    isMountedRef.current = false;
  }, []);

  const getCacheKey = useCallback((fn: Function, args: any[]) => {
    return `${fn.name}-${JSON.stringify(args)}`;
  }, []);

  const isRequestPending = useCallback((key: string) => {
    return pendingRequests.current.has(key);
  }, []);

  const getFromCache = useCallback((key: string) => {
    const cached = cache.current.get(key);
    if (!cached) return null;
    
    const now = Date.now();
    if (now - cached.timestamp > cached.ttl) {
      cache.current.delete(key);
      return null;
    }
    
    return cached.data;
  }, []);

  const setCache = useCallback((key: string, data: any, ttl: number = 300000) => { // 5 minutes default
    cache.current.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }, []);

  const executeRequest = useCallback(async <T>(
    requestFn: (signal?: AbortSignal) => Promise<T>,
    key: string,
    options: RequestOptions = {}
  ): Promise<T | null> => {
    const {
      timeout = 10000,
      dedupe = true,
      retries = 1
    } = options;

    // Check cache first
    const cached = getFromCache(key);
    if (cached) {
      return cached;
    }

    // Check if request is already pending
    if (dedupe && isRequestPending(key)) {
      const pending = pendingRequests.current.get(key);
      if (pending) {
        try {
          return await pending.promise;
        } catch (error) {
          pendingRequests.current.delete(key);
          throw error;
        }
      }
    }

    let lastError: any;
    
    for (let attempt = 0; attempt <= retries; attempt++) {
      const abortController = new AbortController();
      
      // Set timeout
      const timeoutId = setTimeout(() => {
        abortController.abort();
      }, timeout);

      const requestPromise = (async () => {
        try {
          const result = await requestFn(abortController.signal);
          
          // Only update state if component is still mounted
          if (isMountedRef.current) {
            setCache(key, result);
          }
          
          return result;
        } finally {
          clearTimeout(timeoutId);
          pendingRequests.current.delete(key);
        }
      })();

      const pendingRequest: PendingRequest = {
        promise: requestPromise,
        abortController,
        timestamp: Date.now()
      };

      pendingRequests.current.set(key, pendingRequest);

      try {
        return await requestPromise;
      } catch (error: any) {
        lastError = error;
        pendingRequests.current.delete(key);
        
        // Don't retry if request was aborted or component unmounted
        if (error.name === 'AbortError' || !isMountedRef.current) {
          return null;
        }
        
        // Wait before retry (exponential backoff)
        if (attempt < retries) {
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        }
      }
    }

    throw lastError;
  }, [getFromCache, setCache, isRequestPending]);

  return {
    executeRequest,
    cleanup,
    isRequestPending,
    clearCache: () => cache.current.clear(),
    getPendingCount: () => pendingRequests.current.size
  };
};