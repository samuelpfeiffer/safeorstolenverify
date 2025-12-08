import React, { useState, useEffect } from 'react';
import { Shield, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const recentActivities = [
  { name: 'John D.', location: 'Los Angeles, CA', action: 'verified an iPhone', time: '2 min ago' },
  { name: 'Sarah M.', location: 'New York, NY', action: 'checked a vehicle VIN', time: '5 min ago' },
  { name: 'Mike R.', location: 'Chicago, IL', action: 'verified a MacBook', time: '8 min ago' },
  { name: 'Emma L.', location: 'Houston, TX', action: 'checked IMEI number', time: '12 min ago' },
  { name: 'David K.', location: 'Phoenix, AZ', action: 'verified a firearm', time: '15 min ago' },
  { name: 'Lisa T.', location: 'Seattle, WA', action: 'checked a motorcycle VIN', time: '18 min ago' },
  { name: 'James W.', location: 'Miami, FL', action: 'verified electronics', time: '22 min ago' },
  { name: 'Amy C.', location: 'Denver, CO', action: 'checked a tablet IMEI', time: '25 min ago' },
];

export const SocialProofPopup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show first popup after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Hide after 4 seconds, then show next after 8 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    const nextTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % recentActivities.length);
      setIsVisible(true);
    }, 12000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [isVisible, currentIndex]);

  const activity = recentActivities[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed bottom-24 left-4 z-50 max-w-xs"
        >
          <div className="bg-card border border-border rounded-lg shadow-xl p-4 flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                <span className="font-bold">{activity.name}</span> just {activity.action}
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{activity.location}</span>
                <Clock className="h-3 w-3 ml-2" />
                <span>{activity.time}</span>
              </div>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
