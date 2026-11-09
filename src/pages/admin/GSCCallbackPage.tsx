import { useEffect, useRef, useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { gscRequest, GSC_STATE_KEY } from "@/lib/gsc/client";

export default function GSCCallbackPage() {
  const started = useRef(false);
  const [error, setError] = useState("");
  useEffect(() => {
    // OAuth codes are single-use. Avoid exchanging twice under StrictMode or rerenders.
    if (started.current) return;
    started.current = true;
    const params = new URLSearchParams(window.location.search);
    // Remove the authorization code before any subsequent navigation or outbound link.
    window.history.replaceState(
      window.history.state,
      "",
      "/admin/gsc-callback",
    );
    async function finish() {
      const expected = sessionStorage.getItem(GSC_STATE_KEY);
      sessionStorage.removeItem(GSC_STATE_KEY);
      if (params.get("error"))
        throw new Error(
          "Google access was not approved. Start again when you are ready.",
        );
      const state = params.get("state");
      const code = params.get("code");
      if (!expected || state !== expected || !code)
        throw new Error(
          "This connection request is missing or expired. Start a new Google connection.",
        );
      await gscRequest({ action: "oauth-callback", code, state });
      window.location.replace("/admin/gsc-status");
    }
    finish().catch((e) =>
      setError(e instanceof Error ? e.message : "Unable to connect Google."),
    );
  }, []);
  return (
    <>
      <SEOHead
        title="Connect Search Console | SafeOrStolen Admin"
        description="Completing the Google Search Console connection."
        canonical="/admin/gsc-callback"
        noIndex
      />
      <main className="container max-w-xl mx-auto px-4 py-20 space-y-4">
        <h1 className="text-2xl font-bold">Connect Google Search Console</h1>
        {error ? (
          <>
            <p role="alert">{error}</p>
            <Button asChild>
              <a href="/admin/gsc-connect">Return to connection settings</a>
            </Button>
          </>
        ) : (
          <p role="status" className="flex gap-2 items-center">
            <Loader2 className="h-5 w-5 animate-spin" />
            Completing your connection…
          </p>
        )}
      </main>
    </>
  );
}
