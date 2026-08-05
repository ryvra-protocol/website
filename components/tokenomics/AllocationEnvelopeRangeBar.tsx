import { TOKENOMICS_ALLOCATION_ENVELOPE_RANGES } from "@/lib/tokenomics";

export function AllocationEnvelopeRangeBar() {
  const width = 680;
  const rowHeight = 44;
  const margin = { top: 30, right: 24, bottom: 34, left: 208 };
  const chartWidth = width - margin.left - margin.right;
  const height =
    margin.top +
    margin.bottom +
    TOKENOMICS_ALLOCATION_ENVELOPE_RANGES.length * rowHeight;
  const ticks = [0, 25, 50, 75, 100];

  const xFor = (value: number) => margin.left + (value / 100) * chartWidth;

  return (
    <figure className="tokenomics-visual card">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-labelledby="allocation-envelope-title allocation-envelope-desc"
      >
        <title id="allocation-envelope-title">Allocation envelope range bar</title>
        <desc id="allocation-envelope-desc">
          Illustrative and non-final percentage ranges for community, team,
          investor and treasury, and liquidity allocations.
        </desc>

        {ticks.map((tick) => {
          const x = xFor(tick);
          return (
            <g key={tick}>
              <line
                x1={x}
                y1={margin.top - 6}
                x2={x}
                y2={height - margin.bottom + 6}
                stroke="var(--border)"
                strokeDasharray="4 4"
              />
              <text
                x={x}
                y={height - 8}
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted)"
              >
                {tick}%
              </text>
            </g>
          );
        })}

        {TOKENOMICS_ALLOCATION_ENVELOPE_RANGES.map((range, index) => {
          const y = margin.top + index * rowHeight + 11;
          const startX = xFor(range.min);
          const endX = xFor(range.max);
          return (
            <g key={range.label}>
              <text
                x={margin.left - 12}
                y={y + 8}
                textAnchor="end"
                fontSize="12"
                fill="var(--foreground)"
              >
                {range.label}
              </text>
              <line
                x1={xFor(0)}
                y1={y}
                x2={xFor(100)}
                y2={y}
                stroke="var(--border)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <line
                x1={startX}
                y1={y}
                x2={endX}
                y2={y}
                stroke="var(--accent)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <text
                x={endX + 8}
                y={y + 4}
                textAnchor="start"
                fontSize="11"
                fill="var(--muted)"
              >
                {range.min}–{range.max}%
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="tokenomics-caption">
        Allocation envelope ranges are illustrative and non-final. Final ranges
        are governance-defined and subject to legal/compliance review.
      </figcaption>
    </figure>
  );
}
