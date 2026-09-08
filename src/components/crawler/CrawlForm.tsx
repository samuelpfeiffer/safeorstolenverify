import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2, Globe, FileText } from 'lucide-react';

interface CrawlResult {
  success: boolean;
  status?: string;
  completed?: number;
  total?: number;
  creditsUsed?: number;
  expiresAt?: string;
  data?: any[];
  error?: string;
}

export const CrawlForm = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [crawlResult, setCrawlResult] = useState<CrawlResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);
    setCrawlResult(null);

    try {
      console.log('Starting crawl for URL:', url);
      const result = await FirecrawlService.crawlWebsite(url, {
        limit: 10,
        scrapeOptions: {
          formats: ['markdown', 'html'],
          onlyMainContent: true,
        },
      });

      setProgress(100);

      if (result.success) {
        toast({
          title: 'Success',
          description: 'Website crawled successfully',
        });
        setCrawlResult(result.data as any);
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to crawl website',
          variant: 'destructive',
        });
        setCrawlResult({ success: false, error: result.error });
      }
    } catch (error) {
      console.error('Error crawling website:', error);
      toast({
        title: 'Error',
        description: 'Failed to crawl website',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            <CardTitle>Website Crawler</CardTitle>
          </div>
          <CardDescription>
            Enter a website URL to crawl and extract content from multiple pages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="url">Website URL</Label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                required
                disabled={isLoading}
              />
            </div>

            {isLoading && (
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-muted-foreground text-center">
                  Crawling website...
                </p>
              </div>
            )}

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Crawling...
                </>
              ) : (
                <>
                  <Globe className="mr-2 h-4 w-4" />
                  Start Crawl
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {crawlResult && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              <CardTitle>Crawl Results</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            {crawlResult.success ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-semibold">{crawlResult.status}</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="font-semibold">{crawlResult.completed}</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Pages</p>
                    <p className="font-semibold">{crawlResult.total}</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Credits Used</p>
                    <p className="font-semibold">{crawlResult.creditsUsed}</p>
                  </div>
                </div>

                {crawlResult.data && crawlResult.data.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Crawled Pages:</h3>
                    <div className="bg-muted p-4 rounded-[0.25rem] overflow-auto max-h-96">
                      <pre className="text-sm whitespace-pre-wrap">
                        {JSON.stringify(crawlResult.data, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-destructive">
                <p className="font-semibold">Error:</p>
                <p>{crawlResult.error}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
