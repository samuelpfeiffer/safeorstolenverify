
import React from 'react';

interface SafeOrStolenLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only';
}

export const SafeOrStolenLogo = ({ 
  className = '', 
  size = 'md', 
  variant = 'full' 
}: SafeOrStolenLogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" 
        alt="Safe or Stolen Logo" 
        className={`${sizeClasses[size]} w-auto object-contain`}
        onError={(e) => {
          // Fallback to text if logo fails to load
          e.currentTarget.style.display = 'none';
          if (variant === 'full') {
            const fallback = document.createElement('span');
            fallback.className = 'font-bold text-sos-orange text-xl';
            fallback.textContent = 'Safe or Stolen';
            e.currentTarget.parentNode?.appendChild(fallback);
          }
        }}
      />
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="font-bold text-white text-lg leading-tight">Safe or Stolen</span>
          <span className="text-sos-lime text-xs font-medium">Verify Before You Buy</span>
        </div>
      )}
    </div>
  );
};
