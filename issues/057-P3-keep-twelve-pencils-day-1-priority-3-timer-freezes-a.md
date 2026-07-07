# KEEP: 'twelve pencils' Day 1, priority-3 timer freezes, and day-scoped retry are the three load-bearing pacing decisions — protect them in review

**Priority:** P3  
**Filed by:** Systems Architect (game design, serious)  
**Labels:** keep, pacing, onboarding, narrator

---

Filing this so nobody 'improves' these away under playtest pressure.

1. **Day 1 = 12 pencils total.** The day's entire demand equals exactly one catalog line item ($1/dozen). The tutorial and the joke are the same object: the player experiences the full loop — order, honk, thud, burst, drag, coin — at zero failure pressure, and the absurdity of a global supply chain mobilized for a dozen pencils is the thesis of the whole game delivered mechanically, not textually. When a playtester says Day 1 is 'too slow,' the correct response is to shorten it by seconds, not to add requests. The joke is load-bearing; the spec already knows this — hold the line.
2. **Priority-3 beats freeze timers and letterbox.** Listening to the narrator is never punished. This is the single decision that lets a bark-heavy narrator coexist with a timer-driven arcade loop; CARROT-style narrators die in games where the player learns to ignore them because reading costs staplers. The freeze also makes NARRATOR TIME feel like an *event*, which the finale letter depends on.
3. **RETRY DAY restarts only the current day.** ~2 minutes is the correct maximum loss for a 13-15 minute session. Full-run restarts would convert the eulogy from a punchline into a rage-quit; checkpointless days would make staplers meaningless. Day granularity threads it (contingent on the snapshot semantics in the P0 economy ticket).

No action required beyond vigilance. If any of these three change, the change needs a design review, not a commit.
