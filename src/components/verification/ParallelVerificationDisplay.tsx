/**
 * Display component for parallel verification results
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, AlertTriangle, Clock } from 'lucide-react';
import type { AggregatedResult } from '@/services/VerificationService';
import { SourceCard } from './SourceCard';
import { TrustBadge } from './TrustBadge';
import { DownloadReportButton } from './DownloadReportButton';

interface Props {
  result: AggregatedResult;
}

export const ParallelVerificationDisplay = ({ result }: Props) => {
  const getRiskColor = () => {
    switch (result.riskLevel) {
      case 'critical': return 'text-destructive bg-destructive/10 border-destructive';
      case 'high': return 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950 border-orange-600';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-950 border-yellow-600';
      case 'low': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950 border-green-600';
    }
  };

  const getRiskIcon = () => {
    switch (result.riskLevel) {
      case 'critical': return <XCircle className="w-6 h-6" />;
      case 'high': return <AlertTriangle className="w-6 h-6" />;
      case 'medium': return <AlertTriangle className="w-6 h-6" />;
      case 'low': return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  // Get provider icons based on name
  const getProviderIcon = (providerName: string): string => {
    const name = providerName.toLowerCase();
    if (name.includes('bike')) return '🚴';
    if (name.includes('phone') || name.includes('imei') || name.includes('gsma')) return '📱';
    if (name.includes('vehicle') || name.includes('car') || name.includes('vin')) return '🚗';
    if (name.includes('firearm') || name.includes('gun')) return '🔫';
    if (name.includes('stolen911')) return '🚨';
    if (name.includes('register')) return '🔍';
    if (name.includes('property')) return '🏠';
    if (name.includes('lost')) return '🔎';
    return '🔒';
  };

  const totalSources = result.checkedSources.length;
  const alertSources = result.providers.filter(p => p.status === 'stolen' || p.status === 'lost').length;

  return (
    <div className="space-y-6">
      {/* Trust Badge for Safe Items */}
      {(result.finalStatus === 'safe' || result.riskLevel === 'low') && (
        <TrustBadge
          identifier={result.identifier}
          itemType={result.itemType}
          verificationDate={result.timestamp}
          confidence={result.confidence}
        />
      )}

      {/* Main Result Card */}
      <Card className={`border-2 ${getRiskColor()}`}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {getRiskIcon()}
              <span>Verification Result</span>
            </div>
            <div className="flex items-center gap-2">
              <DownloadReportButton 
                result={result} 
                identifier={result.identifier} 
                itemType={result.itemType}
                variant="outline"
                size="sm"
              />
              <Badge variant="outline" className={getRiskColor()}>
                {result.riskLevel.toUpperCase()} RISK
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg font-semibold">
            {result.message}
          </div>
          
          {alertSources > 0 && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm font-medium text-destructive">
                ⚠️ Found in {alertSources} of {totalSources} database{totalSources !== 1 ? 's' : ''}
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Status:</span>
              <span className="ml-2 font-medium uppercase">{result.finalStatus}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Confidence:</span>
              <span className="ml-2 font-medium">{result.confidence.toFixed(0)}%</span>
            </div>
            <div>
              <span className="text-muted-foreground">Sources Checked:</span>
              <span className="ml-2 font-medium">{totalSources}</span>
            </div>
          </div>

          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Checked: {new Date(result.timestamp).toLocaleString()}
          </div>
        </CardContent>
      </Card>

      {/* Multi-Source Results Grid */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Database Check Results ({totalSources} sources)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result.providers.map((provider, index) => (
            <SourceCard
              key={index}
              title={provider.provider.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              icon={getProviderIcon(provider.provider)}
              result={{
                found: provider.status === 'stolen' || provider.status === 'lost',
                status: provider.status,
                message: provider.message,
                error: provider.status === 'error',
                link: provider.url,
                timestamp: result.timestamp
              }}
              description={`Response time: ${provider.responseTime}ms`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
