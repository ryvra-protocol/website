# Design

The system is called **Instrument**. The site is set like a controlled specification document: numbered clauses, a strict measured grid, one authorization ink, and two typographic voices that encode the product's core separation.

## Aesthetic lane

Swiss-technical / industrial control system. The physical references are a machine-safety interlock panel, a surveyor's plan, and a Braun spec sheet.

Explicitly not: editorial-magazine (display serif, italic, drop caps), terminal-crypto (neon on black), SaaS-cream (icon cards, purple gradients), legacy-bank (navy and gold).

## Theme

Light is the designed surface. The scene: a payments engineer and a treasury risk officer reading long technical docs on a laptop, mid-workday, in an office, deciding whether to trust this system with money movement. That is a paper reading, not a 2am incident reading.

Dark is a fully tuned second theme, not an inversion. Both are selectable; the default follows the system with a manual override persisted in `localStorage` and applied before first paint via an inline script on `<html data-theme>`.

## Color

Strategy: **Committed**. One saturated color, the authorization ink, carries the hero band, the clause numbers, the primary actions, the diagram authority boundary, and the active navigation rail.

The ink is a **signal vermilion**. Bounded autonomy is a machine-guarding idea, and vermilion is the color of interlocks and emergency stops. It reads as control, not as currency, which is exactly the claim the brand makes.

A second structural role, **steel**, is reserved for one meaning and never used decoratively: the deterministic execution plane. Warm ink is governed authority, cool steel is the machinery that executes. The diagrams read correctly in greyscale because the two planes also differ in fill weight and stroke, so color is never the sole carrier.

No pure black, no pure white. Every neutral is tinted toward the ink hue at chroma 0.004 to 0.014.

### Light tokens

| Token | OKLCH | Hex | Role |
|---|---|---|---|
| `--paper` | `0.982 0.004 55` | `#fbf8f7` | Page ground |
| `--paper-2` | `0.962 0.007 55` | `#f6f1ee` | Inset panels, code, table headers |
| `--paper-3` | `0.930 0.009 55` | `#ede6e2` | Pressed and hover states |
| `--ink` | `0.215 0.014 50` | `#1f1814` | Primary text (16.7:1) |
| `--ink-2` | `0.470 0.016 50` | `#635853` | Secondary text (6.5:1) |
| `--line` | `0.885 0.010 55` | `#dfd7d3` | Hairline rules |
| `--line-strong` | `0.795 0.014 55` | `#c4bab4` | Emphasis rules, input borders |
| `--authority` | `0.560 0.185 34` | `#ca3b19` | Fills, rules, focus ring (4.8:1 on paper) |
| `--authority-text` | `0.500 0.180 33` | `#b32707` | Ink-on-paper links and numerals (6.2:1) |
| `--authority-deep` | `0.400 0.140 32` | `#831c0b` | Drenched bands carrying light text (9.4:1) |
| `--steel` | `0.480 0.055 245` | `#43617b` | Execution plane (6.2:1) |

### Dark tokens

| Token | OKLCH | Hex | Role |
|---|---|---|---|
| `--paper` | `0.180 0.010 55` | `#15100d` | Page ground, warm graphite |
| `--paper-2` | `0.225 0.012 55` | `#201a16` | Inset panels |
| `--paper-3` | `0.270 0.013 55` | `#2c2520` | Pressed and hover states |
| `--ink` | `0.945 0.008 60` | `#f1ece8` | Primary text (16.0:1) |
| `--ink-2` | `0.740 0.014 58` | `#b2a9a2` | Secondary text (8.1:1) |
| `--line` | `0.320 0.014 55` | `#39312c` | Hairline rules |
| `--line-strong` | `0.420 0.018 55` | `#554b44` | Emphasis rules |
| `--authority` | `0.720 0.155 42` | `#f37f51` | Ink, fills, focus ring (7.2:1) |
| `--steel` | `0.740 0.060 240` | `#89b1cd` | Execution plane (8.2:1) |

Every text pair clears WCAG 2.2 AA; most clear AAA.

## Typography

Two voices, because the product is two planes.

- **Archivo** (variable 100–900) is the human voice: narrative, headings, prose, navigation. An American gothic with the sturdiness of a printed form. Chosen over the reflex picks (Inter, IBM Plex, Space Grotesk) for its wider weight range and its institutional, non-startup texture.
- **Spline Sans Mono** (variable 300–700) is the machine voice: clause numbers, diagram labels, ledger values, policy identifiers, enforcement tags, docs metadata, code. It is a deliberate system, not developer costume; the brand is a specification, and the mono marks everything that is machine-determined rather than argued.

