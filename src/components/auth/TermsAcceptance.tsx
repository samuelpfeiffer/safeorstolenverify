
import { TermsAcceptanceForm } from './TermsAcceptanceForm';

interface TermsAcceptanceProps {
  onAccept: () => void;
  onBack: () => void;
  isLoading?: boolean;
}

export const TermsAcceptance = ({ onAccept, onBack, isLoading = false }: TermsAcceptanceProps) => {
  return <TermsAcceptanceForm onAccept={onAccept} onBack={onBack} isLoading={isLoading} />;
};
