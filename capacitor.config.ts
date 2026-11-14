import type { CapacitorConfig } from '@capacitor/cli';

/**
 * SafeOrStolen native app (Google Play + App Store).
 *
 * appId is permanent once the app is published. Never change it.
 *
 * The site is server-rendered (TanStack Start on Cloudflare), so the app loads the live
 * site instead of a bundled copy. Capacitor injects its native bridge into these pages,
 * so the camera, barcode scanner, share sheet and haptics work from the site's own code
 * (see src/mobile). mobile-shell/ holds only the offline screen.
 */
const config: CapacitorConfig = {
  appId: 'com.safeorstolen.app',
  appName: 'SafeOrStolen',
  webDir: 'mobile-shell',
  appendUserAgent: 'SafeOrStolenApp',
  backgroundColor: '#0d0d0d',
  // Push notifications are left out of v1: on Android, PushNotifications.register() crashes the app
  // until a Firebase google-services.json is added. Add '@capacitor/push-notifications' back here once
  // Firebase (Android) and an APNs key (iOS) are set up. Without it the JS call rejects instead of crashing.
  includePlugins: [
    '@capacitor/app',
    '@capacitor/camera',
    '@capacitor/haptics',
    '@capacitor/share',
    '@capacitor/splash-screen',
    '@capacitor/status-bar',
    '@capacitor-mlkit/barcode-scanning',
  ],
  server: {
    url: 'https://safeorstolen.com',
    cleartext: false,
    errorPath: 'offline.html',
    // Pages that stay inside the app. Anything else opens in the phone's browser.
    allowNavigation: [
      'safeorstolen.com',
      'www.safeorstolen.com',
      'checkout.stripe.com',
      'billing.stripe.com',
    ],
  },
  android: {
    allowMixedContent: false,
  },
  ios: {
    contentInset: 'automatic',
    limitsNavigationsToAppBoundDomains: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: '#0d0d0d',
      showSpinner: false,
    },
  },
};

export default config;
