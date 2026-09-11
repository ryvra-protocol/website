export function ControlFlowDiagram() {
  return (
    <figure className="diagram-card">
      <svg
        className="diagram-svg"
        viewBox="0 0 760 220"
        role="img"
        aria-labelledby="control-flow-title control-flow-desc"
      >
        <title id="control-flow-title">Ryvra control flow</title>
        <desc id="control-flow-desc">
          AI proposes an intent, Ryvra authorizes it with mandates and policy, deterministic
          systems execute, and the ledger and settlement layer publishes final state.
        </desc>
        {[
          {
            x: 20,
            title: "1. AI proposes",
            lines: ["Intent only", "No wallet authority"],
          },
          {
            x: 204,
            title: "2. Ryvra authorizes",
            lines: ["Identity and mandates", "Policy and risk"],
          },
          {
            x: 388,
            title: "3. Systems execute",
            lines: ["Deterministic accounts", "Pay and markets"],
          },
          {
            x: 572,
            title: "4. Ledger settles",
            lines: ["Final state and audit", "Replay-safe terminal record"],
          },
        ].map((step) => (
          <g key={step.title}>
            <rect x={step.x} y="42" width="168" height="112" rx="18" className="diagram-panel" />
            <text x={step.x + 84} y="80" textAnchor="middle" className="diagram-heading">
              {step.title}
            </text>
            {step.lines.map((line, index) => (
              <text
                key={`${step.title}-${line}`}
                x={step.x + 84}
                y={112 + index * 20}
                textAnchor="middle"
                className="diagram-copy"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
        <path d="M188 98H204" className="diagram-line" />
        <path d="M372 98H388" className="diagram-line" />
        <path d="M556 98H572" className="diagram-line" />
      </svg>
      <figcaption className="tokenomics-caption">
        The authority chain is explicit: proposals are bounded, authorization is programmable,
        execution is deterministic, and finality comes from ledger and settlement.
      </figcaption>
    </figure>
  );
}
