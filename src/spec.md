# Specification

## Summary
**Goal:** Add a payments/monetization section that guides users to accept payments via outbound Apple Pay/Apple Wallet and Cash App links, with optional click tracking.

**Planned changes:**
- Add a new landing-page section explaining link-based payments for Apple Pay/Apple Wallet and Cash App, including prominent outbound CTA buttons/links that open in a new tab and clarify Boostly does not process payments on-site.
- Add a new navigation item (desktop + mobile) that scrolls to the new payments/monetization section using the existing on-page navigation behavior and offsets.
- Add a new FAQ accordion entry explaining how payments work via Apple Pay/Apple Wallet and Cash App payment links, and clarify “paid per click” vs being paid when a payment is completed.
- Implement optional outbound click tracking for the Apple Pay and Cash App CTAs, persisting counts in backend stable state and displaying counts in the new section, with a non-blocking unavailable state if the backend cannot be reached.

**User-visible outcome:** Visitors can read how to accept payments using Apple Pay/Apple Wallet and Cash App links, click outbound payment buttons to open provider pages in a new tab, navigate to the section from the site menu, see an FAQ clarification about “per click” vs payment completion, and view (when available) click counts for each payment CTA.
