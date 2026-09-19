# First-visit SafeOrStolen product tour

## Experience

Add a four-step walkthrough that opens automatically only on a visitor's first homepage visit:

1. **Search or ask** — spotlight the homepage composer: “Paste an IMEI, VIN, serial number, or marketplace link here, or just ask a question.”
2. **Quick starts** — spotlight the existing suggestion buttons: “Or tap one of these to get started.”
3. **Two free checks** — spotlight the pricing/trust line: “Your first 2 checks are free once you create an account — no credit card needed.”
4. **Saved history** — spotlight the visible account/dashboard control: “Every check you run is saved in your Dashboard so you can find it again.”

Stop at four steps. The existing page does not have a fifth control that adds enough new value without repeating the marketplace-link or AI messaging already covered.

Each callout will include a short title, description, `1 / 4` progress, an orange **Next** button, and an **X** available at every step. The final action becomes **Got it**. Closing or finishing permanently marks the tour as seen in that browser.

## Visual behavior

- Use the existing dark surfaces, orange semantic tokens, typography, borders, spacing, and Button component.
- Dim the rest of the page while leaving the current target clear and outlined with an orange focus ring.
- Anchor the callout beside the highlighted control where space allows; place it above or below on narrow screens so it never covers the target.
- Smoothly bring off-screen targets into view between steps and recalculate placement after scrolling, resizing, or device rotation.
- Keep the underlying controls inactive while the tour is open so an accidental tap does not launch a check.
- Respect reduced-motion preferences and support keyboard focus, Escape-to-close, descriptive labels, and focus restoration.

## Implementation

- Add one small reusable `ProductTour` component using the browser DOM and a portal; no new package is needed.
- Mount it only on the homepage after browser hydration, avoiding any server-rendering mismatch or flash.
- Add stable tour markers to the existing homepage composer, suggestion group, free-check line, and account/dashboard navigation areas.
- For the final step, select whichever marked navigation control is actually visible: desktop Account/Get Started controls or the mobile menu control. The explanation will point users to Dashboard after sign-in; the tour will not navigate away or expose the private dashboard.
- Store a versioned local flag such as `sos-product-tour-v1-seen`. Dismissal at any step and final completion both set it, so returning visitors are not prompted again.
- Do not change verification, authentication, pricing, dashboard data, SEO content, or backend behavior.

## Verification

- First clean desktop visit: all four targets are correctly spotlighted; Next advances; Got it closes and stores the flag.
- First clean mobile visit: each target scrolls into view and the callout stays fully within the screen without overlap.
- X and Escape close from every step and prevent the tour from reopening on refresh.
- A returning visit with the seen flag never opens the tour.
- Keyboard focus stays inside the callout while open and returns safely after dismissal.
- Existing search, quick actions, sign-in/account navigation, and homepage layout still work after the tour closes.
