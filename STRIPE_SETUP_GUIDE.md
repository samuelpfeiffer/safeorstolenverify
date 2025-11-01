# Stripe Setup Guide for SafeOrStolen.com

## ✅ Complete Checklist

Follow these steps in order to get Stripe payments working:

### 1. ✓ Secrets Already Configured
- [x] `STRIPE_SECRET_KEY` - Already set in Supabase
- [x] `STRIPE_WEBHOOK_SECRET` - Already set in Supabase
- [x] `SUPABASE_URL` - Already configured
- [x] `SUPABASE_SERVICE_ROLE_KEY` - Already configured

### 2. Create Products in Stripe Dashboard

Go to: https://dashboard.stripe.com/test/products (or /live/products for production)

Create these 5 products with EXACT names:

#### Product 1: Starter Plan ✅ (Already Created)
- **Name**: `Starter Plan` (exact match required)
- **Description**: 15 verifications per month for occasional buyers
- **Pricing**: 
  - Type: Recurring
  - Price: $4.99 USD
  - Billing period: Monthly
  - Currency: USD
- **Status**: ✅ Already exists in your Stripe account

#### Product 2: Personal Plan ✅ (Already Created)
- **Name**: `Personal Plan` (exact match required)
- **Description**: 50 verifications per month with trust badges
- **Pricing**: 
  - Type: Recurring
  - Price: $9.99 USD
  - Billing period: Monthly
  - Currency: USD
- **Status**: ✅ Already exists in your Stripe account

#### Product 3: Professional Plan ✅ (Already Created)
- **Name**: `Professional Plan` (exact match required)
- **Description**: Unlimited verifications with API access and bulk tools
- **Pricing**:
  - Type: Recurring
  - Price: $29.99 USD
  - Billing period: Monthly
  - Currency: USD
- **Status**: ✅ Already exists in your Stripe account

#### Product 4: Enterprise Plan ✅ (Already Created)
- **Name**: `Enterprise Plan` (exact match required)
- **Description**: Custom enterprise solution with dedicated support
- **Pricing**:
  - Type: Recurring
  - Price: $99.00 USD (or custom)
  - Billing period: Monthly
  - Currency: USD
- **Status**: ✅ Already exists in your Stripe account

#### Product 5: Single Verification ✅ (Already Created)
- **Name**: `Single Verification` (exact match required)
- **Description**: Pay per verification - no subscription required
- **Pricing**:
  - Type: One-time
  - Price: $0.50 USD
  - Currency: USD
- **Status**: ✅ Already exists in your Stripe account

### 3. Configure Webhook Endpoint

Go to: https://dashboard.stripe.com/test/webhooks (or /webhooks for production)

1. Click "Add endpoint"
2. Enter endpoint URL:
   ```
   https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/stripe-webhook
   ```
3. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. Click "Add endpoint"
5. Copy the "Signing secret" (starts with `whsec_`)
6. Verify it matches the `STRIPE_WEBHOOK_SECRET` in Supabase secrets

### 4. Test the Integration

#### Test Mode (Recommended First)
1. Use test card: `4242 4242 4242 4242`
2. Any future expiry date
3. Any CVC
4. Complete a test purchase
5. Check Stripe Dashboard → Events to verify webhook fired
6. Check your database to verify subscription was created

#### Live Mode (Production)
1. Switch Stripe dashboard to Live mode
2. Update `STRIPE_SECRET_KEY` in Supabase to your live key (starts with `sk_live_`)
3. Create products in Live mode (same names as test)
4. Configure webhook in Live mode (same URL)
5. Update `STRIPE_WEBHOOK_SECRET` to live webhook secret

## 🔍 How It Works

The system uses **automatic product name matching**:

1. User clicks "Subscribe to Personal Plan"
2. System sends request to `create-checkout` edge function
3. Edge function queries Stripe for all active products
4. Matches product by name: "Personal Plan"
5. Creates checkout session with matched price
6. Redirects user to Stripe Checkout
7. After payment, webhook updates database

## 🐛 Troubleshooting

### Error: "Unable to find matching Stripe product"
**Solution**: Verify product names in Stripe Dashboard exactly match:
- "Starter Plan"
- "Personal Plan"
- "Professional Plan"  
- "Enterprise Plan"
- "Single Verification"

### Error: "Webhook signature verification failed"
**Solution**: 
1. Check `STRIPE_WEBHOOK_SECRET` is correct
2. Copy it from Stripe Dashboard → Webhooks → [Your endpoint] → Signing secret
3. Update in Supabase: https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/settings/functions

### Error: "Invalid or missing Stripe secret key"
**Solution**:
1. Get key from Stripe Dashboard → Developers → API keys
2. Use test key: `sk_test_...` for testing
3. Use live key: `sk_live_...` for production
4. Update in Supabase secrets

### Payments work but subscriptions don't update database
**Solution**: Check webhook events:
1. Stripe Dashboard → Developers → Webhooks → [Your endpoint]
2. Click "View logs"
3. Check for failed attempts
4. Verify edge function logs: https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/functions/stripe-webhook/logs

## 📊 Database Tables Used

The webhook updates these tables:
- `profiles` - Subscription tier and limits
- `subscribers` - Active subscription status
- `purchases` - One-time payment records
- `checkout_sessions` - Checkout session tracking
- `stripe_webhook_events` - Idempotency tracking

## 🚀 Going Live

Before switching to production:
1. [ ] Test all payment flows in test mode
2. [ ] Verify webhooks are processing correctly
3. [ ] Create products in Stripe Live mode
4. [ ] Switch to live Stripe keys
5. [ ] Configure live webhook endpoint
6. [ ] Test one real payment with small amount
7. [ ] Monitor edge function logs for any errors

## 📞 Support

- Stripe Dashboard: https://dashboard.stripe.com
- Edge Function Logs: https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/functions
- Supabase Secrets: https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/settings/functions
