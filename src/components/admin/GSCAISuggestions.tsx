import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSearchAnalytics, useGSCUrlStatus } from '@/hooks/useGSCData';
import { AlertCircle, TrendingDown, Link2, FileText, Lightbulb, ExternalLink } from 'lucide-react';
import { format, subDays } from 'date-fns';

interface Suggestion {
  id: string;
  type: 'ctr' | 'internal-linking' | 'new-content' | 'canonical' | 'performance';
  priority: 'critical' | 'high' | 'medium';
  title: string;
  description: string;
  metric?: string;
  action?: string;
  url?: string;
}

export default function GSCAISuggestions() {
  const endDate = format(new Date(), 'yyyy-MM-dd');
  const startDate = format(subDays(new Date(), 30), 'yyyy-MM-dd');
  
  const { data: analytics } = useSearchAnalytics(startDate, endDate);
  const { data: urlStatuses } = useGSCUrlStatus();

  const generateSuggestions = (): Suggestion[] => {
    const suggestions: Suggestion[] = [];

    // Analyze queries for low CTR opportunities
    const queries = analytics?.queries || [];
    const lowCTRQueries = queries.filter(q => {
      const ctr = (q.clicks / q.impressions) * 100;
      return q.impressions > 50 && ctr < 2;
    });

    lowCTRQueries.slice(0, 3).forEach((query, index) => {
      suggestions.push({
        id: `ctr-${index}`,
        type: 'ctr',
        priority: 'high',
        title: `Improve CTR for "${query.query}"`,
        description: `This query has ${query.impressions} impressions but only ${query.clicks} clicks (${((query.clicks / query.impressions) * 100).toFixed(1)}% CTR). Consider optimizing the title and meta description.`,
        metric: `${((query.clicks / query.impressions) * 100).toFixed(1)}% CTR`,
        action: 'Rewrite title/meta to be more compelling and match search intent',
      });
    });

    // Analyze pages with high impressions but low clicks
    const pages = analytics?.pages || [];
    const highImpressionPages = pages.filter(p => p.impressions > 100 && p.clicks < 5);

    highImpressionPages.slice(0, 2).forEach((page, index) => {
      suggestions.push({
        id: `linking-${index}`,
        type: 'internal-linking',
        priority: 'medium',
        title: `Add internal links to ${page.page}`,
        description: `This page receives ${page.impressions} impressions but only ${page.clicks} clicks. Improve CTR with better internal linking and enhanced snippets.`,
        metric: `${page.impressions} impressions, ${page.clicks} clicks`,
        url: page.page,
      });
    });

    // Identify queries without matching pages
    const topQueries = queries.slice(0, 20);
    const existingPages = pages.map(p => p.page.toLowerCase());
    
    topQueries.forEach((query, index) => {
      const queryKeywords = query.query.toLowerCase().split(' ');
      const hasMatchingPage = existingPages.some(page => 
        queryKeywords.some(keyword => page.includes(keyword))
      );

      if (!hasMatchingPage && query.impressions > 20 && index < 2) {
        suggestions.push({
          id: `content-${index}`,
          type: 'new-content',
          priority: 'high',
          title: `Create content for "${query.query}"`,
          description: `Users are searching for this (${query.impressions} impressions) but you don't have a dedicated page. Create targeted content to capture this traffic.`,
          metric: `${query.impressions} impressions, no landing page`,
          action: 'Create new landing page or blog post targeting this keyword',
        });
      }
    });

    // Check for canonical issues
    const failedUrls = urlStatuses?.filter(s => s.verdict === 'FAIL') || [];
    failedUrls.slice(0, 2).forEach((url, index) => {
      suggestions.push({
        id: `canonical-${index}`,
        type: 'canonical',
        priority: 'critical',
        title: `Fix indexing issue: ${url.url}`,
        description: `This URL is not indexed. Coverage state: ${url.coverageState || 'Unknown'}. Check for canonical tag issues, robots.txt blocks, or crawl errors.`,
        metric: `Not indexed`,
        url: url.url,
        action: 'Inspect in GSC and fix blocking issues',
      });
    });

    // Performance suggestions for high-position queries
    const highPositionQueries = queries.filter(q => q.position > 10 && q.impressions > 50);
    highPositionQueries.slice(0, 2).forEach((query, index) => {
      suggestions.push({
        id: `performance-${index}`,
        type: 'performance',
        priority: 'medium',
        title: `Improve ranking for "${query.query}"`,
        description: `Currently ranking at position ${query.position.toFixed(1)} with ${query.impressions} impressions. Target top 10 to increase clicks by 5-10x.`,
        metric: `Position ${query.position.toFixed(1)}`,
        action: 'Enhance content quality, add internal links, improve page speed',
      });
    });

    return suggestions.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  };

  const suggestions = generateSuggestions();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'destructive';
      case 'high':
        return 'default';
      case 'medium':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'ctr':
        return <TrendingDown className="w-5 h-5" />;
      case 'internal-linking':
        return <Link2 className="w-5 h-5" />;
      case 'new-content':
        return <FileText className="w-5 h-5" />;
      case 'canonical':
        return <AlertCircle className="w-5 h-5" />;
      case 'performance':
        return <Lightbulb className="w-5 h-5" />;
      default:
        return <Lightbulb className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">AI-Powered SEO Suggestions</h2>
        <p className="text-muted-foreground">Data-driven recommendations based on GSC analytics</p>
      </div>

      {suggestions.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No Suggestions Yet</CardTitle>
            <CardDescription>
              AI suggestions will appear once you have search analytics data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Connect your GSC account and wait for traffic data to appear.</p>
              <p className="text-sm mt-2">Suggestions are generated from queries, pages, and indexing data.</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.id} className="border-l-4" style={{
              borderLeftColor: suggestion.priority === 'critical' ? 'hsl(var(--destructive))' : 
                               suggestion.priority === 'high' ? 'hsl(var(--primary))' : 
                               'hsl(var(--secondary))'
            }}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="mt-1">
                      {getTypeIcon(suggestion.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{suggestion.title}</CardTitle>
                        <Badge variant={getPriorityColor(suggestion.priority)}>
                          {suggestion.priority}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {suggestion.description}
                      </CardDescription>
                      {suggestion.metric && (
                        <div className="mt-2">
                          <Badge variant="outline" className="font-mono text-xs">
                            {suggestion.metric}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              {(suggestion.action || suggestion.url) && (
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2">
                    {suggestion.action && (
                      <div className="flex-1 px-3 py-2 bg-muted rounded-md text-sm">
                        <span className="font-medium">Action: </span>
                        {suggestion.action}
                      </div>
                    )}
                    {suggestion.url && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(suggestion.url, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
