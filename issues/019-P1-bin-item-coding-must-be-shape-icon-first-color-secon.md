# Bin/item coding must be shape+icon first, color second — and the FLOW STATE gold wash must not eat the urgency channel

**Priority:** P1  
**Filed by:** UX/Feel Architect (mobile-first, serious)  
**Labels:** accessibility, colorblind, art, game-feel

---

Four item types (pencils, paper, clips, stamps) across bins, boxes, request bubbles, and catalog rows. If the coding is color-first, roughly 1 in 12 male players (deuteranopia/protanopia) is playing a sorting game they cannot sort. Everything is drawn in code, so the fix is cheap and should be in the art layer's DNA from day one, not retrofitted:

1. **Silhouette-distinct bins.** Each bin gets a unique lid/profile: pencil bin = angled cup, paper bin = flat tray, clips bin = low tub, stamps bin = slotted box. Distinguishable in grayscale.
2. **An always-on icon glyph** on the bin face, repeated identically in the request bubble, catalog row, and the supply-arc particles. One glyph vocabulary, four glyphs, used everywhere. (The supply arc particles matter: when two arcs are in flight during a combo, the player confirms correctness by particle shape.)
3. **Palette check.** Run the four item hues + the three urgency stage colors through a deuteranopia simulation (a 20-line canvas filter in dev tools, or any LMS-matrix simulator). Red-ring-means-panic fails for exactly the players this ticket is about — the tick-pulse motion from the timer ticket is the true urgency channel; color is reinforcement.
4. **FLOW STATE gold wash.** A full-screen golden overlay is precisely the kind of juice that flattens hue contrast and erases WARN vs CRITICAL. Spec FLOW STATE as vignette + particle + palette-shift-of-the-*floor*, leaving bubbles and bins at full contrast. The reward must never degrade the information the player needs to keep the reward.

Acceptance: grayscale screenshot of the dock + 4 request bubbles — all four item types identifiable; same screenshot under FLOW STATE — urgency stages still distinct.
