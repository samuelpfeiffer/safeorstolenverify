import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { Shield, AlertTriangle, X } from 'lucide-react';

interface TermsAndConditionsProps {
  onAccept: () => void;
  onDecline: () => void;
  isLoading?: boolean;
}

export const TermsAndConditions = ({ onAccept, onDecline, isLoading = false }: TermsAndConditionsProps) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  const canProceed = termsAccepted && disclaimerAccepted;

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card border border-border">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Shield className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-2xl text-card-foreground">Terms & Conditions</CardTitle>
        <CardDescription className="text-muted-foreground">
          Please read and accept our terms to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
              <div className="space-y-2 text-sm">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200">
                  IMPORTANT DISCLAIMER
                </h4>
                <div className="text-orange-700 dark:text-orange-300 space-y-2">
                  <p>
                    <strong>This service is for reference only and could make mistakes.</strong>
                  </p>
                  <p>
                    We are NOT liable for any mistakes, errors, or inaccuracies in our verification results.
                  </p>
                  <p>
                    We are NOT responsible for inaccurate results or any decisions made based on our service.
                  </p>
                  <p>
                    Always perform your own due diligence when purchasing second-hand items.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                disabled={isLoading}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-card-foreground"
              >
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="disclaimer"
                checked={disclaimerAccepted}
                onCheckedChange={(checked) => setDisclaimerAccepted(checked as boolean)}
                disabled={isLoading}
                className="mt-1"
              />
              <label
                htmlFor="disclaimer"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-card-foreground"
              >
                I understand and accept that this service is for reference only, may contain errors, and that Safe or Stolen is not liable for any inaccurate results or decisions made based on this service.
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={onDecline}
            variant="outline"
            disabled={isLoading}
            className="flex-1"
          >
            <X className="h-4 w-4 mr-2" />
            Decline
          </Button>
          <Button
            onClick={onAccept}
            disabled={!canProceed || isLoading}
            className="flex-1"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              'Accept & Continue'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};