import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AIExecutiveDashboard } from '@/components/ai/AIExecutiveDashboard';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Navigate } from 'react-router-dom';

const AIExecutivePage: React.FC = () => {
  const { isAuthenticated, loading } = useUnifiedAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth?tab=signin" replace />;
  }

  return (
    <>
      <Helmet>
        <title>AI Executive Team - Safe or Stolen</title>
        <meta name="description" content="Autonomous AI-powered executive team making strategic business decisions 24/7" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 py-8">
          <AIExecutiveDashboard />
        </div>
      </div>
    </>
  );
};

export default AIExecutivePage;
