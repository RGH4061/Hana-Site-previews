<!-- Product page (sub-page) — drafted to the Automotive spoke prose model.
     Parent hub: /markets/power-management/ · Model file: ../Automotive/power-modules.md
     REGISTER: technical industry professionals — open on process, not scene-setting.
     RULES: no product-lifespan claims; services framed as what Hana CAN apply;
     never describe the customer's product function/performance.
     T31: single-device packaging at volume — lead finish and flank quality.
     Sister page igbt-sic-modules = multi-die assemblies built around a thermal path.
     Keep the two apart: modules = construction; discretes = repeatability and leads. -->
---
title: "Power Discrete Assembly"
slug: power-discrete
url: /markets/power-management/power-discrete
market: Power Management
sidebar_abbr: PD
sidebar_order: 2
capability_link: /capabilities/ic-assembly-test
meta_title: "Power Discrete Assembly | Hana"
meta_description: "Hana packages power discrete semiconductors — SiC MOSFETs and diodes in TO and surface-mount outlines, with copper clip and wettable-flank leads."
keywords: "power discrete assembly, power discrete packaging, SiC MOSFET packaging, TO-247 assembly, D2PAK-7L, wettable flank leadframe, copper clip MOSFET"
---

# Power discrete semiconductor assembly

**Power Management · Power Discrete Assembly**

Discrete packaging is a repeatability discipline. A power discrete is one device in one package, run at volume, so what separates a capable line from an adequate one is consistency: the die attach, the clip or wire on the current path, the mold, the deflash, and the condition of the leads by the time the part reaches a customer's board. Hana packages power discretes on OSAT lines in Thailand and China — SiC MOSFET and SiC diode, superjunction MOS and FRFET, silicon MOSFET with copper clip — in through-hole and surface-mount outlines, in leadframe and DBC versions, with lead finish treated as part of the build rather than a final tidy-up.

## What we specialize in
- **Through-hole power packages** — TO-247 in 2L, 3L and 4L, and TO-272 in plastic and ceramic versions.
- **Surface-mount power packages** — D2PAK-7L in both leadframe and DBC versions, for board-mounted power stages.
- **Wide-bandgap and silicon devices** — SiC MOSFET and SiC diode, superjunction MOS and FRFET, and silicon MOSFET with copper-clip interconnect.
- **Lead finish and flank quality** — wettable-flank leads by step-cut or dimpled leadframe, with pure tin plating and chemical deflash, selected per program.

Process depth sits on the capability page: IC Assembly & Test owns the assembly and test processes behind these outlines — die attach, clip and wire bonding, molding, and the wafer probe and final test either side.

**[Explore IC Assembly & Test →](/capabilities/ic-assembly-test)**

## Copper clip, wettable flanks and lead finish

Two things separate power discrete packaging from general packaging. The first is the current path: a copper clip can replace wire where the package needs to carry more current through a lower-resistance joint, and Hana runs clip attach alongside conventional bonding. The second is the lead. Where a customer wants the solder joint inspectable after board assembly, we can form a wettable flank — step-cut or dimpled leadframe — and plate it in pure tin, so the fillet is visible to automated optical inspection downstream. Chemical deflash clears the leadframe after mold without the abrasion a mechanical method introduces. Which of these apply is decided per program, not fixed.

Hana packages the device. The converter, drive or power supply it is designed into is the customer's product.

## Where we build

- Thailand · Ayutthaya · discrete packaging
- China · Jiaxing · power discrete packaging

## Frequently asked questions

**What power packages can Hana assemble?**
TO-247 in 2L, 3L and 4L, TO-272 in plastic and ceramic versions, and D2PAK-7L in both leadframe and DBC versions. Device types include SiC MOSFET, SiC diode, superjunction MOS and FRFET, and silicon MOSFET with copper-clip interconnect.

**How does discrete packaging differ from module assembly?**
A discrete is a single device in a single package, built for repeatability at volume, where the leadframe, mold and lead finish carry most of the quality burden. A module is a multi-die assembly built around a substrate and a thermal path. Hana does both, on the same sites — see [IGBT & SiC power modules](/markets/power-management/igbt-sic-modules/) for the module side.

**What test coverage runs at the end of the line?**
Electrical test and reliability sequences can be applied at the end of the line, with the coverage set against the program's own qualification plan rather than a fixed standard set. Visual and dimensional checks, including lead condition and wettable-flank formation, are part of the build. The test set is agreed per program and confirmed per site.

---

**Talk to us about your power discrete program.**
[Contact us](/contact)

<!-- VERIFY BEFORE PUBLISH (hand to Hana ops):
  - Package families safe to name publicly (TO-247 2L/3L/4L, D2PAK-7L leadframe and DBC,
    TO-272 plastic and ceramic) — taken from the June 2026 OSAT deck; confirm none is a
    customer-specific package.
  - Volume / extent figures — none stated on this page. If a publishable units-per-year or
    line-count figure exists, it would strengthen the "at volume" claim.
  - Which sites run discrete packaging (currently framed as Ayutthaya TH + Jiaxing CN).
  - ⚑ Device list in production: SiC MOSFET, SiC diode, SJ MOS / FRFET, MOSFET copper clip
    — confirm all four are live, not roadmap.
  - ⚑ Wettable flank by BOTH step-cut and dimpled leadframe, with pure tin plating —
    confirm both methods are qualified.
  - ⚑ Chemical deflash — confirm it is the process in use and that describing it as
    avoiding mechanical abrasion is accurate and safe to publish.
  - ⚑ Copper clip attach running alongside wire bonding on the same discrete lines — confirm.
  - ⚑ End-of-line electrical test and reliability sequences for DISCRETES specifically.
    The fact pack names cycling/reliability test for modules; discrete final-test scope is
    not confirmed, so the answer is framed as "can be applied" and set per program.
    Tighten once ops confirm what test actually runs.
  - ⚑ capability_link changed to /capabilities/ic-assembly-test. The placeholder pointed at
    /capabilities/osat/die-attach-wire-bond/, which is not in the agreed URL structure; the
    fact pack uses ic-assembly-test. Confirm the final URL before build.
  - COPY RULES APPLIED (Jul 2026): no product-lifespan / durability-outcome claims
    (Hana builds to the customer's design); services framed as what Hana CAN apply,
    selected per program; no description of the customer's product function —
    Hana packages the discrete, never the finished converter, drive or power supply.
-->
