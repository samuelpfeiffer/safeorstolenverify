import React, { Suspense, useState, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Shield, Users, BadgeCheck } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { EnhancedSearchForm } from '@/components/hero/EnhancedSearchForm';
import { GuestCheckBanner } from '@/components/hero/GuestCheckBanner';
import { useSearchLimits } from '@/hooks/useSearchLimits';
// Using uploaded image

const QrScanner = lazy(() => import('@/components/hero/QrScanner'));
const Hero = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUnifiedAuth();
  const { remainingSearches } = useSearchLimits();
  const [showQrScanner, setShowQrScanner] = useState(false);
  return <div className="flex flex-col">
      {/* Full Width Image Above Hero */}
      <div className="w-full h-40 md:h-72 overflow-hidden">
        <img 
          src="/lovable-uploads/8ebf6078-8dcd-46a3-ad57-981e6d25022e.png"
          alt="How to find an IMEI Properly (Step-by-Step)" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background/80 to-background/60">
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Accelerated By pill */}
          <a href="https://fastercapital.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-100 hover:text-white hover:bg-white/10 transition-colors mb-6" title="Accelerated by FasterCapital" aria-label="FasterCapital accelerator">
            <span className="text-base md:text-lg uppercase tracking-wide text-muted-foreground">ACCELERATED BY</span>
            <img src="/images/partners/fastercapital-logo.png" alt="FasterCapital official logo" className="h-16 md:h-20 w-auto object-contain" loading="lazy" />
          </a>

          {/* Universal Value Proposition Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-sos-orange">SafeOrStolen</h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            A platform for verifying IMEI, VIN, and Serial Numbers to protect buyers and sellers in the secondhand market from stolen goods. Verify any item in seconds and buy, sell, and do business with 100% confidence.
          </p>
          
          
          {/* Service Disclaimer */}
          
          
          {/* Remove duplicate image since it's now the background */}

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold px-8 py-4 text-lg" onClick={() => {
            if (!isAuthenticated) {
              navigate('/auth?tab=signup');
            } else {
              navigate('/dashboard');
            }
          }}>
              <Shield className="mr-2 h-5 w-5" />
              Check a Serial Number — It's Free
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
          

          {/* Guest Check Banner */}
          {!isAuthenticated && remainingSearches > 0 && (
            <GuestCheckBanner remainingSearches={remainingSearches} />
          )}
          
          {/* Search Form */}
          <div className="space-y-8">
            <EnhancedSearchForm onOpenQrScanner={() => setShowQrScanner(true)} />
          </div>

          {/* Sign up notice for free searches */}
          {isAuthenticated && (
            <div className="text-center mb-8">
              <p className="text-sm md:text-base text-gray-300">
                You have <span className="text-sos-lime font-semibold">4 searches included</span> with your account.
              </p>
            </div>
          )}
          
          {!isAuthenticated && remainingSearches === 0 && (
            <div className="text-center mb-8">
              <p className="text-sm md:text-base text-gray-300">
                Sign up to receive <span className="text-sos-lime font-semibold">4 free searches</span>.{' '}
                <Link to="/auth?tab=signup" className="text-sos-orange hover:text-sos-orange/90 font-semibold underline-offset-4 hover:underline">Create your free account</Link>.
              </p>
            </div>
          )}

          {/* Extra actions below */}
          <div className="flex flex-col items-center gap-4 mt-12">
             <div className="w-full max-w-2xl mx-auto">
               <Button variant="destructive" className="w-full px-5" onClick={() => {
              if (!isAuthenticated) {
                navigate('/auth?tab=signup');
              } else {
                navigate('/firearms-check');
              }
            }} aria-label="Search Stolen Firearms Database">
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
      
      {/* QR Scanner Modal */}
      {showQrScanner && (
        <Suspense fallback={<div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">Loading scanner...</div>}>
          <QrScanner 
            isOpen={showQrScanner}
            onOpenChange={setShowQrScanner}
            onScanSuccess={(result) => {
              console.log('QR Scan result:', result);
              setShowQrScanner(false);
            }}
          />
        </Suspense>
      )}
    </div>;
};
export default Hero;