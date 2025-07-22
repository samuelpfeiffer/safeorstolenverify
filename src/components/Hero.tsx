
import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRealVerification } from '@/hooks/useRealVerification';
import { EnhancedSearchForm } from '@/components/hero/EnhancedSearchForm';
import { HeroBackground } from '@/components/hero/HeroBackground';
import { StatsTickerBar } from '@/components/hero/StatsTickerBar';
import { TrustIndicators } from '@/components/hero/TrustIndicators';
import QrScanner from '@/components/hero/QrScanner';
import HeroActionButtons from '@/components/hero/HeroActionButtons';
import { detectItemType } from '@/utils/itemTypeDetector';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { Badge } from '@/components/ui/badge';
import { Shield, Sparkles } from 'lucide-react';
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

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        {/* Enhanced Background */}
        <HeroBackground />
        
        {/* Hero Content */}
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Trust Badge */}
            <div className="mb-8 flex justify-center animate-fadeIn">
              <Badge variant="secondary" className="glass-effect text-sm font-medium px-6 py-3 border-sos-lime/20 bg-card/40 backdrop-blur-md">
                <Sparkles className="h-4 w-4 mr-2 text-sos-lime" />
                Trusted by 500K+ Users Worldwide • Featured by FasterCapital
              </Badge>
            </div>
            
            {/* Logo */}
            <div className="mb-12 flex justify-center animate-slideUp">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png" 
                  alt="Safe or Stolen Logo" 
                  className="h-24 w-24 md:h-32 md:w-32 filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute -inset-6 bg-gradient-to-r from-sos-orange/20 via-sos-lime/20 to-sos-orange/20 rounded-full blur-2xl animate-pulse opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="text-center mb-12">
              <h1 className={cn(
                isMobile ? 'text-4xl' : 'text-5xl md:text-6xl lg:text-7xl',
                'font-bold mb-8 animate-slideUp text-balance leading-tight'
              )}>
                <span className="text-white">Don't Get</span>{' '}
                <span className="text-gradient bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Scammed</span>
                <br />
                <span className="text-white">Verify Before</span>{' '}
                <span className="text-gradient">You Buy</span>
              </h1>
              
              {/* Enhanced Subheadline */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-slideUp text-pretty leading-relaxed" style={{
                animationDelay: '0.2s'
              }}>
                Fighting the <strong className="text-red-400">$13 billion stolen goods crisis</strong> with{' '}
                <strong className="text-sos-lime">real-time database verification</strong>.{' '}
                Protecting millions from unknowingly purchasing stolen items.
              </p>
              
              {/* Problem statement */}
              <div className="max-w-3xl mx-auto mb-12 p-6 rounded-2xl bg-red-500/10 border border-red-500/20 animate-slideUp" style={{
                animationDelay: '0.3s'
              }}>
                <p className="text-red-300 font-medium mb-2">⚠️ The Hidden Problem</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every day, innocent buyers unknowingly purchase stolen goods from marketplaces, 
                  facing legal consequences and financial losses. Until now, there was no reliable way to verify items before purchase.
                </p>
              </div>
            </div>

            {/* Stats Ticker */}
            <StatsTickerBar />
            
            {/* Enhanced Search Form */}
            <div className="mb-12">
              <ErrorBoundary fallback={
                <div className="text-center p-4 text-gray-500">
                  Search form temporarily unavailable
                </div>
              }>
                <EnhancedSearchForm onOpenQrScanner={handleOpenQrScanner} />
              </ErrorBoundary>
            </div>

            {/* Trust Indicators */}
            <TrustIndicators />
            
            {/* Action Buttons */}
            <ErrorBoundary fallback={
              <div className="text-center p-4 text-gray-500">
                Action buttons temporarily unavailable
              </div>
            }>
              <HeroActionButtons />
            </ErrorBoundary>
            
            {/* Bottom Social Proof */}
            <div className="mt-20 text-center animate-fadeIn" style={{
              animationDelay: '0.7s'
            }}>
              <p className="text-sm text-muted-foreground mb-8">
                Backed by leading accelerators • Trusted by law enforcement agencies • Used by enterprise customers
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <span className="text-card-foreground font-medium text-sm">FasterCapital Portfolio</span>
                </div>
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <span className="text-card-foreground font-medium text-sm">Law Enforcement Verified</span>
                </div>
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <span className="text-card-foreground font-medium text-sm">Enterprise Ready</span>
                </div>
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <span className="text-card-foreground font-medium text-sm">SOC 2 Compliant</span>
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
