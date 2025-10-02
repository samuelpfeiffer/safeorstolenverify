import React from 'react';
import { OptimizedImage } from '@/components/performance/OptimizedImage';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import runningDeal from '@/assets/ads/running-deal.jpg';
import handshakeConfidence from '@/assets/ads/handshake-confidence.jpg';
import smartphoneCheck from '@/assets/ads/smartphone-check.jpg';
import laptopVerify from '@/assets/ads/laptop-verify.jpg';
import firearmCheck from '@/assets/ads/firearm-check.jpg';

interface ContextualAdProps {
  context: 'pricing' | 'verification' | 'smartphone' | 'vehicle' | 'firearm' | 'general';
  placement?: 'sidebar' | 'inline' | 'banner';
}

export const ContextualAdPlacement: React.FC<ContextualAdProps> = ({ 
  context, 
  placement = 'inline' 
}) => {
  const adMapping = {
    pricing: {
      src: runningDeal,
      title: 'Special Pricing Available',
      description: 'Get unlimited verifications with our premium plans. Limited time offer!',
      cta: 'View All Plans',
      link: '/pricing',
    },
    verification: {
      src: handshakeConfidence,
      title: 'Verify with Confidence',
      description: 'Join thousands who verify before they buy. Protect yourself today.',
      cta: 'Start Verification',
      link: '/real-time-verification',
    },
    smartphone: {
      src: smartphoneCheck,
      title: 'Check IMEI Instantly',
      description: 'Verify any smartphone is safe to buy. Check stolen databases worldwide.',
      cta: 'Verify Phone',
      link: '/real-time-verification',
    },
    vehicle: {
      src: laptopVerify,
      title: 'VIN Verification',
      description: 'Check vehicle history and stolen status before you purchase.',
      cta: 'Check VIN',
      link: '/real-time-verification',
    },
    firearm: {
      src: firearmCheck,
      title: 'Firearm Serial Check',
      description: 'Stay legal. Verify firearm serial numbers before purchase.',
      cta: 'Check Serial',
      link: '/real-time-verification',
    },
    general: {
      src: handshakeConfidence,
      title: 'Buy & Sell Safely',
      description: 'Verify any item before purchase. Avoid stolen goods and fraud.',
      cta: 'Learn More',
      link: '/real-time-verification',
    },
  };

  const ad = adMapping[context];

  const getPlacementStyles = () => {
    switch (placement) {
      case 'sidebar':
        return 'max-w-sm';
      case 'banner':
        return 'w-full max-w-6xl';
      case 'inline':
      default:
        return 'max-w-2xl';
    }
  };

  const isBanner = placement === 'banner';

  return (
    <Card className={`overflow-hidden ${getPlacementStyles()} mx-auto my-8 group hover:shadow-lg transition-all duration-300`}>
      <div className={`${isBanner ? 'flex flex-col md:flex-row' : 'flex flex-col'}`}>
        <div className={`relative overflow-hidden ${isBanner ? 'md:w-1/2' : 'w-full'}`}>
          <OptimizedImage
            src={ad.src}
            alt={ad.title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              isBanner ? 'h-48 md:h-full' : 'h-48'
            }`}
          />
          <div className="absolute top-3 right-3">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
              SPONSORED
            </span>
          </div>
        </div>

        <div className={`p-6 ${isBanner ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
          <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
          <p className="text-muted-foreground mb-4">{ad.description}</p>
          <Link to={ad.link}>
            <Button className="w-full sm:w-auto">
              {ad.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

// Smart wrapper that detects page context
export const SmartAdPlacement: React.FC<{ placement?: 'sidebar' | 'inline' | 'banner' }> = ({ 
  placement = 'inline' 
}) => {
  const path = window.location.pathname;
  
  let context: ContextualAdProps['context'] = 'general';
  
  if (path.includes('pricing')) context = 'pricing';
  else if (path.includes('verification') || path.includes('check')) context = 'verification';
  else if (path.includes('phone') || path.includes('mobile') || path.includes('imei')) context = 'smartphone';
  else if (path.includes('vehicle') || path.includes('car') || path.includes('vin')) context = 'vehicle';
  else if (path.includes('firearm') || path.includes('gun')) context = 'firearm';
  
  return <ContextualAdPlacement context={context} placement={placement} />;
};
