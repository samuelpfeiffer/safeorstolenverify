import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Loader2 } from "lucide-react";

// Typed wrapper for the Supabase Auth OAuth beta namespace.
type OAuthClient = { id: string; name?: string; client_name?: string; logo_uri?: string };
type OAuthDetails = {
  client?: OAuthClient;
  redirect_url?: string;
  redirect_to?: string;
  scopes?: string[];
};
type OAuthResult = { data: OAuthDetails | null; error: { message: string } | null };
interface SupabaseAuthOAuth {
  getAuthorizationDetails(id: string): Promise<OAuthResult>;
  approveAuthorization(id: string): Promise<OAuthResult>;
  denyAuthorization(id: string): Promise<OAuthResult>;
}
const authOAuth = () =>
  (supabase.auth as unknown as { oauth: SupabaseAuthOAuth }).oauth;

export default function OAuthConsent() {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<OAuthDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/auth?redirect=" + encodeURIComponent(next);
        return;
      }
      try {
        const { data, error } = await authOAuth().getAuthorizationDetails(authorizationId);
        if (!active) return;
        if (error) {
          setError(error.message);
          return;
        }
        const immediate = data?.redirect_url ?? data?.redirect_to;
        if (immediate && !data?.client) {
          window.location.href = immediate;
          return;
        }
        setDetails(data);
      } catch (e) {
        if (active) setError(e instanceof Error ? e.message : "Failed to load authorization");
      }
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    try {
      const oauth = authOAuth();
      const { data, error } = approve
        ? await oauth.approveAuthorization(authorizationId)
        : await oauth.denyAuthorization(authorizationId);
      if (error) {
        setBusy(false);
        setError(error.message);
        return;
      }
      const target = data?.redirect_url ?? data?.redirect_to;
      if (!target) {
        setBusy(false);
        setError("No redirect returned by the authorization server.");
        return;
      }
      window.location.href = target;
    } catch (e) {
      setBusy(false);
      setError(e instanceof Error ? e.message : "Failed to complete authorization");
    }
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-background">
        <Card className="max-w-md w-full p-6">
          <h1 className="text-xl font-semibold text-destructive mb-2">Authorization error</h1>
          <p className="text-sm text-muted-foreground">{error}</p>
        </Card>
      </div>
    );
  }

  if (!details) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const clientName = details.client?.client_name ?? details.client?.name ?? "an app";

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <Card className="max-w-md w-full p-6 border-2 border-primary/30">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-xl font-semibold">Connect {clientName}</h1>
            <p className="text-sm text-muted-foreground">to your SafeOrStolen account</p>
          </div>
        </div>
        <p className="text-sm mb-4">
          <strong>{clientName}</strong> is requesting access to SafeOrStolen verification tools on
          your behalf. It will be able to:
        </p>
        <ul className="text-sm text-muted-foreground list-disc pl-5 mb-6 space-y-1">
          <li>Verify IMEIs, VINs, and serial numbers as you</li>
          <li>Read your recent verification history</li>
          <li>Detect what kind of identifier a string is</li>
        </ul>
        <div className="flex gap-3">
          <Button variant="outline" disabled={busy} onClick={() => decide(false)} className="flex-1">
            Deny
          </Button>
          <Button disabled={busy} onClick={() => decide(true)} className="flex-1">
            {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : "Approve"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
