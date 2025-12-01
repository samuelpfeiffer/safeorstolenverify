import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Plug, CheckCircle2 } from 'lucide-react';
import { useGSCConnection } from '@/hooks/useGSCData';
import { useNavigate } from 'react-router-dom';
import GSCSearchAnalytics from '@/components/admin/GSCSearchAnalytics';
import GSCIndexCoverage from '@/components/admin/GSCIndexCoverage';
import GSCAISuggestions from '@/components/admin/GSCAISuggestions';
import { GSCSyncMonitor } from '@/components/admin/GSCSyncMonitor';
import { GSCFixSoft404 } from '@/components/admin/GSCFixSoft404';
import { GSCErrorSummary } from '@/components/admin/GSCErrorSummary';

export default function GSCMonitoringDashboard() {
  const navigate = useNavigate();
  const { isConnected, isCheckingConnection } = useGSCConnection();
  const [activeTab, setActiveTab] = useState('overview');

  if (isCheckingConnection) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Checking GSC connection...</p>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <>
        <Helmet>
          <title>GSC Monitoring Dashboard | SafeOrStolen Admin</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>

        <div className="min-h-screen bg-background p-6">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Plug className="w-6 h-6" />
                  <CardTitle>Google Search Console Not Connected</CardTitle>
                </div>
                <CardDescription>
                  Connect your Google Search Console account to access real-time search analytics and indexing data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">What you'll get:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                        <span>Real-time search performance analytics (clicks, impressions, CTR)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                        <span>URL indexing status monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                        <span>AI-powered SEO recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                        <span>Automated URL inspection</span>
                      </li>
                    </ul>
                  </div>
                  <Button onClick={() => navigate('/admin/gsc-connect')} className="w-full">
                    <Plug className="w-4 h-4 mr-2" />
                    Connect Google Search Console
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>GSC Monitoring Dashboard | SafeOrStolen Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">Google Search Console</h1>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Connected
                </Badge>
              </div>
              <p className="text-muted-foreground">Real-time search analytics and indexing monitoring</p>
            </div>
            <Button
              onClick={() => window.open('https://search.google.com/search-console', '_blank')}
              variant="outline"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open GSC
            </Button>
          </div>

          {/* Tabbed Interface */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="coverage">Coverage</TabsTrigger>
              <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common GSC monitoring tasks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setActiveTab('analytics')}
                    >
                      View Search Performance
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setActiveTab('coverage')}
                    >
                      Check URL Indexing Status
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setActiveTab('suggestions')}
                    >
                      Get AI Recommendations
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://search.google.com/search-console/performance', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open GSC Performance
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Daily Workflow</CardTitle>
                    <CardDescription>Best practices for GSC monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <span className="font-semibold text-primary">1.</span>
                        <span>Check search analytics for traffic changes</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-primary">2.</span>
                        <span>Review URL coverage for indexing issues</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-primary">3.</span>
                        <span>Apply AI suggestions to improve SEO</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-primary">4.</span>
                        <span>Submit new URLs via IndexNow API</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-primary">5.</span>
                        <span>Monitor for crawl errors and fix immediately</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              {/* GSC Error Status - Zero Errors */}
              <GSCErrorSummary />

              {/* Active Issues & Redirect Strategy */}
              <GSCFixSoft404 />

              {/* Automated Sync Monitor */}
              <GSCSyncMonitor />

              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>Integration health and connectivity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">GSC Connected</p>
                        <p className="text-xs text-muted-foreground">OAuth authenticated</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">IndexNow Active</p>
                        <p className="text-xs text-muted-foreground">URL submission enabled</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">AI Suggestions</p>
                        <p className="text-xs text-muted-foreground">Data analysis active</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <GSCSearchAnalytics />
            </TabsContent>

            <TabsContent value="coverage">
              <GSCIndexCoverage />
            </TabsContent>

            <TabsContent value="suggestions">
              <GSCAISuggestions />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
