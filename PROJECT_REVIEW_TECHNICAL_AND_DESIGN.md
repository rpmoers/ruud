# Project review — Technical Precursor & Design Consultant

Combined review of your portfolio project from both agent perspectives. Use this to decide what to implement.

---

# Part 1 — Technical Precursor

## Analysis

**Current state (from codebase and structure):**

- Single-page portfolio: Hero → Logo carousel → Projects (filterable grid) → Experience → About → Testimonials → Footer.
- Password gate protects the whole site when `VITE_PORTFOLIO_PASSWORD` is set (default: `portfolio2026`).
- Projects open in a full-screen overlay with prev/next, keyboard (Escape, arrows), and body scroll lock.
- Skip link to `#work`, `main` with `id="main-content"` and `role="main"`, focus-visible styles, semantic sections.
- Language (NL/EN) and dark/light theme toggles in header; nav uses smooth scroll and closes project detail on section change.
- Contact section component exists and is exported but **is not rendered** in `App.tsx`; nav has no Contact link.
- `index.html` has `lang="en"` only — does not switch when user selects NL.
- Project card images in data use paths like `/images/projects/here-design-system.jpg`; those root-level `.jpg` files are not present in `public/images/projects/` (only subfolders with project assets exist). Cards do not render these images in the UI, so nothing is broken visually.

**Desired state (inferred):**

- Hiring managers and peers can reach all key sections (including Contact) from the nav and see a coherent, accessible experience.
- Language and accessibility (including `lang`) are consistent.

**Gap analysis:**

| Gap | Severity | Notes |
|-----|----------|--------|
| Contact section not in app | High | Component exists; users cannot reach it. Nav has no Contact. |
| No nav link to Contact | High | Even if Contact were added, there is no way to navigate to it. |
| `html` `lang` fixed as "en" | Medium | When language is NL, `lang` should be `nl` for a11y and i18n. |
| Password gate: no visible “why” or recovery | Medium | No “Forgot password?” or explanation; fine for private share, but consider copy. |
| Project card `image` field unused | Low | Data has card images; UI does not show them. Optional enhancement. |

---

## Use-case heuristics (relevant flows)

**Actor:** Recruiter or hiring manager.  
**Goal:** Find work samples and contact info.

1. **Preconditions:** Has URL; if password-protected, has password.
2. **Main success:** Lands on hero → scrolls or uses nav → sees projects → opens a case → reads it → finds contact (email/LinkedIn).
3. **Exception:** Contact is not in the page tree and not in nav → **postcondition not met** (user cannot complete “get in touch” from the site).

**Actor:** Keyboard/screen-reader user.**  
**Goal:** Use skip link, navigate sections, operate modals.

- Skip link and focus-visible are in place (good).
- `html` `lang` should reflect current locale so assistive tech announces the right language.

---

## Proposed approach

1. **Add Contact to the app and nav**
   - In `App.tsx`: import and render `<Contact />` (e.g. after Testimonials, before Footer).
   - Give the Contact section a stable id, e.g. `id="contact"`.
   - In `Header.tsx`: add `{ href: "#contact", label: data.nav.contact }` to `navLinks` so “Contact” appears in desktop and mobile nav.
   - Ensure smooth scroll and “close project detail” work for `#contact` the same way as for `#work`, `#about`, `#experience`.

2. **Sync `html` `lang` with current language**
   - When `language` is `nl`, set `document.documentElement.lang = "nl"`; when `language` is `en`, set `"en"`.
   - Do this from the same place that provides `language` (e.g. `LanguageContext` or a small effect in `App`/layout that runs when `language` changes).

3. **Password gate (optional)**
   - If you want to reduce friction for reviewers: add one short line of copy, e.g. “Password provided in the brief” or “Request access via [email/LinkedIn].”
   - Optionally add `aria-describedby` to the input pointing to that text for screen readers.

4. **Project card images (optional)**
   - If you want card thumbnails: add the missing hero images under `public/images/projects/` to match `portfolio.ts` (e.g. `here-design-system.jpg`), or change the data to use existing assets. If you prefer text-only cards, leave as is.

---

## Trade-offs

| Option | Pros | Cons |
|--------|------|------|
| A) Add Contact + nav link only | Small change; completes primary user goal. | None significant. |
| B) Add Contact + nav + set `lang` from context | Better a11y and i18n consistency. | One extra effect/sync point. |
| C) Remove password for public URL | No gate friction for recruiters. | Content visible to everyone. |
| D) Keep password, add short explanation | Same security; clearer for recipients. | Slightly more UI. |

**Recommendation:** Do A and B. Consider D if you keep the password.

---

