# Access Control — Market hub (pillar) page plan

**URL:** `/markets/access-control/`
**Status:** DRAFT — content model built to the profile of the Industrial & IoT built template (minus the capability-card row). Copy grounded in the June 2026 EMS/OSAT/Overview decks and the access-control pitch memory; nothing here is a verified stat. Run `hana:brand-review` and clear the ⚑ items before publishing.
**Priority:** HIGH · **Schema:** Service, FAQPage, BreadcrumbList
**Pattern:** pillar page of the Access Control topic cluster — the broad, content-rich SEO anchor that links down to its product pages. Model: the built Industrial & IoT hub.
**Register:** Markets pages use broad, accessible language for procurement managers. CTA = Contact us only (no RFQ).

## SEO (from the page plan)

| Field | Value |
|---|---|
| Primary keyword | access control electronics manufacturing EMS |
| Title tag (draft, ≤60 chars) | Access Control Electronics Manufacturing \| Hana |
| Meta description (draft, ≤155 chars) | Hana manufactures access control electronics — RFID access cards, smart lock and door hardware assembly — RFID depth and box build under one company. |
| H1 (draft) | Access control electronics manufacturing |

## Product pages

| Sub-page | URL | Priority |
|---|---|---|
| RFID Access Cards | `/markets/access-control/rfid-cards/` | HIGH |
| Smart Lock & Door Hardware | `/markets/access-control/smart-lock-assembly/` | MEDIUM |

## What makes this hub distinct (T31)

Strategically important market (Rupert's prospecting focus). The angle: access control combines Hana's two proven strengths — RFID manufacturing (the credential) and box build (the lock/reader hardware) — inside one company. Draw pitch points from the access-control pitch memory when drafting. No customer names (ASSA Abloy relationship stays invisible).

---

## Content model — mirrors the Industrial & IoT built template
Layout: Hero → dark context band (3 points) → product examples → locations → FAQ → closing. No capability-card row (per template).

### Hero
- **Eyebrow:** Markets we serve
- **Title (H1):** Access control electronics manufacturing
- **Intro (~50 words):** The credential and the hardware from one manufacturer. Hana builds the RFID cards, fobs and readers that grant access — and the lock and reader hardware they talk to — combining more than 20 years of RFID manufacturing with full box-build assembly under one company, on lines that already run access-control programs at volume.
- **Product examples (hero strip):** Smart door locks · Access readers · Key cards & fobs · Fingerprint locks · Hotel safes · Security tokens
- **CTA:** Talk to us → `/contact/`

### Market context band (dark panel)
- **Lead:** Why access-control buyers choose Hana
- **Heading:** The credential and the hardware, built under one company
- **Body (~100 words):** Most access-control suppliers do one half of the job — either the credential or the hardware it opens. Hana does both. We have manufactured RFID cards, tags and inlays for over two decades, and we box-build the readers, locks and safes those credentials talk to. Keeping the credential and the hardware inside one company shortens the supply chain, keeps change control in fewer hands, and lets a program scale the card and the lock together. The same qualified processes run across more than one country, so an access-control program has somewhere to go if it needs continuity of supply.
- **Three points:**
  1. **RFID depth** — More than 20 years manufacturing cards, tags and inlays across LF, HF and UHF, on automated inlay lines — the credential side of access control is core, not a sideline.
  2. **The hardware too** — Box build of readers, keypads, fingerprint and BLE locks, safes and key deposits, including the miniature and micro assemblies these devices depend on.
  3. **More than one country** — The same processes run across our sites in China and Cambodia — dual-source capacity within one company, not a migration.

### Product examples
- **RFID Access Cards** → `/markets/access-control/rfid-cards/` — Contactless cards, fobs and credentials across LF, HF and UHF, built on automated inlay lines with the encoding and personalisation an access program needs. · _Contactless access card and inlay_
- **Smart Lock & Door Hardware** → `/markets/access-control/smart-lock-assembly/` — Full box build of readers, keypads, fingerprint and BLE locks, safes and key deposits — the reader and lock hardware assembled and tested as finished units. · _Assembled smart lock on the line_


### Sidebar rail (renders on this market's product pages)
- **Heading:** Access Control products  ·  **never** "sub-markets"
- Lists every product page in this market, current page marked active. Collapsible — labels
  reduce to the two-letter `sidebar_abbr` in each product page's front-matter; order follows
  `sidebar_order`.
- **Helper card (closes the rail):** "Tell us what the device secures and where it is installed, and we will point you to the right line." + a **Contact us** link.
- Shown even where a market has only one product page, for structural consistency.

### One company, more than one country
- **Lead / Intro:** Access-control programs run across our sites in China and Cambodia, with RFID credential manufacturing concentrated in China and the USA. We frame this as dual-source capacity within one company — a program can qualify at a second site for supply continuity, not migrate away. See [Locations](/locations/) for plant-level detail.
- **Sites:**
  - China · Jiaxing · access readers & cards, control boards for locks, RFID inlays
  - Cambodia · Koh Kong · reader box build, USB security tokens, final assembly
  - USA · Ohio · RFID inlays & straps

### FAQ (→ FAQPage JSON-LD)
- **Lead / Intro:** Common questions from access-control engineering and procurement teams.
- **What does Hana build for access control?** RFID access cards, fobs and credentials, and the reader and lock hardware they work with — including fingerprint and BLE locks, keypads, safes and key deposits. In most cases we can build both the credential and the hardware within one company.
- **Can Hana make both the card and the lock?** Yes. Hana has manufactured RFID credentials for over 20 years and box-builds the reader and lock hardware those credentials talk to, so the credential and the device can be qualified and scaled together under one supplier.
- **Which sites serve access-control programs?** Access-control work runs across our sites in China (Jiaxing) and Cambodia (Koh Kong), with RFID credential lines in China and the USA. We treat this as dual-source capacity within one company.
- **Does Hana handle miniature and micro assemblies?** Yes. The locks, fobs and safe electronics access control depends on are often miniature or micro assemblies — a core part of Hana's microelectronics discipline.

### Closing CTA
- **Heading:** Start an access-control build program with Hana
- **Body:** Tell us what the device does and where it runs. We will point you to the right site and processes, and come back with a plan.
- CTA: Contact us → `/contact/`

## Verify with Hana before drafting copy
- Access-control claims per the pitch record (no customer names)
- Which sites serve this market
- Product-examples strip: six items grounded in EMS deck p.43 (access-control products) — confirm current and keep brand-neutral (no ASSA Abloy / Yale)
- "More than 20 years" RFID wording is already confirmed (brand record); confirm the site-to-product mapping above before the locations block goes live
