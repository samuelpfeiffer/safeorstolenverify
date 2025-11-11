import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Search, 
  CreditCard, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Receipt,
  UserPlus,
  Calendar
} from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { PurchaseHistoryLoading } from '@/components/purchase-history/PurchaseHistoryLoading';

interface TimelineEvent {
  id: string;
  type: 'verification' | 'purchase' | 'receipt' | 'account';
  timestamp: string;
  title: string;
  description: string;
  status?: string;
  metadata?: any;
  icon: any;
  iconColor: string;
}

const ActivityTimelinePage = () => {
  const { user, isAuthenticated } = useUnifiedAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'verification' | 'purchase' | 'receipt' | 'account'>('all');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signin');
      return;
    }
    
    if (user) {
      loadActivityTimeline();
    }
  }, [user, isAuthenticated]);

  const loadActivityTimeline = async () => {
    if (!user) return;

    setIsLoading(true);
    try {
      const allEvents: TimelineEvent[] = [];

      // Fetch verification searches
      const { data: verifications } = await supabase
        .from('verification_searches')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (verifications) {
        verifications.forEach(v => {
          allEvents.push({
            id: v.id,
            type: 'verification',
            timestamp: v.created_at,
            title: 'Item Verification',
            description: `Verified ${v.item_type}: ${v.serial_number}`,
            status: 'completed',
            metadata: v,
            icon: Search,
            iconColor: 'text-blue-500'
          });
        });
      }

      // Fetch verification results
      const { data: results } = await supabase
        .from('verification_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (results) {
        results.forEach(r => {
          const status = r.verification_status?.toLowerCase() || 'pending';
          allEvents.push({
            id: r.id,
            type: 'verification',
            timestamp: r.created_at,
            title: `Verification ${status === 'safe' ? 'Completed' : 'Alert'}`,
            description: `Item ${r.serial_number || 'checked'}: ${status}`,
            status: status,
            metadata: r,
            icon: status === 'safe' ? CheckCircle : AlertTriangle,
            iconColor: status === 'safe' ? 'text-green-500' : 'text-red-500'
          });
        });
      }

      // Fetch purchases
      const { data: purchases } = await supabase
        .from('purchases')
        .select(`
          *,
          verification_searches (
            serial_number,
            item_type
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (purchases) {
        purchases.forEach(p => {
          allEvents.push({
            id: p.id,
            type: 'purchase',
            timestamp: p.created_at,
            title: 'Verification Purchase',
            description: `$${(p.amount / 100).toFixed(2)} ${p.currency?.toUpperCase()} - ${p.verification_searches?.serial_number || 'Item verification'}`,
            status: p.status,
            metadata: p,
            icon: CreditCard,
            iconColor: 'text-purple-500'
          });
        });
      }

      // Fetch receipts
      const { data: receipts } = await supabase
        .from('receipts')
        .select(`
          *,
          purchases (
            verification_searches (
              serial_number,
              item_type
            )
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (receipts) {
        receipts.forEach(r => {
          allEvents.push({
            id: r.id,
            type: 'receipt',
            timestamp: r.created_at,
            title: 'Receipt Generated',
            description: `Receipt for ${r.purchases?.verification_searches?.item_type || 'verification'}`,
            metadata: r,
            icon: Receipt,
            iconColor: 'text-orange-500'
          });
        });
      }

      // Add account creation event
      if (user.createdAt) {
        allEvents.push({
          id: 'account-created',
          type: 'account',
          timestamp: user.createdAt,
          title: 'Account Created',
          description: 'Welcome to Safe or Stolen!',
          icon: UserPlus,
          iconColor: 'text-green-500'
        });
      }

      // Sort all events by timestamp (most recent first)
      allEvents.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      
      setEvents(allEvents);
    } catch (error) {
      console.error('Error loading activity timeline:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.type === filter);

  const getStatusBadge = (status?: string) => {
    if (!status) return null;
    
    const statusColors: Record<string, string> = {
      safe: 'bg-green-100 text-green-800 border-green-300',
      stolen: 'bg-red-100 text-red-800 border-red-300',
      lost: 'bg-red-100 text-red-800 border-red-300',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      completed: 'bg-green-100 text-green-800 border-green-300',
      failed: 'bg-red-100 text-red-800 border-red-300'
    };

    return (
      <Badge className={`${statusColors[status] || 'bg-gray-100 text-gray-800'} ml-2`}>
        {status}
      </Badge>
    );
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffDays < 30) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };

  const groupEventsByDate = (events: TimelineEvent[]) => {
    const grouped: Record<string, TimelineEvent[]> = {};
    
    events.forEach(event => {
      const date = new Date(event.timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(event);
    });
    
    return grouped;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <PageSEO 
          title="Activity Timeline - Safe or Stolen"
          description="View your complete activity history"
          canonical="/activity"
        />
        <div className="container mx-auto px-4 py-8">
          <PurchaseHistoryLoading />
        </div>
      </div>
    );
  }

  const groupedEvents = groupEventsByDate(filteredEvents);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO 
        title="Activity Timeline - Safe or Stolen"
        description="View your complete activity history including verifications, purchases, and account actions"
        canonical="/activity"
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Clock className="h-8 w-8 text-primary" />
            Activity Timeline
          </h1>
          <p className="text-muted-foreground">
            Your complete activity history on Safe or Stolen
          </p>
        </div>

        {/* Filter Buttons */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
              >
                All ({events.length})
              </Button>
              <Button
                variant={filter === 'verification' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('verification')}
              >
                <Shield className="h-4 w-4 mr-1" />
                Verifications ({events.filter(e => e.type === 'verification').length})
              </Button>
              <Button
                variant={filter === 'purchase' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('purchase')}
              >
                <CreditCard className="h-4 w-4 mr-1" />
                Purchases ({events.filter(e => e.type === 'purchase').length})
              </Button>
              <Button
                variant={filter === 'receipt' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('receipt')}
              >
                <Receipt className="h-4 w-4 mr-1" />
                Receipts ({events.filter(e => e.type === 'receipt').length})
              </Button>
              <Button
                variant={filter === 'account' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('account')}
              >
                <UserPlus className="h-4 w-4 mr-1" />
                Account ({events.filter(e => e.type === 'account').length})
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        {filteredEvents.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No Activity Yet</h3>
              <p className="text-muted-foreground mb-4">
                Your activity timeline will appear here as you use the platform
              </p>
              <Button onClick={() => navigate('/')}>
                Start Verifying Items
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedEvents).map(([date, dateEvents]) => (
              <div key={date}>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-xl font-semibold">{date}</h2>
                </div>
                
                <div className="relative border-l-2 border-border ml-6 pl-8 space-y-6">
                  {dateEvents.map((event, idx) => {
                    const Icon = event.icon;
                    return (
                      <div key={event.id} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-[2.3rem] top-2 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                          <Icon className={`h-4 w-4 ${event.iconColor}`} />
                        </div>

                        {/* Event card */}
                        <Card>
                          <CardContent className="pt-4">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{event.title}</h3>
                                {getStatusBadge(event.status)}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {formatTimestamp(event.timestamp)}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm">
                              {event.description}
                            </p>
                            <div className="mt-2 text-xs text-muted-foreground">
                              {new Date(event.timestamp).toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityTimelinePage;
