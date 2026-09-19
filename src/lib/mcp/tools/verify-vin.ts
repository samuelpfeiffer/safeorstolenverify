import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { verifyViaApp } from "../verifyViaApp";

export default defineTool({
 name: "verify_vin",
 title: "Verify vehicle VIN",
 description:
 "Check a 17-character vehicle VIN against SafeOrStolen's stolen-vehicle sources (vehicle theft and title databases, state law enforcement, community reports). Returns status plus any known theft record.",
 inputSchema: {
 vin: z.string().describe("A 17-character VIN. Letters and digits; I/O/Q are not valid VIN chars."),
 },
 annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
 handler: async ({ vin }, ctx) => {
 if (!ctx.isAuthenticated()) {
 return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
 }
 const { data, error } = await verifyViaApp(ctx, {
 identifier: vin.trim().toUpperCase(),
 itemType: "vehicle",
 });
 if (error) {
 return { content: [{ type: "text", text: `Verification failed: ${error}` }], isError: true };
 }
 return {
 content: [{ type: "text", text: JSON.stringify(data) }],
 structuredContent: data as Record<string, unknown>,
 };
 },
});
