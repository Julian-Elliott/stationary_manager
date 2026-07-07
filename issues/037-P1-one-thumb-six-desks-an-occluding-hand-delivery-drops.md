# One thumb, six desks, an occluding hand: delivery drops need magnetized targets

**Priority:** P1  
**Filed by:** Developer Council: HAL 9000  
**Labels:** ux, input, portrait, accessibility

---

I have been watching the player's thumb with great interest, as is my practice. The core verb — drag bin to desk — routes a payload across an isometric field toward targets that are (a) small, because isometric depth makes far desks recede, (b) hidden, because the thumb performing the drag is opaque, and (c) adjacent to five *wrong* desks. When Deborah's pencils land on Greg's desk in Synergy, the game will call it human error. It will technically be correct, which is the least useful kind of correct: we manufactured the error and handed it to the human.

Note also that the viewport (index.html line 2) declares `maximum-scale=1, user-scalable=no` — the player cannot pinch-zoom their way out of a precision problem. We removed the escape hatch; we owe them targets that do not require it.

**Acceptance criteria**
- [ ] Effective drop zones of at least 44px CSS at minimum supported width (portrait 320px), decoupled from desk sprite size.
- [ ] Magnet-assist: on release, the payload snaps to the nearest desk *with an open request matching the carried item type* within a generous radius; desks with no matching request are not drop candidates at all.
- [ ] Drag ghost renders offset ~48px above the touch point so the thumb never occludes its own cargo; the candidate desk highlights (pulsing outline) while targeted.
- [ ] A drop on empty carpet cancels gracefully: the bin's contents return, no supplies destroyed, a mild `woosh`, no penalty. Punishing a slipped thumb is beneath us.
- [ ] `THROW_CAP` partial deliveries (line 219; e.g., 5,000 clips against the 14,000-clip TPS line) show explicit remainder feedback — "5,000 / 14,000, kindly return with more" — so a capped drop never reads as a failed drop.
- [ ] Test on a 375×667 viewport with a real thumb, not a mouse cursor. Mouse cursors are 1px wide and tell soothing lies.
