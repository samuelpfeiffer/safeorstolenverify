export interface ListingData {
  title: string;
  description: string;
  price: number | null;
  sellerName: string | null;
  platform: string;
  listingUrl: string;
  imageCount: number;
  itemType: string;
}

export interface ScamFlag {
  type: string;
  severity: "info" | "warning" | "danger";
  title: string;
  description: string;
}

export interface ScamAnalysisResult {
  scamRiskScore: number;
  riskLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  flags: ScamFlag[];
  summary: string;
  recommendation: string;
  totalSignals: number;
}

const PRICE_THRESHOLDS: Record<string, { warn: number; danger: number; warnMsg: string; dangerMsg: string }> = {
  phone: { warn: 150, danger: 75, warnMsg: "Suspiciously Low Price — most used smartphones sell for $200–$800", dangerMsg: "Price Far Below Market — this is a strong scam indicator" },
  imei: { warn: 150, danger: 75, warnMsg: "Suspiciously Low Price — most used smartphones sell for $200–$800", dangerMsg: "Price Far Below Market — this is a strong scam indicator" },
  vehicle: { warn: 2000, danger: 800, warnMsg: "Suspiciously Low Price for any running vehicle", dangerMsg: "Price Far Below Market — potential title washing or fraud" },
  vin: { warn: 2000, danger: 800, warnMsg: "Suspiciously Low Price for any running vehicle", dangerMsg: "Price Far Below Market — potential title washing or fraud" },
  laptop: { warn: 100, danger: 50, warnMsg: "Suspiciously Low Price for a laptop", dangerMsg: "Price Far Below Market — likely defective, stolen, or fake listing" },
  macbook: { warn: 200, danger: 100, warnMsg: "Suspiciously Low MacBook Price", dangerMsg: "MacBook Price Far Below Market — strong scam indicator" },
  bicycle: { warn: 50, danger: 25, warnMsg: "Suspiciously Low Bicycle Price", dangerMsg: "Bicycle Price Far Below Market" },
  ebike: { warn: 200, danger: 100, warnMsg: "Suspiciously Low eBike Price", dangerMsg: "eBike Price Far Below Market — strong scam indicator" },
  firearm: { warn: 100, danger: 50, warnMsg: "Suspiciously Low — even damaged firearms hold value", dangerMsg: "Firearm Price Far Below Market" },
  electronics: { warn: 50, danger: 25, warnMsg: "Suspiciously Low Electronics Price", dangerMsg: "Electronics Price Far Below Market" },
  gaming: { warn: 50, danger: 25, warnMsg: "Suspiciously Low Gaming Console Price", dangerMsg: "Gaming Console Price Far Below Market" },
  appliance: { warn: 75, danger: 30, warnMsg: "Suspiciously Low Appliance Price", dangerMsg: "Appliance Price Far Below Market" },
};

