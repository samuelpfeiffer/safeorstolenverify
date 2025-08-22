import React, { createContext, useContext } from 'react';

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
    if (process.env.NODE_ENV === 'development') {
      console.log('SEO Update:', data);
    }
  };

  return (
    <SEOContext.Provider value={{ updateSEO }}>
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