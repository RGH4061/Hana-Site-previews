# Markets

Page specs and content plans for the **Markets** menu — the buyer-facing taxonomy
(formerly "Industries"; renamed to "Markets" site-wide, including `/markets/...` slugs).

## Structure (built 06 Jul 2026 · fully drafted 28 Jul 2026)

One folder per market pillar. Inside each folder:

- `_hub.md` — the pillar (hub) page plan
- `<slug>.md` — one file per product page, named by its URL slug
  (e.g. `Automotive/power-modules.md` = `/markets/automotive/power-modules/`)

**`_PUBLISH-CHECKLIST.md`** (this folder) is the consolidated pre-publish verification list —
38 open decisions with owners and the deck/page to open for each. Work through it before launch.

**10 market pillars · 26 product pages · all drafted.** Nothing is a placeholder.

| Folder | URL | Product pages | Status |
|---|---|---|---|
| Automotive | `/markets/automotive/` | 5 | **Drafted.** Hub is *deliberately bespoke* (interactive piece) — do not reconcile it to the standard hub profile |
| Data Centers | `/markets/data-centers/` | 0 | **Drafted.** Two strands: TEC thermal + high-density PCBA for optical test. No product pages by design |
| Industrial & IoT | `/markets/industrial-iot/` | 4 | **Drafted.** Its built HTML page is the reference template for all other hubs |
| Telecommunications | `/markets/telecommunications/` | 1 | **Drafted.** ⚑ Telecom PCBA was **dropped** 28 Jul — remove its row from the URL Structure tab |
| RFID | `/markets/rfid/` | 3 | **Drafted.** Tire tags canonical → Automotive |
| Optical & Sensors | `/markets/optical-sensors/` | 3 | **Drafted** |
| Consumer Electronics | `/markets/consumer-electronics/` | 2 | **Drafted.** Wireless charging = canonical for the site |
| Medical | `/markets/medical/` | 4 | **Drafted.** Wireless charging canonical → Consumer |
| Access Control | `/markets/access-control/` | 2 | **Drafted** |
| Power Management | `/markets/power-management/` | 2 | **Drafted** |

Market hero images live in this folder (`.png` + `web/*.webp`).

## Page models

**Hubs** follow the built Industrial & IoT template: Hero (eyebrow → H1 → intro → **Product
examples** hero strip → CTA) → dark market-context band with 3 points → **Product examples** cards
→ `### Where we build` → FAQ → closing CTA. **No capability-card row.**
Automotive is the deliberate exception.

**Product pages** follow the Automotive prose model: front-matter → H1 → eyebrow
`**<Market> · <Product name>**` → intro (opens on process) → `## What we specialize in` →
`## Where we build` → capability cross-link → 3 FAQs → CTA → HTML-comment VERIFY block.
Roughly 350–450 words of body copy.

**Section naming and structure (set 28 Jul 2026, Rupert).**

| Change | Detail |
|---|---|
| `One company, more than one country` → **`Where we build`** | Plainer and more general. The dual-source framing still lives in the body copy — only the heading changed. Also absorbed two off-pattern variants: "…more than one site" (Telecom RF) and "Two decades of RFID, in more than one country" (Automotive tire tags). |
| `What we build` / `What we assemble` → **`What we specialize in`** | "Products" was dropped from the heading because several bullets name a process rather than a product (inspection coverage, underfill and coating, secure chip handling). "What we specialize in" covers both honestly. |
| **Differentiator section removed** | The per-page "why this is hard / how Hana does it" section came out of all 26 product pages — too much text on the page. Removed copy is archived in `_REMOVED-differentiator-sections.md` in case any of it is wanted back, or wanted on the hub instead. |

> ⚠️ **T31 consequence.** That differentiator section was what carried each page's distinctness.
> With it gone, T31 now rests entirely on the **intro** and the **`What we specialize in` bullets** —
> so those must stay genuinely market-specific. Watch this most closely where the same product
> appears in several markets: PCBA (Automotive · Industrial · Medical), power modules (Automotive ·
> Industrial · Power Management), MEMS sensors (Medical · Optical), wireless charging (Consumer ·
> Medical) and RFID cards (Access Control · RFID).

**Sidebar rail (all product pages).** Every product page carries a persistent left rail listing
**all product pages in its market**, with the current page marked active. The rail is collapsible
(labels reduce to a two-letter abbreviation) and closes with a helper card: a short market-specific
prompt plus a **Contact us** link. Its heading is `<Market> products` — never "sub-markets".
Markets with a single product page (Telecommunications) still show the rail for structural
consistency; markets with no product pages (Data Centers) do not.

