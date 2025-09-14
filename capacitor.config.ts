import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b',
  appName: 'safeorstolen',
  webDir: 'dist',
  server: {
    url: 'https://ded9e6b9-96c4-4cc3-8b1a-81d9ed9b1d6b.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      iosSplashResourceName: 'Default',
      spinnerStyle: 'large',
      spinnerColor: '#ea580c'
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#ea580c'
    }
  }
};

export default config;