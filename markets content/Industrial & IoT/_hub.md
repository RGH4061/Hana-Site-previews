# Industrial & IoT — Market hub (pillar) page plan

**URL:** `/markets/industrial-iot/`
**Status:** SYNCED — this content model reflects the **built Industrial & IoT HTML page** (the source of truth; `Hana Industrial & IoT Hub (standalone).html`). Copy below is transcribed from that page's content model. The built page renders a "capabilities behind this market" card row; per Rupert that slot is a **products-built** section, not capability links — so it is modeled here as a "Product examples" section, and no capability-link card row appears. Run `hana:brand-review` and clear the ⚑ items before publishing.
**Priority:** HIGH · **Schema:** Service, FAQPage, BreadcrumbList
**Pattern:** pillar page of the Industrial & IoT topic cluster — this is the reference template the other market hubs are matched to.
**Register:** Markets pages use broad, accessible language for procurement managers. CTA = Contact us only (no RFQ).

## SEO (from the page plan)

| Field | Value |
|---|---|
| Primary keyword | industrial IoT electronics manufacturing EMS |
| Title tag (draft, ≤60 chars) | Industrial & IoT Electronics Manufacturing \| Hana |
| Meta description (draft, ≤155 chars) | Hana manufactures industrial and IoT electronics — PCBA and box build, connected device assembly, RFID asset tracking and power modules — across Thailand and China. |
| H1 (draft) | = Hero title below (one H1 per page) |

## Product pages

| Sub-page | URL | Priority |
|---|---|---|
| PCBA & Box Build | `/markets/industrial-iot/pcba-box-build/` | HIGH |
| IoT Device Assembly | `/markets/industrial-iot/iot-device-assembly/` | MEDIUM |
| RFID Asset Tracking | `/markets/industrial-iot/rfid-asset-tracking/` | MEDIUM |
| Power Modules | `/markets/industrial-iot/power-modules/` | MEDIUM |

## What makes this hub distinct (T31)

Industrial buyers care about long product lifecycles, harsh-environment reliability and supply continuity — not consumer-style volume ramps. Lead with ruggedized build (conformal coating, wide temperature ranges), long-run program support and obsolescence discipline. Distinct from the Consumer Electronics hub (volume/miniaturization) and Automotive hub (vehicle qualification).

---

## Content model — the built Industrial & IoT page (reference template)
Layout: Hero → dark context band (3 points) → product examples → locations → FAQ → closing. **No capability-link card row** (that slot is the products-built section).

### Hero
- **Eyebrow:** Markets we serve
- **Title (H1):** Industrial and IoT electronics manufacturing
- **Intro (~50 words):** The controllers, connected devices and power electronics behind industrial equipment — built for the harsh environments, long production runs and supply continuity these programs demand. We assemble the board and, where you need it, the finished unit.
- **Product examples (hero strip):** Environmental monitors · Meters · Controllers · Connected sensors · Label printers · Drone sensors
- **CTA:** Talk to us → `/contact/`

### Market context band (dark panel)
- **Lead:** Why industrial buyers choose Hana
- **Heading:** Ruggedized build, held steady over long production runs
- **Body (~100 words):** Industrial and IoT products are not consumer volume ramps. They run in cabinets, plants and outdoor enclosures, and their programs stay in production far longer than consumer ones do. That changes what a manufacturer has to be good at: ruggedized assembly such as conformal and parylene coating, disciplined change control across long production runs, and the ability to keep building a product after its first components go end-of-life. Those are the processes we run, and we run the same qualified ones across more than one country so a program has somewhere to go if it needs to.
- **Three points:**
  1. **Ruggedized build** — Conformal coating, mixed-technology boards and through-hole for heavy connectors — assembly choices made for heat, vibration and moisture, not the bench.
  2. **Long-program support** — Change control and obsolescence discipline over runs that last years, so the product you qualify is the product that keeps shipping.
  3. **More than one country** — The same processes run across our sites in Thailand and China — dual-source capacity within one company, not a migration.

### Product examples
_Lead:_ Four areas cover what we build for this market — from the board to the connected product, the tag and the power module inside the equipment.

- **PCBA & box build** → `/markets/industrial-iot/pcba-box-build/` — Ruggedized board assembly through to the tested, finished unit — conformal and parylene coating, mixed-technology boards and functional test for controls and equipment in demanding environments. · _Conformal-coated industrial board_
- **IoT device assembly** → `/markets/industrial-iot/iot-device-assembly/` — Complete connected devices assembled and tested as one unit — board, radio, sensors, battery and enclosure — with wireless functional test before shipment. · _Connected device on the line_
- **RFID asset tracking** → `/markets/industrial-iot/rfid-asset-tracking/` — Rugged UHF tags and inlays built to withstand tools, pallets and outdoor exposure, so plants, fleets and warehouses can track equipment — built on 20+ years of RFID manufacturing. · _Industrial UHF asset tag_
- **Power modules** → `/markets/industrial-iot/power-modules/` — The power modules inside EV chargers, solar inverters and motor drives — IGBT and SiC assembly built around the thermal path and the duty cycle of industrial energy. · _IGBT power module_


### Sidebar rail (renders on this market's product pages)
- **Heading:** Industrial & IoT products  ·  **never** "sub-markets"
- Lists every product page in this market, current page marked active. Collapsible — labels
  reduce to the two-letter `sidebar_abbr` in each product page's front-matter; order follows
  `sidebar_order`.
- **Helper card (closes the rail):** "Tell us what the product does and where it runs and we'll point you to the right line." + a **Contact us** link.
- Shown even where a market has only one product page, for structural consistency.

### Where we build
- **Sites:**
  - Thailand · Lamphun · PCBA · EMS
  - Thailand · Ayutthaya · OSAT · PCBA
  - China · Jiaxing · EMS · OSAT · RFID

### FAQ (→ FAQPage JSON-LD)
- **Lead / Intro:** Industrial and IoT — frequently asked. Common questions from industrial and IoT engineering and procurement teams.
- **What does Hana build for industrial and IoT?** Ruggedized PCBAs and full box-build products, complete connected IoT devices, RFID asset-tracking tags, and power modules for industrial energy and drives. In most cases we can build the complete unit, not only the board.
- **How does Hana support long-running industrial programs?** Through change control and obsolescence management across production runs that last years, so the build stays consistent as components move through their own life cycles — and through ruggedized assembly options such as conformal and parylene coating where the environment demands them.
- **Which sites serve industrial programs?** Industrial work runs across our sites in Thailand and China. We treat this as dual-source capacity within one company — a program can qualify at a second site for supply continuity.
- **What ruggedized finishing can Hana apply?** Conformal and parylene coating and harsh-environment finishing are available within our industrial box-build scope. The finish set is selected per program and confirmed per site during the program review.

### Closing CTA
- **Heading:** Start an Industrial electronics build program with Hana
- **Body:** Tell us what the product does and where it runs. We will point you to the right site and processes, and come back with a plan.
- CTA: Contact us → `/contact/`

## Verify with Hana before drafting copy
- Which sites serve industrial programs
- Conformal coating / harsh-environment finishing in production
- Long-term supply & obsolescence support commitments that can be named publicly
- Product-examples strip (hero): Environmental monitors · Meters · Controllers · Connected sensors · Label printers · Drone sensors — transcribed from the built page; confirm current.
- ⚑ The built HTML page currently renders a "capabilities behind this market" card row — per Rupert this should be the products-built section instead (modeled above as "Product examples"). Update the built page so its render matches this model (drop the capability-link cards).
