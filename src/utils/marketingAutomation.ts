// Marketing Automation Utilities for HubSpot + Zapier Integration

interface MarketingEvent {
  email?: string;
  name?: string;
  event: string;
  referrer?: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

// Zapier Webhook URLs - Replace with your actual webhook URLs
const ZAPIER_WEBHOOKS = {
  signup: 'https://hooks.zapier.com/hooks/catch/YOUR_ZAPIER_ID/signup',
  purchase: 'https://hooks.zapier.com/hooks/catch/YOUR_ZAPIER_ID/purchase',
  verification: 'https://hooks.zapier.com/hooks/catch/YOUR_ZAPIER_ID/verification',
  engagement: 'https://hooks.zapier.com/hooks/catch/YOUR_ZAPIER_ID/engagement'
};

// Send event to Zapier webhook
export const sendToZapier = async (eventType: keyof typeof ZAPIER_WEBHOOKS, data: MarketingEvent) => {
  const webhookUrl = ZAPIER_WEBHOOKS[eventType];
  
  if (!webhookUrl || webhookUrl.includes('YOUR_ZAPIER_ID')) {
    console.warn(`Zapier webhook not configured for event: ${eventType}`);
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        source: 'SafeOrStolen.com',
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(`Event ${eventType} sent to Zapier successfully`);
  } catch (error) {
    console.error(`Failed to send ${eventType} event to Zapier:`, error);
  }
};

// Track user signup
export const trackSignup = (email: string, name?: string) => {
  sendToZapier('signup', {
    email,
    name,
    event: 'signup',
    referrer: document.referrer || 'direct',
    timestamp: new Date().toISOString()
  });
};

// Track purchase/subscription
export const trackPurchase = (email: string, plan: string, amount?: number) => {
  sendToZapier('purchase', {
    email,
    event: 'purchase',
    referrer: document.referrer || 'direct',
    timestamp: new Date().toISOString(),
    metadata: {
      plan,
      amount
    }
  });
};

// Track item verification
export const trackVerification = (email?: string, itemType?: string) => {
  sendToZapier('verification', {
    email,
    event: 'verification',
    referrer: document.referrer || 'direct',
    timestamp: new Date().toISOString(),
    metadata: {
      itemType,
      anonymous: !email
    }
  });
};

// Track general engagement
export const trackEngagement = (event: string, email?: string, metadata?: Record<string, any>) => {
  sendToZapier('engagement', {
    email,
    event,
    referrer: document.referrer || 'direct',
    timestamp: new Date().toISOString(),
    metadata
  });
};

// HubSpot Contact Creation (using HubSpot API)
export const createHubSpotContact = async (contactData: {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  source?: string;
}) => {
  // Note: This requires HubSpot API key to be configured
  // For now, this will be handled through Zapier webhooks
  console.log('Contact data ready for HubSpot:', contactData);
  
  // Track the contact creation event
  trackEngagement('contact_created', contactData.email, contactData);
};