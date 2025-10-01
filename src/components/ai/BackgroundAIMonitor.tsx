import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, Search, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const BackgroundAIMonitor: React.FC = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const aiTasks = [
    { icon: Search, text: 'Crawling search engines for keyword rankings', color: 'text-blue-500' },
    { icon: TrendingUp, text: 'Analyzing competitor content strategies', color: 'text-purple-500' },
    { icon: Sparkles, text: 'Optimizing meta descriptions for better CTR', color: 'text-pink-500' },
    { icon: Brain, text: 'Generating SEO-optimized blog content', color: 'text-cyan-500' },
    { icon: RefreshCw, text: 'Updating internal linking structure', color: 'text-green-500' },
    { icon: TrendingUp, text: 'Monitoring domain authority signals', color: 'text-orange-500' },
    { icon: Search, text: 'Analyzing user search patterns', color: 'text-indigo-500' },
    { icon: Sparkles, text: 'Optimizing page load performance', color: 'text-amber-500' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTask((prev) => (prev + 1) % aiTasks.length);
      setTasksCompleted((prev) => prev + 1);
    }, 5000); // Change task every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-500/20 overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold">AI Background Processing</span>
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20 text-xs">
                  Active
                </Badge>
              </div>
              
              <motion.div
                key={currentTask}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                {React.createElement(aiTasks[currentTask].icon, {
                  className: `w-3 h-3 ${aiTasks[currentTask].color}`
                })}
                <span>{aiTasks[currentTask].text}</span>
              </motion.div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Tasks Completed</div>
            <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {tasksCompleted.toLocaleString()}+
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
