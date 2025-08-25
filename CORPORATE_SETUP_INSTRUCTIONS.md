# Corporate Setup Instructions for Safe or Stolen Corp.

## Required Information to Complete Corporate Setup

You'll need to replace the following placeholders with your actual corporate information:

### 1. EIN (Employer Identification Number)
- Location: `src/utils/seo/structuredData.ts`, line with `[EIN_NUMBER_PLACEHOLDER]`
- Replace with: Your actual EIN number received from the IRS
- Format: XX-XXXXXXX

### 2. Corporate Address
- Location: `src/utils/seo/structuredData.ts`, address section
- Replace placeholders:
  - `[STATE_PLACEHOLDER]` → Your state of incorporation
  - `[CITY_PLACEHOLDER]` → Your business city
  - `[STREET_ADDRESS_PLACEHOLDER]` → Your business street address
  - `[ZIP_CODE_PLACEHOLDER]` → Your business ZIP code

### 3. State of Incorporation
- Location: `src/pages/TermsOfServicePage.tsx`, line with `[STATE_PLACEHOLDER]`
- Replace with: The state where you incorporated (e.g., "Delaware", "California")

### 4. Optional Corporate Information
- `[DUNS_NUMBER_PLACEHOLDER]` → Your D-U-N-S Number (if you have one)
- This helps with B2B credibility and government contracts

## SEO Benefits of This Update

✅ **Enhanced Google Trust Signals**
- Corporation status improves E-A-T (Expertise, Authoritativeness, Trustworthiness)
- EIN number validates business legitimacy
- Proper business address enables local SEO

✅ **Structured Data Improvements** 
- Corporation schema type provides clearer business classification
- Enhanced contact information for better local search
- Industry classification codes (NAICS/ISIC) help Google understand your business

✅ **Legal Compliance**
- Proper corporate disclosure in Terms of Service
- Enhanced business credibility for enterprise clients
- Foundation for future compliance requirements

## Next Steps

1. Replace all placeholder values with actual corporate information
2. Submit updated sitemap to Google Search Console
3. Create Google Business Profile with new corporate details
4. Update any existing business directory listings
5. Consider adding SEC registration info if publicly traded in future

## Files Updated

- `src/utils/seo/structuredData.ts` - Enhanced organization schema
- `src/utils/seo/metadata.ts` - Added corporate keywords and legal name
- `src/pages/TermsOfServicePage.tsx` - Updated legal entity disclosure

This corporate status will significantly improve your SEO and business credibility!