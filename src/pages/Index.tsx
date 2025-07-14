import React from 'react';
import { Link } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

const Index = () => {
  const { isAuthenticated, user } = useUnifiedAuth();

  return (
    <div className="min-h-screen bg-sos text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Safe or Stolen
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Verify the authenticity of second-hand items
          </p>
          
          {!isAuthenticated ? (
            <div className="space-x-4">
              <Link 
                to="/auth" 
                className="bg-sos-orange hover:bg-sos-orange/90 text-white px-6 py-3 rounded-lg inline-block"
              >
                Sign In
              </Link>
              <Link 
                to="/auth?tab=register" 
                className="border border-sos-orange text-sos-orange hover:bg-sos-orange hover:text-white px-6 py-3 rounded-lg inline-block"
              >
                Get Started
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-green-400">Welcome back, {user?.email}!</p>
              <div className="space-x-4">
                <Link 
                  to="/verify" 
                  className="bg-sos-orange hover:bg-sos-orange/90 text-white px-6 py-3 rounded-lg inline-block"
                >
                  Verify Item
                </Link>
                <Link 
                  to="/dashboard" 
                  className="border border-sos-orange text-sos-orange hover:bg-sos-orange hover:text-white px-6 py-3 rounded-lg inline-block"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;