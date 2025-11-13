import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Activity, TrendingUp, Shield, Database } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AnalyticsData {
  totalVerifications: number;
  stolenFound: number;
  safeItems: number;
  averageConfidence: number;
  providerStats: Record<string, { total: number; stolen: number; avgConfidence: number }>;
  recentVerifications: Array<{
    id: string;
    serial_number: string;
    item_type: string;
    status: string;
    confidence_score: number;
    api_source: string;
    created_at: string;
    result: any;
  }>;
}

export default function Analytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      setLoading(true);

      // Get all verifications
      const { data: verifications, error } = await supabase
        .from('verification_searches')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;

      if (!verifications || verifications.length === 0) {
        setData({
          totalVerifications: 0,
          stolenFound: 0,
          safeItems: 0,
          averageConfidence: 0,
          providerStats: {},
          recentVerifications: []
        });
        return;
      }

      // Parse result JSON to extract status, confidence, and source
      const parsedVerifications = verifications.map(v => {
        const result = v.result as any;
        return {
          ...v,
          status: result?.status || 'unknown',
          confidence_score: result?.confidence || 50,
          api_source: result?.provider || result?.source || 'Unknown'
        };
      });

      // Calculate stats
      const stolenCount = parsedVerifications.filter(v => v.status === 'stolen').length;
      const safeCount = parsedVerifications.filter(v => v.status === 'safe').length;
      const avgConfidence = parsedVerifications.reduce((sum, v) => sum + (v.confidence_score || 50), 0) / parsedVerifications.length;

      // Provider stats
      const providerStats: Record<string, { total: number; stolen: number; avgConfidence: number }> = {};
      
      parsedVerifications.forEach(v => {
        const source = v.api_source || 'Unknown';
        if (!providerStats[source]) {
          providerStats[source] = { total: 0, stolen: 0, avgConfidence: 0 };
        }
        providerStats[source].total++;
        if (v.status === 'stolen') providerStats[source].stolen++;
        providerStats[source].avgConfidence += (v.confidence_score || 50);
      });

      // Calculate average confidence per provider
      Object.keys(providerStats).forEach(key => {
        providerStats[key].avgConfidence = Math.round(providerStats[key].avgConfidence / providerStats[key].total);
      });

      setData({
        totalVerifications: verifications.length,
        stolenFound: stolenCount,
        safeItems: safeCount,
        averageConfidence: Math.round(avgConfidence),
        providerStats,
        recentVerifications: parsedVerifications.slice(0, 10)
      });

    } catch (error) {
      console.error('Error loading analytics:', error);
      toast({
        title: 'Error',
        description: 'Failed to load analytics data',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const detectionRate = data.totalVerifications > 0 
    ? Math.round((data.stolenFound / data.totalVerifications) * 100) 
    : 0;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Verification Analytics</h1>
        <p className="text-muted-foreground">AI-powered insights into verification performance</p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Verifications</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalVerifications}</div>
            <p className="text-xs text-muted-foreground">All-time checks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stolen Items Found</CardTitle>
            <Shield className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{data.stolenFound}</div>
            <p className="text-xs text-muted-foreground">{detectionRate}% detection rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Safe Items</CardTitle>
            <Shield className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{data.safeItems}</div>
            <p className="text-xs text-muted-foreground">Verified clean</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg AI Confidence</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.averageConfidence}%</div>
            <Progress value={data.averageConfidence} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Provider Performance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Provider Performance
          </CardTitle>
          <CardDescription>AI confidence scores and detection rates by data source</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(data.providerStats).map(([provider, stats]) => {
              const detectionRate = Math.round((stats.stolen / stats.total) * 100);
              return (
                <div key={provider} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{provider}</span>
                      <Badge variant="outline">{stats.total} checks</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {stats.stolen} stolen ({detectionRate}%)
                      </span>
                      <Badge variant={stats.avgConfidence >= 80 ? 'default' : 'secondary'}>
                        {stats.avgConfidence}% confidence
                      </Badge>
                    </div>
                  </div>
                  <Progress value={stats.avgConfidence} className="h-2" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Verifications */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Verifications</CardTitle>
          <CardDescription>Latest verification checks with AI analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.recentVerifications.map((verification) => (
              <div key={verification.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm">{verification.serial_number}</span>
                    <Badge variant="outline">{verification.item_type}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {verification.api_source} • {new Date(verification.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={verification.status === 'stolen' ? 'destructive' : 'default'}>
                    {verification.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {verification.confidence_score || 50}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
