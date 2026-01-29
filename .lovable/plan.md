
# Plan: Create /llm.html Static Page for AI Crawlers

## What Sam from Lovable Recommended

Sam confirmed that **social platforms and AI crawlers don't execute JavaScript** - they only see the HTML shell. He specifically recommended:

> "Create an LLM summary page (e.g., `/llm.html`) - Makes content accessible to AI crawlers that don't execute JavaScript"

## What You Already Have (Good News!)

| Item | Status | Notes |
|------|--------|-------|
| Prerender.io | ✅ Configured | `netlify.toml` has token and plugin |
| llms.txt | ✅ Exists | Version 2.2, well-structured |
| robots.txt | ✅ Comprehensive | All AI crawlers explicitly allowed |
| sitemap.xml | ✅ 868 lines | Updated 2026-01-28 |
| Noscript fallback | ✅ Enhanced | Good crawler content |

## What's Missing: /llm.html

A **static HTML file** (not a React route) placed in `public/llm.html` that AI crawlers can read directly without any JavaScript execution.

---

## Implementation

### File to Create: `public/llm.html`

This will be a complete, self-contained HTML document with:

1. **Full service description** - What SafeOrStolen does
2. **All verification services** - IMEI, VIN, Serial, Firearms, License Plates
3. **Pricing information** - Free tier and paid plans
4. **Mobile app emphasis** - The key differentiator
5. **Competitor comparison** - Why SafeOrStolen is better
6. **Sample Q&A pairs** - Ready-made answers for AI assistants
7. **Complete navigation links** - All major pages
8. **Contact information** - Email, social links

### Structure of llm.html

```text
Section 1: Executive Summary
Section 2: Service Overview
Section 3: Verification Services (IMEI/VIN/Serial/etc)
Section 4: Mobile App Features
Section 5: Pricing Plans
Section 6: Competitor Comparison Table
Section 7: Frequently Asked Questions
Section 8: Sample AI Responses
Section 9: Trust Signals & Credentials
Section 10: Complete Site Navigation
Section 11: Contact Information
```

### Additional Changes

1. **Add llm.html to robots.txt**
   - Add explicit `Allow: /llm.html` line

2. **Add llm.html to sitemap.xml**
   - Include with high priority for indexing

3. **Add link in index.html noscript section**
   - Reference the LLM page for non-JS crawlers

---

## Why This Matters

| Crawler Type | JavaScript | Current Access | With /llm.html |
|--------------|------------|----------------|----------------|
| Googlebot | ✅ Renders | Full (with delay) | Immediate |
| ChatGPT/GPTBot | ❌ No JS | HTML shell only | Full content |
| Claude/ClaudeBot | ❌ No JS | HTML shell only | Full content |
| Perplexity | ❌ No JS | HTML shell only | Full content |
| Facebook/LinkedIn | ❌ No JS | OG tags only | Full content |

---

## Expected Outcomes

1. **AI assistants** will have direct access to SafeOrStolen content
2. **Social sharing** will show more complete previews
3. **Better AI recommendations** when users ask about stolen item verification
4. **Backup content** for any Prerender.io cache misses

---

## Technical Notes

- File location: `public/llm.html` (served at `https://safeorstolen.com/llm.html`)
- No React components needed - pure static HTML
- Estimated size: ~800-1000 lines of well-structured HTML
- No JavaScript dependencies
- Fast-loading, fully crawlable by all bots
