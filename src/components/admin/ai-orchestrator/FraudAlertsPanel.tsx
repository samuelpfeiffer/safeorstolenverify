import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShieldAlert, CheckCircle, Eye, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';

export const FraudAlertsPanel = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: alerts, isLoading } = useQuery({
    queryKey: ['fraud-analysis'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('fraud_analysis')
        .select('*, stolen_items:report_id(item_type, brand, model, serial_number)')
        .eq('reviewed', false)
        .order('fraud_probability', { ascending: false })
        .limit(20);
      if (error) throw error;
      return data;
    },
  });

  const markReviewed = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('fraud_analysis')
        .update({ reviewed: true, reviewed_at: new Date().toISOString() })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fraud-analysis'] });
      toast({ title: 'Reviewed', description: 'Alert marked as reviewed' });
    },
  });

  const getProbabilityColor = (prob: number) => {
    if (prob >= 70) return 'text-destructive';
    if (prob >= 40) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getProbabilityBadge = (prob: number) => {
    if (prob >= 70) return 'destructive';
    if (prob >= 40) return 'secondary';
    return 'default';
  };

  if (isLoading) {
    return <Card><CardContent className="p-6">Loading fraud alerts...</CardContent></Card>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-destructive" />
          Fraud Alerts ({alerts?.length || 0})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {alerts?.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No unreviewed fraud alerts</p>
          ) : (
            <div className="space-y-3">
              {alerts?.map((alert) => {
                const indicators = alert.indicators as { indicators?: string[] } | null;
                const indicatorList = indicators?.indicators || [];
                
                return (
                  <div key={alert.id} className="border rounded-lg p-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className={`w-4 h-4 ${getProbabilityColor(alert.fraud_probability)}`} />
                        <span className="font-medium text-sm">
                          {(alert as any).stolen_items?.item_type || 'Unknown Item'}
                        </span>
                      </div>
                      <Badge variant={getProbabilityBadge(alert.fraud_probability) as any}>
                        {alert.fraud_probability}% Risk
                      </Badge>
                    </div>
                    
                    <div className="mb-2">
                      <Progress value={alert.fraud_probability} className="h-2" />
                    </div>
                    
                    {indicatorList.length > 0 && (
                      <div className="mb-2">
                        <p className="text-xs text-muted-foreground mb-1">Indicators:</p>
                        <div className="flex flex-wrap gap-1">
                          {indicatorList.slice(0, 3).map((ind: string, i: number) => (
                            <Badge key={i} variant="outline" className="text-xs">{ind}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {alert.recommendation && (
                      <p className="text-xs text-muted-foreground mb-2">{alert.recommendation}</p>
                    )}
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => markReviewed.mutate(alert.id)}
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Mark Reviewed
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Eye className="w-3 h-3 mr-1" />
                        View Report
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
