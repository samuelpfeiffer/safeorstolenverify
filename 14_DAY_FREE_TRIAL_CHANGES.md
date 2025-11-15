# 2 Free Searches for 14 Days - Complete Changes

## Overview
Users get **2 free verifications valid for 14 days** after signup. After that, they must choose a subscription and pay.

## Files Modified

### 1. Hook Updates (Trial Logic)
- ✅ `src/hooks/useTrialStatus.ts` - Changed `TRIAL_CHECK_LIMIT` from 999 to 2
- ✅ `src/hooks/useSearchLimits.ts` - Maintains 2 searches during 14-day trial period
- ✅ `src/hooks/useFreemiumFlow.ts` - Changed `FREE_SEARCH_LIMIT` from 999 to 2

### 2. Constants & Configuration
- ✅ `src/features/pricing/constants.ts` - Free tier shows "2 verifications for 14 days"
- ✅ `src/utils/configurationUtils.ts` - Changed default config from 999 to 2 searches

### 3. UI/UX Updates
- ✅ `src/components/ConversionOptimizedPricing.tsx`:
  - Main heading: "Start with 2 free verifications • Valid for 14 days"
- ✅ `src/components/hero/SearchLimitDisplay.tsx`:
  - Updated to show "2 free verifications"

## Key Changes

### Before:
- Unlimited verifications for 14 days
- 999 search limit

### After:
- **2 free verifications**
- Valid for 14 days
- Must subscribe after trial expires or searches exhausted
- No credit card required for trial

## Trial Logic
1. User signs up → Trial starts automatically
2. Trial period: 14 days from account creation
3. Checks during trial: **2 free verifications**
4. After 14 days OR 2 searches: Must subscribe or pay per use
5. Trial expiration: Time-based (14 days) AND usage-based (2 searches)

## User Flow
1. **New user** → Sign up → Get 2 free verifications for 14 days
2. **During trial** → Can use up to 2 verifications
3. **After trial/searches** → Choose subscription or pay-per-use ($2.99/check)

## Subscription Options
- **Starter Plan**: $4.99/month - 15 verifications
- **Personal Plan**: $9.99/month - 50 verifications (Most Popular)
- **Professional Plan**: $29.99/month - Unlimited verifications
- **Enterprise Plan**: $99/month - Unlimited with white-label
- **Pay-Per-Use**: $2.99 per verification (no subscription)

## Benefits
- Clear value proposition
- Forces conversion after trial
- Multiple price points for different user segments
- Competitive advantage with free trial
