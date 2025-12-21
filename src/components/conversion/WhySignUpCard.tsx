import { Check, Shield, Zap, Bell, FileText, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface WhySignUpCardProps {
  onSignUp?: () => void;
}

/**
 * Compelling reasons to sign up - reduces friction by showing clear value
 */
export const WhySignUpCard = ({ onSignUp }: WhySignUpCardProps) => {
  const benefits = [
    { icon: Zap, text: '2 free verifications', highlight: true },
    { icon: Shield, text: 'Access 100+ stolen databases' },
    { icon: Bell, text: 'Watchlist alerts when items are searched' },
    { icon: FileText, text: 'PDF verification reports' },
    { icon: Smartphone, text: 'Mobile app access (only app available)' },
    { icon: Check, text: 'No credit card required' },
  ];

  return (
    <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <CardContent className="pt-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-1">Sign Up Free in 30 Seconds</h3>
          <p className="text-muted-foreground text-sm">
            Join thousands protecting themselves from stolen goods
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-2 p-2 rounded-lg ${
                benefit.highlight ? 'bg-primary/10 border border-primary/20' : ''
              }`}
            >
              <benefit.icon className={`h-4 w-4 flex-shrink-0 ${
                benefit.highlight ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <span className={`text-sm ${benefit.highlight ? 'font-medium' : ''}`}>
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild size="lg" className="flex-1">
            <Link to="/auth?tab=signup&redirect=/verify">
              Get 2 Free Checks
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link to="/auth?tab=signin&redirect=/verify">
              Sign In
            </Link>
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-3">
          ✓ Google sign-in available • ✓ Takes 30 seconds • ✓ No spam
        </p>
      </CardContent>
    </Card>
  );
};
