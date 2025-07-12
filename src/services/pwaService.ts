
export interface PWAInstallPrompt {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Extended interface for ServiceWorkerRegistration with Background Sync
interface ServiceWorkerRegistrationWithSync extends ServiceWorkerRegistration {
  sync?: {
    register: (tag: string) => Promise<void>;
  };
}

export class PWAService {
  private static instance: PWAService;
  private deferredPrompt: PWAInstallPrompt | null = null;
  private isInstalled = false;
  private serviceWorkerRegistration: ServiceWorkerRegistrationWithSync | null = null;

  static getInstance(): PWAService {
    if (!PWAService.instance) {
      PWAService.instance = new PWAService();
    }
    return PWAService.instance;
  }

  constructor() {
    this.init();
  }

  private async init() {
    await this.registerServiceWorker();
    this.setupInstallPrompt();
    this.checkIfInstalled();
    this.setupOfflineDetection();
  }

  // Service Worker Registration
  private async registerServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });
        
        this.serviceWorkerRegistration = registration as ServiceWorkerRegistrationWithSync;
        console.log('PWA: Service Worker registered successfully:', registration);

        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                this.notifyAppUpdate();
              }
            });
          }
        });

      } catch (error) {
        console.error('PWA: Service Worker registration failed:', error);
      }
    }
  }

  // Install Prompt Management
  private setupInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e as unknown as PWAInstallPrompt;
      console.log('PWA: Install prompt available');
      this.dispatchInstallAvailable();
    });

    window.addEventListener('appinstalled', () => {
      console.log('PWA: App installed successfully');
      this.isInstalled = true;
      this.deferredPrompt = null;
      this.dispatchInstallSuccess();
    });
  }

  // Check if app is already installed
  private checkIfInstalled(): void {
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true;
      console.log('PWA: App is running in standalone mode');
    }

    if (window.navigator && 'standalone' in window.navigator && (window.navigator as any).standalone) {
      this.isInstalled = true;
      console.log('PWA: App is running in iOS standalone mode');
    }
  }

  // Public Methods
  public async showInstallPrompt(): Promise<boolean> {
    if (!this.deferredPrompt) {
      console.log('PWA: No install prompt available');
      return false;
    }

    try {
      await this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      
      console.log(`PWA: Install prompt ${outcome}`);
      
      if (outcome === 'accepted') {
        this.deferredPrompt = null;
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('PWA: Error showing install prompt:', error);
      return false;
    }
  }

  public isInstallAvailable(): boolean {
    return !!this.deferredPrompt;
  }

  public isAppInstalled(): boolean {
    return this.isInstalled;
  }

  // Offline Management
  private setupOfflineDetection(): void {
    window.addEventListener('online', () => {
      console.log('PWA: Back online');
      this.dispatchOnlineStatus(true);
      this.syncOfflineData();
    });

    window.addEventListener('offline', () => {
      console.log('PWA: Gone offline');
      this.dispatchOnlineStatus(false);
    });
  }

  public isOnline(): boolean {
    return navigator.onLine;
  }

  // Data Management
  public async cacheVerificationData(serialNumber: string, result: any): Promise<void> {
    if (!this.serviceWorkerRegistration) return;

    try {
      const cache = await caches.open('verification-data');
      const response = new Response(JSON.stringify({
        serialNumber,
        result,
        timestamp: Date.now()
      }));
      
      await cache.put(`/verification/${serialNumber}`, response);
      console.log('PWA: Verification data cached:', serialNumber);
    } catch (error) {
      console.error('PWA: Error caching verification data:', error);
    }
  }

  public async getCachedVerificationData(serialNumber: string): Promise<any | null> {
    try {
      const cache = await caches.open('verification-data');
      const response = await cache.match(`/verification/${serialNumber}`);
      
      if (response) {
        const data = await response.json();
        console.log('PWA: Retrieved cached verification data:', serialNumber);
        return data;
      }
      
      return null;
    } catch (error) {
      console.error('PWA: Error retrieving cached data:', error);
      return null;
    }
  }

  private async syncOfflineData(): Promise<void> {
    if (!this.serviceWorkerRegistration) return;

    try {
      // Check if Background Sync is supported
      if ('sync' in this.serviceWorkerRegistration && this.serviceWorkerRegistration.sync) {
        await this.serviceWorkerRegistration.sync.register('background-verification');
        console.log('PWA: Background sync registered');
      } else {
        console.log('PWA: Background sync not supported, using fallback');
        // Fallback: directly process offline data when back online
        this.processOfflineDataFallback();
      }
    } catch (error) {
      console.error('PWA: Error registering background sync:', error);
      // Fallback to direct processing
      this.processOfflineDataFallback();
    }
  }

  private async processOfflineDataFallback(): Promise<void> {
    try {
      const cache = await caches.open('verification-data');
      const offlineQueue = await cache.match('/offline-queue');
      
      if (offlineQueue) {
        const queueData = await offlineQueue.json();
        console.log('PWA: Processing offline verification queue (fallback):', queueData);
        // Process queue items when back online
      }
    } catch (error) {
      console.error('PWA: Error processing offline data fallback:', error);
    }
  }

  // Event Dispatchers
  private dispatchInstallAvailable(): void {
    window.dispatchEvent(new CustomEvent('pwa-install-available'));
  }

  private dispatchInstallSuccess(): void {
    window.dispatchEvent(new CustomEvent('pwa-install-success'));
  }

  private dispatchOnlineStatus(isOnline: boolean): void {
    window.dispatchEvent(new CustomEvent('pwa-online-status', { 
      detail: { isOnline } 
    }));
  }

  private notifyAppUpdate(): void {
    window.dispatchEvent(new CustomEvent('pwa-update-available'));
  }

  // Performance Monitoring
  public async getPerformanceMetrics(): Promise<any> {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
      };
    }
    
    return null;
  }
}

export const pwaService = PWAService.getInstance();
