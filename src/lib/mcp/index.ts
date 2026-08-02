import { auth, defineMcp } from "@lovable.dev/mcp-js";
import detectIdentifierTool from "./tools/detect-identifier";
import verifyImeiTool from "./tools/verify-imei";
import verifyVinTool from "./tools/verify-vin";
import verifySerialTool from "./tools/verify-serial";
import listRecentVerificationsTool from "./tools/list-recent-verifications";

// Direct Supabase host required for OAuth issuer; the .lovable.cloud proxy fails RFC 8414 §3.3.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "safeorstolen",
  title: "SafeOrStolen",
  version: "0.1.0",
  instructions:
    "SafeOrStolen tools verify whether secondhand items (phones, vehicles, laptops, bikes, firearms, etc.) are reported stolen. Use `detect_identifier` when unsure what a string is, then call the matching verify_* tool. `list_recent_verifications` returns the signed-in user's own history.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    detectIdentifierTool,
    verifyImeiTool,
    verifyVinTool,
    verifySerialTool,
    listRecentVerificationsTool,
  ],
});
