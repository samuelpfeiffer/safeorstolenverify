import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Building2, Smartphone } from 'lucide-react';

export const EnhancedCTASection: React.FC = () => {
  const ctaOptions = [
    {
      title: "For Buyers",
      description: "Protect yourself from stolen goods with instant verification",
      icon: Users,
      primaryAction: {
        text: "Start Verifying",
        href: "/real-time-verification",
        variant: "default" as const
      },
      secondaryAction: {
        text: "See Pricing",
        href: "/pricing"
      },
      highlight: "$2.99/mo Unlimited Verifications"
    },
    {
      title: "For Businesses",
      description: "Enterprise API integration to protect your platform and users",
      icon: Building2,
      primaryAction: {
        text: "Schedule Demo",
        href: "/about",
        variant: "outline" as const
      },
      secondaryAction: {
        text: "View Plans",
        href: "/pricing"
      },
      highlight: "99.9% Uptime"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-sos-orange text-sos-orange">
            Join Protected Users
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Stop Buying <span className="text-sos-orange">Stolen Goods</span> Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't become an unknowing victim of the $13 billion stolen goods crisis. 
            Verify before you buy with our real-time database checks.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-12">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-sos-lime" />
              50+ Global Databases
            </span>
            <span className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-sos-lime" />
              3-Second Verification
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-sos-lime" />
              Growing Community
            </span>
          </div>
        </div>

        {/* Dual CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {ctaOptions.map((option, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-sos-orange/50 transition-all duration-300 p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sos-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <option.icon className="h-8 w-8 text-sos-orange" />
                </div>
                
                <Badge variant="outline" className="mb-4 border-sos-lime text-sos-lime">
                  {option.highlight}
                </Badge>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {option.title}
                </h3>
                
                <p className="text-gray-300 mb-8">
                  {option.description}
                </p>
                
                <div className="space-y-4">
                  <Link to={option.primaryAction.href} className="block">
                    <Button 
                      size="lg" 
                      variant={option.primaryAction.variant}
                      className={`w-full ${option.primaryAction.variant === 'default' ? 'bg-sos-orange hover:bg-sos-orange/90' : 'border-white/20 text-white hover:bg-white/10'}`}
                    >
                      {option.primaryAction.text}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <Link to={option.secondaryAction.href} className="block">
                    <Button variant="ghost" size="lg" className="w-full text-gray-300 hover:text-white">
                      {option.secondaryAction.text}
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Already have an account? <Link to="/auth?tab=signin" className="text-sos-orange hover:underline">Sign in here</Link>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/how-it-works">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Learn How It Works
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};