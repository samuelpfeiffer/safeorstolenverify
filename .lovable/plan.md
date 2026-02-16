
## Fix "Duplicate field FAQPage" Error Across All Pages

### Root Cause Analysis

The "Duplicate field FAQPage" error in Google Search Console is caused by **one primary issue**:

The LovableHTML prerendering system serves a cached HTML snapshot to Google's crawler. This snapshot previously included a **global FAQPage schema from `index.html`** (with questions like "What is SafeOrStolen?", "Is SafeOrStolen free?", etc.). When Google crawls any page (e.g., `/check-phone`), it sees:

1. The **global FAQPage** from the prerendered HTML snapshot
2. The **page-specific FAQPage** injected by React (e.g., phone-related questions)

This results in "Duplicate field FAQPage" on every page.

The global FAQPage has **already been removed** from `index.html` in a recent edit, but the changes have **not been published to production yet**. After publishing, the prerender cache will regenerate without the duplicate FAQ.

### Additional Cleanup Needed

Beyond the primary fix (publishing), several templates still use the `@graph` schema pattern which bundles multiple schema types into one JSON-LD block. While not the direct cause of the FAQ duplication, Google's Rich Results Test can have trouble parsing schemas inside `@graph`. The standard established in the project memory is **standalone root-level JSON-LD blocks**.

### Changes Required

**Step 1: Publish to production** (manual action - resolves the primary duplicate FAQ issue)

**Step 2: Convert remaining `@graph` schemas to standalone blocks** (5 files):

1. **`src/components/landing/SEOLandingPageTemplate.tsx`** - Used by ~15+ landing pages (AndroidPhoneCheck, etc.)
   - Split `@graph` containing Service + HowTo into two separate schemas, each with its own `@context`

2. **`src/components/seo/StateVinPageTemplate.tsx`** - Used by 50 state VIN pages
   - Split `@graph` containing Service + FAQPage + BreadcrumbList into three separate schemas

3. **`src/components/StateLicensePlatePage.tsx`** - Used by 50 state license plate pages
   - Split `@graph` containing schemas into separate blocks

4. **`src/pages/items/XboxStolenCheck.tsx`** - Single page
   - Split `@graph` into standalone schemas

5. **`src/pages/PartialSerialNumberSearchPage.tsx`** - Single page
   - Split `@graph` into standalone schemas

**Step 3: Clean up unused components** (optional, reduces confusion):
- `src/components/seo/StructuredDataForTraffic.tsx` - Not imported anywhere, contains `@graph` with FAQPage
- `src/components/seo/StructuredData.tsx` (`VerificationFAQData`) - Not imported anywhere

### Technical Details

For each file, the `@graph` pattern:
```text
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", ... },
    { "@type": "HowTo", ... },
    { "@type": "FAQPage", ... }
  ]
}
```

Will be converted to separate standalone blocks:
```text
[
  { "@context": "https://schema.org", "@type": "Service", ... },
  { "@context": "https://schema.org", "@type": "HowTo", ... },
  { "@context": "https://schema.org", "@type": "FAQPage", ... }
]
```

This matches the pattern already established in `ItemLandingPageTemplate.tsx` and `FirearmsCheckPage.tsx`.

### Impact

- Resolves "Duplicate field FAQPage" on all 20+ affected pages after publishing
- Resolves potential `@graph` parsing issues on 100+ pages (50 state VIN + 50 state license plate + landing pages)
- Aligns all templates with the project's established standalone JSON-LD standard
- No visual or functional changes to any page
