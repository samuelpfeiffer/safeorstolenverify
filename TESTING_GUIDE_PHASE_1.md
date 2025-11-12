# Phase 1 Complete Flow Testing Guide

## 🎯 Testing Objective
Verify the complete user journey from signup → free searches → paywall → paid checkout works perfectly.

---

## ✅ TEST 1: New User Signup

### Steps:
1. **Open incognito/private browser window** (ensures fresh session)
2. Navigate to: `https://safeorstolen.com/`
3. Click **"Get Started Free"** or navigate to `/auth`
4. Fill out signup form:
   - Email: `test+phase1@example.com` (use + trick for multiple tests)
   - Password: `TestPass123!`
5. Click **"Sign Up"**

### Expected Results:
✅ Success message appears  
✅ Automatically redirected to homepage or `/verify`  
✅ User is logged in (check user menu in top-right)  
✅ No errors in browser console (press F12)

### Database Check:
```sql
-- Run in Supabase SQL Editor
SELECT id, email, free_searches_used, trial_started_at, subscription_tier
FROM profiles
WHERE email = 'test+phase1@example.com';
```
**Expected:**
- `free_searches_used`: 0
- `trial_started_at`: NULL (will be set on first search)
- `subscription_tier`: NULL or 'free'

### Troubleshooting:
❌ **"Email already registered"**: Use different email or add +1, +2 to test email  
❌ **Signup hangs**: Check Supabase Auth logs at https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/auth/users  
❌ **"Confirm email" message**: Disable email confirmation in Supabase → Authentication → Settings

---

## ✅ TEST 2: First Free Search (1/2)

### Steps:
1. Navigate to `/verify` or use homepage search
2. Enter test serial number: `123456789012345`
3. Select item type: **Phone**
4. Click **"Search Free"** or verify button

### Expected Results:
✅ Search executes successfully  
✅ Results page shows verification status  
✅ No paywall appears  
✅ Console shows: `[VerificationService] Starting verification`  
✅ No toast about "last free search" yet

### Database Check:
```sql
SELECT id, email, free_searches_used, trial_started_at
FROM profiles
WHERE email = 'test+phase1@example.com';
```
**Expected:**
- `free_searches_used`: 1
- `trial_started_at`: NOW() (timestamp of first search)

### Verify in `verification_searches` table:
```sql
SELECT user_id, serial_number, verification_status, created_at
FROM verification_searches
WHERE user_id = (SELECT id FROM profiles WHERE email = 'test+phase1@example.com')
ORDER BY created_at DESC
LIMIT 1;
```
**Expected:**
- Record exists with serial number `123456789012345`

### Troubleshooting:
❌ **Counter didn't increment**: Check console for errors in `useParallelVerification`  
❌ **trial_started_at is NULL**: RLS policy might be blocking update  
❌ **Search doesn't work**: Check edge function logs

---

## ✅ TEST 3: Second Free Search (2/2) - Last Warning

### Steps:
1. Navigate back to `/verify`
2. Enter different serial: `987654321098765`
3. Select item type: **Vehicle**
4. Click verify button

### Expected Results:
✅ Search executes successfully  
✅ **Toast appears:** "Last Free Search - This is your final free search. Upgrade to continue protecting yourself."  
✅ Results page shows verification  
✅ No paywall redirect yet (it happens on NEXT attempt)

### Database Check:
```sql
SELECT free_searches_used, trial_started_at
FROM profiles
WHERE email = 'test+phase1@example.com';
```
**Expected:**
- `free_searches_used`: 2
- `trial_started_at`: (earlier timestamp, unchanged)

### Browser Console:
Look for: `[useParallelVerification] Last free search warning`

### Troubleshooting:
❌ **No toast warning**: Check toast configuration  
❌ **Counter shows wrong number**: Refresh and check DB directly

---

## ✅ TEST 4: Third Search - Hit Paywall 🔒

