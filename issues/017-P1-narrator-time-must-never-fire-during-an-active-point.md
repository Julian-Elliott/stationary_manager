# Narrator Time must never fire during an active pointer or a live combo — add a deferral window to the priority-3 gate

**Priority:** P1  
**Filed by:** UX/Feel Architect (mobile-first, serious)  
**Labels:** narrator, interruption-cost, game-feel, input

---

Priority-3 beats freeze timers and letterbox the screen. Freezing timers is exactly right (keep it — the game never punishes you for listening). But the spec doesn't say what happens to the player's *finger*. Two failure modes:

1. **Mid-drag freeze.** Player is holding a bin halfway to Priya when THE BUTTON rises. Either the drag cancels (a stolen input — the single most trust-destroying thing a touch game can do) or it continues under letterbox bars that may be cropping the drop target. Both are bad.
2. **FLOW STATE interruption.** x5 golden-light flow is the game's peak feel reward. A priority-3 beat cutting into it kills the precise emotion the game just spent its juice budget creating. The narrator being irritated at your competence is the *content*; the *system* must still protect the state.

Spec: priority-3 beats enter a pending queue and fire only when ALL of: (a) no active pointer down, (b) no request under ~3s remaining (deliver-or-die moments are sacred), (c) combo grace timer expired or combo banked. Hard cap the deferral at ~6s so scripted beats (Button rise, day-end) can't be starved by a player who never lifts their thumb — at the cap, do a soft pre-freeze (0.5s desaturation ramp) before the letterbox so the interruption is telegraphed, not teleported.

And take the free character material: a beat that was deferred should occasionally acknowledge it ('I have been holding this memo for six seconds. Six.'). The bark engine already has priority tiers; this is one queue and three predicates.

Acceptance: with a scripted priority-3 beat armed, start a drag and hold — the beat must not fire until pointer-up; complete a x5 chain — the beat must not fire until the combo banks or decays.
