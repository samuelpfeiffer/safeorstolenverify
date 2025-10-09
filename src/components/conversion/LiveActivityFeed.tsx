import React, { useState, useEffect } from 'react';
import { Shield, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Activity {
  id: string;
  name: string;
  location: string;
  itemType: string;
  timestamp: Date;
}

const MOCK_LOCATIONS = ['Austin', 'Los Angeles', 'New York', 'Chicago', 'Miami', 'Seattle', 'Denver', 'Portland'];
const MOCK_NAMES = ['Sarah', 'Mike', 'Jessica', 'David', 'Emily', 'James', 'Ashley', 'Chris'];
const MOCK_ITEMS = [
  { type: 'iPhone 14 Pro', icon: '📱' },
  { type: 'MacBook Pro', icon: '💻' },
  { type: '2022 Honda Civic', icon: '🚗' },
  { type: 'Specialized Bike', icon: '🚴' },
  { type: 'Canon Camera', icon: '📷' },
  { type: 'DeWalt Tools', icon: '🔧' }
];

export const LiveActivityFeed: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Generate initial activity
    generateActivity();

    // Generate new activity every 8-15 seconds
    const interval = setInterval(() => {
      generateActivity();
    }, Math.random() * 7000 + 8000);

    return () => clearInterval(interval);
  }, []);

  const generateActivity = () => {
    const item = MOCK_ITEMS[Math.floor(Math.random() * MOCK_ITEMS.length)];
    const newActivity: Activity = {
      id: crypto.randomUUID(),
      name: MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)],
      location: MOCK_LOCATIONS[Math.floor(Math.random() * MOCK_LOCATIONS.length)],
      itemType: item.type,
      timestamp: new Date()
    };

    setActivities(prev => [newActivity, ...prev].slice(0, 3));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <AnimatePresence mode="popLayout">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ 
              opacity: index === 0 ? 1 : 0.5, 
              x: 0, 
              scale: 1,
              y: index * -60
            }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-3"
          >
            <div className="bg-background/95 backdrop-blur-sm border-2 border-primary/20 rounded-lg shadow-lg p-4 relative overflow-hidden">
              {/* Success Indicator */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600" />
              
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-sm font-semibold text-foreground truncate">
                      Verification Complete
                    </p>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{activity.name}</span> from{' '}
                    <span className="font-medium text-foreground">{activity.location}</span> just verified a{' '}
                    <span className="font-medium text-foreground">{activity.itemType}</span>
                  </p>
                  
                  <p className="text-xs text-green-600 mt-1 font-medium">
                    ✓ Safe to purchase
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 bg-background border-2 border-border rounded-full flex items-center justify-center text-xs hover:bg-muted transition-colors"
        aria-label="Close activity feed"
      >
        ×
      </button>
    </div>
  );
};
