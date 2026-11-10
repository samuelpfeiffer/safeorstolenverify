import { test } from "node:test";
import assert from "node:assert/strict";
import {
  trackCheckout,
  trackConfirmedPurchase,
  trackFunnelStage,
} from "./funnelAnalytics";

test("funnel events omit identifiers and query strings; paid receipts are deduplicated", () => {
  const calls: unknown[][] = [];
  const storage = new Map<string, string>();
  Object.assign(globalThis, {
    window: {
      location: {
        origin: "https://safeorstolen.com",
        pathname: "/verify",
        search: "?q=PRIVATE_SERIAL&session_id=PRIVATE_SESSION",
      },
      gtag: (...args: unknown[]) => calls.push(args),
      localStorage: {
        getItem: (k: string) => storage.get(k) ?? null,
        setItem: (k: string, v: string) => storage.set(k, v),
      },
    },
  });
  assert.equal(trackFunnelStage("verification_completed"), true);
  assert.equal(trackCheckout("single"), true);
  assert.equal(trackCheckout("monthly"), true);
  const receipt = {
    transactionId: "cs_test_confirmed_receipt",
    value: 4.99,
    tax: 0.42,
    currency: "USD",
    plan: "single" as const,
  };
  assert.equal(trackConfirmedPurchase(receipt), true);
  assert.equal(trackConfirmedPurchase(receipt), false);
  assert.equal(calls.filter((c) => c[1] === "purchase").length, 1);
  assert.equal((calls[1][2] as { value: number }).value, 4.99);
  assert.equal((calls[2][2] as { value: number }).value, 10);
  assert.doesNotMatch(
    JSON.stringify(calls),
    /PRIVATE_SERIAL|PRIVATE_SESSION|search_term|fingerprint/,
  );
  assert.equal(
    trackConfirmedPurchase({
      ...receipt,
      transactionId: "cs_test_bad_amount",
      value: NaN,
    }),
    false,
  );
  // A reload has no module-memory entry for this receipt, but storage still prevents replay.
  storage.set(
    "sos_reported_purchases_v1",
    JSON.stringify(["cs_test_prior_receipt"]),
  );
  assert.equal(
    trackConfirmedPurchase({
      ...receipt,
      transactionId: "cs_test_prior_receipt",
    }),
    false,
  );
  Object.assign(globalThis, {
    window: {
      gtag: () => {
        throw new Error("blocked");
      },
      location: { origin: "", pathname: "" },
    },
  });
  assert.equal(trackCheckout("single"), false);
  Object.assign(globalThis, { window: undefined });
  assert.equal(trackFunnelStage("verification_started"), false);
});
