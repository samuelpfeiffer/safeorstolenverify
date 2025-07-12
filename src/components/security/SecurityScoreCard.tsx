
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SecurityScoreCardProps {
  securityScore: number;
}

export const SecurityScoreCard = ({ securityScore }: SecurityScoreCardProps) => {
  const getSecurityStatus = (score: number) => {
    if (score >= 90) return { label: 'Excellent', color: 'bg-green-500', icon: ShieldCheck };
    if (score >= 70) return { label: 'Good', color: 'bg-blue-500', icon: Shield };
    if (score >= 50) return { label: 'Fair', color: 'bg-yellow-500', icon: ShieldAlert };
    return { label: 'Needs Attention', color: 'bg-red-500', icon: ShieldAlert };
  };

  const securityStatus = getSecurityStatus(securityScore);
  const SecurityIcon = securityStatus.icon;

  return (
    <Card className="bg-sos border-sos-orange/20">
      <CardHeader>
        <CardTitle className="text-sos-orange flex items-center gap-2">
          <SecurityIcon className="h-6 w-6" />
          Security Dashboard
        </CardTitle>
        <CardDescription className="text-gray-300">
          Overview of your account security status
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Security Score */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white font-medium">Overall Security Score</span>
            <Badge className={cn(securityStatus.color, 'text-white')}>
              {securityStatus.label}
            </Badge>
          </div>
          <Progress value={securityScore} className="h-3" />
          <p className="text-sm text-gray-400">
            {securityScore}/100 - Based on verification activity, audit compliance, and security settings
          </p>
        </div>

        {/* Security Alerts */}
        {securityScore < 70 && (
          <Alert className="border-yellow-500/50 bg-yellow-500/10">
            <ShieldAlert className="h-4 w-4" />
            <AlertDescription className="text-yellow-200">
              Your security score could be improved. Consider enabling all security features and reviewing your audit logs.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};
