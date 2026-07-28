# Removed differentiator sections — product pages

Removed 28 Jul 2026 (Rupert: too much text on the page). Kept here in case any of it is wanted
back, or wanted on the hub instead. These sections previously carried each page's T31 distinctness.

---

## Access Control/rfid-cards.md

**Heading:** Secure by process, not by promise

An access credential is only trustworthy if its chip is handled correctly from attach through encoding. Hana runs card production as a controlled process — the chip is attached, personalized and verified under managed handling, and unique IDs are tracked unit by unit. Because the credential and the reader are built inside one company, a program can align the card and the hardware that reads it without handing the chip across suppliers.

---

## Access Control/smart-lock-assembly.md

**Heading:** Built and tested as one product

The risk in a smart lock is the seam between the electronics and the mechanism — a board that passes on its own but jams the actuator, or a radio that drops out once it is inside the housing. Hana builds and tests the whole unit: the radio, the motor and the mechanism are exercised together, and the lock is checked as the finished product a user will hold. Faults are caught on the line, before the lock reaches your program.

---

## Automotive/led-lighting.md

**Heading:** Why the thermal path matters

Two headlamps that don't quite match in brightness or color are obvious to anyone standing in front of the car, and the cause is usually thermal. Run an LED hotter than its design point and it dims, shifts color and ages faster. Hana assembles the module onto the board and heat-sink path the design specifies, and can verify light output and color on the line — so what ships has been built and checked against its thermal design rather than assumed.

## Module and driver, built together

Because Hana places the LEDs and assembles the driver on the same lines, the module and its control circuit are built and tested as a single unit rather than sourced and joined later. That keeps the thermal design, the electronics and the test under one roof — and one supplier — all under an IATF 16949 automotive quality management system.

---

## Automotive/pcba.md

**Heading:** Inspection on every board, not a sample

The difference between consumer and automotive board assembly is what happens after placement. Hana runs automated optical inspection on every board, X-ray to see the joints under BGAs and other hidden packages, and in-circuit or functional test as the program requires. Defects are caught and contained on the line, so a board that ships has been proven — not assumed good because its neighbors passed.

## Built to automotive program discipline

Automotive programs run on traceability and change control, and Hana builds to that: board-level traceability, controlled changes, and the program discipline automotive parts require. Boards are assembled under an IATF 16949 automotive quality management system, and box build can be run alongside when the program needs the full product, not just the board.

---

## Automotive/power-modules.md

**Heading:** Built around the thermal path

A power module fails at its weakest joint long before the silicon gives out. SiC in particular runs hotter and switches faster than older silicon devices, so the die-attach and substrate choices matter more, not less. Hana builds and inspects the heat path rather than assuming it — solder voids are controlled and verified, die attach is matched to the duty cycle the design calls for, and the assembly can be put through thermal and power cycling to your program's requirements. What leaves the line is a module verified against its thermal design, not one assumed good.

## Test and traceability

Every module is built under an IATF 16949 automotive quality management system, with power and thermal cycling available in-house and full unit-level traceability from die to finished assembly. Faults are caught on the line, before the module reaches your program.

---

## Automotive/rfid-tire-tags.md

**Heading:** Built for the inside of a tire

Most of the engineering in a tire tag is about the build holding together inside the rubber. Hana builds the tag from rubber-compatible materials and encapsulates it to withstand vulcanization heat and pressure, then to flex with the tire in service without the antenna or chip joint failing. Read performance can be verified after cure and through durability checks, so the tag ships proven against the conditions it is built for.

## What a tire tag enables

A unique, durable ID lets a tire be tracked across its whole life — from manufacture through fitment, service, retread and recycling. For fleets and manufacturers that supports inventory accuracy, warranty management and life-cycle tracking, and it is a foundation for the connected-vehicle and tire-intelligence systems now reaching the road.

---

## Automotive/sensor-assembly.md

**Heading:** Why package stress decides accuracy

