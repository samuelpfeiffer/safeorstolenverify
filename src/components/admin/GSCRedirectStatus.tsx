import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ExternalLink, Info } from 'lucide-react';

export function GSCRedirectStatus() {
  const REDIRECT_EXPLANATIONS = [
    {
      url: '/service-limitations → /terms',
      status: 'Server-side 301 only',
      explanation: 'Removed from React routes - Google will only see 301 redirect',
    },
    {
      url: '/verify-not-stolen → /verify',
      status: 'Server-side 301',
      explanation: 'All redirect URLs use server-side 301 redirects in public/_redirects',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Redirect Strategy - No GSC Errors
            </CardTitle>
            <CardDescription>
              All redirects use server-side 301 only - Google never sees page content
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Zero Errors
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg space-y-2">
          <p className="text-sm font-medium text-green-900 dark:text-green-100">Strategy Implementation:</p>
          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
            <li>✓ All redirects defined ONLY in public/_redirects (server-side 301)</li>
            <li>✓ Removed ALL client-side React redirect routes</li>
            <li>✓ Removed redirect URLs from sitemap.xml</li>
            <li>✓ Removed redirect URLs from route validators</li>
            <li>✓ Google sees instant 301 redirect - no page content loaded</li>
            <li>✓ Zero "has issues" or "Video detected" errors possible</li>
          </ul>
          <p className="text-xs text-green-700 dark:text-green-300 mt-2">
            Result: Redirect URLs will show "Crawled - not indexed" in GSC (expected behavior, not an error)
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg space-y-3">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Why This Eliminates GSC Errors:</p>
              <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Server-side 301 redirects happen BEFORE any HTML/JS loads</li>
                <li>• Google's crawler never sees page content, videos, or schema</li>
                <li>• No "has issues" errors because page content never renders</li>
                <li>• No "Video detected" errors because video elements never load</li>
                <li>• Redirect URLs marked "Crawled - not indexed" (expected, not error)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm font-medium mb-2">Active Server-Side Redirects:</p>
          <div className="text-xs font-mono space-y-1 text-muted-foreground">
            {REDIRECT_EXPLANATIONS.map((redirect, i) => (
              <div key={i} className="flex items-center justify-between py-1 border-b border-border/50 last:border-0">
                <span>{redirect.url}</span>
                <Badge variant="outline" className="text-xs">{redirect.status}</Badge>
              </div>
            ))}
            <div className="pt-2 text-center">
              <code className="text-xs">+ 13 more redirects in public/_redirects</code>
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
          <Button 
            variant="outline"
            onClick={() => window.open('https://safeorstolen.com/service-limitations', '_blank')}
            className="flex-1"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Test Redirect
          </Button>
        </div>

        <div className="text-xs text-muted-foreground space-y-2 pt-2 border-t border-border">
          <div>
            <p className="font-medium mb-1">Expected GSC Behavior:</p>
            <ul className="space-y-0.5">
              <li>• Redirect URLs will show "Crawled - currently not indexed" status</li>
              <li>• This is CORRECT behavior - redirects should not be indexed</li>
              <li>• Destination URLs (/terms, /verify, etc.) will be fully indexed</li>
              <li>• No "has issues" warnings because Google never loads page content</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-1">Verification Steps:</p>
            <ul className="space-y-0.5">
              <li>1. Visit redirect URL → Should instantly redirect to destination</li>
              <li>2. Check GSC → Redirect URLs show "not indexed" (expected)</li>
              <li>3. Check GSC → Destination URLs show "Indexed" (correct)</li>
              <li>4. Zero "has issues" or enhancement errors</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}