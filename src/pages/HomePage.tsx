import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import Hero from '@/components/Hero';

const HomePage = () => {
  const { user, loading } = useAuthState();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Safe or Stolen</h1>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">Welcome, {user.email}</span>
                <Button asChild variant="default">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/auth?tab=signup">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Component */}
      <Hero />
    </div>
  );
};

export default HomePage;