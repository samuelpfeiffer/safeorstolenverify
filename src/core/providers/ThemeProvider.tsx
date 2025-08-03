import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Safe localStorage access with fallback
const getStoredTheme = (): Theme => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return (localStorage.getItem('theme') as Theme) || 'dark';
    }
  } catch (error) {
    console.warn('localStorage access failed:', error);
  }
  return 'dark';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with safe default, update after mount
  const [theme, setTheme] = useState<Theme>('dark');
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme from storage after mount
  useEffect(() => {
    if (!isInitialized) {
      const storedTheme = getStoredTheme();
      setTheme(storedTheme);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Apply theme changes
  useEffect(() => {
    if (!isInitialized) return;
    
    try {
      const root = window.document.documentElement;
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      
      const activeTheme = theme === 'system' ? systemTheme : theme;
      setResolvedTheme(activeTheme);
      
      root.classList.remove('light', 'dark');
      root.classList.add(activeTheme);
      
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('Theme application failed:', error);
    }
  }, [theme, isInitialized]);

  const value = {
    theme,
    setTheme,
    resolvedTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};