import { createFileRoute, notFound } from "@tanstack/react-router";
import GunStateLookupPage from "@/pages/GunStateLookupPage";
import { gunStateBySlug } from "@/data/gunTheftStats";

// Not nested under /gun-serial-number-lookup (that path 301s to /firearms-check).
export const Route = createFileRoute("/gun-serial-number-lookup_/$state")({
  loader: ({ params }) => {
    const stats = gunStateBySlug(params.state);
    if (!stats) throw notFound();
    return stats;
  },
  component: function GunStateRoute() {
    const stats = Route.useLoaderData();
    return <GunStateLookupPage stats={stats} />;
  },
});