# Part 2 — Design Consultant

Review against hierarchy of design needs (Functionality → Reliability → Usability → Proficiency → Creativity), Rams, Gestalt, typography, color, spacing, and WCAG.

---

## 1. Functionality & reliability

- **Contact not reachable:** The Contact block is not in the document and not in the nav. From a “does it work?” perspective, the primary conversion path (view work → get in touch) is broken. **Must fix** by adding the section and a Contact nav item.
- **Password gate:** Works (submit, error state, persistence). No show/hide password control; acceptable for a simple gate. Optional: short explanatory copy.

---

## 2. Usability & clarity

- **Navigation:** Work, About, Experience are clear. Missing Contact makes the site feel incomplete and hides how to reach you.
- **Project overlay:** Back, prev/next, and Escape are present. Counter (e.g. “2 / 9”) supports orientation. **Good.**
- **Filter pills:** “All” plus Design Systems, User Research, Product Design, AI — clear and consistent with card tags.

---

## 3. Visual hierarchy & typography

- **Bringhurst / measure:** Content is constrained (e.g. `max-w-3xl`, `max-w-6xl`). Body and project detail copy should stay within roughly 45–75 characters per line on large screens; current widths support that.
- **Levels of distinction:** Hero (large headline) → section headings → body. Avoid introducing more than 3–4 distinct type levels; current structure is in line with that.
- **Readability:** Body uses `text-sm sm:text-base` and muted foreground; contrast should meet WCAG AA. Recommend spot-checking `muted-foreground` on both backgrounds (e.g. in dark mode) to ensure ≥4.5:1 for body text.

---

## 4. Color & 60-30-10

- **Palette:** Google-inspired neutrals and primary blue. Limited palette is appropriate (Albers: less is more).
- **Semantic use:** Primary for CTAs and focus ring; destructive for errors. Consistent.
- **Dark mode:** Separate token set for `.dark`; ring and primary adjusted. Good base; verify focus visibility on all interactive elements in dark theme.

---

## 5. Spacing & grid

- **8pt grid:** Tailwind and padding (e.g. `p-4`, `p-6`, `gap-4`, `gap-6`) align with 8px rhythm. No obvious arbitrary values.
- **White space:** Sections have breathing room (`py-24`, `pb-12`, etc.). Project cards use padding and gap; layout is not cramped (Prägnanz).

---

## 6. Consistency & components

- **Cards:** Company strip, title, description, filter pills — same structure across projects. Good.
- **Buttons:** Hero uses filled primary + outline; focus-visible is centralized in CSS. Header icon buttons use ghost style. Consistent.
- **Mobile frame:** Used for app screenshots in case studies; clear figure/ground and consistent treatment.

---

## 7. Accessibility (WCAG)

- **Focus:** `*:focus-visible` with 2px primary outline and offset. Good.
- **Skip link:** Present and moves focus to content. Good.
- **Landmarks:** `<main>`, `<nav>`, `<footer>`, section structure. Good.
- **Language:** `html` `lang` should reflect current UI language (see Technical Precursor). **Should fix.**
- **Password field:** No `autocomplete`; for a one-off gate this is acceptable. Consider `autocomplete="current-password"` if you want to align with best practices without changing behavior.

---

## Design consultant summary

| Category | Verdict | Action |
|----------|--------|--------|
| Critical (must fix) | Contact missing from page and nav | Add Contact section and nav link |
| Should fix | `lang` not synced to language | Set `document.documentElement.lang` from language context |
| Refinements | Contrast and touch targets | Spot-check muted text contrast; ensure 44–48px touch targets on mobile nav and icon buttons |

**Theory references:** Dieter Rams (honest, useful, as little design as necessary); Gestalt (proximity and similarity in cards and nav); Bringhurst (measure and hierarchy); WCAG 2.1 (perceivable, operable, understandable).

---

# Suggested implementation order

**Applied (no Contact — LinkedIn used for contact):**

- ~~1–2. Contact section and nav~~ — Skipped per your preference; LinkedIn is the contact path.
- 3. `document.documentElement.lang` — Already implemented in `LanguageContext` (effect runs when `language` changes).
- 4. Password gate: Added one line (“Request the password via LinkedIn”) and `aria-describedby="password-gate-hint"` on the input; password input uses `text-base` for readability.
- 5. Readability: Project detail body uses `text-base`, `leading-relaxed`, and `max-w-prose` (~65ch) so lines stay readable; image captions use `text-sm` instead of `text-xs`; theme and menu buttons have 44px min touch targets on mobile; mobile nav links have `min-h-[44px]`.

**Not applied:** Project card hero images (optional; cards remain text-only).
