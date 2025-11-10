// App version tracking for cache invalidation
export const APP_VERSION = `${import.meta.env.MODE}-${Date.now()}`;
export const BUILD_TIME = new Date().toISOString();
export const BUILD_INFO = {
  version: APP_VERSION,
  buildTime: BUILD_TIME,
  mode: import.meta.env.MODE,
};

// Log version info to console
export const logVersionInfo = () => {
  console.log('%c🚀 SafeOrStolen', 'color: #ff6b35; font-size: 16px; font-weight: bold;');
  console.log(`%cVersion: ${APP_VERSION}`, 'color: #4ade80;');
  console.log(`%cBuild Time: ${BUILD_TIME}`, 'color: #60a5fa;');
  console.log(`%cMode: ${import.meta.env.MODE}`, 'color: #a78bfa;');
};
