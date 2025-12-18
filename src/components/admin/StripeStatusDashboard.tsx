import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle, XCircle, Copy, ExternalLink, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface StatusCheck {
  name: string;
  status: 'ok' | 'warning' | 'error';
  message: string;
  value?: string | number;
}

export const StripeStatusDashboard = () => {
  const [checks, setChecks] = useState<StatusCheck[]>([]);
  const [loading, setLoading] = useState(true);
  const [pendingPurchases, setPendingPurchases] = useState(0);
  const [webhookEvents, setWebhookEvents] = useState(0);
  const [paidSubscribers, setPaidSubscribers] = useState(0);
  const { toast } = useToast();

  const WEBHOOK_URL = 'https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/stripe-webhook';
  
  const REQUIRED_EVENTS = [
    'checkout.session.completed',
    'customer.subscription.created', 
    'customer.subscription.updated',
    'customer.subscription.deleted',
    'payment_intent.succeeded',
    'payment_intent.payment_failed'
  ];

  const runDiagnostics = async () => {
    setLoading(true);
    const newChecks: StatusCheck[] = [];

    try {
      // Check 1: Pending purchases (should be 0 if webhooks work)
      const { data: purchases, count: purchaseCount } = await supabase
        .from('purchases')
        .select('*', { count: 'exact' })
        .eq('status', 'pending');
      
      setPendingPurchases(purchaseCount || 0);
      newChecks.push({
        name: 'Pending Purchases',
        status: (purchaseCount || 0) > 0 ? 'error' : 'ok',
        message: (purchaseCount || 0) > 0 
          ? `${purchaseCount} purchases stuck in pending - webhooks not processing!`
          : 'All purchases processed correctly',
        value: purchaseCount || 0
      });

      // Check 2: Webhook events received
      const { count: eventCount } = await supabase
        .from('stripe_webhook_events')
        .select('*', { count: 'exact' });
      
      setWebhookEvents(eventCount || 0);
      newChecks.push({
        name: 'Webhook Events',
        status: (eventCount || 0) === 0 ? 'error' : 'ok',
        message: (eventCount || 0) === 0
          ? 'NO WEBHOOKS RECEIVED - Configure webhook in Stripe Dashboard!'
          : `${eventCount} webhook events processed`,
        value: eventCount || 0
      });

      // Check 3: Paid subscribers (from profiles table)
      const { data: paidProfilesCheck } = await supabase
        .from('profiles')
        .select('*', { count: 'exact' })
        .not('subscription_tier', 'is', null)
        .not('subscription_tier', 'eq', 'free');
      
      const subCount = paidProfilesCheck?.length || 0;
      setPaidSubscribers(subCount);
      newChecks.push({
        name: 'Paid Subscribers',
        status: subCount === 0 ? 'warning' : 'ok',
        message: subCount === 0
          ? 'No paid subscribers yet'
          : `${subCount} active subscribers`,
        value: subCount
      });

      // Check 4: Users on paid tiers
      const { data: paidProfiles } = await supabase
        .from('profiles')
        .select('subscription_tier')
        .not('subscription_tier', 'is', null)
        .not('subscription_tier', 'eq', 'free');
      
      const paidUsers = paidProfiles?.length || 0;
      newChecks.push({
        name: 'Users on Paid Plans',
        status: paidUsers === 0 ? 'warning' : 'ok',
        message: paidUsers === 0
          ? 'No users upgraded to paid plans'
          : `${paidUsers} users on paid plans`,
        value: paidUsers
      });

    } catch (error) {
      console.error('Diagnostic error:', error);
    }

    setChecks(newChecks);
    setLoading(false);
  };

  useEffect(() => {
    runDiagnostics();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: 'Webhook URL copied to clipboard',
    });
  };

  const hasWebhookIssue = webhookEvents === 0 && pendingPurchases > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Stripe Payment Status</h2>
        <Button onClick={runDiagnostics} disabled={loading} variant="outline" size="sm">
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {hasWebhookIssue && (
        <Alert variant="destructive" className="border-destructive">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle className="text-lg font-bold">🚨 CRITICAL: Webhook Not Configured</AlertTitle>
          <AlertDescription className="space-y-4 mt-4">
            <p className="font-medium">
              {pendingPurchases} customers have attempted to pay but their payments are NOT being processed!
            </p>
            
            <div className="bg-background/50 p-4 rounded-lg space-y-3">
              <p className="font-bold">To fix this, you MUST configure the webhook in Stripe Dashboard:</p>
              
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Go to <a href="https://dashboard.stripe.com/webhooks" target="_blank" rel="noopener" className="text-primary underline">Stripe Dashboard → Webhooks</a></li>
                <li>Click "Add endpoint"</li>
                <li>Enter this URL:</li>
              </ol>
              
              <div className="flex items-center gap-2 bg-muted p-2 rounded">
                <code className="text-xs flex-1 break-all">{WEBHOOK_URL}</code>
                <Button size="sm" variant="ghost" onClick={() => copyToClipboard(WEBHOOK_URL)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm">4. Select these events:</p>
              <div className="flex flex-wrap gap-1">
                {REQUIRED_EVENTS.map(event => (
                  <Badge key={event} variant="outline" className="text-xs">{event}</Badge>
                ))}
              </div>
              
              <p className="text-sm">5. Copy the webhook signing secret (starts with <code>whsec_</code>) and add it to Supabase secrets as <code>STRIPE_WEBHOOK_SECRET</code></p>
              
              <Button asChild className="w-full mt-2">
                <a href="https://dashboard.stripe.com/webhooks" target="_blank" rel="noopener">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Stripe Webhooks Dashboard
                </a>
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {checks.map((check, i) => (
          <Card key={i} className={check.status === 'error' ? 'border-destructive' : check.status === 'warning' ? 'border-yellow-500' : 'border-green-500'}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">{check.name}</CardTitle>
                {check.status === 'ok' && <CheckCircle className="h-4 w-4 text-green-500" />}
                {check.status === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                {check.status === 'error' && <XCircle className="h-4 w-4 text-destructive" />}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{check.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{check.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Webhook Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Webhook Endpoint URL</label>
            <div className="flex items-center gap-2 mt-1">
              <code className="flex-1 p-2 bg-muted rounded text-sm break-all">{WEBHOOK_URL}</code>
              <Button size="sm" variant="outline" onClick={() => copyToClipboard(WEBHOOK_URL)}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Required Webhook Events</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {REQUIRED_EVENTS.map(event => (
                <Badge key={event} variant="secondary">{event}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
