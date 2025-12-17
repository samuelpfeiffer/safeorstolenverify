import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Info, 
  Clock, 
  Database, 
  ChevronDown,
  Phone,
  Car,
  Smartphone,
  AlertCircle
} from 'lucide-react';
import { type VerificationResult } from '@/verification/VerificationEngine';
import { cn } from '@/lib/utils';

interface EnhancedResultsCardProps {
  result: VerificationResult;
  onViewDetails?: () => void;
  className?: string;
}

export const EnhancedResultsCard: React.FC<EnhancedResultsCardProps> = ({
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

  const getNextStepsContent = () => {
    switch (result.status) {
      case 'stolen':
        return (
          <div className="space-y-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <h4 className="font-semibold text-destructive">CRITICAL: Item Reported Stolen</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Immediate Actions Required:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>Do not purchase</strong> this item under any circumstances</li>
                <li>If you already possess it, contact your local law enforcement non-emergency line</li>
                <li>Consider reporting suspicious sellers to the marketplace platform</li>
                <li><a href="/faq" className="text-primary hover:underline">Learn more in our FAQ</a></li>
              </ul>
            </div>
          </div>
        );
      case 'lost':
        return (
          <div className="space-y-3 p-4 bg-sos-orange/5 rounded-lg border border-sos-orange/20">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-sos-orange" />
              <h4 className="font-semibold text-sos-orange">HIGH RISK: Item Reported Lost</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Recommended Actions:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>Exercise extreme caution</strong> before purchasing</li>
                <li>Request proof of purchase or ownership from seller</li>
                <li>Verify seller identity and contact information</li>
                <li>Consider alternative options from verified sellers</li>
              </ul>
            </div>
          </div>
        );
      case 'safe':
        return (
          <div className="space-y-3 p-4 bg-sos-lime/5 rounded-lg border border-sos-lime/20">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-sos-lime" />
              <h4 className="font-semibold text-sos-lime">Item Appears Legitimate</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium">What this means:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>No theft reports found in our databases</li>
                <li>Item appears safe to purchase</li>
                <li>Continue with normal due diligence practices</li>
                <li>Verify seller reputation and payment security</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-2">
                <strong>Disclaimer:</strong> A "Clean" result means this item was not found in our databases. 
                It does not guarantee the item is not stolen. Always practice due diligence when buying secondhand.
              </p>
            </div>
          </div>
        );
      case 'unknown':
        return (
          <div className="space-y-3 p-4 bg-muted/5 rounded-lg border border-muted/20">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-muted-foreground" />
              <h4 className="font-semibold">Unable to Verify Status</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Proceed with caution:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Verification inconclusive - gather additional information</li>
                <li>Request proof of purchase from seller</li>
                <li>Verify item details match seller description</li>
                <li>Use secure payment methods with buyer protection</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
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

      <CardContent className="space-y-6">
        {/* Main Result Message */}
        <div className="bg-card/50 p-4 rounded-lg">
          <p className="text-sm font-medium mb-2">Verification Result:</p>
          <p className="text-sm text-muted-foreground">{result.message}</p>
        </div>

        {/* Next Steps */}
        {getNextStepsContent()}

        <Separator />

        {/* Verification Details */}
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

        {/* Data Sources Transparency */}
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <span className="text-sm font-medium">How was this result determined?</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-3">
            <div className="bg-muted/30 p-3 rounded-md">
              <p className="text-sm font-medium mb-2">Databases Checked:</p>
              <div className="flex flex-wrap gap-1">
                {result.sources_checked.map((source, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {source.replace('_', ' ')}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {result.status === 'safe' 
                  ? `No match found in: ${result.sources_checked.join(', ').replace(/_/g, ' ')}`
                  : result.status === 'stolen' || result.status === 'lost'
                  ? `Match found in: ${result.source.replace('_', ' ')}`
                  : 'Verification completed with limited data availability'
                }
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>

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