A MEMS or optical die responds to very small physical inputs — pressure, motion, light. The package and the die-attach joint sit directly in that measurement path, so any stress they introduce shows up as drift in the reading. Hana manages attach materials and cure to hold the sensor within its specified accuracy across temperature, rather than trading accuracy for a faster joint. For camera and optical modules, the lens or sensor is aligned and fixed in place so focus and field of view are set to specification.

## Test and traceability

Sensors are built under an IATF 16949 automotive quality management system, with functional and calibration test in-house and full unit-level traceability through the assembly. Parts are proven before they ship.

---

## Consumer Electronics/smt-sensors.md

**Heading:** Holding fine pitch across a long run

At 0.2 mm pitch there is no margin to absorb drift, so the process has to be controlled at every point rather than corrected at the end. Paste volume is measured by solder paste inspection before a single part is placed. Placement is held to ±18 µm. Reflow is profiled to the board, with vacuum reflow under nitrogen available where voiding has to be kept down under a bottom-terminated or micro-BGA package. Optical inspection runs before and after reflow, and X-ray covers the joints under the package. The point of stacking those checks is that a fault is found on the line, in the run that produced it — not in a sample pulled later.

---

## Consumer Electronics/wireless-charging.md

**Heading:** Coil, board and unit under one roof

Wireless charging fails at the seams between processes: a coil wound to one supplier's tolerance, a board built to another's, and an assembly step that has to reconcile them. Hana closes those seams by owning the sequence. Coils are wound and assembled in-house, the driver board is built on the same site's SMT lines, and the two are brought together, enclosed and functionally tested as one unit before shipment. Where a program needs a second source, the sequence is qualified rather than reassembled from parts — the whole build moves, not one step of it.

---

## Industrial & IoT/iot-device-assembly.md

**Heading:** Test the product, not the board

Wireless is where a device build most often comes apart. A radio that passes at board level can behave differently once its antenna sits alongside a battery, a metal bracket and a molded housing — and by then the assembly is closed. Hana's answer is to test the assembled unit. In-house wireless functional test covers 802.11 embedded modules, GSM and cellular, GPS, and Bluetooth and acoustic rigs, selected to what the program actually needs to prove. Builds can be run at pilot and pre-production quantities before volume, so the assembly sequence and its test coverage are settled on real units rather than on paper.

---

## Industrial & IoT/pcba-box-build.md

**Heading:** Coating, joints and inspection

The failure modes in a high-stress environment are well understood — moisture tracking across a board, a solder joint fatigued by vibration, a heavy connector working loose under load. Hana answers each of them with process rather than assumption. Coating is applied and verified for coverage. Through-hole is specified where a joint carries current or takes mechanical strain, with the soldering method matched to it. Automated optical inspection and X-ray check the joints that cannot be seen by eye, and in-circuit and functional test confirm the assembly before it leaves the line. Where a program runs over several years, change control and obsolescence management keep the build consistent as components move through their own life cycles.

---

## Industrial & IoT/power-modules.md

**Heading:** The industrial duty cycle

Industrial energy equipment does not idle. A module going into a solar inverter or a variable-speed drive is switched for long stretches at whatever duty cycle its design sets, and it is the joints in the heat path — not the silicon — that the assembly has to get right. Hana works that path deliberately rather than assuming it: voiding in the die-attach layer is controlled and verified, the attach material is matched to what the design specifies, and the substrate and baseplate joints are built to move heat out to the equipment's own cooling. Reliability and cycling test is available to the program's requirements, so a module can leave the line verified against its thermal design.

## Where the module goes

Modules assembled here are specified into photovoltaic and wind converters, industrial inverters and motor drives, AC-DC and power-factor-correction stages, rail traction equipment and EV charging infrastructure. What the module has to achieve in each of those is set by the customer's design. What Hana controls is that it is built and verified against it.

---

## Industrial & IoT/rfid-asset-tracking.md

**Heading:** Ruggedization and read range

