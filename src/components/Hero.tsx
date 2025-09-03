
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sos-pattern">
      {/* Enhanced SOS Background */}
      <div className="absolute inset-0 sos-mesh-gradient"></div>
      
      {/* Animated Security Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sos-orange/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-sos-lime/15 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-sos-orange/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
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

          {/* SOS Brand Headline */}
          <h1 className="sos-headline mb-6 relative">
            Buy, Sell, and Do Business with 100% Confidence
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-sos-lime rounded-full animate-ping opacity-75"></div>
          </h1>
          <p className="sos-subtitle text-gray-200 mb-6 max-w-3xl mx-auto">
            Verify any second-hand item in seconds. Protect your money, your business, and your peace of mind with SafeOrStolen's advanced verification technology.
          </p>
          <div className="sos-security-badge mb-8">
            <span className="w-2 h-2 bg-sos-dark rounded-full"></span>
            Backed by FasterCapital - Trusted by thousands of smart buyers, sellers, and businesses
          </div>
          
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
          
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/verification/legitimate-verification-tech.webp" 
              alt="Free stolen phone IMEI check and VIN verification tool for buyers on Facebook Marketplace, eBay, Craigslist - comprehensive stolen goods database verification" 
              className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-lg border border-white/10"
              loading="lazy"
            />
          </div>

          {/* Enhanced SOS CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              variant="gradient"
              className="sos-glow px-10 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                if (!isAuthenticated) {
                  navigate('/auth?tab=signup');
                } else {
                  navigate('/dashboard');
                }
              }}
            >
              <Shield className="mr-3 h-6 w-6" />
              Start Free Verification
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-10 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/for-brands">
                <Users className="mr-3 h-6 w-6" />
                Business Solutions
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

          {/* Enhanced Social Proof Section */}
          <div className="sos-card p-8 mb-8 relative">
            <div className="absolute top-4 right-4">
              <div className="w-3 h-3 bg-sos-lime rounded-full animate-pulse"></div>
            </div>
            <p className="sos-body text-gray-300 mb-6 text-center font-medium">Trusted by thousands of smart buyers worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <img src="/images/partners/bikeindex-logo.png" alt="Bike Index official partner - stolen bike database verification" className="h-10 w-auto mx-auto mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">Bike Index</span>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <img src="/images/partners/imei-logo.png" alt="CheckMEND official partner - IMEI stolen phone database lookup" className="h-10 w-auto mx-auto mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">CheckMEND</span>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="font-bold text-2xl text-sos-lime group-hover:text-sos-lime/80 transition-colors">15,847+</div>
                <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">Verified Daily</span>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="font-bold text-2xl text-sos-orange group-hover:text-sos-orange/80 transition-colors">2,847</div>
                <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">Stolen Found</span>
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
             
             {/* Popular Stolen Checks */}
             <div className="mt-8">
               <p className="text-sm text-gray-400 mb-4">Popular Stolen Item Checks:</p>
               <div className="flex flex-wrap justify-center gap-2">
                 <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                   <Link to="/check-if-stolen">Verify Items</Link>
                 </Button>
                 <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                   <Link to="/check-phone">Check Phone IMEI</Link>
                 </Button>
                 <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                   <Link to="/check-car">Verify Car VIN</Link>
                 </Button>
                 <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                   <Link to="/how-to-check-if-item-stolen">Buying Guide</Link>
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
