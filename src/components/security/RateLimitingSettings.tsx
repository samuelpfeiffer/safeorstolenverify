
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Timer } from 'lucide-react';
import { SECURITY_CONFIG } from '@/utils/securityConfig';

interface RateLimitingSettingsProps {
  enableRateLimiting: boolean;
  onSettingChange: (key: string, value: boolean) => Promise<void>;
}

export const RateLimitingSettings = ({ enableRateLimiting, onSettingChange }: RateLimitingSettingsProps) => {
  return (
    <Card className="bg-sos border-sos-orange/20">
      <CardHeader>
        <CardTitle className="text-sos-orange flex items-center gap-2">
          <Timer className="h-5 w-5" />
          Rate Limiting
        </CardTitle>
        <CardDescription className="text-gray-300">
          Configure request rate limits for enhanced security
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="enableRateLimit" className="text-white">
            Enable Rate Limiting
          </Label>
          <Switch
            id="enableRateLimit"
            checked={enableRateLimiting}
            onCheckedChange={(checked) => onSettingChange('enableRateLimiting', checked)}
          />
        </div>
        
        <div className="space-y-2">
          <Label className="text-white">Current Limits</Label>
          <div className="text-sm text-gray-400 space-y-1">
            <p>Verification: {SECURITY_CONFIG.RATE_LIMITS.VERIFICATION}/hour</p>
            <p>Search History: {SECURITY_CONFIG.RATE_LIMITS.SEARCH_HISTORY}/hour</p>
            <p>Profile Updates: {SECURITY_CONFIG.RATE_LIMITS.PROFILE_UPDATE}/hour</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
