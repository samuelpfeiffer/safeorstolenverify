import { isNativeApp } from "./nativeApp";

/**
 * Native barcode/QR scanner for the app (Google ML Kit through @capacitor-mlkit/barcode-scanning).
 * Reads the IMEI, serial number or VIN barcodes printed on boxes, stickers and door jambs.
 * The plugin is imported on demand, so the website bundle never loads it.
 */

const pluginAvailable = (): boolean => {
  if (!isNativeApp()) return false;
  const cap = (
    window as unknown as {
      Capacitor?: { isPluginAvailable?: (n: string) => boolean };
    }
  ).Capacitor;
  return Boolean(cap?.isPluginAvailable?.("BarcodeScanner"));
};

export const canNativeScan = (): boolean => pluginAvailable();

export type NativeScanResult =
  | { status: "scanned"; value: string }
  | { status: "cancelled" }
  | { status: "preparing" }
  | { status: "denied" };

export async function nativeScan(): Promise<NativeScanResult> {
  const { BarcodeScanner } = await import("@capacitor-mlkit/barcode-scanning");
  const { Capacitor } = await import("@capacitor/core");

  if (Capacitor.getPlatform() === "android") {
    // Android's ready-made scanner screen ships as a Google Play services module that may not be
    // downloaded yet on a fresh phone. Start the download and ask the user to try again shortly.
    const { available } =
      await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    if (!available) {
      await BarcodeScanner.installGoogleBarcodeScannerModule();
      return { status: "preparing" };
    }
  } else {
    // iOS draws the scanner with the camera directly, so it needs camera permission.
    let { camera } = await BarcodeScanner.checkPermissions();
    if (camera !== "granted" && camera !== "limited") {
      ({ camera } = await BarcodeScanner.requestPermissions());
    }
    if (camera !== "granted" && camera !== "limited")
      return { status: "denied" };
  }

  try {
    const { barcodes } = await BarcodeScanner.scan({ autoZoom: true });
    const value = barcodes.find((b) => b.rawValue?.trim())?.rawValue?.trim();
    return value ? { status: "scanned", value } : { status: "cancelled" };
  } catch (err) {
    const message = err instanceof Error ? err.message.toLowerCase() : "";
    if (message.includes("cancel")) return { status: "cancelled" };
    throw err;
  }
}
