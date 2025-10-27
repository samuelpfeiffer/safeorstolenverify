import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
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
          onCheckedChange={onTermsChange}
          disabled={disabled}
          className="border-gray-600 data-[state=checked]:bg-sos-orange data-[state=checked]:border-sos-orange"
        />
        <Label htmlFor="terms" className="text-sm text-foreground/90 leading-relaxed">
          I agree to the{' '}
          <Link
            to="/terms-of-service"
            target="_blank"
            className="text-sos-orange hover:underline"
          >
            Terms & Conditions
          </Link>
        </Label>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          id="privacy"
          checked={privacyAccepted}
          onCheckedChange={onPrivacyChange}
          disabled={disabled}
          className="border-gray-600 data-[state=checked]:bg-sos-orange data-[state=checked]:border-sos-orange"
        />
        <Label htmlFor="privacy" className="text-sm text-foreground/90 leading-relaxed">
          I agree to the{' '}
          <Link
            to="/privacy-policy"
            target="_blank"
            className="text-sos-orange hover:underline"
          >
            Privacy Policy
          </Link>
        </Label>
      </div>
    </div>
  );
};