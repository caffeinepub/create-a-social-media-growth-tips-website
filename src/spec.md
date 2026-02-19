# Specification

## Summary
**Goal:** Add a set of Boostly-matching iOS PWA splash screens and wire them into the PWA so they are used on iOS and available offline.

**Planned changes:**
- Add the required Boostly splash screen PNG assets under `frontend/public/assets/generated` using the exact required filenames and dimensions.
- Update `frontend/index.html` to include the appropriate `<link rel="apple-touch-startup-image">` tags pointing to the new splash assets with correct `media` queries (size/orientation), without removing existing icon/manifest/social links.
- Update `frontend/public/sw.js` to precache the new splash screen asset paths so they are available offline.

**User-visible outcome:** When installing/launching Boostly as a PWA on iOS, users see a matching Boostly splash screen, and it continues to work when offline.