### Steps:
1. Navigate to `/verify` again
2. Enter another serial: `111222333444555`
3. Click verify button

### Expected Results:
✅ **Toast appears:** "Free Searches Used - You've used your 2 free searches. Upgrade to verify more items."  
✅ **Immediately redirected to:** `/pricing?reason=limit-reached`  
✅ Search does NOT execute  
✅ Page shows enhanced paywall message:
   - "🔒 You've Used Your 2 Free Searches"
   - "Don't risk buying stolen goods! Upgrade now for unlimited verifications"
   - "⚠️ 87 stolen items found in the last 24 hours"

### Database Check:
```sql
SELECT free_searches_used
FROM profiles
WHERE email = 'test+phase1@example.com';
```
**Expected:**
- `free_searches_used`: Still 2 (search was blocked)

### Verify in `verification_searches`:
```sql
SELECT COUNT(*) as total_searches
FROM verification_searches
WHERE user_id = (SELECT id FROM profiles WHERE email = 'test+phase1@example.com');
```
**Expected:**
- `total_searches`: 2 (third search was blocked)

### Troubleshooting:
❌ **Search still works**: Check `useParallelVerification` logic  
❌ **No redirect**: Check route validator configuration  
❌ **Wrong URL parameter**: Should be `?reason=limit-reached`

---

## ✅ TEST 5: View Pricing Page with Urgency Messaging

### Steps:
1. You should already be on `/pricing?reason=limit-reached`
2. Observe the page layout

### Expected Results:
✅ **Top banner** shows:
   - "🔒 You've Used Your 2 Free Searches"
   - "Don't risk buying stolen goods! Upgrade now"
   - "⚠️ 87 stolen items found in the last 24 hours"
   
✅ **UrgencyBanner** appears with:
   - "🔥 LIMITED TIME OFFER"
   - "Launch Special: $2.99 per check (Regular $4.99)"
   - Countdown timer: "47:23:15"
   - Social proof boxes:
     - "1,247 Verified today"
     - "87 Stolen items found (24hrs)"
     - "💰 $842 Avg. buyer saves"
   
✅ **Guarantee section**:
   - "✅ 100% Money-Back Guarantee if Item is Stolen"
   - "✅ Instant Results or Full Refund"

✅ **Pricing cards** show:
   - Single Verification: **$2.99** (not $0.50)
   - Personal Plan: $9.99/mo
   - Professional Plan: $29.99/mo

### Troubleshooting:
❌ **Still shows $0.50**: Clear browser cache or hard refresh (Ctrl+Shift+R)  
❌ **No urgency banner**: Check component import in `PricingPage.tsx`

---

## ✅ TEST 6: Stripe Checkout - Single Verification ($2.99)

### Steps:
1. On pricing page, find **"Single Verification"** card
2. Click **"Subscribe to Single Verification"** button
3. Should redirect to `/checkout-redirect?planName=Single+Verification&isSubscription=false&priceId=price_1SSVqkGxnZLw8J7O3GwCyKRn`

### Expected Results on Checkout Redirect Page:
✅ Shows loading spinner  
✅ Message: "Setting up your checkout session..."  
✅ **Within 3-5 seconds**, redirects to Stripe Checkout page

### Stripe Checkout Page Expected Elements:
✅ Stripe logo and secure checkout UI  
✅ Product name: "Single Verification"  
✅ **Price: $2.99 USD** (if you updated Stripe - see instructions below)  
✅ Email field (pre-filled with user email)  
✅ Card payment form

### ⚠️ CRITICAL: If Price Shows $0.50
This means you haven't updated the Stripe product price yet. Follow these steps:

#### Update Stripe Price (REQUIRED):
1. Go to: https://dashboard.stripe.com/test/products
2. Find product: **"Single Verification"**
3. Current price: $0.50 → Archive it
4. Click **"Add another price"**
5. Enter: **$2.99**
6. Set as one-time payment
7. Click "Add price"
8. Copy new Price ID (starts with `price_`)
9. Update in code: `src/features/pricing/constants.ts` line 64

