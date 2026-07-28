# Optical & Sensors — Market hub (pillar) page plan

**URL:** `/markets/optical-sensors/`
**Status:** DRAFT — content model built to the profile of the Industrial & IoT built template (minus the capability-card row). Copy grounded in the June 2026 EMS/OSAT/Overview decks; nothing here is a verified stat. Run `hana:brand-review` and clear the ⚑ items before publishing.
**Priority:** HIGH · **Schema:** Service, FAQPage, BreadcrumbList
**Pattern:** pillar page of the Optical & Sensors topic cluster — the broad, content-rich SEO anchor that links down to its product pages. Model: the built Industrial & IoT hub.
**Register:** Markets pages use broad, accessible language for procurement managers. CTA = Contact us only (no RFQ).

## SEO (from the page plan)

| Field | Value |
|---|---|
| Primary keyword | optical sensor electronics manufacturing EMS |
| Title tag (draft, ≤60 chars) | Optical & Sensor Manufacturing \| Hana |
| Meta description (draft, ≤155 chars) | Hana manufactures optical and sensor products — camera modules, MEMS sensors and LCOS/HTPS microdisplays — precision assembly with active optical alignment. |
| H1 (draft) | Optical and sensor manufacturing |

## Product pages

| Sub-page | URL | Priority |
|---|---|---|
| Camera Modules | `/markets/optical-sensors/camera-modules/` | HIGH |
| MEMS Sensors | `/markets/optical-sensors/mems-sensors/` | HIGH |
| Microdisplay (LCOS/HTPS) | `/markets/optical-sensors/microdisplay/` | MEDIUM |

## What makes this hub distinct (T31)

The precision-handling market: products where microns and cleanliness decide yield. Camera modules, MEMS sensors and microdisplay are the three proof points; active alignment and low-stress assembly are the recurring disciplines. This heritage also feeds the Data Centers story — cross-link.

---

## Content model — mirrors the Industrial & IoT built template
Layout: Hero → dark context band (3 points) → product examples → locations → FAQ → closing. No capability-card row (per template).

### Hero
- **Eyebrow:** Markets we serve
- **Title (H1):** Optical and sensor manufacturing
- **Intro (~50 words):** When a lens sits microns out of line, or a speck of dust lands on a sensor die, the yield disappears. Hana builds camera modules, MEMS and optical sensors, and LCOS/HTPS microdisplays on cleanroom lines with active optical alignment and low-stress assembly — precision handling at production volume, from one company across more than one country.
- **Product examples (hero strip):** Camera modules · Microdisplays · Proximity sensors · Ambient light sensors · MEMS sensors · Infrared modules
- **CTA:** Talk to us → `/contact/`

### Market context band (dark panel)
- **Lead:** Why optical and sensor buyers choose Hana
- **Heading:** Where microns and cleanliness decide the yield
- **Body (~100 words):** Optical and sensor products are unforgiving. A camera module only focuses if its lens is aligned to the image sensor within microns; a MEMS or optical sensor only passes if the die stays clean and unstressed through assembly. That makes the manufacturing discipline — active alignment, cleanroom handling, low-stress attach and test — as important as the design itself. Hana has built cameras, microdisplays and sensors this way for years, on cleanroom lines under controlled ESD conditions. The same qualified processes run across more than one country, so an optical or sensor program has somewhere to go if it needs continuity of supply.
- **Three points:**
  1. **Precision at the micron** — Active optical alignment and low-stress assembly, so lenses, sensors and microdisplays hold their tolerances all the way through build and test, not just at design.
  2. **Clean by discipline** — Cleanroom lines under controlled ESD handling, because a single particle or static discharge can cost a sensitive optical or sensor device its yield.
  3. **More than one country** — Optical and sensor work runs across our sites in the USA and Thailand — dual-source capacity within one company, not a migration.

