import React from 'react';
import fastercapitalLogo from '@/assets/fastercapital-logo.png';

interface FasterCapitalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLink?: boolean;
  showText?: boolean;
}

export const FasterCapitalLogo: React.FC<FasterCapitalLogoProps> = ({
  className = '',
  size = 'md',
  showLink = true,
  showText = false
}) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto', 
    lg: 'h-24 w-auto'
  };

  const logoElement = (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={fastercapitalLogo}
        alt="FasterCapital" 
        className={sizeClasses[size]}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.parentNode) {
            const fallback = document.createElement('span');
            fallback.className = 'text-sos-orange font-semibold';
            fallback.textContent = 'FasterCapital';
            e.currentTarget.parentNode.appendChild(fallback);
          }
        }}
      />
      {showText && (
        <span className="text-sos-orange font-semibold">FasterCapital</span>
      )}
    </div>
  );

  if (showLink) {
    return (
      <a 
        href="https://fastercapital.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        {logoElement}
      </a>
    );
  }

  return logoElement;
};