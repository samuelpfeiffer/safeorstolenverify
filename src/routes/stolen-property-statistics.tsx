import { createFileRoute } from "@tanstack/react-router";
import StolenPropertyStatisticsPage from "@/pages/StolenPropertyStatisticsPage";

// Oct 24 2026: fetch live aggregate counts during server rendering so crawlers see current numbers.
// Falls back to the page's built-in numbers if the database is slow or unavailable.
export const Route = createFileRoute("/stolen-property-statistics")({
  loader: async () => {
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const call = (supabase.rpc as any)("public_stolen_property_stats");
      const timeout = new Promise((resolve) => setTimeout(() => resolve({ data: null }), 3000));
      const { data } = (await Promise.race([call, timeout])) as { data: unknown };
      return { stats: data ?? null };
    } catch {
      return { stats: null };
    }
  },
  component: StatsRoute,
});

function StatsRoute() {
  const { stats } = Route.useLoaderData();
  return <StolenPropertyStatisticsPage stats={stats} />;
}
