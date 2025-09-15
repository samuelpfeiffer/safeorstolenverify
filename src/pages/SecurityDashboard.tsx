import React from 'react';
import { SecurityOptimizer } from '@/core/security/SecurityOptimizer';
import { Helmet } from 'react-helmet-async';

const SecurityDashboard: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Security Dashboard - Safe or Stolen</title>
        <meta name="description" content="Enterprise-level security monitoring and optimization dashboard" />
      </Helmet>
      
      <div className="min-h-screen bg-sos text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-sos-orange mb-2">
              Security Command Center
            </h1>
            <p className="text-gray-300">
              Executive-level security monitoring and automated threat response
            </p>
          </div>
          
          <SecurityOptimizer />
        </div>
      </div>
    </>
  );
};

export default SecurityDashboard;