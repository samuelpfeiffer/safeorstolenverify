import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Search, 
  Shield, 
  Zap, 
  ArrowRight,
  Gift,
  BookOpen
} from 'lucide-react';
import { Link } from '@/lib/router-compat';

interface SignupSuccessProps {
  userEmail?: string;
  onClose?: () => void;
}

export const SignupSuccess: React.FC<SignupSuccessProps> = ({ userEmail, onClose }) => {
  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-sos-lime/10 to-sos-orange/10 border-sos-lime/30">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 bg-sos-lime/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-sos-lime" />
          </div>
        </div>
        <CardTitle className="text-2xl md:text-3xl text-sos-lime">
          🎉 Welcome to SafeOrStolen!
        </CardTitle>
        <p className="text-muted-foreground">
          {userEmail ? `Account created successfully for ${userEmail}` : 'Your account has been created successfully!'}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Free Searches Gift */}
        <div className="bg-gradient-to-r from-sos-orange/20 to-sos-lime/20 p-4 rounded-lg border border-sos-orange/30">
          <div className="flex items-center gap-3 mb-3">
            <Gift className="h-6 w-6 text-sos-orange" />
            <div>
              <h3 className="font-semibold text-lg">Welcome!</h3>
              <Badge variant="secondary" className="bg-sos-lime/20 text-sos-lime border-sos-lime/30">
                $0.99/check or $10/mo Unlimited
              </Badge>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Get a single check for $0.99 or subscribe for $10/month for unlimited verifications across all item types. Cancel anytime.
          </p>
        </div>

        {/* Next Steps */}
        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-sos-orange" />
            What to do next:
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg border border-border/50">
              <div className="h-8 w-8 bg-sos-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-sos-orange">1</span>
              </div>
              <div>
                <h4 className="font-medium">Start Your First Verification</h4>
                <p className="text-sm text-muted-foreground">
                  Enter an IMEI, VIN, or serial number to check if an item has been reported stolen.
                </p>
                <Button size="sm" className="mt-2" asChild>
                  <Link to="/" onClick={onClose}>
                    <Search className="h-4 w-4 mr-2" />
                    Start Verifying
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg border border-border/50">
              <div className="h-8 w-8 bg-sos-lime/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-sos-lime">2</span>
              </div>
              <div>
                <h4 className="font-medium">Explore Our Guides</h4>
                <p className="text-sm text-muted-foreground">
                  Learn how to safely buy and sell secondhand items with our comprehensive guides.
                </p>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <Link to="/blog" onClick={onClose}>
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Guides
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg border border-border/50">
              <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
              <div>
                <h4 className="font-medium">Upgrade When Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Need more searches? Upgrade to unlimited verifications anytime.
                </p>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <Link to="/pricing" onClick={onClose}>
                    <Zap className="h-4 w-4 mr-2" />
                    View Plans
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-muted/30 p-4 rounded-lg">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5 text-sos-orange" />
            Quick Tips for Success:
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-sos-lime flex-shrink-0" />
              Always verify items before purchasing from marketplaces
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-sos-lime flex-shrink-0" />
              Save receipts and verification results for your records
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-sos-lime flex-shrink-0" />
              Share SafeOrStolen with friends to help create a safer marketplace
            </li>
          </ul>
        </div>

        <div className="text-center pt-4">
          <Button onClick={onClose} className="w-full">
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};