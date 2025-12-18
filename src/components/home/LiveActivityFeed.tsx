import { useEffect, useState } from 'react';
import { Shield, CheckCircle, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

interface Activity {
  id: string;
  type: string;
  location: string;
  timeAgo: string;
  status: 'safe' | 'verified';
}

/**
 * Shows REAL verification activity from database only
 */
export const LiveActivityFeed = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentVerifications = async () => {
      try {
        const { data, error } = await supabase
          .from('verification_results')
          .select('id, item_type, property_address, created_at, verification_status')
          .order('created_at', { ascending: false })
          .limit(10);

        if (error) {
          console.error('Error fetching verifications:', error);
          setIsLoading(false);
          return;
        }

        if (data && data.length > 0) {
          const formattedActivities: Activity[] = data.map(item => ({
            id: item.id,
            type: formatItemType(item.item_type),
            location: item.property_address || 'Verified',
            timeAgo: getTimeAgo(new Date(item.created_at)),
            status: item.verification_status === 'clean' ? 'safe' : 'verified'
          }));
          setActivities(formattedActivities);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentVerifications();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('verification_updates')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'verification_results' },
        (payload) => {
          const newItem = payload.new as any;
          const newActivity: Activity = {
            id: newItem.id,
            type: formatItemType(newItem.item_type),
            location: newItem.property_address || 'Verified',
            timeAgo: 'Just now',
            status: newItem.verification_status === 'clean' ? 'safe' : 'verified'
          };
          setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const formatItemType = (type: string): string => {
    if (!type) return 'Item';
    return type.charAt(0).toUpperCase() + type.slice(1).replace(/_/g, ' ');
  };

  const getTimeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  if (isLoading) {
    return (
      <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-elegant">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-sos-orange" />
          <h3 className="font-bold text-foreground">Live Verifications</h3>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse h-16 bg-secondary/30 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-elegant">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-sos-orange" />
          <h3 className="font-bold text-foreground">Live Verifications</h3>
        </div>
        <div className="text-center py-4 text-muted-foreground">
          <p className="text-sm">Verifications will appear here in real-time</p>
        </div>
      </div>
    );
  }

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
