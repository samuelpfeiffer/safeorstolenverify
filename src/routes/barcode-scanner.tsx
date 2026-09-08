import { createFileRoute } from "@tanstack/react-router";
import BarcodeScannerPage from "@/pages/BarcodeScannerPage";

export const Route = createFileRoute("/barcode-scanner")({
  component: BarcodeScannerPage,
});
