# RFID — Market hub (pillar) page plan

**URL:** `/markets/rfid/`
**Status:** DRAFT — content model built to the profile of the Industrial & IoT built template (minus the capability-card row). Copy grounded in the June 2026 EMS/OSAT/Overview decks and the RFID brand record; nothing here is a verified stat. Run `hana:brand-review` and clear the ⚑ items before publishing.
**Priority:** HIGH · **Schema:** Service, FAQPage, BreadcrumbList
**Pattern:** pillar page of the RFID topic cluster — the broad, content-rich SEO anchor that links down to its product pages. Model: the built Industrial & IoT hub.
**Register:** Markets pages use broad, accessible language for procurement managers. CTA = Contact us only (no RFQ).

## SEO (from the page plan)

| Field | Value |
|---|---|
| Primary keyword | RFID manufacturing card tag inlay EMS |
| Title tag (draft, ≤60 chars) | RFID Manufacturing — Cards, Tags & Inlays \| Hana |
| Meta description (draft, ≤155 chars) | Hana has manufactured RFID for over 20 years — smart cards, tags and inlays across UHF, HF and LF, on automated lines in China and the USA. |
| H1 (draft) | RFID manufacturing — cards, tags and inlays |

## Product pages

| Sub-page | URL | Priority |
|---|---|---|
| RFID Card Manufacturing | `/markets/rfid/rfid-cards/` | HIGH |
| RFID Tags & Inlays | `/markets/rfid/rfid-tags-inlays/` | HIGH |
| RFID Tire Tags | `/markets/rfid/rfid-tire-tags/` | HIGH |

## What makes this hub distinct (T31)

This hub is the breadth page for RFID as a market: 20+ years of manufacturing, every major form factor (cards, tags, inlays, tire tags), all three frequency bands, on automated roll-to-roll lines in China and the USA. The tire-tag spoke canonicalizes to the Automotive version — this hub still links it as a card. Access-control cards get their own page under /markets/access-control/ with a credential-specific angle — don't duplicate.

---

## Content model — mirrors the Industrial & IoT built template
Layout: Hero → dark context band (3 points) → product examples → locations → FAQ → closing. No capability-card row (per template).

### Hero
- **Eyebrow:** Markets we serve
- **Title (H1):** RFID manufacturing — cards, tags and inlays
- **Intro (~50 words):** Every RFID form factor, all three bands, from one company. Hana has manufactured RFID for more than 20 years — smart cards, tags, inlays and tire tags across LF, HF and UHF — on automated roll-to-roll inlay lines in China and the USA. It is a core business, not a sideline, and it runs at volume.
- **Product examples (hero strip):** UHF inlays · HF inlays · Asset-tracking tags · Temperature-sensing tags · Smart cards · RFID tire tags
- **CTA:** Talk to us → `/contact/`

### Market context band (dark panel)
- **Lead:** Why RFID buyers choose Hana
- **Heading:** Every form factor, every band, on automated lines
- **Body (~100 words):** RFID is not one product — it is cards, tags, inlays and specialized formats, each across low, high and ultra-high frequency, each with its own encoding, converting and test needs. Most suppliers cover a slice of that. Hana has manufactured the full breadth for more than 20 years, on automated roll-to-roll inlay lines rather than manual assembly, so volume and consistency come built in. The same qualified processes run in China and the USA, which means an RFID program has more than one place to be built inside one company. Independent Auburn ARC certification backs the tag performance.
- **Three points:**
  1. **Full breadth** — Cards, tags, inlays and specialized formats across LF, HF and UHF, from asset-tracking and logistics tags to temperature-sensing and battery-assisted passive — the whole RFID range under one roof.
  2. **Automated at volume** — Automated roll-to-roll inlay lines rather than manual assembly, with independent Auburn ARC certification behind the tag performance — consistency and throughput built in.
  3. **More than one country** — RFID lines run in China and the USA — dual-source capacity within one company, not a migration.

### Product examples
- **RFID Card Manufacturing** → `/markets/rfid/rfid-cards/` — Contactless smart cards and credentials across LF, HF and UHF, built on automated inlay lines with the encoding and converting a card program needs at volume. · _Contactless smart card and inlay_
- **RFID Tags & Inlays** → `/markets/rfid/rfid-tags-inlays/` — UHF and HF inlays and straps, ruggedized and rubber-embeddable tags, temperature-sensing and battery-assisted passive formats for asset tracking and logistics. · _RFID inlay web on the roll-to-roll line_
- **RFID Tire Tags** → `/markets/rfid/rfid-tire-tags/` — Rubber-embeddable tags built for the tire. The deep page canonicalizes to [Automotive](/markets/automotive/rfid-tire-tags/) — this hub links it rather than duplicating the content. · _Rubber-embeddable RFID tire tag_


### Sidebar rail (renders on this market's product pages)
- **Heading:** RFID products  ·  **never** "sub-markets"
- Lists every product page in this market, current page marked active. Collapsible — labels
  reduce to the two-letter `sidebar_abbr` in each product page's front-matter; order follows
  `sidebar_order`.
- **Helper card (closes the rail):** "Tell us what needs identifying and the environment it lives in, and we will point you to the right line." + a **Contact us** link.
- Shown even where a market has only one product page, for structural consistency.

### Where we build
- **Sites:**
  - China · Jiaxing · six automated RFID inlay lines — cards, tags and inlays
  - USA · Ohio · UHF/HF inlays and straps

### FAQ (→ FAQPage JSON-LD)
- **Lead / Intro:** Common questions from RFID engineering and procurement teams.
- **What does Hana build for RFID?** The full range — contactless smart cards, UHF and HF inlays and straps, ruggedized and temperature-sensing tags, battery-assisted passive tags and rubber-embeddable tire tags — across LF, HF and UHF, on automated inlay lines.
- **How long has Hana manufactured RFID?** More than 20 years. RFID is a core Hana business, built on automated roll-to-roll inlay lines with independent Auburn ARC certification behind the tag performance, not a recent add-on.
- **Which sites make RFID?** RFID lines run in China (Jiaxing, six automated inlay lines) and the USA (Ohio, UHF/HF inlays and straps). We treat this as dual-source capacity within one company.
- **Does Hana make RFID tire tags?** Yes — rubber-embeddable tags built for the tire. That work is covered on the [Automotive](/markets/automotive/rfid-tire-tags/) page, where the tire-tag content lives.

### Closing CTA
- **Heading:** Start an RFID build program with Hana
- **Body:** Tell us the form factor, the band and the volume. We will point you to the right site and lines, and come back with a plan.
- CTA: Contact us → `/contact/`

## Verify with Hana before drafting copy
- '20+ years' and 'world-leading tire tag' claims per brand record
- Site framing (Jiaxing + Ohio)
- Frequency band coverage per format
- ⚑ "Six automated RFID inlay lines" at Jiaxing — stated in the fact pack; confirm the current line count before it goes live
- ⚑ Auburn ARC certification (USA & China; 192+ listings on 26 certified tags) — confirm the certification is current and agree the public wording before citing it
- Product-examples strip: EMS deck pp.48–53 (UHF/HF inlays, ruggedized/temp-sensing tags, smart cards). "RFID tire tags" shown as a product example here but the deep page canonicalizes → Automotive — don't build a competing tire-tags spoke.
