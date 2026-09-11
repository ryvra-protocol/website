import { useId } from "react";

export function PlatformArchitectureDiagram() {
  const titleId = useId();
  const descId = useId();

  return (
    <figure className="diagram-card">
      <svg
        className="diagram-svg"
        viewBox="0 0 760 420"
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
      >
        <title id={titleId}>Ryvra platform architecture</title>
        <desc id={descId}>
          Agent clients connect through an Agent Gateway to a Control Plane and Execution Plane,
          with ledger and settlement as the truth layer and confidential execution as an extension.
        </desc>
        <rect x="20" y="28" width="170" height="76" rx="18" className="diagram-shell" />
        <text x="105" y="60" textAnchor="middle" className="diagram-label">
          Agent clients
        </text>
        <text x="105" y="82" textAnchor="middle" className="diagram-copy">
          AI copilots, apps, ops systems
        </text>

        <rect x="240" y="28" width="280" height="76" rx="18" className="diagram-boundary" />
        <text x="380" y="60" textAnchor="middle" className="diagram-label">
          Agent Gateway
        </text>
        <text x="380" y="80" textAnchor="middle" className="diagram-copy">
          Intent intake
        </text>
        <text x="380" y="100" textAnchor="middle" className="diagram-copy">
          Identity binding and safe handoff
        </text>

        <rect x="92" y="144" width="248" height="148" rx="22" className="diagram-panel" />
        <text x="216" y="176" textAnchor="middle" className="diagram-heading">
          Control Plane
        </text>
        <text x="216" y="208" textAnchor="middle" className="diagram-copy">
          Identity
        </text>
        <text x="216" y="230" textAnchor="middle" className="diagram-copy">
          Mandates
        </text>
        <text x="216" y="252" textAnchor="middle" className="diagram-copy">
          Policy
        </text>
        <text x="216" y="274" textAnchor="middle" className="diagram-copy">
          Independent risk engine
        </text>

        <rect x="420" y="144" width="248" height="148" rx="22" className="diagram-panel" />
        <text x="544" y="176" textAnchor="middle" className="diagram-heading">
          Execution Plane
        </text>
        <text x="544" y="208" textAnchor="middle" className="diagram-copy">
          Accounts
        </text>
        <text x="544" y="230" textAnchor="middle" className="diagram-copy">
          Markets
        </text>
        <text x="544" y="252" textAnchor="middle" className="diagram-copy">
          Pay
        </text>
        <text x="544" y="274" textAnchor="middle" className="diagram-copy">
          Deterministic settlement actions
        </text>

        <rect x="140" y="330" width="480" height="60" rx="18" className="diagram-layer" />
        <text x="380" y="358" textAnchor="middle" className="diagram-heading">
          Ledger + Settlement truth layer
        </text>
        <text x="380" y="376" textAnchor="middle" className="diagram-copy">
          Final balances, reconciliation, provenance
        </text>
        <text x="380" y="394" textAnchor="middle" className="diagram-copy">
          and terminal state
        </text>

        <rect x="552" y="28" width="168" height="76" rx="18" className="diagram-shell" />
        <text x="636" y="60" textAnchor="middle" className="diagram-label">
          Confidential execution
        </text>
        <text x="636" y="80" textAnchor="middle" className="diagram-copy">
          Private state
        </text>
        <text x="636" y="100" textAnchor="middle" className="diagram-copy">
          Private perps extension
        </text>

        <path d="M190 66H240" className="diagram-line" />
        <path d="M380 104V132" className="diagram-line" />
        <path d="M380 132H216V144" className="diagram-line" />
        <path d="M380 132H544V144" className="diagram-line" />
        <path d="M340 218H420" className="diagram-line" />
        <path d="M216 292V330" className="diagram-line" />
        <path d="M544 292V330" className="diagram-line" />
        <path d="M520 66H552" className="diagram-line" />
      </svg>
      <figcaption className="diagram-caption">
        Agents can propose intents, but Ryvra binds authority in the control plane and only
        deterministic systems can execute against the ledger and settlement truth layer.
      </figcaption>
    </figure>
  );
}
