// Safe platform detection without importing Capacitor at top level
const isNative = () => {
  try {
    return typeof window !== 'undefined' && 
           'Capacitor' in window && 
           (window as any).Capacitor?.isNativePlatform?.();
  } catch {
    return false;
  }
};

const getPlatformSafe = () => {
  try {
    if (typeof window !== 'undefined' && 'Capacitor' in window) {
      return (window as any).Capacitor?.getPlatform?.() || 'web';
    }
    return 'web';
  } catch {
    return 'web';
  }
};

export const capacitorBridge = {
  // Platform detection
  isNative,
  getPlatform: getPlatformSafe,
  isIOS: () => getPlatformSafe() === 'ios',
  isAndroid: () => getPlatformSafe() === 'android',

  // Camera
  async takePicture(source: 'camera' | 'gallery' = 'camera') {
    if (!isNative()) {
      throw new Error('Camera only available on native platform');
    }
    
    try {
      const { Camera, CameraResultType, CameraSource } = await import('@capacitor/camera');
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: source === 'camera' ? CameraSource.Camera : CameraSource.Photos
      });
      return image.dataUrl;
    } catch (error) {
      console.error('Camera error:', error);
      throw error;
    }
  },

  // Share
  async share(title: string, text: string, url?: string) {
    if (!isNative()) {
      // Web fallback
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title, text, url });
      }
      return;
    }

    try {
      const { Share } = await import('@capacitor/share');
      await Share.share({ title, text, url });
    } catch (error) {
      console.error('Share error:', error);
      throw error;
    }
  },

  // App info
  async getAppInfo() {
    if (!isNative()) {
      return { version: '1.0.0', build: '1' };
    }

    try {
      const { App } = await import('@capacitor/app');
      return await App.getInfo();
    } catch (error) {
      console.error('App info error:', error);
      return null;
    }
  },

  // Status Bar
  async setStatusBarStyle(style: 'light' | 'dark') {
    if (!isNative()) return;

    try {
      const { StatusBar, Style } = await import('@capacitor/status-bar');
      await StatusBar.setStyle({
        style: style === 'light' ? Style.Light : Style.Dark
      });
    } catch (error) {
      console.error('Status bar error:', error);
    }
  },

  async hideStatusBar() {
    if (!isNative()) return;
    try {
      const { StatusBar } = await import('@capacitor/status-bar');
      await StatusBar.hide();
    } catch (error) {
      console.error('Status bar error:', error);
    }
  },

  async showStatusBar() {
    if (!isNative()) return;
    try {
      const { StatusBar } = await import('@capacitor/status-bar');
      await StatusBar.show();
    } catch (error) {
      console.error('Status bar error:', error);
    }
  },

  // Splash Screen
  async hideSplashScreen() {
    if (!isNative()) return;
    try {
      const { SplashScreen } = await import('@capacitor/splash-screen');
      await SplashScreen.hide();
    } catch (error) {
      console.error('Splash screen error:', error);
    }
  },

  // Deep Linking
  setupDeepLinks(callback: (url: string) => void) {
    if (!isNative()) return;

    import('@capacitor/app').then(({ App }) => {
      App.addListener('appUrlOpen', (data: any) => {
        callback(data.url);
      });
    }).catch(err => {
      console.error('Deep link setup error:', err);
    });
  }
};
