import { useCallback, useEffect, useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gscRequest } from "@/lib/gsc/client";
import { Loader2 } from "lucide-react";

type Summary = {
  generatedAt: string;
  startDate: string;
  endDate: string;
  days: number;
  searchRecords: number;
  recordsWithResults: number;
  recordedIdentities: number;
  repeatIdentities: number;
  unidentifiedSearchRecords: number;
  completedPayments: number;
  usdGrossCents: number;
  expiredCheckouts: number;
  pendingCheckouts: number;
  otherCurrencyCompleted: number;
  categories: { category: string; records: number; with_results: number }[];
  paymentAmounts: { cents: number; records: number }[];
};
const money = (cents: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    cents / 100,
  );

export default function GrowthDashboardPage() {
  const [days, setDays] = useState(30);
  const [data, setData] = useState<Summary | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const refresh = useCallback(async () => {
    setBusy(true);
    setError("");
    setData(null);
    try {
      setData(await gscRequest<Summary>({ action: "growth-summary", days }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load metrics.");
    } finally {
      setBusy(false);
    }
  }, [days]);
  useEffect(() => {
    void refresh();
  }, [refresh]);
  const percent =
    data && days === 30
      ? Math.min(100, (data.usdGrossCents / 200000) * 100)
      : null;
  return (
    <>
      <SEOHead
        title="Growth Dashboard | SafeOrStolen Admin"
        description="Private verification usage and payment metrics."
        canonical="/admin/growth"
        noIndex
      />
      <main className="container max-w-6xl mx-auto px-4 py-12 space-y-6">
        <div className="flex flex-wrap justify-between gap-4 items-start">
          <div>
            <h1 className="text-3xl font-bold">Growth dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Audience goal: 500,000 users in 12 months. Revenue goal: at least
              $2,000 per month.
            </p>
          </div>
          <Button asChild variant="outline">
            <a href="/admin/gsc-connect">Search Console</a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <label htmlFor="growth-window">Reporting window</label>
          <select
            id="growth-window"
            value={days}
            disabled={busy}
            onChange={(e) => setDays(Number(e.target.value))}
            className="rounded-md border bg-background px-3 py-2"
          >
            <option value={7}>Last 7 days</option>
            <option value={30}>Last 30 days</option>
            <option value={90}>Last 90 days</option>
          </select>
          <Button disabled={busy} onClick={() => void refresh()}>
            {busy ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading
              </>
            ) : (
              "Refresh"
            )}
          </Button>
        </div>
        {error && (
          <p role="alert" className="border border-destructive rounded-lg p-4">
            {error}
          </p>
        )}
        {data && (
          <>
            <p className="text-sm text-muted-foreground">
              Rolling window: {new Date(data.startDate).toLocaleString()} to{" "}
              {new Date(data.endDate).toLocaleString()}.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "Recorded USD revenue",
                  money(data.usdGrossCents),
                  "Completed positive-value payment records; before costs.",
                ],
                [
                  "Search records",
                  data.searchRecords.toLocaleString(),
                  `${data.recordsWithResults.toLocaleString()} have a recorded result.`,
                ],
                [
                  "Recorded identities",
                  data.recordedIdentities.toLocaleString(),
                  "Accounts or browser fingerprints; not verified unique people.",
                ],
                [
                  "Completed payments",
                  data.completedPayments.toLocaleString(),
                  `${data.expiredCheckouts} expired and ${data.pendingCheckouts} pending checkout records.`,
                ],
              ].map(([title, value, description]) => (
                <Card key={title}>
                  <CardHeader>
                    <CardTitle className="text-sm">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{value}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {percent !== null && (
              <Card>
                <CardHeader>
                  <CardTitle>$2,000 monthly revenue target</CardTitle>
                </CardHeader>
                <CardContent>
                  <progress
                    className="w-full h-3"
                    aria-label="Thirty-day revenue against the monthly target"
                    value={percent}
                    max={100}
                  />
                  <p className="mt-2">
                    {money(data.usdGrossCents)} recorded over 30 days —{" "}
                    {percent.toFixed(1)}% of target.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This rolling period is not a calendar-month revenue
                    statement.
                  </p>
                </CardContent>
              </Card>
            )}
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Search categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr>
                          <th className="p-2">Category</th>
                          <th className="p-2">Records</th>
                          <th className="p-2">With result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.categories.map((row) => (
                          <tr key={row.category} className="border-t">
                            <td className="p-2">{row.category}</td>
                            <td className="p-2">
                              {row.records.toLocaleString()}
                            </td>
                            <td className="p-2">
                              {row.with_results.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Completed payment amounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr>
                          <th className="p-2">Paid amount</th>
                          <th className="p-2">Payments</th>
                          <th className="p-2">Recorded total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.paymentAmounts.map((row) => (
                          <tr key={row.cents} className="border-t">
                            <td className="p-2">{money(row.cents)}</td>
                            <td className="p-2">{row.records}</td>
                            <td className="p-2">
                              {money(row.cents * row.records)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Read these numbers correctly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  {data.repeatIdentities.toLocaleString()} recorded identities
                  have more than one search record in this window. Identity
                  changes across browsers, sign-in and cleared storage can split
                  one person into multiple identities. These counts are not a
                  retention cohort or a count of unique humans.
                </p>
                <p>
                  Traffic and unique visitors are reported separately in Lovable
                  analytics. This dashboard does not claim progress toward
                  500,000 unique people without a deduplicated audience
                  measurement.
                </p>
                <p>
                  Search records can include staged or unsuccessful requests. A
                  stored result does not prove a successful verification.
                  Checkout counts cover saved records and are not a complete
                  visitor conversion funnel.
                </p>
                <p>
                  Revenue is recorded completed USD payments, not reconciled
                  Stripe payouts or profit. Refunds, processing fees, taxes and
                  lookup costs are not deducted. {data.otherCurrencyCompleted}{" "}
                  completed non-USD payments are excluded.
                </p>
                <p>
                  Verified #1 pages remain protected. Connect Search Console and
                  check rankings before editing public pages.
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </main>
    </>
  );
}
