
import { Shield } from 'lucide-react';

export const SecuritySettingsHeader = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold text-sos-orange flex items-center gap-2">
        <Shield className="h-8 w-8" />
        Security Settings
      </h1>
      <p className="text-gray-300">
        Manage your account security and privacy settings
      </p>
    </div>
  );
};
