import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useVoiceSearch } from '@/hooks/useVoiceSearch';
import { toast } from 'sonner';

interface VoiceSearchButtonProps {
  onResult: (result: string) => void;
  disabled?: boolean;
}

export const VoiceSearchButton: React.FC<VoiceSearchButtonProps> = ({
  onResult,
  disabled = false,
}) => {
  const [isActive, setIsActive] = useState(false);

  const { isListening, isSupported, startListening, stopListening } = useVoiceSearch({
    onResult: (result) => {
      onResult(result);
      setIsActive(false);
      toast.success(`Voice input: "${result}"`);
    },
    onError: (error) => {
      setIsActive(false);
      toast.error(`Voice search error: ${error}`);
    },
  });

  const handleToggle = () => {
    if (isListening) {
      stopListening();
      setIsActive(false);
    } else {
      startListening();
      setIsActive(true);
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={handleToggle}
        disabled={disabled}
        variant={isActive ? "default" : "outline"}
        size="icon"
        className={`relative overflow-hidden transition-all duration-300 ${
          isActive 
            ? 'neon-glow bg-gradient-cyber text-white' 
            : 'cyber-border hover:neon-glow'
        }`}
      >
        {isListening ? (
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            <Loader2 className="w-4 h-4 animate-spin" />
          </motion.div>
        ) : isActive ? (
          <MicOff className="w-4 h-4" />
        ) : (
          <Mic className="w-4 h-4" />
        )}

        {/* Pulse animation when listening */}
        {isListening && (
          <motion.div
            className="absolute inset-0 bg-gradient-cyber opacity-30 rounded"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        )}
      </Button>
    </motion.div>
  );
};