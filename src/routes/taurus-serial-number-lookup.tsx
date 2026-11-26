import { createFileRoute } from "@tanstack/react-router";
import GunBrandLookupPage from "@/pages/GunBrandLookupPage";
import { gunBrandBySlug } from "@/data/gunBrandStats";

// Nov 26 2026: brand gun serial lookup page (data in src/data/gunBrandStats.ts).
export const Route = createFileRoute("/taurus-serial-number-lookup")({
  component: () => <GunBrandLookupPage brand={gunBrandBySlug("taurus")!} />,
});
