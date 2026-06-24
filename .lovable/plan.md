Turn the homepage hero into an **AI chat-first experience** while keeping every existing trust section, category grid, live feed, and SEO content intact below.

## What changes (above the fold)

Replace the current hero search box with a branded AI chat composer:

```text
┌──────────────────────────────────────────────────────────┐
│              🛡 SafeOrStolen AI                          │
│   Ask anything. Verify anything. In 3 seconds.           │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │ 📎 📷 🎤  Paste IMEI, VIN, serial, plate, or URL…│ │
│  │                                          [ Send ▸ ]│ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  Try:  [📱 Check an IMEI]  [🚗 Check a VIN]              │
│        [🔗 Analyze a Facebook listing]                   │
│        [⚠️ Is this deal a scam?]                         │
│                                                          │
│  🛡 100+ databases · ⚡ 3-sec results · 🔒 Anonymous     │
└──────────────────────────────────────────────────────────┘
```

When the user sends a message, the conversation expands **inline** right under the composer (chat bubbles, streaming AI response, result cards). The page does not navigate away — everything happens on `/`.

## What stays the same (below the fold)

Untouched, in the same order they're in today:
- Trust strip / verified categories
- Live stolen-item feed
- "Why verify" section
- Sample report preview
- Sharing/social proof
- Footer

This preserves the homepage's 800+ words, all schema, all internal links, and current Google rankings.

## Behavior

- **Suggested prompt chips** click to pre-fill the composer.
- **Identifier detection**: pasting an IMEI/VIN/serial/plate auto-runs verification (uses existing `ai-detect-identifier` + `verify-item` edge functions).
- **URL detection**: pasting a marketplace link runs the scam analyzer (`marketplace-url-analyzer`).
- **Plain questions** stream a response via `ai-chat-stream`.
- **History saved** to the user's account (uses the chat threads already wired up from earlier work).
- **Free-check gating preserved**: 2 free checks via existing `useVerifyGate`; after that the assistant bubble shows the $10/mo + $0.99 upsell inline.
- **Mic, camera, attach buttons** in the composer (reusing existing voice + camera scanner hooks).
- **"Open full assistant →"** link beside the composer goes to `/verify` for the split-pane deep-dive experience.

## Branding

- Dark Security-Chic theme, primary orange `#F97316` accents — matches site.
- Assistant avatar = SafeOrStolen shield in an orange circle.
- User bubble = orange-tinted, right-aligned.
- Assistant bubble = dark slate, left-aligned, markdown rendered.
- Built on AI Elements primitives (`Conversation`, `Message`, `PromptInput`, `Shimmer`) for streaming + a11y.

## Technical details

**New files:**
- `src/components/home/HomeAIHero.tsx` — the chat-first hero (composer + suggested prompts + inline conversation panel).
- `src/components/home/HomeAIConversation.tsx` — the inline messages area (only mounts after first send).

**Edited files:**
- `src/pages/Index.tsx` — replace the existing hero block with `<HomeAIHero />`. Everything else on the page stays.

**Reused (no backend changes):**
- Edge functions: `ai-chat-stream`, `ai-detect-identifier`, `verify-item`, `marketplace-url-analyzer`
- Hooks: `useVerifyGate`, `useSearchLimits`, `useVoiceSearch`, `useSmartDetection`, `useChatThreads`
- AI Elements components already used by `AIFloatingChat`

**Not touched:**
- Routes, sitemap, schema, robots, all other pages.
- The floating chat bubble (`AIFloatingChat`) stays on every other page; on `/` it's hidden since the hero already is the chat.
- `/verify` split-pane experience is unchanged.

## SEO safety

- Same `<title>`, meta description, canonical, Organization/WebSite schema.
- H1 stays a real keyword headline ("Free Stolen Item Checker — IMEI, VIN & Serial in 3 Seconds") rendered above the chat input so crawlers still see it.
- All below-the-fold content (800+ words) untouched.

## Out of scope

- Full-screen chat takeover.
- New AI capabilities.
- Any change to pricing, gating thresholds, or backend.
