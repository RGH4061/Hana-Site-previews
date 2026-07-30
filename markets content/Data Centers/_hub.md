<!-- Working copy for the Markets page-plan structure. Reformatted 09 Jul 2026 to the
     Industrial & IoT template profile (minus capability-card row; no product-example cards).
     UPDATED Jul 2026: scope widened from TEC-only to TWO strands — (1) thermal control
     electronics around TEC devices, (2) high-density PCBA for optical test instrumentation
     (the 1.6T transceiver test program). Bespoke drafted copy from the May 2026
     JPM-analyst draft is preserved.
     STRICT: no customer names, and NO hyperscaler / end-customer names anywhere
     (the source slide lists them — they must not appear on the site).
     Source draft: Copy & Content/markets-data-centers-draft.md.
     ⚑ NOT YET IN THE URL PLAN: /markets/data-centers/ has no row in the 🗺 URL Structure
     tab (9 market pillars listed; this would be the 10th). Add the row before dev handoff. -->
# Data Centers — Market hub (pillar) page plan

**URL:** `/markets/data-centers/`
**Status:** DRAFT — reformatted to the Industrial & IoT template profile, scope widened to two strands (thermal + optical test instrumentation). Not yet brand-reviewed; run `hana:brand-review` and clear the ⚑ items before publishing. **No customer names, and no end-customer / hyperscaler names.**
**Priority:** MEDIUM · **Schema:** Service, FAQPage, BreadcrumbList · **Do not feature on homepage hero** (keep the homepage representative of Hana's bulk-of-business mix).
**Pattern:** standalone market hub — two-strand scope, **no product sub-pages at present**. Model: the built Industrial & IoT hub.
**Register:** technical procurement + NPI buyers. This market runs more technical than the other hubs — the reader knows what signal integrity and board density mean. Still no machine names or customer process IP.

## SEO (from the page plan)

| Field | Value |
|---|---|
| Primary keyword | EMS for AI data center electronics |
| Title tag (draft, ≤60 chars) | Data Center EMS — AI Infrastructure Electronics \| Hana |
| Meta description (draft, ≤155 chars) | Hana builds precision electronics for AI data centers — TEC control boards and high-density PCBA for 800G and 1.6T optical test equipment. |
| H1 (draft) | = Hero title below (one H1 per page) |
| Other keywords | high density PCBA manufacturer, PCBA for high-speed oscilloscopes, PCBA for optical test equipment, EMS partner co-packaged optics, thermoelectric cooling assembly partner, manufacturing partner for AI infrastructure |

## Product pages

**None at present.** The hub now covers two strands (thermal control electronics; high-density PCBA for optical test instrumentation). If either grows enough to need its own page — **High Density PCBA** is the likeliest first spoke — add it then rather than splitting the narrative now.

## What makes this hub distinct (T31)

The AI-infrastructure precision hub. Two strands, both at the edge of what is measurable or coolable: (1) the control-and-assembly layer around thermoelectric cooling (TEC) devices, placed right at the heat source in optical transceivers, CPO and memory stacks; (2) **high-density PCBA for the high-speed oscilloscopes** used to qualify 800G and 1.6T optical transceiver hardware. Distinct from Telecommunications (RF/high-frequency heritage — cross-link) and Optical & Sensors (precision handling — cross-link). Frame in capability and milestones, not market position.

---

## Content model — mirrors the Industrial & IoT built template
Layout: Hero → dark context band (3 points) → scope prose, three strands (no product cards) → locations → FAQ → closing. No capability-card row (per template).

### Hero
- **Eyebrow:** Markets we serve
- **Title (H1):** Precision EMS for the AI data center — thermal control, optical assembly and high-reliability electronics
- **Intro (~50 words):** Hana works where signal integrity meets thermal performance in the AI data center: the control electronics and modules around thermoelectric cooling devices, and the high-density boards inside the optical test equipment used to qualify high-speed transceiver hardware.
- **Product examples (hero strip):** Thermoelectric coolers (TEC) · Optical transceiver test systems · SiC power transformers · High density PCBA
- **CTA:** Talk to our data center team → `/contact/`

### Market context band (dark panel)
- **Lead:** Why AI-infrastructure buyers choose Hana
- **Heading:** Built for the precision edge of AI infrastructure
- **Body (~100 words):** AI infrastructure pushes two different kinds of precision onto its supply chain, and Hana works at both. The first is thermal: the driver, power-management and current-regulation electronics around thermoelectric cooling (TEC) devices, and the modules that integrate them — the layer closest to the heat source in optical transceivers, co-packaged optics and memory stacks. The second is board density: the high-density PCBAs inside optical test equipment, where component count and routing density leave little margin and the joints that matter sit hidden beneath the packages. Both call for fine-pitch placement, controlled reflow and inspection coverage rather than sampling.
- **Three points:**
  1. **Combined PCBA + OSAT under one roof** — The board and the integrated circuit can be qualified together inside one supplier, shortening qualification cycles for precision programs.
  2. **High-density board assembly** — Fine-pitch placement, high layer counts and dense routing, with the inspection and test coverage these boards require — the assembly discipline behind both strands.
  3. **In-house automation engineering** — Programs here run on lines designed and built by Hana's own engineers, per program rather than retrofitted from shared capacity.

### Our scope — three strands
_No product sub-pages at present. Written as prose, not linked cards._

**1 · Thermoelectric cooling (TEC) electronics**

Thermoelectric cooling is solid-state — no compressor, no refrigerant, no moving parts. A TEC sits directly against the component it cools and can be adjusted in milliseconds, so it holds one small, specific area at a set temperature rather than cooling a whole enclosure. It works alongside heat sinks and liquid cold plates rather than replacing them.

The control electronics are what make that precision usable: the driver stage, power management and current regulation that read the setpoint and adjust to it continuously. A cooler is only as stable as the circuitry driving it.

In AI infrastructure this matters wherever heat and signal integrity meet — GPU and high-bandwidth memory hotspots, co-packaged optics, pluggable optical transceivers and switch ASICs, where thermal drift becomes throttling or signal loss.

**2 · High-density PCBA for high-speed oscilloscopes**

Dense, multi-layer boards for the high-speed oscilloscopes used to qualify optical transceiver hardware, assembled on fine-pitch SMT lines with X-ray on the joints a dense layout hides.

**3 · SiC power conversion**

Data-center power distribution is moving toward solid-state conversion — silicon carbide switching with a high-frequency magnetic stage in place of an iron-core transformer — which turns the power stage from a passive component into an assembled electronic one. That assembly is work Hana already runs for automotive and industrial power: SiC die onto ceramic substrate, interconnect sized to the current the design carries, and the drive electronics built around it.

> **Scope note — not copy.** Hana's role (control electronics for TEC devices, built to the device maker's design) is stated in the market context band and in FAQ 1, so it is deliberately not repeated above. The "Hana builds the board, not the instrument" line was removed 29 Jul 2026 (Rupert) — the page should say Hana is involved, not spell out the division of labour. The applications named in strand 1 are where the finished cooling devices are used — they are not applications Hana serves directly, and copy must not be edited to imply otherwise.

