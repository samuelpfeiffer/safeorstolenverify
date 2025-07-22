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


  return (
    <section id="fastercapital-section" className="py-20 bg-gradient-to-br from-sos-dark to-sos relative overflow-hidden">
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
            <span className="text-gradient">FasterCapital</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're proud to be accelerated by FasterCapital. Our partnership includes providing comprehensive 
            startup documentation including pitch decks, cofounder contact information, business plans, 
            financial models, video pitches, executive summaries, idea briefs, challenge descriptions, 
            solution overviews, our founding story, marketing materials, LinkedIn profiles, professional 
            photos, company logos, and team CVs. We maintain active communication, provide regular updates 
            on team changes and product developments, and comply with all FasterCapital guidelines while 
            showcasing our partnership across our website and social media profiles.
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

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-500/10 to-red-500/10 border-blue-500/20 max-w-4xl mx-auto">
            <CardContent className="py-12 px-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Tech Startup?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Follow Safe or Stolen's journey with FasterCapital and explore how their programs 
                can help accelerate your startup's growth and funding opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  className="bg-gradient-to-r from-blue-500 to-red-500 hover:opacity-90 text-white"
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