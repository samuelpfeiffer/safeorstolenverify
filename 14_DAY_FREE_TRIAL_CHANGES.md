# 14-Day Free Trial - Complete Changes

## Overview
Changed the free tier from "2 free verifications" to **"Unlimited verifications for 14 days"**

## Files Modified

### 1. Hook Updates (Trial Logic)
- ✅ `src/hooks/useTrialStatus.ts` - Changed `TRIAL_CHECK_LIMIT` from 2 to 999
- ✅ `src/hooks/useEnhancedSearchLimits.ts` - Added trial period check, gives 999 searches during 14-day trial
- ✅ `src/hooks/useSearchLimits.ts` - Added trial period check, gives 999 searches during 14-day trial
- ✅ `src/hooks/useFreemiumFlow.ts` - Changed `FREE_SEARCH_LIMIT` from 2 to 999

### 2. Constants & Configuration
- ✅ `src/features/pricing/constants.ts` - Updated free tier to show "Unlimited verifications for 14 days"
- ✅ `src/utils/configurationUtils.ts` - Changed default config from 2 to 999 searches, updated rate limits

### 3. UI/UX Updates
- ✅ `src/components/ConversionOptimizedPricing.tsx`:
  - Main heading: "Start with unlimited verifications for 14 days"
  - Casual section description: "14-day free trial with unlimited checks"
  - Free tier card description: "Everything free for 14 days"

### 4. Toast Messages
- ✅ Updated "Sign Up Required" toast to mention "unlimited verifications for 14 days"

## Key Changes

### Before:
- 2 free verifications
- Valid for 14 days
- Limited trial experience

### After:
- **Unlimited verifications**
- Valid for 14 days
- Full feature access during trial
- No credit card required
- Trial only expires after 14 days (time-based, not usage-based)

## Trial Logic
1. User signs up → Trial starts automatically
2. Trial period: 14 days from account creation
3. Checks during trial: **Unlimited (999)**
4. After 14 days: Must subscribe or use pay-per-use
5. Trial expiration: Time-based only, not usage-based

## User Flow
1. **New user** → Sign up → Get 14-day unlimited trial
2. **During trial** → Unlimited verifications
3. **After trial** → Choose subscription or pay-per-use ($0.50/check)

## Benefits
- More generous trial period
- Better user experience
- Higher conversion potential
- Competitive advantage
- Clear value proposition
