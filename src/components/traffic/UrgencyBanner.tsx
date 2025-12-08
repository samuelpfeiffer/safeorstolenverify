import React, { useState, useEffect } from 'react';
import { AlertTriangle, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const UrgencyBanner = () => {
  const [searchCount, setSearchCount] = useState(847);
  const [viewerCount, setViewerCount] = useState(23);

  useEffect(() => {
    // Simulate real-time activity
    const interval = setInterval(() => {
      setSearchCount(prev => prev + Math.floor(Math.random() * 3));
      setViewerCount(prev => Math.max(15, prev + Math.floor(Math.random() * 5) - 2));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-2 px-4 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="flex items-center justify-center gap-6 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 animate-pulse" />
            <span>⚠️ {Math.floor(Math.random() * 50 + 150)} stolen items reported TODAY</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2 border-l border-white/30 pl-6">
            <TrendingUp className="h-4 w-4" />
            <span>{searchCount.toLocaleString()} searches this week</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-2 border-l border-white/30 pl-6">
            <Users className="h-4 w-4" />
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
              {viewerCount} people checking now
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
