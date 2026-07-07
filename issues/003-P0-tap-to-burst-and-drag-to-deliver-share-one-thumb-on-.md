# Tap-to-burst and drag-to-deliver share one thumb on one dock — define the disambiguation contract before any other input code is written

**Priority:** P0  
**Filed by:** UX/Feel Architect (mobile-first, serious)  
**Labels:** input, touch, core-loop, mobile

---

Boxes are tapped 1–3x to burst; bins are dragged to desks. Both live on the dock apron, both are cardboard-ish rectangles, and on a 375pt-wide portrait screen they will sit within centimeters of each other. This is the single highest-risk interaction in the game, because every other system (combos, kudos, the Day 6 reconciliation) sits on top of it.

Concrete failure modes to design against:

1. **Tap drift becomes a phantom drag.** A player on a bus taps a box with 14px of finger drift. If the drag threshold is naive (`pointermove` at all = drag), the box neither bursts nor moves and the player learns 'tapping is unreliable' in the first minute. Spec a movement slop of ~10–12px (roughly 8dp) *and* a time component: movement within the first 80ms is still a tap candidate.
2. **Drag starts on the wrong object.** Bins and boxes overlap after a 3-box truck drop. Hit-testing must prefer bins for drags and boxes for taps — resolve by gesture type after the slop threshold, not by z-order at pointerdown.
3. **Every tap must do something.** Tapping a bin (wrong verb) should not be a null input. Cheapest fix with the biggest payoff: bin wiggles and emits a ghost arrow toward the neediest desk — the failed input becomes a hint. Tapping an already-burst box scrap = confetti puff. Null inputs are where mobile players silently churn.
4. **Hit targets.** Minimum 48dp effective hitbox on boxes and bins regardless of sprite size — expand invisibly. In iso projection the *visual* footprint of a box is a diamond; make the hitbox the bounding rect, not the diamond, or edge taps will whiff.
5. **Do not use long-press as the drag initiator.** This is a throughput game with a combo meter; a 350ms hold tax on every delivery caps the ceiling of FLOW STATE and makes x5 feel like fighting the controls.

Acceptance: a test page with 3 boxes + 4 bins in dock positions; 20 rapid alternating burst/deliver actions with a thumb (not a mouse cursor) produce zero misclassified gestures.
