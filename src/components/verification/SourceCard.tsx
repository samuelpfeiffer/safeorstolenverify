import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, XCircle, Loader, ExternalLink, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SourceCardProps {
  title: string;
  icon?: string;
  result?: {
    found?: boolean;
    status?: string;
    message?: string;
    count?: number;
    items?: any[];
    error?: boolean | string;
    loading?: boolean;
    link?: string;
    cached?: boolean;
    timestamp?: string;
  };
  description?: string;
  primary?: boolean;
  className?: string;
}

export const SourceCard: React.FC<SourceCardProps> = ({
  title,
  icon,
  result,
  description,
  primary = false,
  className = ''
}) => {
  // Loading state
  if (result?.loading) {
    return (
      <Card className={`${className} border-muted`}>
        <CardContent className="flex items-center justify-center py-8">
          <div className="flex flex-col items-center gap-2">
            <Loader className="h-6 w-6 animate-spin text-primary" />
            <span className="text-sm text-muted-foreground">Checking {title}...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Error state
  if (result?.error) {
    return (
      <Card className={`${className} border-muted bg-muted/20`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {icon && <span className="text-2xl">{icon}</span>}
              <h3 className="font-semibold text-sm">{title}</h3>
            </div>
            <XCircle className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {typeof result.error === 'string' ? result.error : 'Unable to check at this time'}
          </p>
        </CardContent>
      </Card>
    );
  }

  // Determine status styling
  const isFound = result?.found || result?.status === 'stolen';
  const statusColor = isFound 
    ? 'text-destructive' 
    : 'text-green-600 dark:text-green-400';
  const borderColor = isFound 
    ? 'border-destructive/50' 
    : 'border-green-500/50';
  const bgColor = isFound 
    ? 'bg-destructive/5' 
    : 'bg-green-500/5';

  return (
    <Card className={`${className} ${borderColor} ${bgColor} ${primary ? 'ring-2 ring-primary' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon && <span className="text-2xl">{icon}</span>}
            <div>
              <h3 className="font-semibold text-sm flex items-center gap-2">
                {title}
                {primary && <Badge variant="secondary" className="text-xs">Primary</Badge>}
                {result?.cached && (
                  <span title="Cached result">
                    <Database className="h-3 w-3 text-muted-foreground" />
                  </span>
                )}
              </h3>
              {description && (
                <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
              )}
            </div>
          </div>
          {isFound ? (
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
          ) : (
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <span className={`font-semibold text-sm ${statusColor}`}>
            {isFound ? (
              <>Found {result?.count ? `(${result.count} match${result.count > 1 ? 'es' : ''})` : ''}</>
            ) : (
              'Not found - Clear'
            )}
          </span>
        </div>

        {result?.message && (
          <p className="text-sm text-foreground/80">
            {result.message}
          </p>
        )}

        {result?.items && result.items.length > 0 && (
          <div className="space-y-2 border-t border-border pt-3">
            <p className="text-xs font-semibold text-muted-foreground">Matches:</p>
            {result.items.slice(0, 3).map((item, idx) => (
              <div key={idx} className="text-xs space-y-1 p-2 bg-background/50 rounded-[0.25rem]">
                <p className="font-medium">{item.description || item.title}</p>
                {(item.date || item.reportedDate || item.location) && (
                  <p className="text-muted-foreground">
                    {item.date || item.reportedDate} {item.location && `• ${item.location}`}
                  </p>
                )}
              </div>
            ))}
            {result.items.length > 3 && (
              <p className="text-xs text-muted-foreground">
                +{result.items.length - 3} more result{result.items.length - 3 > 1 ? 's' : ''}
              </p>
            )}
          </div>
        )}

        {result?.link && (
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs"
            onClick={() => window.open(result.link, '_blank')}
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            View on {title}
          </Button>
        )}

        {result?.timestamp && (
          <p className="text-xs text-muted-foreground">
            Checked: {new Date(result.timestamp).toLocaleString()}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
