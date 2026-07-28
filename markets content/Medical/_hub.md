# Medical — Market hub (pillar) page plan

**URL:** `/markets/medical/`
**Status:** DRAFT — content model built to the profile of the Industrial & IoT built template (minus the capability-card row). Copy grounded in the June 2026 EMS/OSAT/Overview decks and the medical fact pack; nothing here is a verified stat. Run `hana:brand-review` and clear the ⚑ items before publishing.
**Priority:** HIGH · **Schema:** Service, FAQPage, BreadcrumbList
**Pattern:** pillar page of the Medical topic cluster — the broad, content-rich SEO anchor that links down to its product pages. Model: the built Industrial & IoT hub.
**Register:** Markets pages use broad, accessible language for procurement managers. CTA = Contact us only (no RFQ).

## SEO (from the page plan)

| Field | Value |
|---|---|
| Primary keyword | medical electronics manufacturing ISO 13485 Thailand |
| Title tag (draft, ≤60 chars) | Medical Electronics Manufacturing — ISO 13485 \| Hana |
| Meta description (draft, ≤155 chars) | Hana manufactures medical electronics under ISO 13485 — hearing aid assembly, medical MEMS and sensors, PCBA and wireless charging for medical devices. |
| H1 (draft) | Medical electronics manufacturing |

## Product pages

| Sub-page | URL | Priority |
|---|---|---|
| Hearing Aid Assembly | `/markets/medical/hearing-aid-assembly/` | HIGH |
| Medical MEMS & Sensors | `/markets/medical/mems-sensors/` | HIGH |
| Medical PCBA | `/markets/medical/pcba/` | HIGH |
| Wireless Charging (Medical) | `/markets/medical/wireless-charging/` | MEDIUM |

## What makes this hub distinct (T31)

The regulated-market hub: ISO 13485 discipline, documentation and traceability lead the story. Proof points: hearing aids (miniature assembly), inhaler/respirator sensors, medical boards. T31 anchor examples from the plan: hearing aids, drug-delivery devices, ISO 13485. Tone: calm, precise, no drama.

---

## Content model — mirrors the Industrial & IoT built template
Layout: Hero → dark context band (3 points) → product examples → locations → FAQ → closing. No capability-card row (per template).

### Hero
- **Eyebrow:** Markets we serve
- **Title (H1):** Medical electronics manufacturing
- **Intro (~50 words):** Electronics for devices people depend on, built under a medical quality system. Hana manufactures hearing aids, drug-delivery and diagnostic electronics on dedicated medical lines run to ISO 13485 — with the documentation, traceability and change control a regulated device needs, and the same discipline available in more than one country.
- **Product examples (hero strip):** Hearing aids · Smart inhalers · Patient monitors · MEMS bio-sensors · Hearing-aid wireless charging cases · Diagnostic devices
- **CTA:** Talk to us → `/contact/`

### Market context band (dark panel)
- **Lead:** Why medical buyers choose Hana
- **Heading:** A regulated device is a documentation job as much as a build job
- **Body (~100 words):** Medical devices are only as good as the record behind them. Every board has to be traceable, every process controlled, every change approved — because a regulator, a patient and an audit all depend on it. Hana runs dedicated medical lines under an ISO 13485 quality system, so the documentation and traceability are built into the work rather than added afterwards. We assemble the miniature electronics these devices demand — hearing aids, sensors, drug-delivery and diagnostic boards — with the calm, precise discipline the market expects. The same qualified processes run across more than one country, so a medical program has continuity of supply within one company.
- **Three points:**
  1. **ISO 13485 discipline** — Dedicated medical lines run to a medical quality system, with documentation, traceability and change control built into every stage rather than added at the end.
  2. **Miniature assembly** — The micro-miniature electronics medical devices depend on — hearing aids, MEMS sensors, drug-delivery and diagnostic boards — assembled to the tolerances these products demand.
  3. **More than one country** — The same qualified medical processes run across our sites in Thailand and China — dual-source capacity within one company, not a migration.

