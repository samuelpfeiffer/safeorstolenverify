import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useURLInspection, useGSCUrlStatus } from '@/hooks/useGSCData';
import { CheckCircle2, XCircle, AlertTriangle, ExternalLink, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PRIORITY_URLS = [
  { url: 'https://safeorstolen.com/', priority: 'Critical' },
  { url: 'https://safeorstolen.com/verify', priority: 'Critical' },
  { url: 'https://safeorstolen.com/imei-checker', priority: 'Critical' },
  { url: 'https://safeorstolen.com/vin-checker', priority: 'Critical' },
  { url: 'https://safeorstolen.com/app', priority: 'Critical' },
  { url: 'https://safeorstolen.com/serial-number-checker', priority: 'High' },
  { url: 'https://safeorstolen.com/how-it-works', priority: 'High' },
  { url: 'https://safeorstolen.com/check-phone', priority: 'High' },
  { url: 'https://safeorstolen.com/check-car', priority: 'High' },
  { url: 'https://safeorstolen.com/pricing', priority: 'High' },
  { url: 'https://safeorstolen.com/about', priority: 'Medium' },
  { url: 'https://safeorstolen.com/faq', priority: 'Medium' },
];

export default function GSCIndexCoverage() {
  const [checkingAll, setCheckingAll] = useState(false);
  const { toast } = useToast();
  
  const { mutate: inspectUrl, isPending: isInspecting } = useURLInspection();
  const { data: urlStatuses, isLoading, refetch } = useGSCUrlStatus();

  const handleInspectUrl = async (url: string) => {
    inspectUrl(url, {
      onSuccess: () => {
        toast({
          title: 'URL Inspection Complete',
          description: `Successfully inspected ${url}`,
        });
        refetch();
      },
      onError: (error) => {
        toast({
          title: 'Inspection Failed',
          description: error.message,
          variant: 'destructive',
        });
      },
    });
  };

  const handleCheckAll = async () => {
    setCheckingAll(true);
    toast({
      title: 'Bulk Inspection Started',
      description: `Checking ${PRIORITY_URLS.length} URLs...`,
    });

    for (const { url } of PRIORITY_URLS) {
      try {
        await new Promise((resolve) => {
          inspectUrl(url, {
            onSettled: () => resolve(null),
          });
        });
        // Rate limit: 1 request per 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error(`Failed to inspect ${url}:`, error);
      }
    }

    setCheckingAll(false);
    refetch();
    toast({
      title: 'Bulk Inspection Complete',
      description: 'All URLs have been checked',
    });
  };

  const getStatusBadge = (result: any) => {
    if (!result) {
      return <Badge variant="outline">Not Checked</Badge>;
    }

    if (result.verdict === 'PASS') {
      return (
        <Badge className="bg-green-600 hover:bg-green-700">
          <CheckCircle2 className="w-3 h-3 mr-1" />
          Indexed
        </Badge>
      );
    } else if (result.verdict === 'FAIL') {
      return (
        <Badge variant="destructive">
          <XCircle className="w-3 h-3 mr-1" />
          Not Indexed
        </Badge>
      );
    } else {
      return (
        <Badge variant="secondary">
          <AlertTriangle className="w-3 h-3 mr-1" />
          {result.verdict || 'Unknown'}
        </Badge>
      );
    }
  };

  const getStatusColor = (result: any) => {
    if (!result) return 'border-gray-200';
    if (result.verdict === 'PASS') return 'border-green-500 bg-green-50/50 dark:bg-green-950/20';
    if (result.verdict === 'FAIL') return 'border-red-500 bg-red-50/50 dark:bg-red-950/20';
    return 'border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/20';
  };

  const getUrlStatus = (url: string) => {
    return urlStatuses?.find(status => status.url === url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">URL Index Coverage</h2>
          <p className="text-muted-foreground">Monitor indexing status of priority pages</p>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => refetch()}
            disabled={isLoading}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button
            size="sm"
            onClick={handleCheckAll}
            disabled={checkingAll || isInspecting}
          >
            {checkingAll ? 'Checking...' : 'Check All URLs'}
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total URLs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{PRIORITY_URLS.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Indexed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {urlStatuses?.filter(s => s.verdict === 'PASS').length || 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Not Indexed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {urlStatuses?.filter(s => s.verdict === 'FAIL').length || 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unchecked</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {PRIORITY_URLS.length - (urlStatuses?.length || 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* URL List */}
      <Card>
        <CardHeader>
          <CardTitle>URL Inspection Status</CardTitle>
          <CardDescription>
            Real-time indexing status from Google Search Console
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {PRIORITY_URLS.map(({ url, priority }) => {
              const status = getUrlStatus(url);
              return (
                <div
                  key={url}
                  className={`p-4 border-2 rounded-lg transition-all ${getStatusColor(status)}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        {getStatusBadge(status)}
                        <Badge variant="outline">{priority}</Badge>
                      </div>
                      <code className="text-sm font-mono block truncate">{url}</code>
                      {status && (
                        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-muted-foreground">Indexing State:</span>
                            <span className="ml-2 font-medium">{status.indexingState || 'Unknown'}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Page Fetch:</span>
                            <span className="ml-2 font-medium">{status.pageFetchState || 'Unknown'}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Coverage:</span>
                            <span className="ml-2 font-medium">{status.coverageState || 'Unknown'}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Last Crawl:</span>
                            <span className="ml-2 font-medium">
                              {status.lastCrawlTime 
                                ? new Date(status.lastCrawlTime).toLocaleDateString()
                                : 'Never'}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleInspectUrl(url)}
                        disabled={isInspecting || checkingAll}
                      >
                        <RefreshCw className={`w-4 h-4 mr-1 ${isInspecting ? 'animate-spin' : ''}`} />
                        Inspect
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(
                          `https://search.google.com/search-console/inspect?resource_id=sc-domain:safeorstolen.com&url=${encodeURIComponent(url)}`,
                          '_blank'
                        )}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
