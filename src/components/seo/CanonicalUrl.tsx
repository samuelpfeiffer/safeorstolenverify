import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CanonicalUrlProps {
  url: string;
}

export const CanonicalUrl: React.FC<CanonicalUrlProps> = ({ url }) => {
  // Ensure URL is absolute and properly formatted
  const canonicalUrl = url.startsWith('http') 
    ? url 
    : `https://safeorstolen.com${url.startsWith('/') ? url : `/${url}`}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};