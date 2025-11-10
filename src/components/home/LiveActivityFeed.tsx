import { useEffect, useState } from 'react';
import { Shield, CheckCircle, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Activity {
  id: string;
  type: string;
  location: string;
  timeAgo: string;
  status: 'safe' | 'verified';
}

const mockActivities: Activity[] = [
  { id: '1', type: 'iPhone 14 Pro', location: 'New York, NY', timeAgo: '2m ago', status: 'safe' },
  { id: '2', type: 'Toyota Camry', location: 'Los Angeles, CA', timeAgo: '5m ago', status: 'verified' },
  { id: '3', type: 'MacBook Pro', location: 'Chicago, IL', timeAgo: '8m ago', status: 'safe' },
  { id: '4', type: 'Samsung Galaxy', location: 'Houston, TX', timeAgo: '12m ago', status: 'verified' },
  { id: '5', type: 'Ford F-150', location: 'Miami, FL', timeAgo: '15m ago', status: 'safe' },
];

export const LiveActivityFeed = () => {
  const [activities, setActivities] = useState<Activity[]>(mockActivities);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    // Simulate new activities coming in
    const interval = setInterval(() => {
      setActivities(prev => {
        const newActivity: Activity = {
          id: Date.now().toString(),
          type: ['iPhone 15', 'Tesla Model 3', 'iPad Pro', 'Honda Civic'][Math.floor(Math.random() * 4)],
          location: ['Boston, MA', 'Seattle, WA', 'Austin, TX', 'Denver, CO'][Math.floor(Math.random() * 4)],
          timeAgo: 'Just now',
          status: Math.random() > 0.5 ? 'safe' : 'verified'
        };
        return [newActivity, ...prev.slice(0, 4)];
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-elegant">
      <div className="flex items-center gap-2 mb-4">
        <div className="relative">
          <Shield className="w-5 h-5 text-sos-orange" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </div>
        <h3 className="font-bold text-foreground">Live Verifications</h3>
      </div>

      <div className="space-y-3">
        {activities.slice(0, visibleCount).map((activity, index) => (
          <div
            key={activity.id}
            className={cn(
              "flex items-center justify-between p-3 rounded-lg bg-secondary/30 animate-fadeIn",
              "hover:bg-secondary/50 transition-colors"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{activity.type}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{activity.location}</span>
                </div>
              </div>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
              {activity.timeAgo}
            </span>
          </div>
        ))}
      </div>

      {visibleCount < activities.length && (
        <button
          onClick={() => setVisibleCount(prev => Math.min(prev + 3, activities.length))}
          className="w-full mt-4 text-sm text-sos-orange hover:text-sos-orange/80 font-medium transition-colors"
        >
          Show more
        </button>
      )}
    </div>
  );
};
