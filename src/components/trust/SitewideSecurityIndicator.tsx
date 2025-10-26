import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const SitewideSecurityIndicator: React.FC = () => {
  return (
    <Link 
      to="/trust-verification" 
      className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
    >
      <Badge variant="outline" className="border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-500/10">
        <Shield className="h-3 w-3 mr-1" />
        Verified Secure
      </Badge>
      <Badge variant="outline" className="border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10">
        <Lock className="h-3 w-3 mr-1" />
        256-bit SSL
      </Badge>
    </Link>
  );
};
