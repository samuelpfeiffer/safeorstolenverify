import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, WifiOff, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SystemStatusFeedbackProps {
  status: 'idle' | 'loading' | 'success' | 'error' | 'offline';
  message?: string;
  onRetry?: () => void;
  duration?: number;
}

export const SystemStatusFeedback: React.FC<SystemStatusFeedbackProps> = ({
  status,
  message,
  onRetry,
  duration = 3000
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (status !== 'idle') {
      setVisible(true);
      
      if (status === 'success' && duration > 0) {
        const timer = setTimeout(() => setVisible(false), duration);
        return () => clearTimeout(timer);
      }
    } else {
      setVisible(false);
    }
  }, [status, duration]);

  const statusConfig = {
    loading: {
      icon: Loader2,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      iconClass: 'animate-spin'
    },
    success: {
      icon: CheckCircle,
      color: 'text-green-500',
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      iconClass: ''
    },
    error: {
      icon: AlertCircle,
      color: 'text-red-500',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      iconClass: ''
    },
    offline: {
      icon: WifiOff,
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/30',
      iconClass: ''
    },
    idle: {
      icon: CheckCircle,
      color: 'text-gray-500',
      bg: 'bg-gray-500/10',
      border: 'border-gray-500/30',
      iconClass: ''
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 z-50 max-w-md ${config.bg} ${config.border} border rounded-lg p-4 shadow-lg backdrop-blur-sm`}
        >
          <div className="flex items-center gap-3">
            <Icon className={`h-5 w-5 ${config.color} ${config.iconClass}`} />
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{message}</p>
            </div>
            {onRetry && status === 'error' && (
              <button
                onClick={onRetry}
                className="ml-2 p-1 hover:bg-white/10 rounded-[0.25rem] transition-colors"
                aria-label="Retry"
              >
                <RefreshCw className="h-4 w-4 text-white" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
