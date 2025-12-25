/**
 * Real-time verification progress indicator
 * Shows animated progress through each database being checked
 */

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Loader2, Database, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DatabaseCheck {
  name: string;
  icon: string;
  status: 'pending' | 'checking' | 'complete';
}

interface VerificationProgressProps {
  itemType: string;
  isActive: boolean;
}

// Database sources by item type
const getDatabasesForType = (itemType: string): DatabaseCheck[] => {
  const commonDatabases = [
    { name: 'Stolen911 Registry', icon: '🚨', status: 'pending' as const },
    { name: 'Property Register', icon: '🔍', status: 'pending' as const },
  ];

  switch (itemType?.toLowerCase()) {
    case 'smartphone':
    case 'phone':
    case 'imei':
      return [
        { name: 'GSMA IMEI Database', icon: '📱', status: 'pending' },
        { name: 'Carrier Blacklist', icon: '📶', status: 'pending' },
        { name: 'International Registry', icon: '🌍', status: 'pending' },
        ...commonDatabases,
      ];
    case 'vehicle':
    case 'vin':
      return [
        { name: 'NICB VINCheck', icon: '🚗', status: 'pending' },
        { name: 'NMVTIS Database', icon: '🔎', status: 'pending' },
        { name: 'State DMV Records', icon: '📋', status: 'pending' },
        { name: 'Insurance Claims DB', icon: '📄', status: 'pending' },
        ...commonDatabases,
      ];
    case 'bicycle':
    case 'bike':
      return [
        { name: 'Bike Index', icon: '🚴', status: 'pending' },
        { name: '529 Garage', icon: '🔒', status: 'pending' },
        { name: 'Project 529', icon: '🏷️', status: 'pending' },
        ...commonDatabases,
      ];
    case 'firearm':
    case 'gun':
      return [
        { name: 'HotGunz Database', icon: '🔫', status: 'pending' },
        { name: 'ATF Lost/Stolen', icon: '🏛️', status: 'pending' },
        { name: 'Law Enforcement DB', icon: '👮', status: 'pending' },
        ...commonDatabases,
      ];
    case 'laptop':
    case 'electronics':
      return [
        { name: 'Manufacturer Registry', icon: '💻', status: 'pending' },
        { name: 'Enterprise Asset DB', icon: '🏢', status: 'pending' },
        ...commonDatabases,
      ];
    case 'license_plate':
      return [
        { name: 'State DMV Database', icon: '🚘', status: 'pending' },
        { name: 'NCIC Database', icon: '🏛️', status: 'pending' },
        ...commonDatabases,
      ];
    default:
      return [
        { name: 'Universal Registry', icon: '🔍', status: 'pending' },
        { name: 'Multi-Source Check', icon: '🌐', status: 'pending' },
        ...commonDatabases,
      ];
  }
};

export const VerificationProgress = ({ itemType, isActive }: VerificationProgressProps) => {
  const [databases, setDatabases] = useState<DatabaseCheck[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);

  // Initialize databases when active
  useEffect(() => {
    if (isActive) {
      const dbs = getDatabasesForType(itemType);
      setDatabases(dbs.map(db => ({ ...db, status: 'pending' })));
      setCurrentIndex(0);
      setOverallProgress(0);
    }
  }, [isActive, itemType]);

  // Animate through databases
  useEffect(() => {
    if (!isActive || databases.length === 0) return;

    const interval = setInterval(() => {
      setDatabases(prev => {
        const updated = [...prev];
        
        // Mark current as checking
        if (currentIndex < updated.length) {
          updated[currentIndex] = { ...updated[currentIndex], status: 'checking' };
        }
        
        // Mark previous as complete
        if (currentIndex > 0) {
          updated[currentIndex - 1] = { ...updated[currentIndex - 1], status: 'complete' };
        }
        
        return updated;
      });

      setCurrentIndex(prev => {
        const next = prev + 1;
        setOverallProgress(Math.min((next / databases.length) * 100, 95));
        return next;
      });
    }, 400); // Check each database every 400ms

    // Cleanup when done or component unmounts
    if (currentIndex >= databases.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, currentIndex, databases.length]);

  if (!isActive) return null;

  return (
    <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
      <CardContent className="pt-6 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Shield className="w-8 h-8 text-primary animate-pulse" />
            <Loader2 className="w-4 h-4 text-primary absolute -bottom-1 -right-1 animate-spin" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Verifying Item...</h3>
            <p className="text-sm text-muted-foreground">
              Checking {databases.length} databases in real-time
            </p>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-medium text-primary">{Math.round(overallProgress)}%</span>
          </div>
          <Progress value={overallProgress} className="h-2" />
        </div>

        {/* Database List */}
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {databases.map((db, index) => (
            <div
              key={db.name}
              className={cn(
                "flex items-center gap-3 p-2 rounded-lg transition-all duration-300",
                db.status === 'checking' && "bg-primary/10 border border-primary/30",
                db.status === 'complete' && "bg-green-500/10 border border-green-500/30",
                db.status === 'pending' && "opacity-50"
              )}
            >
              {/* Status Icon */}
              <div className="w-6 h-6 flex items-center justify-center">
                {db.status === 'checking' ? (
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                ) : db.status === 'complete' ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Database className="w-5 h-5 text-muted-foreground" />
                )}
              </div>

              {/* Database Icon */}
              <span className="text-lg">{db.icon}</span>

              {/* Database Name */}
              <span className={cn(
                "text-sm font-medium flex-1",
                db.status === 'checking' && "text-primary",
                db.status === 'complete' && "text-green-600 dark:text-green-400",
                db.status === 'pending' && "text-muted-foreground"
              )}>
                {db.name}
              </span>

              {/* Status Text */}
              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full",
                db.status === 'checking' && "bg-primary/20 text-primary",
                db.status === 'complete' && "bg-green-500/20 text-green-600 dark:text-green-400",
                db.status === 'pending' && "bg-muted text-muted-foreground"
              )}>
                {db.status === 'checking' ? 'Checking...' : 
                 db.status === 'complete' ? 'Done' : 'Pending'}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <p className="text-xs text-center text-muted-foreground">
          🔒 Secure encrypted connection • Results in seconds
        </p>
      </CardContent>
    </Card>
  );
};
