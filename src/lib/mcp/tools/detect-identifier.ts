import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "detect_identifier",
  title: "Detect identifier type",
  description:
    "Given a raw string a user typed or pasted, classify it as an IMEI, VIN, license plate, serial number, or marketplace URL so the correct verification tool can be chosen.",
  inputSchema: {
    input: z.string().describe("Raw text to classify."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ input }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase.functions.invoke("ai-detect-identifier", {
      body: { input },
    });
    if (error) {
      return { content: [{ type: "text", text: `Detection failed: ${error.message}` }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(data) }],
      structuredContent: data as Record<string, unknown>,
    };
  },
});
