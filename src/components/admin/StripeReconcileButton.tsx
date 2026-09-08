import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, CheckCircle2, XCircle, Clock, AlertTriangle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ReconcileResult {
  success: boolean;
  scanned: number;
  recovered: number;
  stillPending: number;
  expired: number;
  errors: string[];
  dryRun: boolean;
  message: string;
  details: Array<{
    purchaseId: string;
    sessionId: string;
    action: string;
    email?: string;
    amount?: number;
    tier?: string;
  }>;
}

export const StripeReconcileButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ReconcileResult | null>(null);
  const { toast } = useToast();

  const runReconciliation = async (dryRun: boolean = false) => {
    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('stripe-reconcile-purchases', {
        body: { daysBack: 30, dryRun }
      });

      if (error) {
        throw error;
      }

      setResult(data);
      
      if (data.recovered > 0) {
        toast({
          title: dryRun ? 'Dry Run Complete' : 'Payments Recovered!',
          description: `${data.recovered} payment(s) ${dryRun ? 'would be' : 'have been'} recovered.`,
        });
      } else {
        toast({
          title: 'Sync Complete',
          description: 'No missed payments found.',
        });
      }
    } catch (error: any) {
      console.error('Reconciliation error:', error);
      toast({
        title: 'Sync Failed',
        description: error.message || 'Failed to reconcile payments',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'recovered':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'expired':
        return <XCircle className="h-4 w-4 text-muted-foreground" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RefreshCw className="h-5 w-5" />
          Stripe Payment Sync
        </CardTitle>
        <CardDescription>
          Recover payments that may have been missed due to webhook issues
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button 
            onClick={() => runReconciliation(true)} 
            disabled={isLoading}
            variant="outline"
          >
            {isLoading ? (
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Preview (Dry Run)
          </Button>
          <Button 
            onClick={() => runReconciliation(false)} 
            disabled={isLoading}
          >
            {isLoading ? (
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Sync Now
          </Button>
        </div>

        {result && (
          <div className="space-y-4 pt-4 border-t">
            {/* Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-2xl font-bold">{result.scanned}</div>
                <div className="text-sm text-muted-foreground">Scanned</div>
              </div>
              <div className="text-center p-3 bg-green-500/10 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{result.recovered}</div>
                <div className="text-sm text-muted-foreground">Recovered</div>
              </div>
              <div className="text-center p-3 bg-yellow-500/10 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{result.stillPending}</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-muted-foreground">{result.expired}</div>
                <div className="text-sm text-muted-foreground">Expired</div>
              </div>
            </div>

            {/* Dry run indicator */}
            {result.dryRun && (
              <div className="flex items-center gap-2 p-3 bg-yellow-500/10 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm">This was a dry run. Click "Sync Now" to apply changes.</span>
              </div>
            )}

            {/* Recovered payments details */}
            {result.details.filter(d => d.action === 'recovered').length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium">Recovered Payments</h4>
                <div className="space-y-2">
                  {result.details
                    .filter(d => d.action === 'recovered')
                    .map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-green-500/10 rounded-[0.25rem] text-sm">
                        <div className="flex items-center gap-2">
                          {getActionIcon(detail.action)}
                          <span>{detail.email || 'Unknown'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{detail.tier}</Badge>
                          <span className="font-mono">${(detail.amount || 0) / 100}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Errors */}
            {result.errors.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-destructive">Errors ({result.errors.length})</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  {result.errors.slice(0, 5).map((error, idx) => (
                    <div key={idx} className="text-destructive">{error}</div>
                  ))}
                  {result.errors.length > 5 && (
                    <div>...and {result.errors.length - 5} more</div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
