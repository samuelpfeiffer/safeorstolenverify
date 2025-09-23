import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Calendar, Users, FileText } from 'lucide-react';

interface ContentMarketingProps {
  showBlogTeasers?: boolean;
  showStatistics?: boolean;
  showTrendingTopics?: boolean;
}

export const ContentMarketing: React.FC<ContentMarketingProps> = ({
  showBlogTeasers = true,
  showStatistics = true,
  showTrendingTopics = true
}) => {
  const currentTrends = [
    {
      title: "2025 Theft Trends Report",
      description: "Latest statistics on stolen goods and marketplace fraud prevention",
      category: "Statistics",
      readTime: "8 min read",
      trending: true
    },
    {
      title: "IMEI Blacklist Guide",
      description: "Complete guide to understanding phone blacklists and verification",
      category: "Guide",
      readTime: "12 min read",
      trending: false
    },
    {
      title: "VIN Cloning Scams",
      description: "How criminals fake vehicle identification numbers",
      category: "Security Alert",
      readTime: "6 min read",
      trending: true
    }
  ];

  const keyStatistics = [
    { number: "2024", label: "Most Recent Data", description: "Up-to-date theft statistics and trends" },
    { number: "$13B", label: "Annual Stolen Goods Market", description: "Why verification matters" },
    { number: "30 Sec", label: "Average Check Time", description: "Quick verification process" },
    { number: "98.7%", label: "Accuracy Rate", description: "Reliable database matching" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        
        {/* Current Statistics */}
        {showStatistics && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">2025 Stolen Goods Statistics</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay informed with the latest data on theft trends and marketplace fraud
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {keyStatistics.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Trending Topics */}
        {showTrendingTopics && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Essential Safety Guides</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert guides and reports to help you avoid stolen goods and marketplace scams
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {currentTrends.map((trend, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={trend.trending ? "default" : "secondary"} className="text-xs">
                      {trend.trending && <TrendingUp className="h-3 w-3 mr-1" />}
                      {trend.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {trend.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{trend.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{trend.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Blog Teasers */}
        {showBlogTeasers && (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on Marketplace Safety</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest insights on stolen goods prevention, verification techniques, and marketplace security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Users className="mr-2 h-5 w-5" />
                Join 125K+ Protected Users
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="mr-2 h-5 w-5" />
                View All Guides
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};