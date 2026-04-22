

# Plan: Consolidate Verification into AI-Powered Split-Pane Chat

Turn the verification experience into a ChatGPT-style interface — **AI chat on the left**, **live verification results + downloadable reports on the right** — fully branded for SafeOrStolen. The current `/verify` page (with cards, tabs, scanner, voice search, URL analyzer all stacked together) gets consolidated into one cohesive AI conversation.

## What you'll see

```text
┌─────────────────────────────────────────────────────────────────┐
│  TopNav (SafeOrStolen logo · 2 free checks left · Upgrade)      │
├──────────────────────────────────┬──────────────────────────────┤
│  CHAT (left, ~55%)               │  RESULTS PANE (right, ~45%)  │
│  ──────────────────              │  ──────────────────────      │
│  🛡 SafeOrStolen AI              │  Latest Verification         │
│                                  │  ┌────────────────────────┐  │
│  [assistant] Paste an IMEI,      │  │ ✅ SAFE  ·  92% conf.  │  │
│  VIN, serial, plate, or URL...   │  │ IMEI 359...            │  │
│                                  │  │ Checked: 6 sources     │  │
│  [user] 359123456789012          │  │ ─────────────────      │  │
│                                  │  │ • GSMA Blacklist  ✓    │  │
│  [assistant] Detected IMEI.      │  │ • FBI NCIC        ✓    │  │
│  Checking 100+ databases…        │  │ • Carrier DB      ✓    │  │
│  → See result on the right →     │  │                        │  │
│                                  │  │ [Download PDF]         │  │
│  ┌──────────────────────────┐    │  │ [Share Link]           │  │
│  │ Quick: 📱 IMEI  🚗 VIN   │    │  │ [Save to Dashboard]    │  │
│  │       🔢 Serial 🪪 Plate │    │  └────────────────────────┘  │
│  └──────────────────────────┘    │                              │
│  ┌──────────────────────────┐    │  Session History (3)         │
│  │ 📎 📷 🎤  [Type here...] │    │  • IMEI 359...  ✅ Safe      │
│  │                    [Send]│    │  • VIN 1HGBH... ⚠️ Check    │
│  └──────────────────────────┘    │  • Plate ABC123 ✅ Safe     │
└──────────────────────────────────┴──────────────────────────────┘
        ↓ On mobile: chat full-width, results slide up as drawer
```

## What gets consolidated into the chat

All of these inputs become one chat input with attach/scan buttons:

- Manual identifier entry (IMEI / VIN / Serial / Plate)
- Smart auto-detection of identifier type
- Camera scanner (QR / barcode / OCR photo)
- Image upload (Claude vision OCR)
- Voice input (mic button)
- Marketplace URL analyzer (paste any eBay / FB Marketplace / Craigslist link)
- Item-type quick-picker (chips above the input)

## What lives in the right pane

- **Latest result card** — status badge (Safe / Stolen / Unknown), confidence %, item type, identifier, sources checked
- **Source breakdown** — each database with ✓/✗/? per source
- **Action buttons**: Download PDF report · Copy share link · Save to dashboard · Report stolen
- **Session history** — every check from the current chat, click to re-open in the result card
- **Empty state** before first check: trust badges, "100+ databases", sample report preview

## Routing & migration

- New chat experience lives at **`/verify`** (the canonical URL — preserves all SEO).
- Old card-based verify page moves to **`/verify/classic`** (kept live, linked from a small "Switch to classic view" link in the header for users who prefer it — preserves URL equity per your URL-preservation mandate).
- `/ai-verify` and `/ai-chat` continue to work and redirect to `/verify`.
- All existing item-type pages (`/check-phone`, `/vin-checker`, etc.) get an updated CTA: "Try our AI Verify Chat →" linking to `/verify`.

## Branding (SafeOrStolen, not generic ChatGPT)

- **Dark Security-Chic theme** — `#0F172A` background, primary orange `#F97316` accents
- **AI assistant avatar** — SafeOrStolen shield logo in orange circle
- **User bubble** — orange tinted, right-aligned
- **Assistant bubble** — dark slate card, left-aligned, markdown-rendered
- **Inline result mini-cards** in chat (collapsed) that mirror the full card on the right
- **Streaming token-by-token** via existing `ai-chat-stream` edge function
- Trust strip pinned above input: "🛡 100+ databases · ⚡ 3-sec results · 🔒 Anonymous"

## Revenue & gating (preserved exactly)

- 2 free checks (server-enforced via existing `useVerifyGate` + `check-gate` edge function)
- After 2nd check: assistant message becomes the upsell with inline "Upgrade to Unlimited – $10/mo" and "$0.99 single check" buttons (instead of a modal)
- Sticky "X free checks left" indicator in the chat header
- Result pane's "Download PDF" and "Share Link" gated to authenticated users (drives signup)

## Technical implementation

**Files to create:**
- `src/pages/VerifyChatPage.tsx` — new split-pane layout (chat + results)
- `src/components/verify-chat/ChatPane.tsx` — left pane (messages, input, attach/scan/voice, quick chips)
- `src/components/verify-chat/ResultsPane.tsx` — right pane (current result + session history + empty state)
- `src/components/verify-chat/ResultCard.tsx` — reusable result card with download/share actions
- `src/components/verify-chat/ChatMessage.tsx` — bubble component with markdown + inline mini-result
- `src/hooks/useVerifyChat.ts` — orchestrates: detect → verify → stream narration, manages message state and current result

**Files to edit:**
- `src/core/routing/AppRoutes.tsx` — `/verify` → `VerifyChatPage`; add `/verify/classic` → existing `VerifyPage`; keep `/ai-verify` and `/ai-chat` as aliases
- `src/components/TopNavigation.tsx` — relabel "AI Chat" link to "Verify" (now primary), drop the duplicate
- `src/pages/AIVerifyPage.tsx` — re-export `VerifyChatPage` for backward compatibility

**Reuses (no new backend work):**
- `ai-detect-identifier`, `verify-item`, `ai-visual-ocr`, `marketplace-url-analyzer`, `ai-chat-stream` edge functions
- `useVerifyGate`, `useSearchLimits`, `useVoiceSearch`, `useSmartDetection`, `usePendingVerification` hooks
- `VerificationService` for the actual verify call
- `generate-report-link` edge function for PDF/share-link downloads
- `react-markdown` (already installed) for assistant bubbles
- shadcn `ScrollArea`, `Card`, `Button`, `Textarea`

**Responsive behavior:**
- ≥1024px: side-by-side split (55/45)
- <1024px: chat full-width; results pane becomes a bottom drawer that auto-opens when a new result arrives, with a "Show results (3)" pill at the bottom when collapsed

**Nothing breaks:**
- `/verify/classic` keeps full original functionality (cards, tabs, scanner, voice, URL analyzer) for users and any external links
- All gating, auth, search-limit, Stripe checkout flows untouched
- All SEO (canonical, schema, breadcrumbs) on `/verify` preserved by adding the same `PageSEO` block to `VerifyChatPage`
- All edge functions unchanged

## Out of scope for this round

- New AI capabilities (this is purely a UI consolidation)
- Pricing changes
- Backend / database changes

