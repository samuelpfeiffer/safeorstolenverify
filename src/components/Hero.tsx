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

            {/* MOBILE APP HEADLINE - FOR BUYERS, SELLERS & BUSINESSES */}
            <h1 id="main-headline" className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight tracking-tight animate-slideUp">
              📱 FREE Mobile App for 
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Buyers • Sellers • Businesses
              </span>
              <span className="block mt-4 text-3xl sm:text-4xl md:text-5xl">
                Verify Items on Facebook Marketplace, OfferUp, Craigslist, eBay
              </span>
            </h1>
            
            {/* MOBILE APP VALUE PROP - ALL AUDIENCES */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
              <span className="block mb-3">
                🛒 <strong>BUYERS:</strong> Avoid stolen goods • Verify BEFORE buying
              </span>
              <span className="block mb-3">
                🏪 <strong>SELLERS:</strong> Prove legitimacy • Build trust instantly
              </span>
              <span className="block mb-3">
                🏢 <strong>BUSINESSES:</strong> API access • Bulk verification • Pawn shops & resellers
              </span>
              <span className="block mt-4 text-lg md:text-xl font-bold text-destructive">
                ⚠️ ONLY mobile app for iOS & Android • CheckMend & IMEIinfo have NO apps!
              </span>
            </p>
            
            {/* MOBILE APP DOWNLOAD CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all animate-pulse" 
                onClick={handleNavigateToAuth}
                aria-describedby="main-headline"
              >
                📱 Download FREE App Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/50 hover:bg-primary/10 font-semibold px-10 py-7 text-lg rounded-2xl hover:scale-105 transition-all" 
                onClick={handleNavigateToAuth}
              >
                <Shield className="mr-2 h-5 w-5" aria-hidden="true" />
                Start Verifying Free
              </Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-foreground text-base font-semibold">✓ Available on App Store (iPhone) & Google Play (Android)</p>
              <p className="text-muted-foreground text-sm">4 FREE verifications • No credit card • Verify in 30 seconds</p>
              <p className="text-destructive text-sm font-bold">⚠️ Don't meet marketplace sellers without this app!</p>
            </div>

            {/* MARKETPLACE-FOCUSED STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12 border-t border-border/50">
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">📱 ONLY</div>
                <div className="text-sm text-muted-foreground">Mobile App (iOS & Android)</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">4 FREE</div>
                <div className="text-sm text-muted-foreground">Verifications Included</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-accent">30 sec</div>
                <div className="text-sm text-muted-foreground">On-Site Verification</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Marketplace Buyers Trust Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOR BUYERS, SELLERS & BUSINESSES */}
      <div className="container mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ONLY Mobile App for Buyers, Sellers & Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Download FREE on iPhone & Android • Works on Facebook Marketplace, OfferUp, Craigslist, eBay
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* BUYERS */}
          <div className="bg-card rounded-2xl p-8 border-2 border-primary hover:border-primary hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">For Buyers</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Verify items BEFORE handing over cash</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Check phones, cars, electronics on-site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Avoid buying stolen goods from marketplaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>4 FREE verifications included</span>
              </li>
            </ul>
          </div>

          {/* SELLERS */}
          <div className="bg-card rounded-2xl p-8 border-2 border-secondary hover:border-secondary hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4">🏪</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">For Sellers</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Prove items are legitimate & not stolen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Build instant trust with buyers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Show clean verification before listing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Sell faster with verified credentials</span>
              </li>
            </ul>
          </div>

          {/* BUSINESSES */}
          <div className="bg-card rounded-2xl p-8 border-2 border-accent hover:border-accent hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">For Businesses</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>API access for bulk verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Perfect for pawn shops & resellers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Integrate with online marketplaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Verify inventory instantly</span>
              </li>
            </ul>
          </div>
        </div>

        {/* URGENCY BANNER FOR ALL AUDIENCES */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-lg font-bold text-primary mb-2">👤 Buying Today?</p>
              <p className="text-sm text-muted-foreground">Don't meet seller without verifying first!</p>
            </div>
            <div>
              <p className="text-lg font-bold text-secondary mb-2">🏪 Selling Items?</p>
              <p className="text-sm text-muted-foreground">Prove legitimacy & build trust instantly!</p>
            </div>
            <div>
              <p className="text-lg font-bold text-accent mb-2">🏢 Run a Business?</p>
              <p className="text-sm text-muted-foreground">Get API access for bulk verification!</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 text-lg"
              onClick={handleNavigateToAuth}
            >
              📱 Download FREE App Now - iOS & Android
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              4 FREE verifications • No credit card • Works offline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
Hero.displayName = 'Hero';
export default Hero;