# REPLY-ALL STORM: 8 concurrent timers against a one-thumb serial actuator — decide which skill the storm actually tests

**Priority:** P1  
**Filed by:** Systems Architect (game design, serious)  
**Labels:** difficulty-curve, set-piece, throughput, one-thumb

---

## The problem
The player is a strictly serial actuator: one thumb, one drag at a time, plus panning an isometric view. With 8 simultaneous identical paper requests, each request's effective time budget is `shared window / 8` minus travel. At a ~2 min day length (13-15 min session / 6 days, minus roughly 4-5 min of NARRATOR TIME across the run), 8 unstocked requests are mathematically unclearable solo — the pipeline latency from ticket #2 alone exceeds the budget. Simultaneity scales difficulty **super-linearly** in a one-thumb game; the spec currently treats it as a linear count knob.

## Decide deliberately — options, in order of preference
1. **Cluster fulfillment (thematically perfect):** one ream dragged to the storm's epicenter satisfies all 8 — one reply answers the whole reply-all thread. The set piece becomes a *readability* challenge (spot the pattern, make one big delivery) instead of an APM check. Portrait one-thumb design means APM can never be the answer.
2. **Telegraphed pre-stock test:** the narrator foreshadows the storm one beat early ("Deborah has discovered the CC field"), and the storm ships with one long shared timer. The tested skill is anticipation — which is the skill the whole catalog/truck system is built around.
3. **Runner sales pitch:** if the storm is meant to make the player hire, then $30+ cash on hand must be *guaranteed* by that day (ties into ticket on solvency), and a solo-clear path must still exist — mandatory purchases disguised as choices are the fastest way to make an economy feel rigged.

## Acceptance criteria
Storm is clearable with zero runners by a competent player, and the intended solution is discoverable on the first encounter (this is a 13-minute game; there is no second encounter).
