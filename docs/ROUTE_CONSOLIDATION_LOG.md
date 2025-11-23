# Route Consolidation Log

## Consolidation Strategy

This document tracks all route consolidations to maintain clean URL structure and prevent duplicate content issues.

---

## COMPLETED CONSOLIDATIONS

### Statistics Pages
**Primary Route:** `/stolen-goods-statistics-2025`
- ✅ `/stolen-goods-statistics-2024` → redirects to 2025
- ✅ `/statistics/stolen-goods-2024` → redirects to 2025
- ✅ `/statistics/stolen-goods` → redirects to 2025
- ✅ `/statistics` → redirects to 2025

**Reason:** Maintain single source of truth for statistics, always use current year

---

### Mobile App Routes
**Primary Routes:** 
- `/mobile-app` (main landing)
- `/app/download` (comprehensive download page)

**Redirects:**
- ✅ `/install-app` → `/app/download`
- ✅ `/download` → `/app/download`

**Reason:** Clearer hierarchy, better SEO

---

### Verification Pages
**Primary Route:** `/verify`

**Planned Redirects:**
- `/check-if-stolen` → `/verify`
- `/stolen-item-checker` → `/verify`
- `/verify-not-stolen` → `/verify`

**Reason:** Consolidate duplicate verification entry points

---

### Vehicle Pages
**Primary Route:** `/vin-checker`

**Existing Redirects:**
- ✅ `/check-stolen-car` → `/stolen-vehicle-database`
- ✅ `/search-stolen-vehicle` → `/stolen-vehicle-database`
- ✅ `/check-vehicle-stolen` → `/stolen-vehicle-database`

---

### Phone Pages
**Primary Route:** `/imei-checker`

**Existing Redirects:**
- ✅ `/search-stolen-mobile` → `/search-stolen-phone`
- ✅ `/search-stolen-iphone` → `/search-stolen-phone`

---

### Dashboard Pages
**Primary Route:** `/dashboard`

**Planned Redirect:**
- `/dashboard-old` → `/dashboard`

**Reason:** Remove legacy route

---

## REDIRECT RULES

### 301 Permanent Redirects
Used for:
- Consolidated duplicate content
- Old URL patterns
- Renamed pages

### Meta Refresh Redirects
Used for:
- SEO value transfer
- Gradual migration
- Maintaining backlink value

---

## URL STRUCTURE STANDARDS

### Pattern: `/category/subcategory`
- `/verify/ebay`
- `/verify/facebook-marketplace`
- `/app/download`
- `/app/ios`

### Pattern: `/item-type-checker`
- `/imei-checker`
- `/vin-checker`
- `/serial-number-checker`

### Pattern: `/state-action`
- `/arizona-vin-lookup`
- `/california-vin-lookup`

---

## PAGES TO KEEP (Primary Routes)

### Core Functionality
- `/` (homepage)
- `/verify` (main verification tool)
- `/pricing`
- `/how-it-works`
- `/mobile-app`
- `/app/download`

### Item-Specific Verification
- `/imei-checker`
- `/vin-checker`
- `/serial-number-checker`
- `/check-car`
- `/check-phone`
- `/check-laptop`
- `/check-bike`
- `/check-firearm`

### Marketplace-Specific
- `/verify/ebay`
- `/verify/facebook-marketplace`
- `/verify/offerup`
- `/verify/auctions`
- `/verify/pawnshops`

### Information Pages
- `/how-it-works-detailed`
- `/marketplace-safety`
- `/legal-guide`

### Guides
- `/guides/ebay-buyer-protection`
- `/guides/facebook-marketplace-safety`
- `/guides/offerup-verification`
- `/guides/auction-house-safety`
- `/guides/pawnshop-buying-tips`

### Resources
- `/blog`
- `/blog/[slug]`
- `/faq`
- `/stolen-goods-statistics-2025`
- `/testimonials`

### Comparisons
- `/vs/carfax`
- `/vs/checkmend`
- `/vs/imei-info`
- `/vs/stolen-register`
- `/vs/nicb`
- `/vs/autocheck`

### App Comparisons
- `/app/vs-checkmend`
- `/app/vs-imeiinfo`
- `/app/vs-carfax`
- `/app/vs-swappa`
- `/app/vs-nicb`
- `/app/vs-stolen-register`
- `/app/vs-imeipro`

### Regional (SEO)
- `/[state]-vin-lookup` (50 states)
- `/[state]-license-plate-lookup` (5 key states)
- `/uk-vehicle-check`
- `/canada-vin-check`
- `/australia-vin-check`

### Company
- `/about`
- `/contact`
- `/press`
- `/transparency`
- `/security`
- `/for-brands`
- `/data-partnerships`

### Legal
- `/terms`
- `/privacy`
- `/disclaimer`

### User Account
- `/dashboard`
- `/profile`
- `/subscription`
- `/search-history`
- `/analytics`

---

## MONITORING & VALIDATION

### Weekly Checks
- [ ] Verify all redirects work correctly
- [ ] Check for broken links
- [ ] Monitor 404 errors in GSC
- [ ] Review redirect chains (max 1 hop)

### Monthly Reviews
- [ ] Analyze redirect performance
- [ ] Check for new duplicate content
- [ ] Update consolidation strategy
- [ ] Review SEO impact

---

## NOTES

### Why Consolidate?
1. **SEO Benefits:** Avoid duplicate content penalties
2. **User Experience:** Clear, consistent URLs
3. **Maintenance:** Easier to manage fewer pages
4. **Performance:** Reduced code complexity

### When NOT to Consolidate:
1. Pages serve different user intents
2. Different keyword targeting
3. Regional/language variations
4. Legitimate A/B testing

### Best Practices:
1. Always use 301 redirects for SEO
2. Maintain redirect maps
3. Update internal links
4. Monitor analytics for impact
5. Preserve backlink value

---

## FUTURE CONSOLIDATIONS

### Candidates for Review:
- Multiple "how to check" pages
- Duplicate marketplace pages
- Similar comparison pages
- Legacy routes

### Process:
1. Identify duplicate intent
2. Choose canonical URL
3. Set up redirects
4. Update internal links
5. Monitor for 4 weeks
6. Document results
