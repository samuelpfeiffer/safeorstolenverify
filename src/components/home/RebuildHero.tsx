import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Scan, Lock, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { Suspense } from 'react';

function AnimatedSphere() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

export const RebuildHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-background via-blue-950/20 to-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-[1]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-[2] opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Pre-headline Badge */}
          <Badge variant="secondary" className="mb-8 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm bg-primary/10 border border-primary/20">
            <Shield className="w-4 h-4 mr-2 inline" />
            Backed by FasterCapital
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
            Verify Before You Buy.<br />
            <span className="text-primary">Never Get Scammed.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Instant verification for phones, vehicles & electronics using IMEI, VIN, and serial numbers
          </p>

          {/* Supporting Text */}
          <p className="text-base md:text-lg mb-12 text-muted-foreground/80 max-w-3xl mx-auto">
            Check stolen item databases in real-time. Protect yourself from fraud on Facebook Marketplace, OfferUp, and Craigslist.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
              onClick={() => navigate('/pricing')}
            >
              <Scan className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Start Free Verification
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 text-lg px-8 py-6 h-auto backdrop-blur-sm hover:bg-primary/10"
              onClick={() => navigate('/how-it-works')}
            >
              <Lock className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-foreground">10+ Sources Checked</span>
              <span className="text-xs text-muted-foreground">Real-time verification</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-foreground">1,000+ Items Verified</span>
              <span className="text-xs text-muted-foreground">Trusted by buyers</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-foreground">2-Minute Checks</span>
              <span className="text-xs text-muted-foreground">Instant results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};