
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-sos-dark">
      <div className="container mx-auto px-4">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-12 max-w-4xl mx-auto text-center">
          <Shield className="h-16 w-16 text-sos-orange mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Verify Your Items?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who protect themselves from stolen goods every day. 
            Fast, secure, and reliable verification.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/real-time-verification">
              <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold">
                Start Verification
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
