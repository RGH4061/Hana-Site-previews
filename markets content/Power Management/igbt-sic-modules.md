<!-- Product page (sub-page) — drafted to the Automotive spoke prose model.
     Parent hub: /markets/power-management/ · Model file: ../Automotive/power-modules.md
     REGISTER: technical industry professionals — open on process, not scene-setting.
     RULES: no product-lifespan claims; services framed as what Hana CAN apply;
     never describe the customer's product function/performance.
     T31: this is the PACKAGE-LEVEL page — assembly discipline, not end uses.
     ../Automotive/power-modules = vehicle powertrain. ../Industrial & IoT/power-modules
     = industrial end uses. This page = how the module is built. -->
---
title: "IGBT & SiC Power Modules"
slug: igbt-sic-modules
url: /markets/power-management/igbt-sic-modules
market: Power Management
capability_link: /capabilities/ic-assembly-test
meta_title: "IGBT & SiC Power Module Assembly | Hana"
meta_description: "Hana assembles IGBT and SiC power modules — multi-die on DBC ceramic, high-thermal die attach, silver-sinter and heavy copper wire, plus cycling test."
keywords: "IGBT SiC power module assembly, SiC power module manufacturer, IGBT module packaging, IPM assembly, DBC substrate module assembly, power module cycling test"
---

# IGBT and SiC power module assembly and test

**Power Management · IGBT & SiC Power Modules**

A power module is a packaging problem before it is anything else. Several die sit on a ceramic substrate, and the joints between them — die to substrate, substrate to baseplate, die to the current path — are what the assembly is judged on under repeated switching. Hana works at that level. We assemble IGBT and SiC modules and IPMs across the standard package families, building multi-die layouts onto DBC ceramic with high-thermal die attach, silver-sinter where the construction calls for it, and heavy copper (PCC) wire on the current path. This runs on the same OSAT and microelectronic-assembly lines as our wider semiconductor packaging work, in Thailand and China.

## What we build

- **IGBT and SiC power modules** — multi-die assemblies on DBC ceramic in the standard package families: 34 mm and 62 mm, XM3, Econo and Econo Dual3, PIM, HP1, Easy 1B/2B/3B and HEPACK/DBC.
- **Intelligent power modules (IPMs)** — drive and power stages packaged together as a single module for motor-control programmes.
- **Board-mount and compact power packages** — TO-247TE, Top and Dual Cool QFN, INSOP, eeSiP and FC LGA outlines, where the module sits on a board rather than a baseplate.
- **Reliability and cycling test** — power cycling, thermal cycling and reliability sequences available to a programme's own qualification plan.

## Die attach, substrate, interconnect

Almost everything that decides a power module is decided in its joints, so Hana specifies each one rather than inheriting it. Die attach is matched to the construction — solder for conventional builds, silver-sinter where the design calls for a higher-temperature joint — and the attach is inspected, not assumed. Interconnect is heavy copper (PCC) wire, sized to the current the module is built to carry. Upstream, our dicing is qualified for the materials wide-bandgap work brings: laser grooving followed by blade dicing for SiC, GaN, GaN-on-Si and low-K wafers, where a conventional saw alone risks chipping the die. What leaves the line is a module verified against its own construction.

Hana packages the module. The inverter, drive or charger it goes into is the customer's product.

## One company, more than one country

Power module assembly runs at Hana sites in **Thailand (Ayutthaya)** and **China (Jiaxing)**. Because the same capability runs in more than one country inside a single company, a programme can be dual-sourced for capacity or supply-chain resilience — geographic optionality without leaving Hana.

## The capability behind this page

Module assembly draws on Hana's **IC Assembly & Test (OSAT)** capability — die attach, bonding, encapsulation and test. If you want the full process detail, that capability page covers it.

## Frequently asked questions

**What module constructions can Hana assemble?**
Multi-die IGBT and SiC modules and IPMs on DBC ceramic, in the standard families — 34 mm, 62 mm, XM3, Econo and Econo Dual3, PIM, HP1, Easy 1B/2B/3B, HEPACK/DBC — plus board-mount outlines such as TO-247TE, Top and Dual Cool QFN, INSOP, eeSiP and FC LGA. Die attach is solder or silver-sinter, with heavy copper (PCC) wire interconnect.

**What reliability testing can Hana run on a module?**
Power cycling, thermal cycling and reliability sequences are available and set against the programme's qualification plan rather than a fixed in-house standard list. The test set is agreed per programme and confirmed per site.

**How is quality controlled on the thermal path?**
By specifying and checking each joint on it. Die attach is selected for the construction and inspected for voiding, the substrate and baseplate joints are controlled, and cycling test can be applied to confirm the assembly against the design it was built to. Hana builds to the customer's thermal design — the verification is of the build, not a prediction of service life.

**Are these the same as the automotive and industrial power module pages?**
The device is the same; the framing differs. For in-vehicle powertrain programmes see [Automotive power modules](/markets/automotive/power-modules/); for solar, drives and grid equipment see [Industrial power modules](/markets/industrial-iot/power-modules/). This page covers the package-level assembly itself.

---

**Talk to us about your power module programme.**
[Contact us](/contact)

<!-- VERIFY BEFORE PUBLISH (hand to Hana ops):
  - Same claims as the Automotive power-modules list (AEC-Q101, silver-sinter in production,
    DBC / AMB substrate handling, power & thermal cycling).
  - Which sites run module assembly & test (currently framed as Ayutthaya TH + Jiaxing CN).
  - Package-family list safe to publish verbatim (34 mm, 62 mm, XM3, Econo / Econo Dual3, PIM,
    HP1, Easy 1B/2B/3B, HEPACK/DBC, TO-247TE, Top / Dual Cool QFN, INSOP, eeSiP, FC LGA)
    — taken from the June 2026 OSAT deck; confirm none is a customer-specific package name.
  - ⚑ Laser grooving + blade dicing qualified for SiC, GaN, GaN-on-Si and low-K wafers —
    confirm this is a production-qualified process and safe to state publicly.
  - ⚑ Heavy copper (PCC) wire bonding in production for modules — confirm.
  - ⚑ High-thermal die attach and silver-sinter both in production for modules — confirm.
  - ⚑ Void inspection on die attach ("inspected, not assumed") — confirm the inspection method
    is safe to reference without naming equipment.
  - ⚑ IPM assembly (drive + power stage in one module) — confirm Hana packages IPMs, and that
    "drive and power stages packaged together" is an accurate description of the scope.
  - ⚑ capability_link changed to /capabilities/ic-assembly-test. The placeholder pointed at
    /capabilities/microelectronic-assembly/, which is not in the agreed URL structure; the
    fact pack and the Automotive page both use ic-assembly-test. Confirm the final URL.
  - ⚑ FAQ 2 reworded from "What reliability testing runs in-house?" — the in-house claim is
    on the unverified list, so the answer says "available" rather than asserting in-house.
    Restore the stronger wording if in-house cycling is confirmed.
  - ⚑ FAQ 3 reworded from "How does Hana control quality...?" to "How is quality
    controlled...?" per the CAN-not-DOES rule.
  - Cross-links to /markets/automotive/power-modules/ and /markets/industrial-iot/power-modules/
    assume both pages ship. The industrial page is still a placeholder — check before publish.
  - COPY RULES APPLIED (Jul 2026): no product-lifespan / durability-outcome claims
    (Hana builds to the customer's design); services framed as what Hana CAN apply,
    selected per programme; no description of the customer's product function —
    Hana packages the module, never the finished inverter, charger or drive.
-->
