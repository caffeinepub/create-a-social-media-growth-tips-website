# Specification

## Summary
**Goal:** Add the user-provided YouTube links to the first four existing Video Lessons so they can be watched from the app.

**Planned changes:**
- Update `frontend/src/content/videoLessons.ts` to set `videoUrl` for the existing lessons (in order): `speaking-confidence`, `youtube-getting-started`, `tiktok-getting-started`, `presentation-skills`.
- Preserve the exact provided URLs while trimming any leading/trailing whitespace so the links open correctly.
- Leave the remaining lessons (`content-planning-youtube`, `tiktok-trends`) unchanged (no new URLs added).

**User-visible outcome:** In the Video Lessons UI, the first four lessons show a “Watch Video” button, and clicking it opens the correct YouTube video in a new tab/window.
