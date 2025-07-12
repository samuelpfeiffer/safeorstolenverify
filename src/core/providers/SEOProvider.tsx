import React, { createContext, useContext } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOContextType {
  updateSEO: (data: SEOData) => void;
}

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOContext = createContext<SEOContextType | undefined>(undefined);

export const SEOProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const updateSEO = (data: SEOData) => {
    // SEO updates are handled through individual Helmet components
    console.log('SEO Update:', data);
  };

  return (
    <SEOContext.Provider value={{ updateSEO }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Safe or Stolen - Verify Before You Buy</title>
        <meta name="description" content="Fighting the $13 billion stolen goods crisis with real-time database verification. Protecting millions from unknowingly purchasing stolen items." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Safe or Stolen" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://safeorstolen.com" />
      </Helmet>
      {children}
    </SEOContext.Provider>
  );
};

export const useSEO = () => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error('useSEO must be used within SEOProvider');
  }
  return context;
};