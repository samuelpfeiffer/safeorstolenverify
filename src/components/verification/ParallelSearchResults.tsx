/**
 * Parallel Search Results Component
 * Real-time display of multi-source verification results
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  HelpCircle, 
  Clock,
  Database,
  Share2,
  Download,
  ExternalLink,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  parallelSearch, 
  SearchResult, 
  SourceResult,
  detectQueryType,
  SOURCE_REGISTRY
} from '@/services/parallelSearchEngine';
import { generateReceipt, downloadReceipt } from '@/services/receiptGenerator';
import { toast } from 'sonner';

interface ParallelSearchResultsProps {
  query: string;
  onSearchComplete?: (result: SearchResult) => void;
}

export const ParallelSearchResults: React.FC<ParallelSearchResultsProps> = ({ 
  query, 
  onSearchComplete 
}) => {
  const [result, setResult] = useState<SearchResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sources, setSources] = useState<SourceResult[]>([]);
  const [progress, setProgress] = useState(0);

  const queryType = detectQueryType(query);
  const relevantSources = SOURCE_REGISTRY.filter(
    s => s.queryTypes.includes(queryType) || s.queryTypes.includes('serial')
  );
  const totalSources = relevantSources.length;

  const performSearch = useCallback(async () => {
    if (!query) return;
    
    setIsSearching(true);
    setError(null);
    setSources([]);
    setProgress(0);
    setResult(null);
    
    try {
      const searchResult = await parallelSearch(query, (sourceResult) => {
        // Update sources as they complete
        setSources(prev => {
          const updated = [...prev, sourceResult];
          setProgress((updated.length / totalSources) * 100);
          return updated;
        });
      });
      
      setResult(searchResult);
      onSearchComplete?.(searchResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setIsSearching(false);
    }
  }, [query, totalSources, onSearchComplete]);

  useEffect(() => {
    if (query) {
      performSearch();
    }
  }, [query, performSearch]);

  const handleShare = async () => {
    if (!result) return;
    
    const shareUrl = `${window.location.origin}/verify/${result.searchId}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Verification link copied to clipboard!');
    } catch {
      toast.error('Failed to copy link');
    }
  };

  const handleDownloadReceipt = async () => {
    if (!result) return;
    
    try {
      toast.loading('Generating receipt...');
      await downloadReceipt(result);
      toast.dismiss();
      toast.success('Receipt downloaded!');
    } catch (err) {
      toast.dismiss();
      toast.error('Failed to generate receipt');
    }
  };

  if (isSearching && sources.length === 0) {
    return <SearchingAnimation totalSources={totalSources} />;
  }

  if (isSearching) {
    return (
      <div className="space-y-6">
        <SearchProgressCard 
          sources={sources} 
          totalSources={totalSources} 
          progress={progress}
        />
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay message={error} onRetry={performSearch} />;
  }

  if (!result) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Overall Status Banner */}
      <StatusBanner 
        status={result.overallStatus} 
        confidence={result.overallConfidence}
        confidenceScore={result.confidenceScore}
      />
      
      {/* Item Details Card (if available) */}
      {result.itemDetails && (
        <ItemDetailsCard details={result.itemDetails} />
      )}
      
      {/* Search Stats */}
      <SearchStats 
        totalTime={result.totalTimeMs}
        sourcesChecked={result.sourcesChecked}
        sourcesWithResults={result.sourcesWithResults}
      />
      
      {/* Sources Breakdown */}
      <SourcesBreakdown sources={result.sources} />
      
      {/* Recommendations */}
      <Recommendations items={result.recommendations} status={result.overallStatus} />
      
      {/* Actions */}
      <ResultActions 
        result={result} 
        onShare={handleShare}
        onDownload={handleDownloadReceipt}
      />
    </div>
  );
};

