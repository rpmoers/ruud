# Screen reader optimization — audit and changes

## Short answer

**Before:** The project had a good base (skip link, landmarks, ARIA on nav/buttons, alt text) but several gaps for screen reader users.

**Now:** It’s in much better shape. The fixes below are applied so the site is better optimized for screen readers.

---

## What was already good

- **Skip link** — “Skip to content” links to `#work` and is visible on focus.
- **Landmarks** — `<main id="main-content">`, `<nav aria-label="Main navigation">`, `<header>`, `<footer>`, `<section>` with IDs.
- **Language** — `document.documentElement.lang` is set from the language toggle (nl/en).
- **Focus visible** — `*:focus-visible` shows a clear outline.
- **Buttons and controls** — Language, theme, and menu buttons have `aria-label`; project prev/next have “Previous project” / “Next project”.
- **Project counter** — “1 / 9” uses `aria-live="polite"` so changes are announced.
- **Images** — Project images use `alt` from data; logo carousel uses `alt={logo.name}`; testimonial avatars use `alt=""` (decorative).
- **Heading structure** — Hero (h1), About/Experience/Testimonials (h2), experience items (h3), project cards (h3).

---

## What was fixed

### 1. Password gate

- **Issue:** The password field had no programmatic label (only placeholder and `aria-describedby`).
- **Change:** Added `aria-label="Password"` so the purpose is announced.

### 2. Project detail overlay (dialog)

- **Issue:** Overlay wasn’t exposed as a dialog; focus didn’t move into it or return to the trigger.
- **Changes:**
  - Container now has `role="dialog"`, `aria-modal="true"`, and `aria-labelledby="project-detail-title"`.
  - The project title `<h1>` has `id="project-detail-title"` so the dialog’s name is announced.
  - On open, focus moves to the back button (`ref` + `useEffect`).
  - On close, focus returns to the project card that was activated (store `document.activeElement` when opening, restore in `useEffect` when `selectedIndex` becomes `null`).
  - Back button has `aria-label={labels.back}` and visible focus styles.

### 3. External link (opens in new tab)

- **Issue:** “View project” opens in a new tab without telling assistive tech.
- **Change:** Link has `aria-label={`${labels.viewProject} (opens in new tab)`}`; icon has `aria-hidden` so it isn’t announced twice.

### 4. Projects section and filters

- **Issue:** Work section had no heading for the outline; filter state wasn’t exposed.
- **Changes:**
  - Added a visually hidden `<h2 id="work-heading" className="sr-only">` with `sections.selectedWork`, and `aria-labelledby="work-heading"` on the section.
  - Filter group has `role="group"` and `aria-label="Filter projects"` (or “Filter projecten” in NL).
  - “All” and each filter pill have `aria-pressed` so screen readers announce the active filter.

### 5. `.sr-only` utility

- **Change:** Defined `.sr-only` in `index.css` so the work heading is hidden visually but read by screen readers (clip, 1px size, etc.).

---

## Optional next steps (not done)

- **Focus trap inside dialog** — Keep Tab/Shift+Tab inside the overlay until Escape or Back is used. Right now focus can leave the overlay; trapping would improve keyboard use further.
- **Announce overlay open** — Optionally use `aria-live` or a brief “Dialog opened” announcement so users know the view changed (many screen readers already announce the dialog role and title).

---

## How to test with a screen reader

- **macOS:** VoiceOver (Cmd + F5). Use Tab to move focus; use “Skip to content” then navigate by headings (VO + Cmd + H) or landmarks.
- **Windows:** NVDA or JAWS. Same idea: skip link, headings, landmarks, open a project and close it to check focus return.
- **Mobile:** iOS VoiceOver or Android TalkBack; confirm dialogs and buttons are announced correctly.
