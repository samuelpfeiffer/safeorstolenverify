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

            {/* MOBILE APP HEADLINE - MARKETPLACE FOCUSED */}
            <h1 id="main-headline" className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight tracking-tight animate-slideUp">
              📱 FREE Mobile App for 
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Facebook Marketplace • OfferUp • Craigslist • eBay
              </span>
              <span className="block mt-4 text-3xl sm:text-4xl md:text-5xl">
                Check Items BEFORE Buying!
              </span>
            </h1>
            
            {/* MOBILE APP VALUE PROP */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              🚨 <strong>ONLY mobile app</strong> to verify phones, cars & electronics on-site! 
              <span className="block mt-3 text-lg md:text-xl">
                Download FREE on <strong>iPhone & Android</strong> • Verify at meetup in 30 seconds • 4 FREE checks included
              </span>
              <span className="block mt-3 text-base md:text-lg text-destructive font-bold">
                ⚠️ CheckMend & IMEIinfo have NO mobile apps - SafeOrStolen is your ONLY option!
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

      {/* MARKETPLACE USE CASES - WHO NEEDS THIS APP */}
      <div className="container mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perfect for Marketplace Buyers & Sellers
          </h2>
          <p className="text-lg text-muted-foreground">
            The ONLY mobile app designed specifically for Facebook Marketplace, OfferUp, Craigslist & eBay
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-6 border-2 border-primary hover:border-primary hover:shadow-2xl transition-all group">
            <div className="text-4xl mb-4">📘</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Facebook Marketplace</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Verify phones & electronics BEFORE meeting seller. Download app, check IMEI on-site in 30 seconds.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 border-2 border-secondary hover:border-secondary hover:shadow-2xl transition-all group">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-bold text-foreground mb-2">OfferUp Buyers</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Check items at meetup location with FREE mobile app. Don't hand over cash without verifying first!
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 border-2 border-accent hover:border-accent hover:shadow-2xl transition-all group">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Craigslist Safety</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Verify cars with VIN check on-site. Mobile app works anywhere - parking lots, driveways, dealerships.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 border-2 border-primary hover:border-primary hover:shadow-2xl transition-all group">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-lg font-bold text-foreground mb-2">eBay Verification</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Check items before bidding or upon delivery. ONLY mobile app for eBay buyer protection.
            </p>
          </div>
        </div>

        {/* URGENCY BANNER */}
        <div className="mt-12 max-w-3xl mx-auto bg-destructive/10 border-2 border-destructive rounded-2xl p-8 text-center">
          <p className="text-xl font-bold text-destructive mb-3">
            ⚠️ Meeting a seller today? Download the app NOW!
          </p>
          <p className="text-muted-foreground mb-4">
            Don't risk buying stolen goods. Get FREE verification BEFORE handing over cash.
          </p>
          <Button 
            size="lg" 
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-10 py-6"
            onClick={handleNavigateToAuth}
          >
            Download FREE App - Verify in 30 Seconds
          </Button>
        </div>
      </div>
    </div>
  );
});
Hero.displayName = 'Hero';
export default Hero;