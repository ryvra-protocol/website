import { TOKENOMICS_TGE_EXAMPLE, TOKENOMICS_TGE_FORMULA } from "@/lib/tokenomics";

export function TgeConversionCard() {
  return (
    <figure className="tokenomics-visual card" aria-labelledby="tge-conversion-title">
      <figcaption id="tge-conversion-title" className="tokenomics-card-title">
        TGE conversion card (illustrative)
      </figcaption>
      <p className="tokenomics-formula" aria-label="TGE conversion formula">
        {TOKENOMICS_TGE_FORMULA}
      </p>
      <ul className="tokenomics-mono-list" aria-label="Worked conversion example">
        <li>user_eligible_points = {TOKENOMICS_TGE_EXAMPLE.userEligiblePoints.toLocaleString()}</li>
        <li>total_eligible_points = {TOKENOMICS_TGE_EXAMPLE.totalEligiblePoints.toLocaleString()}</li>
        <li>TGE_points_allocation = {TOKENOMICS_TGE_EXAMPLE.tgePointsAllocation.toLocaleString()} RYV</li>
        <li>user_share = {TOKENOMICS_TGE_EXAMPLE.userSharePercent}%</li>
        <li>
          illustrative_user_RYV = {TOKENOMICS_TGE_EXAMPLE.illustrativeTokens.toLocaleString()} RYV
        </li>
      </ul>
      <p className="tokenomics-caption">
        Worked example only; conversion inputs, allocation size, and final
        mechanics remain governance-adjustable and non-final.
      </p>
    </figure>
  );
}
