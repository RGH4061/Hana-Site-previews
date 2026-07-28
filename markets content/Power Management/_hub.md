# Power Management — Market hub (pillar) page plan

**URL:** `/markets/power-management/`
**Status:** DRAFT — content model built to the profile of the Industrial & IoT built template (minus the capability-card row). Copy grounded in the June 2026 OSAT deck (power module & discrete pages) and the site plan; nothing here is a verified stat. Run `hana:brand-review` and clear the ⚑ items before publishing.
**Priority:** HIGH · **Schema:** Service, FAQPage, BreadcrumbList
**Pattern:** pillar page of the Power Management topic cluster — the broad, content-rich SEO anchor
that links down to its product pages. Model: the built Industrial & IoT hub.
**Register:** Markets pages use broad, accessible language for procurement managers. CTA = Contact us only (no RFQ).

## SEO (from the page plan)

| Field | Value |
|---|---|
| Primary keyword | power management electronics manufacturing EMS |
| Title tag (draft, ≤60 chars) | Power Management Electronics Manufacturing \| Hana |
| Meta description (draft, ≤155 chars) | Hana manufactures power management electronics — IGBT and SiC power module assembly and power discrete packaging, with in-house reliability test. |
| H1 (draft) | Power management electronics manufacturing |

## Product pages

| Sub-page | URL | Priority |
|---|---|---|
| IGBT & SiC Power Modules | `/markets/power-management/igbt-sic-modules/` | HIGH |
| Power Discrete Assembly | `/markets/power-management/power-discrete/` | HIGH |

## What makes this hub distinct (T31)

The package-level power hub: where Automotive and Industrial pages lead with end uses, THIS hub leads with the assembly discipline itself — die attach, substrates, interconnect, cycling test — serving every power end-market. It is the technical anchor of the three-page power cluster; cross-link both market variants. Accuracy rule when drafting: Hana packages the power module and discrete, not the finished inverter, charger or drive.

---

## Content model — mirrors the Industrial & IoT built template
Layout: Hero → dark context band (3 points) → product examples → locations → FAQ → closing. No capability-card row (per template).

### Hero
- **Eyebrow:** Markets we serve
- **Title (H1):** Power management electronics manufacturing
- **Intro (~50 words):** The power semiconductor, packaged and proven. Hana assembles the IGBT and SiC modules and power discretes that switch and convert energy inside inverters, drives and chargers — built around their thermal path with die attach, substrate bonding, interconnect and cycling test, on lines qualified for silicon and wide-bandgap devices across more than one country.
- **Product examples (hero strip):** IGBT power modules · SiC power modules · IPM motor-control modules · Power discretes · Solar inverter modules
- **CTA:** Talk to us → `/contact/`

### Market context band (dark panel)
- **Lead:** Why power management buyers choose Hana
- **Heading:** Power packaged around its thermal path
- **Body (~100 words):** A power module is defined by how it handles heat and repeated switching, which makes power management a packaging problem before it is anything else — the die attach, the substrate, the wire and the thermal interface decide reliability, not the schematic. Hana works at that package level: assembling IGBT and SiC modules, IPMs and power discretes, with reliability and cycling test available to a programme's requirements. We build the module that goes into a solar inverter, a motor drive or a charger — not the finished appliance — and the same qualified processes run across more than one country for continuity of supply.
- **Three points:**
  1. **Silicon and wide-bandgap** — Assembly qualified for Si, SiC and GaN devices, with laser dicing for SiC and GaN — the module can move to the next-generation material inside one supplier.
  2. **Built for the thermal path** — DBC substrates, heavy copper interconnect, high-thermal die attach and silver-sinter — the process steps that decide how a power module handles heat and cycling.
  3. **More than one country** — The same power processes run across our sites in Thailand and China — dual-source capacity within one company, not a migration.

### Product examples
- **IGBT & SiC Power Modules** → `/markets/power-management/igbt-sic-modules/` — Assembly of IGBT and SiC modules and IPMs across standard package families, built around the substrate and thermal path and proven with cycling test. · _Power module on the assembly line_
- **Power Discrete Assembly** → `/markets/power-management/power-discrete/` — Packaging of power discretes — MOSFETs, SiC diodes and switches in TO and surface-mount outlines — for the AC-DC, PFC and drive stages inside power electronics. · _Packaged power discrete devices_

### One company, more than one country
- **Lead / Intro:** Power module and discrete assembly runs across our sites in Thailand and China. We frame this as dual-source capacity within one company — a programme can qualify at a second site for supply continuity, not migrate away. See [Locations](/locations/) for plant-level detail.
- **Sites:**
  - Thailand · Ayutthaya · wide-bandgap power IPM and RF power assembly
  - China · Jiaxing · IGBT and SiC modules, power discrete and module packaging

### FAQ (→ FAQPage JSON-LD)
- **Lead / Intro:** Common questions from power-electronics engineering and procurement teams.
- **What does Hana build for power management?** Hana assembles power semiconductor modules and discretes — IGBT and SiC modules, IPMs for motor control, and power discretes in TO and surface-mount packages. We package the module that goes into an inverter, drive or charger, not the finished product.
- **Does Hana make finished inverters or EV chargers?** No. Hana works at the module and discrete level — the packaged power device that a system builder puts inside their inverter, converter or charger. The finished appliance is the customer's product.
- **Can Hana assemble SiC and GaN as well as silicon?** Yes. Our power lines are qualified for silicon, SiC and GaN devices, with laser dicing for SiC and GaN, so a programme can move to wide-bandgap material without changing supplier.
- **Which sites serve power management programmes?** Power module and discrete assembly runs in Thailand (Ayutthaya) and China (Jiaxing). We treat this as dual-source capacity within one company.

### Closing CTA
- **Heading:** Start a power module build programme with Hana
- **Body:** Tell us what the module switches and where it runs. We will point you to the right site and processes, and come back with a plan.
- CTA: Contact us → `/contact/`

## Verify with Hana before drafting copy
- Which sites run power assembly & test
- Reliability test scope safe to publish
- Product-examples strip: from OSAT pp.37–46. "Solar inverter modules" (not finished inverters) and no EV chargers — Hana makes the power module, not the finished appliance. Confirm items.
