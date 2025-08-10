
import React from 'react';
import { Link } from 'react-router-dom';
import { SafeOrStolenLogo } from '../branding/SafeOrStolenLogo';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo = ({ className = '' }: BrandLogoProps) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 hover:opacity-90 transition-opacity ${className}`}>
      <SafeOrStolenLogo size="md" variant="full" />
    </Link>
  );
};
