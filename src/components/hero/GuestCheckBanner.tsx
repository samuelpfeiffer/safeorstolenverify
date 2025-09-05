import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GuestCheckBannerProps {
  remainingSearches: number;
}

export const GuestCheckBanner: React.FC<GuestCheckBannerProps> = ({ remainingSearches }) => {
  const navigate = useNavigate();

  if (remainingSearches === 0) return null;

  return (
    <Card className="bg-gradient-to-r from-sos-lime/10 to-sos-orange/10 border-sos-lime/30 p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-sos-lime" />
            <Badge variant="secondary" className="bg-sos-lime/20 text-sos-lime border-sos-lime/30">
              Guest Mode
            </Badge>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Zap className="h-4 w-4 text-sos-orange" />
              <span className="font-medium">{remainingSearches} free checks remaining</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">No signup required</span>
            </div>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate('/auth?tab=signup')}
          className="border-sos-lime/50 hover:bg-sos-lime/10"
        >
          Sign Up for More
        </Button>
      </div>
      <div className="sm:hidden mt-2 space-y-1 text-sm">
        <div className="flex items-center gap-1">
          <Zap className="h-4 w-4 text-sos-orange" />
          <span className="font-medium">{remainingSearches} free checks remaining</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">No signup required</span>
        </div>
      </div>
    </Card>
  );
};