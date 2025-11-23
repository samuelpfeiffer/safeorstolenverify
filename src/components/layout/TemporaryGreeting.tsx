/**
 * Temporary Greeting Component - Displays for 2 hours then disappears
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TemporaryGreeting = () => {
  const [isVisible, setIsVisible] = useState(false);
  const STORAGE_KEY = 'greeting_first_shown';
  const TWO_HOURS_MS = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

  useEffect(() => {
    const firstShown = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (!firstShown) {
      // First time showing - set timestamp
      localStorage.setItem(STORAGE_KEY, now.toString());
      setIsVisible(true);
    } else {
      // Check if 2 hours have passed
      const elapsed = now - parseInt(firstShown);
      if (elapsed < TWO_HOURS_MS) {
        setIsVisible(true);
      } else {
        // More than 2 hours - clean up storage
        localStorage.removeItem(STORAGE_KEY);
        setIsVisible(false);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
        >
          <div className="container mx-auto px-4 pb-2">
            <p className="text-xs text-muted-foreground/40 text-center">
              Hi Daniel Olson
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
