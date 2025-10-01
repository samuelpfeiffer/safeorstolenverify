import React, { Suspense, useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Users, BadgeCheck } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { HolographicBackground } from '@/components/futuristic/HolographicBackground';
import { motion } from 'framer-motion';
import { CyberReveal, SlideUp } from '@/components/futuristic/MotionWrapper';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';
import heroImage from '@/assets/hero-verification-devices.png';
const Hero = memo(() => {
  const navigate = useNavigate();
  const {
    isAuthenticated
  } = useUnifiedAuth();
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
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Full Width Hero Image */}
      <div className="w-full">
        <img 
          src={heroImage} 
          alt="SafeOrStolen verification on mobile and laptop showing item verified status" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Modern Hero Section */}
      <div className="relative min-h-[85vh] flex items-center justify-center py-20">
        <HolographicBackground />
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            
            {/* FasterCapital Branding - Front and Center */}
            <div className="pt-4">
              <FasterCapitalBranding />
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fadeIn">
              <Shield className="h-4 w-4" />
              <span>Trusted by 100,000+ Users</span>
            </div>

            {/* Bold, Clear Headline - SEO Optimized */}
            <h1 id="main-headline" className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight tracking-tight animate-slideUp">
              Free IMEI, VIN & Gun Serial Checker
              <span className="block mt-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Only Mobile App for Complete Verification
              </span>
            </h1>
            
            {/* Clear Value Prop */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Instant verification on iOS & Android. Check phones (IMEI), cars (VIN), electronics & firearms serial numbers anywhere, anytime. 
              Unlike CheckMend or IMEIinfo - we're the ONLY service with a mobile app that verifies everything including guns!
            </p>
            
            {/* Big, Clear CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all" 
                onClick={handleNavigateToAuth}
                aria-describedby="main-headline"
              >
                <Shield className="mr-2 h-5 w-5" aria-hidden="true" />
                Start Free Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-foreground/20 hover:bg-muted font-semibold px-10 py-7 text-lg rounded-2xl hover:scale-105 transition-all" 
                onClick={handleNavigateToFirearms}
              >
                Download App
              </Button>
            </div>
            
            <p className="text-muted-foreground text-sm">4 free searches • No credit card • Instant results</p>

            {/* Clean Stats Row */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-border/50">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">$2.3M+</div>
                <div className="text-sm text-muted-foreground">Scams Prevented</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-secondary">&lt;3s</div>
                <div className="text-sm text-muted-foreground">Verification</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Free to Start</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who It's For - Clean Cards Below */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">For Buyers</h3>
            <p className="text-muted-foreground leading-relaxed">
              Never buy stolen goods. Verify items instantly before making a purchase.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BadgeCheck className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">For Sellers</h3>
            <p className="text-muted-foreground leading-relaxed">
              Prove legitimacy and build trust with verified clean records.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">For Businesses</h3>
            <p className="text-muted-foreground leading-relaxed">
              API access for pawn shops, resellers, and online marketplaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
Hero.displayName = 'Hero';
export default Hero;