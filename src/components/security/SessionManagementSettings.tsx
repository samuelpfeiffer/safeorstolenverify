
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
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Lock className="h-5 w-5 text-primary" />
          Session Management
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Control your session security
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="text-foreground">Session Timeout</Label>
          <p className="text-sm text-muted-foreground">
            {sessionTimeoutMinutes} minutes
          </p>
        </div>
        
        <Button
          variant="outline"
          className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
          onClick={handleClearSessions}
        >
          Clear All Sessions
        </Button>
      </CardContent>
    </Card>
  );
};