Two things decide whether an industrial tag is any good: what it is built to withstand, and how far it reads once it is mounted. Hana treats both as build questions. The construction — materials, encapsulation, antenna design and the standoff that lets a UHF antenna work close to metal — is chosen for the mounting surface and the handling the tag will see, not fitted afterwards. Read performance is then verified on the built tag rather than inferred from the inlay. Hana's UHF tags are certified under the ARC (Auburn) program in the USA and China, which puts read performance in front of an independent test house rather than an internal one.

---

## Medical/hearing-aid-assembly.md

**Heading:** Assembly at hearing-device scale

The difficulty in a hearing device is that miniaturization and medical control have to hold at the same time. Placement and attach happen at a scale where handling itself is a process risk, so the work runs on dedicated medical lines under controlled handling rather than on general assembly. Acoustic components are integrated in-line and verified on hearing-aid test rigs rather than assumed good. Bluetooth and wireless functions can be tested on the same floor. Each unit is tied to its materials and its build record, so an individual device can be traced back through the line — which is what a regulated program, and any subsequent change to it, depends on.

---

## Medical/mems-sensors.md

**Heading:** Low-stress die attach and the package around it

The controlling variables in a medical sensor build are mechanical, not electrical. Hana works to that: attach materials and profiles selected to keep stress off the die, cavity and sealed package formats chosen with the sensing element in mind, and handling controlled through the line. Assemblies are then verified on gas and MEMS test rigs on our own floor rather than sampled downstream. Because the same site also runs IC packaging and test, a sensor program can draw on wafer-level handling and package assembly inside one company. For the wider optical and MEMS process set, see [Optical & Sensors](/markets/optical-sensors/mems-sensors/).

---

## Medical/pcba.md

**Heading:** Flex, flip chip and the folded circuit

Miniature medical circuits fail in ways a conventional board does not. Adhesiveless flex at a few mils total thickness has almost no margin for thermal or mechanical stress; a flip-chip die at fine bump pitch leaves joints that no optical inspection can see; and folding an assembled circuit puts that build through a mechanical operation after it is populated. Hana runs each of those as a controlled step rather than a hopeful one — placement and dispense held to fine accuracies, reflow profiled under nitrogen, X-ray on the joints under the die, and folding sequenced so the circuit is not stressed into its final shape. Pull and shear testing can be applied to prove the joints, and functional and in-circuit test set per program.

---

## Medical/wireless-charging.md

**Heading:** Charger and device from the same lines

The practical advantage for a medical program is that the charging assembly and the device it charges can be built inside one company, on lines already run under a medical quality system, with the same documentation and traceability discipline applied to both. Coil winding, board assembly and box build sit in one place, so a charging case does not have to be integrated across suppliers. Functional test is available to the program's requirements.

---

## Optical & Sensors/camera-modules.md

**Heading:** Aligned against a live image

Active alignment is the difference between a camera that passes and a camera that is merely assembled. Rather than trusting the mechanical tolerances of the housing, the lens is moved while the sensor is running — the image itself tells the machine where sharp focus is — and only then is the lens fixed in place. Every module is then checked as a camera: focus and field of view are verified on the line, so a soft or misaligned unit never reaches your product.

---

## Optical & Sensors/mems-sensors.md

**Heading:** Holding a die without loading it

Two things decide whether a sensor assembly yields: how much stress the package puts into the die, and how clean the die stayed on the way there. Hana works both as process. Low-stress die attach — material and cure profile selected for the device rather than for throughput — keeps the package from bearing on a moving MEMS structure. Cavity and clear formats give an optical die the space or the light path it needs without adding a second alignment problem. And because a single particle or static discharge on an exposed sensor die is a scrapped unit, assembly runs on cleanroom lines under controlled ESD handling from die through to sealed package.

---

## Optical & Sensors/microdisplay.md

**Heading:** Cleanliness sits in the optical path

