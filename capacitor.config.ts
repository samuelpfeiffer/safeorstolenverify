import { CapacitorConfig } from '@capacitor/core';

// Nov 23 2026: store-ready identity. appId matches the web app manifest id (com.safeorstolen.app) and
// cannot be changed after the first Play Store / App Store upload. The app loads the live site over
// HTTPS (it used to load a Lovable preview URL with cleartext allowed). The site is server-rendered
// (.output/public), so there is no static dist folder to bundle yet; webDir only holds the fallback.
const config: CapacitorConfig = {
  appId: 'com.safeorstolen.app',
  appName: 'SafeOrStolen',
  webDir: 'dist',
  server: {
    url: 'https://safeorstolen.com',
    cleartext: false,
  },
};

export default config;
