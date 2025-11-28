import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSearchAnalytics } from '@/hooks/useGSCData';
import { TrendingUp, TrendingDown, MousePointer, Eye, BarChart2, ArrowUpRight } from 'lucide-react';
import { format, subDays } from 'date-fns';

type DateRange = '7' | '30' | '90';

export default function GSCSearchAnalytics() {
  const [dateRange, setDateRange] = useState<DateRange>('30');
  
  const endDate = format(new Date(), 'yyyy-MM-dd');
  const startDate = format(subDays(new Date(), parseInt(dateRange)), 'yyyy-MM-dd');
  
  const { data: analytics, isLoading, error } = useSearchAnalytics(startDate, endDate);

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Search Analytics</CardTitle>
          <CardDescription>Unable to load analytics data</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-destructive">{error.message}</p>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Search Analytics</CardTitle>
          <CardDescription>Loading search performance data...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-20 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const queries = analytics?.queries || [];
  const pages = analytics?.pages || [];
  
  const totalClicks = queries.reduce((sum, q) => sum + q.clicks, 0);
  const totalImpressions = queries.reduce((sum, q) => sum + q.impressions, 0);
  const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
  const avgPosition = queries.length > 0 
    ? queries.reduce((sum, q) => sum + q.position, 0) / queries.length 
    : 0;

  return (
    <div className="space-y-6">
      {/* Date Range Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Search Performance</h2>
        <div className="flex gap-2">
          {(['7', '30', '90'] as DateRange[]).map(range => (
            <Button
              key={range}
              size="sm"
              variant={dateRange === range ? 'default' : 'outline'}
              onClick={() => setDateRange(range)}
            >
              {range} days
            </Button>
          ))}
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
              <MousePointer className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalClicks.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Last {dateRange} days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Impressions</CardTitle>
              <Eye className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalImpressions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Last {dateRange} days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Avg CTR</CardTitle>
              <BarChart2 className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgCTR.toFixed(2)}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Click-through rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Avg Position</CardTitle>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgPosition.toFixed(1)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Average ranking
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Top Queries */}
      <Card>
        <CardHeader>
          <CardTitle>Top Search Queries</CardTitle>
          <CardDescription>Keywords driving traffic to your site</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {queries.slice(0, 10).map((query, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{query.query}</p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MousePointer className="w-3 h-3" />
                      {query.clicks} clicks
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {query.impressions} impressions
                    </span>
                    <span>CTR: {((query.clicks / query.impressions) * 100).toFixed(1)}%</span>
                    <span>Pos: {query.position.toFixed(1)}</span>
                  </div>
                </div>
                <div className="ml-4">
                  {query.position <= 3 ? (
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  ) : query.position > 10 ? (
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  ) : (
                    <BarChart2 className="w-5 h-5 text-orange-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
          {queries.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No search query data available yet.</p>
              <p className="text-sm mt-2">Data appears after URLs are indexed and receiving traffic.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Landing Pages</CardTitle>
          <CardDescription>Pages receiving the most search traffic</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pages.slice(0, 10).map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <code className="text-sm font-mono truncate block">{page.page}</code>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MousePointer className="w-3 h-3" />
                      {page.clicks} clicks
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {page.impressions} impressions
                    </span>
                    <span>CTR: {((page.clicks / page.impressions) * 100).toFixed(1)}%</span>
                    <span>Pos: {page.position.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {pages.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No page performance data available yet.</p>
              <p className="text-sm mt-2">Data appears after URLs are indexed and receiving traffic.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
