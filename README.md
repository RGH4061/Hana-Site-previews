# Hana — static HTML site (uploadable)

A flat, self-contained static mirror of the Hana corporate site, generated from the
ASP.NET Core Razor export (`exports/razor-pages/`). Every route is a plain `.html`
file at the root; navigation, header/footer mega-menus, the locations map, the IR
hero backgrounds, and the Automotive pages all work with no server.

**Start at `index.html`.** Upload the whole folder to any static host (or open
`index.html` directly).

## Latest changes (13 Aug 2026 — search upgrade + package finder)
Installed from `hana-search-plus-package-finder`. Two search surfaces, one input.

- **Index rebuilt to 108 pages** (`js/search/data.js`), regenerated from the pack's mockup so
  ranking here is the pack's behaviour, not a re-implementation. Adds the OSAT restructure
  (12 sub-pages), Data Centers as a tenth market, and the renamed
  `/capabilities/osat/clear-mold-packaging` (was `/optical-packaging`).
- **Two new vocabulary sources indexed** — the "What we specialize in" sections on 26 Markets
  sub-pages and the product strips on 9 Markets hubs. Plus exact-phrase matching, a URL-depth
  edge and section weights (Capabilities ×1.35). `fiber-optic components`, `dual cool`,
  `hotel safes` and `thermoelectric coolers` all resolve; `bumping` still returns nothing,
  deliberately.
- **Package finder** — `capabilities-osat-package-finder.html`, 117 rows across 13 categories
  (`js/search/packages.js`, `js/package-finder.js`, `css/package-finder.css`). Filters by
  category, automotive grade and largest body edge, with a paste field that parses
  `QFN32 5x5`. Sortable table, near-miss block on a dimension with no exact match, and the
  dark customize band on every state. Accepts `?q= ?cat= ?grade= ?max=` and writes them back,
  so a filtered view is linkable.
- **The handoff** — a query that reads as a package (`3x3`, `QFN32`, `Grade 0`, `TO247`)
  returns a package card above the page results and opens the finder pre-filtered. Ordinary
  text searches are untouched.
- **No status or availability column**, by decision — the finder shows what a package is. The
  two SiP rows the reference marks "On Going Qualify" are held out of the searchable set
  rather than shown without their caveat (117 rows, not 119).
- **Package Finder added to the mega-menu** as the first OSAT item, above the group labels,
  on all 104 pages and in `js/search-shell.js`.
- **Embedded, pre-filtered** on Ultra-small Packages (leaded + automotive-qualified bodies)
  and QFN, DFN & LGA (leadless + thickness), so those pages' tables are live rather than static.

**Clear Mold Packaging keeps its old filename by decision (Rupert, 14 Aug 2026).** The page
lives at `capabilities-osat-optical-packaging.html` while the index carries the restructured
URL `/capabilities/osat/clear-mold-packaging/`; the `FILE` map in `js/site-search.js` bridges
the two. If the file is ever renamed, drop that one mapping line with it.

**One thing left over from the restructure, flagged not fixed** — the retired
`capabilities-osat-die-attach-wire-bond.html` is still in the folder but unlinked from search.
That's a content-page job rather than a search one.

## Earlier changes (13 Aug 2026 — Korea detached)
Korea / Cheongju is unlinked site-wide: mega-menu Korea column, homepage location
card and Place schema, locations hub plant card, world-map marker and map data,
sitemap entry (locations branch now 5 pages), search index and search-shell header.
Footprint copy now reads "four countries" and omits Korea from the country lists.

**Kept, but unlinked** — locations-cheongju.html is untouched and can be re-linked as-is if the
direction reverses. Nothing else references it.

**Left in place on purpose** — About / History milestone "Power Master
Semiconductor, in Korea", the PMS Korea commentary on the IR FAQ, and the Korea
entity in the IR group-structure diagram (corporate record, not location marketing).

## What's inside
- 68 pages — Home, About (4), Capabilities (29), Careers (5), Contact (2),
  Investor Relations (8), Locations (7), Markets/Automotive (6), Sitemap.
- `css/`, `js/`, `images/`, `fonts/` — all assets, referenced relatively.

## Route → file naming
Slashes become dashes: `/markets/automotive/power-modules` → `markets-automotive-power-modules.html`,
`/investor-relations/esg` → `investor-relations-esg.html`, `/` → `index.html`.
Links between pages are rewritten to match. A few nav targets that have no page yet
(e.g. most `/markets/*`, `/news`, `/privacy`) point to `#`.

