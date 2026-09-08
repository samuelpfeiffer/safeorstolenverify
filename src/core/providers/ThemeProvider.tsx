import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always start at 'dark' so SSR and first client render agree; the stored
  // preference is applied after hydration in the effect below.
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored) setTheme(stored);
    } catch {
      /* storage unavailable */
    }
  }, []);


  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window?.document?.documentElement;
    
    // Safety check: Ensure DOM is ready and classList exists
    if (!root || !root.classList) {
      console.warn('[ThemeProvider] DOM not ready, deferring theme application');
      return;
    }
    
    try {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const activeTheme = theme === 'system' ? systemTheme : theme;
      setResolvedTheme(activeTheme);
      
      root.classList.remove('light', 'dark');
      root.classList.add(activeTheme);
      
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('[ThemeProvider] Error applying theme:', error);
    }
  }, [theme]);

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