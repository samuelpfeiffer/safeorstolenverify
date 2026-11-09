import { supabase } from "@/integrations/supabase/client";

export const GSC_STATE_KEY = "safeorstolen:gsc:oauth-state";
export async function gscRequest<T>(body: Record<string, unknown>): Promise<T> {
  const { data, error } = await supabase.functions.invoke("gsc-api", { body });
  if (error) {
    let message = error.message;
    if (error.context instanceof Response) {
      try {
        message = (await error.context.json()).error || message;
      } catch {
        /* Keep the transport message. */
      }
    }
    throw new Error(message);
  }
  if (data?.error) throw new Error(data.error);
  return data as T;
}

export function rankingDateRange(now = new Date()) {
  // Search Console dates use Pacific time; leave three days for finalized data.
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const part = (name: string) => parts.find((p) => p.type === name)!.value;
  const end = new Date(
    `${part("year")}-${part("month")}-${part("day")}T12:00:00Z`,
  );
  end.setUTCDate(end.getUTCDate() - 3);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 27);
  return {
    startDate: start.toISOString().slice(0, 10),
    endDate: end.toISOString().slice(0, 10),
  };
}
