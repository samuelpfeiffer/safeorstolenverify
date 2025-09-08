# HubSpot + Zapier Marketing Automation Setup Guide

## Overview
This guide enables fully automated AI marketing (acting as your CMO) for SafeOrStolen.com using HubSpot and Zapier integrations.

## ✅ What's Already Implemented

### 1. HubSpot Tracking Component
- `HubSpotTracker` component added to main pages
- Automatic script loading with cleanup
- Ready for your HubSpot Portal ID

### 2. Marketing Automation Utils
- `marketingAutomation.ts` with Zapier webhook integration
- Event tracking for: signup, purchase, verification, engagement
- Automatic data formatting and error handling

### 3. HubSpot Forms Component
- `HubSpotForm` component for embedded forms
- Automatic form loading and submission handling
- Customizable targeting and styling

### 4. Marketing Automation Hook
- `useMarketingAutomation` hook for easy event tracking
- Page view tracking
- User context awareness

## 🔧 Setup Steps

### Step 1: Configure HubSpot Portal ID
1. Get your HubSpot Portal ID from: Settings > Account Setup > Account Defaults
2. Replace `YOUR_PORTAL_ID` in:
   - `src/pages/Index.tsx` (line 28)
   - `src/components/marketing/HubSpotTracker.tsx`
   - `src/components/marketing/HubSpotForm.tsx`

### Step 2: Set Up Zapier Webhooks
1. Create Zapier accounts for each event type:
   - Signup webhook
   - Purchase webhook  
   - Verification webhook
   - Engagement webhook

2. Replace webhook URLs in `src/utils/marketingAutomation.ts`:
```javascript
const ZAPIER_WEBHOOKS = {
  signup: 'https://hooks.zapier.com/hooks/catch/YOUR_ZAPIER_ID/signup',
  purchase: 'https://hooks.zapier.com/hooks/catch/YOUR_ZAPIER_ID/purchase',
  verification: 'https://hooks.zapier.com/hooks/catch/YOUR_ZAPIER_ID/verification',
  engagement: 'https://hooks.zapier.com/hooks/catch/YOUR_ZAPIER_ID/engagement'
};
```

### Step 3: Create HubSpot Forms (Optional)
1. In HubSpot: Marketing > Lead Capture > Forms
2. Create forms for different purposes (newsletter, demo request, etc.)
3. Use the `HubSpotForm` component with your form IDs

### Step 4: Set Up HubSpot Workflows
1. Marketing > Automation > Workflows
2. Create workflows triggered by:
   - New contact creation
   - Form submissions
   - Custom events from Zapier

### Step 5: Configure Zapier Actions
For each webhook, set up Zap actions:
1. **Trigger**: Webhooks by Zapier
2. **Actions**: 
   - Create/Update HubSpot Contact
   - Add to HubSpot List
   - Send Email via HubSpot
   - Create HubSpot Task/Deal

## 📊 Available Event Tracking

### Automatic Events
- Page views (all pages)
- User authentication status changes

### Manual Events (add to your components)
```javascript
const { trackUserSignup, trackUserPurchase, trackItemVerification, trackUserEngagement } = useMarketingAutomation();

// Track signup
trackUserSignup(email, name);

// Track purchase
trackUserPurchase(planName, amount);

// Track verification
trackItemVerification(itemType);

// Track custom engagement
trackUserEngagement('button_click', { buttonName: 'pricing-cta' });
```

## 🎯 Data Flow
1. User action occurs on SafeOrStolen.com
2. Event tracked via marketing automation utils
3. Data sent to Zapier webhook
4. Zapier forwards to HubSpot
5. HubSpot triggers automated workflows
6. Personalized marketing campaigns launch automatically

## 🔒 Security Notes
- All webhooks use HTTPS
- No sensitive data in client-side tracking
- HubSpot handles data privacy compliance
- User consent managed through site privacy policy

## 📈 Expected Results
- Automatic lead nurturing sequences
- Personalized email campaigns based on user behavior
- Segmented audiences for targeted marketing
- AI-generated content via HubSpot AI tools
- Complete sales funnel automation

## 🚀 Next Steps
1. Replace placeholder IDs with your actual credentials
2. Test webhook connections
3. Create initial HubSpot workflows
4. Monitor data flow in both platforms
5. Optimize campaigns based on performance data

## 📞 Support
- HubSpot Support: help.hubspot.com
- Zapier Support: zapier.com/help
- Implementation issues: Check browser console for errors