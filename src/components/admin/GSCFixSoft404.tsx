import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, ExternalLink, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export function GSCFixSoft404() {
  const [isFixing, setIsFixing] = useState(false);
  const { toast } = useToast();

  const SOFT_404_URL = 'https://safeorstolen.com/service-limitations';

  const handleFixSoft404 = async () => {
    setIsFixing(true);
    try {
      const { data, error } = await supabase.functions.invoke('fix-soft-404');
      
      if (error) throw error;

      toast({
        title: 'Fix Initiated',
        description: `${data.actions.length} actions completed. Google will recrawl within 24-48 hours.`,
      });
    } catch (error: any) {
      toast({
        title: 'Fix Failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsFixing(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Soft 404 Issue
            </CardTitle>
            <CardDescription>
              Fix cached soft 404 error on /service-limitations
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Active Issue
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Problem:</p>
              <p className="text-sm text-muted-foreground">
                <code className="bg-background px-1.5 py-0.5 rounded text-xs">
                  /service-limitations
                </code> was showing Soft 404 error (first detected Sept 9, 2025)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Fix Applied:</p>
              <p className="text-sm text-muted-foreground">
                Server-side 301 redirect to <code className="bg-background px-1.5 py-0.5 rounded text-xs">/terms</code> is now active
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg space-y-2">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Automated Fix Actions:</p>
          <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-decimal list-inside">
            <li>Submit URL to IndexNow (notify Bing, Yandex immediately)</li>
            <li>Request GSC URL inspection (update Google cache)</li>
            <li>Issue should resolve within 24-48 hours</li>
          </ol>
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={handleFixSoft404}
            disabled={isFixing}
            className="flex-1"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isFixing ? 'animate-spin' : ''}`} />
            {isFixing ? 'Fixing...' : 'Fix Soft 404 Now'}
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open('https://search.google.com/search-console/index?resource_id=sc-domain:safeorstolen.com', '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View in GSC
          </Button>
        </div>

        <div className="text-xs text-muted-foreground">
          <p className="font-medium mb-1">Technical Details:</p>
          <ul className="space-y-0.5">
            <li>• Redirect: <code>/service-limitations → /terms 301!</code></li>
            <li>• Location: <code>public/_redirects</code> line 230</li>
            <li>• Status: Server-side redirect active</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
