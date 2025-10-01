import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-sos/90 backdrop-blur-sm z-50 flex items-center justify-center'
    : 'flex items-center justify-center p-4';

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="flex flex-col items-center gap-3">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-sos-orange`} />
        {text && (
          <p className="text-sm text-gray-300">{text}</p>
        )}
      </div>
    </div>
  );
};

// Skeleton loader for content
export const SkeletonLoader: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`bg-gray-600 rounded ${className}`} />
);

// Card skeleton
export const CardSkeleton: React.FC = () => (
  <div className="bg-sos-dark/50 border border-sos-orange/20 rounded-lg p-6 space-y-4">
    <SkeletonLoader className="h-6 w-3/4" />
    <SkeletonLoader className="h-4 w-full" />
    <SkeletonLoader className="h-4 w-2/3" />
    <SkeletonLoader className="h-10 w-32" />
  </div>
);