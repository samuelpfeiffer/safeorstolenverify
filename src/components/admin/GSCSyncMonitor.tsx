import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export function GSCSyncMonitor() {
  const [isManualSyncing, setIsManualSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check last sync from cache
    const checkLastSync = async () => {
      const { data } = await supabase
        .from('gsc_performance_cache')
        .select('fetched_at')
        .order('fetched_at', { ascending: false })
        .limit(1)
        .single();

      if (data) {
        setLastSyncTime(data.fetched_at);
      }
    };

    checkLastSync();
    const interval = setInterval(checkLastSync, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleManualSync = async () => {
    setIsManualSyncing(true);
    try {
      const { data, error } = await supabase.functions.invoke('gsc-sync', {
        body: { manual: true },
      });

      if (error) throw error;

      toast({
        title: 'Sync Started',
        description: `Synced ${data.accountsSynced} account(s), completed ${data.operationsCompleted} operations`,
      });

      setLastSyncTime(data.timestamp);
    } catch (error: any) {
      toast({
        title: 'Sync Failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsManualSyncing(false);
    }
  };

  const getTimeSinceSync = () => {
    if (!lastSyncTime) return 'Never';
    const diff = Date.now() - new Date(lastSyncTime).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) return `${hours}h ${minutes % 60}m ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Automated GSC Sync
            </CardTitle>
            <CardDescription>
              Runs hourly at :00 minutes past the hour
            </CardDescription>
          </div>
          <Badge variant={lastSyncTime ? "default" : "secondary"}>
            {lastSyncTime ? <CheckCircle className="h-3 w-3 mr-1" /> : <AlertCircle className="h-3 w-3 mr-1" />}
            {lastSyncTime ? 'Active' : 'Waiting'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Last Sync</p>
            <p className="text-lg font-semibold">{getTimeSinceSync()}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Schedule</p>
            <p className="text-lg font-semibold">Every Hour</p>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p className="text-sm font-medium">What gets synced:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Search Analytics (last 7 days)</li>
            <li>• URL Inspection (1 random priority URL)</li>
            <li>• Performance metrics cached for dashboards</li>
          </ul>
        </div>

        <Button 
          onClick={handleManualSync} 
          disabled={isManualSyncing}
          className="w-full"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isManualSyncing ? 'animate-spin' : ''}`} />
          {isManualSyncing ? 'Syncing...' : 'Manual Sync Now'}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Cron Job ID: gsc-hourly-sync
        </p>
      </CardContent>
    </Card>
  );
}
