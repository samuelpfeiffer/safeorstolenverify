import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Enterprise Application Loading Screen
 * Displays during app initialization and route transitions
 */
export const AppLoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-sos flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Logo */}
        <div className="relative">
          <img 
            src="/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png" 
            alt="Safe or Stolen" 
            className="h-20 w-20 mx-auto"
          />
          <div className="absolute -inset-4 bg-sos-orange/20 rounded-full blur-xl"></div>
        </div>
        
        {/* Loading Spinner */}
        <div className="flex items-center justify-center space-x-3">
          <Loader2 className="h-8 w-8 text-sos-orange animate-spin" />
          <span className="text-xl font-medium text-white">Loading Safe or Stolen...</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-sos-orange to-sos-lime h-full"></div>
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Initializing real-time verification engine...
        </p>
      </div>
    </div>
  );
};