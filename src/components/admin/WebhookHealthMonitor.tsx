import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RefreshCw, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface WebhookStats {
  totalEvents: number;
  lastEventTime: string | null;
  pendingPurchases: number;
  completedPurchases: number;
  failedPurchases: number;
}

export const WebhookHealthMonitor = () => {
  const [stats, setStats] = useState<WebhookStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Get webhook events count
      const { data: webhookEvents } = await supabase
        .from('stripe_webhook_events')
        .select('id, created_at, event_type')
        .order('created_at', { ascending: false })
        .limit(100);

      // Get purchases stats
      const { data: purchases, error: purchaseError } = await supabase
        .from('purchases')
        .select('id, status, created_at')
        .order('created_at', { ascending: false })
        .limit(100);

      const webhookData = webhookEvents || [];
      const purchaseData = purchases || [];

      setStats({
        totalEvents: webhookData.length,
        lastEventTime: webhookData[0]?.created_at || null,
        pendingPurchases: purchaseData.filter(p => p.status === 'pending').length,
        completedPurchases: purchaseData.filter(p => p.status === 'completed').length,
        failedPurchases: purchaseData.filter(p => p.status === 'failed').length,
      });
    } catch (err: any) {
      setError(err.message || 'Failed to fetch stats');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const getHealthStatus = () => {
    if (!stats) return { status: 'unknown', color: 'secondary' };
    
    // If there are pending purchases but no webhook events, webhook likely broken
    if (stats.pendingPurchases > 0 && stats.totalEvents === 0) {
      return { status: 'Critical - No webhooks received', color: 'destructive' };
    }
    
    // If no events in 24 hours and there are pending purchases
    if (stats.lastEventTime) {
      const hoursSinceLastEvent = (Date.now() - new Date(stats.lastEventTime).getTime()) / (1000 * 60 * 60);
      if (hoursSinceLastEvent > 24 && stats.pendingPurchases > 0) {
        return { status: 'Warning - No recent events', color: 'warning' };
      }
    }
    
    if (stats.completedPurchases > 0 && stats.totalEvents > 0) {
      return { status: 'Healthy', color: 'success' };
    }
    
    return { status: 'Monitoring', color: 'secondary' };
  };

  const health = getHealthStatus();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Stripe Webhook Health</CardTitle>
        <Button variant="ghost" size="sm" onClick={fetchStats} disabled={loading}>
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {error ? (
          <p className="text-destructive text-sm">{error}</p>
        ) : stats ? (
          <>
            <div className="flex items-center gap-2">
              {health.color === 'destructive' && <XCircle className="h-5 w-5 text-destructive" />}
              {health.color === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
              {health.color === 'success' && <CheckCircle className="h-5 w-5 text-green-500" />}
              <Badge variant={health.color === 'success' ? 'default' : 'destructive'}>
                {health.status}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Webhook Events</p>
                <p className="font-semibold">{stats.totalEvents}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Event</p>
                <p className="font-semibold">
                  {stats.lastEventTime 
                    ? new Date(stats.lastEventTime).toLocaleDateString()
                    : 'Never'}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Pending</p>
                <p className="font-semibold text-yellow-600">{stats.pendingPurchases}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Completed</p>
                <p className="font-semibold text-green-600">{stats.completedPurchases}</p>
              </div>
            </div>

            {stats.totalEvents === 0 && stats.pendingPurchases > 0 && (
              <div className="p-3 bg-destructive/10 rounded-lg text-sm">
                <p className="font-semibold text-destructive">Webhook Not Configured</p>
                <p className="text-muted-foreground mt-1">
                  Configure webhook in Stripe Dashboard → Developers → Webhooks
                </p>
                <p className="text-xs mt-2 font-mono bg-muted p-2 rounded">
                  https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/stripe-webhook
                </p>
              </div>
            )}
          </>
        ) : (
          <p className="text-muted-foreground">Loading...</p>
        )}
      </CardContent>
    </Card>
  );
};