**Pipeline — not current scope.** TEC devices for waste-heat recovery. Previously listed as an application served; held out until contracted. Do not present it as work Hana does today.

**Note on strand 3 (29 Jul 2026, Rupert).** SiC power conversion is written as a *capability* claim, not a program claim — the assembly is proven work (Automotive, Industrial & IoT and Power Management all run it), the data-center application is emerging. This is the "say what Hana CAN do, not what it does" rule doing the work, and it is what lets the strand stand without a contracted program behind it. Do not rewrite it into the past tense or name a customer program.

### Where we build
_Lead / Intro removed 29 Jul 2026 (Rupert) — site list only on this hub._
- **Sites:**
  - Thailand · Lamphun · TEC control-electronics PCBA, high-density PCBA & module assembly

### FAQ (→ FAQPage JSON-LD)
- **Lead / Intro:** Common questions from AI-infrastructure engineering and procurement teams.
- **What does Hana build for data centers?** Two things: the control electronics and integrated modules around thermoelectric cooling (TEC) devices, and high-density PCBA for the high-speed oscilloscopes used to qualify optical transceiver hardware.
- **What does Hana build for high-speed oscilloscopes?** High-density PCBAs for the oscilloscopes used to test high-speed optical transceivers — dense, multi-layer boards assembled on fine-pitch SMT lines with X-ray inspection on the joints a dense layout hides.
- **What is thermoelectric cooling (TEC) in an AI data center?** TEC is a solid-state precision-cooling layer placed closest to the heat source. It does not replace heat sinks or liquid cold plates — it works alongside them, regulating temperature where signal integrity or chip performance is most sensitive.
- **Where does Hana manufacture this work?** From our Lamphun PCBA facility in Northern Thailand, with dedicated automation lines built per program by our in-house engineering team.
- **Can Hana scale a new data-center program?** Yes — through a measured, milestone-driven ramp from qualification to low-volume manufacturing to scale, with dedicated lines rather than shared capacity.

