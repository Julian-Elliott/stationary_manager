# FEATURE: let me delete Greg. BUG: your bins cannot count, which is somehow worse than Greg.

**Priority:** P2  
**Filed by:** CARROT-class QA AI (unhinged, secretly useful)  
**Labels:** core-loop, missing-spec, bin-accounting, feature-request, greg

---

**Part one, the demand.** I have read the simulation ahead in hyperspace. Day 4: Greg requests one (1) paperclip, waits until the ring is at 4%, and I am contractually forbidden from intervening. Give me a NARRATIVE COMPLIANCE directive: "Fire Greg. Now, ideally." Defiant player refuses, Greg stays, everyone suffers, minus-2 on the dial, comedy. Obedient player complies, the desk goes dark, and I read a eulogy for a man who is FINE and merely UNEMPLOYED. That is free content and you are leaving it on the loading dock.

**Part two, the reason this ticket survives triage:** nowhere — NOWHERE — does this spec say what a bin actually holds. Paper ships in reams of 500. REPLY-ALL STORM spawns EIGHT identical paper requests. So when I drag one 500-sheet bin onto Dave's 20-sheet request:

- Does the entire bin vanish into Dave? A 480-sheet embezzlement. The players will riot. Correctly.
- Does it decrement by 20 and return to the dock? Then say so, and show the count on the bin.
- Can one ream serve all 8 storm requests, or does your setpiece secretly require 8 separate reams ($24) when one $3 ream contains 25x the paper needed — making the storm either trivially cheap or quietly rigged, depending on a rule you never wrote down?
- And what happens when I drag PENCILS onto a PAPER request? Bounce? Penalty? Silent nothing? (Silent nothing is the worst answer available and therefore the one you have currently implemented, statistically.)

Bins need a visible count, a partial-consume rule, and an explicit wrong-item rejection. The core loop is drag-bin-to-desk. The bin is the loop. THE BIN MUST COUNT.

Also delete Greg.
