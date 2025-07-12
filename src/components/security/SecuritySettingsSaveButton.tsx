
import { Button } from '@/components/ui/button';

interface SecuritySettingsSaveButtonProps {
  onSave: () => Promise<void>;
  isLoading: boolean;
}

export const SecuritySettingsSaveButton = ({ onSave, isLoading }: SecuritySettingsSaveButtonProps) => {
  return (
    <div className="flex justify-end">
      <Button
        onClick={onSave}
        disabled={isLoading}
        className="bg-sos-orange hover:bg-sos-orange/90 text-white"
      >
        {isLoading ? 'Saving...' : 'Save Settings'}
      </Button>
    </div>
  );
};
