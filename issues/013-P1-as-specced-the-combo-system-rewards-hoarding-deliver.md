# As specced, the combo system rewards hoarding deliveries, not fast ones — define the chain condition so speed dominates batching

**Priority:** P1  
**Filed by:** Systems Architect (game design, serious)  
**Labels:** combo, economy, incentives, degenerate-strategy

---

## The problem
Kudos combo x1/x2/x3/x5 FLOW STATE built on *consecutive deliveries* plus a coin multiplier creates a degenerate optimum: let requests ripen, hold filled bins, then batch 4-5 drags back-to-back near expiry to lock in x5. Optimal play becomes deliberately slow service with maximum stapler variance — the exact opposite of the office-manager fantasy, and it directly raises the odds of the P0 timing failures above. Casual players won't find it; score chasers and streamers will, and they define how the game is perceived.

## Recommendation
1. **Chain condition = freshness, not adjacency.** A delivery extends the chain only if it lands with ≥50% of the request timer remaining. The chain breaks on a *stale* delivery or an expiry — not on elapsed time between deliveries. Now the only way to sustain FLOW STATE is genuinely fast response, which is what the golden light should mean.
2. **Keep the x5 payoff mostly non-economic.** FLOW STATE's real reward is spectacle + the narrator getting irritated (which is excellent — the narrator resenting competence is the best reinforcement loop in the design). Keep the coin bonus modest (~+25-40% at x5, not a multiple) so overall economy balance never hinges on combo skill. If x5 pays 5x, every price in the catalog has to be tuned twice — once for comboers, once for everyone else — and one of those two audiences will be wrong.

## Acceptance criteria
Payout-per-minute of immediate-response play strictly dominates batch-at-expiry play in a spreadsheet before it's coded.
