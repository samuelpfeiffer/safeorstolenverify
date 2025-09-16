import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, ExternalLink, Eye, Users, Search } from 'lucide-react';

interface CompetitorData {
  id: string;
  domain: string;
  name: string;
  domain_authority: number;
  monthly_traffic: number;
  top_keywords: string[];
  ranking_keywords: number;
  backlinks: number;
  trend: 'up' | 'down' | 'stable';
}

export const CompetitorAnalysis: React.FC = () => {
  const [competitors, setCompetitors] = useState<CompetitorData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const mockCompetitors: CompetitorData[] = [
      {
        id: '1',
        domain: 'checkstolen.com',
        name: 'CheckStolen',
        domain_authority: 35,
        monthly_traffic: 45000,
        top_keywords: ['stolen phone check', 'IMEI verification', 'phone blacklist'],
        ranking_keywords: 1250,
        backlinks: 2300,
        trend: 'up'
      },
      {
        id: '2',
        domain: 'imeiinfo.com',
        name: 'IMEI Info',
        domain_authority: 42,
        monthly_traffic: 78000,
        top_keywords: ['IMEI check', 'phone information', 'device details'],
        ranking_keywords: 2100,
        backlinks: 4500,
        trend: 'stable'
      },
      {
        id: '3',
        domain: 'stolenregister.com',
        name: 'Stolen Register',
        domain_authority: 28,
        monthly_traffic: 12000,
        top_keywords: ['stolen goods', 'theft database', 'report stolen'],
        ranking_keywords: 680,
        backlinks: 890,
        trend: 'down'
      },
      {
        id: '4',
        domain: 'vincheckpro.com',
        name: 'VIN Check Pro',
        domain_authority: 51,
        monthly_traffic: 125000,
        top_keywords: ['VIN check', 'car history', 'vehicle report'],
        ranking_keywords: 3200,
        backlinks: 8900,
        trend: 'up'
      }
    ];
    setCompetitors(mockCompetitors);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <div className="h-4 w-4 bg-gray-400 rounded-full" />;
  };

  const getDomainAuthorityColor = (da: number) => {
    if (da >= 50) return 'text-green-500';
    if (da >= 30) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Competitor Analysis
          </CardTitle>
          <CardDescription>
            Monitor your competitors' SEO performance and identify opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitors.map((competitor) => (
              <Card key={competitor.id} className="p-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{competitor.name}</h3>
                      {getTrendIcon(competitor.trend)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{competitor.domain}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visit
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        <Search className="h-3 w-3 mr-1" />
                        Analyze
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">Domain Authority</span>
                        <span className={`text-sm font-bold ${getDomainAuthorityColor(competitor.domain_authority)}`}>
                          {competitor.domain_authority}
                        </span>
                      </div>
                      <Progress value={competitor.domain_authority} className="h-2" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">{formatNumber(competitor.monthly_traffic)}/mo</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-center">
                      <span className="text-lg font-bold text-primary">
                        {formatNumber(competitor.ranking_keywords)}
                      </span>
                      <p className="text-xs text-muted-foreground">Keywords</p>
                    </div>
                    <div className="text-center">
                      <span className="text-lg font-bold text-secondary">
                        {formatNumber(competitor.backlinks)}
                      </span>
                      <p className="text-xs text-muted-foreground">Backlinks</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Top Keywords:</p>
                    <div className="space-y-1">
                      {competitor.top_keywords.slice(0, 3).map((keyword, index) => (
                        <Badge key={index} variant="secondary" className="text-xs mr-1">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Key Insights</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• VIN Check Pro leads with 51 DA and 125K monthly traffic</li>
              <li>• IMEI Info has strong keyword coverage (2.1K keywords)</li>
              <li>• Opportunity gap: Most competitors lack comprehensive serial number checking</li>
              <li>• Average competitor DA is 39 - target 45+ for competitive advantage</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};