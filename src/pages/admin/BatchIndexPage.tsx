import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { SEOHead } from '@/components/seo/SEOHead';
import { Loader2, Zap, CheckCircle, ExternalLink } from 'lucide-react';

export default function BatchIndexPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const handleBatchSubmit = async () => {
    setLoading(true);
    setResult(null);

    try {
      console.log('🚀 Invoking batch-index-all-urls function...');

      const { data, error } = await supabase.functions.invoke('batch-index-all-urls', {
        body: {}
      });

      if (error) throw error;

      console.log('✅ Batch indexing complete:', data);
      setResult(data);

      toast({
        title: "✅ Indexing Submitted!",
        description: `${data.totalUrls} URLs submitted to IndexNow (Bing, Yandex, etc.)`,
        duration: 5000,
      });

    } catch (error: any) {
      console.error('❌ Batch indexing failed:', error);
      toast({
        title: "❌ Submission Failed",
        description: error.message || 'Failed to submit URLs for indexing',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Batch URL Indexing"
        description="Admin tool for batch URL indexing via IndexNow."
        canonical="/admin/batch-index"
        noIndex={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-8">
        <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Batch URL Indexing</h1>
          <p className="text-muted-foreground">
            Submit all SafeOrStolen URLs to search engines instantly via IndexNow
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              IndexNow Instant Indexing
            </CardTitle>
            <CardDescription>
              Submit all pages to Bing, Yandex, Seznam.cz, Naver, and other IndexNow search engines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Core Pages</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Item Pages</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Business</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">50</div>
                  <div className="text-sm text-muted-foreground">States</div>
                </div>
              </div>

              <Button 
                onClick={handleBatchSubmit} 
                disabled={loading}
                size="lg"
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting to IndexNow...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Submit All URLs to IndexNow
                  </>
                )}
              </Button>

              <div className="text-sm text-muted-foreground">
                <p className="mb-2">✅ <strong>Supported search engines:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Bing (Microsoft)</li>
                  <li>Yandex (Russia)</li>
                  <li>Seznam.cz (Czech Republic)</li>
                  <li>Naver (South Korea)</li>
                  <li>And more IndexNow partners</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {result && (
          <Card className="border-green-500/50 bg-green-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                Submission Successful
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Results:</p>
                  <ul className="space-y-1 text-sm">
                    <li>✅ Total URLs submitted: <strong>{result.totalUrls}</strong></li>
                    <li>✅ Core pages: {result.breakdown?.core}</li>
                    <li>✅ Item pages: {result.breakdown?.items}</li>
                    <li>✅ Business pages: {result.breakdown?.business}</li>
                    <li>✅ State pages: {result.breakdown?.states}</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Next Steps:</p>
                  <ul className="space-y-2 text-sm">
                    {result.nextSteps?.map((step: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary">→</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Google Search Console</CardTitle>
            <CardDescription>Manual submission required for Google</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Submit Sitemap</h3>
                <a 
                  href="https://search.google.com/search-console/sitemaps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  Submit https://safeorstolen.com/sitemap.xml
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. Request Indexing for Priority Pages</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Use URL Inspection Tool (10 requests per day):
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Homepage: https://safeorstolen.com/</li>
                  <li>• Verify: https://safeorstolen.com/verify</li>
                  <li>• Mobile App: https://safeorstolen.com/app</li>
                  <li>• Pricing: https://safeorstolen.com/pricing</li>
                  <li>• About: https://safeorstolen.com/about</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Validate Fixes</h3>
                <a 
                  href="https://search.google.com/search-console" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  Go to Pages → Click "Validate Fix"
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </>
  );
}
