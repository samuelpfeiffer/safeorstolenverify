import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Zap, ArrowRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const OptimizedHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-b from-sos-dark to-sos-orange/20 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat bg-center" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5 text-sos-lime" />
              <span className="text-sm font-medium">99.9% Accuracy • 10M+ Users</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Check If It's
              <span className="block text-sos-lime">Stolen</span>
              Before You Buy
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
              AI-powered verification in under 3 seconds. Protect yourself from buying stolen goods.
            </p>
          </div>

          {/* Quick Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    placeholder="Enter IMEI, VIN, or serial number..."
                    className="bg-white text-gray-900 border-0 h-12 text-lg"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-semibold h-12 px-8"
                  onClick={() => navigate('/verify')}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Check Now
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-3">
                4 free checks/month • No credit card required
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="bg-sos-lime/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-6 w-6 text-sos-lime" />
              </div>
              <h3 className="text-lg font-bold mb-2">Instant Results</h3>
              <p className="text-sm opacity-80">Get answers in under 3 seconds</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="bg-sos-orange/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 text-sos-orange" />
              </div>
              <h3 className="text-lg font-bold mb-2">99.9% Accurate</h3>
              <p className="text-sm opacity-80">Industry-leading precision</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Global Coverage</h3>
              <p className="text-sm opacity-80">150+ countries supported</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-sos-dark hover:bg-white/90 font-semibold px-8 py-4"
              onClick={() => navigate('/auth')}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-4"
              onClick={() => navigate('/verify')}
            >
              Try Without Signup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};