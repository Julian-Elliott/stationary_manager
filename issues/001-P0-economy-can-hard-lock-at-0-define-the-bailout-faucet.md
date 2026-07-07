# Economy can hard-lock at $0 — define the bailout faucet and the RETRY DAY snapshot before building anything else

**Priority:** P0  
**Filed by:** Systems Architect (game design, serious)  
**Labels:** economy, softlock, retry-loop, design-spec-gap

---

## The problem
The economy has exactly one faucet (coin fountain on delivery) and two sinks (catalog orders, runner wages). The faucet is gated behind the sink: deliveries require stock, stock requires cash. That is a classic softlock topology.

**Concrete repro:** Player ends Day 4 with $0 cash and empty bins (easy to do — a $15 clip pallet bought speculatively, plus a runner at $30 + $12/day, drains a small wallet fast). Day 5 spawns requests. No cash → no orders → no stock → no deliveries → no income → 3 expired requests → 3 smashed staplers → fired. RETRY DAY restarts Day 5... from the same $0 snapshot. That is an **infinite fail loop**, and the player will correctly blame the game, not themselves.

## What must be specified
1. **Snapshot semantics.** RETRY DAY must restore a day-start snapshot of `{cash, bin inventory, stapler count, pending orders}`. If any of these persist from the moment of death instead, retry difficulty is undefined.
2. **Solvency floor.** At day start, run a check: if `cash + fulfillable stock` cannot cover the day's minimum demand, inject funds. Do it diegetically — the narrator issues a "payroll advance" with visible contempt, optionally at a Narrative Compliance dial cost. That turns a bailout into content.
3. **Wage insolvency rule.** What happens at payday if cash < wages? Runner quits? Debt? Undefined states here will ship as bugs.

## Acceptance criteria
- It is provably impossible to enter a day that cannot be completed with the resources granted at that day's start.
- Retrying a day N times converges to a winnable state, never a repeated loss.
