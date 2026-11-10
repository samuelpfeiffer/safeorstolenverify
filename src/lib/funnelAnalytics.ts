/** Existing GA4 only. Never send identifiers, chat text, results, or checkout URLs. */
type Stage =
  | "verification_started"
  | "verification_completed"
  | "verification_failed"
  | "verification_limit_reached"
  | "verification_paywall_viewed"
  | "checkout_failed";
type Plan = "single" | "monthly";
export type ConfirmedPurchase = {
  transactionId: string;
  value: number;
  tax: number;
  currency: string;
  plan: Plan;
};
const sent = new Set<string>();
const STORAGE_KEY = "sos_reported_purchases_v1";

function send(name: string, parameters: Record<string, unknown> = {}): boolean {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return false;
  try {
    window.gtag("event", name, {
      ...parameters,
      // Default URLs can contain an IMEI, listing URL, or payment session in query params.
      page_location: window.location.origin + window.location.pathname,
      page_referrer: "",
      send_page_view: false,
    });
    return true;
  } catch {
    return false;
  } // Analytics must never interrupt verification or checkout.
}

export function trackFunnelStage(stage: Stage): boolean {
  return send(stage);
}

export function trackCheckout(plan: Plan): boolean {
  const value = plan === "monthly" ? 10 : 4.99;
  return send("begin_checkout", {
    currency: "USD",
    value,
    items: [
      {
        item_id: plan,
        item_name:
          plan === "monthly" ? "Unlimited monthly" : "One verification check",
        price: value,
        quantity: 1,
      },
    ],
  });
}

/** Call only with the server's owner-checked, paid-and-active response. */
export function trackConfirmedPurchase(purchase: ConfirmedPurchase): boolean {
  if (
    !purchase ||
    !/^cs_[A-Za-z0-9_]{6,240}$/.test(purchase.transactionId) ||
    !Number.isFinite(purchase.value) ||
    purchase.value < 0 ||
    !Number.isFinite(purchase.tax) ||
    purchase.tax < 0 ||
    !/^[A-Z]{3}$/.test(purchase.currency) ||
    !["single", "monthly"].includes(purchase.plan)
  )
    return false;
  let previous: string[] = [];
  try {
    const stored: unknown = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) || "[]",
    );
    if (Array.isArray(stored))
      previous = stored.filter((v): v is string => typeof v === "string");
  } catch {
    /* Storage restrictions must not break the confirmation page. */
  }
  if (
    sent.has(purchase.transactionId) ||
    previous.includes(purchase.transactionId)
  )
    return false;
  const delivered = send("purchase", {
    transaction_id: purchase.transactionId,
    value: purchase.value,
    tax: purchase.tax,
    currency: purchase.currency,
    items: [
      {
        item_id: purchase.plan,
        item_name:
          purchase.plan === "monthly"
            ? "Unlimited monthly"
            : "One verification check",
        price: purchase.value,
        quantity: 1,
      },
    ],
  });
  if (delivered) {
    sent.add(purchase.transactionId);
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...previous, purchase.transactionId].slice(-100)),
      );
    } catch {
      /* GA4 also deduplicates by transaction_id. */
    }
  }
  return delivered;
}