### Test Card Details:
Use Stripe test cards:
```
Card Number: 4242 4242 4242 4242
Expiry: Any future date (e.g., 12/25)
CVC: Any 3 digits (e.g., 123)
ZIP: Any 5 digits (e.g., 12345)
```

### Complete the Payment:
1. Enter test card details
2. Click **"Pay $2.99"** (or $0.50 if not updated)
3. Should process within 2-3 seconds

### Expected After Payment:
✅ Redirects to success page or homepage  
✅ Toast message: "Payment successful"

### Troubleshooting:
❌ **Stuck on "Setting up checkout"**: Check edge function logs  
❌ **"No checkout URL received"**: Check create-checkout function  
❌ **Stripe shows error**: Check Stripe dashboard for API errors  
❌ **Payment fails**: Use correct test card (4242...)

---

## ✅ TEST 7: Verify Webhook Processing

### Steps:
1. After completing Stripe payment, wait 5-10 seconds
2. Check Supabase tables

### Database Checks:

#### Check `purchases` table:
```sql
SELECT id, user_id, stripe_payment_intent_id, amount, status, created_at
FROM purchases
WHERE user_id = (SELECT id FROM profiles WHERE email = 'test+phase1@example.com')
ORDER BY created_at DESC
LIMIT 1;
```
**Expected:**
- Record exists
- `amount`: 299 (cents)
- `status`: 'completed'
- `stripe_payment_intent_id`: starts with `pi_`

