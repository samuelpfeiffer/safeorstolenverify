// SSR-safe: every helper returns a neutral value when there is no browser.
const hasWindow = (): boolean => typeof window !== 'undefined';
const hasNavigator = (): boolean => typeof navigator !== 'undefined';

export const mobileDetection = {
  isMobile: (): boolean => {
    if (!hasWindow() || !hasNavigator()) return false;
    return window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  },

  isIOS: (): boolean => {
    if (!hasNavigator()) return false;
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  },

  isAndroid: (): boolean => {
    if (!hasNavigator()) return false;
    return /Android/.test(navigator.userAgent);
  },

  isStandalone: (): boolean => {
    if (!hasWindow()) return false;
    return window.matchMedia('(display-mode: standalone)').matches ||
           (window.navigator as any)?.standalone === true;
  },

  isTouchDevice: (): boolean => {
    if (!hasWindow() || !hasNavigator()) return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  },

  getDeviceType: (): 'mobile' | 'tablet' | 'desktop' => {
    if (!hasWindow()) return 'desktop';
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  },

  getScreenSize: () => {
    if (!hasWindow()) {
      return { width: 0, height: 0, orientation: 'landscape' };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    };
  },

  supportsNotifications: (): boolean => {
    if (!hasWindow() || !hasNavigator()) return false;
    return 'Notification' in window && 'serviceWorker' in navigator;
  },

  supportsCamera: (): boolean => {
    if (!hasNavigator()) return false;
    return 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;
  },

  supportsShare: (): boolean => {
    if (!hasNavigator()) return false;
    return 'share' in navigator;
  },

  getConnectionType: (): string => {
    if (!hasNavigator()) return 'unknown';
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    return connection?.effectiveType || 'unknown';
  }
};
