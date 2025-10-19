import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/common/Logo';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  showBackButton?: boolean;
  className?: string;
}

export const PageLayout = ({ 
  children, 
  title, 
  description, 
  showBackButton = true,
  className = ""
}: PageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        {showBackButton && (
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
          </div>
        )}

        {/* Page Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          {description && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Page Content */}
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
};