import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, CheckCircle, Smartphone, Zap } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 backdrop-blur-sm border-primary/20 p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">From $0.99/Check</span>
            </div>
            
            <Shield className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Don't Risk Buying <span className="text-primary">Stolen Goods</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              One quick check can save you thousands in losses and legal trouble. 
              Join 10,000+ smart buyers who verify first.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-secondary" />
                $1/mo Unlimited
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-secondary" />
                3-Second Results
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Smartphone className="h-4 w-4 text-secondary" />
                Mobile App Included
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" className="font-semibold text-lg px-8 py-6 h-auto">
                  Subscribe — $1/Month
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/verify">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                  Verify Now
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Cancel anytime • 30-day guarantee • 100+ databases checked
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
