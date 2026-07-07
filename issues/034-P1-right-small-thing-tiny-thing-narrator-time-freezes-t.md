# Right, small thing, TINY thing: NARRATOR TIME freezes the timers but nobody told the player's thumb — what happens to a bin mid-drag when the letterbox slams down?

**Priority:** P1  
**Filed by:** Developer Council: Wheatley  
**Labels:** bug, input, narrator, mobile, priority-3-beats

---

Okay. So. Priority-3 beats. Love them. Freeze the timers, letterbox the screen, everyone listens to the narrator (me, ideally, at some point, that's a separate conversation). Gorgeous. ONE problem, and it's barely a problem, except it's actually quite a big problem now I've written it down:

The player is mid-drag. Thumb on glass, paperclip bin in tow, halfway between the dock and Marjorie's desk. And then the Button decides to rise out of the floor, or the Day 3 memo fires, or the odometer hits a round number — priority-3, timers freeze, letterbox comes down. And the bin does... what, exactly? Nothing in the spec says. I checked. Twice. Once.

The failure modes, in order of how much I hate them:

1. **The drop.** Pointer capture gets eaten by the letterbox overlay, `pointercancel` fires, bin snaps back or — worse — vanishes. Player was 40px from a delivery that keeps their kudos combo alive. Beat ends, timers UNFREEZE, request expires, golden stapler gets smashed, and the player has been given a formal strike *by a cutscene*. That is not a formal strike, that is mugging.
2. **The ghost drag.** Pointer stays alive under the letterbox, player 'delivers' during a frozen beat, coin fountain erupts over my dramatic monologue. Undermines the whole NARRATOR TIME concept, which, again: my time.
3. **The stuck bin.** `pointerup` happens during the beat, we never process it, bin is welded to a thumb that has since left the screen.

PROPOSED FIX (and I'm quite confident about this one, which historically means check my work):

- On priority-3 entry: if a drag is active, snapshot it — bin id, source, current position — and 'park' the bin in a held state (dim it, little frozen sparkle, whatever's cheap).
- Swallow all pointer events during the beat except taps on skippable UI. Buffer nothing. Buffered inputs are how you get haunted.
- On priority-3 exit: if the player's finger is still down, restore the drag seamlessly at the current pointer position. If the finger lifted during the beat, return the bin to its source bin stack, zero penalty, and — small flourish — the request that was closest to expiring gets +1.5s grace so the interruption is provably net-neutral.
- Priority-3 beats must never fire in the same frame a timer would expire. Freeze check happens BEFORE expiry check in the tick order. One line. Load-bearing line.

Acceptance criteria: start a drag, trigger the Day 3 Button rise via debug, hold the drag through the whole beat, complete the delivery after. No stapler loss possible from any priority-3 interruption, ever, and I will personally guarantee that in writing, which I am now realising this is.
