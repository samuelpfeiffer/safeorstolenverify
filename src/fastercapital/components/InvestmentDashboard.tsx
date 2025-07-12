import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  Calendar,
  Award,
  Zap,
  Globe
} from 'lucide-react';

interface InvestmentMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ComponentType<any>;
}

export const InvestmentDashboard: React.FC = () => {
  const metrics: InvestmentMetric[] = [
    {
      label: 'Total Funding Raised',
      value: '$2.5M',
      change: '+25% this quarter',
      trend: 'up',
      icon: DollarSign
    },
    {
      label: 'Active Users',
      value: '500K+',
      change: '+150% YoY',
      trend: 'up',
      icon: Users
    },
    {
      label: 'Items Verified',
      value: '2.1M',
      change: '+200% YoY',
      trend: 'up',
      icon: Target
    },
    {
      label: 'Market Expansion',
      value: '15 Countries',
      change: '+8 new markets',
      trend: 'up',
      icon: Globe
    }
  ];

  const milestones = [
    {
      title: 'Seed Funding Complete',
      description: 'Successfully raised $500K seed round',
      date: 'Q4 2023',
      status: 'completed'
    },
    {
      title: 'Series A in Progress',
      description: 'Targeting $5M Series A funding',
      date: 'Q2 2024',
      status: 'in-progress'
    },
    {
      title: 'International Expansion',
      description: 'Launch in European markets',
      date: 'Q3 2024',
      status: 'planned'
    },
    {
      title: 'API Platform Launch',
      description: 'B2B API for enterprise clients',
      date: 'Q4 2024',
      status: 'planned'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Award className="h-8 w-8 text-sos-orange" />
          <h1 className="text-3xl font-bold">Investment Dashboard</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Track our progress as we revolutionize the second-hand market with FasterCapital's support
        </p>
        <Badge variant="secondary" className="bg-sos-orange/10 text-sos-orange border-sos-orange/20">
          <Zap className="h-4 w-4 mr-2" />
          FasterCapital Accelerated
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <metric.icon className="h-5 w-5 text-sos-orange" />
                <Badge 
                  variant={metric.trend === 'up' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {metric.change}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Funding Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-sos-orange" />
            <span>Series A Funding Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">$2.5M of $5M target</span>
            <span className="text-sm text-muted-foreground">50% complete</span>
          </div>
          <Progress value={50} className="h-3" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Started: Jan 2024</span>
            <span>Target: Jun 2024</span>
          </div>
        </CardContent>
      </Card>

      {/* Milestones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-sos-orange" />
            <span>Company Milestones</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-border/50">
                <div className={`mt-1 h-3 w-3 rounded-full ${
                  milestone.status === 'completed' ? 'bg-sos-lime' :
                  milestone.status === 'in-progress' ? 'bg-sos-orange' :
                  'bg-muted'
                }`} />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{milestone.title}</h4>
                    <Badge 
                      variant={
                        milestone.status === 'completed' ? 'default' :
                        milestone.status === 'in-progress' ? 'secondary' :
                        'outline'
                      }
                    >
                      {milestone.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  <p className="text-xs text-muted-foreground">{milestone.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 border-sos-orange/20">
        <CardContent className="text-center space-y-4 py-8">
          <h3 className="text-xl font-bold">Interested in Our Journey?</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Join us as we scale globally and make the second-hand market safer for everyone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default">
              View Pitch Deck
            </Button>
            <Button variant="outline">
              Schedule Meeting
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};