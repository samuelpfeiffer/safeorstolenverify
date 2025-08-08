
import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRealVerification } from '@/hooks/useRealVerification';
import SearchForm from '@/components/hero/SearchForm';
import QrScanner from '@/components/hero/QrScanner';
import HeroActionButtons from '@/components/hero/HeroActionButtons';
import { detectItemType } from '@/utils/itemTypeDetector';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, Star, Users } from 'lucide-react';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isQrScannerOpen, setIsQrScannerOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const { verifyItem } = useRealVerification();
  const { addToSearchHistory } = useSearchHistory();

  const handleQrCodeSuccess = useCallback(async (decodedText: string) => {
    if (!decodedText?.trim()) {
      toast({
        title: "Invalid QR Code",
        description: "The QR code appears to be empty or invalid.",
        variant: "destructive"
      });
      return;
    }

    try {
      const itemType = detectItemType(decodedText);
      const trimmedText = decodedText.trim();

      // Add to search history
      addToSearchHistory(trimmedText);
      
      toast({
        title: "QR Code Scanned Successfully",
        description: `Starting real verification for ${itemType}: ${trimmedText}`
      });

      // Perform real verification
      const result = await verifyItem(trimmedText, itemType);
      if (result?.id) {
        // Navigate to verification results with the result ID
        navigate(`/?verificationId=${result.id}`);

        // Scroll to verification section after a slight delay
        setTimeout(() => {
          const verificationSection = document.getElementById('verification-results');
          if (verificationSection) {
            verificationSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else {
        throw new Error('No verification result received');
      }
    } catch (error) {
      console.error('QR verification error:', error);
      toast({
        title: "Verification Failed",
        description: error instanceof Error ? error.message : "Unable to verify the scanned item. Please try again.",
        variant: "destructive"
      });
    }
  }, [verifyItem, addToSearchHistory, navigate, toast]);

  const handleOpenQrScanner = useCallback(() => {
    setIsQrScannerOpen(true);
  }, []);

  const handleCloseQrScanner = useCallback((open: boolean) => {
    setIsQrScannerOpen(open);
  }, []);

  // Memoize trust indicators to prevent unnecessary re-renders
  const trustIndicators = useMemo(() => [
    {
      icon: CheckCircle,
      text: "Real Database Integration",
      color: "text-sos-lime"
    },
    {
      icon: Star,
      text: "Law Enforcement Verified",
      color: "text-sos-orange"
    },
    {
      icon: Shield,
      text: "98.7% Accuracy Rate",
      color: "text-sos-lime"
    }
  ], []);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card/10 to-background pt-20 md:pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sos-orange/5 via-transparent to-sos-lime/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sos-orange/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sos-lime/10 rounded-full filter blur-3xl animate-float" style={{
            animationDelay: '1s'
          }}></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="mb-8 flex justify-center animate-fadeIn">
              <Badge variant="secondary" className="glass-effect text-sm font-medium px-6 py-3 border-sos-lime/20 bg-card">
                <Users className="h-4 w-4 mr-2 text-sos-lime" />
                Trusted by 500K+ Users Worldwide
              </Badge>
            </div>
            
            {/* Logo */}
            <div className="mb-12 flex justify-center animate-slideUp">
              <div className="relative">
                <img 
                  src="/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png" 
                  alt="Safe or Stolen Logo" 
                  className="h-24 w-24 md:h-32 md:w-32 filter drop-shadow-2xl" 
                />
                <div className="absolute -inset-4 bg-sos-orange/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className={cn(
              isMobile ? 'text-4xl' : 'text-5xl md:text-6xl lg:text-7xl',
              'font-bold mb-8 animate-slideUp text-balance'
            )}>
              <span className="text-white">Verify Before</span>{' '}
              <span className="text-gradient">You Buy</span>
              <br />
              <span className="text-white">2nd-hand Item verification</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-slideUp text-pretty leading-relaxed" style={{
              animationDelay: '0.2s'
            }}>
              Fighting the $13 billion stolen goods crisis with{' '}
              <strong className="text-foreground">real-time database verification</strong>.{' '}
              Protecting millions of innocent consumers from unknowingly purchasing stolen items.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm animate-slideUp" style={{
              animationDelay: '0.3s'
            }}>
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-3 card-enhanced px-6 py-4">
                  <indicator.icon className={cn('h-5 w-5', indicator.color)} />
                  <span className="text-card-foreground font-medium">{indicator.text}</span>
                </div>
              ))}
            </div>
            
            {/* Search Form */}
            <div className="mb-12">
              <ErrorBoundary fallback={
                <div className="text-center p-4 text-gray-500">
                  Search form temporarily unavailable
                </div>
              }>
                <SearchForm onOpenQrScanner={handleOpenQrScanner} />
              </ErrorBoundary>
            </div>
            
            {/* Action Buttons */}
            <ErrorBoundary fallback={
              <div className="text-center p-4 text-gray-500">
                Action buttons temporarily unavailable
              </div>
            }>
              <HeroActionButtons />
            </ErrorBoundary>
            
            {/* Social Proof & FasterCapital */}
            <div className="mt-16 animate-fadeIn" style={{
              animationDelay: '0.5s'
            }}>
              <p className="text-sm text-muted-foreground mb-6">Backed by leading accelerators & trusted by law enforcement agencies</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 opacity-60">
                <div className="card-enhanced px-6 py-3">
                  <span className="text-card-foreground font-medium">FasterCapital Accelerated</span>
                </div>
                <div className="card-enhanced px-6 py-3">
                  <span className="text-card-foreground font-medium">Law Enforcement Verified</span>
                </div>
                <div className="card-enhanced px-6 py-3">
                  <span className="text-card-foreground font-medium">Enterprise Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QR Scanner Dialog */}
        <ErrorBoundary fallback={null}>
          <QrScanner 
            isOpen={isQrScannerOpen} 
            onOpenChange={handleCloseQrScanner} 
            onScanSuccess={handleQrCodeSuccess} 
          />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default Hero;
