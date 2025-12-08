import React, { useState, useEffect } from 'react';
import { Shield, MapPin, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

export const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activity, setActivity] = useState<{ type: string; time: string } | null>(null);

  useEffect(() => {
    // Fetch real recent verification
    const fetchRecentActivity = async () => {
      try {
        const { data } = await supabase
          .from('verification_results')
          .select('item_type, created_at')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();
        
        if (data) {
          const timeDiff = Date.now() - new Date(data.created_at).getTime();
          const minutes = Math.floor(timeDiff / 60000);
          const timeText = minutes < 60 ? `${minutes} min ago` : `${Math.floor(minutes / 60)}h ago`;
          
          setActivity({
            type: data.item_type || 'item',
            time: timeText
          });
        }
      } catch (error) {
        // No recent activity, show general message
        setActivity(null);
      }
    };

    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      fetchRecentActivity();
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    // Auto-hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [isVisible]);

  if (!activity) return null;

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
            <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                Someone just verified a <span className="font-bold">{activity.type}</span>
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
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
