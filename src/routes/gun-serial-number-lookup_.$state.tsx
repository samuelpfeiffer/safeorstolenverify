import { createFileRoute, notFound } from "@tanstack/react-router";
import GunStateLookupPage from "@/pages/GunStateLookupPage";
import GunStateNoRecordsPage from "@/pages/GunStateNoRecordsPage";
import { gunStateBySlug, gunNoRecordStateBySlug } from "@/data/gunTheftStats";

// Not nested under /gun-serial-number-lookup (that path 301s to /firearms-check).
// Nov 24 2026: states with police reports render GunStateLookupPage exactly as before; the 16 states
// without reports render GunStateNoRecordsPage; anything else is a 404.
export const Route = createFileRoute("/gun-serial-number-lookup_/$state")({
  loader: ({ params }) => {
    const stats = gunStateBySlug(params.state);
    if (stats) return { stats, noRecords: null };
    const noRecords = gunNoRecordStateBySlug(params.state);
    if (noRecords) return { stats: null, noRecords };
    throw notFound();
  },
  component: function GunStateRoute() {
    const { stats, noRecords } = Route.useLoaderData();
    if (stats) return <GunStateLookupPage stats={stats} />;
    return <GunStateNoRecordsPage state={noRecords!} />;
  },
});
