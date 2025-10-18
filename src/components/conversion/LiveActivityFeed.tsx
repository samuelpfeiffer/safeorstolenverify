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
const MOCK_ITEMS = [{
  type: 'iPhone 14 Pro',
  icon: '📱'
}, {
  type: 'MacBook Pro',
  icon: '💻'
}, {
  type: '2022 Honda Civic',
  icon: '🚗'
}, {
  type: 'Specialized Bike',
  icon: '🚴'
}, {
  type: 'Canon Camera',
  icon: '📷'
}, {
  type: 'DeWalt Tools',
  icon: '🔧'
}];
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
  // Disabled for performance - no visible output needed
  return null;
};