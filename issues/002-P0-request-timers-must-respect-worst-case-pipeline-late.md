# Request timers must respect worst-case pipeline latency — the 8-15s truck RNG can make stapler losses unpreventable

**Priority:** P0  
**Filed by:** Systems Architect (game design, serious)  
**Labels:** difficulty-curve, failure-state, rng, timing

---

## The problem
The fastest possible fulfillment of an unstocked request is: order (~2s) → truck honk (8-15s, **random**) → tap-burst 1-3x (~1.5s) → drag to desk (~1.5-2s). Worst case ≈ **20 seconds with perfect play**. Request timer duration is unspecified. Any request that (a) targets an item with zero stock and (b) has a timer under ~20-25s is a stapler loss the player cannot prevent — and the 7-second spread on the truck means two identical plays produce different outcomes.

Stapler losses are the game's only hard-failure currency. Every one of them must be attributable to a player decision, or the fail state reads as slot-machine punishment and the retry loop becomes resentment instead of tension. This matters double here because the narrator *mocks you* when you fail — mockery only lands when the failure was earned.

## Required fixes (pick a combination)
1. **Timer floor:** any request for an item not currently in a bin gets a timer ≥ 30s (worst-case pipeline + human reaction + one mistake).
2. **Spawn-time stock weighting:** the request generator checks bin contents and biases toward stocked items early in each day, unstocked items only with long timers.
3. **First-fault protection per item type:** the first time a given item is requested in the run, guarantee a generous timer — it is a tutorial for that catalog row whether you intend it or not.
4. Consider narrowing truck RNG to 8-11s once any active request depends on the shipment. Randomness in *flavor* (honk timing) is fine; randomness in *solvability* is not.

## Acceptance criteria
For every request at spawn time: `timer ≥ (worst-case acquisition latency) + 8s slack`. Instrument this as an assert during playtesting.
