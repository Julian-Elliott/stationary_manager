# Timer rings are illegible at 6–8 concurrent requests on a 5.4" screen — spec a 3-stage urgency system and collapse the REPLY-ALL STORM into one stacked bubble

**Priority:** P1  
**Filed by:** UX/Feel Architect (mobile-first, serious)  
**Labels:** readability, hud, escalation, mobile

---

Each request bubble carries item + qty + a shrinking timer ring, floats over an iso desk in the top half of a portrait screen — the far end of the visual field from the dock where the player's eyes and thumb live. At 6 desks, and 8 during REPLY-ALL STORM, this channel saturates.

Specific problems:

1. **Ring-as-clock is ambiguous.** A 60%-full ring means nothing without knowing the request's total duration. Players don't read rings; they read *stages*. Spec three: CALM (>50%, static), WARN (<50%, tick pulse at 1Hz), CRITICAL (<20%, fast pulse + a directed glow on the nearest screen edge pointing at that desk). The edge glow is the important one — it puts urgency into peripheral vision so the player can keep their eyes on the dock and still know Marjorie is about to file a strike.
2. **Minimum sizes.** Ring diameter ≥40px with the item icon ≥24px inside it, stroke ≥3px. At 6 bubbles this will crowd — spec a fan/stack collision rule for adjacent iso desks (Deborah and Dave will overlap; decide now, not in a hotfix).
3. **REPLY-ALL STORM: collapse 8 identical paper requests into ONE bubble with a x8 stack counter** that decrements per delivery. This is simultaneously the readability fix and the better joke — a reply-all thread IS one bubble that says x8. Eight separate identical bubbles is visual noise that reads as a bug.
4. **Number the qty in the bubble, always.** '12' next to a pencil icon. Quantities are the resource-math the player is doing; don't make them tap to inspect.

Acceptance: screenshot test at 390x844 with 6 concurrent requests + storm active; every bubble's item, qty, and urgency stage identifiable at arm's length (literally — hold the phone at arm's length).
