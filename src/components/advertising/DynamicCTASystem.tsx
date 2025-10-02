import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, TrendingUp, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * Dynamic CTA System - Contextual calls-to-action based on user behavior
 * Changes messaging based on page, scroll depth, time on site, and user journey
 */
export const DynamicCTASystem: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [scrollDepth, setScrollDepth] = useState(0);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [ctaVersion, setCTAVersion] = useState<'urgency' | 'value' | 'social-proof' | 'risk'>('value');

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollDepth(Math.round(scrollPercent));
    };

    // Track time on page
    const startTime = Date.now();
    const timeInterval = setInterval(() => {
      setTimeOnPage(Math.round((Date.now() - startTime) / 1000));
    }, 1000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  // Dynamic CTA selection based on behavior
  useEffect(() => {
    if (scrollDepth > 75) {
      setCTAVersion('urgency'); // User is engaged, create urgency
    } else if (timeOnPage > 30) {
      setCTAVersion('social-proof'); // User is reading, show social proof
    } else if (location.pathname.includes('problem')) {
      setCTAVersion('risk'); // Emphasize risk on problem page
    } else {
      setCTAVersion('value'); // Default to value proposition
    }
  }, [scrollDepth, timeOnPage, location]);

  const ctaConfig = {
    urgency: {
      icon: Zap,
      title: "Don't Wait - Verify Now Before You Buy!",
      description: "Every hour, 262 people unknowingly buy stolen goods. Don't be next.",
      buttonText: "Start Free Verification →",
      bgColor: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/50"
    },
    value: {
      icon: CheckCircle,
      title: "Get 4 FREE Verifications Today",
      description: "Join 25,000+ smart buyers protecting themselves from fraud",
      buttonText: "Try Free Now →",
      bgColor: "from-primary/20 to-blue-500/20",
      borderColor: "border-primary/50"
    },
    'social-proof': {
      icon: TrendingUp,
      title: "25,000+ Users Trust Us Daily",
      description: "$2.3M in fraud prevented. 4.8★ rating. Instant verification.",
      buttonText: "Join Them Free →",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/50"
    },
    risk: {
      icon: AlertTriangle,
      title: "Buying Stolen Goods is a Crime - Even If You Didn't Know",
      description: "Face fines, lose your purchase, get no refund. Verify first, stay safe.",
      buttonText: "Protect Yourself Now →",
      bgColor: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/50"
    }
  };

  const config = ctaConfig[ctaVersion];
  const Icon = config.icon;

  const handleCTAClick = () => {
    // Track conversion event
    console.log('CTA Clicked:', {
      version: ctaVersion,
      page: location.pathname,
      scrollDepth,
      timeOnPage
    });

    toast({
      title: "Great choice!",
      description: "Get started with 4 FREE verifications"
    });

    navigate('/auth?tab=signup');
  };

  // Don't show on auth pages
  if (location.pathname.includes('/auth')) {
    return null;
  }

  return (
    <div className="sticky bottom-4 left-0 right-0 z-40 px-4 animate-fade-in">
      <Card className={`max-w-4xl mx-auto bg-gradient-to-r ${config.bgColor} backdrop-blur-lg border-2 ${config.borderColor} shadow-2xl`}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white/10 flex-shrink-0">
              <Icon className="h-8 w-8 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{config.title}</h3>
              <p className="text-white/80 text-sm">{config.description}</p>
            </div>
            
            <Button 
              size="lg" 
              onClick={handleCTAClick}
              className="bg-white text-primary hover:bg-gray-100 font-bold shadow-lg flex-shrink-0"
            >
              {config.buttonText}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
