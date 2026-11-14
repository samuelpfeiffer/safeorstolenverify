import { useEffect, useState } from "react";

/**
 * True only inside the SafeOrStolen Google Play / App Store app (Capacitor injects
 * window.Capacitor into the pages it loads). Always false on the website and during SSR,
 * so nothing here changes what browsers or search engines see.
 */
export const isNativeApp = (): boolean =>
  typeof window !== "undefined" &&
  Boolean(
    (
      window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }
    ).Capacitor?.isNativePlatform?.(),
  );

/** Hydration-safe version: false on the server and first client render, then the real value. */
export function useIsNativeApp(): boolean {
  const [native, setNative] = useState(false);
  useEffect(() => {
    setNative(isNativeApp());
  }, []);
  return native;
}
