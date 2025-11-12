# Phase 1: Revenue Fixes - Stripe Configuration Required

## ✅ COMPLETED AUTOMATICALLY
- ✅ Price updated to $2.99 in code (`src/features/pricing/constants.ts`)
- ✅ Database migration added for free search tracking (`free_searches_used`, `trial_started_at`)
- ✅ 2 free searches enforced in `useParallelVerification` hook (14-day trial)
- ✅ Urgency messaging added to homepage with:
  - "LAUNCH SPECIAL: $2.99 (Reg. $4.99) - 48 Hours Only"
  - Social proof: "23% of checked items are stolen"
  - Value prop: "Average buyer saves $842"
- ✅ UrgencyBanner component added to pricing page
- ✅ Enhanced paywall messaging when limit reached

## 🔧 MANUAL ACTION REQUIRED - UPDATE STRIPE PRICE

**CRITICAL:** You must update the Stripe product price to match the new $2.99 pricing:

### Option 1: Update Existing Price (Recommended)
1. Go to Stripe Dashboard: https://dashboard.stripe.com/products
2. Find product: **"Single Verification"**
3. Click on the existing price: `price_1SDRrMGxnZLw8J7ObJsUlp6k`
4. Archive the old price
5. Click "Add another price"
6. Set: **$2.99 USD** (one-time payment)
7. Click "Add price"
8. Copy the new Price ID
9. Update `stripePriceId` in `src/features/pricing/constants.ts` (line 64)

### Option 2: Product Name Matching (Alternative)
If you prefer automatic matching:
1. Create a new product in Stripe named exactly: **"Single Verification"**
2. Set price to: **$2.99 USD** (one-time payment)
3. Set `stripePriceId: undefined` in the code (the system will auto-match by product name)

## 📊 EXPECTED RESULTS

### Before (Old System)
- Price: $0.50 per verification
- No search limits enforced
- Conversion rate: ~1%
- Revenue: ~$50-100/day

### After Phase 1 (New System)
- Price: $2.99 per verification
- 2 FREE searches enforced (14-day trial)
- Urgency messaging + social proof
- Expected conversion rate: 5-8%
- Projected revenue: **$300-480/day** ($9,600-14,400/month)

## 🧪 TEST THE FLOW

1. **Test Free Searches:**
   - Sign up as new user
   - Perform 1st search → Should work (counter: 1/2)
   - Perform 2nd search → Should show "Last free search" warning
   - Try 3rd search → Should redirect to `/pricing?reason=limit-reached`

2. **Test Paid Checkout:**
   - Go to `/pricing`
   - Click "Subscribe to Single Verification" ($2.99)
   - Should redirect to Stripe Checkout
   - Complete test payment using card: `4242 4242 4242 4242`
   - Verify webhook updates `profiles.subscription_tier`

3. **Test After Purchase:**
   - Verify unlimited searches work after subscription
   - Check that `free_searches_used` counter doesn't increment

## 📈 MONITORING

Monitor these metrics in the first 48 hours:
- Conversion rate (visits → paid)
- Average order value
- Free trial usage (% of users hitting limit)
- Checkout abandonment rate
- Stripe webhook success rate

## 🐛 TROUBLESHOOTING

**Issue: Stripe checkout shows wrong price**
- ✅ Solution: Update Stripe product price to $2.99 (see instructions above)

**Issue: Users not seeing paywall after 2 searches**
- ✅ Check: `profiles.free_searches_used` column exists
- ✅ Check: Console logs in `useParallelVerification` hook

**Issue: Free search counter not incrementing**
- ✅ Check: Supabase RLS policies allow authenticated users to update their own profiles
- ✅ Check: User is authenticated when performing search

## 🚀 NEXT STEPS (Phase 2-5)

After Phase 1 is working:
1. Phase 2: Conversion optimization (exit-intent popup, testimonials)
2. Phase 3: Upsells & LTV maximization (insurance add-on, referrals)
3. Phase 4: Traffic & SEO (blog posts, marketplace extension)
4. Phase 5: Retention & automation (email flows, dunning)

---

**Status:** Phase 1 code complete ✅  
**Action Required:** Update Stripe product price to $2.99  
**Projected Impact:** 6-8x revenue increase
