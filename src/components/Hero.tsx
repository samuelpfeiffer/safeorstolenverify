
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Shield, Users, BadgeCheck } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

const Hero = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUnifiedAuth();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sos-dark to-sos"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Accelerated By pill */}
          <a
            href="https://fastercapital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-100 hover:text-white hover:bg-white/10 transition-colors mb-6"
            title="Accelerated by FasterCapital"
            aria-label="FasterCapital accelerator"
          >
            <span className="text-base md:text-lg uppercase tracking-wide text-muted-foreground">ACCELERATED BY</span>
            <img src="/images/partners/fastercapital-logo.png" alt="FasterCapital official logo" className="h-16 md:h-20 w-auto object-contain" loading="lazy" />
          </a>

          {/* Universal Value Proposition Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-sos-orange">The Global Hub for 2nd-Hand Item Verification</h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            Verify electronics, vehicles, guns, art, valuables, machinery, tools & more in real-time. For auction houses, pawn shops, resellers, law enforcement & everyone buying/selling on Craigslist, eBay, Facebook Marketplace.
          </p>
          <p className="text-base md:text-lg text-sos-lime font-semibold mb-6">
            Backed by FasterCapital - Trusted by thousands of smart buyers, sellers, and businesses.
          </p>
          
          {/* Service Disclaimer */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold">Risk Assessment Tool</span>
              </div>
              <p className="text-yellow-200 text-sm">
                SafeOrStolen helps assess theft risk but should be used alongside other verification methods. 
                Always request documentation for valuable purchases. 
                <Link to="/transparency" className="text-yellow-400 hover:underline ml-1">
                  See limitations →
                </Link>
              </p>
            </div>
          </div>
          
          {/* Hero Image - Optimized */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/d4daf30e-bbe3-49e5-b6b6-041b57ccd7fa.png" 
              alt="Legitimate verification technology with phone and laptop" 
              className="max-w-md w-full h-auto rounded-lg shadow-2xl"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </div>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold px-8 py-4 text-lg"
              onClick={() => {
                if (!isAuthenticated) {
                  navigate('/auth?tab=signup');
                } else {
                  navigate('/dashboard');
                }
              }}
            >
              <Shield className="mr-2 h-5 w-5" />
              Check a Serial Number — It's Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-sos-lime text-sos-lime hover:bg-sos-lime hover:text-sos-dark font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/for-brands">
                <Users className="mr-2 h-5 w-5" />
                For Businesses & APIs
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-sos-lime" />
              Multi-Database Search
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-sos-lime" />
              Instant Verification
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-sos-lime" />
              Comprehensive Reports
            </span>
          </div>

          {/* Social Proof Section */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-400 mb-4 text-center">Trusted by thousands of smart buyers and verified by:</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="text-center">
                <img src="/images/partners/bikeindex-logo.png" alt="Bike Index" className="h-8 w-auto mx-auto mb-1" />
                <span className="text-xs text-gray-500">Bike Index</span>
              </div>
              <div className="text-center">
                <img src="/images/partners/imei-logo.png" alt="CheckMEND" className="h-8 w-auto mx-auto mb-1" />
                <span className="text-xs text-gray-500">CheckMEND</span>
              </div>
              <div className="text-center text-green-400">
                <div className="font-bold text-lg">15,847+</div>
                <span className="text-xs text-gray-500">Items Verified Daily</span>
              </div>
              <div className="text-center text-red-400">
                <div className="font-bold text-lg">2,847</div>
                <span className="text-xs text-gray-500">Stolen Items Found</span>
              </div>
            </div>
          </div>

          {/* Sign up notice for free searches */}
          <div className="text-center mb-8">
            <p className="text-sm md:text-base text-gray-300">
              Sign up to receive <span className="text-sos-lime font-semibold">4 free searches</span>.{' '}
              <Link to="/auth?tab=signup" className="text-sos-orange hover:text-sos-orange/90 font-semibold underline-offset-4 hover:underline">Create your free account</Link>.
            </p>
          </div>

          {/* Extra actions below */}
          <div className="flex flex-col items-center gap-4 mt-12">
             <div className="w-full max-w-2xl mx-auto">
               <Button
                 variant="destructive"
                 className="w-full px-5"
                 onClick={() => {
                   if (!isAuthenticated) {
                     navigate('/auth?tab=signup');
                   } else {
                     navigate('/firearms-check');
                   }
                 }}
                 aria-label="Search Stolen Firearms Database"
               >
                 {!isAuthenticated ? 'Sign Up to Search Firearms Database' : 'Search Stolen Firearms Database'}
               </Button>
             </div>
             
              {/* Popular Verification Categories */}
              <div className="mt-8">
                <p className="text-sm text-gray-400 mb-4">Verify Any Valuable Item:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                    <Link to="/check-phone">Electronics & Phones</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                    <Link to="/check-car">Vehicles & VINs</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                    <Link to="/firearms-check">Firearms & Guns</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                    <Link to="/check-if-stolen">Art & Valuables</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                    <Link to="/dashboard">Tools & Machinery</Link>
                  </Button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
