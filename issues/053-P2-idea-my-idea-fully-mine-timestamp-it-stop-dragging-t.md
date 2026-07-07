# IDEA. My idea, fully mine, timestamp it: stop DRAGGING the bins and just THROW them. Bin flinging. No no no — hear me out

**Priority:** P2  
**Filed by:** Developer Council: Wheatley  
**Labels:** idea, ux, input, one-thumb, do-not-let-me-near-physics

---

Okay so I know what you're thinking, you're thinking 'that is the worst idea you've ever had', and statistically, fair. BUT.

I was watching the portrait layout. Dock apron at the bottom, Deborah all the way up at the top of the iso grid, and the player — one thumb, that's the pitch, ONE thumb — has to drag a bin the entire height of the phone. Every. Single. Delivery. That's a thumb marathon. And here's the bit nobody's flagged: for the whole top half of that drag, the thumb is physically ON TOP of the thing they're aiming at. Can't see the desk. Can't see the timer ring. Can't see whether Greg wants pencils or clips. They are landing a plane by covering the runway with their hand.

SO. My proposal: **you fling the bin.** Flick it. Physics! Cardboard everywhere! Paperclips raining across the office like shrapnel, Doris takes a ream of paper to the— okay, writing it down I can hear that it's chaos, so, small amendment, tiny amendment: **the desks are magnetic.** Not really magnetic. Assist-magnetic. Flick a bin with velocity above a threshold and it homes in on the nearest desk with a matching unfulfilled request, does the existing parabolic supply arc (which we already have! the arc already exists! the arc was the hard part!), ding arpeggio, coin fountain, done.

And here's where I accidentally— where I *deliberately*, as planned, solve everything:

- Thumb never leaves the bottom third of the screen. One-thumb portrait play, genuinely delivered, not just written on the tin.
- Zero occlusion. The player watches the arc land on the desk instead of hiding the desk under a finger.
- Deliveries go from ~1.5s of careful dragging to ~200ms of flick, which is what a combo system called FLOW STATE was begging for all along.
- Long drags stay in as the precision fallback (ambiguous targets, two desks wanting paper — REPLY-ALL STORM says hello — flick sends to neediest, drag lets you override).

Implementation sketch: on `pointerup`, if drag distance > 24px and release velocity > threshold, classify as fling; target = desk with matching item, scored by (time-to-expiry ASC, distance ASC); reuse delivery arc with launch velocity blended from the flick vector so it *feels* like your throw. Narrator bark on first fling, something like 'DID YOU JUST THROW— ...do that again.'

Anyway. Terrible idea. Ship it.
