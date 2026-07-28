<!-- Product page (sub-page) — drafted to the Automotive spoke prose model.
     Parent hub: /markets/medical/ · Model file: ../Automotive/power-modules.md
     REGISTER: technical industry professionals — open on process, not scene-setting.
     RULES: no product-lifespan claims; services framed as what Hana CAN apply;
     never describe the customer's product function/performance.
     T31 (revised Jul 2026): this page = FLEX + FLIP-CHIP BOARD TECHNOLOGY under ISO 13485.
     Ruggedization → Industrial & IoT · qualification → Automotive · signal integrity → Telecom.
     Its sibling ../hearing-aid-assembly.md owns the DEVICE story (acoustic, final assembly,
     listening test); this page owns the BOARD. Do not merge them.
     Source: "Hana Hearing Aids Rev A" deck (Medical case-study folder) — flex/flip-chip figures.
     Shared SPI/AOI/X-ray/ICT bullet deliberately REMOVED (Jul 2026) — it was identical on four
     market PCBA pages; inspection detail now lives only on the capability page. -->
---
title: "Medical PCBA"
slug: pcba
url: /markets/medical/pcba
market: Medical
sidebar_abbr: PB
sidebar_order: 3
capability_link: /capabilities/pcba-box-build/smt-assembly
meta_title: "Medical PCBA — Flex & Flip Chip, ISO 13485 | Hana"
meta_description: "Hana assembles medical PCBAs under ISO 13485 — adhesiveless flex, flip chip on flex at 150 µm bump pitch, 01005 passives, underfill, folding and laser depanel."
---

# PCB assembly for medical devices

**Medical · Medical PCBA**

Medical electronics are where board assembly runs out of room. A hearing instrument or a wearable diagnostic has to fit a package the human body defines, not the board — so the work moves onto adhesiveless flex, the die goes on as flip chip rather than in a package, and the finished circuit is folded into the shell. Hana builds to that: multi-layer flex with fine lines and blind vias, flip chip at fine bump pitch alongside 01005 passives, underfill and coating, multi-step folding, and laser depanel. All of it runs on dedicated medical lines under an ISO 13485 quality system, so the build is documented and traceable as it is produced.

## What we specialize in
- **Flex and rigid-flex assemblies** — two- and four-layer adhesiveless flex down to around 5 mil total thickness, with 2 mil lines and spaces and 2 mil blind vias, assembled and then folded into the device envelope in multiple controlled steps.
- **Flip chip on flex and board** — bare die attached at fine bump pitch, in solder-bump, gold-bump and gold-plated forms, placed alongside 0201 and 01005 passives on the same circuit.
- **Underfill, coating and finishing** — automated underfill and coating dispense with thermal or air cure, single or stepped, and laser depanel and marking to fine line widths.
- **Documented, traceable build** — controlled work instructions, formal change control, and material, process and parameter traceability recorded as the board is built.

## Where we build
Medical board assembly runs on dedicated medical lines at Hana sites in **Thailand and China**. Because the same capability runs in more than one country inside a single company, a program can be dual-sourced for capacity or supply-chain resilience — geographic optionality without leaving Hana.

## The capability behind this page

This work draws on Hana's **SMT Assembly** capability, alongside flip-chip and flex assembly from the wider group. The full process envelope — placement accuracies, inspection and test coverage — lives on that capability page.

## Frequently asked questions

**What medical products can Hana build boards for?**
Boards for patient-monitoring and diagnostic equipment, and the miniature flex and flip-chip circuits inside hearing, wearable and drug-delivery devices — supplied as assemblies or built into the device on the same site.

**Can Hana assemble flip chip and flex for medical devices?**
Yes. Flip-chip die at fine bump pitch — solder-bump, gold-bump or gold-plated — can be placed on multi-layer adhesiveless flex alongside 0201 and 01005 passives, with underfill, coating and multi-step folding as part of the same build.

**What does ISO 13485 mean for how a board is built?**
The process is documented, controlled and evidenced: work runs to controlled instructions on dedicated medical lines, changes go through formal change control, inspection results are recorded, and material, process and parameter traceability is produced as the board is built rather than assembled afterwards.

**Has Hana been inspected by a medical regulator?**
Yes. Hana has been through US FDA inspection under 21 CFR 820, the FDA's quality system regulation for medical devices, in addition to holding ISO 13485. That means the quality system behind a medical build has been examined by an external regulator, not only self-declared.

---

**Talk to us about your medical board program.**
[Contact us](/contact)

<!-- VERIFY BEFORE PUBLISH (hand to Hana ops):
  - ISO 13485 sites — ⚑ site scope NOT confirmed. Deck shows ISO 13485 certified 2007 and ISO 9001
    1995; confirm which sites hold current certification before publish.
  - ⚑ FLEX / FLIP-CHIP FIGURES from the "Hana Hearing Aids Rev A" deck (pp.4–8). All are broad
    capability-extent figures, which house rules allow, but confirm each is current and public-safe:
      · 2- and 4-layer adhesiveless flex; ~5 mil total thickness; 2 mil lines/spaces; 2 mil blind via
      · flip chip at 150 µm bump pitch (page says "fine bump pitch" — decide whether to state 150 µm)
      · bump types: solder bump, Au bump, Au-plated / no-bump
      · 0201 and 01005 passives; multi-step folding (deck cites a 9-step fold)
      · underfill dispense ±25 µm; laser depanel ±20 µm, min line width 20 µm
      · flip-chip placement ±10 µm; component mount ±35 µm; paste print ±15 µm
      · reflow to 350 °C, up to 13 zones, hot-air convection under N2
    NOTE: exact figures are deliberately generalized in the copy above; add specifics only once
    confirmed. Machine names and model numbers from the deck are excluded per house rules.
  - ⚑⚑ US FDA / 21 CFR 820 — claimed in the FAQ ONLY (Rupert, Jul 2026 — deliberately pulled out of
    the intro so it sits as an answer to a direct question, not as a headline claim). Do not move it
    back into body copy. Source: "Hana Hearing Aids Rev A" deck p.2 — "Experience US FDA inspection,
    21 CFR 820".
    HIGHEST-PRIORITY VERIFY ITEM on this page. Wording is deliberately "has been through US FDA
    inspection under 21 CFR 820" — a factual statement about having been inspected. It must NOT
    drift to "FDA approved", "FDA certified", "FDA registered" or "FDA compliant", which are
    different claims and legally risky. Confirm with Hana:
      · which site(s) were inspected, and when
      · whether the inspection outcome permits this being stated publicly
      · whether the hearing-aid-system scope limits how broadly it can be claimed
    If any of that is unclear, cut the claim rather than soften it.
  - Pull test / shear test on flip-chip and flex joints — confirm both are offered.
  - Which sites run medical PCBA, and specifically which run flex and flip chip
    (currently framed as Thailand + China: Lamphun, Jiaxing).
  - Change-control claim and "material, process and parameter traceability" wording — confirm these
    match how Hana describes them to customers.
  - Capability cross-link: placeholder specifies /capabilities/pcba-box-build/smt-assembly/, the
    fact pack lists /capabilities/pcba-box-build. ⚑ Resolve which URL is correct before build.
  - T31 separation held: no ruggedization (Industrial), no IATF/under-hood qualification
    (Automotive), no RF/signal-integrity content (Telecom). Device-level acoustic and listening
    test deliberately left to ../hearing-aid-assembly.md — keep the board/device split.
  - COPY RULES APPLIED (Jul 2026): no product-lifespan / durability-outcome claims
    (Hana builds to the customer's design); services framed as what Hana CAN apply,
    selected per program; no description of the customer's product function.
-->
