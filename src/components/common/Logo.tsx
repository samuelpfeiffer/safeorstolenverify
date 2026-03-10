import React from 'react';
import { Link } from 'react-router-dom';
// Logo served from /public to avoid JS bundle bloat (266KB PNG)
const sosLogo = '/sos-logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  linkTo?: string;
}

const sizeClasses = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-14',
  xl: 'h-20'
};

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = false,
  linkTo = '/'
}) => {
  const sizePixels = { sm: 32, md: 40, lg: 56, xl: 80 };
  const px = sizePixels[size];
  
  const logoImage = (
    <img 
      src={sosLogo} 
      alt="SafeOrStolen Logo" 
      width={px}
      height={px}
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
    />
  );

  const content = showText ? (
    <div className="flex items-center gap-3">
      {logoImage}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground">SafeOrStolen</span>
        <span className="text-xs text-muted-foreground">Verify. Trust. Buy.</span>
      </div>
    </div>
  ) : logoImage;

  if (linkTo) {
    return (
      <Link to={linkTo} className="flex items-center transition-opacity hover:opacity-80">
        {content}
      </Link>
    );
  }

  return <div className="flex items-center">{content}</div>;
};
