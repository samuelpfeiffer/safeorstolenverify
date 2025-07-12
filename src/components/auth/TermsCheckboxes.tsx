
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';

interface TermsCheckboxesProps {
  termsAccepted: boolean;
  privacyAccepted: boolean;
  onTermsChange: (checked: boolean) => void;
  onPrivacyChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const TermsCheckboxes = ({
  termsAccepted,
  privacyAccepted,
  onTermsChange,
  onPrivacyChange,
  disabled = false,
}: TermsCheckboxesProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <Checkbox
          id="terms"
          checked={termsAccepted}
          onCheckedChange={(checked) => onTermsChange(checked as boolean)}
          className="mt-1"
          disabled={disabled}
        />
        <label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed">
          I have read and agree to the{' '}
          <Link 
            to="/terms-of-service" 
            target="_blank"
            className="text-sos-orange hover:underline"
          >
            Terms of Service
          </Link>
        </label>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          id="privacy"
          checked={privacyAccepted}
          onCheckedChange={(checked) => onPrivacyChange(checked as boolean)}
          className="mt-1"
          disabled={disabled}
        />
        <label htmlFor="privacy" className="text-sm text-gray-300 leading-relaxed">
          I have read and agree to the{' '}
          <Link 
            to="/privacy-policy" 
            target="_blank"
            className="text-sos-orange hover:underline"
          >
            Privacy Policy
          </Link>
        </label>
      </div>
    </div>
  );
};
