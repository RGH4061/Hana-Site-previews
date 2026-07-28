# Telecommunications — Market hub (pillar) page plan

**URL:** `/markets/telecommunications/`
**Status:** DRAFT — content model built to the profile of the Industrial & IoT built template (minus the capability-card row). Copy grounded in the June 2026 EMS/OSAT/Overview decks and the site plan; nothing here is a verified stat. Run `hana:brand-review` and clear the ⚑ items before publishing.
**Priority:** HIGH · **Schema:** Service, FAQPage, BreadcrumbList
**Pattern:** pillar page of the Telecommunications topic cluster — the broad, content-rich SEO anchor that links down to its product pages. Model: the built Industrial & IoT hub.
**Register:** Markets pages use broad, accessible language for procurement managers. CTA = Contact us only (no RFQ).

## SEO (from the page plan)

| Field | Value |
|---|---|
| Primary keyword | telecom electronics manufacturing EMS Thailand |
| Title tag (draft, ≤60 chars) | Telecom Electronics Manufacturing \| Hana |
| Meta description (draft, ≤155 chars) | Hana manufactures telecom electronics — RF and high-frequency assembly and network-infrastructure PCBA — built on decades of telecom heritage in Thailand and China. |
| H1 (draft) | Telecommunications electronics manufacturing |

## Product pages

| Sub-page | URL | Priority |
|---|---|---|
| RF & High-Frequency Assembly | `/markets/telecommunications/rf-assembly/` | HIGH |

**⚑ Telecom PCBA was DROPPED (Rupert, Jul 2026).** `/markets/telecommunications/pcba/` no longer
exists. It was one of four near-identical market PCBA pages; telecom's real differentiator is RF,
which the remaining spoke carries. Network-infrastructure board content stays on THIS hub (hero,
context band and product strip) rather than getting its own page. **Remove the row from the
🗺 URL Structure tab before dev handoff**, and add a redirect to this hub if the URL was ever
published. Drafted copy preserved outside the workspace if it is ever wanted back.

## What makes this hub distinct (T31)

Hana's telecom heritage is the credibility anchor — decades of RF and high-frequency work that also fed the data-center optical story (cross-link /markets/data-centers/). Lead with signal-integrity discipline: impedance control, shielding, RF test. Distinct from Consumer Electronics (volume) and Data Centers (TEC thermal layer).

---

## Content model — mirrors the Industrial & IoT built template
Layout: Hero → dark context band (3 points) → product examples → locations → FAQ → closing. No capability-card row (per template).

### Hero
- **Eyebrow:** Markets we serve
- **Title (H1):** Telecommunications electronics manufacturing
- **Intro (~50 words):** The RF, high-frequency and infrastructure electronics behind networks — built by a manufacturer with decades of telecom work behind it. Hana assembles RF and microwave modules, network-infrastructure boards and fiber-optic components with the signal-integrity and shielding discipline high-frequency products demand, on qualified lines that already run telecom programs across more than one country.
- **Product examples (hero strip):** RF/microwave modules · mmWave modules · RF power amplifiers · Network switches · Fiber-optic components · Comms modules
- **CTA:** Talk to us → `/contact/`

### Market context band (dark panel)
- **Lead:** Why telecom buyers choose Hana
- **Heading:** High-frequency work, built on decades of telecom heritage
- **Body (~100 words):** Telecom products live or die on signal integrity. At RF, microwave and millimeter-wave frequencies, impedance control, shielding and clean interconnect decide whether a module meets spec — and getting there takes a manufacturer who has done high-frequency work before. Hana has decades of it. We assemble RF and microwave modules, RF power amplifiers, network-infrastructure boards and fiber-optic components, and we test them the way telecom demands — rack-and-stack RF measurement, not a pass/fail buzz. That same optical and high-frequency heritage went on to feed our [data-center](/markets/data-centers/) work. The processes run across more than one country, so a program has continuity of supply.
- **Three points:**
  1. **Signal-integrity discipline** — Impedance and signal-integrity control, EMI and metal shielding, and clean high-frequency interconnect — the fundamentals that decide whether an RF or microwave module meets spec.
  2. **RF test that matches the product** — Rack-and-stack RF test with spectrum and network analyzers and noise-figure measurement, so high-frequency modules are verified against telecom requirements, not just powered on.
  3. **More than one country** — The same processes run across our sites in Thailand and China — dual-source capacity within one company, not a migration.

