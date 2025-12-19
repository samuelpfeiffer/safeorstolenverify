import { memo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Link2, 
  AlertTriangle, 
  CheckCircle, 
  Loader2, 
  ExternalLink,
  Search,
  ShieldAlert,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMarketplaceUrlAnalyzer } from '@/hooks/useMarketplaceUrlAnalyzer';

interface MarketplaceUrlAnalyzerProps {
  onIdentifierFound?: (identifier: string, type: string) => void;
  className?: string;
}

const MarketplaceUrlAnalyzerComponent = ({ 
  onIdentifierFound,
  className 
}: MarketplaceUrlAnalyzerProps) => {
  const {
    urlInput,
    setUrlInput,
    isAnalyzing,
    analysis,
    analyzeUrl,
    reset,
    isValidMarketplaceUrl,
    detectMarketplaceFromUrl,
    supportedMarketplaces
  } = useMarketplaceUrlAnalyzer();

  const [showSupported, setShowSupported] = useState(false);
  const detectedPlatform = detectMarketplaceFromUrl(urlInput);

  const handleAnalyze = async () => {
    if (!urlInput.trim()) return;
    await analyzeUrl(urlInput.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isAnalyzing && urlInput.trim()) {
      handleAnalyze();
    }
  };

  const handleVerifyIdentifier = (identifier: { value: string; type: string }) => {
    if (onIdentifierFound) {
      onIdentifierFound(identifier.value, identifier.type);
    }
  };

  const getRiskLevel = () => {
    const riskCount = analysis?.riskFactors?.length || 0;
    if (riskCount === 0) return { level: 'low', color: 'text-green-600', bg: 'bg-green-100' };
    if (riskCount <= 2) return { level: 'medium', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { level: 'high', color: 'text-red-600', bg: 'bg-red-100' };
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* URL Input */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Paste marketplace listing URL..."
              disabled={isAnalyzing}
              className="pl-10 h-14 text-base border-2 border-primary/40 focus:border-primary"
            />
            {detectedPlatform && !isAnalyzing && (
              <Badge 
                variant="secondary" 
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary/10 text-primary"
              >
                {detectedPlatform}
              </Badge>
            )}
          </div>
          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !urlInput.trim()}
            className="h-14 px-6 font-semibold"
            size="lg"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="h-5 w-5 mr-2" />
                Analyze
              </>
            )}
          </Button>
        </div>

        {/* Supported Marketplaces Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSupported(!showSupported)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {showSupported ? 'Hide' : 'Show'} supported marketplaces
          </button>
          {showSupported && (
            <div className="flex flex-wrap gap-1">
              {supportedMarketplaces.map(mp => (
                <Badge key={mp.name} variant="outline" className="text-xs">
                  {mp.name}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Analysis Results */}
      {analysis && analysis.success && (
        <Card className="p-4 space-y-4 border-2 border-primary/20">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10">
                {analysis.marketplace?.name}
              </Badge>
              {analysis.aiAnalyzed && (
                <Badge variant="outline" className="text-xs">
                  AI Analyzed
                </Badge>
              )}
            </div>
            <a 
              href={analysis.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
            >
              View Original <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Item Details */}
          {analysis.itemDetails && (
            <div className="space-y-2">
              {(analysis.itemDetails.title || analysis.itemDetails.sourceTitle) && (
                <h4 className="font-semibold text-foreground">
                  {analysis.itemDetails.title || analysis.itemDetails.sourceTitle}
                </h4>
              )}
              {analysis.itemDetails.price && (
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium text-lg">{analysis.itemDetails.price}</span>
                </div>
              )}
              {analysis.itemDetails.seller && (
                <p className="text-sm text-muted-foreground">
                  Seller: {analysis.itemDetails.seller}
                </p>
              )}
            </div>
          )}

          {/* Identifiers Found */}
          {analysis.identifiers && analysis.identifiers.length > 0 && (
            <div className="space-y-2">
              <h5 className="text-sm font-medium text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                Identifiers Found
              </h5>
              <div className="flex flex-wrap gap-2">
                {analysis.identifiers.map((id, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleVerifyIdentifier(id)}
                    className="flex items-center gap-2 border-green-200 hover:border-green-400 hover:bg-green-50"
                  >
                    <Badge variant="secondary" className="text-xs">
                      {id.type}
                    </Badge>
                    <span className="font-mono text-sm">{id.value}</span>
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    Verify
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Risk Factors */}
          {analysis.riskFactors && analysis.riskFactors.length > 0 && (
            <div className="space-y-2">
              <h5 className="text-sm font-medium text-foreground flex items-center gap-2">
                <ShieldAlert className={cn("h-4 w-4", getRiskLevel().color)} />
                Risk Factors ({analysis.riskFactors.length})
              </h5>
              <div className={cn("p-3 rounded-lg", getRiskLevel().bg)}>
                <ul className="space-y-1">
                  {analysis.riskFactors.map((risk, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className={cn("h-4 w-4 mt-0.5 flex-shrink-0", getRiskLevel().color)} />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* No Identifiers Warning */}
          {(!analysis.identifiers || analysis.identifiers.length === 0) && (
            <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">No identifiers found</p>
                  <p className="text-xs text-yellow-700 mt-1">
                    This listing doesn't include visible serial numbers, IMEIs, or VINs. 
                    Ask the seller for the identifier before purchasing.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={reset}>
              Analyze Another
            </Button>
          </div>
        </Card>
      )}

      {/* Error State */}
      {analysis && !analysis.success && (
        <Card className="p-4 border-destructive/50 bg-destructive/5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
            <div>
              <p className="font-medium text-destructive">Analysis Failed</p>
              <p className="text-sm text-muted-foreground mt-1">{analysis.error}</p>
              <Button variant="outline" size="sm" onClick={reset} className="mt-3">
                Try Again
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export const MarketplaceUrlAnalyzer = memo(MarketplaceUrlAnalyzerComponent);
