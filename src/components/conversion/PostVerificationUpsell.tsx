import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, AlertTriangle, Zap, Download, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PostVerificationUpsellProps {
  verificationStatus: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  remainingSearches: number;
  isSubscribed: boolean;
  onUpgrade?: () => void;
}

export const PostVerificationUpsell: React.FC<PostVerificationUpsellProps> = ({
  verificationStatus,
  remainingSearches,
  isSubscribed,
  onUpgrade
}) => {
  const navigate = useNavigate();

  // Don't show upsell to subscribers
  if (isSubscribed) return null;

  const handleUpgrade = () => {
    if (onUpgrade) {
      onUpgrade();
    } else {
      navigate('/pricing');
    }
  };

  // Different messaging based on result
  const getUpsellContent = () => {
    if (verificationStatus === 'safe') {
      return {
        icon: <CheckCircle className="w-6 h-6 text-accent" />,
        title: "Great news! This item appears safe",
        subtitle: "Want peace of mind on ALL your purchases?",
        benefits: [
          "Unlimited verifications",
          "Priority support",
          "Detailed reports",
          "Money-back guarantee"
        ],
        cta: "Upgrade for Unlimited Checks"
      };
    } else if (verificationStatus === 'stolen' || verificationStatus === 'lost') {
      return {
        icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
        title: "⚠️ Warning: This item may be stolen!",
        subtitle: "You just avoided a potential $800+ loss. Protect yourself on every purchase:",
        benefits: [
          "Check unlimited items",
          "Real-time alerts",
          "Report to authorities",
          "Legal protection info"
        ],
        cta: "Get Unlimited Protection"
      };
    } else {
      return {
        icon: <Shield className="w-6 h-6 text-primary" />,
        title: "Verification Complete",
        subtitle: "Want more thorough checks and unlimited searches?",
        benefits: [
          "Access premium databases",
          "Deeper verification",
          "Unlimited searches",
          "Priority support"
        ],
        cta: "Upgrade for Better Results"
      };
    }
  };

  const content = getUpsellContent();

  return (
    <Card className="mt-6 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Left side - Message */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              {content.icon}
              <h3 className="font-bold text-lg">{content.title}</h3>
            </div>
            <p className="text-muted-foreground">{content.subtitle}</p>
            
            {/* Benefits */}
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {content.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-accent" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Remaining searches warning */}
            {remainingSearches <= 1 && (
              <div className="bg-destructive/10 text-destructive rounded-lg p-2 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                {remainingSearches === 0 
                  ? "You've used all free searches!"
                  : `Only ${remainingSearches} free search left!`
                }
              </div>
            )}
          </div>

          {/* Right side - CTA */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <Button 
              onClick={handleUpgrade}
              size="lg"
              className="bg-primary hover:bg-primary/90 gap-2"
            >
              <Crown className="w-4 h-4" />
              {content.cta}
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Starting at just $2.99</p>
              <p className="text-xs text-accent font-medium">30-day money-back guarantee</p>
            </div>

            {/* App download alternative */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/app')}
              className="text-xs"
            >
              <Download className="w-3 h-3 mr-1" />
              Or download the free app
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostVerificationUpsell;
