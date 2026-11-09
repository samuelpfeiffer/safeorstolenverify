import { useCallback, useEffect, useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gscRequest, GSC_STATE_KEY, rankingDateRange } from "@/lib/gsc/client";
import { Loader2 } from "lucide-react";

type Status = {
  connected: boolean;
  configured: boolean;
  property: string;
  redirectUri: string;
  latestCheck: null | {
    createdAt: string;
    startDate: string;
    endDate: string;
    rows: number;
    truncated: boolean;
  };
};
type RankingRow = {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

export default function GSCConnectionPage() {
  const [status, setStatus] = useState<Status | null>(null);
  const [busy, setBusy] = useState<string | null>("loading");
  const [error, setError] = useState("");
  const [rows, setRows] = useState<RankingRow[] | null>(null);
  const load = useCallback(
    async () =>
      setStatus(await gscRequest<Status>({ action: "connection-status" })),
    [],
  );
  useEffect(() => {
    load()
      .catch((e) => setError(e.message))
      .finally(() => setBusy(null));
  }, [load]);

  async function run(name: string, action: () => Promise<void>) {
    setBusy(name);
    setError("");
    try {
      await action();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Request failed. Try again.");
    } finally {
      setBusy(null);
    }
  }
  const connect = () =>
    run("connecting", async () => {
      // Always begin on the callback's origin so browser state and sign-in survive the round trip.
      if (window.location.origin !== "https://safeorstolen.com") {
        window.location.assign("https://safeorstolen.com/admin/gsc-connect");
        return;
      }
      const result = await gscRequest<{ authUrl: string; state: string }>({
        action: "oauth-start",
      });
      const url = new URL(result.authUrl);
      if (
        url.origin !== "https://accounts.google.com" ||
        url.searchParams.get("state") !== result.state
      )
        throw new Error("Invalid Google connection response.");
      sessionStorage.setItem(GSC_STATE_KEY, result.state);
      window.location.assign(url.toString());
    });
  const fetchRankings = () =>
    run("rankings", async () => {
      const result = await gscRequest<{
        rows?: RankingRow[];
        truncated: boolean;
      }>({
        action: "search-analytics",
        ...rankingDateRange(),
        dimensions: ["query", "page"],
        rowLimit: 25_000,
      });
      setRows(result.rows ?? []);
      await load();
    });

  return (
    <>
      <SEOHead
        title="Search Console Connection | SafeOrStolen Admin"
        description="Connect Google Search Console and save search performance."
        canonical="/admin/gsc-connect"
        noIndex
      />
      <main className="container max-w-5xl mx-auto px-4 py-12 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Google Search Console</h1>
          <p className="text-muted-foreground mt-2">
            Connect Google to review SafeOrStolen search queries and page
            performance.
          </p>
        </div>
        {error && (
          <div
            role="alert"
            className="border border-destructive rounded-lg p-4"
          >
            <p>{error}</p>
            <Button
              variant="outline"
              className="mt-3"
              disabled={!!busy}
              onClick={() => run("loading", load)}
            >
              Retry status
            </Button>
          </div>
        )}
        {busy && (
          <p role="status" className="flex items-center gap-2">
            <Loader2 className="animate-spin h-4 w-4" />
            {busy === "rankings"
              ? "Fetching and saving rankings…"
              : "Please wait…"}
          </p>
        )}
        {status && (
          <Card>
            <CardHeader>
              <CardTitle>
                {status.connected
                  ? "Google account connected"
                  : "Google account not connected"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Property: <strong>{status.property}</strong>
              </p>
              <p>
                Access is read-only. This connection cannot change your Google
                Search Console settings.
              </p>
              {!status.configured && (
                <div role="alert" className="rounded-lg border p-4 space-y-2">
                  <p>
                    Google OAuth configuration is missing. Set GOOGLE_CLIENT_ID
                    and GOOGLE_CLIENT_SECRET in Supabase Edge Function secrets.
                    In Google Cloud, enable the Search Console API and add this
                    authorized redirect URI:
                  </p>
                  <code className="block break-all">{status.redirectUri}</code>
                  <p>
                    Use a Google account with access to the SafeOrStolen
                    property.
                  </p>
                </div>
              )}
              <div className="flex flex-wrap gap-3">
                <Button
                  disabled={!!busy || !status.configured}
                  onClick={connect}
                >
                  {status.connected ? "Reconnect Google" : "Connect Google"}
                </Button>
                {status.connected && (
                  <Button
                    disabled={!!busy || !status.configured}
                    onClick={fetchRankings}
                  >
                    Fetch last 28 days
                  </Button>
                )}
                {status.connected && (
                  <Button
                    variant="outline"
                    disabled={!!busy}
                    onClick={() =>
                      run("disconnect", async () => {
                        await gscRequest({ action: "disconnect" });
                        setRows(null);
                        await load();
                      })
                    }
                  >
                    Disconnect Google
                  </Button>
                )}
              </div>
              {status.latestCheck ? (
                <p className="text-sm text-muted-foreground">
                  Saved {status.latestCheck.rows.toLocaleString()} query/page
                  rows for {status.latestCheck.startDate} through{" "}
                  {status.latestCheck.endDate}, fetched{" "}
                  {new Date(status.latestCheck.createdAt).toLocaleString()}.
                  {status.latestCheck.truncated &&
                    " This reached the row limit; additional pages of results are needed."}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No rankings have been saved yet.
                </p>
              )}
            </CardContent>
          </Card>
        )}
        {rows !== null && (
          <Card>
            <CardHeader>
              <CardTitle>Search performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Showing the first {Math.min(rows.length, 100)} of{" "}
                {rows.length.toLocaleString()} returned rows. Position is an
                average across searches. Google omits some queries; absence here
                does not establish that a page has no #1 rankings.
              </p>
              {rows.length === 0 ? (
                <p>Google returned no data for this date range.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr>
                        <th className="p-2">Query</th>
                        <th className="p-2">Page</th>
                        <th className="p-2">Clicks</th>
                        <th className="p-2">Impressions</th>
                        <th className="p-2">Avg. position</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.slice(0, 100).map((row, i) => (
                        <tr key={i} className="border-t">
                          <td className="p-2">{row.keys[0]}</td>
                          <td className="p-2 break-all">{row.keys[1]}</td>
                          <td className="p-2">{row.clicks}</td>
                          <td className="p-2">{row.impressions}</td>
                          <td className="p-2">{row.position.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </main>
    </>
  );
}
