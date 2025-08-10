import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Rocket,
  ArrowRight,
  Users,
  Building,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FasterCapitalRaiseCapitalPage = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Angel Investors", value: "155K+", icon: Users },
    { label: "VCs Connected", value: "50K+", icon: Building },
    { label: "Success Rate", value: "92%", icon: TrendingUp },
    { label: "Average Funding", value: "$2.5M", icon: DollarSign }
  ];

  const benefits = [
    "Warm introductions to angel investors and VCs",
    "Dedicated team working on your startup",
    "Partnership in capital raising process",
    "Access to global investor network",
    "Professional pitch deck assistance",
    "Due diligence preparation support"
  ];

  return (
    <div className="min-h-screen bg-sos text-white pt-20">
      <div className="container mx-auto container-padding py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-sos-orange/10 text-sos-orange border-sos-orange/20 inline-flex items-center gap-3 text-lg py-3 px-4">
            <img src="/images/partners/fastercapital-logo.png" alt="FasterCapital logo" className="h-16 w-auto" />
            <span className="fc-gradient-text font-semibold">FasterCapital</span>
            <span>Program</span>
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Raise <span className="text-gradient">Capital</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get funding from 155K+ angels and 50K+ VCs with FasterCapital's proven methodology
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 text-sos-orange mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-sos-orange" />
                Program Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our Raise Capital program helps startups connect with the right investors 
                through warm introductions and dedicated support throughout the funding process.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-sos-lime mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-sos-orange/10 to-sos-lime/10 border-sos-orange/20">
            <CardHeader>
              <CardTitle>Apply Now</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-card rounded-lg">
                  <h4 className="font-semibold mb-2">Requirements</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Tech startup with scalable business model</li>
                    <li>• Seeking $100K - $10M in funding</li>
                    <li>• Clear market opportunity</li>
                    <li>• Committed founding team</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-card rounded-lg">
                  <h4 className="font-semibold mb-2">Process</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Application review (5-7 days)</li>
                    <li>• Due diligence and pitch preparation</li>
                    <li>• Investor matching and introductions</li>
                    <li>• Funding round completion</li>
                  </ul>
                </div>
              </div>
              
              <Button asChild className="w-full bg-sos-orange hover:bg-sos-orange/90">
                <a href="https://fastercapital.com/raise-capital.html" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Apply to Raise Capital
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="border-muted text-muted-foreground hover:bg-muted/10"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FasterCapitalRaiseCapitalPage;