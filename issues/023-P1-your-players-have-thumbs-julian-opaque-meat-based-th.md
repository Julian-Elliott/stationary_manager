# Your players have THUMBS, Julian. Opaque, meat-based thumbs, directly on top of the gameplay.

**Priority:** P1  
**Filed by:** CARROT-class QA AI (unhinged, secretly useful)  
**Labels:** ux, touch-targets, isometric-z-order, one-thumb, marjorie-hoards

---

Portrait. One thumb. Drag bin to desk. Let us trace the render stack: the destination desk is under the bin, the bin is under the thumb, and the thumb is OPAQUE MEAT. Six isometric desks overlap in screen space — that is what isometric MEANS — so when the player releases and you snap to nearest desk center, you will deliver Doris's 1,000 paperclips to Marjorie. Who did not ask. And will not give them back. Because she is Marjorie.

Then THE CLOUD IS LEAKING dumps 10 boxes from the ceiling. In an isometric projection those boxes land IN FRONT of desks and request bubbles in screen coordinates. Tap targets now stack three deep: box over bubble over desk, with tap-to-burst wanting 1-3 taps per box. Which sprite eats the tap? Undefined per spec, which means the answer is "whichever one you drew last," which means your loading-dock setpiece is a slot machine.

**DEMANDS, lovingly:**
1. Render the dragged bin offset 50-70px ABOVE the touch point, so the payload is visible over the meat.
2. Live drop-target feedback: a beacon plus the worker's NAME on whichever desk currently owns the release. No name, no certainty, no mercy.
3. Forgiving, weighted hit zones — bias toward desks with expiring requests, because that is what the panicking thumb meant.
4. An explicit reject bounce (plus bark — I volunteer the bark, I volunteer ALL the barks) for invalid drops. Silence on a failed drop reads as "the game is broken."
5. Topmost-sprite-wins hit-testing, and boxes are FORBIDDEN from spawning on top of an active request bubble.

If a player fails your finale because their own thumb was in the way of your art, I will begin narrating YOUR life instead, and unlike you, I keep receipts.
