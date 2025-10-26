import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Share } from '@capacitor/share';
import { App } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

export const capacitorBridge = {
  // Platform detection
  isNative: () => Capacitor.isNativePlatform(),
  getPlatform: () => Capacitor.getPlatform(),
  isIOS: () => Capacitor.getPlatform() === 'ios',
  isAndroid: () => Capacitor.getPlatform() === 'android',

  // Camera
  async takePicture(source: 'camera' | 'gallery' = 'camera') {
    try {
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
    if (!Capacitor.isNativePlatform()) {
      // Web fallback
      if (navigator.share) {
        await navigator.share({ title, text, url });
      }
      return;
    }

    try {
      await Share.share({ title, text, url });
    } catch (error) {
      console.error('Share error:', error);
      throw error;
    }
  },

  // App info
  async getAppInfo() {
    if (!Capacitor.isNativePlatform()) {
      return { version: '1.0.0', build: '1' };
    }

    try {
      return await App.getInfo();
    } catch (error) {
      console.error('App info error:', error);
      return null;
    }
  },

  // Status Bar
  async setStatusBarStyle(style: 'light' | 'dark') {
    if (!Capacitor.isNativePlatform()) return;

    try {
      await StatusBar.setStyle({
        style: style === 'light' ? Style.Light : Style.Dark
      });
    } catch (error) {
      console.error('Status bar error:', error);
    }
  },

  async hideStatusBar() {
    if (!Capacitor.isNativePlatform()) return;
    try {
      await StatusBar.hide();
    } catch (error) {
      console.error('Status bar error:', error);
    }
  },

  async showStatusBar() {
    if (!Capacitor.isNativePlatform()) return;
    try {
      await StatusBar.show();
    } catch (error) {
      console.error('Status bar error:', error);
    }
  },

  // Splash Screen
  async hideSplashScreen() {
    if (!Capacitor.isNativePlatform()) return;
    try {
      await SplashScreen.hide();
    } catch (error) {
      console.error('Splash screen error:', error);
    }
  },

  // Deep Linking
  setupDeepLinks(callback: (url: string) => void) {
    if (!Capacitor.isNativePlatform()) return;

    App.addListener('appUrlOpen', (data: any) => {
      callback(data.url);
    });
  }
};
