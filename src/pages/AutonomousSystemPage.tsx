import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AutonomousSystemDashboard } from '@/components/autonomous/AutonomousSystemDashboard';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Navigate } from 'react-router-dom';

const AutonomousSystemPage: React.FC = () => {
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
        <title>Autonomous AI System - Safe or Stolen</title>
        <meta name="description" content="24/7 autonomous AI system monitoring errors, optimizing SEO, and maintaining peak performance" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Autonomous AI System</h1>
              <p className="text-muted-foreground text-lg">
                Self-healing infrastructure with 24/7 SEO domination
              </p>
            </div>
            
            <AutonomousSystemDashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AutonomousSystemPage;
