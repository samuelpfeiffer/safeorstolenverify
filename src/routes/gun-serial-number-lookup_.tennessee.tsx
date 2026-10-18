import { createFileRoute } from "@tanstack/react-router";
import TennesseeGunLookupPage from "@/pages/TennesseeGunLookupPage";

export const Route = createFileRoute("/gun-serial-number-lookup_/tennessee")({
  component: TennesseeGunLookupPage,
});
