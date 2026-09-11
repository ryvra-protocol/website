import { useId } from "react";

export function ProvenanceLifecycleDiagram() {
  const titleId = useId();
  const descId = useId();

  return (
    <figure className="diagram-card">
      <svg
        className="diagram-svg"
        viewBox="0 0 760 260"
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
      >
        <title id={titleId}>Intent provenance lifecycle</title>
        <desc id={descId}>
          A lifecycle from mandate creation through authorization, execution, settlement, and
          audit retention with suspension and kill switch controls.
        </desc>
        <rect x="30" y="70" width="130" height="110" rx="18" className="diagram-shell" />
        <rect x="180" y="70" width="130" height="110" rx="18" className="diagram-panel" />
        <rect x="330" y="70" width="130" height="110" rx="18" className="diagram-panel" />
        <rect x="480" y="70" width="130" height="110" rx="18" className="diagram-panel" />
        <rect x="630" y="70" width="100" height="110" rx="18" className="diagram-boundary" />
        <text x="95" y="104" textAnchor="middle" className="diagram-heading">
          1. Bind
        </text>
        <text x="95" y="126" textAnchor="middle" className="diagram-copy">
          identity
        </text>
        <text x="245" y="104" textAnchor="middle" className="diagram-heading">
          2. Issue
        </text>
        <text x="245" y="126" textAnchor="middle" className="diagram-copy">
          mandates
        </text>
        <text x="395" y="104" textAnchor="middle" className="diagram-heading">
          3. Authorize
        </text>
        <text x="395" y="126" textAnchor="middle" className="diagram-copy">
          policy + risk
        </text>
        <text x="545" y="104" textAnchor="middle" className="diagram-heading">
          4. Execute
        </text>
        <text x="545" y="126" textAnchor="middle" className="diagram-copy">
          record + settle
        </text>
        <text x="680" y="104" textAnchor="middle" className="diagram-heading">
          5. Audit
        </text>
        <text x="680" y="126" textAnchor="middle" className="diagram-copy">
          replay trace
        </text>
        <text x="380" y="214" textAnchor="middle" className="diagram-copy">
          Suspension, spend caps, replay and rate controls
        </text>
        <text x="380" y="234" textAnchor="middle" className="diagram-copy">
          plus kill switch operate across the full lifecycle.
        </text>
        <path d="M160 124H180" className="diagram-line" />
        <path d="M310 124H330" className="diagram-line" />
        <path d="M460 124H480" className="diagram-line" />
        <path d="M610 124H630" className="diagram-line" />
      </svg>
      <figcaption className="diagram-caption">
        Every intent carries provenance from authority binding through settlement, with
        suspension and emergency controls available before and after execution.
      </figcaption>
    </figure>
  );
}
