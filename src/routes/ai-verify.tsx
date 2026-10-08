import { createFileRoute } from "@tanstack/react-router";
import { Navigate } from "@/lib/router-compat";

/**
 * Oct 7 2026: rewritten by hand for "ai stolen item check". /ai-verify sends visitors to /verify,
 * where the check assistant lives (src/pages/VerifyChatPage.tsx): you paste an IMEI, VIN, plate,
 * serial or listing link, or upload a photo of the label, and it works out the number type, runs
 * the check and explains the result. The old meta called it "AI-powered" verification "in seconds"
 * as if the AI decided the result. It doesn't: the result comes from the records searched, and the
 * AI note is advisory. The redirect is kept so the tool keeps working, and the canonical now points
 * at /verify, the page that actually renders.
 */

const TITLE = "AI Stolen Item Check Assistant | SafeOrStolen";
const DESCRIPTION =
  "Paste an IMEI, VIN, plate or serial, or upload a photo of the label. SafeOrStolen runs the stolen-item check and an AI note explains it. The note never decides.";

export const Route = createFileRoute("/ai-verify")({
  component: () => <Navigate to="/verify" replace />,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://safeorstolen.com/verify" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://safeorstolen.com/verify" }],
  }),
});
