import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Search, Car, Smartphone, Package } from 'lucide-react';

interface InternalLink {
  href: string;
  text: string;
  icon?: React.ReactNode;
  description?: string;
}

interface InternalLinkingOptimizerProps {
  pageType: 'homepage' | 'service' | 'blog' | 'pricing';
  currentPath?: string;
}

export const InternalLinkingOptimizer: React.FC<InternalLinkingOptimizerProps> = ({ 
  pageType, 
  currentPath = '' 
}) => {
  const getRelevantLinks = (): InternalLink[] => {
    switch (pageType) {
      case 'homepage':
        return [
          {
            href: '/check-phone',
            text: 'Free IMEI Phone Check',
            icon: <Smartphone className="h-4 w-4" />,
            description: 'Verify if smartphone is stolen before buying'
          },
          {
            href: '/check-car',
            text: 'VIN Car Verification',
            icon: <Car className="h-4 w-4" />,
            description: 'Check if vehicle is reported stolen'
          },
          {
            href: '/pricing',
            text: 'View All Pricing Plans',
            icon: <Package className="h-4 w-4" />,
            description: 'Choose your protection level from $9.99/month'
          },
          {
            href: '/dashboard',
            text: 'Start Verification Now',
            icon: <Shield className="h-4 w-4" />,
            description: 'Access verification dashboard'
          }
        ];
      
      case 'service':
        return [
          {
            href: '/how-it-works',
            text: 'How Verification Works',
            icon: <Search className="h-4 w-4" />,
            description: 'Learn our verification process'
          },
          {
            href: '/pricing',
            text: 'Unlimited Verifications',
            icon: <Package className="h-4 w-4" />,
            description: 'Get unlimited checks for $9.99/month'
          },
          {
            href: '/data-sources',
            text: 'Our Data Sources',
            icon: <Shield className="h-4 w-4" />,
            description: 'See which databases we check'
          }
        ];
      
      case 'pricing':
        return [
          {
            href: '/check-phone',
            text: 'Try Free Phone Check',
            icon: <Smartphone className="h-4 w-4" />,
            description: 'Test our service before subscribing'
          },
          {
            href: '/dashboard',
            text: 'Access Dashboard',
            icon: <Shield className="h-4 w-4" />,
            description: 'Start using your verification credits'
          }
        ];
      
      default:
        return [
          {
            href: '/',
            text: 'Back to Home',
            icon: <ArrowRight className="h-4 w-4" />,
            description: 'Return to main verification page'
          }
        ];
    }
  };

  const links = getRelevantLinks().filter(link => link.href !== currentPath);

  if (links.length === 0) return null;

  return (
    <div className="bg-muted/30 rounded-lg p-6 mt-8">
      <h3 className="text-lg font-semibold mb-4 text-foreground">
        Related Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="group flex items-start gap-3 p-3 rounded-md hover:bg-background/50 transition-colors border border-border/50 hover:border-primary/30"
          >
            <div className="flex-shrink-0 mt-1">
              {link.icon}
            </div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                {link.text}
              </div>
              {link.description && (
                <div className="text-sm text-muted-foreground mt-1">
                  {link.description}
                </div>
              )}
            </div>
            <ArrowRight className="h-4 w-4 ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
          </Link>
        ))}
      </div>
    </div>
  );
};