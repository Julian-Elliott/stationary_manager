# First 60 seconds: the funnel currently has three narrator screens and an RNG truck wait before the first dopamine — restructure Day 1's opening beat

**Priority:** P0  
**Filed by:** UX/Feel Architect (mobile-first, serious)  
**Labels:** onboarding, funnel, pacing, day-1

---

Walk the current funnel as specced: cold open (priority-3, frozen, letterboxed) → Day 1 memo (another priority-3) → first request appears → find catalog → order pencils → wait 8–15s for the truck → tap box → drag bin. Time-to-first-meaningful-input is plausibly 45–90 seconds, and the first *juicy* payoff (burst confetti) is gated behind a randomized truck timer on the player's very first order. On mobile web, that is the drop-off window. The 12-pencil joke is load-bearing — but jokes land better on players whose hands are already busy.

Recommendations, in priority order:

1. **Tap-to-advance every narrator line, never auto-timed walls.** Not a skip button — a per-line advance. The narrator can even resent it in character ('Fine. We'll do this at *your* pace.'), which converts an impatience affordance into a character beat for free. Cold open target: ≤12s for a patient player, ≤6s for an impatient one.
2. **Pre-stage one box on the dock at Day 1 start.** First instruction becomes 'tap the box' — burst confetti inside the first 15 seconds, before the catalog is ever opened. The player's first act is the game's best feeling.
3. **Fix the first truck at 8s, don't roll 8–15.** RNG variance is fine once the loop is trusted; on order #1 a 15s silence reads as 'the game is broken'. Bonus: the narrator can fill exactly 8 seconds of honk-anticipation copy, once, scripted.
4. **Catalog first-open should be narrator-directed with a pulsing affordance in the thumb zone**, not discovered. One highlighted line item (pencils, $1/dozen) — the absurd pallet tiers are funnier on the second open, when the player browses voluntarily.

Acceptance: instrument (even just console timestamps in dev) time-to-first-tap, time-to-first-burst, time-to-first-delivery. Targets: <15s, <20s, <45s.