On most assemblies a particle is a contamination risk. On a microdisplay it is in the light path, and whatever the panel is doing, the optics downstream make it bigger. That is why the discipline on this product is environmental before it is mechanical: cleanroom lines under controlled ESD handling, controlled part handling from wafer through cell assembly, and packaging steps designed to close the panel without introducing anything onto its surface. The alignment tolerances are tight enough that the process has to be repeatable rather than corrected afterwards — a microdisplay cannot be reworked back to clean.

---

## Power Management/igbt-sic-modules.md

**Heading:** Die attach, substrate, interconnect

Almost everything that decides a power module is decided in its joints, so Hana specifies each one rather than inheriting it. Die attach is matched to the construction — solder for conventional builds, silver-sinter where the design calls for a higher-temperature joint — and the attach is inspected, not assumed. Interconnect is heavy copper (PCC) wire, sized to the current the module is built to carry. Upstream, our dicing is qualified for the materials wide-bandgap work brings: laser grooving followed by blade dicing for SiC, GaN, GaN-on-Si and low-K wafers, where a conventional saw alone risks chipping the die. What leaves the line is a module verified against its own construction.

Hana packages the module. The inverter, drive or charger it goes into is the customer's product.

---

## Power Management/power-discrete.md

**Heading:** Copper clip, wettable flanks and lead finish

Two things separate power discrete packaging from general packaging. The first is the current path: a copper clip can replace wire where the package needs to carry more current through a lower-resistance joint, and Hana runs clip attach alongside conventional bonding. The second is the lead. Where a customer wants the solder joint inspectable after board assembly, we can form a wettable flank — step-cut or dimpled leadframe — and plate it in pure tin, so the fillet is visible to automated optical inspection downstream. Chemical deflash clears the leadframe after mold without the abrasion a mechanical method introduces. Which of these apply is decided per program, not fixed.

Hana packages the device. The converter, drive or power supply it is designed into is the customer's product.

---

## RFID/rfid-cards.md

**Heading:** Building a card at issuance volume

Card programs are judged on consistency rather than on any one card. A lamination stack that varies, an antenna detuned by the press, an encoding step that loses track of an ID — each of those shows up as returns at issuance, not on the factory floor. Hana runs card build as one automated flow: inlay on the roll-to-roll line, lamination and printing to the card specification, then encoding, personalization and unique-ID management, verified before the cards are packed. Where a program has to be built to a scheme or issuer specification, the build and its documentation can be set to that specification and confirmed per site.

---

## RFID/rfid-tags-inlays.md

**Heading:** Holding the bond at web speed

Everything difficult about inlay manufacturing happens on a moving web. The chip or strap has to be placed and bonded to the antenna inside tolerance, thousands of times an hour. The antenna has to stay tuned through lamination and converting rather than only at attach. And each tag has to be read, and its ID recorded, before it is wound onto the finished roll. Hana runs this as an automated roll-to-roll flow rather than manual assembly, with test and unique-ID handling in line rather than bolted on afterwards. Tag performance can also be verified independently: Hana's tag range carries ARC certification from Auburn University in both the USA and China.

---

## RFID/rfid-tire-tags.md

**Heading:** Where the detail lives

Construction, materials, encapsulation and test for tire tags are covered in full on the [Automotive tire-tag page](/markets/automotive/rfid-tire-tags/), which is the canonical version of this content. This page exists so RFID buyers can see where tire tags sit in the range — at the ruggedized end of a line that also builds smart cards, UHF and HF inlays, on-metal formats and temperature-sensing tags.

---

## Telecommunications/rf-assembly.md

**Heading:** Die attach, sealing and real RF measurement

In an RF module the layer under the die is a thermal and electrical path, not an adhesive — so Hana selects the attach method to the package rather than to a default. AuSn eutectic where a void-free, high-conductivity bond line is called for; sintered attach where the thermal path has to be shorter still. Die go into TO-272 plastic and metal-ceramic packages, multi-die modules are built and bonded as one assembly, and the package is closed with a ceramic lid or a hermetic seal, with helium fine-leak test available to verify it. Then the module is measured, not buzzed: rack-and-stack RF test with spectrum and network analyzers and noise-figure measurement, against the requirements set for the program.

---
