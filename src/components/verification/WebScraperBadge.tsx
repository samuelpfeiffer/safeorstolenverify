import { Globe, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface WebScraperBadgeProps {
  databasesSearched?: number;
  foundMatches?: boolean;
}

export const WebScraperBadge = ({ databasesSearched = 0, foundMatches = false }: WebScraperBadgeProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge 
            variant={foundMatches ? 'destructive' : 'secondary'} 
            className="flex items-center gap-1 cursor-help"
          >
            <Globe className="w-3 h-3" />
            <span className="text-xs">
              Web Search
            </span>
            {databasesSearched > 0 && (
              <span className="ml-1 font-semibold">
                ({databasesSearched})
              </span>
            )}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">Web Scraping Verification</span>
            </div>
            <p className="text-xs">
              Searched {databasesSearched || 'multiple'} stolen item registries across the web
            </p>
            {foundMatches && (
              <p className="text-xs text-destructive font-semibold">
                ⚠️ Potential matches found online
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