### Scale

Fluid `clamp()` on a 1.32 ratio. Weight contrast is wide: display at 700 against body at 400, with 500 for emphasis.

| Step | Size | Notes |
|---|---|---|
| `--text-display` | `clamp(2.6rem, 1.3rem + 5.4vw, 5.5rem)` | Hero. Tracking `-0.035em`, leading `0.96` |
| `--text-h1` | `clamp(2rem, 1.3rem + 2.9vw, 3.35rem)` | Tracking `-0.025em` |
| `--text-h2` | `clamp(1.55rem, 1.2rem + 1.5vw, 2.25rem)` | Tracking `-0.018em` |
| `--text-h3` | `1.2rem` | Weight 600 |
| `--text-body` | `1.0625rem` | Leading `1.65`, measure `68ch` |
| `--text-sm` | `0.9375rem` | Leading `1.6` |
| `--text-mono-label` | `0.75rem` | Uppercase, tracking `0.09em` |

Dark theme adds `0.05` to body line-height; light type on dark ground reads lighter and needs the room.

## Layout

A strict, visible grid is the voice. Content sits directly on paper, separated by full-width hairline rules and generous vertical rhythm.

- Container: `min(74rem, 100% - 2.5rem)`, with a wide variant at `min(86rem, 100% - 2.5rem)` for diagrams and the drenched bands.
- **Clause numbering** is the named section system. Each major section hangs a mono numeral (`01`, `02`, …) in the left margin beside its heading, with a hairline rule above. This replaces the tiny uppercase tracked kicker, which is AI scaffolding. On narrow viewports the numeral sits inline before the heading.
- **Cards are not the section grammar.** Boxes appear only where a box is the right affordance: diagram frames, docs callouts, the audience fork panels, the enforcement table, and form inputs. Repeated icon-heading-paragraph card grids are banned.
- Lists of destinations (capabilities, docs paths) render as dense rule-separated rows with the label, a description, and a trailing marker, not as grids of equal cards.
- Spacing scale is deliberately uneven for rhythm: `0.25 / 0.5 / 0.75 / 1 / 1.5 / 2.5 / 4 / 6.5rem`.

## Components

- **Nav.** Wordmark, five primary destinations, one action, theme toggle. Sticky, hairline bottom rule, no blur. Active route marked with a vermilion underline rule. Below `56rem` it collapses to a disclosure menu with a real focus trap-free but keyboard-complete implementation and `Escape` to close.
- **Buttons.** Square-ish `0.4rem` radius, never pills. Primary is vermilion fill with paper text. Secondary is a `1px` `--line-strong` border on paper. Both carry a `2px` vermilion focus ring at `2px` offset.
- **Clause section.** Rule, mono numeral, heading, optional lead, body.
- **Spec table.** Mono enforcement tags (`ENFORCED`, `DENIED`) paired with a text label, in a bordered table. Used for the security prohibitions, which are the strongest content on the site.
- **Fork panel.** Two asymmetric panels with distinct content, one per audience, with their own destination lists.
- **Diagram frame.** Full-bleed within the wide container, hairline border, mono caption. Authority shapes use vermilion stroke, execution shapes use steel stroke, and the two also differ in fill and stroke weight.
- **Docs shell.** Left sidebar rail with rule-separated groups, article column at `72ch`, right table of contents. Sidebar and ToC are flat lists on hairlines, not nested boxes.

## Motion

Restrained by intent. This is a long-read surface; anything charming on the first view and tiring on the twentieth does not ship.

- One orchestrated first-load reveal on the hero thesis sequence, staggered at `60ms`, translate and opacity only.
- State transitions at `140ms` `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart). No bounce, no elastic.
- Collapsing docs sections animate `grid-template-rows`, never `height`.
- Everything above is fully disabled under `prefers-reduced-motion: reduce`.

## Bans specific to this project

- No glow, aurora, gradient mesh, or glassmorphism. These read as token project and the team rejected that lane outright.
- No gradient text.
- No side-stripe accent borders. The previous site used them on callouts and disclaimers; callouts now use a tinted ground plus a mono tag.
- No em dashes in any copy.
- No claim that implies unrestricted autonomous trading, AI-controlled authority, or opaque execution.
