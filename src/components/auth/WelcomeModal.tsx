import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Gift, Search, Users, ArrowRight, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  userEmail?: string;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ 
  isOpen, 
  onClose, 
  userName, 
  userEmail 
}) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    onClose();
    navigate('/?welcome=true');
  };

  const handleExploreSubscriptions = () => {
    onClose();
    navigate('/pricing');
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sos-orange to-orange-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <DialogTitle className="text-3xl font-bold text-center">
              🎉 Welcome to SafeOrStolen{userName ? `, ${userName.split(' ')[0]}` : ''}!
            </DialogTitle>
            <p className="text-lg text-muted-foreground">
              Your protection against stolen goods starts now!
            </p>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Email Confirmation */}
          {userEmail && (
            <Card className="bg-green-50 border-green-200">
              <CardContent className="flex items-center gap-3 pt-4">
                <Mail className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-green-800">
                    Welcome email sent to {userEmail}
                  </p>
                  <p className="text-xs text-green-600">
                    Check your inbox for next steps and pro tips!
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Subscription Badge */}
          <div className="text-center">
            <Badge variant="secondary" className="bg-sos-orange text-white px-4 py-2 text-lg">
              <Gift className="w-4 h-4 mr-2" />
              $10/mo Unlimited Verifications!
            </Badge>
          </div>

          {/* What You Can Do Now */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-sos-orange" />
              What You Can Do Right Now:
            </h3>
            
            <div className="grid gap-4">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-sos-orange rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold">Verify Your First Item</h4>
                  <p className="text-sm text-muted-foreground">Search for any IMEI, VIN, or serial number to check if it's stolen</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-sos-orange rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold">Bookmark Our Site</h4>
                  <p className="text-sm text-muted-foreground">Keep SafeOrStolen handy for all your future purchases</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-sos-orange rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold">Explore Premium Features</h4>
                  <p className="text-sm text-muted-foreground">Get unlimited verifications and advanced reports</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                💡 Pro Tips for Safe Buying:
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Always verify serial numbers before expensive purchases
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Check IMEI numbers for all mobile devices
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Verify VIN numbers when buying used vehicles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Trust your instincts - if a deal seems too good to be true, verify first
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Community */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Join Our Community</h4>
              </div>
              <p className="text-sm text-blue-800 mb-3">
                Share your success stories and help others avoid scams. Together, we're making online buying safer for everyone.
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleGetStarted}
              className="flex-1 bg-sos-orange hover:bg-sos-orange/90"
              size="lg"
            >
              Start Verifying Items
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              onClick={handleExploreSubscriptions}
              variant="outline" 
              className="flex-1"
              size="lg"
            >
              View Plans — From $0.99
            </Button>
          </div>

          {/* Skip Option */}
          <div className="text-center">
            <Button 
              onClick={onClose}
              variant="ghost" 
              size="sm"
              className="text-muted-foreground"
            >
              Skip Welcome - Take Me to Dashboard
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};