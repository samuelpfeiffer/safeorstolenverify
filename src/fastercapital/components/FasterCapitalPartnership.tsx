import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Target, 
  Users, 
  TrendingUp, 
  Globe,
  Shield,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const FasterCapitalPartnership: React.FC = () => {
  const benefits = [
    {
      icon: Rocket,
      title: 'Accelerated Growth',
      description: 'Access to FasterCapital\'s proven methodology for scaling tech startups'
    },
    {
      icon: Target,
      title: 'Strategic Guidance',
      description: 'Expert mentorship in go-to-market strategy and business development'
    },
    {
      icon: Users,
      title: 'Network Access',
      description: 'Connection to global investor network and industry partnerships'
    },
    {
      icon: TrendingUp,
      title: 'Funding Support',
      description: 'Assistance with Series A preparation and investor introductions'
    }
  ];

  const achievements = [
    'Successfully completed FasterCapital\'s rigorous selection process',
    'Developed comprehensive go-to-market strategy',
    'Achieved 500K+ user milestone ahead of schedule',
    'Secured strategic partnerships in multiple markets',
    'Built scalable technology platform for global expansion'
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-sos-orange/10 rounded-full">
            <Rocket className="h-8 w-8 text-sos-orange" />
          </div>
          <h1 className="text-3xl font-bold">FasterCapital Partnership</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Proud to be accelerated by FasterCapital, a leading global tech accelerator 
          helping startups scale their businesses and raise funding
        </p>
      </div>

      {/* Partnership Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-sos-orange/5 to-transparent border-sos-orange/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-sos-orange" />
              <span>About FasterCapital</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              FasterCapital is a global online accelerator and funding platform that helps 
              entrepreneurs around the world build their startups and raise funding.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Founded</p>
                <p className="text-muted-foreground">2010</p>
              </div>
              <div>
                <p className="font-medium">Global Reach</p>
                <p className="text-muted-foreground">65+ Countries</p>
              </div>
              <div>
                <p className="font-medium">Startups Helped</p>
                <p className="text-muted-foreground">1000+</p>
              </div>
              <div>
                <p className="font-medium">Funding Raised</p>
                <p className="text-muted-foreground">$50M+</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              Learn More About FasterCapital
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-sos-lime" />
              <span>Our Journey Together</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-sos-lime mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{achievement}</p>
                </div>
              ))}
            </div>
            <Badge variant="secondary" className="w-full justify-center bg-sos-lime/10 text-sos-lime border-sos-lime/20">
              Program Status: Active Development Phase
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">Partnership Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto p-3 bg-sos-orange/10 rounded-full w-fit">
                  <benefit.icon className="h-6 w-6 text-sos-orange" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Program Details */}
      <Card>
        <CardHeader>
          <CardTitle>Acceleration Program Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-border/50 rounded-lg">
              <h4 className="font-semibold mb-2">Duration</h4>
              <p className="text-2xl font-bold text-sos-orange">12 Months</p>
              <p className="text-sm text-muted-foreground">Intensive acceleration</p>
            </div>
            <div className="text-center p-4 border border-border/50 rounded-lg">
              <h4 className="font-semibold mb-2">Equity</h4>
              <p className="text-2xl font-bold text-sos-lime">0%</p>
              <p className="text-sm text-muted-foreground">Equity-free program</p>
            </div>
            <div className="text-center p-4 border border-border/50 rounded-lg">
              <h4 className="font-semibold mb-2">Funding Goal</h4>
              <p className="text-2xl font-bold text-sos-orange">$5M</p>
              <p className="text-sm text-muted-foreground">Series A target</p>
            </div>
          </div>
          
          <div className="bg-muted/20 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">Program Focus Areas</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li>• Business model optimization</li>
                <li>• Go-to-market strategy</li>
                <li>• Product development guidance</li>
                <li>• Team building & hiring</li>
              </ul>
              <ul className="space-y-2">
                <li>• Financial planning & modeling</li>
                <li>• Investor pitch preparation</li>
                <li>• Legal & compliance support</li>
                <li>• International expansion</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 border-sos-orange/20">
        <CardContent className="text-center space-y-4 py-8">
          <h3 className="text-xl font-bold">Startup? Consider FasterCapital</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            If you're a tech startup looking for acceleration and funding support, 
            FasterCapital could be the right partner for you
          </p>
          <Button variant="default">
            <ExternalLink className="h-4 w-4 mr-2" />
            Apply to FasterCapital
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};