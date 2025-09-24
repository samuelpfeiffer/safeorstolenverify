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
  return <div className="relative overflow-hidden">
      {/* Modern Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full hero-glass text-white/90 text-sm font-medium mb-8 animate-fadeIn">
              <Shield className="h-4 w-4 text-emerald-400" />
              Trusted by 100,000+ Users Worldwide
            </div>

            {/* Main Headline */}
            <h1 id="main-headline" className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight animate-slideUp">
              Verify Before You Buy
              <span className="block text-gradient">Safe Or Stolen</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-slideUp" style={{animationDelay: '0.2s'}}>
              Global hub protecting buyers and sellers in secondhand markets. 
              <span className="block mt-2 text-emerald-400 font-semibold">
                Instantly verify IMEI, VIN & serial numbers worldwide
              </span>
            </p>
            
            {/* Single Primary CTA */}
            <div className="mb-16 animate-slideUp" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl hover-lift transform transition-all duration-300" 
                onClick={handleNavigateToAuth} 
                aria-describedby="main-headline"
              >
                <Shield className="mr-3 h-6 w-6" aria-hidden="true" />
                Start Free Verification
              </Button>
              <p className="text-white/60 text-sm mt-4">No signup required • Results in seconds</p>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slideUp" style={{animationDelay: '0.6s'}}>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">$2.3M+</div>
                <div className="text-white/70 text-sm">Scams Prevented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">&lt; 3s</div>
                <div className="text-white/70 text-sm">Instant Results</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                <div className="text-white/70 text-sm">Free to Use</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Device Preview */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block animate-float">
          <img 
            src={heroImage} 
            alt="SafeOrStolen verification interface" 
            className="w-80 h-auto rounded-3xl shadow-2xl modern-card" 
            loading="eager" 
            fetchPriority="high" 
            width="320" 
            height="640" 
          />
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