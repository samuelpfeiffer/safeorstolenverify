import { useState, useEffect, useRef } from 'react';

interface UseTypingAnimationOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

/**
 * Optimized typing animation using requestAnimationFrame
 * to minimize main thread blocking and improve INP
 */
export const useTypingAnimation = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: UseTypingAnimationOptions) => {
  const [displayText, setDisplayText] = useState('');
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const lastUpdateRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let pauseTimeout: NodeJS.Timeout | null = null;
    let isPaused = false;

    const animate = (timestamp: number) => {
      if (isPaused) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const speed = isDeletingRef.current ? deletingSpeed : typingSpeed;
      
      if (timestamp - lastUpdateRef.current >= speed) {
        lastUpdateRef.current = timestamp;
        const currentWord = words[wordIndexRef.current];

        if (isDeletingRef.current) {
          charIndexRef.current--;
          setDisplayText(currentWord.substring(0, charIndexRef.current));
          
          if (charIndexRef.current === 0) {
            isDeletingRef.current = false;
            wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          }
        } else {
          charIndexRef.current++;
          setDisplayText(currentWord.substring(0, charIndexRef.current));
          
          if (charIndexRef.current === currentWord.length) {
            isPaused = true;
            pauseTimeout = setTimeout(() => {
              isPaused = false;
              isDeletingRef.current = true;
            }, pauseTime);
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (pauseTimeout) {
        clearTimeout(pauseTimeout);
      }
    };
  }, [words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};
