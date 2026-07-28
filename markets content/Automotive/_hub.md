<!-- Working copy for the Markets page-plan structure (06 Jul 2026).
     Source draft: Copy & Content/markets-automotive-hub-draft.md — treat THIS file as the working copy going forward. -->
# Automotive — Hub (Pillar) Page Content Draft

**URL:** `/markets/automotive/`
**Role:** Pillar page of the Automotive topic cluster — the broad, content-rich SEO anchor that
links down to the five lite spokes (`power-modules`, `sensor-assembly`, `led-lighting`,
`rfid-tire-tags`, `automotive-pcba`). Spoke drafts: `markets-automotive-spokes-draft.md`.
**Status:** First-pass content draft. **Not yet brand-reviewed** — run `hana:brand-review` before
publishing. Facts are grounded in the June 2026 source decks (EMS, OSAT, Company Overview) —
see "Sources & verification" at the end. Claims flagged ⚑ still need Hana sign-off.
**Register:** procurement and program buyers — accessible, name the process not the parameters.
**Primary keywords:** automotive EMS manufacturer, automotive OSAT, automotive power module
assembly, AEC-Q qualified packaging, automotive PCBA partner, ADAS sensor assembly, RFID tire tags.

## SEO

| Field | Value |
|---|---|
| `urlPath` | `/markets/automotive` |
| `titleTag` | Automotive Electronics Manufacturing — EMS & OSAT \| Hana |
| `metaDescription` | Hana manufactures automotive electronics across EMS and OSAT — power modules, sensors, LED lighting, PCBA and RFID tire tags — on automotive-qualified lines. |
| `h1` | = Hero H1 below (one H1 per page) |
| `canonical` | self-referencing |
| `FAQPage` JSON-LD | generated from the FAQ block below |

---

## Hero

**H1:** Automotive electronics manufacturing — EMS and OSAT under one company

**Sub-copy (≈50 words):**
Hana builds the electronics inside the modern vehicle — from wide-bandgap power modules and
ADAS sensors to LED lighting, control boards and RFID tire tags. As a combined EMS and OSAT
manufacturer specializing in microelectronics, we assemble at both the package level and the
board level, on automotive-qualified lines.

**Hero CTA:** *Talk to our automotive team* → `/contact/`

---

## Block 1 — Why Hana for automotive

Most automotive electronics suppliers do one layer of the work. Hana does two. We are a
combined **EMS** (electronics manufacturing services) and **OSAT** (outsourced assembly and
test) manufacturer, so we can package the semiconductor and assemble the board it sits on
within one company. For an automotive program, that shortens the path from bare die to a
tested module, and keeps qualification and change control in fewer hands.

Our specialization is **microelectronics** — the small, high-reliability assembly that
automotive power, sensing and lighting depend on. Hana was founded in 1978 and has been listed
on the Stock Exchange of Thailand since 1993; today the group runs about 1.7 million square
feet of manufacturing and employs around 7,500 people. Many of our customer relationships run
for decades — which matters in automotive, where a part can stay in production for the life of
a platform.

---

## Block 2 — What we build for the vehicle

Five application areas, each with its own page. The detailed process work lives on the
capability pages these link through to.

| Sub-market | What it is in the vehicle | Page |
|---|---|---|
| **Power modules** | IGBT and silicon-carbide (SiC) modules for traction inverters, on-board chargers and DC-DC converters — including GaN and SiC bonded on DBC for EV chargers. | `/markets/automotive/power-modules` |
| **Sensor assembly** | MEMS and optical sensors for ADAS and in-cabin systems — LiDAR cavity packages, pressure and oil sensors, and camera modules. | `/markets/automotive/sensor-assembly` |
| **LED lighting** | LED headlamp and driver modules, plus signaling and interior lighting, built around a managed thermal path. | `/markets/automotive/led-lighting` |
| **RFID tire tags** | Ruggedized UHF tags built into the tire for whole-life traceability — from the production line through retread and recycling. | `/markets/automotive/rfid-tire-tags` |
| **Automotive PCBA** | Board assembly for control units, infotainment and power electronics, with inspection on every board. | `/markets/automotive/automotive-pcba` |

---

## Block 3 — Built and tested to automotive grade

Automotive parts pass tighter qualification than most electronics, and they have to stay
traceable for years after they ship. Hana assembles **automotive-qualified packages across
AEC-Q Grade 0, 1 and 2** — including SOT, SOIC, QFN and DFN families, and a Grade 1 QFN built
for LiDAR.

Behind that sits a set of automotive-specific process work:

- **Unit-level traceability** — each finished unit is tied back to the wafer position its die
  was picked from, so a field question can be traced to a single device.
