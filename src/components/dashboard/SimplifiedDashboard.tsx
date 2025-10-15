import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VerificationSection } from './VerificationSection';

interface SimplifiedDashboardProps {
  userName: string;
  searchCount: number;
  isSubscribed: boolean;
  searchHistory: any[];
  onSignOut: () => void;
}

export const SimplifiedDashboard: React.FC<SimplifiedDashboardProps> = ({
  userName,
  searchCount,
  isSubscribed,
  searchHistory,
  onSignOut
}) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Welcome Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Welcome, {userName}
          </h1>
          <div className="text-sm text-muted-foreground mb-4">
            {isSubscribed ? (
              <span className="text-primary font-medium">✓ Premium Account</span>
            ) : (
              <span>
                {searchCount}/4 free searches used • 
                <Link to="/pricing" className="text-primary hover:underline ml-1">
                  Upgrade
                </Link>
              </span>
            )}
          </div>
        </div>

        {/* Main Verification Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Verify Item</CardTitle>
          </CardHeader>
          <CardContent>
            <VerificationSection />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
            <div className="flex items-center gap-3">
              <History className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold">Recent Searches</h3>
                <p className="text-sm text-muted-foreground">
                  {searchHistory.length} verification{searchHistory.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold">Account Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your profile
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Simple Footer Actions */}
        <div className="text-center">
          <Button variant="outline" onClick={onSignOut} size="sm">
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};