The rail is **generated, not hand-maintained**. Two front-matter fields on every product page drive
it, and each `_hub.md` carries its market's helper-card line under `### Sidebar rail`:

```yaml
sidebar_abbr: PB        # two letters, shown when the rail is collapsed
sidebar_order: 1        # position of this page in its market's rail
```

| Market | Rail order (abbr) |
|---|---|
| Access Control | RC · SL |
| Automotive | PM · SA · LL · RT · AP |
| Consumer Electronics | SS · WC |
| Industrial & IoT | PB · ID · RT · PM |
| Medical | HA · MS · PB · WC |
| Optical & Sensors | CM · MS · MD |
| Power Management | IS · PD |
| RFID | RC · TI · TT |
| Telecommunications | RF |

**Breadcrumbs.** Third level is the **product name**:
`Markets › Industrial & IoT › PCBA & Box Build`.

**Terminology:** the word "sub-market" must not appear in any breadcrumb, rail heading, section
heading or body copy — use the actual product name.

**Spelling: American English throughout** (`program`, `ruggedized`, `fiber`, `data center`,
`analyzer`, `inquiry`) per `Brand/brand-brief.md` and `hana-design-system.md`. All 36 files were
converted 28 Jul 2026 — 379 corrections, including `tire` (not `tyre`), which also matches the
URL slugs and filenames. Watch for `-ise/-isation`, `-re` endings and `programme`
creeping back in.

## Working rules for these pages

- **Register:** hubs = accessible but written for *industry professionals*. Product pages =
  *technical* industry professionals — open on process, not scene-setting. Capability depth
  still lives on `/capabilities/` pages.
- **CTA:** Contact us only — the RFQ portal was dropped (July 2026).
- **T31 distinct-content rule:** every industry-specific PCBA / sensor / power /
  wireless-charging page must have genuinely different copy tied to that market's applications.
  The differentiator section is what carries this.
- **No shared boilerplate.** The identical inspection/test bullet was removed from all market
  PCBA pages and lives only on the SMT capability brief. Watch for this pattern recurring.
- **No customer names** — and no end-customer / hyperscaler names.
- **Multi-site framing** = "dual-source from multiple countries within the same company" —
  never plant migration, never "China+1".

### The four copy rules (added Jul 2026 — see `_PUBLISH-CHECKLIST.md`)

1. **No product-lifespan or durability-outcome claims.** Hana builds to the customer's design,
   so how long their product lasts is not Hana's to promise. Claim Hana's build, process,
   inspection and experience instead.
2. **Say what Hana CAN do, not what it does.** Services are a menu the customer selects from.
3. **Never describe the customer's product function or performance.** Describe Hana's build.
   Market-tier shorthand ("5G", "EV", "800G") is fine; a customer device's specs are not.
4. **No machine names or model numbers.** Broad capability-extent figures ARE allowed.

- **Verification:** nothing in a "Verify with Hana" list or VERIFY block goes live unconfirmed.

---

# Changelog — July 2026 working session

Everything below was decided and applied in one session. Recorded so the reasoning survives.

## 1 · Hub pages restructured

- **Product examples hero strip added to 9 hubs.** A labeled row of ~6 concrete product nouns in
  the hero, copied from the pattern in the built Industrial & IoT page. Automotive excluded — it is
  bespoke (interactive piece).
- **All 9 profiled hubs rebuilt to the built Industrial & IoT template**: eyebrow → hero + strip →
  dark context band with 3 points → Product examples cards → locations → FAQ → closing.
- **No capability-card row.** The built IoT page renders one; per Rupert that slot should be the
  products-built section instead. The MD models it correctly; the built page still needs changing.
