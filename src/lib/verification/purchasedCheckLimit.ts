/** Price version preserves older two-check packs while new $4.99 purchases grant one. */
export const UNIVERSAL_CHECK_PRICE_ID = 'price_1UaFfUGxnZLw8J7OhpJBpwCB';
export function purchasedCheckLimit(row: { stripe_price_id?: string | null }): number {
  return row.stripe_price_id === UNIVERSAL_CHECK_PRICE_ID ? 1 : 2;
}
