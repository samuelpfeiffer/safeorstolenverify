import React, { Suspense, useState, lazy, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Users, BadgeCheck } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { HolographicBackground } from '@/components/futuristic/HolographicBackground';
import { motion } from 'framer-motion';
import { CyberReveal, SlideUp } from '@/components/futuristic/MotionWrapper';
import { EnhancedSearchForm } from '@/components/hero/EnhancedSearchForm';
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
              <h1 id="main-headline" className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(0,255,255,0.5)',
                      '0 0 40px rgba(0,255,255,0.8)',
                      '0 0 20px rgba(0,255,255,0.5)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Verify Before You Buy
                </motion.span>
                <span className="block text-cyber cyber-float">Safe Or Stolen</span>
              </h1>
            </CyberReveal>
            
            {/* Subheading */}
            <SlideUp delay={0.4}>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Protecting buyers and sellers in the secondhand market from buying and selling stolen items such as used vehicles, guns, electronics, phones, machinery, and more.
                <span className="block mt-2 text-neon-cyan font-semibold pulse-glow">
                  Instantly verify IMEI, VIN & serial numbers worldwide
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

            {/* Enhanced Search Form Integration */}
            <SlideUp delay={1.2}>
              <div className="mt-16">
                <EnhancedSearchForm onOpenQrScanner={() => setShowQrScanner(true)} />
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
              fetchPriority="high" 
              width="320" 
              height="640" 
            />
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-cyber opacity-20 rounded-3xl pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced QR Scanner Modal */}
      {showQrScanner && (
        <Suspense fallback={
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="cyber-border rounded-xl p-8 bg-card">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neon-cyan mx-auto mb-4"></div>
              <p className="text-cyber">Loading futuristic scanner...</p>
            </div>
          </div>
        }>
          <QrScanner isOpen={showQrScanner} onOpenChange={setShowQrScanner} onScanSuccess={handleQrScanSuccess} />
        </Suspense>
      )}
    </div>
  );
});
Hero.displayName = 'Hero';
export default Hero;