/**
 * AD DISTRIBUTION MAP
 * 
 * This file documents where each paranoia ad appears across the site
 * to ensure strategic distribution and prevent bunching
 * 
 * HOMEPAGE (/):
 * - Family Protection Ad (large) - after AppDownloadSection
 * 
 * PROBLEM PAGE (/problem):
 * - Devil Deal Ad (large) - between HeroSection and SolutionSection
 * 
 * SERVICES PAGE (/services):
 * - Handshake Confidence Ad (medium) - middle of services grid
 * 
 * HOW IT WORKS PAGE (/how-it-works):
 * - Family Protection Ad (medium) - before strategic ad placement
 * 
 * CHECK PHONE PAGE (/check-phone):
 * - Running Deal Ad (small) - after How It Works section
 * 
 * CHECK CAR PAGE (/check-car):
 * - Devil Deal Ad (small) - after How It Works section
 * 
 * ABOUT PAGE (/about):
 * - Handshake Confidence Ad (medium) - after Success Stories
 * 
 * FIREARMS CHECK PAGE (/check-firearms):
 * - Firearm Check Ad (large) - before firearm verification ad
 * 
 * BUYER GUIDE PAGE (/buyer-guide):
 * - Family Protection Ad (medium) - before trust-building ad
 * 
 * FAQ PAGE (/faq):
 * - Running Deal Ad (medium) - before featured ad
 * 
 * PRICING PAGE (/pricing):
 * - Devil Deal Ad (large) - after pricing plans
 * 
 * DISTRIBUTION STRATEGY:
 * - Each page has 1 paranoia ad + 1 contextual ad (if relevant)
 * - Ads are spaced throughout the user journey
 * - Different ads rotate to prevent banner blindness
 * - Large ads on high-intent pages (pricing, problem, firearms)
 * - Small ads on functional pages (check phone, check car)
 * - Medium ads on educational pages (about, buyer guide, FAQ)
 * 
 * PSYCHOLOGICAL TRIGGERS:
 * 1. Family Protection - Safety, duty to loved ones
 * 2. Running Deal - Urgency, fear of missing legitimate deals
 * 3. Devil Deal - Suspicion, "too good to be true" instinct
 * 4. Handshake Confidence - Trust, professionalism
 * 5. Firearm Check - Legal liability, serious consequences
 * 
 * SEO OPTIMIZATION:
 * - All ads include schema.org markup
 * - Hidden SEO text for search engines
 * - Proper alt text with keywords
 * - Social sharing enabled on all ads
 * 
 * VIRAL MARKETING:
 * - Share buttons appear on hover
 * - Download capability for spreading awareness
 * - Social meta tags for rich previews
 * - Engagement tracking for optimization
 */

export const AD_DISTRIBUTION_CONFIG = {
  homepage: {
    ad: 'family-protection',
    size: 'large',
    placement: 'after-hero',
    rationale: 'First impression - protect your family'
  },
  problem: {
    ad: 'devil-deal',
    size: 'large',
    placement: 'mid-content',
    rationale: 'Reinforce the danger of too-good deals'
  },
  services: {
    ad: 'handshake-confidence',
    size: 'medium',
    placement: 'mid-grid',
    rationale: 'Build trust in our services'
  },
  howItWorks: {
    ad: 'family-protection',
    size: 'medium',
    placement: 'before-cta',
    rationale: 'Remind users of protection benefits'
  },
  checkPhone: {
    ad: 'running-deal',
    size: 'small',
    placement: 'after-tutorial',
    rationale: 'Don\'t miss good deals by skipping verification'
  },
  checkCar: {
    ad: 'devil-deal',
    size: 'small',
    placement: 'after-tutorial',
    rationale: 'Vehicle scams are expensive - verify first'
  },
  about: {
    ad: 'handshake-confidence',
    size: 'medium',
    placement: 'after-stories',
    rationale: 'Confidence after reading success stories'
  },
  firearms: {
    ad: 'firearm-check',
    size: 'large',
    placement: 'before-cta',
    rationale: 'Serious legal consequences for stolen firearms'
  },
  buyerGuide: {
    ad: 'family-protection',
    size: 'medium',
    placement: 'mid-guide',
    rationale: 'Educational content pairs with protection message'
  },
  faq: {
    ad: 'running-deal',
    size: 'medium',
    placement: 'end-content',
    rationale: 'After questions answered, motivate action'
  },
  pricing: {
    ad: 'devil-deal',
    size: 'large',
    placement: 'after-plans',
    rationale: 'High-intent page - reinforce value before purchase'
  }
} as const;
