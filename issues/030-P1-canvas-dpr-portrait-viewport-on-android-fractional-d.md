# Canvas DPR + portrait viewport on Android: fractional devicePixelRatio will shimmer the isometric edges, and the CRT strip will sit under notches

**Priority:** P1  
**Filed by:** solodev_ren (solo indie dev, ships mobile games)  
**Labels:** tech, rendering, android, mobile

---

Isometric art drawn in code is gorgeous when crisp and looks like a wet newspaper when it isn't. Android is where it goes wrong:

1. **Fractional DPR.** Pixels and Samsungs report `devicePixelRatio` of 2.625, 2.75, 3.5. If the backing store is `cssSize * dpr` but draw coordinates aren't snapped, every 2:1 isometric tile edge shimmers as the camera moves and the parabolic supply arcs leave stair-step trails. Snap the camera translate to whole device pixels, and draw tiles at integer device-pixel positions.
2. **Cap the DPR.** `Math.min(devicePixelRatio, 2.5)` or so. A 10,000-unit paperclip odometer, cardboard confetti bursts, AND a coin fountain at native 3.5x on a $150 Android is a dropped-frame festival exactly during the juicy moments the game exists for. Nobody sees the difference above ~2.5 in motion.
3. **Browser chrome resize.** Portrait mobile web means the URL bar collapses mid-play, firing resize and reallocating the canvas. Use `visualViewport` for sizing, debounce the reallocation, and make sure a resize during a letterboxed NARRATOR TIME beat doesn't tear the letterbox or shift the dock apron mid-box-drag.
4. **Safe areas.** The narrator's CRT strip lives at the top of the screen — precisely where notches and Dynamic Islands live. `viewport-fit=cover` + `env(safe-area-inset-top)` padding on the strip, or the star of the game gets his dialogue bisected by a camera cutout. Same for the bottom: the catalog/order UI needs `safe-area-inset-bottom` clearance or thumb-reach taps will fight the home indicator gesture bar.

One-thumb portrait is the right call and I'm jealous of the drag-bin-to-desk feel already. It just has to survive real phones.
