import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { submitToIndexNow, pingSitemaps } from '@/utils/indexnow';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function TriggerIndexNowPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const triggerReindexing = async () => {
    setStatus('loading');
    setMessage('Notifying search engines...');

    const priorityUrls = [
      'https://safeorstolen.com/',
      'https://safeorstolen.com/verify',
      'https://safeorstolen.com/app',
      'https://safeorstolen.com/pricing',
      'https://safeorstolen.com/imei-checker',
      'https://safeorstolen.com/vin-checker',
      'https://safeorstolen.com/check-phone',
      'https://safeorstolen.com/check-car',
      'https://safeorstolen.com/sitemap.xml'
    ];

    try {
      // Ping sitemap
      await pingSitemaps();
      
      // Submit priority URLs
      const result = await submitToIndexNow(priorityUrls);

      if (result.success) {
        setStatus('success');
        setMessage('✅ IndexNow notification sent successfully! Search engines have been notified of the sitemap and redirect updates.');
      } else {
        setStatus('error');
        setMessage(`❌ Failed to notify search engines: ${result.error}`);
      }
    } catch (error) {
      setStatus('error');
      setMessage(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>IndexNow Revalidation</CardTitle>
          <CardDescription>
            Notify search engines about sitemap updates and new redirects
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/50 p-4">
            <h3 className="font-semibold mb-2">What this does:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Pings Google and Bing about sitemap.xml updates</li>
              <li>Submits 9 priority URLs via IndexNow API</li>
              <li>Notifies search engines of new 301 redirects</li>
              <li>Triggers faster re-crawling of updated pages</li>
            </ul>
          </div>

          <Button 
            onClick={triggerReindexing} 
            disabled={status === 'loading'}
            className="w-full"
            size="lg"
          >
            {status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {status === 'idle' && 'Trigger IndexNow Notification'}
            {status === 'loading' && 'Notifying Search Engines...'}
            {status === 'success' && <><CheckCircle className="mr-2 h-4 w-4" />Notification Sent</>}
            {status === 'error' && <><AlertCircle className="mr-2 h-4 w-4" />Try Again</>}
          </Button>

          {message && (
            <div className={`rounded-lg border p-4 ${
              status === 'success' ? 'border-green-500 bg-green-500/10 text-green-700' :
              status === 'error' ? 'border-red-500 bg-red-500/10 text-red-700' :
              'border-border'
            }`}>
              {message}
            </div>
          )}

          {status === 'success' && (
            <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm">
              <h4 className="font-semibold mb-2">Next Steps:</h4>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Wait 24-48 hours for search engines to re-crawl</li>
                <li>Check Google Search Console for indexing status</li>
                <li>Submit top URLs for re-indexing via GSC URL Inspection</li>
                <li>Monitor "Alternate page with proper canonical tag" count (should decrease)</li>
              </ol>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
