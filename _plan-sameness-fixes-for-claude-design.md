# Sameness fixes — instructions for Claude Design

Five fixes from the 12 Oct design review. Each section stands on its own, so you can paste
them one at a time. Counts are from the 12 Oct export (100 English pages; Thai pages noted
where they're affected).

Applies to every section: only change what the section asks for. Don't restyle, re-space or
rewrite anything else on the page.

---

## Fix 1 — Cut the eyebrow labels (middle option)

**What an eyebrow is:** the small, uppercase, letter-spaced blue label that sits directly
above a heading (e.g. `FOOTPRINT` above "Where we build").

**Where they are:** about 212 decorative eyebrows on 85 pages. Markets pages have the most
(100 on 36 pages), then Capabilities (61 on 30 pages), then Locations (28 on 6 pages).
The site builds them at least eight different ways: `.mk-eyebrow`, `.hana-spec-label`,
`.auto-eyebrow`, `.eyebrow`, `.cf-eyebrow`, `.section-label-mono`, `.pillar-label`, and
inline-styled `<div>`s (all the capability-page ones are inline styles).

**The approach:** keep the hero eyebrows that name the page's place in the site
("Microelectronic assembly · Interconnect Solutions"), swap the generic market-hub one for a
small design accent, and remove the rest.

| | Count | Share |
|---|---|---|
| Kept as text: capability and market page heroes, plus one on the homepage | ~58 | ~27% |
| Replaced with a design accent: market hub heroes | 11 | ~5% |
| Removed | ~143 | ~67% |

Data labels (timeline years, director roles, step numbers and so on) aren't counted above.
They all stay; see "Keep these" below.

### Instruction

> Remove an eyebrow when it repeats the heading under it or is a generic section word. Keep
> the hero eyebrows on capability and market pages listed under "Keep as text". Remove the
> element itself rather than hiding it with CSS, and take out any leftover top margin on the
> heading so the spacing above it stays the same as before.

### Keep as text: page heroes on capability and market pages

These follow the pattern **`[Parent] · [This page]`** above the H1. Keep the pattern and make
every page follow it:

- **Capability sub-pages (25):** keep as they are, e.g. `Microelectronic assembly ·
  Interconnect Solutions` above "Interconnect solutions". Six of them use a filler word
  instead of the page name. Change these:

  | Page | Now | Change to |
  |---|---|---|
  | capabilities-osat-flip-chip | `OSAT · Sub-capability` | `OSAT · Flip Chip & Interconnect` |
  | capabilities-pcba-box-build-box-build | `PCBA & Box Build · Sub-capability` | `PCBA & Box Build · Box Build Assembly` |
  | capabilities-pcba-box-build-cob-assembly | `PCBA & Box Build · Sub-capability` | `PCBA & Box Build · COB Assembly` |
  | capabilities-pcba-box-build-smt-assembly | `PCBA & Box Build · Sub-capability` | `PCBA & Box Build · SMT Assembly` |
  | capabilities-automation-mes-traceability | `Automation & Smart Manufacturing · Sub-capability` | `Automation & Smart Manufacturing · Manufacturing Traceability` |
  | capabilities-automation-robotic-smart-manufacturing | `Automation & Smart Manufacturing · Sub-capability` | `Automation & Smart Manufacturing · Robotic & Smart Manufacturing` |

  On capabilities-osat-power-packages, the eyebrow `OSAT · Power Packages — SiC & GaN` becomes
  `OSAT · Power Packages (SiC & GaN)` (see Fix 4).

- **Capability hub pages (6):** these say only `Capability`. Change to the same pattern:
  `Capabilities · OSAT`, `Capabilities · PCBA & Box Build`, `Capabilities · Microelectronic
  Assembly`, `Capabilities · RFID & Smart Tags`, `Capabilities · Automation & Smart
  Manufacturing`, `Capabilities · DFx & JDM Collaboration`.
  Keep `Capabilities` on capabilities.html as it is.

- **Market sub-pages (25):** keep as they are, e.g. `Medical · Medical PCBA`. The five
  Automotive sub-pages use a dash (`Automotive — LED Lighting`, `.auto-eyebrow`). Change the
  dash to a middle dot so they match: `Automotive · LED Lighting`.

### Replace with a design accent: market hub heroes (11 pages)

`MARKETS WE SERVE` on the 10 market hubs (access-control, automotive, consumer-electronics,
data-centers, industrial-iot, medical, optical-sensors, power-management, rfid,
telecommunications), and `Markets` on markets.html.

Mockups of the options are in `_plan-eyebrow-accent-options.png`.

> Replace the text eyebrow with a short blue bar: 40px wide, 3px tall, `var(--hana-blue)`,
> 2px rounded corners, with 18px of space below it before the H1. It's decorative, so use an
> empty element (e.g. `<span aria-hidden="true">`), not text. Use the same bar on all 11
> pages. If a hero has a dark background, use `var(--hana-blue-soft)` so it stays visible.
> Define it once as a shared class (e.g. `.hero-accent`) rather than inline styles on each page.

This is option B in the mockup.

### Remove these everywhere

| Eyebrow text | Pages | Heading it sits above |
|---|---|---|
| `FOOTPRINT` | 29 (all market + sub-market pages) | "Where we build…" |
| `FAQ` | 29 (all market + sub-market pages) | "…frequently asked" |
| `THE CAPABILITY BEHIND IT` | 5 (market sub-pages) | capability link section |
| `WHY [X] BUYERS CHOOSE HANA` | 8 (market hubs) | the "why" H2 |
| `CHOOSE A DETAILED CAPABILITY` | 6 (capability hubs) | "Explore [X]" |
| Other section eyebrows inside capability pages (e.g. `PROCESS DEVELOPMENT`, `ENGINEERING, NOT SALES`, `PRECISION AT SMALL SCALE`) | ~25 | the matching H2 |
| `FACTORY SETUP`, `EXAMPLE PRODUCTS`, `LOCATION & LOGISTICS` | 5 plant pages each | the matching H2 |
| `ABOUT HANA [PLANT]`, `[COUNTRY] · [PLANT]` | 5 plant pages each | the plant H1 / H2 |
| `WHO WE SERVE`, `WHAT WE DO`, `OUR LOCATIONS` | homepage | "Markets we serve", "Browse our capabilities", "Our global footprint" |
| `CERTIFICATIONS HELD AT THIS SITE` | plant pages | keep the certificate cards, drop the label |
| `CULTURE & DEVELOPMENT`, `HEAR IT FROM US`, `HANA STORIES` | careers, careers-stories | "Life at Hana", "Hana Stories" |
| `GET IN TOUCH`, `START A PROJECT`, `START WORKING WITH HANA`, `REQUEST FOR QUOTE` | contact, contact-rfq | the form H1 / H2 |
| `ABOUT`, `THE HANA ADVANTAGE`, `GEOGRAPHIC RESILIENCE`, `TRACK RECORD`, `MARKETS SERVED` | about.html | the matching H2 |
| `FEATURED SECTION` | investor-relations.html (`.fb-label`) | "Investor news". This is leftover template text. |

### Keep these. They're information, not decoration

- Year labels on the history timeline (`.t-year`, about-history.html)
- Director roles on leadership cards (`EXECUTIVE DIRECTOR`, `INDEPENDENT`)
- Certificate codes (`.cert-code`), IR event types (`EARNINGS CALL`, `ANALYST MEETING`)
- Step numbers in process diagrams (`STEP 01`, `01 / 02 / 03`)
- Form step labels on careers-apply (`APPLICATION — STEP 2 OF 2`, but see Fix 4 for the dash)
- **One** eyebrow on the homepage: `WHAT SETS US APART` above "From wafer to finished product"

**Result to aim for:** hero eyebrows on capability and market pages only (plus the one on the
homepage), and no decorative eyebrows further down any page.

**Thai pages:** apply the same changes to the matching sections in `thai-pages/`.

---

## Fix 2 — Limit the monospace font to numbers and specs

**What it is:** IBM Plex Mono, a "typewriter" font where every letter is the same width. It
reads as "technical data", which is right for a spec like `80µm` or `ISO 13485` and wrong for
a button or a filter.

**Where it is:** set as `--font-mono` in `css/_tokens.css`, but also hard-coded as
`'IBM Plex Mono'` 168 times across the CSS. Most of it is in Investor Relations
(about 155 declarations across the `investors-*.css` files) and Careers (`careers.css` 26,
`careers-apply.css` 18, `careers-job-post.css` 14, `careers-stories.css` 13).

### Instruction

> Use monospace only for numbers, measurements, part and package codes, certificate codes,
> and the share price ticker. Everywhere else, switch to the body font (`var(--font-text)`).
> While you're there, replace every hard-coded `'IBM Plex Mono'` with `var(--font-mono)` so
> the font can be swapped from one place later.

**Keep in monospace:** spec strips on capability pages (`80µm`, `C4 / Cu`, `CUF / NUF`),
certificate codes (`ISO 9001`, `IATF 16949`), package names in the package finder, SET
ticker (`HANA ฿24.50 +1.24%`), FAQ / step numbers.

**Switch to the body font:**

- Careers: hero buttons (`.hero-actions a`: "View open roles", "Hana Stories"), the location
  tabs (`.life-tab`), story filters (`.filter-btn`, `.filter-country`), `.story-year`
  ("Joined 2017"), `.read-more`, `.job-apply`, `.ceo-from`, `.ceo-attrib span`, `.stat-lbl`,
  `.section-label-mono`, `.page-end a.btn`, `.cta-band .btn`
- Investor Relations: section labels (`.section-label`, `.fb-label`, `.sp-label`), buttons
  and CTAs (`.fb-cta`, `.ic-cta`, `.page-end a.btn`), badges and dates (`.ic-badge`, `.ic-date`)
- Photo captions sitewide (e.g. "SMT LINE · INSPECTION CONSOLE" on the homepage, `.tr-shot
  figcaption` on About)
- The homepage hero pill ("EMS · OSAT · Microelectronics")
- Location tags on cards ("PCBA · EMS", "Headquarters")

**Note:** a new font pairing is in progress, so this may be redone with that. Routing
everything through `var(--font-mono)` first makes that change a one-line edit.

---

## Fix 3 — The blue icon tiles (correction: not placeholders)

**Correction to the review:** the blue squares I reported as "placeholder icons" do show icons
for normal visitors. They looked empty in my screenshots because my test browser couldn't
reach the icon library. They're Lucide icons (shield, layers, globe, check, flame…) in 34px
blue rounded tiles.

**Where they are:** 62 tiles on 24 capability detail pages (the "Capability overview" cards:
every `capabilities-*-*.html` sub-page), plus 4 on `markets-automotive.html` ("The Hana
automotive advantage", `.auto-advcard .ic`).

**Two real problems remain:**

1. **Sameness.** A white line icon inside a blue rounded square, above a card title, is one of
   the most common AI-template patterns. The icons are also loosely matched (a flame for
   "Interconnect", a check mark for "Relationships that last").
2. **Fragility.** Every page loads the icons from
   `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`: an outside server, with no fixed
   version. If that server is slow, blocked (some company networks block it, and it can be
   unreliable from mainland China), or ships a breaking update, visitors get the empty blue
   squares I saw. On 120 pages it would also break the other icons (arrows, chevrons, search).

### Instruction

> On the 24 capability detail pages and on markets-automotive.html, remove the blue icon
> tile from each card in "Capability overview" and "The Hana automotive advantage". Keep the
> card title, text and bullet list. Close the gap the tile leaves so the card title sits at
> the top of the card padding.
>
> Separately, stop loading Lucide from unpkg with `@latest`. Download one fixed version
> (e.g. `lucide@0.460.0`), save it as `js/vendor/lucide.min.js`, and point every page at
> that local file.

---

## Fix 4 — Cut back the em dashes

**Answer to "is it the capability overview?":** no. The Capability overview cards have only
about 5, inside spec bullets. The em dashes that appear most consistently are in text that
repeats on every page:

| Where | How often | Example |
|---|---|---|
| Mega-menu descriptions | 3 lines × all 100 pages | "A global electronics manufacturer since 1978 — EMS, OSAT…" |
| The "Power Packages — SiC & GaN" name | all 100 pages (menu), plus sidebar, H1, page title | |
| Browser tab titles (`<title>`) | 88 of 100 pages | "Power Packages — SiC & GaN — capabilities — Hana Microelectronics" |
| Plant page "About" paragraphs | 22 | "Ayutthaya is Hana's core OSAT operation — packaging and…" |
| Capability FAQ answers (`.sc-faq-a`) | 12 | "Yes — SiC on DBC assembled into…" |
| Capabilities hub card descriptions (`.cap-node-desc`) | 6 | "The precision end of the group — flip chip, MEMS…" |
| About page body (`.t-body`, vision / mission) | ~14 | "To be the EMS partner of choice — delivering…" |

### Instruction

> Replace em dashes (—) with ordinary punctuation. Pick whichever fits the sentence: a full
> stop, a comma, a colon (before a list), or brackets (around an aside). Don't swap them for
> en dashes (–) or hyphens. Leave number ranges such as "860–960 MHz" alone; those are en
> dashes and correct.
>
> **Don't change:** Investor news document titles (about 73 links). They're official SET
> filing names.

**Exact rewrites for the text that repeats on every page:**

- "A global electronics manufacturer since 1978 — EMS, OSAT, and microelectronics under one
  operating standard."
  → "A global electronics manufacturer since 1978. EMS, OSAT and microelectronics under one
  operating standard."
- "From automotive power modules to AI data-center infrastructure — production tuned to each
  market's reliability bar."
  → "From automotive power modules to AI data-center infrastructure, with production tuned to
  each market's reliability bar."
- "Manufacturing across Thailand, Cambodia, China, and the USA — geographic resilience built in."
  → "Manufacturing across Thailand, Cambodia, China and the USA, with geographic resilience
  built in."
- "Power Packages — SiC & GaN" → "Power Packages (SiC & GaN)", in the menu, sidebar,
  breadcrumb, H1 and title.
- Page titles: "[Page] — [section] — Hana Microelectronics" →
  "[Page] | [Section] | Hana Microelectronics"

**Order of work:** the repeating menu and titles first (biggest visible change for the least
effort), then plant pages, capability FAQs, the capabilities hub and About.

**Thai pages:** the mega menu and titles exist there too. Apply the same changes.

---

## Fix 5 — Make the company numbers agree

**Decided:** headcount is **7,500+** everywhere.

**Don't touch the homepage hero video** (`videos/hp-hero-loop.mp4`) or its still (`images/photos/hp-hero-poster.webp`). Its "8000+ Employees" and "5 Countries" are being re-edited separately.

| Where | Says now | Change to |
|---|---|---|
| careers.html hero (English) | "over 7,500+ people" | "more than 7,500 people" ("over" plus "+" says it twice) |
| careers.html CEO letter (English) | "We have over 10,000 staff" | "We have more than 7,500 staff" |
| thai-pages/careers.html CEO letter | "พนักงานมากกว่า 10,000 คน" | "พนักงานมากกว่า 7,500 คน" |

⚠️ Don't change "10,000 m²" on about-history.html. That's a building's floor area, not people.

**Other mismatches found. These need your decision before Claude Design changes them:**

| Claim | Where | Conflicts with |
|---|---|---|
| **5 Countries** | homepage hero video / poster (video being edited separately) | "four countries" on about, locations, markets-automotive, smt-assembly; "4 countries" on careers. Every page lists only Thailand, Cambodia, China and the USA. |
| **50+ Years manufacturing** | careers.html stat strip (and Thai careers) | Founded 1978, which is 48 years in 2026. Suggest "Since 1978" or "45+ years". |
| **6 production facilities / six facilities** | careers.html | "five plants" on markets-automotive.html. Probably both right (Lamphun has two plants; automotive may run at five of the six), but confirm the official count. |
| **20 years / 20+ years** | 6 market pages, about, locations-jiaxing | Fine if it refers to specific programs. Check each says *what* is 20 years old. |