### Product examples
- **Hearing Aid Assembly** → `/markets/medical/hearing-aid-assembly/` — Micro-miniature assembly of hearing aids, including AI hearing aids and their wireless charging cases, built to the size and quality a wearable medical device demands. · _Hearing aid on a medical assembly line_
- **Medical MEMS & Sensors** → `/markets/medical/mems-sensors/` — Air-flow, pressure and gas sensing assemblies for inhalers, respiratory and diagnostic devices — the MEMS and sensor work behind drug-delivery and patient monitoring. · _MEMS sensor for a medical device_
- **Medical PCBA** → `/markets/medical/pcba/` — Circuit board assembly for patient-monitoring and diagnostic equipment, built on dedicated medical lines under ISO 13485 with full traceability. · _Medical PCBA under inspection_
- **Wireless Charging (Medical)** → `/markets/medical/wireless-charging/` — Wireless charging cases and modules for hearing aids and wearable medical devices, assembled alongside the device itself. · _Hearing-aid wireless charging case_


### Sidebar rail (renders on this market's product pages)
- **Heading:** Medical products  ·  **never** "sub-markets"
- Lists every product page in this market, current page marked active. Collapsible — labels
  reduce to the two-letter `sidebar_abbr` in each product page's front-matter; order follows
  `sidebar_order`.
- **Helper card (closes the rail):** "Tell us what the device does and the quality system it needs, and we will point you to the right line." + a **Contact us** link.
- Shown even where a market has only one product page, for structural consistency.

### Where we build
- **Lead / Intro:** Medical programs run across our sites in Thailand and China, with dedicated medical lines and MEMS/sensor assembly across the group. We frame this as dual-source capacity within one company — a program can qualify at a second site for supply continuity, not migrate away. See [Locations](/locations/) for plant-level detail.
- **Sites:**
  - Thailand · Lamphun · medical device assembly, dedicated medical SMT lines
  - China · Jiaxing · dedicated medical SMT lines, hearing-aid and device assembly
  - Thailand · Ayutthaya · medical MEMS & sensors

### FAQ (→ FAQPage JSON-LD)
- **Lead / Intro:** Common questions from medical device engineering and procurement teams.
- **What does Hana build for medical?** Hearing aids and their wireless charging cases, MEMS and sensor assemblies for inhalers and drug-delivery devices, and PCBA for patient-monitoring and diagnostic equipment — all built on dedicated medical lines under an ISO 13485 quality system.
- **Does Hana manufacture under ISO 13485?** Yes. Hana runs dedicated medical lines under an ISO 13485 quality system, so the documentation, traceability and change control a regulated device needs are built into the process. ⚑ Confirm which sites hold current certification before publishing.
- **Has Hana been inspected by a medical regulator?** Yes. Hana has been through US FDA inspection under 21 CFR 820, the FDA's quality system regulation for medical devices, alongside holding ISO 13485 — so the quality system behind a medical build has been examined by an external regulator, not only self-declared.
- **Which sites serve medical programs?** Medical work runs across our sites in Thailand (Lamphun device assembly, Ayutthaya MEMS and sensors) and China (Jiaxing). We treat this as dual-source capacity within one company, not a migration between plants.
- **Can Hana handle micro-miniature medical assembly?** Yes. Hearing aids and MEMS sensors are among the smallest assemblies we build — micro-miniature work is a core part of Hana's microelectronics discipline, applied here under a medical quality system.

### Closing CTA
- **Heading:** Start a medical build program with Hana
- **Body:** Tell us what the device does and where it runs. We will point you to the right site and processes, and come back with a plan.
- CTA: Contact us → `/contact/`

## Verify with Hana before drafting copy
- ⚑⚑ **US FDA / 21 CFR 820** — claimed in the **FAQ only** on this hub and on `pcba.md` (Rupert, Jul 2026 — deliberately kept out of body copy and the context band, so it answers a direct question rather than leading). Do not move it into body copy. Source: "Hana Hearing Aids Rev A" deck p.2, "Experience US FDA inspection, 21 CFR 820". HIGHEST-PRIORITY VERIFY ITEM. Wording is deliberately "has been through US FDA inspection under 21 CFR 820" — a factual statement about having been inspected. It must NOT drift to "FDA approved", "FDA certified", "FDA registered" or "FDA compliant", which are different and legally risky claims. Confirm which site(s), when, whether the outcome permits public statement, and whether the hearing-aid-system scope limits how broadly it can be claimed. If unclear, cut rather than soften.
- ISO 13485 certification and which sites hold it
- Medical device classes supported
- Named applications safe to publish
- Product-examples strip: EMS deck pp.41/45 (hearing aids, inhalers, MEMS). "Hearing-aid wireless charging cases" keeps hearing-aid charging on Medical while the deep wireless-charging spoke stays canonical → Consumer. Confirm current.
