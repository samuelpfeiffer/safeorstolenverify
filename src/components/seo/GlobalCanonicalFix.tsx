import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export const GlobalCanonicalFix: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Force redirect www to non-www at JavaScript level
    if (window.location.hostname === 'www.safeorstolen.com') {
      const newUrl = window.location.href.replace('www.safeorstolen.com', 'safeorstolen.com');
      window.location.replace(newUrl);
    }
  }, []);

  // Generate clean canonical URL
  const getCanonicalUrl = (path: string): string => {
    const cleanPath = path === '/' ? '/' : path.replace(/\/+$/, '');
    return `https://safeorstolen.com${cleanPath}`;
  };

  const canonicalUrl = getCanonicalUrl(location.pathname);

  return (
    <Helmet>
      {/* Force canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      {/* Prevent www indexing */}
      <meta name="robots" content="index, follow" />
      {/* Help Google understand preferred domain */}
      <link rel="alternate" href={canonicalUrl} />
    </Helmet>
  );
};