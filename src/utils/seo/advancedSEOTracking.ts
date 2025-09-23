/**
 * Advanced SEO Tracking Utilities
 * Provides cutting-edge SEO analytics beyond standard implementations
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Track competitor analysis and ranking data
 */
export const trackCompetitorAnalysis = (competitors: string[], currentRanking?: number): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'competitor_analysis', {
    event_category: 'SEO_Intelligence',
    competitors_count: competitors.length,
    competitor_domains: competitors.join(','),
    current_ranking: currentRanking || 0,
    analysis_date: new Date().toISOString(),
    page_path: window.location.pathname
  });
};

/**
 * Track SERP feature presence and performance
 */
export const trackSERPFeatures = (features: string[]): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'serp_features', {
    event_category: 'SEO_Intelligence', 
    event_action: 'SERP_Feature_Tracking',
    featured_snippets: features.includes('featured_snippet'),
    people_also_ask: features.includes('people_also_ask'),
    local_pack: features.includes('local_pack'),
    knowledge_panel: features.includes('knowledge_panel'),
    image_pack: features.includes('image_pack'),
    video_carousel: features.includes('video_carousel'),
    features_count: features.length,
    page_path: window.location.pathname
  });
};

/**
 * Track content freshness and update frequency
 */
export const trackContentFreshness = (lastModified: string, updateFrequency: 'daily' | 'weekly' | 'monthly' | 'quarterly'): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const daysSinceUpdate = Math.floor((Date.now() - new Date(lastModified).getTime()) / (1000 * 60 * 60 * 24));

  window.gtag('event', 'content_freshness', {
    event_category: 'SEO_Content_Quality',
    days_since_update: daysSinceUpdate,
    update_frequency: updateFrequency,
    content_age_score: daysSinceUpdate < 30 ? 'fresh' : daysSinceUpdate < 90 ? 'moderate' : 'stale',
    last_modified: lastModified,
    page_path: window.location.pathname
  });
};

/**
 * Track semantic SEO and entity recognition
 */
export const trackSemanticSEO = (entities: string[], topicClusters: string[]): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'semantic_seo', {
    event_category: 'SEO_Semantic',
    entities_count: entities.length,
    topic_clusters_count: topicClusters.length,
    primary_entities: entities.slice(0, 5).join(','),
    semantic_richness: entities.length > 10 ? 'high' : entities.length > 5 ? 'medium' : 'low',
    page_path: window.location.pathname
  });
};

/**
 * Track technical SEO health metrics
 */
export const trackTechnicalSEOHealth = (): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  // Check technical SEO factors
  const hasCanonical = !!document.querySelector('link[rel="canonical"]');
  const hasRobotsMeta = !!document.querySelector('meta[name="robots"]');
  const hasViewport = !!document.querySelector('meta[name="viewport"]');
  const hasCharset = !!document.querySelector('meta[charset]');
  const hasLangAttribute = !!document.documentElement.lang;
  const hasSSL = window.location.protocol === 'https:';
  
  // Calculate technical SEO score
  const factors = [hasCanonical, hasRobotsMeta, hasViewport, hasCharset, hasLangAttribute, hasSSL];
  const technicalScore = Math.round((factors.filter(Boolean).length / factors.length) * 100);

  window.gtag('event', 'technical_seo_health', {
    event_category: 'SEO_Technical',
    technical_score: technicalScore,
    has_canonical: hasCanonical,
    has_robots_meta: hasRobotsMeta,
    has_viewport: hasViewport,
    has_charset: hasCharset,
    has_lang_attribute: hasLangAttribute,
    has_ssl: hasSSL,
    page_path: window.location.pathname
  });
};

/**
 * Track voice search optimization
 */
export const trackVoiceSearchOptimization = (questionWords: string[], conversationalPhrases: string[]): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'voice_search_optimization', {
    event_category: 'SEO_Voice_Search',
    question_words_count: questionWords.length,
    conversational_phrases_count: conversationalPhrases.length,
    voice_search_readiness: (questionWords.length + conversationalPhrases.length) > 10 ? 'high' : 'low',
    primary_question_words: questionWords.slice(0, 3).join(','),
    page_path: window.location.pathname
  });
};

