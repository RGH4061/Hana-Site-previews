# Markets — pre-publish checklist

Consolidated from the VERIFY blocks across all 10 hubs and 26 product pages (293 raw items,
deduplicated to the decisions below). Built to be worked through in a session with the team.

**Owners:** `OPS` = Hana operations / plant teams · `RH` = Rupert · `TB` = Thang · `DEV` = developer

**Source decks** (all in `6. Hana Collateral/`):

| Short name | File | Location |
|---|---|---|
| **EMS deck** | HANA Group Technical Capability 2026 Rev.1 **EMS** (Updated June'26).pdf | `Capabilities/` |
| **OSAT deck** | HANA Group Technical Capability 2026 Rev.1 **OSAT** (Updated June'26).pdf | `Capabilities/` |
| **Overview deck** | Hana Microelectronics Overview 2026 Rev. A (Update June 2026).pdf | `Hana company overview/` |
| **Hearing Aids deck** | Hana Hearing Aids Rev A.pdf (18pp) | `Capabilities/Medical Capabilties (case Study)/` |
| **SEO task list** | Hana_SEO_Developer_TaskList_June2026.xlsx | `Page Specs & Templates/_Site-wide/` |

> **⚠️ "NO SOURCE" means exactly that** — the claim is currently asserted with nothing behind it.
> Those items need a decision to substantiate or cut, not just a confirmation.

---

## A · Blockers — regulatory & claim risk
*Resolve or cut. These carry legal/regulatory exposure, not just accuracy risk.*

| # | Item | Source to open | Owner | Pages |
|---|---|---|---|---|
| A1 | **US FDA / 21 CFR 820.** Which site was inspected, when, does the outcome permit public statement, does the hearing-aid scope limit it? Wording must stay "has been through US FDA inspection under 21 CFR 820" — **never** "FDA approved / certified / registered / compliant". If unclear, **cut rather than soften**. Now sits in the **FAQ only**, by decision. | **Hearing Aids deck p.2** — "Experience US FDA inspection, 21 CFR 820" | OPS + TB | Medical hub, Medical PCBA |
| A2 | **ISO 13485** — which sites hold current certification. | **Hearing Aids p.2** (certified 2007) · **Overview** sl.15/16 Lamphun, sl.32/33 Jiaxing, sl.44/47 Ayutthaya | OPS | Medical hub + 4 medical pages |
| A3 | **IATF 16949** — confirmed held; confirm per-page scope. | **Overview** sl.15/16, sl.30, sl.32/33, sl.44/47 | OPS | 4 automotive pages |
| A4 | **AEC-Q sub-specs** (Q100/Q101/Q102/Q104) — currently softened to general capability language. | **OSAT deck pp.74–76** — "Automotive Qualified Package" | OPS | Automotive power-modules, sensor-assembly, led-lighting |
| A5 | **ARC (Auburn) certification** — still current? Agree public wording. "192+ listings / 26 certified tags" held out of copy. | **EMS deck pp.49, 53** | OPS | RFID hub, tags-inlays, industrial asset-tracking |
| A6 | **Superlatives** — "world's smallest proximity sensor", "world's thinnest ambient light sensor", "world-leading tire tag". All held OUT of copy. | **Overview sl.49/51** (sensors) · brand record (tire tag) | RH + TB | Optical hub, Optical mems-sensors, RFID tire-tags |
| A8 | **Cleanroom class (ISO 14644-1) / ESD (ANSI/ESD S20.20)** — described generically; confirm before naming. | **Overview sl.44/47** (Ayutthaya certs) | OPS | Optical hub, mems-sensors, microdisplay, camera-modules |

---

## B · Structural — dev handoff & URL plan

| # | Item | Source to open | Owner |
|---|---|---|---|
| B1 | Add **`/markets/data-centers/`** row — 10th pillar, no sub-pages. | **SEO task list** → 🗺 URL Structure tab | RH |
| B2 | Remove **`/markets/telecommunications/pcba/`** row — page dropped Jul 2026. Redirect to the telecom hub if ever published. | **SEO task list** → 🗺 URL Structure + Redirect Map tabs | RH + DEV |
| B3 | **Automotive PCBA slug mismatch** — tab says `pcba`, draft frontmatter says `automotive-pcba`. | **SEO task list** → 🗺 URL Structure · `Automotive/pcba.md` frontmatter | RH |
| B4 | **Capability cross-link URLs** — 6+ pages point outside the agreed capability structure. One decision fixes all. | **SEO task list** → Capabilities Matrix · `Page Specs & Templates/Capabilities/` | RH + DEV |
| B5 | **Canonicals** — RFID tire-tags → Automotive; Medical wireless-charging → Consumer. Confirm the capability-side tire-tag URL also canonicalises. | **SEO task list** → 🗺 URL Structure | DEV |
| B6 | **Built Industrial & IoT HTML page** renders a "capabilities behind this market" card row; should be the products-built section. MD and built page diverge until fixed. | `Hana Industrial & IoT Hub (standalone).html` | RH |
| B7 | **RFID cards keyword** reads "Thailand"; card production is China + USA. | **SEO task list** → Page SEO Briefs · **EMS deck pp.48–53** | RH |
| B8 | **RFID tags-inlays H1/meta name LF**; sourcing evidences UHF/HF only. | **EMS deck pp.48–53** | RH + OPS |

---

## C · Site mapping
*The single biggest cluster — nearly every page states which sites run its work.*

| # | Item | Source to open | Owner |
|---|---|---|---|
| C1 | **Confirm site-to-product mapping for every market.** | **Overview** sl.7 (capability × site matrix), sl.15/16, sl.30, sl.32/33, sl.37/38, sl.44/47 | OPS |
| C2 | **⚠️ "More than one country" is not universally true.** Medical MEMS and Telecom RF run Thailand-only (Ayutthaya + Lamphun), so those pages say "more than one **site**". Confirm Jiaxing coverage — which restores the dual-source claim — or accept the weaker wording. | **Overview sl.7** — Worldwide Manufacturing Capability matrix | OPS + RH |
| C3 | **Six automated RFID inlay lines at Jiaxing** — confirm current count. | **Overview sl.32/33** | OPS |
| C4 | **Max layer count for high-density PCBA** — the first spec a high-density buyer looks for. | **⚠️ NO SOURCE** — no figure in any deck | OPS |

---

## D · Process claims
*All are named processes, not machines. Confirm each is in production and publishable.*

| # | Claim | Source to open | Pages |
|---|---|---|---|
| D1 | Silver-sinter die attach · heavy copper (PCC) wire · DBC / AMB ceramic substrate | **OSAT pp.36–47** (SiC/GaN section) | Automotive + Industrial power-modules, Power Mgmt |
| D2 | Laser grooving + blade dicing for SiC, GaN, GaN-on-Si, low-K wafers | **OSAT p.24** — GaN/SiC/Low-K dicing | Power Mgmt igbt-sic-modules |
| D3 | IPM assembly — drive + power stage packaged as one module? | **OSAT pp.38, 41** — IPM for 3-phase motor control | Power Mgmt, Industrial power-modules |
| D4 | Wettable flank (step-cut **and** dimpled), pure tin · chemical deflash · copper-clip attach | **OSAT** — wettable flank, chemical deflash, MOSFET Cu clip pages | Power Mgmt power-discrete |
| D5 | Conformal **and** parylene coating per site · selective / wave soldering per site | **Overview sl.32/33** (Jiaxing auto conformal & parylene) · **EMS** finishing | Industrial pcba-box-build |
| D6 | Vacuum reflow under nitrogen — which sites | **EMS p.10** | Consumer smt-sensors |
| D7 | **Flex / flip-chip figures** — 2- and 4-layer adhesiveless flex, ~5 mil thickness, 2 mil lines/spaces, 2 mil blind vias, flip chip at 150 µm bump pitch, ±10 µm placement, 9-step folding, underfill ±25 µm, laser depanel ±20 µm. **Generalised in copy until confirmed — these are the page's strongest credibility numbers.** | **Hearing Aids deck pp.4–8** | Medical PCBA |
| D8 | Active optical alignment in production | **Overview sl.37/38** (Ohio camera modules) | Optical camera-modules, Automotive sensor-assembly |
| D9 | In-house test rigs — hearing-aid & Bluetooth, gas & MEMS, acoustic, RF rack-and-stack | **EMS pp.32–33** · **Hearing Aids pp.14–17** | Medical, Telecom, Consumer |
| D10 | Hermetic seal + helium fine-leak · pull & shear test on flip-chip/flex joints | **OSAT pp.16–18** (seal/leak) · **Hearing Aids p.8** (pull/shear) | Telecom rf-assembly, Medical PCBA |
| D11 | Coil winding / coil assembly as a named group capability — which sites wind coils | **Overview sl.3, sl.7** — "Coil Winding / Coil Assembly" | Consumer + Medical wireless-charging |
| D12 | Wireless functional test set (802.11, GSM/cellular, GPS, Bluetooth) per site · battery handling | **EMS p.33** · **Hearing Aids p.15** | Industrial iot-device-assembly |
| D13 | On-metal, temperature-sensing, battery-assisted passive tag formats in production | **EMS pp.48, 57** | RFID + Industrial tag pages |

---

## E · Wording & editorial

| # | Item | Source to open |
|---|---|---|
| E3 | **Coil sourcing framing** — softened from "Most contract manufacturers buy the coil in" (unverifiable competitor claim) to "The coil is often bought in". Restore only if Hana will stand behind it. | editorial — no source needed |
| E4 | **Microdisplay rarity/tenure** — "It is uncommon work, and we have run it for years". | **⚠️ NO SOURCE** for the tenure claim |
| E5 | **R32 gas sensing on a medical page** — R32 is a refrigerant; confirm it belongs in a medical context. | **EMS p.45** — "Gas Sensors (CO2, CH4, R32)" |
| E6 | **"AI hearing aids"** — confirm the deck term is public-safe wording. | **EMS p.45** — "Hearing Aids with AI" |
| E7 | **Near-eye / AR omitted from microdisplay** — strong SEO term, not evidenced. Decide whether to add. | **⚠️ NO SOURCE** |
| E8 | **Data Centers market-size figures** ($2bn thermal SAM by 2030, $36bn optical TAM by 2028) — verify attribution or cut. | JPM analyst input — `Analyst Reports/JPM_HANA_extracted_for_website.md` |

---

## ✅ Already settled — no action, do not reopen

| # | Decision |
|---|---|
| E2 | **"20+ years" RFID — CONFIRMED** in the brand record. Keep consistent across all RFID pages. |
| E9 | **Data Centers "800G / 1.6T" stays** as a market-tier label (RH, Jul 2026). |
| E10 | **Data Centers instrument specs removed permanently** — PAM4, TDECQ, SNDR, jitter, lane rates. They describe the customer's oscilloscope, not Hana's build. **Do not reintroduce.** |
| — | **FDA sits in the FAQ only** (RH, Jul 2026) — deliberately out of body copy and the context band. |
| A7 | **Qi / WPC — RESOLVED** (RH, Jul 2026). Hana is **not Qi certified** but **does build in compliance with the standard**. Now claimed on Consumer wireless-charging, in a "What we build" bullet and a dedicated FAQ, with the distinction spelled out: certification for a finished consumer product is held by the **product owner**, and Hana builds to the standard that product is certified against. **Never** "Qi certified / WPC certified / Qi approved". |
| E1 | **"Decades" of telecom heritage — CONFIRMED true** (RH, Jul 2026). Stands as written; no year figure needed. Keep consistent across the telecom hub and rf-assembly. |
| — | **Telecom PCBA dropped** — one of four near-identical PCBA pages; telecom's differentiator is RF. |
| — | **Shared inspection/test bullet removed** from all market PCBA pages; lives only on the SMT capability brief. |

### Standing rules — verified clean across all 36 files (re-check after any edit)
No customer names · no hyperscaler names · no product-lifespan or durability-outcome claims ·
services framed as what Hana **can** apply · no description of a customer's product function ·
dual-source framing ("within the same company", never migration or "China+1") · Contact-only CTA ·
no machine names or model numbers · no shared boilerplate.