const TEXT_FLAGS: { pattern: RegExp; severity: "info" | "warning" | "danger"; title: string; description: string }[] = [
  { pattern: /no\s*returns|all\s*sales?\s*final/i, severity: "warning", title: "No Returns Policy", description: "You have no recourse if item is defective" },
  { pattern: /cash\s*only|cash\s*app/i, severity: "warning", title: "Cash Only — No Payment Protection", description: "Cash payments offer zero buyer protection if scammed" },
  { pattern: /meet\s*(in|at)\s*(a\s*)?(parking\s*lot|gas\s*station|walmart)/i, severity: "warning", title: "Unsafe Meeting Location", description: "Meet at a police station instead for safety" },
  { pattern: /(must\s*sell|need\s*gone).*(today|asap|moving|desperate)/i, severity: "warning", title: "Urgency Pressure Tactics", description: "Scammers create artificial urgency to prevent you from thinking clearly" },
  { pattern: /(today|asap|moving|desperate).*(must\s*sell|need\s*gone)/i, severity: "warning", title: "Urgency Pressure Tactics", description: "Scammers create artificial urgency to prevent you from thinking clearly" },
  { pattern: /don'?t\s*text|call\s*only|whatsapp\s*only|telegram/i, severity: "warning", title: "Avoiding Platform Messaging", description: "Wants to take conversation off-platform where there's no record" },
  { pattern: /no\s*test|as\s*is|sold\s*as\s*is|no\s*refunds?/i, severity: "warning", title: "Seller Refusing Testing", description: "Legitimate sellers let you verify items before paying" },
  { pattern: /lost\s*receipt|no\s*receipt|no\s*box|no\s*original\s*packaging/i, severity: "info", title: "No Proof of Purchase", description: "May be legitimate but harder to verify ownership" },
  { pattern: /my\s*friend|selling\s*for\s*someone|not\s*the\s*original\s*owner|girlfriend'?s?|boyfriend'?s?|ex'?s?/i, severity: "warning", title: "Third-Party Seller", description: "Cannot verify ownership chain — higher risk of stolen goods" },
  { pattern: /western\s*union|wire\s*transfer|gift\s*card|bitcoin|crypto/i, severity: "danger", title: "Dangerous Payment Method", description: "These payments are irreversible and have zero buyer protection" },
  { pattern: /(zelle|venmo).*(friend|fam)/i, severity: "danger", title: "Dangerous Payment Method", description: "Zelle/Venmo Friends & Family payments are irreversible with no protection" },
  { pattern: /don'?t\s*call.*police|no\s*cops|off\s*the\s*books|no\s*paperwork/i, severity: "danger", title: "Seller Avoiding Documentation", description: "Strong indicator of stolen or illegal goods" },
  { pattern: /(slight\s*crack|small\s*issue|minor\s*problem)/i, severity: "warning", title: "Condition Downplaying", description: "May be hiding major defects — inspect thoroughly in person" },
  { pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i, severity: "warning", title: "Email in Listing", description: "May be trying to move transaction off-platform" },
];

export function analyzeListingForScams(listing: ListingData): ScamAnalysisResult {
  const flags: ScamFlag[] = [];
  const combined = `${listing.title} ${listing.description}`.toLowerCase();

  // Price analysis
  if (listing.price === null || listing.price === 0) {
    flags.push({ type: "price", severity: "info", title: "No Price Listed", description: "Ask seller for price before meeting" });
  } else {
    const itemKey = listing.title.toLowerCase().includes('macbook') ? 'macbook' :
      listing.itemType.toLowerCase().replace(/\s+/g, '');
    const thresholds = PRICE_THRESHOLDS[itemKey] || PRICE_THRESHOLDS.electronics;
    if (listing.price > 0 && listing.price < thresholds.danger) {
      flags.push({ type: "price", severity: "danger", title: "Price Far Below Market", description: thresholds.dangerMsg });
    } else if (listing.price > 0 && listing.price < thresholds.warn) {
      flags.push({ type: "price", severity: "warning", title: "Suspiciously Low Price", description: thresholds.warnMsg });
    }
  }

  // Text red flags
  for (const flag of TEXT_FLAGS) {
    if (flag.pattern.test(combined)) {
      flags.push({ type: "text", severity: flag.severity, title: flag.title, description: flag.description });
    }
  }

  // Description quality
  const wordCount = listing.description.trim().split(/\s+/).length;
  if (wordCount < 20 && listing.description.trim().length > 0) {
    flags.push({ type: "quality", severity: "info", title: "Very Short Description", description: "Legitimate sellers usually provide detail about condition, accessories, and history" });
  }

  const upperCount = (listing.description.match(/[A-Z]/g) || []).length;
  const letterCount = (listing.description.match(/[a-zA-Z]/g) || []).length;
  if (letterCount > 20 && upperCount / letterCount > 0.5) {
    flags.push({ type: "quality", severity: "info", title: "Excessive Capitalization", description: "Common in low-quality or scam listings" });
  }

  if ((listing.description.match(/!/g) || []).length >= 3) {
    flags.push({ type: "quality", severity: "info", title: "Aggressive Sales Language", description: "Multiple exclamation marks suggest pushy selling tactics" });
  }

  // Phone number in first 2 sentences
  const firstTwo = listing.description.split(/[.!?]/).slice(0, 2).join(' ');
  if (/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/.test(firstTwo)) {
    flags.push({ type: "contact", severity: "info", title: "Phone Number Prominently Displayed", description: "Could be phishing — use platform messaging instead" });
  }

  // Platform-specific
  const platform = listing.platform.toLowerCase();
  if (platform.includes('craigslist')) {
    flags.push({ type: "platform", severity: "info", title: "Craigslist Has No Buyer Protection", description: "All transactions are at your own risk" });
  }
  if (platform.includes('facebook') && /shipping/i.test(combined)) {
    flags.push({ type: "platform", severity: "warning", title: "Shipping on Facebook Marketplace", description: "Shipping has higher scam rates than local pickup" });
  }
  if (platform.includes('offerup') && listing.price !== null && listing.price < 100 && /phone|laptop|console|gaming|electronic/i.test(listing.itemType)) {
    flags.push({ type: "platform", severity: "info", title: "Low-Price Electronics on OfferUp", description: "Low-price electronics on OfferUp have elevated scam rates" });
  }

  // Image flags
  if (listing.imageCount === 0) {
    flags.push({ type: "images", severity: "danger", title: "No Photos — Major Red Flag", description: "Never buy without seeing photos of the actual item with serial number visible" });
  } else if (listing.imageCount === 1) {
    flags.push({ type: "images", severity: "warning", title: "Only One Photo", description: "Ask for multiple angles and photos of serial number/IMEI sticker" });
  }

  // Scoring
  let score = 0;
  for (const f of flags) {
    if (f.severity === "info") score += 3;
    else if (f.severity === "warning") score += 10;
    else if (f.severity === "danger") score += 25;
  }
  score = Math.min(score, 100);

  const riskLevel: ScamAnalysisResult["riskLevel"] =
    score <= 15 ? "LOW" : score <= 40 ? "MEDIUM" : score <= 70 ? "HIGH" : "CRITICAL";

  const summaryMap = {
    LOW: "This listing shows minimal red flags. Standard marketplace safety precautions apply. Always verify the item in person before paying.",
    MEDIUM: "This listing has some concerning signals. We recommend meeting in a public place, testing the item thoroughly, and using a protected payment method.",
    HIGH: "This listing has multiple red flags commonly associated with marketplace scams. Exercise extreme caution. Do not send money before seeing and testing the item in person.",
    CRITICAL: "This listing shows strong indicators of fraud. We strongly recommend avoiding this listing. If you proceed, meet at a police station, bring someone with you, and use only protected payment methods.",
  };

  const recommendationMap = {
    LOW: "PROCEED WITH CONFIDENCE",
    MEDIUM: "PROCEED WITH CAUTION",
    HIGH: "HIGH RISK — VERIFY EVERYTHING IN PERSON",
    CRITICAL: "AVOID THIS LISTING",
  };

  return {
    scamRiskScore: score,
    riskLevel,
    flags,
    summary: summaryMap[riskLevel],
    recommendation: recommendationMap[riskLevel],
    totalSignals: flags.length,
  };
}
