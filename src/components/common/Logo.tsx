import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  linkTo?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-14 w-14',
  xl: 'h-20 w-20'
};

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = false,
  linkTo = '/'
}) => {
  const logoImage = (
    <div className={`${sizeClasses[size]} flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-lg ${className}`}>
      <Shield className="h-full w-full p-1.5 text-primary-foreground" />
    </div>
  );

  const content = showText ? (
    <div className="flex items-center gap-3">
      {logoImage}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white">SafeOrStolen</span>
        <span className="text-xs text-sos-lime">Verify. Trust. Buy.</span>
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
