import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

/**
 * Nov 14 2026: self-service account deletion.
 * Apple requires in-app account deletion for any app that lets people create an account
 * (App Store Review Guideline 5.1.1(v)), and Google Play requires a deletion option
 * reachable in the app and on the web. Used by /delete-account.
 *
 * Order matters:
 * 1. Cancel every Stripe subscription first. If Stripe can't be reached, stop, so nobody
 *    is billed for an account that no longer exists.
 * 2. Detach or delete rows that would block deleting the auth user (no ON DELETE CASCADE),
 *    keeping payment ledger rows (purchases) without the person attached.
 * 3. Delete the auth user. Profiles, checks, chats, alerts and roles cascade from it.
 */
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "private, no-store",
    },
  });

export const Route = createFileRoute("/account-delete-api")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const origin = new URL(request.url).origin;
          if (request.headers.get("origin") !== origin)
            return json({ error: "Request origin not allowed." }, 403);

          const raw = await request.text();
          if (raw.length > 1000)
            return json({ error: "Request too large." }, 413);
          const body = z
            .object({ confirm: z.literal("DELETE") })
            .strict()
            .safeParse(JSON.parse(raw || "{}"));
          if (!body.success)
            return json({ error: "Type DELETE to confirm." }, 400);

          const url = process.env["SUPABASE_URL"];
          const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
          if (!url || !key)
            return json(
              {
                error:
                  "Account service unavailable. Email safeorstolenmail@gmail.com and we will delete your account.",
              },
              503,
            );

          const token = request.headers
            .get("authorization")
            ?.replace(/^Bearer /, "");
          if (!token) return json({ error: "Please sign in first." }, 401);
          const userClient = createClient(url, key, {
            auth: { persistSession: false },
          });
          const { data: userData, error: authError } =
            await userClient.auth.getUser(token);
          if (authError || !userData.user)
            return json({ error: "Please sign in again." }, 401);
          const user = userData.user;

          let admin;
          try {
            ({ supabaseAdmin: admin } =
              await import("@/integrations/supabase/client.server"));
            // Touch the client so a missing service-role key fails here, before anything changes.
            void admin.auth;
          } catch {
            return json(
              {
                error:
                  "Account deletion is unavailable right now. Email safeorstolenmail@gmail.com and we will delete your account.",
              },
              503,
            );
          }
          // Untyped on purpose: several of these tables are missing from the generated Database types.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const db = admin as any;

          // Staff accounts that wrote blog posts can't be removed here (posts need an author).
          const { count: authored } = await db
            .from("blog_posts")
            .select("id", { count: "exact", head: true })
            .eq("author_id", user.id);
          if (authored)
            return json(
              {
                error:
                  "This is a staff account. Email safeorstolenmail@gmail.com to close it.",
              },
              409,
            );

          // 1. Cancel subscriptions in Stripe.
          const secret = process.env["STRIPE_SECRET_KEY"];
          const { data: subRows } = await db
            .from("subscriptions")
            .select("stripe_subscription_id, stripe_customer_id")
            .eq("user_id", user.id);
          const knownSubs = new Set(
            (subRows ?? [])
              .map(
                (r: { stripe_subscription_id?: string }) =>
                  r.stripe_subscription_id,
              )
              .filter(Boolean) as string[],
          );
          const customerIds = new Set(
            (subRows ?? [])
              .map((r: { stripe_customer_id?: string }) => r.stripe_customer_id)
              .filter(Boolean) as string[],
          );
          if (secret) {
            const { default: Stripe } = await import("stripe");
            const stripe = new Stripe(secret, {
              httpClient: Stripe.createFetchHttpClient(),
            });
            if (user.email) {
              const customers = await stripe.customers.list({
                email: user.email,
                limit: 10,
              });
              customers.data.forEach((c) => customerIds.add(c.id));
            }
            for (const customer of customerIds) {
              const subs = await stripe.subscriptions.list({
                customer,
                status: "all",
                limit: 100,
              });
              subs.data.forEach((s) => knownSubs.add(s.id));
            }
            for (const id of knownSubs) {
              const sub = await stripe.subscriptions.retrieve(id);
              if (!["canceled", "incomplete_expired"].includes(sub.status))
                await stripe.subscriptions.cancel(id);
            }
          } else if (knownSubs.size > 0) {
            return json(
              {
                error:
                  "We could not cancel your subscription automatically. Email safeorstolenmail@gmail.com and we will cancel it and delete your account.",
              },
              503,
            );
          }

          // 2. Rows that would block deleting the user, or that hold their details without a cascade.
          const steps: Array<
            [string, PromiseLike<{ error: { message: string } | null }>]
          > = [
            [
              "purchases",
              db
                .from("purchases")
                .update({ user_id: null, guest_email: null })
                .eq("user_id", user.id),
            ],
            [
              "community_stories",
              db.from("community_stories").delete().eq("user_id", user.id),
            ],
            [
              "subscriptions",
              db.from("subscriptions").delete().eq("user_id", user.id),
            ],
            [
              "credit_transactions",
              db.from("credit_transactions").delete().eq("user_id", user.id),
            ],
            [
              "proof_records",
              db.from("proof_records").delete().eq("user_id", user.id),
            ],
            [
              "plate_owner_kit_purchases",
              db
                .from("plate_owner_kit_purchases")
                .delete()
                .eq("user_id", user.id),
            ],
            [
              "ai_recommendations",
              db
                .from("ai_recommendations")
                .update({ reviewed_by: null })
                .eq("reviewed_by", user.id),
            ],
            [
              "ai_content_queue",
              db
                .from("ai_content_queue")
                .update({ reviewed_by: null })
                .eq("reviewed_by", user.id),
            ],
            [
              "fraud_analysis",
              db
                .from("fraud_analysis")
                .update({ reviewed_by: null })
                .eq("reviewed_by", user.id),
            ],
          ];
          for (const [table, step] of steps) {
            const { error } = await step;
            if (error) {
              console.error(`[account-delete] ${table}:`, error.message);
              return json(
                {
                  error:
                    "Your account could not be deleted. Email safeorstolenmail@gmail.com and we will finish it.",
                },
                500,
              );
            }
          }

          // 3. Delete the login. Everything with ON DELETE CASCADE goes with it.
          const { error: deleteError } = await admin.auth.admin.deleteUser(
            user.id,
          );
          if (deleteError) {
            console.error("[account-delete] deleteUser:", deleteError.message);
            return json(
              {
                error:
                  "Your account could not be deleted. Email safeorstolenmail@gmail.com and we will finish it.",
              },
              500,
            );
          }
          return json({ deleted: true });
        } catch (err) {
          console.error(
            "[account-delete]",
            err instanceof Error ? err.message : err,
          );
          return json(
            {
              error:
                "Your account could not be deleted. Email safeorstolenmail@gmail.com and we will finish it.",
            },
            500,
          );
        }
      },
    },
  },
});
