import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "verify_imei",
  title: "Verify phone IMEI",
  description:
    "Check a 15-digit phone IMEI against SafeOrStolen's stolen-device sources (GSMA blacklists, carrier data, community reports). Returns a status (safe / stolen / unknown) with any known metadata.",
  inputSchema: {
    imei: z
      .string()
      .describe("A 15-digit IMEI. Digits only; SafeOrStolen strips spaces and dashes."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ imei }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase.functions.invoke("check-gate", {
      body: { identifier: imei.replace(/\D/g, ""), identifier_type: "imei" },
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
