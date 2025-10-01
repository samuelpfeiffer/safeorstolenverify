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
      {/* Futuristic Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* 3D Holographic Background */}
        <HolographicBackground />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <CyberReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full cyber-border neon-glow text-white/90 text-sm font-medium mb-8">
                <Shield className="h-4 w-4 text-neon-cyan" />
                <span className="text-cyber">Trusted by 100,000+ Users Worldwide</span>
              </div>
            </CyberReveal>

            {/* Main Headline with Cyber Effect */}
            <CyberReveal delay={0.2}>
              <h1 id="main-headline" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(0,255,255,0.5)',
                      '0 0 40px rgba(0,255,255,0.8)',
                      '0 0 20px rgba(0,255,255,0.5)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="block"
                >
                  How to Instantly Check if an Item is Stolen
                </motion.span>
                <span className="block mt-4 bg-gradient-to-r from-sos-orange-500 via-sos-orange-400 to-sos-orange-600 bg-clip-text text-transparent cyber-float font-extrabold">
                  SafeOrStolen Mobile App
                </span>
              </h1>
            </CyberReveal>
            
            {/* Subheading */}
            <SlideUp delay={0.4}>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                The world's only mobile app for stolen item verification. Check IMEI, VIN, and serial numbers to protect buyers and sellers in the secondhand market from fraud.
                <span className="block mt-2 text-neon-cyan font-semibold pulse-glow">
                  Instantly verify items • Safe marketplace buying • Anti-fraud app for buyers
                </span>
              </p>
            </SlideUp>
            
            {/* Enhanced Primary CTA */}
            <SlideUp delay={0.6}>
              <div className="mb-16">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-cyber hover:shadow-neon text-white font-bold px-12 py-6 text-xl rounded-2xl neon-glow transform transition-all duration-300" 
                    onClick={handleNavigateToAuth} 
                    aria-describedby="main-headline"
                  >
                    <Shield className="mr-3 h-6 w-6" aria-hidden="true" />
                    Start Free Verification
                  </Button>
                </motion.div>
                <p className="text-white/60 text-sm mt-4">No signup required • Results in seconds</p>
              </div>
            </SlideUp>

            {/* FasterCapital Branding */}
            <SlideUp delay={0.9}>
              <div className="mb-12">
                <FasterCapitalBranding />
              </div>
            </SlideUp>

            {/* Three User Type Sections */}
            <SlideUp delay={1.0}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                {/* Buyers Section */}
                <div className="bg-gradient-to-br from-sos-orange/20 to-sos-orange/5 rounded-2xl p-6 border border-sos-orange/30 hover:border-sos-orange/50 transition-all duration-300 cyber-border">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-sos-orange mb-3">For Buyers</h3>
                    <p className="text-white/80 mb-6 text-sm">
                      Shop with confidence. Never buy stolen goods again.
                    </p>
                    <Button 
                      onClick={handleNavigateToAuth}
                      className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold"
                    >
                      Start Checking Items
                    </Button>
                  </div>
                </div>

                {/* Sellers Section */}
                <div className="bg-gradient-to-br from-sos-lime/20 to-sos-lime/5 rounded-2xl p-6 border border-sos-lime/30 hover:border-sos-lime/50 transition-all duration-300 cyber-border">
                  <div className="text-center">
                    <BadgeCheck className="h-12 w-12 text-sos-lime mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-sos-lime mb-3">For Sellers</h3>
                    <p className="text-white/80 mb-6 text-sm">
                      Prove your items are legitimate. Sell with confidence.
                    </p>
                    <Button 
                      onClick={handleNavigateToAuth}
                      className="w-full bg-sos-lime hover:bg-sos-lime/90 text-sos-dark font-semibold"
                    >
                      Verify Your Items
                    </Button>
                  </div>
                </div>

                {/* Businesses Section */}
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 cyber-border">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-blue-500 mb-3">For Businesses</h3>
                    <p className="text-white/80 mb-6 text-sm">
                      API integration for pawn shops, resellers & more.
                    </p>
                    <Button 
                      onClick={handleNavigateToAuth}
                      className="w-full bg-blue-500 hover:bg-blue-500/90 text-white font-semibold"
                    >
                      Get Business Access
                    </Button>
                  </div>
                </div>
              </div>
            </SlideUp>

            {/* Enhanced Search Form - Requires Auth */}
            <SlideUp delay={1.2}>
              <div className="mt-8">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-neon-cyan/20 cyber-border">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Ready to Verify?</h3>
                      <p className="text-white/70">Sign up to get 4 free searches and start protecting yourself</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        onClick={handleNavigateToAuth}
                        size="lg"
                        className="flex-1 bg-gradient-cyber hover:shadow-neon text-white font-bold py-4 text-lg"
                      >
                        <Shield className="mr-2 h-5 w-5" />
                        Get Started - Free
                      </Button>
                      <Button 
                        onClick={handleNavigateToFirearms}
                        size="lg"
                        variant="outline"
                        className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-slate-900 py-4"
                      >
                        Check Firearms
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
            
            {/* Enhanced Trust Indicators with Animations */}
            <SlideUp delay={0.8}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { value: '$2.3M+', label: 'Scams Prevented', color: 'text-neon-cyan' },
                  { value: '< 3s', label: 'Instant Results', color: 'text-neon-green' },
                  { value: '100%', label: 'Free to Use', color: 'text-neon-purple' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center cyber-border rounded-lg p-4 bg-black/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,255,255,0.3)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <motion.div 
                      className={`text-3xl font-bold mb-2 ${stat.color}`}
                      animate={{
                        textShadow: [
                          '0 0 10px currentColor',
                          '0 0 20px currentColor',
                          '0 0 10px currentColor',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </SlideUp>
          </div>
        </div>
        
        {/* Enhanced Floating Device Preview */}
        <motion.div 
          className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <img 
              src={heroImage} 
              alt="SafeOrStolen verification interface" 
              className="w-80 h-auto rounded-3xl shadow-2xl cyber-border neon-glow" 
              loading="eager"
              width="320" 
              height="640" 
            />
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-cyber opacity-20 rounded-3xl pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});
Hero.displayName = 'Hero';
export default Hero;