import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Target, 
  Users, 
  TrendingUp, 
  Globe,
  DollarSign,
  Building,
  ArrowRight,
  ExternalLink,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FasterCapitalRequirements = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: 'Raise Capital',
      icon: DollarSign,
      description: 'Get funding from 155K+ angels and 50K+ VCs',
      amount: '$100K - $10M',
      path: '/fastercapital/raise-capital',
      color: 'text-sos-orange'
    },
    {
      title: 'Tech Cofounder',
      icon: Users,
      description: 'Get technical cofounders for your startup',
      amount: 'Equity-based',
      path: '/fastercapital/tech-cofounder',
      color: 'text-sos-lime'
    },
    {
      title: 'Incubation Program',
      icon: Rocket,
      description: 'Join our 12-month acceleration program',
      amount: '0% Equity',
      path: '/fastercapital/incubation',
      color: 'text-sos-orange'
    },
    {
      title: 'Business Plan',
      icon: Target,
      description: 'Professional business plan development',
      amount: 'From $5K',
      path: '/fastercapital/business-plan',
      color: 'text-sos-lime'
    }
  ];

  const stats = [
    { label: "Countries", value: "65+", icon: Globe },
    { label: "Startups Helped", value: "1000+", icon: Building },
    { label: "Success Rate", value: "92%", icon: TrendingUp },
    { label: "Funding Raised", value: "$50M+", icon: DollarSign }
  ];

  const mandatoryRequirements = [
    "Pitch Deck for your startup",
    "Contact information for each cofounder (phone, email, address)",
    "Idea brief about your startup concept (appears on website)",
    "Challenge brief about the problem you're solving (appears on website)",
    "Solution brief about your proposed solution and impact (appears on website)",
    "Our story section - how founders met and created the startup (appears on website)",
    "Video marketing materials - presentations, screencasts, product demos (appears on website)",
    "LinkedIn profile for each cofounder (appears on website)",
    "High resolution photo for each cofounder (appears on website)",
    "Startup logo 2000x2000 pixels (appears on website)",
    "Mini CV for each cofounder and team member (appears on website)"
  ];

  const optionalRequirements = [
    "Business Plan (PDF or DOC format)",
    "Financial operating model (preferably Excel format)",
    "Video pitch by one or more cofounders",
    "Executive Summary (one or two pages about the startup)"
  ];

  const additionalObligations = [
    "Be prepared for startup presentations (in-person or online)",
    "Update website to include FasterCapital as accelerator/incubator",
    "Update social profiles (LinkedIn, Angel.co, Facebook) to mention FasterCapital",
    "Respond promptly to all FasterCapital communications",
    "Submit timely updates on team changes, product developments, and new materials",
    "Comply with all FasterCapital guidelines and requirements"
  ];

  const compensation = [
    "Commission: 7.5% of raised funds",
    "Payment: Bank or cashier's check at closing",
    "Pro-rata payment for delayed increments"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sos-dark to-sos relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      </div>

      <div className="container mx-auto container-padding relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 bg-sos-orange/10 rounded-full">
              <Rocket className="h-8 w-8 text-sos-orange" />
            </div>
            <Badge variant="secondary" className="bg-sos-orange/10 text-sos-orange border-sos-orange/20 px-4 py-2">
              Featured Partner Program
            </Badge>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">FasterCapital</span> Requirements
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're proud to be accelerated by FasterCapital. Explore their comprehensive programs 
            designed to help tech startups scale and raise funding globally.
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-sos-lime" />
              <span>Safe or Stolen is FasterCapital Accelerated</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-sos-lime" />
              <span>Currently in 12-month program</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 text-center hover:bg-card/90 transition-all">
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

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all hover:scale-105 cursor-pointer group"
              onClick={() => navigate(program.path)}
            >
              <CardHeader className="text-center">
                <div className="mx-auto p-3 bg-sos-orange/10 rounded-full w-fit mb-3 group-hover:bg-sos-orange/20 transition-colors">
                  <program.icon className={`h-6 w-6 ${program.color}`} />
                </div>
                <CardTitle className="text-lg">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">{program.description}</p>
                <div className="text-lg font-semibold text-sos-orange">{program.amount}</div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-sos-orange/10 group-hover:border-sos-orange/40"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Mandatory Requirements */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-sos-orange" />
                <span>Mandatory Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm mb-4">
                Required documents and information for all applications.
              </p>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {mandatoryRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sos-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Obligations */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-sos-lime" />
                <span>Additional Obligations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm mb-4">
                Ongoing commitments during the acceleration program.
              </p>
              <div className="space-y-3">
                {additionalObligations.map((obligation, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sos-lime mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{obligation}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Optional & Compensation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Optional Requirements */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-sos-lime" />
                <span>Optional Materials</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm mb-4">
                Additional documents that strengthen your application.
              </p>
              <div className="space-y-3">
                {optionalRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sos-lime mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compensation Structure */}
          <Card className="bg-gradient-to-br from-sos-orange/10 to-sos-lime/10 border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-sos-orange" />
                <span>Compensation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm mb-4">
                FasterCapital's fee structure for successful funding.
              </p>
              <div className="space-y-3">
                {compensation.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-sos-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-sos-orange" />
                <span>Company Obligations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm mb-4">
                FasterCapital acts as a facilitator only and is not a licensed securities broker.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-sos-lime mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Provide accurate startup information and unique values</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-sos-lime mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Submit all required marketing materials</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-sos-lime mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Maintain open communication throughout process</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-sos-lime mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Participate in mentorship and guidance programs</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-sos-orange/10 to-sos-lime/10 border-sos-orange/20">
            <CardHeader>
              <CardTitle>Apply to FasterCapital</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-card/60 rounded-lg">
                  <h4 className="font-semibold mb-2">Application Process</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Submit online application</li>
                    <li>• Initial screening (3-5 days)</li>
                    <li>• Video interview with team</li>
                    <li>• Due diligence and final approval</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-card/60 rounded-lg">
                  <h4 className="font-semibold mb-2">What You Get</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Dedicated team working on your startup</li>
                    <li>• Access to global investor network</li>
                    <li>• Mentorship and strategic guidance</li>
                    <li>• Business development support</li>
                  </ul>
                </div>
              </div>
              
              <Button 
                className="w-full bg-sos-orange hover:bg-sos-orange/90"
                onClick={() => window.open('https://fastercapital.com', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit FasterCapital
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 border-sos-orange/20 max-w-4xl mx-auto">
            <CardContent className="py-12 px-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Tech Startup?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Follow Safe or Stolen's journey with FasterCapital and explore how their programs 
                can help accelerate your startup's growth and funding opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  className="bg-sos-orange hover:bg-sos-orange/90"
                  onClick={() => window.open('https://fastercapital.com/apply', '_blank')}
                >
                  <Rocket className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/our-story')}
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Our FasterCapital Story
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};