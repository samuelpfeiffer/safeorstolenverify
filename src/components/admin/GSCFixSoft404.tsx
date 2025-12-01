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
              <CheckCircle className="h-5 w-5 text-green-500" />
              URL Indexing Status
            </CardTitle>
            <CardDescription>
              /service-limitations - Monitoring remaining enhancement issues
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Soft 404 Fixed
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">✓ Soft 404 Resolved (Dec 1, 2025):</p>
              <p className="text-sm text-muted-foreground">
                <code className="bg-background px-1.5 py-0.5 rounded text-xs">
                  /service-limitations
                </code> is now "available to Google" - 301 redirect recognized
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Remaining Issues:</p>
              <p className="text-sm text-muted-foreground">
                "Has issues" status - investigating enhancements eligibility blockers
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg space-y-2">
          <p className="text-sm font-medium text-green-900 dark:text-green-100">Resolution Complete:</p>
          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
            <li>✓ Soft 404 resolved - URL available to Google</li>
            <li>✓ 301 redirect working correctly</li>
            <li>✓ Removed from sitemap (redirects shouldn't be indexed)</li>
            <li>• "Has issues" status is expected for redirect URLs</li>
          </ul>
          <p className="text-xs text-green-700 dark:text-green-300 mt-2">
            No further action needed - Google recognizes this as a proper redirect.
          </p>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline"
            onClick={() => window.open('https://search.google.com/search-console/index?resource_id=sc-domain:safeorstolen.com', '_blank')}
            className="flex-1"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View in GSC
          </Button>
        </div>

        <div className="text-xs text-muted-foreground space-y-2">
          <div>
            <p className="font-medium mb-1">Technical Details:</p>
            <ul className="space-y-0.5">
              <li>• Redirect: <code>/service-limitations → /terms 301!</code></li>
              <li>• Location: <code>public/_redirects</code> line 230</li>
              <li>• Status: Active, recognized by Google</li>
              <li>• Last tested: Dec 1, 2025, 1:50 AM</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-1">Possible Issue Sources:</p>
            <ul className="space-y-0.5">
              <li>• Mobile usability (check responsive design)</li>
              <li>• Core Web Vitals (check page speed)</li>
              <li>• Structured data errors (check schema validation)</li>
              <li>• Video enhancement eligibility</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
