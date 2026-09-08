import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { Link } from '@/lib/router-compat';

interface CommercialCTAProps {
  type?: 'verification' | 'business' | 'protection' | 'guide';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

export const CommercialCTA: React.FC<CommercialCTAProps> = ({
  type = 'verification',
  title,
  description,
  buttonText,
  buttonLink,
  variant = 'primary'
}) => {
  const configs = {
    verification: {
      title: "Don't Risk Buying Stolen Goods",
      description: "Use SafeOrStolen to verify any item in seconds before you purchase. Join 25,000+ smart buyers who protect their money.",
      buttonText: "Check an Item Now",
      buttonLink: "/verify",
      icon: Shield,
      badge: "Free Verification",
      stats: "2,847 stolen items found this month"
    },
    business: {
      title: "Protect Your Business from Liability",
      description: "Integrate our enterprise API to eliminate stolen goods from your marketplace. Reduce liability and build customer trust.",
      buttonText: "Schedule Demo",
      buttonLink: "/for-businesses", 
      icon: Shield,
      badge: "Enterprise Solution",
      stats: "Helping prevent fraud for businesses"
    },
    protection: {
      title: "Stop Losing Money to Scams",
      description: "Every verification could save you hundreds or thousands. Start protecting your purchases today.",
      buttonText: "Start Protecting Yourself",
      buttonLink: "/pricing",
      icon: Shield,
      badge: "Money-Back Guarantee",
      stats: "Recommended by law enforcement"
    },
    guide: {
      title: "Get the Complete Buyer Protection Guide",
      description: "Learn professional verification techniques used by security experts. Never buy stolen goods again.",
      buttonText: "Read Full Guide",
      buttonLink: "/blog/complete-verification-guide",
      icon: CheckCircle,
      badge: "Expert Guide",
      stats: "Used by thousands of smart buyers"
    }
  };

  const config = configs[type];
  const finalTitle = title || config.title;
  const finalDescription = description || config.description;
  const finalButtonText = buttonText || config.buttonText;
  const finalButtonLink = buttonLink || config.buttonLink;

  const variantStyles = {
    default: "border-gray-200 bg-gray-50",
    primary: "border-primary/20 bg-primary/5",
    success: "border-green-200 bg-green-50",
    warning: "border-orange-200 bg-orange-50"
  };

  const buttonVariants = {
    default: "default",
    primary: "default",
    success: "default", 
    warning: "default"
  };

  return (
    <Card className={`${variantStyles[variant]} border-2 my-8`}>
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <Badge className="bg-primary text-primary-foreground">
              {config.badge}
            </Badge>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-900">
              {finalTitle}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {finalDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              asChild
              size="lg"
              variant={buttonVariants[variant] as any}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link to={finalButtonLink}>
                <config.icon className="mr-2 h-5 w-5" />
                {finalButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{config.stats}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-green-500" />
              No setup required
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-green-500" />
              Instant results
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-green-500" />
              Bank-level security
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};