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
  const {
    isAuthenticated
  } = useUnifiedAuth();
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
          <img src={heroImage} alt="SafeOrStolen verification on mobile and laptop showing Item Verified status - consumer using fraud protection technology" className="w-full h-auto object-cover" loading="eager" fetchPriority="high" decoding="sync" width="1200" height="600" />
       </div>
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background/80 to-background/60">
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Accelerated By pill */}
          <a href="https://fastercapital.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-100 hover:text-white hover:bg-white/10 transition-colors mb-6" title="Accelerated by FasterCapital - Supporting SafeOrStolen's growth" aria-label="Visit FasterCapital - Our technology accelerator partner">
            <span className="text-base md:text-lg uppercase tracking-wide text-muted-foreground">ACCELERATED BY</span>
            <img src="/images/partners/fastercapital-logo.png" alt="FasterCapital official partnership logo" className="h-16 md:h-20 w-auto object-contain" loading="lazy" width="80" height="20" />
          </a>

          {/* Streamlined Hero Content */}
          <h1 id="main-headline" className="text-4xl md:text-6xl font-extrabold mb-6 text-green-50">Safe Or Stolen</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" role="banner">Lookup and verify IMEI, VIN, and serial numbers to safely buy and resell secondhand goods.</p>
          
          {/* Single Primary CTA */}
          <div className="mb-12">
            <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold px-12 py-6 text-xl" onClick={handleNavigateToAuth} aria-describedby="main-headline">
              <Shield className="mr-3 h-6 w-6" aria-hidden="true" />
              Start Free Check Now
            </Button>
          </div>
          
          {/* Simple Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-sos-lime" />
              $2.3M Scams Prevented
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-sos-lime" />
              Instant Results
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-sos-lime" />
              100% Free
            </span>
          </div>
        </div>
      </div>
    </div>
      
      {/* QR Scanner Modal */}
      {showQrScanner && <Suspense fallback={<div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">Loading scanner...</div>}>
          <QrScanner isOpen={showQrScanner} onOpenChange={setShowQrScanner} onScanSuccess={handleQrScanSuccess} />
        </Suspense>}
    </div>;
});
Hero.displayName = 'Hero';
export default Hero;