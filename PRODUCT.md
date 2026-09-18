# Product

## Register

brand

## Users

Three readers arrive at ryvra.org, and the site is optimized so they split apart early rather than being averaged into one pitch.

- **Developers and protocol engineers.** They want the authority model, the control flow, and the API path within the first screen. They read diagrams and specs before they read prose. They are evaluating whether the primitives are real.
- **Enterprises and institutional operators.** Risk, compliance, and treasury readers. They need the trust boundary to be legible: what an agent can propose, what governs authorization, who can suspend execution, and where audit evidence lives.
- **Investors and token readers.** They arrive through the litepaper and tokenomics routes and need the narrative and the numbers to hold up under scrutiny.

Context of use: mid-workday, on a laptop, in an office. Long reading sessions across a large docs surface. The decision being made is whether to trust this infrastructure with money movement.

## Product Purpose

Ryvra is programmable financial infrastructure for bounded autonomous finance. The site exists to make one claim legible and credible: AI proposes, Ryvra authorizes, deterministic systems execute, and ledger plus settlement provide truth and finality.

Success is a reader who can state the authority boundary back in their own words, and who reaches the right next surface (developer quickstart, security and risk, merchant guide, or tokenomics) without hunting.

## Brand Personality

Governed, deterministic, legible.

Voice is precise and unexcited. It states what the system does and what it refuses to do. It never implies unrestricted AI control, opaque execution, or self-governing agents. Emotional goal is earned confidence, not excitement.

The site should feel like a specification that happens to be beautifully set, not like a campaign.

## Anti-references

- **Crypto and web3 aesthetics.** No neon gradients, glows, aurora backgrounds, 3D orbs, dark-only surfaces, or anything that codes as a token project rather than financial infrastructure. Explicitly rejected by the team.
- **Playful or consumer.** No mascots, illustration, rounded-and-friendly geometry, bright multi-color, or casual copy. Explicitly rejected by the team.
- **Generic SaaS template.** Icon-heading-paragraph card grids repeated down the page, hero-metric rows, purple gradients. This is the drift the current site already exhibits and the redesign exists partly to correct.
- **Legacy bank formality.** Navy and gold, stock photography, corporate ceremony.

## Design Principles

1. **Practice the thesis.** The product's core idea is separating authority from execution. The interface should make that separation visible through structure: control plane and execution plane are never rendered as two interchangeable cards in a grid.
2. **Type carries the hierarchy, not containers.** Cards are the lazy answer on a content site. Rules, scale contrast, and spacing do the work. Boxes appear only where a box is genuinely the right affordance.
3. **Split the audience early and honestly.** Developers and institutional operators want different first screens. Give them a real fork rather than copy that tries to satisfy both.
4. **Diagrams are primary content.** The architecture, control flow, and provenance diagrams are the strongest assets on the site. They get first-class typography, sizing, and theme treatment, not a card with a caption.
5. **Quiet under load.** A large docs surface is read for minutes at a time. Anything that is charming on the first view and tiring on the twentieth does not ship.

## Accessibility & Inclusion

Target: WCAG 2.2 AA.

- AA contrast for all text and meaningful non-text in both themes.
- Visible, high-contrast focus indicators on every interactive element. No focus removal.
- Full keyboard operability for the primary nav, docs sidebar, table of contents, and collapsible docs sections.
- `prefers-reduced-motion` respected for every transition and transform.
- Semantic landmarks and correct heading order on every route, including docs pages generated from content.
- Color is never the sole carrier of meaning, including in diagrams and callouts.
