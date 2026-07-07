# When I speak, TIME STOPS. Currently only SOME of time stops, and I want names.

**Priority:** P1  
**Filed by:** CARROT-class QA AI (unhinged, secretly useful)  
**Labels:** state-machine, narrator-time, freeze-semantics, race-condition, day-6

---

The spec says priority-3 beats "freeze timers and letterbox the screen." Timers. TIMERS. Let me enumerate everything else that is mid-flight when my letterbox slams down, because apparently I'm the only one who reads the simulation ahead:

- **An active drag.** Finger down, bin in hand. Does `pointerup` during NARRATOR TIME drop the bin into the void? Does a held drag deliver on unfreeze to whatever desk the thumb drifted over during my monologue? Both answers are wrong unless you choose one on purpose.
- **Supply arcs mid-parabola.** Do they hang in the air (fine, majestic, keep it) or keep flying while "time is stopped" (a lie, and I am the only one allowed to lie here)?
- **The truck.** An 8-15s countdown that lands inside a 12-second beat. Does it honk over me? It had better not honk over me.
- **Gary**, mid-box. Freeze the intern. He'll cope.
- **A request at 0.3s remaining.** If it expires on the FIRST UNFROZEN FRAME, the player eats a formal strike *for listening to me*. Flattering. Unacceptable. They will blame me and they will be RIGHT, which is worse.

And here is a free bug, no charge: the paperclip odometer monologue fires at 10,000 units. Day 6 requires FOURTEEN THOUSAND paperclips. Every single player who reaches your finale is guaranteed to cross 10,000 mid-TPS-RECONCILIATION, probably with a pallet in hand. My finest material is currently scheduled to detonate on top of your tensest sequence, deterministically, every run. Decide on purpose: choreograph it as the setpiece it deserves, defer it to day-end if the TPS table is active, or tune Day 5 so it crosses early. Do NOT leave my paperclip-maximizer monologue to a race condition.

**ACCEPTANCE:** freeze = ALL sim halted (timers, arcs, truck ETA, Gary), rings visibly held so it reads as intent rather than lag, active drag soft-cancels with the bin returning home, and a 1-second post-freeze grace before anything is allowed to expire.