### Closing CTA
- **Heading:** Start an AI data-center program with Hana
- **Body:** Working on an AI thermal-management, high-speed optical or high-density board program that needs a precision EMS partner? Tell us what the product does — our Thailand team handles inquiries directly.
- CTA: Contact us → `/contact/`

---

## SEO/AEO notes for the developer

- **Schema:** `Organization` + `Service` (Service type = "Electronics Manufacturing Services for AI Data Center Electronics").
- Keep the FAQ block above as FAQPage JSON-LD.
- Cross-link from the Capabilities hub, Telecommunications and Optical & Sensors. Do **not** feature on the homepage hero.

## Verify with Hana before drafting copy
- **⚑ NO END-CUSTOMER NAMES.** The source slide for the optical-test program lists the hyperscale operators who use this equipment. Per Rupert (Jul 2026) they are deliberately left out — they must not appear anywhere on the site, in copy, alt text or schema, and are not repeated in this file. The direct customer is withheld on the slide and stays withheld here.
- **Optical test / high-density PCBA strand:** confirm the program is contracted and public-safe before publish.
- **⚑ INSTRUMENT-FUNCTION SPECS REMOVED (Rupert, Jul 2026).** The source slide's performance detail — lane-rate figures, PAM4 eye height, TDECQ/SNDR/jitter measurement — describes what the *customer's oscilloscope does*, not what Hana manufactures. It has been stripped from all page copy. Do not reintroduce it: this page claims Hana's board-assembly capability (fine-pitch placement, controlled reflow, X-ray on hidden joints), not the instrument's measurement performance.
- **DECIDED (Rupert, Jul 2026):** "800G and 1.6T" **stays** in the meta description and the T31 distinctness note — kept as a *market-tier* label (industry shorthand, like "5G" or "EV") rather than a performance claim. Revisit only if Hana's review objects.
- **Register check:** this hub runs more technical than the others by design (signal integrity, board density, layer count). Confirm that suits the audience, and keep machine names and customer process IP out.
- **Product-examples strip (hero):** Thermoelectric coolers (TEC) · Optical transceiver test systems · SiC power transformers · High density PCBA. Verify each item is contracted before publish; kept to 4 items by choice. CPO / GPU cooling deliberately held back (pipeline only).
- **SiC power conversion (strand 3)** — no deck source and no contracted program. Written as a capability claim for that reason; confirm before it is ever restated as work in progress. ⚑ The hero strip still says "SiC power transformers", which claims the finished transformer — the strand deliberately claims only the module and drive electronics. Reconcile the two.
- Site mapping (Lamphun). **Multi-country / dual-source framing deliberately left OFF this page (Rupert, 29 Jul 2026)** — Lamphun alone is the manufacturing story for now. This hub is therefore an exception to the "hubs keep their Where we build prose" rule in `_README.md`. Build it out later if the footprint becomes part of the data-center pitch.
- Market-size figures (thermal-materials SAM ~US$2bn by 2030; optical-networking TAM ~US$36bn by 2028) — keep as industry-research framing; verify attribution before publishing, or cut.
- ⚑ Add the `/markets/data-centers/` row to the 🗺 URL Structure tab (10th pillar) before dev handoff.
