import { createClient } from "@supabase/supabase-js";
import { defineTool, type ToolContext } from "@lovable.dev/mcp-js";
import { z } from "zod";

function supabaseForUser(ctx: ToolContext) {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY!,
    {
      global: { headers: { Authorization: `Bearer ${ctx.getToken()}` } },
      auth: { persistSession: false, autoRefreshToken: false },
    },
  );
}

export default defineTool({
  name: "verify_vin",
  title: "Verify vehicle VIN",
  description:
    "Check a 17-character vehicle VIN against SafeOrStolen's stolen-vehicle sources (NICB, state law enforcement, community reports). Returns status plus any known theft record.",
  inputSchema: {
    vin: z.string().describe("A 17-character VIN. Letters and digits; I/O/Q are not valid VIN chars."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ vin }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase.functions.invoke("check-gate", {
      body: { identifier: vin.trim().toUpperCase(), identifier_type: "vin" },
    });
    if (error) {
      return { content: [{ type: "text", text: `Verification failed: ${error.message}` }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(data) }],
      structuredContent: data as Record<string, unknown>,
    };
  },
});
