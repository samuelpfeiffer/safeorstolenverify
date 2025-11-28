import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const PRIORITY_URLS = [
  { url: '/', priority: 'Critical', day: 1 },
  { url: '/verify', priority: 'Critical', day: 1 },
  { url: '/imei-checker', priority: 'Critical', day: 1 },
  { url: '/vin-checker', priority: 'Critical', day: 1 },
  { url: '/app', priority: 'Critical', day: 1 },
  { url: '/serial-number-checker', priority: 'High', day: 2 },
  { url: '/how-it-works', priority: 'High', day: 2 },
  { url: '/check-phone', priority: 'High', day: 3 },
  { url: '/check-car', priority: 'High', day: 3 },
  { url: '/pricing', priority: 'High', day: 3 },
  { url: '/california-vin-lookup', priority: 'Medium', day: 4 },
  { url: '/texas-vin-lookup', priority: 'Medium', day: 4 },
  { url: '/florida-vin-lookup', priority: 'Medium', day: 5 },
  { url: '/new-york-vin-lookup', priority: 'Medium', day: 5 },
  { url: '/check-bike', priority: 'Medium', day: 6 },
  { url: '/faq', priority: 'Medium', day: 6 },
  { url: '/about', priority: 'Medium', day: 7 },
];

export default function GSCMonitoringDashboard() {
  const [submittedUrls, setSubmittedUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleIndexNowSubmit = async (urls: string[]) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('indexnow-submit', {
        body: { urls }
      });
      
      if (error) throw error;
      
      console.log('IndexNow submission result:', data);
      const newSubmitted = [...new Set([...submittedUrls, ...urls])];
      setSubmittedUrls(newSubmitted);
      localStorage.setItem('gsc-submitted-urls', JSON.stringify(newSubmitted));
    } catch (error) {
      console.error('IndexNow submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleSubmitted = (url: string) => {
    const updated = submittedUrls.includes(url)
      ? submittedUrls.filter(u => u !== url)
      : [...submittedUrls, url];
    setSubmittedUrls(updated);
    localStorage.setItem('gsc-submitted-urls', JSON.stringify(updated));
  };

  const todayUrls = PRIORITY_URLS.filter(item => item.day === 1);
  const weekUrls = PRIORITY_URLS.filter(item => item.day > 1 && item.day <= 7);

  return (
    <>
      <Helmet>
        <title>GSC Monitoring Dashboard | SafeOrStolen Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Google Search Console Monitoring</h1>
              <p className="text-muted-foreground">Track indexing progress and submit priority URLs</p>
            </div>
            <Button
              onClick={() => window.open('https://search.google.com/search-console', '_blank')}
              variant="outline"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open GSC
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Priority URLs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{PRIORITY_URLS.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Submitted</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {submittedUrls.length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Remaining</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">
                  {PRIORITY_URLS.length - submittedUrls.length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round((submittedUrls.length / PRIORITY_URLS.length) * 100)}%
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Today's URLs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Critical - Submit Today (Day 1)
              </CardTitle>
              <CardDescription>
                Submit these high-priority URLs immediately via GSC URL Inspection tool
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {todayUrls.map(item => (
                  <div key={item.url} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={submittedUrls.includes(item.url)}
                        onCheckedChange={() => handleToggleSubmitted(item.url)}
                      />
                      <code className="text-sm font-mono">{item.url}</code>
                      <Badge variant={item.priority === 'Critical' ? 'destructive' : 'default'}>
                        {item.priority}
                      </Badge>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(
                        `https://search.google.com/search-console/inspect?resource_id=sc-domain:safeorstolen.com&url=https://safeorstolen.com${item.url}`,
                        '_blank'
                      )}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Inspect
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button 
                  onClick={() => handleIndexNowSubmit(todayUrls.map(u => u.url))}
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit All via IndexNow'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* This Week's URLs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                High Priority - This Week (Days 2-7)
              </CardTitle>
              <CardDescription>
                Submit 2-3 URLs per day using GSC URL Inspection tool
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {weekUrls.map(item => (
                  <div key={item.url} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={submittedUrls.includes(item.url)}
                        onCheckedChange={() => handleToggleSubmitted(item.url)}
                      />
                      <code className="text-sm font-mono">{item.url}</code>
                      <Badge variant="secondary">Day {item.day}</Badge>
                      <Badge variant="outline">{item.priority}</Badge>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(
                        `https://search.google.com/search-console/inspect?resource_id=sc-domain:safeorstolen.com&url=https://safeorstolen.com${item.url}`,
                        '_blank'
                      )}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Inspect
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Daily GSC Workflow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Manual URL Inspection (Daily)</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Click "Inspect" button next to each URL</li>
                  <li>Click "Request Indexing" in GSC</li>
                  <li>Maximum 10 URLs per day (GSC limit)</li>
                  <li>Mark URLs as submitted using checkboxes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Check Coverage Report</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Review "Indexed" vs "Not indexed" pages</li>
                  <li>Fix any "Server error 5xx" immediately</li>
                  <li>Address "Soft 404" and "Duplicate canonical" issues</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Monitor Performance</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Check clicks and impressions daily</li>
                  <li>Compare week-over-week growth</li>
                  <li>Identify new indexing opportunities</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