### Product examples
- **RF & High-Frequency Assembly** → `/markets/telecommunications/rf-assembly/` — RF, microwave and millimeter-wave modules and RF power amplifiers, assembled and shielded with the impedance control and rack-and-stack RF test high-frequency products need. · _RF module on the high-frequency line_

_⚑ Single card only — Telecom PCBA was dropped (see Product pages above). Network-infrastructure
board work is described on this hub rather than on its own page. If a one-card row looks thin in
the build, consider presenting this section as a text block instead of a card row for this market._


### Sidebar rail (renders on this market's product pages)
- **Heading:** Telecommunications products  ·  **never** "sub-markets"
- Lists every product page in this market, current page marked active. Collapsible — labels
  reduce to the two-letter `sidebar_abbr` in each product page's front-matter; order follows
  `sidebar_order`.
- **Helper card (closes the rail):** "Tell us the frequencies and where the module sits in the network, and we will point you to the right line." + a **Contact us** link.
- Shown even where a market has only one product page, for structural consistency.

### Where we build
- **Lead / Intro:** Telecom programs run across our sites in Thailand and China, with millimeter-wave modules in Thailand, microwave and fiber-optic components alongside SiP and SMT, and embedded comms modules in China. We frame this as dual-source capacity within one company — a program can qualify at a second site for supply continuity, not migrate away. See [Locations](/locations/) for plant-level detail.
- **Sites:**
  - Thailand · Lamphun · millimeter-wave modules
  - Thailand · Ayutthaya · microwave & fiber-optic components, SiP + SMT assembly
  - China · Jiaxing · embedded comms modules

### FAQ (→ FAQPage JSON-LD)
- **Lead / Intro:** Common questions from telecom engineering and procurement teams.
- **What does Hana build for telecommunications?** RF, microwave and millimeter-wave modules, RF power amplifiers, network-infrastructure and switch boards, embedded comms modules and fiber-optic components — the high-frequency and infrastructure electronics behind networks, assembled and tested to telecom requirements.
- **Does Hana have real RF and high-frequency experience?** Yes. Hana has decades of RF and high-frequency work behind it, with the impedance control, shielding and rack-and-stack RF test that high-frequency products depend on. That same optical and high-frequency heritage went on to feed our data-center work.
- **Which sites serve telecom programs?** Telecom work runs across Thailand (Lamphun for millimeter-wave modules, Ayutthaya for microwave and fiber-optic components) and China (Jiaxing for embedded comms modules). We treat this as dual-source capacity within one company.
- **How does Hana test high-frequency products?** With rack-and-stack RF test — spectrum and network analyzers and noise-figure measurement — so RF, microwave and millimeter-wave modules are verified against telecom spec rather than just powered on.

### Closing CTA
- **Heading:** Start a telecom build program with Hana
- **Body:** Tell us what the product does and the frequencies it runs at. We will point you to the right site and processes, and come back with a plan.
- CTA: Contact us → `/contact/`

## Verify with Hana before drafting copy
- ✅ Telecom heritage — "decades of RF and high-frequency work" CONFIRMED true (Rupert, Jul 2026); stands as written, no year figure needed. Confirm only the *program types* named alongside it.
- Which sites serve telecom
- RF test capability per site
- Product-examples strip: Lamphun (millimeter-wave modules), OSAT pp.40/75 (RF & microwave, RF power), Ayutthaya (fiber-optic), Jiaxing (comms modules). Confirm scope.
