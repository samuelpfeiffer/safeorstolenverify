import * as React from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  resolvedTheme: 'dark',
});

export const SimpleThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use a ref to track mounted state to avoid hook call issues
  const mountedRef = React.useRef(false);
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    mountedRef.current = true;
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a simple provider with default values during SSR/initial render
    const defaultValue = {
      theme: 'dark' as Theme,
      setTheme: () => {},
      resolvedTheme: 'dark' as 'dark' | 'light',
    };

    return (
      <ThemeContext.Provider value={defaultValue}>
        {children}
      </ThemeContext.Provider>
    );
  }

  // Only render the full provider after mount
  return <MountedThemeProvider>{children}</MountedThemeProvider>;
};

const MountedThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>('dark');
  const [resolvedTheme, setResolvedTheme] = React.useState<'dark' | 'light'>('dark');

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem('theme') as Theme;
      if (stored) setTheme(stored);
    } catch (e) {
      console.warn('Failed to read theme from localStorage');
    }
  }, []);

  React.useEffect(() => {
    try {
      const root = document.documentElement;
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      
      const activeTheme = theme === 'system' ? systemTheme : theme;
      setResolvedTheme(activeTheme);
      
      root.classList.remove('light', 'dark');
      root.classList.add(activeTheme);
      
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('Failed to apply theme');
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
  return React.useContext(ThemeContext);
};