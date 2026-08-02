import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "verify_serial",
  title: "Verify serial number",
  description:
    "Check a generic serial number (laptops, cameras, firearms, tools, bikes, appliances) against SafeOrStolen's aggregated stolen-item databases and community reports.",
  inputSchema: {
    serial: z.string().describe("The serial number as printed on the item. Case-insensitive."),
    item_type: z
      .string()
      .describe("Item category, e.g. 'laptop', 'firearm', 'bicycle', 'camera', 'power_tool'.")
      .nullable(),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ serial, item_type }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase.functions.invoke("check-gate", {
      body: {
        identifier: serial.trim(),
        identifier_type: "serial",
        item_type: item_type ?? undefined,
      },
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
