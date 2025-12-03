import { useEffect } from 'react';

/**
 * Track PWA app installation events for analytics
 */
export const useAppInstallTracking = () => {
  useEffect(() => {
    // Track when app is installed
    const handleAppInstalled = () => {
      console.log('PWA app installed successfully');
      
      // Track with Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'app_install', {
          event_category: 'PWA',
          event_label: 'SafeOrStolen App Installed',
          method: 'pwa',
          value: 1
        });
      }

      // Track with custom analytics
      try {
        const installData = {
          timestamp: new Date().toISOString(),
          source: 'pwa',
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          standalone: window.matchMedia('(display-mode: standalone)').matches
        };
        
        // Store install event locally for later analysis
        const installs = JSON.parse(localStorage.getItem('pwa-installs') || '[]');
        installs.push(installData);
        localStorage.setItem('pwa-installs', JSON.stringify(installs));
        
        console.log('App install tracked:', installData);
      } catch (error) {
        console.error('Error tracking app install:', error);
      }
    };

    // Track when install prompt is shown
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('Install prompt shown');
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'install_prompt_shown', {
          event_category: 'PWA',
          event_label: 'Install Prompt Displayed'
        });
      }
    };

    // Track display mode changes (when user opens installed app)
    const handleDisplayModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        console.log('App opened in standalone mode');
        
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'app_launch', {
            event_category: 'PWA',
            event_label: 'Standalone Mode Launch'
          });
        }
      }
    };

    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    const displayModeQuery = window.matchMedia('(display-mode: standalone)');
    displayModeQuery.addEventListener('change', handleDisplayModeChange);

    // Track if already installed on mount
    if (displayModeQuery.matches) {
      console.log('App running in standalone mode');
    }

    return () => {
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      displayModeQuery.removeEventListener('change', handleDisplayModeChange);
    };
  }, []);
};
