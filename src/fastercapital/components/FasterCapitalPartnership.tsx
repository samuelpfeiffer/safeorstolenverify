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
    'Signed FasterCapital Acceleration Agreement (April 2025)',
    'Receiving consultation on pitch deck, business plan, and financial forecasts',
    'Working on startup evaluation and capital raising terms',
    'Connecting with potential angel investors and venture capital firms'
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
              FasterCapital is a global accelerator and funding platform supporting startups with mentorship, resources,
              and investor access.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              type="button"
              onClick={() => window.open('https://fastercapital.com','_blank','noopener,noreferrer')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit FasterCapital
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
              <h4 className="font-semibold mb-2">Agreement Date</h4>
              <p className="text-2xl font-bold text-sos-orange">April 2025</p>
              <p className="text-sm text-muted-foreground">Active partnership</p>
            </div>
            <div className="text-center p-4 border border-border/50 rounded-lg">
              <h4 className="font-semibold mb-2">Program Type</h4>
              <p className="text-2xl font-bold text-sos-lime">Non-Exclusive</p>
              <p className="text-sm text-muted-foreground">Acceleration consulting</p>
            </div>
            <div className="text-center p-4 border border-border/50 rounded-lg">
              <h4 className="font-semibold mb-2">Focus</h4>
              <p className="text-2xl font-bold text-sos-orange">Series A</p>
              <p className="text-sm text-muted-foreground">Investor preparation</p>
            </div>
          </div>
          
          <div className="bg-muted/20 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">Consulting Services Provided</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li>• Pitch deck review and improvement</li>
                <li>• Business plan consultation</li>
                <li>• Financial forecast development</li>
                <li>• Startup valuation guidance</li>
              </ul>
              <ul className="space-y-2">
                <li>• Capital raising terms consultation</li>
                <li>• Angel investor connections</li>
                <li>• Venture capital introductions</li>
                <li>• Investor approach strategies</li>
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
          <Button variant="default" type="button" onClick={() => window.open('https://fastercapital.com','_blank','noopener,noreferrer')}>
            <ExternalLink className="h-4 w-4 mr-2" />
            Apply to FasterCapital
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};