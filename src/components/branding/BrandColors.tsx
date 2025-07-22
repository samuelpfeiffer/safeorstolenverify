
import React from 'react';

// Brand color definitions for consistent usage across components
export const brandColors = {
  primary: {
    orange: '#FF5722', // Main brand orange
    lime: '#84CC16',   // Accent lime green
  },
  neutral: {
    dark: '#0F172A',   // Main dark background
    slate: '#1E293B',  // Secondary dark
    gray: '#334155',   // Lighter gray
  },
  gradients: {
    primary: 'from-sos-orange to-sos-lime',
    secondary: 'from-blue-500 to-red-500', // FasterCapital colors
    dark: 'from-sos-dark to-sos',
  },
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  }
} as const;

// Text gradient utility component
interface TextGradientProps {
  children: React.ReactNode;
  gradient?: keyof typeof brandColors.gradients;
  className?: string;
}

export const TextGradient = ({ 
  children, 
  gradient = 'primary', 
  className = '' 
}: TextGradientProps) => {
  return (
    <span className={`bg-gradient-to-r ${brandColors.gradients[gradient]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

// Brand-consistent button styles
export const brandButtonStyles = {
  primary: 'bg-sos-orange hover:bg-sos-orange/90 text-white',
  secondary: 'bg-sos-lime hover:bg-sos-lime/90 text-black',
  outline: 'border-sos-orange text-sos-orange hover:bg-sos-orange/10',
  ghost: 'text-sos-orange hover:bg-sos-orange/10',
} as const;
