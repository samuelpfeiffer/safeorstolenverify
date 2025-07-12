
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TermsCheckboxes } from './TermsCheckboxes';

interface TermsAcceptanceFormProps {
  onAccept: () => void;
  onBack: () => void;
  isLoading?: boolean;
}

export const TermsAcceptanceForm = ({ onAccept, onBack, isLoading = false }: TermsAcceptanceFormProps) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const canProceed = termsAccepted && privacyAccepted && !isLoading;

  return (
    <div className="space-y-6 p-6 bg-gray-900 rounded-lg border border-gray-800">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Terms & Conditions</h2>
        <p className="text-gray-300">
          Please review and accept our terms to complete your registration
        </p>
      </div>

      <TermsCheckboxes
        termsAccepted={termsAccepted}
        privacyAccepted={privacyAccepted}
        onTermsChange={setTermsAccepted}
        onPrivacyChange={setPrivacyAccepted}
        disabled={isLoading}
      />

      <div className="space-y-3">
        <Button
          onClick={onAccept}
          disabled={!canProceed}
          className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Creating Account...</span>
            </div>
          ) : (
            'Accept Terms & Create Account'
          )}
        </Button>

        <Button
          variant="outline"
          onClick={onBack}
          disabled={isLoading}
          className="w-full border-gray-600 text-white hover:bg-gray-800"
        >
          Back to Sign Up
        </Button>
      </div>
    </div>
  );
};
