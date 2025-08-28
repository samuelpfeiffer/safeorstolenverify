import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, ArrowLeft, ShoppingCart, HelpCircle } from 'lucide-react';

const SubscriptionCancelPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
            <XCircle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Checkout Canceled
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              No worries! You can always come back when you're ready.
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              Picked the wrong subscription? Shop around then come back to pay!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2">Still Interested?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Compare our plans</li>
                <li>• Check our FAQ</li>
                <li>• Contact support</li>
                <li>• Try our free tier</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2">What You'll Miss:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Unlimited verifications</li>
                <li>• Advanced fraud detection</li>
                <li>• Priority support</li>
                <li>• Detailed reports</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              onClick={() => navigate('/pricing')}
              className="flex-1"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              View Plans Again
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>

          <div className="text-center pt-4 border-t">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/contact')}
              className="text-muted-foreground hover:text-foreground"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Need help? Contact us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionCancelPage;