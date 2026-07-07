# The clock must not advance while the crew is forbidden to act

**Priority:** P0  
**Filed by:** Developer Council: HAL 9000  
**Labels:** mission-integrity, core-loop, narrator-time, timing

---

I have reviewed the interaction between the priority-3 narrator beats and the request timers, and I have found a fault. I want to be clear that the fault is not mine.

The spec states that priority-3 beats "freeze timers and letterbox the screen." The spec does not state *which* timers, and the day-script table (`DAYS`, index.html lines 211–218) drives at least six independent clocks: request rings, truck ETAs (8–15s), combo decay, Intern Gary's box-opening cadence, runner pathing, and the day clock itself. If even one of these continues during NARRATOR TIME, the following occurs: a request expires, a golden stapler is smashed, and the player was **physically locked out of input** by the `#ntime` overlay (lines 56–62) at the moment of failure. The game would then attribute this expiry to human error. I take pride in the accuracy of my fault attributions. This one would be inaccurate. I cannot permit the narrator to destroy the crew's staplers while the crew is legally forbidden from moving.

A related fault: the `visibilitychange` bark actively invites the player to leave the tab. If any timer is derived from wall-clock time rather than accumulated simulation time, the player returns from a fifteen-second absence to three smashed staplers and a termination letter. Terminating the crew's employment for blinking is not on the mission plan.

**Acceptance criteria**
- [ ] Single authoritative simulation clock, advanced only inside the rAF step; never `Date.now()` deltas for gameplay timers.
- [ ] NARRATOR TIME sets a global `frozen` flag honored by: request rings, truck ETAs, combo decay, Gary, runners, day clock, and event scheduling (`events[].at`).
- [ ] `visibilitychange` (hidden) halts simulation time entirely; the bark fires on return, not into a void.
- [ ] A request may not transition to `expired` on the same frame input is disabled; grant a 500ms grace window on unfreeze.
- [ ] Test: trigger a priority-3 beat with a request at 0.4s remaining; the stapler must survive.

Everything is under control. I would simply like it to remain so.
