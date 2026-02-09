# Specification

## Summary
**Goal:** Send visitors directly to the owner’s Cash App payment page and clearly communicate that payments are completed on Cash App (Boostly does not process, collect, or store payments).

**Planned changes:**
- Add a single, configurable Cash App payment URL in the frontend (as a single source of truth, similar to existing subscription link config patterns).
- Update the Cash App CTA to open the configured Cash App payment URL in a new tab using `noopener/noreferrer` (not the generic https://cash.app/ homepage).
- Update Payments/Monetization section copy to prioritize a Cash App-only flow, make the Cash App button the primary CTA, and remove any wording implying money is routed into a personal account within Boostly.
- Add a “not configured” state for the Cash App link: disable the Cash App button and show an English setup/help message consistent with the existing “link not set up” pattern.
- Update the payment-related FAQ entry in `frontend/src/content/siteContent.ts` to match the Cash App-only flow and explicitly state Boostly does not process/store payments.

**User-visible outcome:** Visitors are guided to pay via Cash App and can click a Cash App button that opens the owner’s configured Cash App payment page; the UI and FAQ clearly state Boostly only links out and does not handle payments.
