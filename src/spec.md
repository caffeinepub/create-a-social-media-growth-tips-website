# Specification

## Summary
**Goal:** Configure real outbound checkout links for the Monthly ($6.00) and Annual ($15.99) subscription plans.

**Planned changes:**
- Set `subscriptionLinks.monthly` and `subscriptionLinks.annual` in `frontend/src/config/subscriptionLinks.ts` to non-empty, valid `https` checkout URLs.
- Ensure the Subscribe CTA opens the selected plan’s configured checkout URL in a new browser tab while preserving existing click tracking for `subscription-monthly` and `subscription-annual`.

**User-visible outcome:** Visitors who choose Monthly or Annual and click Subscribe are taken (in a new tab) to the correct real checkout page for that plan, with click tracking still recorded.
