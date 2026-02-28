import { useState, useRef, useCallback } from 'react';
import { detectIdentifierType, type DetectionResult } from '@/lib/aiDetection';

/**
 * Hook for debounced AI identifier detection.
 * Calls the AI edge function after the user stops typing for `delay` ms.
 */
export function useSmartDetection(delay = 600) {
  const [detection, setDetection] = useState<DetectionResult | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectionError, setDetectionError] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastInputRef = useRef('');

  const detect = useCallback((input: string) => {
    // Clear previous timer
    if (timerRef.current) clearTimeout(timerRef.current);

    const trimmed = input.trim();
    lastInputRef.current = trimmed;

    // Reset if input is too short
    if (trimmed.length < 3) {
      setDetection(null);
      setIsDetecting(false);
      setDetectionError(null);
      return;
    }

    setIsDetecting(true);
    setDetectionError(null);

    timerRef.current = setTimeout(async () => {
      try {
        const result = await detectIdentifierType(trimmed);
        // Only apply if input hasn't changed
        if (lastInputRef.current === trimmed) {
          setDetection(result);
          setIsDetecting(false);
        }
      } catch (err) {
        if (lastInputRef.current === trimmed) {
          setDetectionError(err instanceof Error ? err.message : 'Detection failed');
          setDetection(null);
          setIsDetecting(false);
        }
      }
    }, delay);
  }, [delay]);

  const reset = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDetection(null);
    setIsDetecting(false);
    setDetectionError(null);
    lastInputRef.current = '';
  }, []);

  return { detection, isDetecting, detectionError, detect, reset };
}