## Earlier changes (27 Jul 2026 — all 23 sub-capability pages)
Every sub-capability now has its own full page, generated from the sub-capability
content source (`subcap-template/*.data.jsx`): hero + spec strip, three-pillar
capability overview, "why run this with Hana" rows, BOM band, sites, FAQ and closing CTA.

- **17 new pages** — OSAT (5), Microelectronic Assembly (4), DFx & JDM (3),
  Automation (3), RFID & Smart Tags (2).
- The five combined `capabilities-*-detail.html` pages have been **removed** —
  every mega-menu, sidebar and hub-card link now resolves to the real page
  (no more `#anchor` stand-ins).
- 68 pages total (Insights, legal and policy pages included).

## Earlier changes (27 Jul 2026 — CTA label sync)
All capability and market CTAs now carry the live labels:
- Sub-capability RFQ band: "Send to engineering" → **Start a program**
- Capability/detail closing CTA: leftover ghost "Talk to an engineer" → single primary
  **Work with us**
- Capability sidebar nudge: "Talk to engineering" → **Work with us**
- Market closing CTAs (automotive hub + 5 sub-markets): "Start a quote" +
  "Talk to an engineer" → single **Start a program**
- Market sidebar nudge → **Work with us**

(Contact and RFQ form pages keep "Request a quote" — that is the page's own name.)

## Earlier changes (27 Jul 2026 — hub styling sync)
- **Capability hub pages** now match the live design exactly: the deep-blue
  "choose a detailed capability" panel is an **inset rounded (16px) card nested
  inside the white flow band**, not a full-bleed section; hero band padding and
  hero/panel rhythm match the live template.
- Real hero photography on PCBA & Box Build, RFID & Smart Tags and Automation
  (placeholder frames remain where no photo has been supplied).
- Sidebar "Overview" no longer falsely highlighted on hub pages.
- Breadcrumb "Capabilities" renders sentence case (was uppercase).
- PCBA hub reads "PCBA and box build **assembly**" in title, H1, breadcrumb and
  the Box build assembly card.

## Earlier changes (27 Jul 2026 — export refresh)
- **Capability hub pages** (all six): detailed-capability cards rebuilt as uniform
  cards (consistent shape/background; placeholder images and "Page in progress"
  badges removed) and every card now links through. Closing CTA panel removed —
  the hub's job is to route visitors into a capability choice.
- **New: one detail page per capability group** — `capabilities-osat-detail.html`,
  `-microelectronic-assembly-detail`, `-rfid-smart-tags-detail`, `-automation-detail`,
  `-dfx-jdm-detail`. Each carries an anchored section per sub-capability
  (e.g. `...-osat-detail.html#wafer-processing`). PCBA & Box Build keeps its three
  existing per-process pages; OSAT Flip Chip keeps its dedicated page.
- **Sub-capability navigation connected**: every mega-menu and sidebar leaf that
  previously pointed at `#` now resolves to a real page/anchor.
- **"Box Build" → "Box Build Assembly"** in sidebar, mega-menu and breadcrumbs.
- **"Request a quote" removed** from all capability and market pages (the contact
  and RFQ form pages are unchanged).
- **Why Hana** (`about.html`): flow diagram updated — Step 04 is now "SMT / COB",
  added the "NPI to full production" point and the DFx & JDM feedback loop.

## Earlier changes (25 Jun 2026 — mirror of the Razor export)
- **Header/footer (all pages):** trimmed PNG logo lockup; About mega-menu reduced to two columns; synced menu copy (Markets blurbs, "Manufacturing Traceability", DFx/JDM/NPI labels, "Investor FAQ & Knowledge Hub").
- **Capabilities hub** (`capabilities.html`): rebuilt as the radial diagram (dark globe-backed hero, six capability nodes around the Hana mark; nodes position via inline JS at ≥980px).
- **Automotive:** all five sub-markets now live. New: `markets-automotive-sensor-assembly.html` (interactive cutaway hero), `-led-lighting`, `-rfid-tire-tags`, `-automotive-pcba`; `-power-modules` rebuilt to the current template; hub cards link through to all five.
- **Investor Relations** hub feature banner relabeled "Investor Financial News".

## Earlier changes
- Header: single **Contact** CTA. Footer: added **FAQ & Knowledge Hub**.
- Locations world map: cropped SVG framing (no empty bottom band).
- IR hero/enquiries backgrounds now paint (shared `js/investors-bg.js`).
- New: **Automotive market hub** + **Power Modules** sub-market.

*This static bundle is for review/upload. The editable source of truth is the Razor
project in `exports/razor-pages/` — hand that to your developer.*
