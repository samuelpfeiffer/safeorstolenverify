import { createFileRoute } from "@tanstack/react-router";
import BarcodeScanner from "@/pages/app/BarcodeScanner";

export const Route = createFileRoute("/app/barcode-scanner")({
  component: BarcodeScanner,
});
