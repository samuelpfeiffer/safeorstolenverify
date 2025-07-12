
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Activity } from 'lucide-react';

interface AuditLoggingSettingsProps {
  enableAuditLogging: boolean;
  enableSecureErrorHandling: boolean;
  onSettingChange: (key: string, value: boolean) => Promise<void>;
}

export const AuditLoggingSettings = ({ 
  enableAuditLogging, 
  enableSecureErrorHandling, 
  onSettingChange 
}: AuditLoggingSettingsProps) => {
  return (
    <Card className="bg-sos border-sos-orange/20">
      <CardHeader>
        <CardTitle className="text-sos-orange flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Audit Logging
        </CardTitle>
        <CardDescription className="text-gray-300">
          Track and monitor account activity
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="enableAudit" className="text-white">
            Enable Audit Logging
          </Label>
          <Switch
            id="enableAudit"
            checked={enableAuditLogging}
            onCheckedChange={(checked) => onSettingChange('enableAuditLogging', checked)}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="enableSecureErrors" className="text-white">
            Secure Error Handling
          </Label>
          <Switch
            id="enableSecureErrors"
            checked={enableSecureErrorHandling}
            onCheckedChange={(checked) => onSettingChange('enableSecureErrorHandling', checked)}
          />
        </div>
      </CardContent>
    </Card>
  );
};
