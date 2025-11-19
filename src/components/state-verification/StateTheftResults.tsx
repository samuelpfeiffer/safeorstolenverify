import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle, HelpCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StateTheftResultsProps {
  result: {
    status: 'safe' | 'stolen' | 'unknown';
    message: string;
    details?: any;
    source: string;
    timestamp: string;
  };
  stateCode: string;
  stateName: string;
}

const STATUS_CONFIG = {
  safe: {
    icon: CheckCircle,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-950',
    badgeVariant: 'default' as const,
    title: 'No Theft Records Found'
  },
  stolen: {
    icon: AlertTriangle,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-950',
    badgeVariant: 'destructive' as const,
    title: '⚠️ Possible Theft Record Found'
  },
  unknown: {
    icon: HelpCircle,
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    badgeVariant: 'secondary' as const,
    title: 'Unable to Verify'
  }
};

export const StateTheftResults: React.FC<StateTheftResultsProps> = ({
  result,
  stateCode,
  stateName
}) => {
  const config = STATUS_CONFIG[result.status];
  const Icon = config.icon;

  return (
    <div className="space-y-6">
      <Card className={config.bgColor}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon className={`h-8 w-8 ${config.color}`} />
              <div>
                <CardTitle>{config.title}</CardTitle>
                <CardDescription>{stateName} ({stateCode}) Verification</CardDescription>
              </div>
            </div>
            <Badge variant={config.badgeVariant}>{result.status.toUpperCase()}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground">{result.message}</p>

          {result.details && (
            <div className="space-y-3 pt-4 border-t">
              {result.details.checked_databases && (
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Databases Checked:</p>
                  <div className="flex flex-wrap gap-2">
                    {result.details.checked_databases.map((db: string, index: number) => (
                      <Badge key={index} variant="outline">
                        <Shield className="h-3 w-3 mr-1" />
                        {db}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {result.details.hotline && (
                <div className="bg-background/50 p-3 rounded-md">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Report Theft:</p>
                  <p className="text-sm font-mono">{result.details.hotline}</p>
                </div>
              )}

              {result.details.verification_date && (
                <p className="text-xs text-muted-foreground">
                  Verified: {new Date(result.details.verification_date).toLocaleString()}
                </p>
              )}

              {result.details.disclaimer && (
                <p className="text-xs text-muted-foreground italic border-l-2 border-muted pl-3">
                  {result.details.disclaimer}
                </p>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              Source: {result.source}
            </p>
            <Button variant="outline" size="sm" asChild>
              <a 
                href={`/${stateCode.toLowerCase()}-vin-lookup`}
                className="flex items-center gap-2"
              >
                More {stateName} Lookups
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {result.status === 'stolen' && (
        <Card className="border-red-600 dark:border-red-400">
          <CardHeader>
            <CardTitle className="text-red-600 dark:text-red-400">⚠️ Important Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">If you have encountered a potentially stolen item:</p>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li>Do NOT complete the purchase</li>
              <li>Contact {stateName} law enforcement immediately</li>
              <li>Report the seller/listing to the marketplace</li>
              <li>Do not confront the seller directly</li>
            </ol>
          </CardContent>
        </Card>
      )}
    </div>
  );
};