- **Labeling fixed site-wide:** the card section is **"Product examples"** (generic — Hana can
  build beyond today's list), the sub-page table is **"Product pages"**, and the word
  **"sub-market" was removed everywhere** in favor of the actual product name.

## 2 · Product pages drafted

- **18 placeholder plans drafted into full pages**, joining the 5 Automotive spokes, the 2 Access
  Control pages and 3 others written during the session → **26 product pages, none placeholder**.
- **Model switched** from the old "Three pillars" placeholder layout to the **Automotive prose
  model** already proven on the Automotive spokes.
- **Eyebrow format** set to `**<Market> · <Product name>**`; the 5 Automotive spokes were
  retro-fitted from the old `**Automotive · Sub-market**`.

## 3 · Four copy rules established

Applied across every hub and product page, and recorded in `_PUBLISH-CHECKLIST.md`:

1. **No product-lifespan / durability-outcome claims.** Hana builds to the customer's design. 14
   such claims were removed from the already-finished Automotive copy alone (e.g. "a module that
   survives the life of the powertrain", "the lamp looks the same years in as it did on day one"),
   plus more from the Industrial & IoT and Power Management hubs.
2. **Say what Hana CAN do, not what it does** — services are a menu the customer selects from.
3. **Never describe the customer's product function or performance.** Triggered by the AI
   data-center slide: its oscilloscope specs (PAM4, TDECQ, SNDR, jitter, lane rates) describe the
   *customer's instrument*, not Hana's build, and were stripped from all copy.
4. **Register split** — hubs accessible but for industry professionals; product pages pitched at
   *technical* industry professionals, opening on process rather than scene-setting.

## 4 · Structural decisions

- **Telecom PCBA dropped.** It was one of four near-identical market PCBA pages; telecom's real
  differentiator is RF. Page deleted, hub references removed, URL-plan row still to remove.
- **Shared boilerplate removed.** An identical "Inspection and test coverage — SPI, AOI, X-ray,
  ICT, functional test" bullet appeared verbatim on four PCBA pages. Removed from all; the detail
  now lives only on the SMT capability brief, which each page points to.
- **Data Centers widened from TEC-only to two strands** — thermal control electronics *and*
  high-density PCBA for optical test instrumentation. Still no product pages by design.
- **Medical PCBA rebuilt** on flex + flip-chip board technology (from the Hearing Aids deck),
  replacing a generic documentation angle. Board/device split with `hearing-aid-assembly.md` made
  explicit: this page owns the board, that one owns the device.

## 5 · Specific claim decisions

| Claim | Decision |
|---|---|
| **US FDA / 21 CFR 820** | Claimed, but **FAQ only** on the Medical hub and Medical PCBA — deliberately out of body copy so it answers a question rather than leading. Wording fixed as "has been through US FDA inspection under 21 CFR 820"; **never** "approved / certified / registered / compliant". Highest-priority verify item. |
| **Qi / WPC** | Hana is **not certified** but **does build in compliance**. Claimed on Consumer wireless-charging with the distinction spelled out: certification for a finished product is held by the **product owner**. Never "Qi certified". |
| **"Decades" of telecom heritage** | Confirmed true; stands as written, no year figure needed. |
| **"20+ years" RFID** | Confirmed in the brand record. |
| **Data Centers "800G / 1.6T"** | Stays — a market-tier label, not a performance claim. |
| **Hyperscaler names** | Removed entirely, including from internal notes. |
| **Superlatives** | "World's smallest / thinnest / world-leading" all held OUT of copy pending a decision. |
| **Competitor claim** | "Most contract manufacturers buy the coil in" softened to "The coil is often bought in" — unverifiable competitor-relative claim. |

## 6 · Related files changed outside this folder

- **`../Capabilities/Sub-capabilities/smt-assembly-brief.md`** — high-density PCBA folded into the
  fine-pitch pillar, plus secondary keywords and a new FAQ. This is now the single home for the
  inspection/test detail removed from the market PCBA pages.
- **`Industrial & IoT/pcba-box-build.md`** — "high density PCBA" added as a deliberate keyword
  play, on the basis that many buyers use "industrial" to mean data-center/infrastructure work.
  Cross-links to `/markets/data-centers/`.

## 7 · Known gaps found

- **5 claims had no source at all** (vs. needing confirmation). Two were resolved in session
  (Qi, telecom heritage). Three remain: **max layer count for high-density PCBA**, microdisplay
  tenure, and near-eye/AR. Layer count is the most costly — it is the first spec a high-density
  buyer looks for.
- **"More than one country" is not universally true.** Medical MEMS and Telecom RF assembly both
  run Thailand-only, so those two pages say "more than one **site**" instead. Either confirm
  Jiaxing coverage or accept the weaker wording.

---

## Known issues / open items

- ⚑ **Automotive PCBA slug mismatch:** drafts use `/markets/automotive/automotive-pcba`,
  the URL Structure tab says `/markets/automotive/pcba/`. Resolve before dev handoff.
- ⚑ **Data Centers** needs a row added to the `🗺 URL Structure` tab (10th pillar, no sub-pages).
- ⚑ **Telecom PCBA** needs its row **removed** from the URL Structure tab, plus a redirect if the
  URL was ever published.
- ⚑ **Capability cross-link URLs** — 6+ product pages point at URLs not in the agreed capability
  structure. One decision fixes all (checklist B4).
- ⚑ **Built Industrial & IoT HTML page** still renders a "capabilities behind this market" card
  row; per Rupert that slot should be the products-built section. MD and built page diverge.
- No Page SEO Briefs rows exist yet for any `/markets/` URL (the 📄 tab covers Capabilities only).
- Source drafts in `Copy & Content/` (automotive + data centers) were **copied**, not moved —
  treat the files here as the working copies; archive the originals to avoid divergence.
