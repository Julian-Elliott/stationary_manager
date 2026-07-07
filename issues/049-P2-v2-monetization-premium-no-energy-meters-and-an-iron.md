# v2 monetization: premium, no energy meters, and an ironclad rule that no ad ever interrupts the narrator

**Priority:** P2  
**Filed by:** solodev_ren (solo indie dev, ships mobile games)  
**Labels:** monetization, v2, design

---

Thinking ahead so v1 code doesn't paint us into a corner. My take after shipping a few small paid mobile games:

**The rule that matters most:** the narrator's priority-3 beats freeze timers and letterbox the screen. That is EXACTLY the slot where every ad SDK wants to inject an interstitial — 'natural break point'. If an ad ever plays during or adjacent to NARRATOR TIME, the fiction is dead: the all-powerful AI who took every computer into hyperspace apparently can't stop a Raid Shadow Legends spot. **No ads mid-narration is not a preference, it's a design constraint.** Honestly: no ads, full stop.

**What I'd actually do:**
- **Web demo → premium app.** Days 1-2 free on itch/web (through the REPLY-ALL STORM, ending on THE BUTTON rising from the floor with its DO NOT PRESS warning — that is a cliffhanger paywall that sells itself). $4.99 one-time on stores for the full 6 days + all 16 assessments.
- **No energy, no timers, no soft currency.** The in-game economy (pencils $1/dozen, the absurd $15 pallet of 10,000 clips) is a joke about procurement. The moment real money touches supply purchasing, the joke inverts and you become the thing the game is satirizing.
- If we want a second SKU later: **cosmetic stationery** (desk skins, novelty staplers) sold diegetically through the same catalog UI, with the narrator disapproving of your spending. That's v2+, but v1 should keep the catalog rendering data-driven so new catalog pages are content, not code.
- **Tip jar** on the win screen, in-fiction: an actual office donations jar sprite. Costs nothing to add, and narrator commentary on tipping writes itself.

Action for v1: just keep monetization hooks OUT and keep the demo/full day-gating trivially flaggable (a `MAX_DAY` const, basically).
