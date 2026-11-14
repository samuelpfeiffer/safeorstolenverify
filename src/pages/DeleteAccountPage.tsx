import { useState } from "react";
import { Link } from "@/lib/router-compat";
import { SEOHead } from "@/components/seo/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Loader2, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

/**
 * Nov 14 2026: account deletion, required by Apple (in-app) and Google Play (in-app and a web link).
 * This URL is the one to give Google Play's "Delete account URL" field. noindex, not in the sitemap.
 */
const DeleteAccountPage = () => {
  const { user, loading } = useAuth();
  const [confirmText, setConfirmText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const handleDelete = async () => {
    setBusy(true);
    setError(null);
    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) throw new Error("Please sign in again.");
      const res = await fetch("/account-delete-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ confirm: "DELETE" }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok)
        throw new Error(result.error || "Your account could not be deleted.");
      await supabase.auth.signOut().catch(() => undefined);
      setDone(true);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Your account could not be deleted.",
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Delete Your Account | SafeOrStolen"
        description="Delete your SafeOrStolen account and the data linked to it."
        canonical="/delete-account"
        noIndex={true}
      />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Delete your account</h1>

          {done ? (
            <Card>
              <CardContent className="p-6 space-y-3">
                <p className="font-semibold">Your account has been deleted.</p>
                <p className="text-sm text-muted-foreground">
                  Any subscription has been canceled and you won't be charged
                  again. Thanks for using SafeOrStolen.
                </p>
                <Button asChild variant="outline">
                  <Link to="/">Back to SafeOrStolen</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" /> This can't be undone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="space-y-2">
                  <p className="font-medium">What is deleted</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Your login, profile and settings</li>
                    <li>
                      Your check history, saved results, certificates and chats
                    </li>
                    <li>Your stolen-item alerts and any stories you shared</li>
                  </ul>
                  <p className="font-medium pt-2">What happens to payments</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>
                      Any subscription is canceled right away, so you won't be
                      charged again
                    </li>
                    <li>
                      Records of past payments are kept without your name or
                      email, because tax law requires it
                    </li>
                  </ul>
                </div>

                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : !user ? (
                  <div className="space-y-3 pt-2">
                    <p>Sign in to the account you want to delete.</p>
                    <Button asChild>
                      <Link
                        to={`/auth?tab=signin&redirect=${encodeURIComponent("/delete-account")}`}
                      >
                        Sign in
                      </Link>
                    </Button>
                    <p className="text-muted-foreground">
                      Can't sign in? Email{" "}
                      <a
                        className="text-primary underline"
                        href="mailto:safeorstolenmail@gmail.com?subject=Delete%20my%20account"
                      >
                        safeorstolenmail@gmail.com
                      </a>{" "}
                      from the address on your account and we'll delete it
                      within 30 days.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 pt-2">
                    <p>
                      Signed in as{" "}
                      <span className="font-medium">{user.email}</span>.
                    </p>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-delete">
                        Type DELETE to confirm
                      </Label>
                      <Input
                        id="confirm-delete"
                        value={confirmText}
                        onChange={(e) => setConfirmText(e.target.value)}
                        autoComplete="off"
                        autoCapitalize="characters"
                      />
                    </div>
                    {error && <p className="text-destructive">{error}</p>}
                    <Button
                      variant="destructive"
                      onClick={handleDelete}
                      disabled={busy || confirmText.trim() !== "DELETE"}
                    >
                      {busy ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="mr-2 h-4 w-4" />
                      )}
                      Delete my account
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default DeleteAccountPage;
