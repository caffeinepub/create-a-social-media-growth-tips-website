# Specification

## Summary
**Goal:** Make the Boostly website installable as an official app experience (PWA) with an install entry point and basic offline-capable loading.

**Planned changes:**
- Add PWA configuration: web app manifest named “Boostly”, required HTML meta/link tags (manifest link, theme color, Apple touch icon support), and referenced app icons.
- Implement offline-friendly app shell caching for the main HTML/CSS/JS bundle and static generated assets (no backend changes).
- Add a new “Get the Boostly App” section reachable from both desktop and mobile navigation, with stable section IDs and concise English install instructions for iOS (Safari), Android (Chrome), and desktop (Chrome/Edge).
- Add an install button that triggers the browser install prompt where supported, and gracefully falls back to instructions where not supported.
- Add a prominent hero-area CTA (e.g., “Get the App”) that scrolls to the new app section without changing existing “Get Started / View Tips” behavior.

**User-visible outcome:** Visitors can install Boostly from the website to their home screen/app launcher, see clear install guidance, and the installed app loads a basic cached shell even when offline after a first successful visit.