/**
 * Track mobile-first indexing readiness
 */
export const trackMobileFirstReadiness = (): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const isMobile = window.innerWidth <= 768;
  const hasResponsiveImages = document.querySelectorAll('img[srcset]').length > 0;
  const hasViewportMeta = !!document.querySelector('meta[name="viewport"]');
  const hasFastLoading = performance.timing.loadEventEnd - performance.timing.navigationStart < 3000;
  
  window.gtag('event', 'mobile_first_readiness', {
    event_category: 'SEO_Mobile',
    is_mobile_device: isMobile,
    has_responsive_images: hasResponsiveImages,
    has_viewport_meta: hasViewportMeta,
    has_fast_loading: hasFastLoading,
    mobile_score: [hasResponsiveImages, hasViewportMeta, hasFastLoading].filter(Boolean).length * 33.33,
    page_path: window.location.pathname
  });
};

/**
 * Track local SEO signals
 */
export const trackLocalSEOSignals = (businessInfo: {
  name?: string;
  address?: string;
  phone?: string;
  hours?: string;
}): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const hasNAP = !!(businessInfo.name && businessInfo.address && businessInfo.phone);
  const hasStructuredData = !!document.querySelector('script[type="application/ld+json"]');
  
  window.gtag('event', 'local_seo_signals', {
    event_category: 'SEO_Local',
    has_nap: hasNAP, // Name, Address, Phone
    has_business_hours: !!businessInfo.hours,
    has_structured_data: hasStructuredData,
    local_seo_score: [hasNAP, !!businessInfo.hours, hasStructuredData].filter(Boolean).length * 33.33,
    page_path: window.location.pathname
  });
};

/**
 * Track E-A-T (Expertise, Authoritativeness, Trustworthiness) signals
 */
export const trackEATSignals = (signals: {
  hasAuthorInfo?: boolean;
  hasAboutPage?: boolean;
  hasContactInfo?: boolean;
  hasSSL?: boolean;
  hasPrivacyPolicy?: boolean;
  hasReviews?: boolean;
}): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const eatScore = Object.values(signals).filter(Boolean).length * (100 / Object.keys(signals).length);

  window.gtag('event', 'eat_signals', {
    event_category: 'SEO_EAT',
    eat_score: Math.round(eatScore),
    has_author_info: signals.hasAuthorInfo,
    has_about_page: signals.hasAboutPage,
    has_contact_info: signals.hasContactInfo,
    has_ssl: signals.hasSSL,
    has_privacy_policy: signals.hasPrivacyPolicy,
    has_reviews: signals.hasReviews,
    trust_level: eatScore > 80 ? 'high' : eatScore > 50 ? 'medium' : 'low',
    page_path: window.location.pathname
  });
};

/**
 * Track page experience signals (Core Web Vitals + UX)
 */
export const trackPageExperienceSignals = (vitals: {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
}): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const lcpGood = (vitals.lcp || 0) <= 2500;
  const fidGood = (vitals.fid || 0) <= 100;
  const clsGood = (vitals.cls || 0) <= 0.1;
  
  const pageExperienceScore = [lcpGood, fidGood, clsGood].filter(Boolean).length * 33.33;

  window.gtag('event', 'page_experience_signals', {
    event_category: 'SEO_Page_Experience',
    page_experience_score: Math.round(pageExperienceScore),
    lcp_rating: lcpGood ? 'good' : 'needs_improvement',
    fid_rating: fidGood ? 'good' : 'needs_improvement', 
    cls_rating: clsGood ? 'good' : 'needs_improvement',
    overall_rating: pageExperienceScore > 66 ? 'good' : pageExperienceScore > 33 ? 'needs_improvement' : 'poor',
    page_path: window.location.pathname
  });
};