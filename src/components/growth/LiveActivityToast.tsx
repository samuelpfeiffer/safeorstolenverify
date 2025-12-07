import { useEffect, useState } from 'react';
import { Shield, MapPin, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const CITIES = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin',
  'Seattle', 'Denver', 'Boston', 'Atlanta', 'Miami', 'Portland',
  'Las Vegas', 'Detroit', 'Minneapolis', 'Tampa', 'Orlando'
];

const ITEMS = ['phone', 'vehicle', 'laptop', 'bicycle', 'watch', 'camera', 'tablet'];

interface Activity {
  id: string;
  city: string;
  item: string;
  timeAgo: string;
}

export const LiveActivityToast = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fetch real recent verifications count
    const fetchRecentActivity = async () => {
      try {
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
        const { count } = await supabase
          .from('verification_searches')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', fiveMinutesAgo);

        // If there's real activity, show it
        if (count && count > 0) {
          // Generate realistic-looking activities based on actual count
          const newActivities: Activity[] = [];
          for (let i = 0; i < Math.min(count, 5); i++) {
            newActivities.push({
              id: `${Date.now()}-${i}`,
              city: CITIES[Math.floor(Math.random() * CITIES.length)],
              item: ITEMS[Math.floor(Math.random() * ITEMS.length)],
              timeAgo: i === 0 ? 'just now' : `${i + 1} min ago`
            });
          }
          setActivities(newActivities);
        }
      } catch (error) {
        console.error('Error fetching activity:', error);
      }
    };

    fetchRecentActivity();
    
    // Refresh every 2 minutes
    const interval = setInterval(fetchRecentActivity, 120000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activities.length === 0) return;

    // Show activities one by one
    let index = 0;
    const showNext = () => {
      if (index < activities.length) {
        setCurrentActivity(activities[index]);
        setIsVisible(true);
        
        // Hide after 4 seconds
        setTimeout(() => {
          setIsVisible(false);
          index++;
          
          // Show next after 30 seconds
          setTimeout(showNext, 30000);
        }, 4000);
      }
    };

    // Start showing after 10 seconds
    const timer = setTimeout(showNext, 10000);
    return () => clearTimeout(timer);
  }, [activities]);

  if (!currentActivity || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="flex items-center gap-3 rounded-lg bg-background/95 backdrop-blur border border-border px-4 py-3 shadow-lg max-w-[320px]">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <CheckCircle className="h-5 w-5 text-emerald-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            Someone in {currentActivity.city}
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Shield className="h-3 w-3" />
            Verified a {currentActivity.item} • {currentActivity.timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
};
