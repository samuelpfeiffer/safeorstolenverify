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
    <div className="relative overflow-hidden">
      {/* Clean Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Subtle Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        {/* Clean Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/90 text-sm font-medium bg-white/5 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-sos-orange" />
              <span>Trusted by 100,000+ Users Worldwide</span>
            </div>

            {/* Main Headline - Clean & Clear */}
            <h1 id="main-headline" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Check if Items are Stolen
              <span className="block mt-4 text-sos-orange">
                Download the SafeOrStolen App
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Instantly verify IMEI, VIN, and serial numbers. Protect yourself when buying or selling secondhand items.
            </p>
            
            {/* Primary CTA */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-sos-orange hover:bg-sos-orange/90 text-white font-bold px-12 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all" 
                onClick={handleNavigateToAuth} 
                aria-describedby="main-headline"
              >
                <Shield className="mr-3 h-6 w-6" aria-hidden="true" />
                Start Free Verification
              </Button>
              <p className="text-white/60 text-sm">4 free searches • No credit card required</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
              {[
                { value: '$2.3M+', label: 'Scams Prevented' },
                { value: '< 3s', label: 'Verification Time' },
                { value: '100%', label: 'Free to Start' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-sos-orange mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Simple Features Grid - Below Hero */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-10">
            {/* Buyers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-sos-orange/50 transition-all">
              <Shield className="h-10 w-10 text-sos-orange mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">For Buyers</h3>
              <p className="text-white/70 text-sm">
                Never buy stolen goods. Verify items instantly before purchase.
              </p>
            </div>

            {/* Sellers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-sos-lime/50 transition-all">
              <BadgeCheck className="h-10 w-10 text-sos-lime mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">For Sellers</h3>
              <p className="text-white/70 text-sm">
                Prove legitimacy. Build trust with verified clean records.
              </p>
            </div>

            {/* Businesses */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all">
              <Users className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">For Businesses</h3>
              <p className="text-white/70 text-sm">
                API access for pawn shops, resellers, and marketplaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
Hero.displayName = 'Hero';
export default Hero;