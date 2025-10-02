import { useEffect, useState } from 'react';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, TrendingUp, AlertCircle } from 'lucide-react';

export const PerformanceMonitor = () => {
  const { metrics, isOptimizing } = usePerformanceOptimization();
  const [showMonitor, setShowMonitor] = useState(false);

  useEffect(() => {
    const isDev = window.location.hostname === 'localhost';
    const showParam = new URLSearchParams(window.location.search).has('perf');
    setShowMonitor(isDev || showParam);
  }, []);

  if (!showMonitor || !metrics) return null;

  const getScoreColor = (score: number, thresholds: [number, number]) => {
    if (score <= thresholds[0]) return 'text-green-500';
    if (score <= thresholds[1]) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="bg-black/90 backdrop-blur-lg border-gray-700">
        <CardContent className="p-4 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-5 w-5 text-yellow-400" />
            <h3 className="font-bold">Performance</h3>
            {isOptimizing && <TrendingUp className="h-4 w-4 text-blue-400 animate-pulse" />}
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Load:</span>
              <span className={getScoreColor(metrics.loadTime, [1000, 3000])}>
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={getScoreColor(metrics.firstContentfulPaint, [1800, 3000])}>
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            {metrics.loadTime > 3000 && (
              <div className="flex items-start gap-2 mt-3 p-2 bg-red-500/20 rounded text-xs">
                <AlertCircle className="h-4 w-4 text-red-400" />
                <p className="text-red-300">AI optimizing...</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
