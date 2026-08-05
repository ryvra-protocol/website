import { TOKENOMICS_ELIGIBILITY_FUNNEL_STAGES } from "@/lib/tokenomics";

const stageColors = ["#0ea5e9", "#06b6d4", "#14b8a6", "#22c55e", "#84cc16"];

export function EligibilityFunnelDiagram() {
  const width = 640;
  const stageHeight = 38;
  const stageGap = 10;
  const top = 20;
  const bottom = 24;
  const baseWidth = 560;
  const widthStep = 70;
  const height =
    top +
    bottom +
    TOKENOMICS_ELIGIBILITY_FUNNEL_STAGES.length * stageHeight +
    (TOKENOMICS_ELIGIBILITY_FUNNEL_STAGES.length - 1) * stageGap;

  return (
    <figure className="tokenomics-visual card">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-labelledby="eligibility-funnel-title eligibility-funnel-desc"
      >
        <title id="eligibility-funnel-title">Eligibility funnel</title>
        <desc id="eligibility-funnel-desc">
          Submitted transactions pass through finalized, policy-compliant, and
          anti-abuse stages before receiving credited points.
        </desc>

        {TOKENOMICS_ELIGIBILITY_FUNNEL_STAGES.map((stage, index) => {
          const bandWidth = baseWidth - index * widthStep;
          const x = (width - bandWidth) / 2;
          const y = top + index * (stageHeight + stageGap);
          const color = stageColors[index % stageColors.length];

          const nextY = y + stageHeight;
          const arrowY = nextY + stageGap / 2;

          return (
            <g key={stage}>
              <rect
                x={x}
                y={y}
                width={bandWidth}
                height={stageHeight}
                rx={8}
                fill={color}
                fillOpacity={0.2}
                stroke={color}
                strokeWidth={1.5}
              />
              <text
                x={width / 2}
                y={y + stageHeight / 2 + 4}
                textAnchor="middle"
                fontSize="12"
                fill="var(--foreground)"
                fontWeight="600"
              >
                {stage}
              </text>
              {index < TOKENOMICS_ELIGIBILITY_FUNNEL_STAGES.length - 1 ? (
                <g>
                  <line
                    x1={width / 2}
                    y1={nextY}
                    x2={width / 2}
                    y2={arrowY + 2}
                    stroke="var(--muted)"
                    strokeWidth="1.5"
                  />
                  <path
                    d={`M ${width / 2 - 4} ${arrowY} L ${width / 2} ${
                      arrowY + 5
                    } L ${width / 2 + 4} ${arrowY} Z`}
                    fill="var(--muted)"
                  />
                </g>
              ) : null}
            </g>
          );
        })}
      </svg>
      <figcaption className="tokenomics-caption">
        Eligibility funnel flow: submitted tx → finalized →
        policy-compliant → anti-abuse pass → credited points.
      </figcaption>
    </figure>
  );
}
