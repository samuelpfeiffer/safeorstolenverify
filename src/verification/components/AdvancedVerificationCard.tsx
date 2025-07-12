import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, CheckCircle, XCircle, Info, Clock, Database } from 'lucide-react';
import { type VerificationResult } from '../VerificationEngine';
import { cn } from '@/lib/utils';

interface AdvancedVerificationCardProps {
  result: VerificationResult;
  onViewDetails?: () => void;
  className?: string;
}

export const AdvancedVerificationCard: React.FC<AdvancedVerificationCardProps> = ({
  result,
  onViewDetails,
  className
}) => {
  const getStatusIcon = () => {
    switch (result.status) {
      case 'safe':
        return <CheckCircle className="h-6 w-6 text-sos-lime" />;
      case 'stolen':
        return <XCircle className="h-6 w-6 text-destructive" />;
      case 'lost':
        return <AlertTriangle className="h-6 w-6 text-sos-orange" />;
      case 'unknown':
        return <Info className="h-6 w-6 text-muted-foreground" />;
      default:
        return <XCircle className="h-6 w-6 text-destructive" />;
    }
  };

  const getRiskBadgeVariant = () => {
    switch (result.risk_level) {
      case 'critical':
        return 'destructive';
      case 'high':
        return 'destructive';
      case 'medium':
        return 'secondary';
      case 'low':
        return 'default';
      default:
        return 'secondary';
    }
  };

  const getStatusColor = () => {
    switch (result.status) {
      case 'safe':
        return 'border-sos-lime/50 bg-sos-lime/5';
      case 'stolen':
        return 'border-destructive/50 bg-destructive/5';
      case 'lost':
        return 'border-sos-orange/50 bg-sos-orange/5';
      case 'unknown':
        return 'border-muted/50 bg-muted/5';
      default:
        return 'border-destructive/50 bg-destructive/5';
    }
  };

  return (
    <Card className={cn(
      'transition-all duration-300 hover:shadow-lg',
      getStatusColor(),
      className
    )}>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {getStatusIcon()}
            <div>
              <CardTitle className="text-lg">
                {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Confidence: {result.confidence}%
              </p>
            </div>
          </div>
          <Badge variant={getRiskBadgeVariant()}>
            {result.risk_level.toUpperCase()} RISK
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="bg-card/50 p-4 rounded-lg">
          <p className="text-sm font-medium mb-2">Verification Result:</p>
          <p className="text-sm text-muted-foreground">{result.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Database className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Source</p>
              <p className="text-muted-foreground">{result.source}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Verified</p>
              <p className="text-muted-foreground">
                {new Date(result.verified_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {result.sources_checked.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Sources Checked:</p>
            <div className="flex flex-wrap gap-1">
              {result.sources_checked.map((source, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {source}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {onViewDetails && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onViewDetails}
            className="w-full"
          >
            <Shield className="h-4 w-4 mr-2" />
            View Detailed Report
          </Button>
        )}
      </CardContent>
    </Card>
  );
};