### Product examples
- **Camera Modules** → `/markets/optical-sensors/camera-modules/` — Full turnkey camera module assembly with active optical alignment and lens housings, including infrared modules — built and tested as finished optical units. · _Camera module on an active-alignment station_
- **MEMS Sensors** → `/markets/optical-sensors/mems-sensors/` — MEMS, proximity, ambient light, color and time-of-flight sensors, assembled and packaged under cleanroom and ESD control for miniature, sensitive devices. · _MEMS sensor die under cleanroom assembly_
- **Microdisplay (LCOS/HTPS)** → `/markets/optical-sensors/microdisplay/` — LCOS and HTPS microdisplays for projectors, simulators and optical systems, drawing on Hana's LCD processing and packaging heritage. · _LCOS microdisplay panel_


### Sidebar rail (renders on this market's product pages)
- **Heading:** Optical & Sensors products  ·  **never** "sub-markets"
- Lists every product page in this market, current page marked active. Collapsible — labels
  reduce to the two-letter `sidebar_abbr` in each product page's front-matter; order follows
  `sidebar_order`.
- **Helper card (closes the rail):** "Tell us what the device has to see or sense, and we will point you to the right line." + a **Contact us** link.
- Shown even where a market has only one product page, for structural consistency.

### Where we build
- **Lead / Intro:** Optical and sensor programs run across our sites in the USA and Thailand, with camera modules and microdisplays concentrated in the USA and sensor assembly in Thailand. We frame this as dual-source capacity within one company — a program can qualify at a second site for supply continuity, not migrate away. See [Locations](/locations/) for plant-level detail.
- **Sites:**
  - USA · Ohio · camera modules, microdisplays
  - Thailand · Ayutthaya · proximity & ambient light sensors, MEMS, fiber-optic
  - Thailand · Lamphun · supporting PCBA and board-level assembly

### FAQ (→ FAQPage JSON-LD)
- **Lead / Intro:** Common questions from optical and sensor engineering and procurement teams.
- **What does Hana build for optical and sensor products?** Camera modules — including infrared modules — MEMS and optical sensors such as proximity, ambient light, color and time-of-flight, and LCOS/HTPS microdisplays. In most cases we assemble and test these as finished optical units, not just bare boards.
- **Why does optical and sensor assembly need cleanroom and alignment?** Because tolerances are measured in microns and a single particle or static discharge can cost a device its yield. Hana runs cleanroom lines under controlled ESD handling, with active optical alignment on camera modules so the lens and image sensor stay matched.
- **Which sites serve optical and sensor programs?** Camera modules and microdisplays run in the USA (Ohio), and proximity, ambient light and MEMS sensors run in Thailand (Ayutthaya). We treat this as dual-source capacity within one company.
- **Can Hana handle miniature, sensitive sensor assemblies?** Yes. Proximity, ambient light and MEMS sensors are small, delicate devices — low-stress assembly and cleanroom handling are a core part of Hana's optical and sensor discipline.

### Closing CTA
- **Heading:** Start an optical or sensor build program with Hana
- **Body:** Tell us what the device has to see or sense, and where it runs. We will point you to the right site and processes, and come back with a plan.
- CTA: Contact us → `/contact/`

## Verify with Hana before drafting copy
- Which sites run optical/sensor work
- Cleanroom classes safe to publish
- Active-alignment capability in production
- Product-examples strip: Ohio (camera modules, microdisplays) + Ayutthaya ("smallest proximity sensor", "thinnest ambient light sensor") + OSAT p.20 sensors. Confirm items.
- ⚑ "World's smallest proximity sensor" / "world's thinnest ambient light sensor" are deck-sourced superlatives — held OUT of the drafted copy above; confirm before any use (superlatives are legally sensitive).
- ⚑ Specific cleanroom/ESD standards (ISO 14644-1, ANSI/ESD S20.20) exist in the deck but are named generically in the copy above ("cleanroom lines under controlled ESD handling") — confirm the exact class is safe to publish before naming it.
- ⚑ Site-to-product mapping in the locations block — especially Lamphun's role (deck lists the site but no clear optical/sensor product) — confirm before the block goes live.
