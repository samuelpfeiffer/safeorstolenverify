import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, CheckCircle, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PowerCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-semibold">Trusted by 10,000+ Buyers</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stop Criminals.<br />
            <span className="opacity-90">Protect Your Money.</span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">
            Every search makes stolen items harder to sell. 
            Be part of the solution while protecting yourself.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-7 h-auto font-bold shadow-2xl" aria-label="Subscribe for $2.99/month unlimited verifications">
              <Link to="/pricing">
                <Shield className="mr-2 h-6 w-6" />
                Subscribe — $2.99/Month Unlimited
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 opacity-90">
              <CheckCircle className="h-5 w-5" />
              $1/mo unlimited
            </div>
            <div className="flex items-center gap-2 opacity-90">
              <Clock className="h-5 w-5" />
              Results in 3 seconds
            </div>
            <div className="flex items-center gap-2 opacity-90">
              <Shield className="h-5 w-5" />
              256-bit encryption
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
