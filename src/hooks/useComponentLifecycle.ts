import { useRef, useEffect } from 'react';

export const useComponentLifecycle = () => {
  const isMountedRef = useRef(true);
  const timeoutsRef = useRef<Set<NodeJS.Timeout>>(new Set());
  const intervalsRef = useRef<Set<NodeJS.Timeout>>(new Set());
  const abortControllersRef = useRef<Set<AbortController>>(new Set());

  const createTimeout = (callback: () => void, delay: number): NodeJS.Timeout => {
    const timeoutId = setTimeout(() => {
      if (isMountedRef.current) {
        callback();
      }
      timeoutsRef.current.delete(timeoutId);
    }, delay);
    
    timeoutsRef.current.add(timeoutId);
    return timeoutId;
  };

  const createInterval = (callback: () => void, delay: number): NodeJS.Timeout => {
    const intervalId = setInterval(() => {
      if (isMountedRef.current) {
        callback();
      } else {
        clearInterval(intervalId);
        intervalsRef.current.delete(intervalId);
      }
    }, delay);
    
    intervalsRef.current.add(intervalId);
    return intervalId;
  };

  const createAbortController = (): AbortController => {
    const controller = new AbortController();
    abortControllersRef.current.add(controller);
    return controller;
  };

  const clearTimeout = (timeoutId: NodeJS.Timeout) => {
    global.clearTimeout(timeoutId);
    timeoutsRef.current.delete(timeoutId);
  };

  const clearInterval = (intervalId: NodeJS.Timeout) => {
    global.clearInterval(intervalId);
    intervalsRef.current.delete(intervalId);
  };

  const cleanup = () => {
    // Clear all timeouts
    timeoutsRef.current.forEach(id => global.clearTimeout(id));
    timeoutsRef.current.clear();

    // Clear all intervals
    intervalsRef.current.forEach(id => global.clearInterval(id));
    intervalsRef.current.clear();

    // Abort all controllers
    abortControllersRef.current.forEach(controller => controller.abort());
    abortControllersRef.current.clear();

    isMountedRef.current = false;
  };

  useEffect(() => {
    return cleanup;
  }, []);

  return {
    isMounted: () => isMountedRef.current,
    createTimeout,
    createInterval,
    createAbortController,
    clearTimeout,
    clearInterval,
    cleanup
  };
};