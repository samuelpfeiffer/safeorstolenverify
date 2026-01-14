/**
 * BikeIndex Results Display Component
 * Shows bicycle search results from BikeIndex.org
 */

import React from 'react';
import { ExternalLink, AlertTriangle, CheckCircle, Bike } from 'lucide-react';
import { BikeIndexResult, formatBikeResult } from '@/services/bikeIndexService';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BikeIndexResultsProps {
  results: BikeIndexResult[];
  isLoading?: boolean;
}

export const BikeIndexResults: React.FC<BikeIndexResultsProps> = ({ 
  results, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <Card className="mt-6 border-muted">
        <CardContent className="py-8">
          <div className="flex items-center justify-center gap-3">
            <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
            <span className="text-muted-foreground">Searching BikeIndex...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (results.length === 0) {
    return null;
  }

  const hasStolenBikes = results.some(bike => bike.stolen);

  return (
    <Card className={`mt-6 ${hasStolenBikes ? 'border-destructive' : 'border-green-500'}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Bike className="h-5 w-5" />
          BikeIndex Results
          <Badge variant={hasStolenBikes ? 'destructive' : 'default'} className="ml-auto">
            {results.length} match{results.length !== 1 ? 'es' : ''} found
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {results.map((bike) => {
          const formatted = formatBikeResult(bike);
          return (
            <div 
              key={bike.id} 
              className={`p-4 rounded-lg border ${
                bike.stolen 
                  ? 'border-destructive bg-destructive/5' 
                  : 'border-green-500/30 bg-green-500/5'
              }`}
            >
              <div className="flex gap-4">
                {/* Bike Image */}
                {formatted.imageUrl && (
                  <div className="flex-shrink-0">
                    <img 
                      src={formatted.imageUrl} 
                      alt={formatted.title}
                      className="w-24 h-24 object-cover rounded-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                
                {/* Bike Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-foreground truncate">
                      {formatted.title}
                    </h4>
                    {bike.stolen ? (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        STOLEN
                      </Badge>
                    ) : (
                      <Badge variant="default" className="flex items-center gap-1 bg-green-600">
                        <CheckCircle className="h-3 w-3" />
                        Registered
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-1">
                    {formatted.description}
                  </p>
                  
                  {bike.serial && (
                    <p className="text-sm mt-1">
                      <span className="text-muted-foreground">Serial:</span>{' '}
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        {bike.serial}
                      </code>
                    </p>
                  )}
                  
                  {bike.frame_colors && bike.frame_colors.length > 0 && (
                    <p className="text-sm mt-1">
                      <span className="text-muted-foreground">Colors:</span>{' '}
                      {bike.frame_colors.join(', ')}
                    </p>
                  )}
                  
                  {bike.stolen && formatted.stolenLocation && (
                    <p className="text-sm mt-1 text-destructive">
                      <span className="font-medium">Stolen from:</span>{' '}
                      {formatted.stolenLocation}
                      {formatted.stolenDate && ` on ${formatted.stolenDate}`}
                    </p>
                  )}
                  
                  <Button
                    variant="link"
                    size="sm"
                    className="px-0 mt-2 h-auto"
                    asChild
                  >
                    <a 
                      href={formatted.detailUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      View on BikeIndex
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Attribution */}
        <p className="text-xs text-muted-foreground text-center pt-2 border-t">
          Bicycle data powered by{' '}
          <a 
            href="https://bikeindex.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            BikeIndex.org
          </a>
          {' '}— the world's largest open-source bike registry
        </p>
      </CardContent>
    </Card>
  );
};

export default BikeIndexResults;