#### Check `profiles` subscription update:
```sql
SELECT subscription_tier, subscription_status, stripe_customer_id
FROM profiles
WHERE email = 'test+phase1@example.com';
```
**Expected for one-time purchase:**
- `subscription_tier`: May remain NULL or 'free' (one-time purchases don't change tier)
- `stripe_customer_id`: Set to `cus_...`

#### Check webhook events:
```sql
SELECT event_type, processed, created_at
FROM stripe_webhook_events
WHERE event_type = 'checkout.session.completed'
ORDER BY created_at DESC
LIMIT 3;
```
**Expected:**
- Event exists
- `processed`: true

### Troubleshooting:
❌ **No purchase record**: Check webhook logs in Supabase  
❌ **Webhook not processed**: Verify webhook secret is configured  
❌ **Status is 'pending'**: Webhook might still be processing, wait 30 seconds

---

## ✅ TEST 8: Unlimited Searches After Payment

### Steps:
1. Navigate to `/verify`
2. Enter serial number: `999888777666555`
3. Perform search

### Expected Results:
✅ Search works immediately  
✅ NO paywall redirect  
✅ NO limit warnings  
✅ Can perform unlimited additional searches

### Database Check:
```sql
SELECT free_searches_used
FROM profiles
WHERE email = 'test+phase1@example.com';
```
**Expected:**
- Counter may or may not increment (depends on subscription logic)
- User should NOT be blocked regardless

### Try Multiple Searches:
1. Perform 5+ searches in a row
2. None should be blocked
3. All should complete successfully

### Troubleshooting:
❌ **Still hitting paywall**: Check subscription_tier or purchase verification logic  
❌ **Counter blocking at 2**: Payment might not have updated profile correctly

---

## ✅ TEST 9: Trial Expiration (14-Day Limit)

### Manual Database Test:
```sql
-- Simulate expired trial (set trial start to 15 days ago)
UPDATE profiles
SET trial_started_at = NOW() - INTERVAL '15 days',
    free_searches_used = 1,
    subscription_tier = NULL
WHERE email = 'test+phase1@example.com';
```

### Steps:
1. Log in as the test user
2. Try to perform a search

### Expected Results:
✅ Toast: "Trial Expired - Your 14-day trial has ended. Upgrade to continue verifying items."  
✅ Redirects to: `/pricing?reason=trial-expired`  
✅ Search is blocked

### Reset for Further Testing:
```sql
UPDATE profiles
SET trial_started_at = NOW(),
    free_searches_used = 0
WHERE email = 'test+phase1@example.com';
```

---

## 🎯 Complete Testing Checklist

### Account Creation:
- [ ] New user can sign up
- [ ] User is automatically logged in
- [ ] Profile created in database
- [ ] free_searches_used = 0 initially

### Free Search Limits:
- [ ] First search works (counter: 1)
- [ ] Second search works with warning (counter: 2)
- [ ] Third search blocked with redirect
- [ ] trial_started_at timestamp set correctly

### Paywall Display:
- [ ] Redirects to `/pricing?reason=limit-reached`
- [ ] Enhanced paywall banner appears
- [ ] Urgency messaging visible
- [ ] Pricing shows $2.99 (not $0.50)

### Stripe Checkout:
- [ ] Checkout redirect page works
- [ ] Stripe hosted page loads
- [ ] Price correct ($2.99)
- [ ] Test payment completes

### Webhook Processing:
- [ ] Purchase record created
- [ ] Webhook event logged
- [ ] Profile updated
- [ ] Processes within 10 seconds

### Post-Purchase:
- [ ] Unlimited searches work
- [ ] No more paywalls
- [ ] Search history tracked
- [ ] User can verify items freely

### Edge Cases:
- [ ] 14-day trial expiration works
- [ ] Multiple users don't interfere
- [ ] Logout/login preserves state
- [ ] Browser refresh maintains session

---

## 📊 Success Metrics to Monitor

After testing is complete, monitor these over 24-48 hours:

### Conversion Funnel:
```
Homepage Visits → Signups → Free Searches → Hit Paywall → Paid Conversion
```

### Key Metrics:
- **Signup Rate**: Visits to signups (target: 10-15%)
- **Free Search Usage**: % hitting 2-search limit (target: 60-80%)
- **Paywall Conversion**: Paywall views to payment (target: 5-8%)
- **Revenue Per User**: Average $2.99 per conversion

### Check Analytics:
```sql
-- Today's signups
SELECT COUNT(*) FROM profiles WHERE created_at >= CURRENT_DATE;

-- Today's searches
SELECT COUNT(*) FROM verification_searches WHERE created_at >= CURRENT_DATE;

-- Today's purchases
SELECT COUNT(*), SUM(amount)/100 as total_revenue 
FROM purchases WHERE created_at >= CURRENT_DATE;
```

---

## 🐛 Common Issues & Solutions

### Issue: Search counter doesn't increment
**Solution:** Check RLS policies allow authenticated users to update profiles:
```sql
-- Run in Supabase SQL Editor
SELECT * FROM pg_policies WHERE tablename = 'profiles' AND policyname LIKE '%update%';
```

### Issue: Stripe shows $0.50 instead of $2.99
**Solution:** Update Stripe product price (see TEST 6 instructions)

### Issue: Webhook doesn't process
**Solution:** 
1. Check webhook secret is configured
2. Check edge function logs: https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/functions
3. Verify webhook URL in Stripe dashboard

### Issue: User still blocked after payment
**Solution:** Check payment was recorded and subscription_tier updated:
```sql
SELECT * FROM purchases WHERE user_id = (SELECT id FROM auth.users WHERE email = 'test+phase1@example.com');
```

---

## 🚀 Next Steps After Testing

Once all tests pass:
1. ✅ Update Stripe product to $2.99 (if not done)
2. ✅ Monitor conversion rates for 48 hours
3. ✅ Collect user feedback
4. ✅ Proceed to Phase 2 (conversion optimization)

---

**Testing Status:** Ready for manual testing  
**Estimated Time:** 15-20 minutes for complete flow  
**Required:** Test credit card (4242 4242 4242 4242)
