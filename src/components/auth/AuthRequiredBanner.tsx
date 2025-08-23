import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Shield, UserPlus } from 'lucide-react';

interface AuthRequiredBannerProps {
  feature?: string;
  className?: string;
}

export const AuthRequiredBanner: React.FC<AuthRequiredBannerProps> = ({ 
  feature = "verification features",
  className = ""
}) => {
  return (
    <Alert className={`border-amber-200 bg-amber-50 ${className}`}>
      <Shield className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between">
        <span className="text-amber-800">
          Sign up or sign in to access {feature} and protect yourself from stolen goods.
        </span>
        <div className="flex gap-2 ml-4">
          <Button variant="outline" size="sm" asChild className="border-amber-300 text-amber-800 hover:bg-amber-100">
            <Link to="/auth?tab=signin">
              Sign In
            </Link>
          </Button>
          <Button size="sm" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link to="/auth?tab=signup">
              <UserPlus className="h-4 w-4 mr-2" />
              Get Started Free
            </Link>
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
};