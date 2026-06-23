# Hana — static HTML site (uploadable)

A flat, self-contained static mirror of the Hana corporate site, generated from the
ASP.NET Core Razor export (`exports/razor-pages/`). Every route is a plain `.html`
file at the root; navigation, header/footer mega-menus, the locations map, the IR
hero backgrounds, and the Automotive pages all work with no server.

**Start at `index.html`.** Upload the whole folder to any static host (or open
`index.html` directly).

## What's inside
- 42 pages — Home, About (4), Capabilities (12), Careers (5), Contact (2),
  Investor Relations (8), Locations (7), Markets/Automotive (2), Sitemap.
- `css/`, `js/`, `images/`, `fonts/` — all assets, referenced relatively.

## Route → file naming
Slashes become dashes: `/markets/automotive/power-modules` → `markets-automotive-power-modules.html`,
`/investor-relations/esg` → `investor-relations-esg.html`, `/` → `index.html`.
Links between pages are rewritten to match. A few nav targets that have no page yet
(e.g. most `/markets/*`, `/news`, `/privacy`) point to `#`.

## Today's changes (also in the Razor export)
- Header: single **Contact** CTA. Footer: added **FAQ & Knowledge Hub**.
- Locations world map: cropped SVG framing (no empty bottom band).
- IR hero/enquiries backgrounds now paint (shared `js/investors-bg.js`).
- New: **Automotive market hub** + **Power Modules** sub-market.

*This static bundle is for review/upload. The editable source of truth is the Razor
project in `exports/razor-pages/` — hand that to your developer.*
