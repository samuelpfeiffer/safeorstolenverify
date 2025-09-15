import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ComponentFallbackProps {
  name: string;
  error?: string;
}

export const ComponentFallback: React.FC<ComponentFallbackProps> = ({ 
  name, 
  error 
}) => {
  return (
    <div className="p-4 text-center bg-sos-dark/20 border border-sos-orange/20 rounded-lg">
      <AlertTriangle className="h-6 w-6 mx-auto text-sos-orange mb-2" />
      <p className="text-sm text-gray-400">
        {name} component temporarily unavailable
      </p>
      {error && (
        <p className="text-xs text-gray-500 mt-1">{error}</p>
      )}
    </div>
  );
};