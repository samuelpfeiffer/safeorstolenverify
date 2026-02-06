

# Plan: Connect SafeOrStolen with LovableHTML Prerendering Service

## What is LovableHTML?

LovableHTML (lovablehtml.com) is a third-party DNS-level prerendering proxy designed for Lovable-built sites. It sits between your domain and your hosting -- when a search engine bot or AI crawler visits, LovableHTML intercepts the request and serves fully rendered HTML. Regular users get the normal interactive SPA.

This replaces the current Prerender.io integration, which is configured in the codebase but is NOT actually working on production (as confirmed by the GSC failures -- bots are still seeing the empty SPA shell).

## What Needs to Happen

There are two parts: **DNS setup (you do this)** and **code cleanup (I do this)**.

---

## Part 1: DNS Setup (Your Action Required)

LovableHTML works by pointing your domain's DNS to their proxy servers. You need to:

1. Log in to your LovableHTML dashboard at lovablehtml.com
2. Add your site (safeorstolen.com) if not already done
3. Update your DNS records at your domain registrar:
   - Change the **A record** for `@` (root) to LovableHTML's IP address (provided in your LovableHTML dashboard)
   - Change the **A record** for `www` to the same IP
   - Keep any TXT/verification records they require
4. Set your origin/upstream URL to your Lovable published URL: `https://safeorstolen.lovable.app`

LovableHTML will then proxy all requests -- serving pre-rendered HTML to bots and passing through the SPA to regular users.

**Important**: If your custom domain (safeorstolen.com) is currently connected through Lovable's domain settings, you may need to coordinate the DNS change. LovableHTML's support (Aki) can help with this transition.

---

## Part 2: Code Changes (I Will Do This)

### Phase 1 -- Remove Prerender.io Integration (It's Not Working and LovableHTML Replaces It)

**netlify.toml** -- Remove the Prerender.io plugin and token header:
- Remove the `[[plugins]]` block referencing `@prerender/netlify-plugin`
- Remove the `prerenderToken` and `prerenderServiceUrl` inputs
- Remove the `X-Prerender-Token` header
- Keep the build config, security headers, and SPA redirect

**index.html** -- Swap Prerender.io token for LovableHTML-compatible signals:
- Remove `<meta name="prerender-token" content="iiMthWrIIiQhunohL2U5">`
- Keep `<meta name="prerender-status-code" content="200">` (LovableHTML uses this too)
- Keep the `window.prerenderReady` signal (LovableHTML uses this to know when the page is fully rendered)
- Update the comments from "Prerender.io" to "LovableHTML"

### Phase 2 -- Enhance Status Code Signals for LovableHTML

LovableHTML uses `prerender-status-code` meta tags to understand what HTTP status to return to bots. This is critical for fixing the GSC issues.

**StatusCodeHandler.tsx** -- Add `prerender-status-code` meta tag:
- When status is 404, emit `<meta name="prerender-status-code" content="404">` so LovableHTML returns a true 404 to Googlebot
- When status is 301, emit `<meta name="prerender-status-code" content="301">` with `<meta name="prerender-header" content="Location: ...">` so LovableHTML returns a real 301
- When status is 200, emit `<meta name="prerender-status-code" content="200">`

This is the key fix -- currently, 404 pages (NotFound component) and redirect pages only set client-side meta tags. LovableHTML needs these `prerender-status-code` signals to tell Google the actual HTTP status.

**MetaRefreshRedirect.tsx** -- Already has `prerender-status-code` for 301s. Confirmed compatible.

### Phase 3 -- Clean Up .htaccess Bot Detection (LovableHTML Handles This)

**public/.htaccess** -- Remove the bot-detection rewrite rules (lines 147-159):
- Remove the `RewriteCond` blocks that check user-agent for googlebot/bingbot/etc and serve `/_prerendered/` files
- LovableHTML handles all bot detection at the DNS proxy level -- these rules are redundant and can cause conflicts
- Keep all 301 redirect rules and SPA fallback rules

### Phase 4 -- Ensure prerenderReady Signal Is Robust

**index.html** -- Improve the `window.prerenderReady` detection:
- Current 5-second safety timeout is good
- Add check for helmet-shim meta tags being applied (title, description, canonical) before signaling ready
- This ensures LovableHTML captures the fully rendered page WITH all SEO meta tags

### Phase 5 -- Add LovableHTML Cache Purge Headers (Optional Enhancement)

**StatusCodeHandler.tsx** and **SEOHead.tsx**:
- Add `<meta name="prerender-header" content="Cache-Control: max-age=86400">` for 200 pages
- Add `<meta name="prerender-header" content="Cache-Control: no-cache">` for 404 pages
- This tells LovableHTML how long to cache each pre-rendered snapshot

---

## Files to Modify

| File | Change | Why |
|------|--------|-----|
| `netlify.toml` | Remove Prerender.io plugin config and token header | LovableHTML replaces Prerender.io |
| `index.html` | Remove prerender-token meta, update comments, keep prerenderReady | Swap from Prerender.io to LovableHTML |
| `src/components/seo/StatusCodeHandler.tsx` | Add prerender-status-code meta tags (200/301/404) | Critical: tells LovableHTML what HTTP status to return to bots |
| `public/.htaccess` | Remove bot-detection rewrite rules | LovableHTML handles bot detection at proxy level |

---

## How This Fixes Your GSC Issues

| GSC Problem | Root Cause | How LovableHTML Fixes It |
|------------|-----------|------------------------|
| "Excluded by noindex" | Bots see SPA shell, React renders NotFound with noindex | LovableHTML pre-renders the page and sees the 404 status code signal; returns actual 404 to Google |
| "Page with redirect" | Client-side redirects (React Router) invisible to bots | LovableHTML sees `prerender-status-code: 301` + `prerender-header: Location:...` and returns real 301 |
| "Duplicate without canonical" | Bots see empty HTML without canonical tag | LovableHTML pre-renders the full page including helmet-shim canonical tags |
| "Crawled - currently not indexed" | Empty SPA shell has no indexable content | LovableHTML serves full rendered HTML with all content, H1s, schema, etc. |

---

## Expected Outcome After Implementation

1. **Google sees real HTML** -- every page renders with full content, meta tags, canonical, and schema markup
2. **Proper HTTP status codes** -- 404 pages return 404, redirects return 301, valid pages return 200
3. **Social previews work** -- OG tags are in the pre-rendered HTML, so X/LinkedIn/Facebook show proper previews
4. **AI crawlers can read content** -- GPTBot, ClaudeBot, PerplexityBot all get fully rendered HTML
5. **No more conflicting prerender services** -- single source of truth (LovableHTML) instead of Prerender.io + .htaccess bot rules + client-side helmet

