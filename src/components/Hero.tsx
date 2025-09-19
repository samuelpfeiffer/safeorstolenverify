import React, { Suspense, useState, lazy, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Users, BadgeCheck } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import heroImage from '@/assets/hero-verification-devices.png';

const QrScanner = lazy(() => import('@/components/hero/QrScanner'));

const Hero = memo(() => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUnifiedAuth();
  const [showQrScanner, setShowQrScanner] = useState(false);

  const handleNavigateToAuth = useCallback(() => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signup');
    } else {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleNavigateToFirearms = useCallback(() => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signup');
    } else {
      navigate('/firearms-check');
    }
  }, [isAuthenticated, navigate]);

  const handleQrScanSuccess = useCallback((result: string) => {
    setShowQrScanner(false);
  }, []);
  return <div className="flex flex-col">
      {/* Full Width Image Above Hero */}
       <div className="w-full h-auto">
          <img 
            src={heroImage}
            alt="SafeOrStolen verification on mobile and laptop showing Item Verified status - consumer using fraud protection technology"
            className="w-full h-auto object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            width="1200"
            height="600"
          />
       </div>
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background/80 to-background/60">
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Accelerated By pill */}
          <a 
            href="https://fastercapital.com" 
            target="_blank" 
            rel="noopener noreferrer nofollow" 
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-100 hover:text-white hover:bg-white/10 transition-colors mb-6" 
            title="Accelerated by FasterCapital - Supporting SafeOrStolen's growth" 
            aria-label="Visit FasterCapital - Our technology accelerator partner"
          >
            <span className="text-base md:text-lg uppercase tracking-wide text-muted-foreground">ACCELERATED BY</span>
            <img 
              src="/images/partners/fastercapital-logo.png" 
              alt="FasterCapital official partnership logo" 
              className="h-16 md:h-20 w-auto object-contain" 
              loading="lazy" 
              width="80"
              height="20"
            />
          </a>

          {/* Universal Value Proposition Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-sos-orange" id="main-headline">
            SafeOrStolen
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-6" role="banner">
            Safe secondhand buying platform - check if items are stolen before buying used goods. Protect yourself from unknowingly purchasing stolen guns, vehicles, electronics, tools, and more. Free stolen goods verification service.
          </p>
          
          
          {/* Service Disclaimer */}
          
          
          {/* Remove duplicate image since it's now the background */}

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold px-8 py-4 text-lg" 
              onClick={handleNavigateToAuth}
              aria-describedby="main-headline"
            >
              <Shield className="mr-2 h-5 w-5" aria-hidden="true" />
              Check if Stolen Before Buying - Free
            </Button>
            <Button size="lg" variant="outline" className="border-sos-lime text-sos-lime hover:bg-sos-lime hover:text-sos-dark font-semibold px-8 py-4 text-lg" asChild>
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
          

          {/* Call to Action for Dashboard Access */}
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Buy used safely online with our stolen goods checker. Protect yourself from unknowingly purchasing stolen items like guns, vehicles, electronics, and tools.
            </p>
            <Button 
              size="lg" 
              className="bg-sos-lime hover:bg-sos-lime/90 text-sos-dark font-semibold px-8 py-4"
              onClick={handleNavigateToAuth}
            >
              {!isAuthenticated ? 'Sign Up for Free Verification' : 'Go to Dashboard'}
            </Button>
          </div>

          {/* Extra actions below */}
          <div className="flex flex-col items-center gap-4 mt-12">
             <div className="w-full max-w-2xl mx-auto">
               <Button 
                 variant="destructive" 
                 className="w-full px-5" 
                 onClick={handleNavigateToFirearms}
                 aria-label="Access stolen firearms verification database"
               >
                 {!isAuthenticated ? 'Sign Up to Search Firearms Database' : 'Search Stolen Firearms Database'}
               </Button>
             </div>
             
             {/* Popular Stolen Checks */}
              <div className="mt-8">
                <p className="text-sm text-gray-400 mb-4">Popular Safe Secondhand Buying Tools:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                    <Link to="/check-if-stolen">Check If Item Stolen</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                    <Link to="/check-phone">IMEI Device Check</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                    <Link to="/check-car">VIN Lookup</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="text-gray-300 border-gray-600 hover:bg-sos-orange/20">
                    <Link to="/how-to-check-if-item-stolen">Safe Buying Guide</Link>
                  </Button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
      
      {/* QR Scanner Modal */}
      {showQrScanner && (
        <Suspense fallback={<div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">Loading scanner...</div>}>
          <QrScanner 
            isOpen={showQrScanner}
            onOpenChange={setShowQrScanner}
            onScanSuccess={handleQrScanSuccess}
          />
        </Suspense>
      )}
    </div>;
});

Hero.displayName = 'Hero';

export default Hero;