// Status Banner Component
function StatusBanner({ 
  status, 
  confidence, 
  confidenceScore 
}: { 
  status: string; 
  confidence: string;
  confidenceScore: number;
}) {
  const statusConfig = {
    stolen: {
      bg: 'bg-destructive',
      border: 'border-destructive',
      icon: '🚨',
      title: 'STOLEN',
      subtitle: 'This item has been reported stolen',
      textColor: 'text-destructive-foreground',
    },
    safe: {
      bg: 'bg-green-600',
      border: 'border-green-600',
      icon: '✅',
      title: 'SAFE',
      subtitle: 'No stolen reports found',
      textColor: 'text-white',
    },
    check_details: {
      bg: 'bg-yellow-500',
      border: 'border-yellow-500',
      icon: '⚠️',
      title: 'CHECK DETAILS',
      subtitle: 'Flagged by one source - verify carefully',
      textColor: 'text-black',
    },
    unknown: {
      bg: 'bg-muted',
      border: 'border-muted',
      icon: '❓',
      title: 'NOT FOUND',
      subtitle: 'Item not in our databases',
      textColor: 'text-muted-foreground',
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.unknown;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`border-2 ${config.border} overflow-hidden`}>
        <div className={`${config.bg} p-8 text-center`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="text-5xl mb-4"
          >
            {config.icon}
          </motion.div>
          <h2 className={`text-3xl font-bold ${config.textColor}`}>
            {config.title}
          </h2>
          <p className={`mt-2 ${config.textColor} opacity-90`}>
            {config.subtitle}
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Confidence: {confidenceScore}%
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// Item Details Card
function ItemDetailsCard({ details }: { details: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Item Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6">
            {details.imageUrl && (
              <img 
                src={details.imageUrl} 
                alt={details.type || 'Item'} 
                className="w-32 h-32 object-cover rounded-lg"
              />
            )}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {details.type && (
                <div>
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-medium">{details.type}</p>
                </div>
              )}
              {details.manufacturer && (
                <div>
                  <p className="text-sm text-muted-foreground">Manufacturer</p>
                  <p className="font-medium">{details.manufacturer}</p>
                </div>
              )}
              {details.model && (
                <div>
                  <p className="text-sm text-muted-foreground">Model</p>
                  <p className="font-medium">{details.model}</p>
                </div>
              )}
              {details.year && (
                <div>
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="font-medium">{details.year}</p>
                </div>
              )}
              {details.color && (
                <div>
                  <p className="text-sm text-muted-foreground">Color</p>
                  <p className="font-medium">{details.color}</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Search Stats
function SearchStats({ 
  totalTime, 
  sourcesChecked, 
  sourcesWithResults 
}: { 
  totalTime: number; 
  sourcesChecked: number;
  sourcesWithResults: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center p-4">
          <Database className="h-6 w-6 mx-auto text-primary mb-2" />
          <p className="text-2xl font-bold">{sourcesChecked}</p>
          <p className="text-sm text-muted-foreground">Sources Checked</p>
        </Card>
        <Card className="text-center p-4">
          <CheckCircle className="h-6 w-6 mx-auto text-green-500 mb-2" />
          <p className="text-2xl font-bold">{sourcesWithResults}</p>
          <p className="text-sm text-muted-foreground">Sources With Data</p>
        </Card>
        <Card className="text-center p-4">
          <Clock className="h-6 w-6 mx-auto text-blue-500 mb-2" />
          <p className="text-2xl font-bold">{(totalTime / 1000).toFixed(1)}s</p>
          <p className="text-sm text-muted-foreground">Search Time</p>
        </Card>
      </div>
    </motion.div>
  );
}

// Sources Breakdown
function SourcesBreakdown({ sources }: { sources: SourceResult[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Database className="h-5 w-5" />
            Sources Checked
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {sources.map((source, index) => (
            <SourceRow key={source.sourceId} source={source} index={index} />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SourceRow({ source, index }: { source: SourceResult; index: number }) {
  const statusColors = {
    found: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    not_found: 'bg-muted text-muted-foreground',
    error: 'bg-destructive/10 text-destructive',
    timeout: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    searching: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  };

  const stolenBadge = source.stolenStatus === 'stolen' 
    ? 'bg-destructive text-destructive-foreground' 
    : source.stolenStatus === 'safe' 
    ? 'bg-green-600 text-white'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{source.sourceIcon}</span>
        <div>
          <p className="font-medium">{source.sourceName}</p>
          <p className="text-xs text-muted-foreground">{source.responseTimeMs}ms</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge className={statusColors[source.status]}>
          {source.status === 'found' ? 'Found' : 
           source.status === 'not_found' ? 'Not Found' :
           source.status === 'error' ? 'Error' :
           source.status === 'timeout' ? 'Timeout' : 'Searching'}
        </Badge>
        {stolenBadge && (
          <Badge className={stolenBadge}>
            {source.stolenStatus === 'stolen' ? 'STOLEN' : 'SAFE'}
          </Badge>
        )}
        {source.detailsUrl && (
          <Button variant="ghost" size="icon" asChild>
            <a href={source.detailsUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}

// Recommendations
function Recommendations({ items, status }: { items: string[]; status: string }) {
  const borderColor = status === 'stolen' ? 'border-destructive' :
                      status === 'safe' ? 'border-green-500' :
                      'border-yellow-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <Card className={`border-2 ${borderColor}`}>
        <CardHeader>
          <CardTitle className="text-lg">Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-muted-foreground">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Result Actions
function ResultActions({ 
  result, 
  onShare, 
  onDownload 
}: { 
  result: SearchResult;
  onShare: () => void;
  onDownload: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="flex flex-wrap gap-3 justify-center"
    >
      <Button variant="outline" onClick={onShare}>
        <Share2 className="h-4 w-4 mr-2" />
        Share Results
      </Button>
      <Button variant="outline" onClick={onDownload}>
        <Download className="h-4 w-4 mr-2" />
        Download Receipt
      </Button>
      {result.overallStatus === 'unknown' && (
        <Button asChild>
          <a href={`/report?query=${result.query}`}>
            <Shield className="h-4 w-4 mr-2" />
            Report Stolen Item
          </a>
        </Button>
      )}
    </motion.div>
  );
}

// Search Progress Card
function SearchProgressCard({ 
  sources, 
  totalSources,
  progress 
}: { 
  sources: SourceResult[];
  totalSources: number;
  progress: number;
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary mb-4" />
          <h3 className="text-xl font-semibold">Searching {totalSources} Databases</h3>
          <p className="text-muted-foreground">Results streaming in real-time...</p>
        </div>
        
        <Progress value={progress} className="h-2 mb-4" />
        <p className="text-center text-sm text-muted-foreground mb-6">
          {sources.length} of {totalSources} complete
        </p>
        
        <div className="space-y-2">
          {sources.map((source) => (
            <div 
              key={source.sourceId}
              className="flex items-center justify-between p-2 rounded bg-muted/50"
            >
              <div className="flex items-center gap-2">
                <span>{source.sourceIcon}</span>
                <span className="text-sm font-medium">{source.sourceName}</span>
              </div>
              <Badge variant={source.status === 'found' ? 'default' : 'secondary'}>
                {source.status === 'found' 
                  ? (source.stolenStatus === 'stolen' ? '🚨 STOLEN' : '✓ Clear')
                  : source.status === 'not_found' 
                  ? 'Not Found'
                  : source.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Searching Animation
function SearchingAnimation({ totalSources }: { totalSources: number }) {
  const icons = ['🛡️', '📱', '🚗', '🚲', '🏛️', '📋', '👥'];
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="pt-12 pb-12 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <Loader2 className="h-16 w-16 text-primary mx-auto" />
        </motion.div>
        <h3 className="text-2xl font-bold mt-6">Searching {totalSources}+ Databases</h3>
        <p className="text-muted-foreground mt-2">This usually takes 2-3 seconds...</p>
        
        <div className="flex justify-center gap-3 mt-8">
          {icons.slice(0, totalSources).map((icon, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="text-2xl"
            >
              {icon}
            </motion.span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Error Display
function ErrorDisplay({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <Card className="border-destructive">
      <CardContent className="pt-6 text-center">
        <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
        <h3 className="text-xl font-semibold">Search Failed</h3>
        <p className="text-muted-foreground mt-2">{message}</p>
        <Button onClick={onRetry} className="mt-6">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </CardContent>
    </Card>
  );
}

export default ParallelSearchResults;