- **Side-wettable-flank QFN and in-house chemical de-burr** — developed for the automotive
  inspection and solder-joint standards that visual AOI of leaded packages relies on.
- **Inspection on every board** — automated optical inspection (AOI) and X-ray check the
  joints you cannot see, with in-circuit and functional test as the program requires.

---

## Block 4 — Where we build it

Hana manufactures across **Thailand** (Ayutthaya and Lamphun), **China** (Jiaxing),
**Cambodia** (Koh Kong) and the **USA** (Ohio), with semiconductor packaging and
automotive-qualified assembly concentrated in Ayutthaya, and long-running RFID lines in China
and the USA. Building in more than one country gives an automotive program a practical way to
balance cost, capacity and regional supply risk over a long platform life. See
[Locations](/locations/) for plant-level detail.

---

## FAQ (AEO format — emit as FAQPage JSON-LD)

**Is Hana an automotive-qualified manufacturer?**
Hana assembles automotive-qualified packages across AEC-Q Grade 0, 1 and 2 and runs unit-level
traceability that ties each unit back to its die. Confirm the specific qualifications and
certifications required for your program with our team.

**Can Hana handle both the chip and the board?**
Yes. As a combined EMS and OSAT manufacturer, Hana can package the semiconductor and assemble
the PCBA it sits on within one company — which shortens the qualification and supply path for
an automotive program.

**What automotive products does Hana build?**
Power modules, MEMS and optical sensors, LED lighting modules and drivers, automotive PCBAs,
and RFID tire tags — covering power, sensing, lighting, control and identification.

**Where does Hana build automotive electronics?**
Across Thailand, China, Cambodia and the USA, with semiconductor packaging and
automotive-qualified assembly concentrated in Ayutthaya, Thailand.

---

## Closing CTA + internal links

**CTA:** *Talk to our automotive team* → `/contact/`

- **Down to spokes:** the five pages in Block 2.
- **Across to capabilities:** [Microelectronic / Power assembly], [MEMS & Sensor Assembly]
  (`/capabilities/mems-sensor-assembly`), [SMT Assembly] (`/capabilities/smt-assembly`),
  [RFID Tire Tags] (`/capabilities/rfid-tire-tags`).
- **Up/across markets:** Industrial & IoT, Optical & Sensors, Power Management.

---

## Sources & verification

**Grounded in the June 2026 source decks** (so these can be stated as fact):

| Claim | Source |
|---|---|
| Combined EMS + OSAT, microelectronics specialization; founded 1978; SET-listed 1993; ~1.7M sq ft; ~7,531 employees; serves automotive among other sectors | Company Overview 2026 Rev. A (slides 2–3) |
| Automotive-qualified packages, AEC-Q Grade 0/1/2 (SOT/SOIC/QFN/DFN families; QFN28L for LiDAR) | OSAT deck (pp. 74–76, "Advanced Automotive Technology" / "Automotive Qualified Package") |
| Wide-bandgap GaN/SiC for automotive power, EV charger (GaN+SiC on DBC, Ag-sinter), 3-phase motor-control IPM | OSAT deck (pp. 36–42) |
| LiDAR/ADAS cavity packages, pressure & oil sensors, TOF sensor in car, MEMS air-flow/pressure sensors, LED headlamps & drivers, brake/oil/gas sensors | OSAT pp. 59–66; EMS p. 45 |
| Unit-level traceability (ULT); side-wettable-flank QFN; in-house chemical de-burr for automotive | OSAT pp. 31–33 |
| AOI, X-ray, ICT and functional test at board level | EMS pp. 21–22, 30–31 |
| 20+ years RFID; tire-ecosystem life-cycle traceability; ARC certification (USA & China) | EMS pp. 49, 51, 53 |
| Sites: Ayutthaya, Lamphun, Jiaxing, Koh Kong (Cambodia), Ohio | Company Overview slide 3; brand record |

**⚑ Still needs Hana sign-off before publish:**

1. **IATF 16949** automotive QMS certification — *not named in these decks.* Confirm whether
   Hana holds it and at which sites before stating it anywhere on the automotive pages.
2. **Site-level automotive mapping** — the decks tie automotive-qualified packaging and
   wide-bandgap power to **Ayutthaya**; confirm which other sites are automotive-qualified for
   board assembly, sensors and LED before the spoke `sites`/`sitesLead` go live.
3. **No customer names** — the EMS deck names brands (e.g. Yale-branded security products);
   none of that is used here and none should appear on the public pages.

> **Note for the spoke drafts:** the OSAT deck *does* document automotive-qualified packages
> with AEC-Q grades, so the AEC-Q flags in `markets-automotive-spokes-draft.md` can be softened
> from "verify it exists" to "confirm the correct sub-spec per product." IATF 16949 still needs
> verifying.
