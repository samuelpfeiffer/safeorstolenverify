/**
 * Aggregated Results Component
 * Multi-source verification results display
 */

import React from 'react';
import { 
 Shield, 
 AlertTriangle, 
 CheckCircle, 
 HelpCircle, 
 ExternalLink,
 Clock,
 Database,
 Share2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
 SearchResults, 
 formatStatus, 
 getRecommendedAction,
 getQueryTypeName 
} from '@/services/aggregatedSearchService';
import { BikeIndexResults } from './BikeIndexResults';

interface AggregatedResultsProps {
 result: SearchResults;
 onShare?: () => void;
 onReport?: () => void;
}

export const AggregatedResults: React.FC<AggregatedResultsProps> = ({ 
 result, 
 onShare,
 onReport 
}) => {
 const status = formatStatus(result.overallStatus);
 const recommendedAction = getRecommendedAction(result.overallStatus);
 
 const StatusIcon = {
 green: CheckCircle,
 red: AlertTriangle,
 yellow: HelpCircle,
 gray: HelpCircle,
 }[status.color];

 const statusColors = {
 green: 'bg-green-500 text-white',
 red: 'bg-destructive text-destructive-foreground',
 yellow: 'bg-yellow-500 text-black',
 gray: 'bg-muted text-muted-foreground',
 };

 return (
 <div className="space-y-6">
 {/* Main Status Card */}
 <Card className={`border-2 ${
 status.color === 'green' ? 'border-green-500' :
 status.color === 'red' ? 'border-destructive' :
 status.color === 'yellow' ? 'border-yellow-500' :
 'border-muted'
 }`}>
 <CardContent className="pt-6">
 <div className="text-center">
 {/* Large Status Badge */}
 <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl ${statusColors[status.color]}`}>
 <StatusIcon className="h-8 w-8" />
 <span className="text-3xl font-bold">{status.label}</span>
 </div>
 
 {/* Query Info */}
 <div className="mt-4 text-muted-foreground">
 <p className="text-sm">
 {getQueryTypeName(result.queryType)}:{' '}
 <code className="bg-muted px-2 py-1 rounded-[0.25rem] font-mono">
 {result.query}
 </code>
 </p>
 </div>
 
 {/* Recommended Action */}
 <p className={`mt-4 font-medium ${
 status.color === 'red' ? 'text-destructive' :
 status.color === 'green' ? 'text-green-600' :
 'text-foreground'
 }`}>
 {recommendedAction}
 </p>
 
 {/* Search Stats */}
 <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
 <span className="flex items-center gap-1">
 <Database className="h-4 w-4" />
 {result.results.length} source{result.results.length !== 1 ? 's' : ''} checked
 </span>
 <span className="flex items-center gap-1">
 <Clock className="h-4 w-4" />
 {(result.searchDuration / 1000).toFixed(1)}s
 </span>
 </div>
 
 {/* Action Buttons */}
 <div className="flex justify-center gap-3 mt-6">
 {onShare && (
 <Button variant="outline" onClick={onShare}>
 <Share2 className="h-4 w-4 mr-2" />
 Share Result
 </Button>
 )}
 {result.overallStatus === 'unknown' && onReport && (
 <Button variant="default" onClick={onReport}>
 <Shield className="h-4 w-4 mr-2" />
 Report This Item
 </Button>
 )}
 </div>
 </div>
 </CardContent>
 </Card>
 
 {/* Sources Breakdown */}
 <Card>
 <CardHeader>
 <CardTitle className="text-lg flex items-center gap-2">
 <Database className="h-5 w-5" />
 Sources Searched
 </CardTitle>
 </CardHeader>
 <CardContent className="space-y-3">
 {result.results.map((source, index) => (
 <div 
 key={index}
 className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
 >
 <div className="flex items-center gap-3">
 {source.stolen ? (
 <AlertTriangle className="h-5 w-5 text-destructive" />
 ) : source.found ? (
 <CheckCircle className="h-5 w-5 text-green-500" />
 ) : (
 <HelpCircle className="h-5 w-5 text-muted-foreground" />
 )}
 <div>
 <p className="font-medium">{source.source}</p>
 <p className="text-sm text-muted-foreground">
 {source.found 
 ? (source.stolen ? 'STOLEN record found' : 'Record found - CLEAN')
 : 'No records found'
 }
 </p>
 </div>
 </div>
 <div className="flex items-center gap-2">
 <Badge variant={
 source.confidence === 'high' ? 'default' :
 source.confidence === 'medium' ? 'secondary' : 'outline'
 }>
 {source.confidence} confidence
 </Badge>
 {source.sourceUrl && (
 <Button variant="ghost" size="icon" asChild>
 <a href={source.sourceUrl} target="_blank" rel="noopener noreferrer">
 <ExternalLink className="h-4 w-4" />
 </a>
 </Button>
 )}
 </div>
 </div>
 ))}
 
 {result.results.length === 0 && (
 <p className="text-center text-muted-foreground py-4">
 No sources were able to be searched. Please try again.
 </p>
 )}
 </CardContent>
 </Card>
 
 {/* stolen bicycle databases Specific Results */}
 {result.bikeIndexResults && result.bikeIndexResults.length > 0 && (
 <BikeIndexResults results={result.bikeIndexResults} />
 )}
 </div>
 );
};

export default AggregatedResults;
