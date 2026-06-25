# Hana — static HTML site (uploadable)

A flat, self-contained static mirror of the Hana corporate site, generated from the
ASP.NET Core Razor export (`exports/razor-pages/`). Every route is a plain `.html`
file at the root; navigation, header/footer mega-menus, the locations map, the IR
hero backgrounds, and the Automotive pages all work with no server.

**Start at `index.html`.** Upload the whole folder to any static host (or open
`index.html` directly).

## What's inside
- 46 pages — Home, About (4), Capabilities (12), Careers (5), Contact (2),
  Investor Relations (8), Locations (7), Markets/Automotive (6), Sitemap.
- `css/`, `js/`, `images/`, `fonts/` — all assets, referenced relatively.

## Route → file naming
Slashes become dashes: `/markets/automotive/power-modules` → `markets-automotive-power-modules.html`,
`/investor-relations/esg` → `investor-relations-esg.html`, `/` → `index.html`.
Links between pages are rewritten to match. A few nav targets that have no page yet
(e.g. most `/markets/*`, `/news`, `/privacy`) point to `#`.

## Latest changes (25 Jun 2026 — mirror of the Razor export)
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
