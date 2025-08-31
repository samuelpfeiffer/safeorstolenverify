import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, Shield, Zap, Users, Building, Gavel, 
  ShoppingCart, Smartphone, Car, Target, Award,
  TrendingUp, CheckCircle, ArrowRight, Megaphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PublicLaunchAnnouncement: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
      <div className="container mx-auto px-4">
        {/* Header Banner */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-primary text-primary-foreground px-6 py-3 text-lg font-semibold">
            <Megaphone className="h-5 w-5 mr-2" />
            OFFICIAL LAUNCH ANNOUNCEMENT
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-primary">SafeOrStolen</span> is Now Live
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              The World's First AI-Powered Mobile Verification Platform
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Introducing the global hub for real-time second-hand item verification. 
              From electronics to vehicles, art to machinery - verify anything, anywhere, instantly.
            </p>
          </div>
        </div>

        {/* Key Announcement Points */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                <Globe className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Industry First</h3>
              <p className="text-muted-foreground">
                The world's first comprehensive platform combining AI, mobile-first design, 
                and real-time verification for ALL valuable second-hand items
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 bg-secondary/5">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-6">
                <Zap className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Precision</h3>
              <p className="text-muted-foreground">
                Advanced artificial intelligence processes millions of data points 
                to deliver instant, accurate verification results
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-6">
                <Smartphone className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile-Native Design</h3>
              <p className="text-muted-foreground">
                Built mobile-first for the modern marketplace - verify items 
                instantly from anywhere using your smartphone
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Verify */}
        <Card className="mb-16 bg-gradient-to-r from-muted/30 to-background">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Verify Everything That Matters</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The most comprehensive verification coverage in the industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="p-3 bg-blue-500/10 rounded-full w-fit mx-auto mb-3">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Electronics</h4>
                <p className="text-sm text-muted-foreground">Phones, tablets, laptops, cameras, gaming equipment</p>
              </div>
              
              <div className="text-center">
                <div className="p-3 bg-green-500/10 rounded-full w-fit mx-auto mb-3">
                  <Car className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Vehicles</h4>
                <p className="text-sm text-muted-foreground">Cars, motorcycles, boats, RVs, bicycles</p>
              </div>
              
              <div className="text-center">
                <div className="p-3 bg-purple-500/10 rounded-full w-fit mx-auto mb-3">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Weapons & Firearms</h4>
                <p className="text-sm text-muted-foreground">Guns, knives, tactical equipment</p>
              </div>
              
              <div className="text-center">
                <div className="p-3 bg-orange-500/10 rounded-full w-fit mx-auto mb-3">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Valuables</h4>
                <p className="text-sm text-muted-foreground">Jewelry, watches, art, collectibles, tools</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Who Benefits */}
        <Card className="mb-16 bg-gradient-to-l from-primary/5 to-secondary/5">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Built for Everyone in the Marketplace</h2>
              <p className="text-xl text-muted-foreground">
                From individual buyers to enterprise businesses - we serve the entire ecosystem
              </p>
            </div>
            
            <div className="grid md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="p-4 bg-red-500/10 rounded-full w-fit mx-auto mb-3">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-semibold">Consumers</h4>
                <p className="text-xs text-muted-foreground">eBay, Craigslist, Facebook buyers</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-blue-500/10 rounded-full w-fit mx-auto mb-3">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold">Pawn Shops</h4>
                <p className="text-xs text-muted-foreground">Instant verification tools</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-green-500/10 rounded-full w-fit mx-auto mb-3">
                  <Gavel className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold">Auction Houses</h4>
                <p className="text-xs text-muted-foreground">Provenance verification</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-purple-500/10 rounded-full w-fit mx-auto mb-3">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold">Law Enforcement</h4>
                <p className="text-xs text-muted-foreground">Recovery & investigation</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-orange-500/10 rounded-full w-fit mx-auto mb-3">
                  <ShoppingCart className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold">Resellers</h4>
                <p className="text-xs text-muted-foreground">Inventory verification</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-teal-500/10 rounded-full w-fit mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="font-semibold">Businesses</h4>
                <p className="text-xs text-muted-foreground">Enterprise solutions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Industry Impact */}
        <Card className="mb-16 border-2 border-primary/20">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Industry-Changing Impact</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$15B+</div>
                <p className="font-semibold mb-1">Annual Stolen Goods Market</p>
                <p className="text-sm text-muted-foreground">We're disrupting the entire criminal ecosystem</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                <p className="font-semibold mb-1">Accuracy Rate</p>
                <p className="text-sm text-muted-foreground">AI-powered verification delivers unmatched precision</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-accent mb-2">&lt;2s</div>
                <p className="font-semibold mb-1">Average Check Time</p>
                <p className="text-sm text-muted-foreground">Instant results powered by advanced technology</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Join the Verification Revolution</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of the movement making second-hand transactions safer for everyone. 
              Start verifying today - it's free, fast, and could save you thousands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verification-hub">
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Start Verifying Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/auth?tab=signup">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Press Information */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Press & Media Inquiries</h3>
            <p className="text-muted-foreground mb-6">
              SafeOrStolen represents a paradigm shift in marketplace security. We're available for interviews, 
              demos, and partnership discussions with media, law enforcement agencies, and enterprise clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                Media Kit Download
              </Button>
              <Button variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicLaunchAnnouncement;