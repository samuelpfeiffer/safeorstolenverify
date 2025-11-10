/**
 * Display component for parallel verification results
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, AlertTriangle, Clock, ExternalLink } from 'lucide-react';
import type { AggregatedResult, ProviderResult } from '@/services/VerificationService';

interface Props {
  result: AggregatedResult;
}

export const ParallelVerificationDisplay = ({ result }: Props) => {
  const getRiskColor = () => {
    switch (result.riskLevel) {
      case 'critical': return 'text-destructive bg-destructive/10 border-destructive';
      case 'high': return 'text-orange-600 bg-orange-100 border-orange-600';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-600';
      case 'low': return 'text-green-600 bg-green-100 border-green-600';
    }
  };

  const getStatusIcon = (status: ProviderResult['status']) => {
    switch (status) {
      case 'safe': return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'stolen': return <XCircle className="w-4 h-4 text-destructive" />;
      case 'lost': return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      case 'unknown': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'error': return <XCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Result Card */}
      <Card className={`border-2 ${getRiskColor()}`}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Verification Result</span>
            <Badge variant="outline" className={getRiskColor()}>
              {result.riskLevel.toUpperCase()} RISK
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg font-semibold">
            {result.message}
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Status:</span>
              <span className="ml-2 font-medium uppercase">{result.finalStatus}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Confidence:</span>
              <span className="ml-2 font-medium">{result.confidence.toFixed(0)}%</span>
            </div>
            <div className="col-span-2">
              <span className="text-muted-foreground">Sources Checked:</span>
              <span className="ml-2 font-medium">{result.checkedSources.length}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Provider Results */}
      <Card>
        <CardHeader>
          <CardTitle>Database Check Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {result.providers.map((provider, index) => (
              <div
                key={index}
                className="flex items-start justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
              >
                <div className="flex items-start gap-3 flex-1">
                  {getStatusIcon(provider.status)}
                  <div className="flex-1">
                    <div className="font-medium capitalize">
                      {provider.provider.replace(/-/g, ' ')}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {provider.message}
                    </div>
                    {provider.url && (
                      <a
                        href={provider.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                      >
                        Manual check required <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {provider.responseTime}ms
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timestamp */}
      <div className="text-xs text-muted-foreground text-center">
        Verified at {new Date(result.timestamp).toLocaleString()}
      </div>
    </div>
  );
};
