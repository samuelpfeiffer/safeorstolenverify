
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SessionManagementSettingsProps {
  sessionTimeoutMinutes: number;
}

export const SessionManagementSettings = ({ sessionTimeoutMinutes }: SessionManagementSettingsProps) => {
  const { toast } = useToast();

  const handleClearSessions = () => {
    toast({
      title: "Sessions cleared",
      description: "All active sessions have been terminated.",
      variant: "default"
    });
  };

  return (
    <Card className="bg-sos border-sos-orange/20">
      <CardHeader>
        <CardTitle className="text-sos-orange flex items-center gap-2">
          <Lock className="h-5 w-5" />
          Session Management
        </CardTitle>
        <CardDescription className="text-gray-300">
          Control your session security
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="text-white">Session Timeout</Label>
          <p className="text-sm text-gray-400">
            {sessionTimeoutMinutes} minutes
          </p>
        </div>
        
        <Button
          variant="outline"
          className="w-full border-sos-orange text-sos-orange hover:bg-sos-orange/10"
          onClick={handleClearSessions}
        >
          Clear All Sessions
        </Button>
      </CardContent>
    </Card>
  );
};
