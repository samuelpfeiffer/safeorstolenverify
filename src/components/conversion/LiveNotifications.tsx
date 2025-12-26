import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Shield } from 'lucide-react';

interface Notification {
  id: string;
  name: string;
  city: string;
  item: string;
  action: 'verified' | 'saved';
  timeAgo: string;
}

// Sample realistic notifications based on common verification patterns
const sampleNotifications: Notification[] = [
  { id: '1', name: 'John', city: 'Chicago', item: 'Honda Civic', action: 'verified', timeAgo: 'just now' },
  { id: '2', name: 'Sarah', city: 'Los Angeles', item: 'iPhone 14 Pro', action: 'saved', timeAgo: '2 min ago' },
  { id: '3', name: 'Mike', city: 'Houston', item: 'MacBook Pro', action: 'verified', timeAgo: '5 min ago' },
  { id: '4', name: 'Emily', city: 'Phoenix', item: 'Toyota Camry', action: 'verified', timeAgo: '8 min ago' },
  { id: '5', name: 'David', city: 'Philadelphia', item: 'Samsung Galaxy S24', action: 'saved', timeAgo: '12 min ago' },
  { id: '6', name: 'Lisa', city: 'San Antonio', item: 'Trek Bicycle', action: 'verified', timeAgo: '15 min ago' },
  { id: '7', name: 'James', city: 'San Diego', item: 'Ford F-150', action: 'verified', timeAgo: '18 min ago' },
  { id: '8', name: 'Amanda', city: 'Dallas', item: 'iPad Pro', action: 'saved', timeAgo: '22 min ago' },
  { id: '9', name: 'Chris', city: 'Austin', item: 'Specialized Bike', action: 'verified', timeAgo: '25 min ago' },
  { id: '10', name: 'Michelle', city: 'Jacksonville', item: 'Chevrolet Silverado', action: 'verified', timeAgo: '30 min ago' },
];

interface LiveNotificationsProps {
  enabled?: boolean;
  position?: 'bottom-left' | 'bottom-right';
}

export const LiveNotifications: React.FC<LiveNotificationsProps> = ({ 
  enabled = true,
  position = 'bottom-left' 
}) => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      setCurrentNotification(sampleNotifications[0]);
    }, 8000);

    // Show notifications periodically
    const interval = setInterval(() => {
      setNotificationIndex(prev => {
        const nextIndex = (prev + 1) % sampleNotifications.length;
        setCurrentNotification(sampleNotifications[nextIndex]);
        return nextIndex;
      });
    }, 25000); // Every 25 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [enabled]);

  useEffect(() => {
    if (currentNotification) {
      // Auto-hide after 5 seconds
      const hideTimeout = setTimeout(() => {
        setCurrentNotification(null);
      }, 5000);

      return () => clearTimeout(hideTimeout);
    }
  }, [currentNotification]);

  if (!enabled) return null;

  const positionClasses = position === 'bottom-left' 
    ? 'left-4 bottom-4' 
    : 'right-4 bottom-4';

  return (
    <AnimatePresence>
      {currentNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: position === 'bottom-left' ? -20 : 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed ${positionClasses} z-50 max-w-sm`}
        >
          <div className="bg-card border border-border rounded-lg shadow-lg p-4 flex items-start gap-3">
            <div className={`p-2 rounded-full ${
              currentNotification.action === 'saved' 
                ? 'bg-green-500/20' 
                : 'bg-primary/20'
            }`}>
              {currentNotification.action === 'saved' ? (
                <Shield className="h-5 w-5 text-green-500" />
              ) : (
                <CheckCircle className="h-5 w-5 text-primary" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                {currentNotification.name} from {currentNotification.city}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentNotification.action === 'saved' 
                  ? `Avoided a stolen ${currentNotification.item}`
                  : `Just verified a ${currentNotification.item}`
                }
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                {currentNotification.timeAgo}
              </p>
            </div>
            <button 
              onClick={() => setCurrentNotification(null)}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LiveNotifications;
