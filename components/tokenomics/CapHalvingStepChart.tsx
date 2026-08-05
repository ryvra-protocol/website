import { TOKENOMICS_CAP_HALVING_STEPS } from "@/lib/tokenomics";

export function CapHalvingStepChart() {
  const width = 640;
  const height = 280;
  const margin = { top: 24, right: 20, bottom: 38, left: 52 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const maxDailyPoints = Math.max(
    ...TOKENOMICS_CAP_HALVING_STEPS.map((step) => step.dailyMax),
  );
  const yTicks = [0, 0.5, 1, 1.5, 2];

  const xFor = (index: number) =>
    margin.left +
    (index / (TOKENOMICS_CAP_HALVING_STEPS.length - 1)) * chartWidth;
  const yFor = (value: number) =>
    margin.top + ((maxDailyPoints - value) / maxDailyPoints) * chartHeight;

  const stepPath = TOKENOMICS_CAP_HALVING_STEPS.reduce<string>(
    (path, step, index) => {
      const x = xFor(index);
      const y = yFor(step.dailyMax);
      if (index === 0) {
        return `M ${x} ${y}`;
      }

      return `${path} H ${x} V ${y}`;
    },
    "",
  );

  return (
    <figure className="tokenomics-visual card">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-labelledby="cap-halving-title cap-halving-desc"
      >
        <title id="cap-halving-title">Cap halving step chart</title>
        <desc id="cap-halving-desc">
          Epoch index on the x-axis and daily max points on the y-axis with
          illustrative values of 2.0, 1.0, 0.5, and 0.25.
        </desc>

        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={height - margin.bottom}
          stroke="var(--muted)"
          strokeWidth="1.5"
        />
        <line
          x1={margin.left}
          y1={height - margin.bottom}
          x2={width - margin.right}
          y2={height - margin.bottom}
          stroke="var(--muted)"
          strokeWidth="1.5"
        />

        {yTicks.map((tick) => {
          const y = yFor(tick);
          return (
            <g key={tick}>
              <line
                x1={margin.left}
                y1={y}
                x2={width - margin.right}
                y2={y}
                stroke="var(--border)"
                strokeDasharray="4 4"
              />
              <text
                x={margin.left - 10}
                y={y + 4}
                textAnchor="end"
                fontSize="12"
                fill="var(--muted)"
              >
                {tick.toFixed(tick % 1 === 0 ? 0 : 1)}
              </text>
            </g>
          );
        })}

        <path
          d={stepPath}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {TOKENOMICS_CAP_HALVING_STEPS.map((step, index) => {
          const x = xFor(index);
          const y = yFor(step.dailyMax);
          return (
            <g key={step.epoch}>
              <circle
                cx={x}
                cy={y}
                r={5}
                fill="var(--accent)"
                stroke="var(--surface)"
                strokeWidth="1.5"
              />
              <text
                x={x}
                y={height - margin.bottom + 18}
                textAnchor="middle"
                fontSize="12"
                fill="var(--muted)"
              >
                {step.epoch}
              </text>
              <text
                x={x}
                y={y - 10}
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted)"
              >
                {step.dailyMax.toFixed(step.dailyMax % 1 === 0 ? 1 : 2)}
              </text>
            </g>
          );
        })}

        <text
          x={width / 2}
          y={height - 8}
          textAnchor="middle"
          fontSize="12"
          fill="var(--muted)"
        >
          Epoch index (n)
        </text>
        <text
          x={14}
          y={margin.top + chartHeight / 2}
          transform={`rotate(-90 14 ${margin.top + chartHeight / 2})`}
          textAnchor="middle"
          fontSize="12"
          fill="var(--muted)"
        >
          Daily max points
        </text>
      </svg>
      <figcaption className="tokenomics-caption">
        Cap model illustration: daily_max(n) = 2 × (0.5)^n with example steps
        2.0 → 1.0 → 0.5 → 0.25.
      </figcaption>
    </figure>
  );
}
