import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CanonicalUrlProps {
  url: string;
}

export const CanonicalUrl: React.FC<CanonicalUrlProps> = ({ url }) => {
  // Ensure URL is absolute and properly formatted with non-www version
  let canonicalUrl;
  if (url.startsWith('http')) {
    canonicalUrl = url.replace(/^https?:\/\/www\.safeorstolen\.com/, 'https://safeorstolen.com');
  } else {
    canonicalUrl = `https://safeorstolen.com${url.startsWith('/') ? url : `/${url}`}`;
  }

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};