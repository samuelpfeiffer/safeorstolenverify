import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CanonicalUrlProps {
  url: string;
}

export const CanonicalUrl: React.FC<CanonicalUrlProps> = ({ url }) => {
  // Ensure URL is absolute and properly formatted with non-www version
  let canonicalUrl;
  if (url.startsWith('http')) {
    // Clean query params and hash from full URLs
    canonicalUrl = url
      .replace(/^https?:\/\/www\.safeorstolen\.com/, 'https://safeorstolen.com')
      .split('?')[0]
      .split('#')[0];
  } else {
    // Clean query params and hash from relative URLs
    const cleanPath = url.split('?')[0].split('#')[0];
    canonicalUrl = `https://safeorstolen.com${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`;
  }

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};