import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ExternalLink } from 'lucide-react';

export function GSCFixSoft404() {
  const REMOVED_REDIRECT_URLS = [
    '/verify-not-stolen → /verify',
    '/verification-hub → /verify',
    '/stolen-property-lookup → /verify',
    '/stolen-merchandise-check → /verify',
    '/avoid-buying-stolen-goods → /how-it-works',
    '/stolen-items-database → /data-sources',
    '/how-to-check-if-anything-is-stolen-before-you-buy → /how-it-works',
    '/disclaimer → /terms',
    '/our-story → /about',
    '/enterprise-demo → /for-brands',
    '/for-consumers → /',
    '/terms-of-service → /terms',
    '/privacy-policy → /privacy',
    '/service-limitations → /terms',
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Sitemap Redirect Cleanup
            </CardTitle>
            <CardDescription>
              All redirect URLs removed from sitemap.xml
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            {REMOVED_REDIRECT_URLS.length} Redirects Cleaned
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg space-y-2">
          <p className="text-sm font-medium text-green-900 dark:text-green-100">Cleanup Complete (Dec 1, 2025):</p>
          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
            <li>✓ Removed {REMOVED_REDIRECT_URLS.length} redirect URLs from sitemap.xml</li>
            <li>✓ All redirects remain functional via public/_redirects</li>
            <li>✓ Only canonical destination pages in sitemap</li>
            <li>✓ Prevents "Alternate page with proper canonical tag" GSC errors</li>
          </ul>
          <p className="text-xs text-green-700 dark:text-green-300 mt-2">
            Google will recrawl sitemap within 24-48 hours and remove redirect URLs from index.
          </p>
        </div>

        <div className="bg-muted p-4 rounded-lg space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Removed Redirect URLs:</p>
              <div className="text-xs text-muted-foreground space-y-0.5 max-h-48 overflow-y-auto">
                {REMOVED_REDIRECT_URLS.map((redirect, i) => (
                  <div key={i} className="font-mono">{redirect}</div>
                ))}
              </div>
            </div>
          </div>
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
            <p className="font-medium mb-1">Why This Matters:</p>
            <ul className="space-y-0.5">
              <li>• Redirect URLs in sitemap cause GSC "Alternate page with proper canonical tag" errors</li>
              <li>• Google prefers sitemaps contain only canonical destination URLs</li>
              <li>• Client-side redirects remain functional - only removed from sitemap</li>
              <li>• Server-side 301 redirects in <code>public/_redirects</code> still active</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-1">Next Steps:</p>
            <ul className="space-y-0.5">
              <li>• Monitor GSC Index Coverage for reduction in "Alternate page" errors</li>
              <li>• Expect full cleanup within 24-48 hours after Google recrawls</li>
              <li>• All redirect URLs should show "Crawled - not indexed" status (expected)</li>
              <li>• Destination canonical pages should remain fully indexed</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
